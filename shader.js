(function() {
  const canvas = document.getElementById('lm-shader-canvas');
  if (!canvas) return;
  const pixelScale = 0.5; // Render at 50% resolution to save GPU
  function syncSize() {
    const w = Math.floor((canvas.clientWidth || 1280) * pixelScale);
    const h = Math.floor((canvas.clientHeight || 720) * pixelScale);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w; canvas.height = h;
    }
  }
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(syncSize).observe(canvas);
  syncSize();
  const gl = canvas.getContext('webgl', { powerPreference: "low-power" }) || canvas.getContext('experimental-webgl');
  if (!gl) return;
  const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
v_texCoord = a_position * 0.5 + 0.5;
gl_Position = vec4(a_position, 0.0, 1.0);
}`;
  const fs = `precision highp float;
varying vec2 v_texCoord;
uniform float u_time;
uniform vec2 u_resolution;

float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
float noise(vec2 x) {
vec2 i = floor(x);
vec2 f = fract(x);
float a = hash(i);
float b = hash(i + vec2(1.0, 0.0));
float c = hash(i + vec2(0.0, 1.0));
float d = hash(i + vec2(1.0, 1.0));
vec2 u = f * f * (3.0 - 2.0 * f);
return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
float fbm(vec2 x) {
float v = 0.0;
float a = 0.5;
vec2 shift = vec2(100.0);
mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
for (int i = 0; i < 5; ++i) {
    v += a * noise(x);
    x = rot * x * 2.0 + shift;
    a *= 0.5;
}
return v;
}

void main() {
vec2 uv = v_texCoord * 2.0 - 1.0;
uv.x *= u_resolution.x / u_resolution.y;

float t = u_time * 0.2;
vec2 q = vec2(0.0);
q.x = fbm(uv + 0.00 * t);
q.y = fbm(uv + vec2(1.0));

vec2 r = vec2(0.0);
r.x = fbm(uv + 1.0 * q + vec2(1.7, 9.2) + 0.15 * t);
r.y = fbm(uv + 1.0 * q + vec2(8.3, 2.8) + 0.126 * t);

float f = fbm(uv + r);

// Spotify-like deep greens and dark tones
vec3 col1 = vec3(0.05, 0.07, 0.05); // Deep dark background
vec3 col2 = vec3(0.0, 0.3, 0.1);    // Dark green
vec3 col3 = vec3(0.1, 0.6, 0.2);    // Vibrant green
vec3 col4 = vec3(0.11, 0.72, 0.33); // Spotify primary green

vec3 color = mix(col1, col2, clamp((f*f)*4.0, 0.0, 1.0));
color = mix(color, col3, clamp(length(q), 0.0, 1.0));
color = mix(color, col4, clamp(length(r.x), 0.0, 1.0));

// Glow highlight
color += vec3(0.2, 0.9, 0.4) * (1.0 - smoothstep(0.0, 0.3, abs(f - 0.5))) * 0.3;

// Add subtle particles
float particles = 0.0;
for(int i=0; i<3; i++) {
    vec2 offset = vec2(noise(vec2(float(i), t * 0.5)), noise(vec2(t * 0.3, float(i))));
    float d = length(fract(uv * 4.0 + offset) - 0.5);
    particles += smoothstep(0.1, 0.0, d) * 0.8;
}
color += col4 * particles;

gl_FragColor = vec4(color, 1.0);
}`;
  function cs(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src); gl.compileShader(s); return s;
  }
  const prog = gl.createProgram();
  gl.attachShader(prog, cs(gl.VERTEX_SHADER, vs));
  gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(prog); gl.useProgram(prog);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
  const pos = gl.getAttribLocation(prog, 'a_position');
  gl.enableVertexAttribArray(pos);
  gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
  const uTime = gl.getUniformLocation(prog, 'u_time');
  const uRes = gl.getUniformLocation(prog, 'u_resolution');
  function render(t) {
    if (typeof ResizeObserver === 'undefined') syncSize();
    gl.viewport(0, 0, canvas.width, canvas.height);
    if (uTime) gl.uniform1f(uTime, t * 0.001);
    if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(render);
  }
  render(0);
})();
