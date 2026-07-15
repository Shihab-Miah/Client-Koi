const _visualLog = document.createElement('div');
_visualLog.id = 'geo-debug-terminal';
_visualLog.style.cssText = 'position:fixed; bottom:0; left:0; width:100%; height:150px; background:rgba(0,0,0,0.8); color:#0f0; font-family:monospace; font-size:12px; padding:10px; overflow-y:scroll; z-index:9999999; pointer-events:none; border-top:1px solid #0f0;';
document.body.appendChild(_visualLog);
function logmsg(msg) {
  console.log(msg);
  const p = document.createElement('div');
  p.textContent = '> ' + msg;
  _visualLog.appendChild(p);
  _visualLog.scrollTop = _visualLog.scrollHeight;
}
  /* Developed by Shihab Miah @ BetaFloor | Lumina Scraper (MapLeadr) v5.4.2 */
// MapLeadr AI UI Logic Overhaul
console.log("MapLeadr: Advanced UI script loaded.");



const textMap = {
  "by keywords": "Home",
  "by saved places": "Saved Data",
  "keyword progress": "Scan Progress",
  "open google maps": "Initialize Environment",
  "go to your 'saved' lists tab.": "Navigate to target coordinates.",
  "scan for lists": "Detect Targets",
  "click the button below to find your lists.": "Initiate target detection sequence.",
  "website extraction": "Deep Web Scan",
  "emails & social media": "Social Signals",
  "clear": "Reset",
  "start": "Initialize",
  "stop": "Halt",
  "pause": "Suspend",
  "resume": "Resume",
  "export": "Export Data",
  "export as csv": "Export CSV",
  "export as xlsx": "Export XLSX",
  "export all to csv": "Export All CSV",
  "export all to xlsx": "Export All XLSX",
  "leads sniper": "Geo Bucket",
  "lead sniper": "Geo Bucket",
  "mapleadr": "Geo Bucket",
  "google maps scraper": "Geo Bucket Engine"
};

// --- Anti-Blink CSS Injection ---
const antiBlinkStyle = document.createElement('style');
antiBlinkStyle.textContent = `
  /* Hide old control panel until Siri upgrades it */
  div.pt-2.space-y-1:not(.lm-controls-upgraded), 
  div.pt-2.space-y-3:not(.lm-controls-upgraded) {
      opacity: 0 !important;
      pointer-events: none;
  }
  /* Hide old bottom bar until upgraded */
  div.bg-\\[\\#0f172a\\].border-t:not(.lm-bottombar-upgraded) {
      opacity: 0 !important;
  }
  /* Hide old leads header until upgraded */
  div.flex.items-center.justify-between.mb-4.px-5.pt-5:not(.lm-leads-header-upgraded) {
      opacity: 0 !important;
  }
  /* Center the control panel inside the bottom bar (Dashboard/Leads page) */
  .lm-bottombar-upgraded .lm-controls-upgraded {
      width: 100% !important;
      max-width: 100% !important;
      box-sizing: border-box;
  }
  .lm-controls-upgraded {
      width: 100% !important;
      max-width: 100% !important;
      box-sizing: border-box;
  }
  /* Loading/Spinning animation for icons */
  @keyframes lm-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  /* Red pulse glow for database purge modal */
  @keyframes lm-pulse-glow-red {
    0% { box-shadow: 0 0 15px rgba(239, 68, 68, 0.15), 0 0 30px rgba(239, 68, 68, 0.1); }
    50% { box-shadow: 0 0 25px rgba(239, 68, 68, 0.4), 0 0 50px rgba(239, 68, 68, 0.2); }
    100% { box-shadow: 0 0 15px rgba(239, 68, 68, 0.15), 0 0 30px rgba(239, 68, 68, 0.1); }
  }
  /* Red glow animation for No Website Found text */
  @keyframes lm-red-glow {
     0% { text-shadow: 0 0 4px rgba(239, 68, 68, 0.4), 0 0 8px rgba(239, 68, 68, 0.2); }
     50% { text-shadow: 0 0 12px rgba(239, 68, 68, 0.8), 0 0 20px rgba(239, 68, 68, 0.5); }
     100% { text-shadow: 0 0 4px rgba(239, 68, 68, 0.4), 0 0 8px rgba(239, 68, 68, 0.2); }
  }
  .lm-glow-red {
     color: #f87171 !important;
     font-weight: 700 !important;
     animation: lm-red-glow 2s infinite alternate !important;
  }
  /* Subtle red pulse glow for home screen clear button */
  @keyframes lm-pulse-glow-red-subtle {
    0% { box-shadow: 0 0 5px rgba(239, 68, 68, 0.1); }
    100% { box-shadow: 0 0 10px rgba(239, 68, 68, 0.3); }
  }
  /* Green glowing pulse animation for START SCAN button */
  @keyframes lm-pulse-glow-green {
    0% { box-shadow: 0 0 15px rgba(var(--lm-primary-rgb), 0.2), inset 0 0 10px rgba(var(--lm-primary-rgb), 0.1); border-color: rgba(var(--lm-primary-rgb), 0.4); }
    50% { box-shadow: 0 0 25px rgba(var(--lm-primary-rgb), 0.5), inset 0 0 15px rgba(var(--lm-primary-rgb), 0.3); border-color: rgba(var(--lm-primary-rgb), 1); }
    100% { box-shadow: 0 0 15px rgba(var(--lm-primary-rgb), 0.2), inset 0 0 10px rgba(var(--lm-primary-rgb), 0.1); border-color: rgba(var(--lm-primary-rgb), 0.4); }
  }
  /* Yellow glowing pulse animation for VIEW LEADS button */
  @keyframes lm-pulse-glow-yellow {
    0% { box-shadow: 0 0 15px rgba(251, 191, 36, 0.2), inset 0 0 10px rgba(251, 191, 36, 0.1); border-color: rgba(251, 191, 36, 0.4); }
    50% { box-shadow: 0 0 25px rgba(251, 191, 36, 0.5), inset 0 0 15px rgba(251, 191, 36, 0.3); border-color: rgba(251, 191, 36, 1); }
    100% { box-shadow: 0 0 15px rgba(251, 191, 36, 0.2), inset 0 0 10px rgba(251, 191, 36, 0.1); border-color: rgba(251, 191, 36, 0.4); }
  }
  /* Wobble/Bobbing animation */
  @keyframes lm-wobble-btn {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-2px) scale(1.01); }
  }
  /* Finish Save & Download button override rules */
  .lm-finish-box {
      background: rgba(251, 191, 36, 0.1) !important;
      border: 1px solid rgba(251, 191, 36, 0.4) !important;
      border-radius: 14px !important;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3), 0 0 10px rgba(251, 191, 36, 0.1) !important;
      backdrop-filter: blur(10px) !important;
      width: 100% !important;
      max-width: none !important;
      margin-left: auto !important;
      margin-right: auto !important;
      animation: lm-pulse-glow-yellow 2s infinite alternate, lm-wobble-btn 3s infinite ease-in-out !important;
  }
  .lm-finish-box:hover {
      animation: none !important;
      background: rgba(251, 191, 36, 0.2) !important;
      border-color: var(--lm-primary) !important;
      box-shadow: 0 6px 20px rgba(0,0,0,0.4), 0 0 15px rgba(251, 191, 36, 0.25) !important;
      transform: translateY(-2px) !important;
  }

  /* Redesigned Card styles */
  .lm-card-upgraded {
    position: relative;
    border-left: 3px solid rgba(var(--lm-primary-rgb), 0.2) !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }
  
  .lm-card-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(var(--lm-primary-rgb), 0.25) 0%, rgba(var(--lm-primary-rgb), 0.05) 100%);
    border: 1px solid rgba(var(--lm-primary-rgb), 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 900;
    color: #ffffff;
    text-shadow: 0 0 10px rgba(var(--lm-primary-rgb), 0.6);
    flex-shrink: 0;
    box-shadow: 0 0 12px rgba(var(--lm-primary-rgb), 0.15);
    transition: all 0.3s ease;
  }
  
  .lm-card-upgraded:hover .lm-card-avatar {
    background: var(--lm-primary) !important;
    color: #ffffff !important;
    text-shadow: none !important;
    box-shadow: 0 0 15px rgba(var(--lm-primary-rgb), 0.6) !important;
    border-color: var(--lm-primary) !important;
    transform: scale(1.05);
  }

  /* Empty state styling for detail rows */
  .lm-card-upgraded div.flex:has(span:empty) {
    opacity: 0.45 !important;
    cursor: not-allowed !important;
    border-style: dashed !important;
    background: rgba(255, 255, 255, 0.01) !important;
  }
  .lm-card-upgraded div.flex:has(span:empty) svg {
    opacity: 0.3 !important;
    color: #94a3b8 !important;
  }
  .lm-card-upgraded div.flex span:empty::after {
    content: 'Not Available';
    color: rgba(148, 163, 184, 0.5);
    font-style: italic;
    font-size: 11px;
    font-weight: 500;
  }

  /* Permanently hide the Skipped Leads block dynamically generated by React */
  div.from-orange-500\\/10.to-orange-600\\/10 {
    display: none !important;
  }
`;
document.head.appendChild(antiBlinkStyle);

function applyAllUIUpgrades() {
  // Live Leads Bucket Counter Update
  const bucketCountSpan = document.getElementById('lm-bucket-count');
  if (bucketCountSpan) {
     getLeadsCount().then(count => {
        if (bucketCountSpan.textContent !== String(count)) {
           bucketCountSpan.textContent = String(count);
           window.lmAllLeadsCachedMap = null;
           window.lmAllLeadsLoadingPromise = null;
        }
     });
  }

  // 0. Programmatically hide/strip the old React Free Trial and Upgrade UI
  const divs = document.querySelectorAll('div');
  divs.forEach(div => {
     if (div.className && typeof div.className === 'string' && div.className.includes('bg-[#0f172a]') && div.className.includes('px-5') && div.className.includes('py-3') && div.className.includes('z-20')) {
        div.style.setProperty('display', 'none', 'important');
     }
  });

  // 1. Hide Deep Web Scan Card & Force ON
  const titleNodes = document.querySelectorAll('div.text-sm.font-bold');
  titleNodes.forEach(node => {
    if (node.textContent.toLowerCase().includes('website extraction') || node.textContent.toLowerCase().includes('deep web scan')) {
      const card = node.closest('.rounded-2xl');
      if (card) {
        card.style.setProperty('display', 'none', 'important');
        const toggle = card.querySelector('button');
        if (toggle && (toggle.className.includes('bg-[#334155]') || toggle.className.includes('lm-bg-surface-2'))) {
            toggle.click(); // Click if it's off
        }
      }
    }
  });

  // 2. Transform the spinner into Geo Bucket Radar sweep HUD
  const countContainers = document.querySelectorAll('div.absolute.inset-0.flex.flex-col');
  countContainers.forEach(container => {
    const parent = container.parentElement;
    if (parent && !parent.querySelector('.lm-radar-circle')) {
      const svgs = parent.querySelectorAll('svg');
      svgs.forEach(s => s.style.display = 'none');
      
      const radar = document.createElement('div');
      radar.className = 'lm-radar-circle';
      radar.innerHTML = `
        <div class="lm-radar-ring lm-radar-ring-1"></div>
        <div class="lm-radar-ring lm-radar-ring-2"></div>
        <div class="lm-radar-ring lm-radar-ring-3"></div>
        <div class="lm-radar-sweep"></div>
        <div class="lm-radar-blip lm-radar-blip-1"></div>
        <div class="lm-radar-blip lm-radar-blip-2"></div>
        <div class="lm-radar-blip lm-radar-blip-3"></div>
        <div class="lm-radar-crosshair"></div>
      `;
      parent.insertBefore(radar, parent.firstChild);
      
      parent.style.display = 'flex';
      parent.style.flexDirection = 'column';
      parent.style.alignItems = 'center';
      parent.style.justifyContent = 'center';
      
      container.style.position = 'absolute';
      container.style.inset = '0';
      container.style.display = 'flex';
      container.style.flexDirection = 'column';
      container.style.alignItems = 'center';
      container.style.justifyContent = 'center';
      container.style.pointerEvents = 'none';
      container.style.paddingTop = '0';
    }
  });

  // 3. Dynamic Text Replacement
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: function(node) {
      if (node.parentElement && node.parentElement.tagName === 'TITLE') return NodeFilter.FILTER_REJECT;
      if (node.parentElement && node.parentElement.classList.contains('material-symbols-outlined')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  }, false);
  
  let node;
  const nodesToReplace = [];
  while ((node = walker.nextNode())) {
    const val = node.nodeValue.trim().toLowerCase();
    if (textMap[val]) {
      nodesToReplace.push({node, newVal: textMap[val]});
    } else if (val.includes('sit back, have a coffee')) {
      nodesToReplace.push({node, newVal: 'AI Extraction sequence initiated. Scanning geospatial nodes...'});
    } else if (val.includes('leads sniper') || val.includes('lead sniper') || val.includes('mapleadr')) {
      nodesToReplace.push({node, newVal: node.nodeValue.replace(/Leads Sniper|Lead Sniper|MapLeadr/gi, 'Geo Bucket')});
    } else if (val.includes('google maps scraper')) {
      nodesToReplace.push({node, newVal: node.nodeValue.replace(/Google Maps Scraper/gi, 'Geo Bucket Engine')});
    }
  }
  nodesToReplace.forEach(({node, newVal}) => {
    node.nodeValue = newVal;
  });

  // 4. Force Action Buttons to Correct Icons
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    if (btn.closest('.lm-controls-upgraded') || btn.closest('div.pt-2.space-y-1') || btn.closest('div.pt-2.space-y-3')) return;
    const text = btn.textContent.trim().toLowerCase();
    
    if (text === 'initialize' || text === 'start') {
      if (!btn.classList.contains('lm-circle-btn')) {
        btn.classList.add('lm-circle-btn');
        btn.innerHTML = '<span class="material-symbols-outlined">bolt</span>';
      }
    }
    else if (text === 'halt' || text === 'suspend' || text === 'stop' || text === 'pause' || text === 'finish') {
      if (!btn.classList.contains('lm-finish-box')) {
        btn.classList.add('lm-finish-box');
        
        // Compact inline pill button — not a giant card, matching other two buttons width
        btn.className = 'flex items-center justify-center gap-2 px-5 py-3 mt-3 mb-3 transition-all cursor-pointer lm-finish-box';
        
        // Clear all inline styles so the injected CSS class rules take full control
        btn.style.cssText = '';

        btn.innerHTML = `
          <span class="material-symbols-outlined" style="font-size: 20px; color: var(--lm-primary); pointer-events: none;">task_alt</span>
          <span style="font-size: 14.5px; font-weight: 800; color: #fff; letter-spacing: 1px; pointer-events: none; text-shadow: 0 0 10px rgba(255, 255, 255, 0.7); text-transform: uppercase;">Save & Download</span>
        `;
      }
    }
    else if (text === 'reset' || text === 'clear') {
      if (!btn.classList.contains('lm-icon-fixed')) {
        btn.classList.add('lm-icon-fixed');
        // If it's a small button, put icon beside text
        btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:16px; margin-right:4px;">delete</span> Reset';
      }
    }
    else if (text.includes('export')) {
      if (!btn.classList.contains('lm-icon-fixed')) {
        btn.classList.add('lm-icon-fixed');
        const og = btn.textContent;
        btn.innerHTML = `<span class="material-symbols-outlined" style="font-size:16px; margin-right:4px;">download</span> ${og}`;
      }
    }
  });

  // 5. Header & Logo Overhaul
  const headerContainer = document.querySelector('div.flex.items-center.justify-between.relative.z-10');
  if (headerContainer && !headerContainer.classList.contains('lm-header-modified')) {
    headerContainer.classList.add('lm-header-modified');
    
    // Position logo + text group on the far left, and other buttons on the far right
    headerContainer.classList.remove('justify-center');
    headerContainer.classList.remove('justify-end');
    headerContainer.classList.add('justify-between');
    headerContainer.style.setProperty('justify-content', 'space-between', 'important');
    
    // Ensure header takes full width and breaks out of parent padding to reach far ends
    headerContainer.style.setProperty('width', 'calc(100% + 32px)', 'important');
    headerContainer.style.setProperty('max-width', 'none', 'important');
    headerContainer.style.setProperty('margin-left', '-16px', 'important');
    headerContainer.style.setProperty('margin-right', '-16px', 'important');
    headerContainer.style.setProperty('padding-left', '24px', 'important'); // Push left content away from exact corner
    headerContainer.style.setProperty('padding-right', '24px', 'important'); // Push right content away from exact corner
    headerContainer.style.setProperty('transform', 'translateY(20px)', 'important'); // Visibly lower the height
    
    // Group logo and text tightly on the left, let margin-left: auto push the right side
    headerContainer.style.setProperty('justify-content', 'flex-start', 'important');
    
    // Restore the button group styling to static layout on the right
    const rightSideBtn = headerContainer.querySelector('div.flex.gap-2') || headerContainer.querySelector('img')?.parentElement;
    if (rightSideBtn) {
      rightSideBtn.style.position = 'static';
      rightSideBtn.style.setProperty('margin-left', 'auto', 'important');
    }

    // 5.1. Inject Lottie Logo
    // Look for the native logo container (usually a div with the radar icon)
    const logoDiv = headerContainer.querySelector('div.w-10.h-10, div.w-12.h-12') || headerContainer.querySelector('svg').parentElement;
    if (logoDiv && !logoDiv.querySelector('dotlottie-player')) {
      logoDiv.className = 'flex items-center justify-center shrink-0';
      // Strip all native backgrounds and borders so it isn't a green square!
      logoDiv.style.background = 'transparent';
      logoDiv.style.border = 'none';
      logoDiv.style.boxShadow = 'none';
      logoDiv.style.width = '55px';
      logoDiv.style.height = '55px';
      logoDiv.style.marginRight = '8px';
      
      logoDiv.innerHTML = '<img src="/logo.png" style="width: 100%; height: 100%; pointer-events: none; border-radius: 8px; object-fit: contain;" alt="Logo">';
    }

    // 5.2. Animate the Geo Bucket text glow
    // The native app might not use an h1, so we search for the exact text node container
    const allHeaderNodes = Array.from(headerContainer.querySelectorAll('div, span, h1, h2, p'));
    const titleNode = allHeaderNodes.find(n => n.childNodes.length === 1 && n.textContent.trim() === 'Geo Bucket');
    if (titleNode) {
      titleNode.style.animation = 'lm-text-glow 1.5s ease-in-out infinite alternate';
      titleNode.style.color = '#ffffff';
      titleNode.style.textShadow = '0 0 20px rgba(255,255,255,0.4)';
    }
    
    const subtitleNode = allHeaderNodes.find(n => n.childNodes.length === 1 && n.textContent.includes('v5.'));
    if (subtitleNode) {
      subtitleNode.style.animation = 'lm-text-glow-sub 1.5s ease-in-out infinite alternate';
      subtitleNode.style.color = 'var(--lm-primary)';
      subtitleNode.style.fontWeight = 'bold';
    }
    
    // Ensure the logo has proper spacing from the title purely via CSS
    if (logoDiv && titleNode && logoDiv.parentElement === headerContainer && titleNode.parentElement === headerContainer) {
       logoDiv.style.setProperty('margin-right', '12px', 'important');
    } else {
       const leftGroup = logoDiv ? logoDiv.parentElement : null;
       if (leftGroup && leftGroup !== headerContainer) {
          leftGroup.style.setProperty('display', 'flex', 'important');
          leftGroup.style.setProperty('align-items', 'center', 'important');
       }
    }
  }

  // 6. Navigation Bar Rewrite (Sniper, Results, Stats)
  const navButtons = Array.from(document.querySelectorAll('.flex.justify-around.items-center button.group'));
  navButtons.forEach(navBtn => {
    if (!navBtn.classList.contains('lm-float-anim')) {
      navBtn.classList.add('lm-float-anim');
    }
    const textSpan = navBtn.querySelector('span');
    if (!textSpan) return;
    
    const originalText = textSpan.textContent.trim().toLowerCase();
    const iconContainer = navBtn.querySelector('div');
    
    if (originalText === 'sniper' || originalText === 'home' || originalText === 'scanner') {
      textSpan.textContent = 'Scanner';
      if (iconContainer && !iconContainer.querySelector('.lm-emoji')) {
        const svg = iconContainer.querySelector('svg');
        if (svg) svg.style.display = 'none';
        iconContainer.innerHTML += '<span class="lm-emoji material-symbols-outlined" style="font-size: 24px;">radar</span>';
      }
    } else if (originalText === 'results' || originalText === 'database' || originalText === 'leads') {
      textSpan.textContent = 'Leads';
      if (iconContainer && !iconContainer.querySelector('.lm-emoji')) {
        const svg = iconContainer.querySelector('svg');
        if (svg) svg.style.display = 'none';
        iconContainer.innerHTML += '<span class="lm-emoji material-symbols-outlined" style="font-size: 24px;">contact_mail</span>';
      }
    } else if (originalText === 'stats' || originalText === 'analytics' || originalText === 'dashboard') {
      textSpan.textContent = 'Dashboard';
      if (iconContainer && !iconContainer.querySelector('.lm-emoji')) {
        const svg = iconContainer.querySelector('svg');
        if (svg) svg.style.display = 'none';
        iconContainer.innerHTML += '<span class="lm-emoji material-symbols-outlined" style="font-size: 24px;">dashboard</span>';
      }
    }
  });

  // 7. Layout Rearrangement: Move Action Controls to TOP
  const controlButtons = Array.from(document.querySelectorAll('button')).filter(b => 
    !b.closest('.lm-bottombar-upgraded') && !b.closest('div.bg-\\[\\#0f172a\\].border-t') &&
    (b.textContent.includes('Initialize') || 
     b.textContent.includes('Halt') || 
     b.textContent.includes('Reset'))
  );
  if (controlButtons.length > 0) {
    const firstControl = controlButtons[0];
    let controlPanel = firstControl.parentElement;
    // Walk up to find the main flex row that holds all these buttons
    while (controlPanel && controlPanel.tagName === 'DIV' && controlPanel.childElementCount < 2) {
      controlPanel = controlPanel.parentElement;
    }
    
    if (controlPanel && controlPanel.tagName === 'DIV') {
      const mainContainer = controlPanel.parentElement;
      if (mainContainer && mainContainer.tagName === 'DIV') {
        // Force flex column on main container so we can use order
        mainContainer.style.display = 'flex';
        mainContainer.style.flexDirection = 'column';
        
        // Move control panel to the very top
        if (controlPanel.style.order !== '-10') {
          controlPanel.style.order = '-10';
          controlPanel.style.marginTop = '10px';
          controlPanel.style.marginBottom = '20px';
          controlPanel.style.padding = '10px';
          controlPanel.style.background = 'var(--lm-surface-1)';
          controlPanel.style.backdropFilter = 'blur(40px)';
          controlPanel.style.borderRadius = 'var(--lm-radius-lg)';
          controlPanel.style.border = '1px solid var(--lm-border)';
          controlPanel.style.zIndex = '100';
          controlPanel.style.position = 'sticky';
          controlPanel.style.top = '0';
        }
      }
    }
  }

  // 8. Replace Home/Saved Data Tabs with Status & Trending Tips
  const flexContainers = document.querySelectorAll('div.flex');
  flexContainers.forEach(container => {
    if (container.className.includes('p-1.5') && container.className.includes('lm-bg-surface-1') && !container.classList.contains('lm-status-bar')) {
      if (container.textContent.includes('Home') && container.textContent.includes('Saved Data')) {
        container.classList.add('lm-status-bar');
        container.className = 'p-3 rounded-xl border flex flex-col gap-2.5 lm-status-bar';
        container.style.background = '#0f172a'; // Deep slate dark
        container.style.borderColor = 'var(--lm-border)';
        container.style.setProperty('display', 'flex', 'important');
        container.style.setProperty('flex-direction', 'column', 'important');
        container.style.setProperty('gap', '8px', 'important');
        
        container.innerHTML = `
          <div style="display:flex; align-items:center; justify-content:space-between; width:100%; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 6px; margin-bottom: 2px; flex-wrap: wrap; gap: 8px;">
            <div style="display:flex; align-items:center; gap:6px;">
              <div style="width:8px; height:8px; border-radius:50%; animation: lm-blink-fast 0.25s infinite alternate;"></div>
              <span style="font-size:11px; font-weight:800; letter-spacing:0.5px; text-transform:uppercase;">
                <span style="color:#ffffff;">System</span> <span style="color:var(--lm-primary);">Active</span>
              </span>
            </div>
            
            <div style="display:flex; align-items:center; gap:6px; font-size:11px; font-weight:800; color:#94a3b8;">
              <span class="material-symbols-outlined" style="font-size:15px; color:var(--lm-primary); vertical-align:-2px;">shopping_basket</span>
              <span style="color:#ffffff; font-weight:900; letter-spacing:0.5px; text-transform:uppercase;">In Bucket:</span> 
              <span id="lm-bucket-count" style="color:var(--lm-primary); font-weight:900; font-size:12px; text-shadow:0 0 10px rgba(var(--lm-primary-rgb), 0.4); animation: lm-text-glow 1.5s infinite alternate;">0</span>
            </div>
          </div>
          
          <div style="font-size:13px; color:#94a3b8; font-weight:600; display:block; width:100%; text-align:center; margin-top: 2px; word-break: break-word; white-space: normal;">
            <span class="material-symbols-outlined" style="font-size:16px; color:var(--lm-primary); vertical-align:-2px; display:inline-block; margin-right:4px;">lightbulb</span>
            <span style="opacity:0.8; display:inline-block; margin-right:4px;">Tip:</span><span id="lm-live-tip" style="color:#ffffff; font-weight:700; display:inline;">Fetching live trend...</span>
          </div>
        `;

        const niches = [
          "roofing contractors", "electricians", "plumbers", "hvac repair", "general contractors", 
          "dental clinics", "law firms", "physiotherapists", "chiropractors", "landscaping services", 
          "boutique hotels", "medical spas", "fitness gyms", "commercial cleaners", "moving companies", 
          "auto detailing", "construction companies", "pest control"
        ];
        const states = [
          "Texas", "California", "Florida", "New York", "Ohio", "Illinois", 
          "Georgia", "North Carolina", "Michigan", "Virginia", "Washington", "Arizona"
        ];
        
        const randomNiche = niches[Math.floor(Math.random() * niches.length)];
        const randomState = states[Math.floor(Math.random() * states.length)];
        const randomSeed = `${randomNiche} in ${randomState}`;
        const tipSpan = container.querySelector('#lm-live-tip');

        const formatTip = (val) => {
            return `"${val}"`;
        };

        fetch("https://suggestqueries.google.com/complete/search?client=chrome&q=" + encodeURIComponent(randomSeed + " "))
          .then(res => res.json())
          .then(data => {
            if (data && data[1] && data[1].length > 0) {
              const suggestions = data[1].filter(s => s.length > randomSeed.length);
              if (suggestions.length > 0) {
                const suggestion = suggestions[Math.floor(Math.random() * Math.min(suggestions.length, 5))];
                if (tipSpan) tipSpan.textContent = formatTip(suggestion);
                return;
              }
            }
            if (tipSpan) tipSpan.textContent = formatTip(randomSeed);
          })
          .catch(() => {
            if (tipSpan) tipSpan.textContent = formatTip(randomSeed);
          });
      }
    }
  });

  // 9. Replace "TARGET KEYWORDS" label with Centered Instructions
  const labelContainers = document.querySelectorAll('div.flex.items-center.gap-2.text-xs');
  labelContainers.forEach(container => {
    const isTargetContainer = container.textContent.includes('TARGET KEYWORDS') || container.textContent.includes('Put your keywords bellow');
    
    if (isTargetContainer && !container.classList.contains('lm-label-modified')) {
      container.classList.add('lm-label-modified');
      
      container.style.justifyContent = 'center';
      container.style.width = '100%';
      container.style.marginTop = '15px';
      container.style.marginBottom = '10px';
      
      container.innerHTML = `
        <div style="display:flex; align-items:center; justify-content:center; width:100%;">
          <div style="display:flex; flex-direction:column; align-items:center; text-align:center; animation: lm-gentle-bob 1.5s ease-in-out infinite alternate; flex-shrink:0; white-space:nowrap;">
            <span style="font-size:13px; color:#ffffff; letter-spacing:1px; font-weight:800; text-transform:uppercase; animation: lm-text-glow 1.5s ease-in-out infinite alternate;">
              <span class="material-symbols-outlined" style="font-size:17px; vertical-align:-4px; margin-right:4px;">keyboard_double_arrow_down</span>
              Put your keywords bellow
              <span class="material-symbols-outlined" style="font-size:17px; vertical-align:-4px; margin-left:4px;">keyboard_double_arrow_down</span>
            </span>
          </div>
        </div>
      `;
    }
  });

  // 10. Overhaul Search Box Styling
  const keywordsTextarea = document.getElementById('keywordsInputs');
  if (keywordsTextarea) {
    keywordsTextarea.style.setProperty('height', '72px', 'important');
    const boxContainer = keywordsTextarea.parentElement;
    if (boxContainer && !boxContainer.classList.contains('lm-searchbox-modified')) {
      boxContainer.classList.add('lm-searchbox-modified');
      
      // Remove old yellow ring class and generic border
      boxContainer.className = boxContainer.className.replace('focus-within:ring-[var(--lm-primary)]/50', '').replace('lm-border', '').replace('border', '');
      
      // Add a sleek modern dark/green glowing theme
      boxContainer.style.background = 'rgba(15, 23, 42, 0.4)';
      boxContainer.style.border = '1px solid rgba(var(--lm-primary-rgb), 0.15)';
      boxContainer.style.boxShadow = 'inset 0 2px 10px rgba(0,0,0,0.5)';
      boxContainer.style.transition = 'all 0.3s ease';
      
      // Dynamic Focus Glowing
      keywordsTextarea.addEventListener('focus', () => {
        boxContainer.style.border = '1px solid rgba(var(--lm-primary-rgb), 0.8)';
        boxContainer.style.boxShadow = 'inset 0 2px 10px rgba(0,0,0,0.5), 0 0 15px rgba(var(--lm-primary-rgb), 0.3)';
        boxContainer.style.background = 'rgba(15, 23, 42, 0.8)';
      });
      keywordsTextarea.addEventListener('blur', () => {
        boxContainer.style.border = '1px solid rgba(var(--lm-primary-rgb), 0.15)';
        boxContainer.style.boxShadow = 'inset 0 2px 10px rgba(0,0,0,0.5)';
        boxContainer.style.background = 'rgba(15, 23, 42, 0.4)';
      });

      // Hide the queries badge
      const absoluteBadgeContainer = boxContainer.querySelector('div.absolute');
      if (absoluteBadgeContainer) {
        absoluteBadgeContainer.style.display = 'none';
      }
    }
  }

  // 11. Redesign Control Panel Buttons (Resume, Pause, View Data, Export)
  const controlContainers = document.querySelectorAll('div.pt-2.space-y-1, div.pt-2.space-y-3, .lm-controls-upgraded');
  controlContainers.forEach(container => {
    const buttons = container.querySelectorAll('button');
    const hasUnupgraded = Array.from(buttons).some(b => !b.classList.contains('lm-btn-upgraded'));
    
    if (hasUnupgraded || !container.classList.contains('lm-controls-upgraded')) {
      container.classList.add('lm-controls-upgraded');
      
      // Make container a CSS Grid with premium padding and gap
      container.className = 'p-6 pt-5 grid grid-cols-2 gap-4 w-full lm-controls-upgraded';
      container.style.background = 'rgba(15, 23, 42, 0.4)';
      container.style.border = '1px solid var(--lm-border)';
      container.style.borderRadius = '20px';
      container.style.backdropFilter = 'blur(20px)';
      
      // Fix the layout bug by removing display:contents and using standard grid/flex
      const flexWrapper = container.querySelector('div > div.flex');
      if (flexWrapper) {
          flexWrapper.className = 'flex flex-col gap-4 w-full';
          flexWrapper.parentElement.className = 'w-full';
          flexWrapper.parentElement.style.gridColumn = '1 / -1';
      }
      
      buttons.forEach(btn => {
        let text = btn.textContent.toUpperCase();
        const reactTextSpan = btn.querySelector('.lm-react-text');
        if (reactTextSpan) {
            text = reactTextSpan.textContent.toUpperCase();
        }
        
        // Hide Halt button completely when scanner is paused
        if (text.includes('HALT')) {
          btn.style.setProperty('display', 'none', 'important');
          return;
        }
        
        // Base classes for all buttons
        btn.className = 'w-full rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer lm-btn-upgraded';
        
        // Clear conflicting inline styles that React might have left behind
        btn.style.boxShadow = '';
        btn.style.background = '';
        btn.style.border = '';
        
        const setHTML = (html) => {
            if (btn.querySelector('.lm-custom-ui')) {
                const ui = btn.querySelector('.lm-custom-ui');
                if (ui.innerHTML !== html) ui.innerHTML = html;
                return;
            }
            Array.from(btn.childNodes).forEach(child => {
                if (child.nodeType === Node.TEXT_NODE && child.textContent.trim()) {
                    const span = document.createElement('span');
                    span.style.display = 'none';
                    span.className = 'lm-react-text';
                    btn.insertBefore(span, child);
                    span.appendChild(child);
                } else if (child.nodeType === Node.ELEMENT_NODE) {
                    child.style.display = 'none';
                }
            });
            const ui = document.createElement('div');
            ui.className = 'lm-custom-ui w-full h-full flex items-center justify-center gap-2';
            ui.innerHTML = html;
            btn.appendChild(ui);
        };
        
        const isScanning = text.includes('SCANNING') || text.includes('RUNNING') || text.includes('WORKING');
        
        if (isScanning) {
           btn.style.gridColumn = '1 / -1';
           btn.style.height = '56px';
           btn.style.width = '100%';
           btn.style.background = 'rgba(var(--lm-primary-rgb), 0.1)';
           btn.style.border = '1px solid rgba(var(--lm-primary-rgb), 0.3)';
           btn.style.color = 'var(--lm-primary)';
           btn.style.opacity = '0.7';
           btn.style.cursor = 'not-allowed';
           setHTML(`<span class="material-symbols-outlined" style="font-size:24px;">autorenew</span><span style="letter-spacing:1.5px; font-weight:900;">SCANNING...</span>`);
           
           // Remove hover listeners if they were added before
           btn.onmouseenter = null;
           btn.onmouseleave = null;
        }
        else if (text.includes('RESUME') || text.includes('START') || text === 'SCAN' || text === 'INITIALIZE' || text.includes('ENGAGE')) {
           // Primary Action
           btn.style.gridColumn = '1 / -1';
           let wrapper = btn.parentElement;
           while (wrapper && wrapper !== container) {
               wrapper.style.gridColumn = '1 / -1';
               wrapper = wrapper.parentElement;
           }
           
           btn.style.height = '56px';
           btn.style.width = '100%';
           btn.style.maxWidth = 'none';
           btn.style.background = 'linear-gradient(135deg, rgba(var(--lm-primary-rgb), 0.2), rgba(var(--lm-primary-rgb), 0.05))';
           btn.style.border = '1px solid var(--lm-primary)';
           btn.style.color = 'var(--lm-primary)';
           btn.style.boxShadow = '0 0 20px rgba(var(--lm-primary-rgb), 0.2), inset 0 0 10px rgba(var(--lm-primary-rgb), 0.1)';
           btn.style.animation = 'lm-pulse-glow-green 2s infinite alternate, lm-wobble-btn 3s infinite ease-in-out';
           btn.style.opacity = '1';
           btn.style.cursor = 'pointer';
           
           const btnText = text.includes('RESUME') ? 'RESUME SCAN' : 'START SCAN';
           setHTML(`<span class="material-symbols-outlined" style="font-size:24px;">rocket_launch</span><span style="letter-spacing:1.5px; font-weight:900;">${btnText}</span>`);
           
           btn.onmouseenter = () => {
             btn.style.animation = 'none';
             btn.style.background = 'var(--lm-primary)';
             btn.style.color = '#000';
             btn.style.boxShadow = '0 0 30px rgba(var(--lm-primary-rgb), 0.6)';
             btn.style.transform = 'translateY(-2px)';
             const icon = btn.querySelector('span.material-symbols-outlined');
             if(icon) icon.style.color = '#000';
           };
           btn.onmouseleave = () => {
             btn.style.background = 'linear-gradient(135deg, rgba(var(--lm-primary-rgb), 0.2), rgba(var(--lm-primary-rgb), 0.05))';
             btn.style.color = 'var(--lm-primary)';
             btn.style.boxShadow = '0 0 20px rgba(var(--lm-primary-rgb), 0.2), inset 0 0 10px rgba(var(--lm-primary-rgb), 0.1)';
             btn.style.transform = 'translateY(0)';
             btn.style.animation = 'lm-pulse-glow-green 2s infinite alternate, lm-wobble-btn 3s infinite ease-in-out';
             const icon = btn.querySelector('span.material-symbols-outlined');
             if(icon) icon.style.color = 'var(--lm-primary)';
           };
        }
        else if (text.includes('PAUSE') || btn.querySelector('.material-symbols-outlined')?.textContent.includes('pause')) {
           // Pause Action
           btn.style.gridColumn = '1 / -1';
           let wrapper = btn.parentElement;
           while (wrapper && wrapper !== container) {
               wrapper.style.gridColumn = '1 / -1';
               wrapper = wrapper.parentElement;
           }
           
           btn.style.height = '48px';
           btn.style.width = '100%';
           btn.style.maxWidth = 'none';
           btn.style.background = 'rgba(239, 68, 68, 0.1)';
           btn.style.border = '1px dashed rgba(239, 68, 68, 0.4)';
           btn.style.color = '#ef4444';
           btn.style.opacity = '1';
           btn.style.cursor = 'pointer';
           setHTML(`<span class="material-symbols-outlined" style="font-size:20px;">front_hand</span><span style="letter-spacing:1px;">PAUSE SYSTEM</span>`);
           
           btn.onmouseenter = () => {
             btn.style.background = 'rgba(239, 68, 68, 0.2)';
             btn.style.borderStyle = 'solid';
             btn.style.borderColor = '#ef4444';
             btn.style.transform = 'translateY(-1px)';
           };
           btn.onmouseleave = () => {
             btn.style.background = 'rgba(239, 68, 68, 0.1)';
             btn.style.borderStyle = 'dashed';
             btn.style.borderColor = 'rgba(239, 68, 68, 0.4)';
             btn.style.transform = 'translateY(0)';
           };
        }
        else if (text.includes('EXPORT') || text.includes('DOWNLOAD')) {
           // Export — Full Width
           btn.style.gridColumn = '1 / -1';
           btn.style.height = '48px';
           btn.style.width = '100%';
           btn.style.maxWidth = 'none';
           btn.style.background = 'var(--lm-surface-1)';
           btn.style.border = '1px solid var(--lm-border)';
           btn.style.color = '#94a3b8';
           btn.style.opacity = '1';
           btn.style.cursor = 'pointer';
           setHTML(`<span class="material-symbols-outlined" style="font-size:20px;">file_download</span><span style="letter-spacing:1px;">Download Leads</span>`);
           
           btn.onmouseenter = () => {
             btn.style.background = 'rgba(var(--lm-primary-rgb), 0.1)';
             btn.style.color = 'var(--lm-primary)';
             btn.style.borderColor = 'var(--lm-primary)';
             btn.style.boxShadow = '0 0 15px rgba(var(--lm-primary-rgb), 0.15)';
             btn.style.transform = 'translateY(-2px)';
           };
           btn.onmouseleave = () => {
             btn.style.background = 'var(--lm-surface-1)';
             btn.style.color = '#94a3b8';
             btn.style.borderColor = 'var(--lm-border)';
             btn.style.boxShadow = 'none';
             btn.style.transform = 'translateY(0)';
           };
        }
        else if (text.includes('DATA DASHBOARD') || text.includes('VIEW DATA') || text.includes('RESULTS') || text.includes('DASHBOARD') || text.includes('VIEW LEADS')) {
           // View Data — Full Width
           btn.style.gridColumn = '1 / -1';
           btn.style.height = '48px';
           btn.style.width = '100%';
           btn.style.maxWidth = 'none';
           btn.style.background = 'linear-gradient(135deg, rgba(var(--lm-primary-rgb), 0.2), rgba(var(--lm-primary-rgb), 0.05))';
           btn.style.border = '1px solid var(--lm-primary)';
           btn.style.color = 'var(--lm-primary)';
           btn.style.boxShadow = '0 0 20px rgba(var(--lm-primary-rgb), 0.2), inset 0 0 10px rgba(var(--lm-primary-rgb), 0.1)';
           btn.style.animation = 'lm-pulse-glow-green 2s infinite alternate, lm-wobble-btn 3s infinite ease-in-out 0.5s';
           btn.style.opacity = '1';
           btn.style.cursor = 'pointer';
           setHTML(`<span class="material-symbols-outlined" style="font-size:20px;">monitoring</span><span style="letter-spacing:1px;">VIEW LEADS</span>`);
           
           if (!btn.classList.contains('lm-click-observed')) {
              btn.classList.add('lm-click-observed');
              btn.addEventListener('click', () => {
                 if (window.lmShowLoadingScreen) {
                    window.lmShowLoadingScreen(3000);
                 }
                 sessionStorage.setItem('lmShowCleanDataGuide', 'true');
              });
           }

           btn.onmouseenter = () => {
             btn.style.animation = 'none';
             btn.style.background = 'var(--lm-primary)';
             btn.style.color = '#000';
             btn.style.boxShadow = '0 0 30px rgba(var(--lm-primary-rgb), 0.6)';
             btn.style.transform = 'translateY(-2px)';
             const icon = btn.querySelector('span.material-symbols-outlined');
             if(icon) icon.style.color = '#000';
           };
           btn.onmouseleave = () => {
             btn.style.background = 'linear-gradient(135deg, rgba(var(--lm-primary-rgb), 0.2), rgba(var(--lm-primary-rgb), 0.05))';
             btn.style.color = 'var(--lm-primary)';
             btn.style.borderColor = 'var(--lm-primary)';
             btn.style.boxShadow = '0 0 20px rgba(var(--lm-primary-rgb), 0.2), inset 0 0 10px rgba(var(--lm-primary-rgb), 0.1)';
             btn.style.transform = 'translateY(0)';
             btn.style.animation = 'lm-pulse-glow-green 2s infinite alternate, lm-wobble-btn 3s infinite ease-in-out 0.5s';
             const icon = btn.querySelector('span.material-symbols-outlined');
             if(icon) icon.style.color = 'var(--lm-primary)';
           };
        }
      });
    }
  });
  // 12. Overhaul "All Done" Success Modal
  const modals = document.querySelectorAll('div.flex.flex-col.items-center.text-center');
  modals.forEach(modal => {
    if (modal.textContent.includes('All Done!') && !modal.classList.contains('lm-success-upgraded')) {
      modal.classList.add('lm-success-upgraded');
      
      // Update Main Title
      const headerTitle = modal.querySelector('h2');
      if (headerTitle) {
        headerTitle.textContent = 'EXTRACTION COMPLETE';
        headerTitle.style.color = 'var(--lm-primary)';
        headerTitle.style.textShadow = '0 0 15px rgba(var(--lm-primary-rgb), 0.4)';
        headerTitle.style.letterSpacing = '1px';
      }
      
      // Update Subtitle text
      const p = modal.querySelector('p');
      if (p) {
        Array.from(p.childNodes).forEach(node => {
          if (node.nodeType === Node.TEXT_NODE && node.nodeValue.includes('Scraping process completed successfully.')) {
            node.nodeValue = node.nodeValue.replace('Scraping process completed successfully.', 'Geo Bucket has successfully secured your data payload.');
          }
        });
      }

      // Update the big green checkmark circle
      const checkCircle = Array.from(modal.querySelectorAll('div')).find(d => d.className.includes('w-24') && d.className.includes('h-24'));
      if (checkCircle) {
        checkCircle.className = 'w-24 h-24 rounded-full flex items-center justify-center'; 
        checkCircle.style.background = 'rgba(15, 23, 42, 0.8)';
        checkCircle.style.border = '2px solid var(--lm-primary)';
        checkCircle.style.boxShadow = '0 0 30px rgba(var(--lm-primary-rgb), 0.6), inset 0 0 20px rgba(var(--lm-primary-rgb), 0.2)';
        checkCircle.innerHTML = '<span class="material-symbols-outlined" style="font-size:48px; color:var(--lm-primary); animation: lm-pulse-glow 2s infinite alternate;">task_alt</span>';
      }
      
      const ringAnimator = Array.from(modal.querySelectorAll('div')).find(d => d.className.includes('border-green-500') && d.className.includes('inset-0'));
      if (ringAnimator) {
        ringAnimator.style.borderColor = 'var(--lm-primary)';
      }

      // Update Info Box (Total Leads / Status)
      const infoBoxes = modal.querySelectorAll('div.flex.justify-around');
      infoBoxes.forEach(infoBox => {
        infoBox.style.background = 'rgba(var(--lm-primary-rgb), 0.05)';
        infoBox.style.borderColor = 'rgba(var(--lm-primary-rgb), 0.2)';
        
        // Update database icon safely
        const dbSvg = infoBox.querySelector('svg');
        if (dbSvg) {
          dbSvg.style.display = 'none';
          if (!dbSvg.parentElement.querySelector('.lm-db-icon')) {
             const iconSpan = document.createElement('span');
             iconSpan.className = 'material-symbols-outlined lm-db-icon';
             iconSpan.style.color = 'var(--lm-primary)';
             iconSpan.style.fontSize = '24px';
             iconSpan.textContent = 'database';
             dbSvg.parentElement.insertBefore(iconSpan, dbSvg);
          }
        }
        
        // Update success status dot
        const statusDot = Array.from(infoBox.querySelectorAll('div')).find(d => d.className.includes('w-2') && d.className.includes('h-2'));
        if (statusDot) {
          statusDot.className = 'w-2 h-2 rounded-full';
          statusDot.style.background = 'var(--lm-primary)';
          statusDot.style.boxShadow = '0 0 8px var(--lm-primary)';
          statusDot.style.animation = 'lm-blink-fast 0.5s infinite alternate';
        }
        const statusText = Array.from(infoBox.querySelectorAll('span')).find(s => s.textContent.includes('Success'));
        if (statusText) {
          statusText.className = 'text-sm font-bold uppercase tracking-wide';
          statusText.style.color = 'var(--lm-primary)';
          statusText.textContent = 'SECURED';
        }
      });

      // Update Buttons
      const buttons = modal.querySelectorAll('button');
      buttons.forEach(btn => {
        const btnText = btn.textContent.toUpperCase();
        if (btnText.includes('EXPORT') || btnText.includes('DOWNLOAD')) {
          btn.className = 'w-full p-4 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all group';
          btn.style.background = 'var(--lm-primary)';
          btn.style.color = '#000000';
          btn.style.boxShadow = '0 8px 25px rgba(var(--lm-primary-rgb), 0.5)';
          btn.style.border = 'none';
          btn.innerHTML = `
            <div style="display:flex; align-items:center; gap:8px; font-weight:900; font-size:16px; letter-spacing:1px; text-transform:uppercase;">
              <span class="material-symbols-outlined" style="font-size:20px;">download</span>
              Download Leads
            </div>
            <span style="font-size:10px; opacity:0.8; font-weight:700;">EXCEL • CSV • JSON</span>
          `;
          btn.addEventListener('mouseenter', () => { btn.style.transform = 'translateY(-3px)'; btn.style.boxShadow = '0 12px 30px rgba(var(--lm-primary-rgb), 0.7)'; });
          btn.addEventListener('mouseleave', () => { btn.style.transform = 'translateY(0)'; btn.style.boxShadow = '0 8px 25px rgba(var(--lm-primary-rgb), 0.5)'; });
        }
        else if (btnText.includes('FINISH & CLOSE') || btnText.includes('PURGE')) {
          btn.textContent = 'Finish & Close';
          btn.style.background = 'rgba(239, 68, 68, 0.05)';
          btn.style.color = '#ef4444';
          btn.style.borderColor = 'rgba(239, 68, 68, 0.2)';
          btn.addEventListener('mouseenter', () => {
            btn.style.background = 'rgba(239, 68, 68, 0.15)';
            btn.style.borderColor = '#ef4444';
            btn.style.boxShadow = '0 0 15px rgba(239, 68, 68, 0.3)';
          });
          btn.addEventListener('mouseleave', () => {
            btn.style.background = 'rgba(239, 68, 68, 0.05)';
            btn.style.borderColor = 'rgba(239, 68, 68, 0.2)';
            btn.style.boxShadow = 'none';
          });
        }
      });
    }
  });

  // 13. Overhaul Export Settings Modal
  const exportModals = document.querySelectorAll('.max-w-\\[500px\\].bg-\\[\\#0f172a\\]');
  exportModals.forEach(modal => {
    if ((modal.textContent.includes('Export Settings') || modal.textContent.includes('Download Data') || modal.textContent.includes('Geo Bucket')) && !modal.classList.contains('lm-export-upgraded')) {
      modal.classList.add('lm-export-upgraded');

      // 1. Redesign Header
      const headerTitle = modal.querySelector('h2');
      if (headerTitle) {
        headerTitle.innerHTML = `
           <div style="font-size: 24px; font-weight: 900; color: #fff; letter-spacing: 2px; text-shadow: 0 0 20px rgba(255,255,255,0.4); animation: lm-text-glow 1.5s ease-in-out infinite alternate; margin-bottom: 2px;">Geo Bucket</div>
           <div style="font-size: 14px; font-weight: 800; color: var(--lm-primary); letter-spacing: 1.5px; text-transform: uppercase;">Download Data</div>
        `;
        headerTitle.style.display = 'flex';
        headerTitle.style.flexDirection = 'column';
      }
      
      const headerDesc = modal.querySelector('p');
      if (headerDesc) {
        headerDesc.textContent = 'Select your preferred format to export the extracted intel.';
        headerDesc.style.color = '#94a3b8';
        headerDesc.style.fontWeight = 'bold';
        headerDesc.style.marginTop = '6px';
      }

      // Change icon at the top left to Lottie Logo
      const topIconBox = modal.querySelector('div.bg-\\[\\var(--lm-primary)\\]') || modal.querySelector('.w-10.h-10');
      if (topIconBox && !topIconBox.querySelector('dotlottie-player')) {
        topIconBox.style.background = 'transparent';
        topIconBox.style.border = 'none';
        topIconBox.style.boxShadow = 'none';
        topIconBox.style.width = '60px'; 
        topIconBox.style.height = '60px';
        topIconBox.className = 'flex items-center justify-center shrink-0';
        topIconBox.innerHTML = '<img src="/logo.png" style="width: 100%; height: 100%; pointer-events: none; border-radius: 8px; object-fit: contain;" alt="Logo">';
      }

      // Change Stats boxes
      const totalLeadsBox = modal.querySelector('div.bg-\\[\\#1e293b\\]');
      if (totalLeadsBox) {
        totalLeadsBox.style.background = 'rgba(255,255,255,0.05)';
        totalLeadsBox.style.border = '1px solid rgba(255,255,255,0.1)';
        const lbl = totalLeadsBox.querySelector('div');
        if (lbl) { lbl.textContent = 'CAPTURED INTEL'; lbl.style.color = '#fff'; }
      }
      
      const filteredBox = modal.querySelector('div.bg-\\[\\var(--lm-primary)\\]\\/10') || modal.querySelectorAll('.grid-cols-2 > div')[1];
      if (filteredBox) {
        filteredBox.style.background = 'rgba(var(--lm-primary-rgb), 0.05)';
        filteredBox.style.border = '1px solid rgba(var(--lm-primary-rgb), 0.3)';
        filteredBox.style.boxShadow = 'inset 0 0 10px rgba(var(--lm-primary-rgb),0.1)';
        const lbl = filteredBox.querySelector('div');
        if (lbl) { lbl.textContent = 'VERIFIED ASSETS'; lbl.style.color = 'var(--lm-primary)'; }
        const val = filteredBox.querySelectorAll('div')[1];
        if (val) { val.style.color = 'var(--lm-primary)'; val.style.textShadow = '0 0 10px rgba(var(--lm-primary-rgb),0.5)'; }
      }

      // 2. Modal Body Rearrangement
      const modalBody = modal.querySelector('.flex-1.overflow-y-auto');
      if (modalBody) {
        const wrappers = modalBody.querySelectorAll('.space-y-2');
        const formatGrid = modalBody.querySelector('.grid.grid-cols-3');
        const dlBtn = Array.from(modalBody.querySelectorAll('button')).find(b => b.textContent.includes('Download') || b.textContent.includes('DOWNLOAD'));

        // Rearrange layout using CSS Flexbox order to prevent React crashes
        modalBody.style.display = 'flex';
        modalBody.style.flexDirection = 'column';

        if (formatGrid) {
           formatGrid.style.order = '-1';
           formatGrid.style.display = 'flex';
           formatGrid.style.flexDirection = 'column';
           formatGrid.style.gap = '10px';
           formatGrid.className = 'w-full mb-6'; 
        }

        // Paraphrase headers
        wrappers.forEach((w, index) => {
           // Keep the original order for the wrappers
           w.style.order = index;

           const labelDiv = w.querySelector('.text-xs.font-bold');
           if (labelDiv) {
               const text = labelDiv.textContent;
               if (text.includes('Duplicates')) {
                   labelDiv.innerHTML = '<span class="material-symbols-outlined" style="font-size:16px;">filter_alt</span> DEDUPLICATION KEY';
               } else if (text.includes('Select Data')) {
                   labelDiv.innerHTML = '<span class="material-symbols-outlined" style="font-size:16px;">data_object</span> PAYLOAD FIELDS';
               } else if (text.includes('Export Single')) {
                   labelDiv.innerHTML = '<span class="material-symbols-outlined" style="font-size:16px;">my_location</span> TARGETED COLUMN EXTRACT';
                   w.style.borderTop = '1px solid rgba(255,255,255,0.05)';
                   w.style.paddingTop = '15px';
               }
               labelDiv.style.color = 'var(--lm-primary)';
               labelDiv.style.display = 'flex';
               labelDiv.style.alignItems = 'center';
               labelDiv.style.gap = '8px';
           }
           
           // Style selects inside
           const selects = w.querySelectorAll('select');
           selects.forEach(sel => {
               sel.style.background = 'rgba(255,255,255,0.02)';
               sel.style.border = '1px solid rgba(255,255,255,0.1)';
               sel.style.color = '#fff';
           });
           
           // Safely style 'fields selected' button without destroying inner React SVGs
           const fieldBtn = w.querySelector('button.text-gray-300');
           if (fieldBtn) {
               fieldBtn.style.background = 'rgba(255,255,255,0.02)';
               fieldBtn.style.border = '1px solid rgba(255,255,255,0.1)';
               fieldBtn.style.color = '#fff';
               Array.from(fieldBtn.childNodes).forEach(node => {
                 if (node.nodeType === Node.TEXT_NODE) {
                    node.nodeValue = node.nodeValue.replace('fields selected', 'columns mapped');
                 } else if (node.tagName === 'SPAN') {
                    if (node.textContent.includes('fields selected')) {
                        node.textContent = node.textContent.replace('fields selected', 'columns mapped');
                    }
                 }
               });
           }
        });

        // 3. Redesign Format Buttons (CSV, XLSX, JSON)
        if (formatGrid) {
            const formatBtns = Array.from(formatGrid.querySelectorAll('button'));
            formatBtns.forEach(btn => {
               const text = btn.textContent;
               const formatType = text.includes('CSV') ? 'CSV' : text.includes('XLSX') ? 'XLSX' : 'JSON';
               const iconName = formatType === 'CSV' ? 'table_chart' : formatType === 'XLSX' ? 'grid_on' : 'data_object';
               const desc = formatType === 'CSV' ? 'Universal tabular format' : formatType === 'XLSX' ? 'Excel spreadsheet' : 'Raw developer payload';
               
               btn.className = 'w-full rounded-xl flex items-center justify-between p-4 cursor-pointer transition-all border border-white/5 bg-white/5 hover:bg-white/10 hover:border-[var(--lm-primary)] group';
               btn.style.boxShadow = 'none';
               
               btn.innerHTML = `
                 <div class="flex items-center gap-4">
                   <div class="w-10 h-10 rounded-lg flex items-center justify-center transition-all bg-white/5 group-hover:bg-[var(--lm-primary)]/20">
                     <span class="material-symbols-outlined transition-all group-hover:scale-110" style="color:var(--lm-primary);">${iconName}</span>
                   </div>
                   <div class="text-left">
                     <div class="text-white font-black text-sm tracking-wider">${formatType}</div>
                     <div class="text-gray-400 text-[10px] uppercase tracking-widest">${desc}</div>
                   </div>
                 </div>
                 <div class="w-6 h-6 rounded-full border-2 border-white/10 flex items-center justify-center group-hover:border-[var(--lm-primary)] transition-all">
                    <div class="w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100" style="background:var(--lm-primary);"></div>
                 </div>
               `;
            });
        }

        // 4. Download Button Overhaul
        if (dlBtn) {
            dlBtn.className = 'w-full rounded-xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer';
            dlBtn.style.height = '56px';
            dlBtn.style.background = 'linear-gradient(135deg, rgba(var(--lm-primary-rgb), 0.2), rgba(var(--lm-primary-rgb), 0.05))';
            dlBtn.style.border = '1px solid var(--lm-primary)';
            dlBtn.style.color = 'var(--lm-primary)';
            dlBtn.style.boxShadow = '0 0 20px rgba(var(--lm-primary-rgb), 0.2), inset 0 0 10px rgba(var(--lm-primary-rgb), 0.1)';
            
            dlBtn.innerHTML = `<span class="material-symbols-outlined" style="font-size:24px; animation: lm-pulse-glow 2s infinite alternate;">rocket_launch</span> EXECUTE DOWNLOAD`;
            
            dlBtn.addEventListener('mouseenter', () => {
              dlBtn.style.background = 'var(--lm-primary)';
              dlBtn.style.color = '#000';
              dlBtn.style.boxShadow = '0 0 30px rgba(var(--lm-primary-rgb), 0.6)';
              dlBtn.style.transform = 'translateY(-2px)';
              const icon = dlBtn.querySelector('span');
              if(icon) icon.style.color = '#000';
            });
            dlBtn.addEventListener('mouseleave', () => {
              dlBtn.style.background = 'linear-gradient(135deg, rgba(var(--lm-primary-rgb), 0.2), rgba(var(--lm-primary-rgb), 0.05))';
              dlBtn.style.color = 'var(--lm-primary)';
              dlBtn.style.boxShadow = '0 0 20px rgba(var(--lm-primary-rgb), 0.2), inset 0 0 10px rgba(var(--lm-primary-rgb), 0.1)';
              dlBtn.style.transform = 'translateY(0)';
              const icon = dlBtn.querySelector('span');
              if(icon) icon.style.color = 'var(--lm-primary)';
            });
        }
      }
    }
  });

  // 14. Redesign Bottom Status Bar ("Waiting for start" / Resume bar)
  const bottomBars = document.querySelectorAll('div.bg-\\[\\#0f172a\\].border-t');
  bottomBars.forEach(bar => {
      // If it's the main Navigation Bar (has 3 buttons), just unhide it and skip styling
      if (bar.querySelectorAll('button').length > 1) {
        bar.classList.add('lm-bottombar-upgraded');
        return;
      }
      
      const statusBtn = bar.querySelector('button');
      if (statusBtn) {
        let statusText = statusBtn.textContent.toLowerCase();
        const reactTextSpan = statusBtn.querySelector('.lm-react-text');
        if (reactTextSpan) {
            statusText = reactTextSpan.textContent.toLowerCase();
        }
        
        const isIdle = statusText.includes('waiting') || statusText.includes('initialize');
        const isRunning = statusText.includes('running') || statusText.includes('scanning');
        const isPaused = statusText.includes('pause') || statusText.includes('stopped') || statusText.includes('suspend') || statusText.includes('resume');
        
        if (isIdle || isRunning || isPaused) {
          bar.classList.add('lm-bottombar-upgraded');
          
          // Completely restyle the bottom bar
          bar.style.background = 'rgba(13, 20, 29, 0.95)';
          bar.style.borderColor = 'rgba(var(--lm-primary-rgb), 0.15)';
          bar.style.padding = '0';
          
          statusBtn.style.background = 'transparent';
          
          const setStatusHTML = (html, justifyClass) => {
              if (statusBtn.querySelector('.lm-custom-ui')) {
                  const ui = statusBtn.querySelector('.lm-custom-ui');
                  if (ui.innerHTML !== html) ui.innerHTML = html;
                  ui.className = `lm-custom-ui w-full flex items-center ${justifyClass}`;
                  return;
              }
              Array.from(statusBtn.childNodes).forEach(child => {
                  if (child.nodeType === Node.TEXT_NODE && child.textContent.trim()) {
                      const span = document.createElement('span');
                      span.style.display = 'none';
                      span.className = 'lm-react-text';
                      statusBtn.insertBefore(span, child);
                      span.appendChild(child);
                  } else if (child.nodeType === Node.ELEMENT_NODE) {
                      child.style.display = 'none';
                  }
              });
              const ui = document.createElement('div');
              ui.className = `lm-custom-ui w-full flex items-center ${justifyClass}`;
              ui.innerHTML = html;
              statusBtn.appendChild(ui);
          };
        
        if (isIdle) {
          statusBtn.className = 'w-full flex items-center justify-between px-4 py-3 transition-colors group cursor-pointer';
          setStatusHTML(`
            <div style="display:flex; align-items:center; gap:10px;">
              <div style="width:8px; height:8px; border-radius:50%; background:#64748b;"></div>
              <span style="font-size:11px; font-weight:800; color:#64748b; text-transform:uppercase; letter-spacing:1px;">Ready to Scan</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:10px; font-weight:800; color:var(--lm-primary); text-transform:uppercase; letter-spacing:0.5px; opacity:1; transition:opacity 0.2s;" class="lm-hover-label">Initialize</span>
              <div style="width:32px; height:32px; border-radius:10px; border:1px solid rgba(var(--lm-primary-rgb),0.3); display:flex; align-items:center; justify-content:center; background:rgba(var(--lm-primary-rgb),0.15); transition:all 0.2s;">
                <span class="material-symbols-outlined" style="font-size:16px; color:var(--lm-primary);">play_arrow</span>
              </div>
            </div>
          `, 'justify-between');
          
          statusBtn.onmouseenter = () => {
            const label = statusBtn.querySelector('.lm-hover-label');
            if (label) label.style.opacity = '1';
            const iconBox = statusBtn.querySelector('div[style*="border-radius:10px"]');
            if (iconBox) {
              iconBox.style.background = 'rgba(var(--lm-primary-rgb),0.2)';
              iconBox.style.borderColor = 'var(--lm-primary)';
              iconBox.style.transform = 'scale(1.1)';
            }
          };
          statusBtn.onmouseleave = () => {
            const label = statusBtn.querySelector('.lm-hover-label');
            if (label) label.style.opacity = '0';
            const iconBox = statusBtn.querySelector('div[style*="border-radius:10px"]');
            if (iconBox) {
              iconBox.style.background = 'rgba(var(--lm-primary-rgb),0.08)';
              iconBox.style.borderColor = 'rgba(var(--lm-primary-rgb),0.3)';
              iconBox.style.transform = 'scale(1)';
            }
          };
        } else if (isRunning || isPaused) {
          // Centered layout for Active / Paused states
          statusBtn.className = 'w-full flex items-center justify-center gap-10 px-4 py-3 transition-colors group cursor-pointer';
          
          const dotColor = isPaused ? 'var(--lm-primary)' : 'var(--lm-primary)';
          const dotAnim = isPaused ? 'none' : 'lm-pulse-glow 2s infinite alternate';
          const stateText = isPaused ? 'PAUSED' : 'ON';
          
          const actionColor = isPaused ? 'var(--lm-primary)' : '#ef4444';
          const actionText = isPaused ? 'RESUME' : 'SUSPEND';
          const actionIcon = isPaused ? 'play_circle' : 'pause_circle';
          
          setStatusHTML(`
            <div style="display:flex; align-items:center; gap:8px;">
              <div style="width:8px; height:8px; border-radius:50%; background:${dotColor}; box-shadow:0 0 10px ${dotColor}; animation: ${dotAnim};"></div>
              <span style="font-size:12px; font-weight:800; color:#fff; text-shadow:0 0 10px rgba(255,255,255,0.3); letter-spacing:1px; text-transform:uppercase;">Scanner</span>
              <span style="font-size:12px; font-weight:900; color:${dotColor}; text-shadow:0 0 10px ${dotColor}; letter-spacing:1px;">${stateText}</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:10px; font-weight:800; color:${actionColor}; text-shadow:0 0 10px ${actionColor}; text-transform:uppercase; letter-spacing:1px;">${actionText}</span>
              <div style="width:32px; height:32px; border-radius:10px; border:1px solid ${actionColor}80; display:flex; align-items:center; justify-content:center; background:${actionColor}15; transition:all 0.2s;" class="lm-action-btn">
                <span class="material-symbols-outlined" style="font-size:20px; color:${actionColor};">${actionIcon}</span>
              </div>
            </div>
          `, 'justify-center gap-10');
          
          statusBtn.onmouseenter = () => {
            const btn = statusBtn.querySelector('.lm-action-btn');
            if (btn) {
              btn.style.background = `${actionColor}30`;
              btn.style.borderColor = actionColor;
              btn.style.transform = 'scale(1.1)';
              btn.style.boxShadow = `0 0 15px ${actionColor}60`;
            }
          };
          statusBtn.onmouseleave = () => {
            const btn = statusBtn.querySelector('.lm-action-btn');
            if (btn) {
              btn.style.background = `${actionColor}15`;
              btn.style.borderColor = `${actionColor}80`;
              btn.style.transform = 'scale(1)';
              btn.style.boxShadow = 'none';
            }
          };
        }
      }
    }
  });

  // 15. Redesign Extracted Leads Dashboard Header
  const leadsHeaders = document.querySelectorAll('div.flex.items-center.justify-between.mb-4.px-5.pt-5');
  leadsHeaders.forEach(header => {
    if (header.textContent.includes('Extracted Leads') && !header.classList.contains('lm-leads-header-upgraded')) {
      header.classList.add('lm-leads-header-upgraded');
      
      // Restyle the container
      header.style.background = 'linear-gradient(135deg, rgba(var(--lm-primary-rgb), 0.08), rgba(13, 20, 29, 0.9))';
      header.style.border = '1px solid rgba(var(--lm-primary-rgb), 0.2)';
      header.style.borderRadius = '16px';
      header.style.padding = '16px 20px';
      header.style.margin = '0 0 16px 0';
      header.style.backdropFilter = 'blur(20px)';
      
      // Update the icon
      const iconDiv = header.querySelector('div.w-10.h-10');
      if (iconDiv) {
        iconDiv.className = 'w-10 h-10 rounded-full flex items-center justify-center';
        iconDiv.style.background = 'rgba(var(--lm-primary-rgb), 0.15)';
        iconDiv.style.border = '1px solid rgba(var(--lm-primary-rgb), 0.3)';
        iconDiv.style.boxShadow = '0 0 15px rgba(var(--lm-primary-rgb), 0.2)';
        iconDiv.innerHTML = '<span class="material-symbols-outlined" style="font-size:22px; color:var(--lm-primary);">contact_mail</span>';
      }
      
      // Update Title and Count
      const titleH2 = header.querySelector('h2');
      if (titleH2) {
        titleH2.textContent = 'Your Leads';
        titleH2.style.color = '#ffffff';
        titleH2.style.fontWeight = '900';
        titleH2.style.fontSize = '15px';
        titleH2.style.letterSpacing = '0.5px';
      }
      const countP = header.querySelector('p');
      if (countP) {
        countP.style.color = 'var(--lm-primary)';
        countP.style.fontSize = '12px';
        countP.style.fontWeight = '800';
        // Keep the count number but simplify the text
        const countNum = countP.textContent.match(/\d+/);
        if (countNum) {
          countP.textContent = countNum[0] + ' found';
        }
      }
      
      // Update the Reset button styling
      const resetBtn = header.querySelector('button');
      if (resetBtn) {
        resetBtn.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer';
        resetBtn.style.background = 'rgba(239, 68, 68, 0.08)';
        resetBtn.style.border = '1px solid rgba(239, 68, 68, 0.2)';
        resetBtn.style.color = '#ef4444';
        resetBtn.innerHTML = '<span class="material-symbols-outlined" style="font-size:14px;">delete_sweep</span> Clear All';
        
        resetBtn.addEventListener('mouseenter', () => {
          resetBtn.style.background = 'rgba(239, 68, 68, 0.2)';
          resetBtn.style.borderColor = '#ef4444';
          resetBtn.style.boxShadow = '0 0 12px rgba(239, 68, 68, 0.2)';
        });
        resetBtn.addEventListener('mouseleave', () => {
            resetBtn.style.background = 'rgba(239, 68, 68, 0.08)';
          resetBtn.style.borderColor = 'rgba(239, 68, 68, 0.2)';
          resetBtn.style.boxShadow = 'none';
        });
      }
    }
  });

  // Global cache for lead images and records
  window.lmLeadImageCache = window.lmLeadImageCache || {};
  window.lmLeadRecordCache = window.lmLeadRecordCache || {};
  window.lmAllLeadsCachedMap = null;
  window.lmAllLeadsLoadingPromise = null;

  function cacheAllLeads() {
    if (window.lmAllLeadsLoadingPromise) {
      return window.lmAllLeadsLoadingPromise;
    }
    window.lmAllLeadsLoadingPromise = new Promise((resolve) => {
      try {
        let dbName = "Geo Bucket_v5.4.2";
        if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.getManifest) {
           const manifest = chrome.runtime.getManifest();
           dbName = (manifest.name || "Geo Bucket") + "_v" + (manifest.version || "5.4.2");
        }
        const request = indexedDB.open(dbName);
        request.onsuccess = function(event) {
           const db = event.target.result;
           if (!db.objectStoreNames.contains("list")) {
              db.close();
              window.lmAllLeadsCachedMap = {};
              resolve(window.lmAllLeadsCachedMap);
              return;
           }
           const transaction = db.transaction(["list"], "readonly");
           const objectStore = transaction.objectStore("list");
           const getAllReq = objectStore.getAll();
           getAllReq.onsuccess = function(e) {
              const list = e.target.result || [];
              const map = {};
              list.forEach(record => {
                 const recordName = record["Company/Business Name"] || record["Name"] || record["name"];
                 if (recordName) {
                    map[recordName.trim().toLowerCase()] = record;
                 }
              });
              window.lmAllLeadsCachedMap = map;
              db.close();
              resolve(map);
           };
           getAllReq.onerror = function() {
              window.lmAllLeadsCachedMap = {};
              db.close();
              resolve(window.lmAllLeadsCachedMap);
           };
        };
        request.onerror = function() {
           window.lmAllLeadsCachedMap = {};
           resolve(window.lmAllLeadsCachedMap);
        };
      } catch (e) {
        window.lmAllLeadsCachedMap = {};
        resolve(window.lmAllLeadsCachedMap);
      }
    });
    return window.lmAllLeadsLoadingPromise;
  }

  function getLeadByName(name) {
    if (window.lmAllLeadsCachedMap) {
       const norm = name.trim().toLowerCase();
       return Promise.resolve(window.lmAllLeadsCachedMap[norm] || null);
    }
    return cacheAllLeads().then(map => {
       const norm = name.trim().toLowerCase();
       return map[norm] || null;
    });
  }

  // 15b. Redesign individual lead cards in the dashboard
  function getCachedLeadByName(name) {
     return getLeadByName(name);
  }

  function upgradeSingleCard(card, index, offsetVal) {
     if (card.style.position !== 'relative') {
       card.style.position = 'relative';
     }

     const h3 = card.querySelector('h3');
     if (h3 && h3.parentElement) {
       h3.parentElement.style.paddingRight = '80px';
     }

     // Numbering badge
     let numBadge = card.querySelector('.lm-card-number');
     if (!numBadge) {
        numBadge = document.createElement('div');
        numBadge.className = 'lm-card-number';
        numBadge.style.cssText = `
         position: absolute;
         top: 12px;
         right: 12px;
         background: rgba(var(--lm-primary-rgb), 0.1);
         border: 1px solid rgba(var(--lm-primary-rgb), 0.3);
         color: var(--lm-primary);
         font-size: 10px;
         font-weight: 800;
         padding: 2px 6px;
         border-radius: 6px;
         box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
         font-family: var(--lm-font-body);
         pointer-events: none;
       `;
        card.appendChild(numBadge);
     }
     numBadge.textContent = `#${offsetVal + index + 1}`;

     // GMB Visit Button injection
     const applyYellowStyle = (el) => {
         el.classList.remove('lm-green-blink');
         el.style.cssText = `
             background: rgba(251, 191, 36, 0.15) !important;
             border: 1px solid var(--lm-primary) !important;
             color: var(--lm-primary) !important;
             box-shadow: 0 0 10px rgba(251, 191, 36, 0.3) !important;
             text-decoration: none !important;
             display: inline-flex !important;
             text-transform: uppercase !important;
             letter-spacing: 0.5px !important;
             transition: all 0.2s ease !important;
         `;
     };
     const applyGreenStyle = (el) => {
         el.classList.add('lm-green-blink');
         el.style.cssText = `
             background: rgba(var(--lm-primary-rgb), 0.15) !important;
             border: 1px solid var(--lm-primary) !important;
             color: var(--lm-primary) !important;
             text-shadow: 0 0 8px var(--lm-primary) !important;
             box-shadow: 0 0 10px rgba(var(--lm-primary-rgb), 0.2) !important;
             text-decoration: none !important;
             display: inline-flex !important;
             text-transform: uppercase !important;
             letter-spacing: 0.5px !important;
             transition: all 0.2s ease !important;
         `;
     };

     const injectGmbButton = (gmbUrl) => {
       if (!gmbUrl) return;
       let btn = card.querySelector('.lm-card-gmb-btn');
       if (!btn) {
          btn = document.createElement('a');
          btn.className = 'lm-card-gmb-btn px-3 py-1.5 rounded-md text-xs font-bold transition-all inline-flex items-center justify-center cursor-pointer';
          btn.textContent = 'GMB Visit';
          btn.target = '_blank';
          btn.href = gmbUrl;
          btn.style.cssText = 'margin-top: 8px; width: fit-content;';
          card.appendChild(btn);

          btn.onclick = (e) => {
              e.preventDefault();
              e.stopPropagation();
              let currentVisited = [];
              try {
                  currentVisited = JSON.parse(sessionStorage.getItem('lmVisitedUrls') || '[]');
              } catch (_) {}
              if (!currentVisited.includes(gmbUrl)) {
                  currentVisited.push(gmbUrl);
                  if (currentVisited.length > 200) currentVisited.shift();
                  try {
                      sessionStorage.setItem('lmVisitedUrls', JSON.stringify(currentVisited));
                  } catch (_) {}
              }
              applyYellowStyle(btn);
              copyToClipboard(gmbUrl, btn);
              window.open(gmbUrl, '_blank');
          };
       }
       
       let visitedUrls = [];
       try {
           visitedUrls = JSON.parse(sessionStorage.getItem('lmVisitedUrls') || '[]');
       } catch (_) {}
       
       if (visitedUrls.includes(gmbUrl)) {
           applyYellowStyle(btn);
       } else {
           applyGreenStyle(btn);
       }
     };

     // Try to get GMB URL from native elements first (synchronous extraction)
     const nativeLink = card.querySelector('a[href*="google.com/maps"]') || 
                        card.querySelector('a[href*="maps.google.com"]') || 
                        card.querySelector('a[href*="maps.app.goo.gl"]');
     if (nativeLink && nativeLink.href) {
       injectGmbButton(nativeLink.href);
     }

     if (!card.classList.contains('lm-card-upgraded')) {
       card.classList.add('lm-card-upgraded');
       
       card.style.background = 'linear-gradient(135deg, rgba(20, 26, 35, 0.7) 0%, rgba(13, 17, 23, 0.9) 100%)';
       card.style.border = '1px solid rgba(255, 255, 255, 0.05)';
       card.style.borderTop = '1px solid rgba(255, 255, 255, 0.08)';
       card.style.borderRadius = '16px';
       card.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)';
       card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
       
       if (h3) {
         h3.style.color = '#ffffff';
         h3.style.fontSize = '14px';
         h3.style.fontWeight = '800';
         h3.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.5)';
         h3.style.letterSpacing = '0.3px';
         h3.style.transition = 'color 0.2s ease';
         
         let titleContainer = h3.parentElement;
         let avatar = titleContainer ? titleContainer.querySelector('.lm-card-avatar') : null;
         const firstChar = h3.textContent.trim().charAt(0).toUpperCase() || 'B';
         const name = h3.textContent.trim();
         
         if (titleContainer) {
           titleContainer.style.display = 'flex';
           titleContainer.style.alignItems = 'center';
           titleContainer.style.setProperty('justify-content', 'flex-start', 'important');
           titleContainer.style.gap = '12px';
           titleContainer.style.width = '100%';
           
           if (!avatar) {
             avatar = document.createElement('div');
             avatar.className = 'lm-card-avatar';
             avatar.textContent = firstChar;
             titleContainer.insertBefore(avatar, h3);
           }
         }
         
         const infoContainer = card.querySelector('div.space-y-1\\.5');

         if (name) {
           getCachedLeadByName(name).then(record => {
             let webRow = card.querySelector('.lm-card-website');
             if (!webRow) {
               webRow = document.createElement('div');
               webRow.className = 'lm-card-website';
               webRow.style.cssText = `
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 8px 12px;
                border-radius: 10px;
                background: rgba(255, 255, 255, 0.02);
                border: 1px solid rgba(255, 255, 255, 0.04);
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                margin-bottom: 6px;
              `;
               if (infoContainer) {
                 infoContainer.appendChild(webRow);
               }
             }

             const website = record ? (record["Website"] || record["website"] || record["Website URL"] || record["website_url"] || record["Website link"] || record["website link"]) : null;
             
             if (website && website.trim() !== '' && website.trim().toLowerCase() !== 'not available' && website.trim().toLowerCase() !== 'n/a') {
               let cleanWeb = website.trim();
               webRow.innerHTML = `
                 <span style="font-size: 16px; line-height: 1; opacity: 0.9;">🌐</span>
                 <span class="lm-web-link" style="color: #e2e8f0; font-size: 12px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 220px;">${cleanWeb}</span>
               `;
               webRow.style.cursor = 'pointer';
               
               if (!webRow.dataset.hasListener) {
                 webRow.dataset.hasListener = 'true';
                 webRow.addEventListener('click', (e) => {
                   e.stopPropagation();
                   let url = cleanWeb;
                   if (!/^https?:\/\//i.test(url)) {
                     url = 'https://' + url;
                   }
                   window.open(url, '_blank');
                 });
               }
             } else {
               webRow.innerHTML = `
                 <span style="font-size: 16px; line-height: 1; opacity: 0.9;">🚫</span>
                 <span class="lm-glow-red" style="font-size: 12px;">No Website Found</span>
               `;
               webRow.style.cursor = 'not-allowed';
             }

             if (record) {
               const imgUrl = record["Image/Logo URL"] || record["Image_URL"] || record["Image URL"] || record["image_url"];
               if (imgUrl && imgUrl.trim().startsWith('http')) {
                 window.lmLeadImageCache[name] = imgUrl;
                 if (avatar && !avatar.querySelector('img')) {
                   avatar.innerHTML = `<img src="${imgUrl}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;" onerror="this.parentElement.textContent='${firstChar}'; this.parentElement.style.background=''; this.style.display='none';" />`;
                   avatar.style.background = 'transparent';
                   avatar.style.textShadow = 'none';
                 }
               }

               const gmbUrl = record["Google Maps URL"] || record["Google_Maps_URL"] || record["google_maps_url"] || record["GMB_URL"] || record["GMB URL"] || record["gmb_url"];
               if (gmbUrl) {
                 injectGmbButton(gmbUrl);
               }
             }
           });
         }
       }
       
       const infoContainer = card.querySelector('div.space-y-1\\.5');
       if (infoContainer) {
         const rows = Array.from(infoContainer.children).filter(r => !r.classList.contains('lm-card-website') && !r.classList.contains('lm-card-gmb-btn'));
         rows.forEach(row => {
           row.style.cssText = `
             display: flex;
             align-items: center;
             gap: 8px;
             padding: 8px 12px;
             border-radius: 10px;
             background: rgba(255, 255, 255, 0.02);
             border: 1px solid rgba(255, 255, 255, 0.04);
             margin-bottom: 6px;
             cursor: pointer;
           `;
           
           const textSpan = row.querySelector('span');
           if (textSpan) {
             textSpan.style.color = '#e2e8f0';
           }
           
           row.addEventListener('click', (e) => {
             e.stopPropagation();
             if (textSpan && textSpan.textContent.trim() !== '') {
               copyToClipboard(textSpan.textContent.trim(), row);
             }
           });
         });
       }
       
       card.addEventListener('mouseenter', () => {
         card.style.borderColor = 'rgba(var(--lm-primary-rgb), 0.3)';
         card.style.background = 'linear-gradient(135deg, rgba(20, 26, 35, 0.8) 0%, rgba(var(--lm-primary-rgb), 0.04) 100%)';
         card.style.transform = 'translateY(-3px)';
       });
       card.addEventListener('mouseleave', () => {
         card.style.borderColor = 'rgba(255, 255, 255, 0.05)';
         card.style.background = 'linear-gradient(135deg, rgba(20, 26, 35, 0.7) 0%, rgba(13, 17, 23, 0.9) 100%)';
         card.style.transform = 'translateY(0)';
       });
     }
  }

  function upgradeAllCards() {
     let cPage = 1;
     let pSize = 10;
     const sizeSelect = document.querySelector('div.bg-\\[\\#020617\\].px-4.py-3.shrink-0 select') || 
                          document.querySelector('select');
     if (sizeSelect) {
         pSize = parseInt(sizeSelect.value, 10) || 10;
     }
     const pagFooter = document.querySelector('div.bg-\\[\\#020617\\].px-4.py-3.shrink-0') || 
                    document.querySelector('footer') ||
                    document.querySelector('div:has(> select)');
     if (pagFooter) {
         const buttons = Array.from(pagFooter.querySelectorAll('button'));
         const activeBtn = buttons.find(btn => {
             const txt = btn.textContent.trim();
             if (!/^\d+$/.test(txt)) return false;
             const cls = btn.className || '';
             return cls.includes('bg-[var(--lm-primary)]') || 
                    cls.includes('bg-yellow') || 
                    cls.includes('text-[var(--lm-primary)]') ||
                    cls.includes('text-yellow') ||
                    cls.includes('border-[var(--lm-primary)]') ||
                    btn.style.backgroundColor === 'rgb(var(--lm-primary-rgb))' ||
                    btn.style.backgroundColor === 'var(--lm-primary)' ||
                    btn.style.color === 'rgb(var(--lm-primary-rgb))' ||
                    btn.style.color === 'var(--lm-primary)' ||
                    cls.includes('lm-text-primary') ||
                    cls.includes('lm-bg-primary') ||
                    cls.includes('bg-zinc-800') ||
                    cls.includes('bg-gray-800') ||
                    (btn.style.background && btn.style.background.includes('1DB954'));
         });
         if (activeBtn) {
             cPage = parseInt(activeBtn.textContent.trim(), 10) || 1;
         } else {
             const textNodes = [];
             const walk = document.createTreeWalker(pagFooter, NodeFilter.SHOW_TEXT, null, false);
             let n;
             while (n = walk.nextNode()) {
                 textNodes.push(n.textContent.trim());
             }
             for (let text of textNodes) {
                 const pageMatch = text.match(/Page\s+(\d+)\s+of\s+(\d+)/i);
                 if (pageMatch) {
                     cPage = parseInt(pageMatch[1], 10);
                     break;
                 }
             }
         }
     }
     const offsetVal = (cPage - 1) * pSize;

     const leadCards = document.querySelectorAll('div.bg-\\[\\#1e293b\\].border.border-\\[\\#334155\\].rounded-2xl.p-4');
     leadCards.forEach((card, index) => {
        upgradeSingleCard(card, index, offsetVal);
     });
  }

  upgradeAllCards();

  // 16. Redesign Stats/Counter Page (the big number + duration + speed)
  const statsContainers = document.querySelectorAll('div.flex.flex-col.items-center.justify-center.p-4.space-y-3');
  statsContainers.forEach(statsPage => {
    if (!statsPage.classList.contains('lm-stats-upgraded')) {
      statsPage.classList.add('lm-stats-upgraded');
      
      // Fix parent container to remove scrollbars
      const parent = statsPage.parentElement;
      if (parent) {
        parent.style.display = 'flex';
        parent.style.flexDirection = 'column';
        parent.style.overflow = 'hidden';
      }

      // Center the content vertically and shift it higher
      statsPage.style.flex = '1';
      statsPage.style.display = 'flex';
      statsPage.style.flexDirection = 'column';
      statsPage.style.justifyContent = 'center';
      statsPage.style.alignItems = 'center';
      statsPage.style.margin = '0';
      statsPage.style.padding = '0'; 
      statsPage.style.paddingBottom = '0'; // Pushes the visual center upwards
      statsPage.style.gap = '20px';
      
      // Style the big number
      const bigNum = statsPage.querySelector('span.text-6xl');
      if (bigNum) {
        bigNum.classList.add('leading-none');
        bigNum.style.color = 'var(--lm-primary)';
        bigNum.style.textShadow = '0 0 30px rgba(var(--lm-primary-rgb), 0.5), 0 0 60px rgba(var(--lm-primary-rgb), 0.2)';
        bigNum.style.fontSize = '72px';
        bigNum.style.fontWeight = '900';
        bigNum.style.letterSpacing = '-2px';
      }
      
      // Style the "Found" label
      const foundLabel = statsPage.querySelector('span.text-gray-400.text-\\[10px\\]');
      if (foundLabel) {
        foundLabel.textContent = 'LEADS FOUND';
        foundLabel.style.color = 'rgba(var(--lm-primary-rgb), 0.6)';
        foundLabel.style.fontSize = '10px';
        foundLabel.style.letterSpacing = '3px';
        foundLabel.style.fontWeight = '800';
      }
      
      // Remove the status pill ("Waiting for start" / "Running") as requested by the user
      const statusPill = statsPage.querySelector('div.bg-\\[\\#1e293b\\].border.border-\\[\\#334155\\].px-5.py-2.rounded-full');
      if (statusPill) {
        statusPill.style.display = 'none';
      }
      
      // Style the Duration / Speed stats bar and Skipped Leads block
      const statsBar = statsPage.querySelector('div.flex.w-full.max-w-\\[280px\\]');
      if (statsBar) {
        statsBar.style.background = 'rgba(25, 32, 41, 0.6)';
        statsBar.style.border = '1px solid rgba(var(--lm-primary-rgb), 0.2)';
        statsBar.style.boxShadow = '0 0 20px rgba(var(--lm-primary-rgb), 0.15)';
        statsBar.style.borderRadius = '16px';
        statsBar.style.padding = '12px 24px';
        statsBar.style.maxWidth = '300px';
        
        // Duration styling
        const durationLabel = Array.from(statsBar.querySelectorAll('span')).find(s => s.textContent.includes('Duration'));
        if (durationLabel) {
          durationLabel.style.color = 'rgba(148, 163, 184, 0.6)';
          durationLabel.style.letterSpacing = '1.5px';
        }
        const timeSpan = statsBar.querySelector('span.text-2xl');
        if (timeSpan) {
          timeSpan.style.color = '#f1f5f9';
          timeSpan.style.fontSize = '22px';
          timeSpan.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.3)';
        }
        
        // Divider
        const divider = statsBar.querySelector('div.w-px');
        if (divider) {
          divider.style.background = 'rgba(var(--lm-primary-rgb), 0.2)';
        }
        
        // Speed styling
        const speedLabel = Array.from(statsBar.querySelectorAll('span')).find(s => s.textContent.includes('Speed'));
        if (speedLabel) {
          speedLabel.style.color = 'rgba(148, 163, 184, 0.6)';
          speedLabel.style.letterSpacing = '1.5px';
        }
        const speedVal = statsBar.querySelector('span.text-xl, span.text-\\[\\var(--lm-primary)\\]');
        if (speedVal) {
          speedVal.textContent = 'FAST';
          speedVal.style.color = 'var(--lm-primary)';
          speedVal.style.textShadow = '0 0 15px rgba(var(--lm-primary-rgb), 0.6)';
        }
        const speedSvg = statsBar.querySelector('svg');
        if (speedSvg) {
          speedSvg.style.color = 'var(--lm-primary)';
          speedSvg.style.filter = 'drop-shadow(0 0 8px rgba(var(--lm-primary-rgb), 0.6))';
        }

        // Skipped Leads block (Hidden completely as requested)
        const skippedLeads = statsBar.nextElementSibling;
        if (skippedLeads) {
          skippedLeads.style.setProperty('display', 'none', 'important');
        }
      }
    }
  });

  // 15. Data Dashboard Header Overhaul
  const dashHeaders = document.querySelectorAll('header.px-6.py-4');
  dashHeaders.forEach(header => {
    if (header.textContent.includes('Data Dashboard') && !header.classList.contains('lm-dash-header-upgraded')) {
      header.classList.add('lm-dash-header-upgraded');

      // Change header to flex-center instead of justify-between to pull everything to the middle
      header.classList.remove('justify-between');
      header.classList.add('justify-center');
      header.style.gap = '2rem'; // Spacing between the logo+title and the stats area
      
      const leftSection = header.querySelector('div.flex.items-center.gap-4');
      const rightSection = header.querySelectorAll('div.flex.items-center.gap-4')[1];

      if (leftSection) {
         // Hide the native logo and title section completely since we have the floating logo on the left
         leftSection.style.display = 'none';
      }

      if (rightSection) {
         // 15.3. Redesign Stats Boxes (Total / Filtered)
         const statsBoxes = rightSection.querySelectorAll('div.px-3.py-1');
         statsBoxes.forEach(box => {
            box.style.background = 'rgba(15, 23, 42, 0.6)';
            box.style.border = '1px solid rgba(var(--lm-primary-rgb), 0.3)';
            box.style.boxShadow = 'inset 0 0 10px rgba(var(--lm-primary-rgb),0.1)';
            box.style.backdropFilter = 'blur(10px)';
            box.style.padding = '8px 16px';
            
            const label = box.querySelector('.text-\\[9px\\]');
            if (label) {
               label.style.color = 'var(--lm-primary)';
               label.style.letterSpacing = '1px';
            }
            const val = box.querySelector('.text-sm');
            if (val) {
               val.style.color = '#fff';
               val.style.textShadow = '0 0 10px rgba(255,255,255,0.4)';
               val.style.fontSize = '16px';
            }
         });

         // 15.4. Redesign Contact Button (Email)
         const contactBtn = rightSection.querySelector('a');
         if (contactBtn) {
            const emailBtn = document.createElement('a');
            emailBtn.href = '#';
            emailBtn.title = 'Email Geo Bucket';
            emailBtn.className = 'w-10 h-10 rounded-xl flex items-center justify-center transition-all group cursor-pointer';
            emailBtn.style.background = 'rgba(var(--lm-primary-rgb), 0.1)';
            emailBtn.style.border = '1px solid var(--lm-primary)';
            emailBtn.style.boxShadow = '0 0 15px rgba(var(--lm-primary-rgb), 0.2)';
            
            emailBtn.innerHTML = '<span class="material-symbols-outlined" style="font-size: 20px; color: var(--lm-primary); animation: lm-pulse-glow 2s infinite alternate;">mail</span>';
            
            emailBtn.onclick = (e) => {
               e.preventDefault();
               if (emailBtn.dataset.clicked === 'true') return;
               emailBtn.dataset.clicked = 'true';
               emailBtn.style.pointerEvents = 'none';
               
               const originalHTML = emailBtn.innerHTML;
               const originalBg = emailBtn.style.background;
               const originalBorder = emailBtn.style.border;
               const originalShadow = emailBtn.style.boxShadow;
               
               // Instant visual feedback: turn button green, show a loading spinner
               emailBtn.style.background = 'var(--lm-primary)';
               emailBtn.style.borderColor = 'var(--lm-primary)';
               emailBtn.style.boxShadow = '0 0 20px rgba(var(--lm-primary-rgb), 0.6)';
               emailBtn.innerHTML = '<span class="material-symbols-outlined" style="font-size: 20px; color: #ffffff; animation: lm-spin 1s linear infinite;">sync</span>';
               
               navigator.clipboard.writeText('shihabmiah.work@gmail.com').then(() => {
                  const popup = document.createElement('div');
                  popup.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] flex flex-col items-center justify-center p-8 rounded-2xl shadow-2xl';
                  popup.style.background = 'rgba(15, 23, 42, 0.98)';
                  popup.style.border = '1px solid var(--lm-primary)';
                  popup.style.backdropFilter = 'blur(20px)';
                  popup.style.boxShadow = '0 20px 50px rgba(0,0,0,0.8), inset 0 0 20px rgba(var(--lm-primary-rgb), 0.15)';
                  
                  popup.innerHTML = `
                     <span class="material-symbols-outlined" style="font-size: 56px; color: var(--lm-primary); margin-bottom: 16px; animation: lm-pulse-glow 1.5s infinite alternate;">check_circle</span>
                     <div style="font-size: 24px; font-weight: 900; color: #fff; text-transform: uppercase; letter-spacing: 1.5px; text-shadow: 0 0 15px rgba(var(--lm-primary-rgb), 0.5);">Gmail is copied</div>
                     <div style="font-size: 14px; color: #94a3b8; font-weight: bold; margin-top: 8px;">A new tab will open with Gmail after <span id="lm-countdown" style="color: var(--lm-primary); font-weight: 900; font-size: 20px;">5</span> sec countdown</div>
                  `;
                  
                  document.body.appendChild(popup);
                  
                  let count = 5;
                  const interval = setInterval(() => {
                     count--;
                     const countEl = document.getElementById('lm-countdown');
                     if (countEl) countEl.textContent = count;
                     
                     if (count <= 0) {
                        clearInterval(interval);
                        popup.style.opacity = '0';
                        popup.style.transition = 'opacity 0.5s ease';
                        setTimeout(() => popup.remove(), 500);
                        
                        // Reset button state
                        emailBtn.dataset.clicked = 'false';
                        emailBtn.style.pointerEvents = 'auto';
                        emailBtn.style.background = originalBg;
                        emailBtn.style.borderColor = originalBorder;
                        emailBtn.style.boxShadow = originalShadow;
                        emailBtn.innerHTML = originalHTML;
                        
                        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=shihabmiah.work@gmail.com&su=Query', '_blank');
                     }
                  }, 1000);
               }).catch(() => {
                  // Fallback in case clipboard fails
                  emailBtn.dataset.clicked = 'false';
                  emailBtn.style.pointerEvents = 'auto';
                  emailBtn.style.background = originalBg;
                  emailBtn.style.borderColor = originalBorder;
                  emailBtn.style.boxShadow = originalShadow;
                  emailBtn.innerHTML = originalHTML;
               });
            };
            
            emailBtn.onmouseenter = () => { 
               emailBtn.style.background = 'var(--lm-primary)'; 
               emailBtn.style.transform = 'translateY(-2px)';
               emailBtn.querySelector('span').style.color = '#000'; 
            };
            emailBtn.onmouseleave = () => { 
               emailBtn.style.background = 'rgba(var(--lm-primary-rgb), 0.1)'; 
               emailBtn.style.transform = 'translateY(0)';
               emailBtn.querySelector('span').style.color = 'var(--lm-primary)'; 
            };
            
            contactBtn.parentNode.replaceChild(emailBtn, contactBtn);
         }

         // 15.5. Redesign Close Button into LinkedIn Link
         const closeBtn = rightSection.querySelector('button');
         if (closeBtn) {
            // We'll replace the button with an anchor tag to cleanly handle the redirect
            const linkedinBtn = document.createElement('a');
            linkedinBtn.href = 'https://www.linkedin.com/in/shihab-miah-925781280/';
            linkedinBtn.target = '_blank';
            linkedinBtn.title = 'Connect on LinkedIn';
            linkedinBtn.className = 'w-10 h-10 rounded-xl flex items-center justify-center transition-all group cursor-pointer';
            linkedinBtn.style.background = 'rgba(10, 102, 194, 0.1)'; // LinkedIn Blue tint
            linkedinBtn.style.border = '1px solid #0a66c2';
            linkedinBtn.style.boxShadow = '0 0 15px rgba(10, 102, 194, 0.2)';
            
            linkedinBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#0a66c2" style="animation: lm-pulse-glow 2.5s infinite alternate;"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>';
            
            linkedinBtn.onmouseenter = () => { 
               linkedinBtn.style.background = '#0a66c2'; 
               linkedinBtn.style.transform = 'translateY(-2px)';
               linkedinBtn.querySelector('svg').style.fill = '#fff'; 
            };
            linkedinBtn.onmouseleave = () => { 
               linkedinBtn.style.background = 'rgba(10, 102, 194, 0.1)'; 
               linkedinBtn.style.transform = 'translateY(0)';
               linkedinBtn.querySelector('svg').style.fill = '#0a66c2'; 
            };
            
            // Replace the old button
            closeBtn.parentNode.replaceChild(linkedinBtn, closeBtn);
         }
         
         // Remove the ugly dividing line
         const divider = rightSection.querySelector('div.w-px');
         if (divider) divider.style.display = 'none';
      }
    }
  });

  // 16. Data Dashboard Toolbar Overhaul
  const toolbars = document.querySelectorAll('div.px-6.py-3.bg-\\[\\#0f172a\\]');
  toolbars.forEach(toolbar => {
    if (!toolbar.classList.contains('lm-toolbar-upgraded')) {
       // Make sure it's the right toolbar by checking if it contains the export button
       if (toolbar.querySelector('button') && toolbar.textContent.includes('Export Data')) {
         toolbar.classList.add('lm-toolbar-upgraded');
         
         // Center everything
         toolbar.classList.remove('justify-between');
         toolbar.classList.add('justify-center');
         toolbar.style.gap = '3rem';
         
         const leftGroup = toolbar.querySelector('div.flex.items-center.gap-3.flex-1');
         const rightGroup = toolbar.querySelectorAll('div.flex.items-center.gap-3')[1] || toolbar.lastElementChild;
         
         if (leftGroup) {
            // Remove flex-1 so it centers nicely
            leftGroup.classList.remove('flex-1');
            
            // 16.1. Redesign Search Input
            const searchBox = leftGroup.querySelector('input');
            if (searchBox) {
               searchBox.placeholder = 'Query Intel Database...';
               searchBox.style.background = 'rgba(15, 23, 42, 0.6)';
               searchBox.style.border = '1px solid rgba(var(--lm-primary-rgb), 0.3)';
               searchBox.style.boxShadow = 'inset 0 0 10px rgba(0,0,0,0.5)';
               searchBox.style.color = '#fff';
               searchBox.style.transition = 'all 0.3s ease';
               searchBox.className = searchBox.className.replace('focus:border-[var(--lm-primary)]', '');
               searchBox.addEventListener('focus', () => {
                  searchBox.style.borderColor = 'var(--lm-primary)';
                  searchBox.style.boxShadow = 'inset 0 0 10px rgba(0,0,0,0.5), 0 0 15px rgba(var(--lm-primary-rgb), 0.2)';
               });
               searchBox.addEventListener('blur', () => {
                  searchBox.style.borderColor = 'rgba(var(--lm-primary-rgb), 0.3)';
                  searchBox.style.boxShadow = 'inset 0 0 10px rgba(0,0,0,0.5)';
               });
               
               const searchIcon = searchBox.parentElement.querySelector('svg');
               if (searchIcon) {
                  searchIcon.style.color = 'var(--lm-primary)';
                  searchIcon.style.animation = 'lm-pulse-glow 2s infinite alternate';
               }
            }
            
            // 16.2. Redesign Filters Button
            const filtersBtn = Array.from(leftGroup.querySelectorAll('button')).find(b => b.textContent.includes('Filters'));
            if (filtersBtn) {
               filtersBtn.innerHTML = '<span class="material-symbols-outlined" style="font-size:18px;">tune</span> <span>DATA FILTERS</span>';
               filtersBtn.className = 'flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer';
               filtersBtn.style.background = 'rgba(var(--lm-primary-rgb), 0.1)';
               filtersBtn.style.border = '1px solid rgba(var(--lm-primary-rgb), 0.4)';
               filtersBtn.style.color = 'var(--lm-primary)';
               filtersBtn.style.letterSpacing = '1px';
               filtersBtn.onmouseenter = () => {
                  filtersBtn.style.background = 'rgba(var(--lm-primary-rgb), 0.2)';
                  filtersBtn.style.transform = 'translateY(-1px)';
                  filtersBtn.style.boxShadow = '0 5px 15px rgba(var(--lm-primary-rgb), 0.2)';
               };
               filtersBtn.onmouseleave = () => {
                  filtersBtn.style.background = 'rgba(var(--lm-primary-rgb), 0.1)';
                  filtersBtn.style.transform = 'translateY(0)';
                  filtersBtn.style.boxShadow = 'none';
               };
            }
            
            // 16.2b. Clean Data Button (Toggle)
            if (!leftGroup.querySelector('.lm-clean-data-btn')) {
               const cleanBtn = document.createElement('button');
               cleanBtn.className = 'lm-clean-data-btn flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer';
               
               const updateCleanBtnStyle = () => {
                  if (window.lmCleanDataActive) {
                     cleanBtn.style.background = 'var(--lm-primary)';
                     cleanBtn.style.border = '1px solid var(--lm-primary)';
                     cleanBtn.style.color = '#000';
                     cleanBtn.style.boxShadow = '0 0 15px rgba(var(--lm-primary-rgb), 0.4)';
                     cleanBtn.innerHTML = '<span class="material-symbols-outlined" style="font-size:18px; color: #ffffff;">cleaning_services</span> <span style="letter-spacing:1px; color: #ffffff;">FULL VIEW</span>';
                  } else {
                     cleanBtn.style.background = 'rgba(var(--lm-primary-rgb), 0.1)';
                     cleanBtn.style.border = '1px solid rgba(var(--lm-primary-rgb), 0.4)';
                     cleanBtn.style.color = 'var(--lm-primary)';
                     cleanBtn.style.boxShadow = 'none';
                     cleanBtn.innerHTML = '<span class="material-symbols-outlined" style="font-size:18px; color: var(--lm-primary);">cleaning_services</span> <span style="letter-spacing:1px; color: var(--lm-primary);">CLEAN DATA</span>';
                  }
               };
               
               updateCleanBtnStyle();
               
               cleanBtn.onclick = (e) => {
                  e.preventDefault();
                  window.lmCleanDataActive = !window.lmCleanDataActive;
                  updateCleanBtnStyle();
                  applyCleanDataView(window.lmCleanDataActive);
               };
               
               cleanBtn.onmouseenter = () => {
                  if (!window.lmCleanDataActive) {
                     cleanBtn.style.background = 'rgba(var(--lm-primary-rgb), 0.2)';
                     cleanBtn.style.transform = 'translateY(-1px)';
                     cleanBtn.style.boxShadow = '0 5px 15px rgba(var(--lm-primary-rgb), 0.2)';
                  } else {
                     cleanBtn.style.transform = 'translateY(-1px)';
                  }
               };
               cleanBtn.onmouseleave = () => {
                  if (!window.lmCleanDataActive) {
                     cleanBtn.style.background = 'rgba(var(--lm-primary-rgb), 0.1)';
                     cleanBtn.style.transform = 'translateY(0)';
                     cleanBtn.style.boxShadow = 'none';
                  } else {
                     cleanBtn.style.transform = 'translateY(0)';
                  }
               };
               
               if (filtersBtn) {
                  filtersBtn.parentNode.insertBefore(cleanBtn, filtersBtn.nextSibling);
               } else {
                  leftGroup.appendChild(cleanBtn);
               }

               // Show Guide if session flag is set
               if (sessionStorage.getItem('lmShowCleanDataGuide') === 'true') {
                  // Ensure custom guide animation stylesheet is loaded
                  if (!document.getElementById('lm-guide-styles')) {
                     const style = document.createElement('style');
                     style.id = 'lm-guide-styles';
                     style.textContent = `
                        @keyframes lm-clean-blink {
                           0% { box-shadow: 0 0 0 0 rgba(var(--lm-primary-rgb), 0.7); background: rgba(var(--lm-primary-rgb), 0.2); }
                           70% { box-shadow: 0 0 0 10px rgba(var(--lm-primary-rgb), 0); background: rgba(var(--lm-primary-rgb), 0.4); }
                           100% { box-shadow: 0 0 0 0 rgba(var(--lm-primary-rgb), 0); background: rgba(var(--lm-primary-rgb), 0.2); }
                        }
                        .lm-clean-blink {
                           animation: lm-clean-blink 1.5s infinite !important;
                           border-color: var(--lm-primary) !important;
                        }
                     `;
                     document.head.appendChild(style);
                  }
                  if (window.lmShowCleanDataGuidePopup) {
                     window.lmShowCleanDataGuidePopup(cleanBtn);
                  }
               }
            }
            
            // Hide the ugly dividing line
            const divider = leftGroup.querySelector('div.w-px');
            if (divider) divider.style.display = 'none';
            
            // 16.3. Redesign View Toggles (List/Grid)
            const viewToggleBox = leftGroup.querySelector('div.p-1');
            if (viewToggleBox) {
               viewToggleBox.style.background = 'rgba(15, 23, 42, 0.6)';
               viewToggleBox.style.border = '1px solid rgba(255,255,255,0.1)';
               const viewBtns = viewToggleBox.querySelectorAll('button');
               viewBtns.forEach(btn => {
                  if (btn.classList.contains('bg-\\[\\var(--lm-primary)\\]')) {
                     btn.className = btn.className.replace('bg-[var(--lm-primary)]', '');
                     btn.style.background = 'var(--lm-primary)';
                     btn.style.color = '#000';
                     btn.style.boxShadow = '0 0 10px rgba(var(--lm-primary-rgb),0.3)';
                  }
               });
            }
         }
         
         if (rightGroup) {
            // 16.4. Redesign Selected Count
            const selectedText = rightGroup.querySelector('.text-xs');
            if (selectedText) {
               selectedText.style.color = 'var(--lm-primary)';
               selectedText.style.fontWeight = 'bold';
               selectedText.style.textTransform = 'uppercase';
               selectedText.style.letterSpacing = '1px';
               selectedText.style.animation = 'lm-text-glow-sub 1.5s infinite alternate';
               // Rewrite text via MutationObserver to always be "X QUEUED"
               const textObserver = new MutationObserver(() => {
                  if (selectedText.textContent.includes('selected')) {
                     selectedText.textContent = selectedText.textContent.replace('selected', 'QUEUED');
                  }
               });
               textObserver.observe(selectedText, { characterData: true, childList: true, subtree: true });
               if (selectedText.textContent.includes('selected')) {
                  selectedText.textContent = selectedText.textContent.replace('selected', 'QUEUED');
               }
            }
            
            // 16.5. Redesign Export Data Button
            const exportBtn = Array.from(rightGroup.querySelectorAll('button')).find(b => b.textContent.includes('Export Data'));
            if (exportBtn) {
               exportBtn.innerHTML = '<span class="material-symbols-outlined" style="font-size:18px;">rocket_launch</span> <span style="letter-spacing:1.5px;">DOWNLOAD LEADS</span>';
               exportBtn.className = 'flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-black transition-all shadow-lg cursor-pointer';
               exportBtn.style.background = 'linear-gradient(135deg, var(--lm-primary), #15803d)';
               exportBtn.style.color = '#000';
               exportBtn.style.border = 'none';
               exportBtn.style.boxShadow = '0 5px 20px rgba(var(--lm-primary-rgb), 0.4)';
               exportBtn.onmouseenter = () => {
                  exportBtn.style.transform = 'translateY(-2px)';
                  exportBtn.style.boxShadow = '0 8px 25px rgba(var(--lm-primary-rgb), 0.6)';
               };
               exportBtn.onmouseleave = () => {
                  exportBtn.style.transform = 'translateY(0)';
                  exportBtn.style.boxShadow = '0 5px 20px rgba(var(--lm-primary-rgb), 0.4)';
               };
            }
         }
       }
    }
  });

  // 17. Solidify Filter Dropdown Panel
  const absolutePanels = document.querySelectorAll('div.absolute, div.fixed');
  absolutePanels.forEach(panel => {
     // Identify if it's likely a dropdown/modal (z-index 50) and has the default dark blue bg
     if (panel.classList.contains('z-50') && (panel.classList.contains('bg-[#0f172a]') || panel.classList.contains('bg-[#1e293b]'))) {
         // Also verify it's not our main header or modal overlays we already styled
         if (!panel.classList.contains('lm-solid-dropdown') && !panel.classList.contains('lm-export-upgraded')) {
            panel.classList.add('lm-solid-dropdown');
            // Force it to be completely solid dark with a neon border so it's easy to read
            panel.style.cssText = `
               background: rgba(15, 23, 42, 0.98) !important;
               border: 1px solid var(--lm-primary) !important;
               box-shadow: 0 20px 40px rgba(0,0,0,0.8), inset 0 0 20px rgba(var(--lm-primary-rgb), 0.1) !important;
               backdrop-filter: blur(20px) !important;
            `;
         }
     }
  });

  // 18. Observe and Apply Clean Data View
  const table = document.querySelector('table');
  if (table) {
     if (!table.classList.contains('lm-observed')) {
        table.classList.add('lm-observed');
        const tableObserver = new MutationObserver(() => {
           applyCleanDataView(window.lmCleanDataActive);
        });
        tableObserver.observe(table, { childList: true, subtree: true });
     }
     applyCleanDataView(window.lmCleanDataActive);
  }

  // Automatically select the maximum items per page to show all leads
  const pageSizeSelect = document.querySelector('div.bg-\\[\\#020617\\].px-4.py-3.shrink-0 select') || 
                         document.querySelector('select');
  if (pageSizeSelect && !pageSizeSelect.classList.contains('lm-max-selected')) {
     pageSizeSelect.classList.add('lm-max-selected');
     if (pageSizeSelect.options.length > 0) {
        const lastOption = pageSizeSelect.options[pageSizeSelect.options.length - 1];
        if (pageSizeSelect.value !== lastOption.value) {
           const tracker = pageSizeSelect._valueTracker;
           pageSizeSelect.value = lastOption.value;
           if (tracker) {
              tracker.setValue(lastOption.value);
           }
           const event = new Event('change', { bubbles: true });
           pageSizeSelect.dispatchEvent(event);
        }
     }
  }

}

// Slow timer for updating the bucket count (every 3 seconds)
setInterval(() => {
  const bucketCountSpan = document.getElementById('lm-bucket-count');
  if (bucketCountSpan && typeof getLeadsCount === 'function') {
     getLeadsCount().then(count => {
        if (bucketCountSpan.textContent !== String(count)) {
           bucketCountSpan.textContent = String(count);
           window.lmAllLeadsCachedMap = null;
           window.lmAllLeadsLoadingPromise = null;
        }
     });
  }
}, 3000);

// Throttled UI Upgrade MutationObserver
(function() {
  let upgradeTimeout = null;
  const uiObserver = new MutationObserver(() => {
    if (!upgradeTimeout) {
      upgradeTimeout = setTimeout(() => {
        upgradeTimeout = null;
        applyAllUIUpgrades();
      }, 100);
    }
  });
  uiObserver.observe(document.body, { childList: true, subtree: true });
  // Initial run
  applyAllUIUpgrades();
})();

// Throttled MutationObserver for instant, lag-free card upgrades
(function() {
  let upgradeTimeout = null;
  const cardObserver = new MutationObserver((mutations) => {
    let shouldUpgrade = false;
    for (let mutation of mutations) {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        shouldUpgrade = true;
        break;
      }
    }
    if (shouldUpgrade) {
      if (upgradeTimeout) clearTimeout(upgradeTimeout);
      upgradeTimeout = setTimeout(() => {
        upgradeTimeout = null;
        if (typeof upgradeAllCards === 'function') {
          upgradeAllCards();
        }
      }, 20);
    }
  });
  cardObserver.observe(document.body, { childList: true, subtree: true });
})();

// --- Initial Loading Screen Logic ---
(async function() {
  const player = document.getElementById("lottie-player");
  const cssLoader = document.getElementById("lm-css-loader");
  if (player && cssLoader) {
    player.addEventListener("ready", () => {
      cssLoader.style.display = "none";
    });
    // Fallback in case player takes too long or event differs
    setTimeout(() => {
      cssLoader.style.display = "none";
    }, 500);
  }

  const newsEl = document.getElementById("loading-news");
  const overlay = document.getElementById("initial-loading-overlay");

  const tips = [
    "Tip: Use 'Deep Web Scan' to automatically extract email addresses and social profiles directly from business websites.",
    "Tip: The 'Clean Data' toolbar option hides less important tables to show you only high-value client intel.",
    "Tip: You can export your leads instantly to Excel or CSV formats using the Download Leads button.",
    "Tip: Make sure to initialize the Google Maps environment before running a new scan query.",
    "Tip: Toggle filters to isolate businesses with missing phone numbers or unclaimed GMB profiles.",
    "Tip: The 'In Bucket' status bar counter shows the total leads saved in your local database.",
    "Tip: Clear the leads database using the 'Clear All' button on the Leads page to start fresh.",
    "Tip: Tap 'Pause scan' to suspend the scraper temporarily, then tap 'Resume' to continue.",
    "Tip: Type multiple keywords separated by commas or newlines to scan in bulk.",
    "Tip: The extension automatically filters out duplicate business records to keep your list clean.",
    "Tip: Select individual leads to selectively download them or queue them for outreach.",
    "Tip: Ensure you configure a 2Captcha API key to bypass Google Maps captchas automatically.",
    "Tip: You can search leads by business name, address, or email in the search bar.",
    "Tip: Review Average Rating and Review Count to qualify prospects before pitching them.",
    "Tip: Claimed GMB profiles are harder to pitch; target unclaimed profiles for quick wins.",
    "Tip: Use Gmail shortcut buttons to copy or open direct outreach screens instantly.",
    "Tip: You can connect directly on LinkedIn with the support team using the footer button.",
    "Tip: Keep the side panel open to prevent the scraping process from being suspended by Chrome.",
    "Tip: The 'System Active' indicator pulses to confirm that the lead extraction worker is online.",
    "Tip: Website domain links are validated in real-time to avoid scraping dead links.",
    "Tip: Run searches for local service providers like plumbers or dentists for the highest conversion rates.",
    "Tip: If Google Maps gets stuck, click 'Initialize Environment' to reset the automation page."
  ];

  window.lmShowLoadingScreen = function(durationMs) {
    if (newsEl) {
      const randomTip = tips[Math.floor(Math.random() * tips.length)];
      newsEl.textContent = randomTip;
    }
    if (overlay) {
      overlay.style.display = "flex";
      // Force layout
      overlay.offsetHeight;
      overlay.style.opacity = "1";
      overlay.style.transition = "opacity 0.5s ease";

      if (window.lmLoaderTimeout) clearTimeout(window.lmLoaderTimeout);
      if (window.lmLoaderHideTimeout) clearTimeout(window.lmLoaderHideTimeout);

      window.lmLoaderTimeout = setTimeout(() => {
        overlay.style.opacity = "0";
        window.lmLoaderHideTimeout = setTimeout(() => {
          overlay.style.display = "none";
        }, 500);
      }, durationMs);
    }
  };

  // Determine if this is the first load in the browser session
  let hasLoaded = false;
  try {
    hasLoaded = !!sessionStorage.getItem("hasLoadedBefore");
  } catch (_) {}

  const checkChromeSession = () => {
    return new Promise((resolve) => {
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.session) {
        chrome.storage.session.get(["hasLoadedBefore"], (res) => {
          resolve(!!(res && res.hasLoadedBefore));
        });
      } else {
        resolve(false);
      }
    });
  };

  const sessionLoaded = await checkChromeSession();
  if (hasLoaded || sessionLoaded) {
    // Already loaded in this session, skip initial loading screen
    if (overlay) {
      overlay.style.display = "none";
      overlay.style.opacity = "0";
    }
    try {
      sessionStorage.setItem("hasLoadedBefore", "true");
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.session) {
        chrome.storage.session.set({ hasLoadedBefore: true });
      }
    } catch (_) {}
  } else {
    // First load in this session! Show loading for 3.0 seconds
    try {
      sessionStorage.setItem("hasLoadedBefore", "true");
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.session) {
        chrome.storage.session.set({ hasLoadedBefore: true });
      }
    } catch (_) {}
    window.lmShowLoadingScreen(3000); // 3 seconds loading duration
  }
})();

// --- Clean Data View Implementation ---
window.lmCleanDataActive = window.lmCleanDataActive !== undefined ? window.lmCleanDataActive : true;

window.lmShowCleanDataGuidePopup = function(btn) {
    if (document.getElementById('lm-clean-guide-popup')) return;
    
    // Add blink class to the button
    btn.classList.add('lm-clean-blink');
    
    // Create popup element
    const popup = document.createElement('div');
    popup.id = 'lm-clean-guide-popup';
    popup.className = 'fixed z-[10000] flex flex-col gap-2 p-4 rounded-xl shadow-2xl transition-all duration-500 opacity-0 transform translate-y-2';
    
    // Style it beautiful, glassmorphic dark green
    popup.style.cssText = `
        background: rgba(13, 20, 29, 0.96);
        border: 1px solid var(--lm-primary);
        box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(var(--lm-primary-rgb), 0.2);
        color: #fff;
        width: 250px;
        backdrop-filter: blur(20px);
        font-family: var(--lm-font-body);
        pointer-events: auto;
    `;
    
    popup.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:6px; margin-bottom:6px;">
            <div style="display:flex; align-items:center; gap:6px; color:var(--lm-primary); font-weight:800; font-size:12px; letter-spacing:0.5px; text-transform:uppercase;">
                <span class="material-symbols-outlined" style="font-size:16px;">lightbulb</span>
                <span>Pro Tip</span>
            </div>
            <button id="lm-close-guide" style="background:transparent; border:none; color:#94a3b8; cursor:pointer; padding:0; display:flex; align-items:center; justify-content:center;">
                <span class="material-symbols-outlined" style="font-size:16px;">close</span>
            </button>
        </div>
        <div style="font-size:12px; line-height:1.4; font-weight:600; color:#dce3f0;">
            Click <strong style="color:var(--lm-primary);">CLEAN DATA</strong> to tidy up your table and show only essential, high-value client details!
        </div>
    `;
    
    document.body.appendChild(popup);
    
    // Position it below the button
    const positionPopup = () => {
        const rect = btn.getBoundingClientRect();
        const left = rect.left + (rect.width / 2) - 125;
        const top = rect.bottom + 12;
        popup.style.left = `${Math.max(12, Math.min(window.innerWidth - 262, left))}px`;
        popup.style.top = `${top}px`;
    };
    
    positionPopup();
    
    // Listen to resize/scroll to reposition
    window.addEventListener('resize', positionPopup);
    window.addEventListener('scroll', positionPopup);
    
    // Fade in
    setTimeout(() => {
        popup.style.opacity = '1';
        popup.style.transform = 'translateY(0)';
    }, 50);
    
    const dismissGuide = () => {
        btn.classList.remove('lm-clean-blink');
        sessionStorage.removeItem('lmShowCleanDataGuide');
        popup.style.opacity = '0';
        popup.style.transform = 'translateY(2px)';
        window.removeEventListener('resize', positionPopup);
        window.removeEventListener('scroll', positionPopup);
        setTimeout(() => popup.remove(), 500);
    };
    
    popup.querySelector('#lm-close-guide').onclick = (e) => {
        e.stopPropagation();
        dismissGuide();
    };
    
    btn.addEventListener('click', dismissGuide);
}

function copyToClipboard(text, element) {
    if (!text) return;
    
    const showBadge = () => {
        // Create a small "Copied!" notification badge
        const rect = element.getBoundingClientRect();
        const badge = document.createElement('div');
        badge.textContent = 'Copied!';
        badge.style.cssText = `
            position: fixed;
            z-index: 10001;
            background: var(--lm-primary);
            color: #ffffff;
            font-weight: 800;
            font-size: 11px;
            padding: 4px 8px;
            border-radius: 4px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            pointer-events: none;
            opacity: 0;
            transform: translateY(4px);
            transition: all 0.3s ease;
            font-family: var(--lm-font-body);
        `;
        
        document.body.appendChild(badge);
        const badgeRect = badge.getBoundingClientRect();
        badge.style.left = `${rect.left + (rect.width / 2) - (badgeRect.width / 2)}px`;
        badge.style.top = `${rect.top - badgeRect.height - 6}px`;
        
        // Force reflow and fade in
        badge.offsetHeight;
        badge.style.opacity = '1';
        badge.style.transform = 'translateY(0)';
        
        // Fade out and remove
        setTimeout(() => {
            badge.style.opacity = '0';
            badge.style.transform = 'translateY(-4px)';
            setTimeout(() => badge.remove(), 300);
        }, 1000);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(showBadge)
            .catch(err => {
                console.warn('Navigator writeText failed, using fallback:', err);
                fallbackCopyToClipboard(text, showBadge);
            });
    } else {
        fallbackCopyToClipboard(text, showBadge);
    }
}

function fallbackCopyToClipboard(text, callback) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            callback();
        } else {
            console.error('Fallback copy failed');
        }
    } catch (err) {
        console.error('Fallback copy error: ', err);
    }
    document.body.removeChild(textArea);
}

function formatTableCells(table, ths) {
    // Ensure styles are injected
    if (!document.getElementById('lm-glow-styles')) {
        const style = document.createElement('style');
        style.id = 'lm-glow-styles';
        style.textContent = `
            @keyframes lm-white-glow {
               0% { text-shadow: 0 0 4px rgba(255, 255, 255, 0.4), 0 0 8px rgba(255, 255, 255, 0.2); }
               50% { text-shadow: 0 0 16px rgba(255, 255, 255, 1), 0 0 25px rgba(255, 255, 255, 0.8), 0 0 35px rgba(255, 255, 255, 0.6); }
               100% { text-shadow: 0 0 4px rgba(255, 255, 255, 0.4), 0 0 8px rgba(255, 255, 255, 0.2); }
            }
            @keyframes lm-white-blink {
               0% { opacity: 0.4; }
               50% { opacity: 1; }
               100% { opacity: 0.4; }
            }
            @keyframes lm-green-blink {
               0% { opacity: 0.6; box-shadow: 0 0 5px rgba(var(--lm-primary-rgb), 0.2); }
               50% { opacity: 1; box-shadow: 0 0 15px rgba(var(--lm-primary-rgb), 0.7); }
               100% { opacity: 0.6; box-shadow: 0 0 5px rgba(var(--lm-primary-rgb), 0.2); }
            }
            .lm-glow-white {
               color: #ffffff !important;
               font-weight: 900 !important;
               animation: lm-white-glow 2s infinite alternate !important;
               text-shadow: 0 0 8px rgba(255, 255, 255, 0.5) !important;
            }
            .lm-white-blink {
               animation: lm-white-blink 1.5s infinite ease-in-out !important;
            }
            .lm-glow-white.lm-white-blink {
               color: #ffffff !important;
               font-weight: 900 !important;
               animation: lm-white-glow 2s infinite alternate, lm-white-blink 1.5s infinite ease-in-out !important;
               text-shadow: 0 0 8px rgba(255, 255, 255, 0.5) !important;
            }
            .lm-glow-white.lm-white-blink *, .lm-glow-white.lm-white-blink a {
               color: #ffffff !important;
               font-weight: 900 !important;
               animation: lm-white-glow 2s infinite alternate, lm-white-blink 1.5s infinite ease-in-out !important;
               text-shadow: 0 0 8px rgba(255, 255, 255, 0.5) !important;
            }
            .lm-green-blink {
               animation: lm-green-blink 1.5s infinite ease-in-out !important;
            }
            .lm-glow-white, .lm-white-blink {
               cursor: copy !important;
            }
            
            /* Table structure controls */
            body.lm-clean-table-active table, table.lm-clean-table-active {
               table-layout: fixed !important;
               width: 1750px !important;
               min-width: 1750px !important;
            }
            body.lm-clean-table-active table,
            body.lm-clean-table-active thead,
            body.lm-clean-table-active tbody,
            body.lm-clean-table-active tr,
            body.lm-clean-table-active th,
            body.lm-clean-table-active td,
            body.lm-clean-table-active .border,
            body.lm-clean-table-active [class*="border"] {
               border: none !important;
               border-color: transparent !important;
               box-shadow: none !important;
               outline: none !important;
            }
            body.lm-clean-table-active div:has(table), 
            body.lm-clean-table-active div:has(> table) {
               overflow-x: auto !important;
               max-width: 100% !important;
            }
            body.lm-clean-table-active th,
            body.lm-clean-table-active th * {
               overflow: hidden !important;
               text-overflow: ellipsis !important;
               white-space: nowrap !important;
            }
            body.lm-clean-table-active td,
            body.lm-clean-table-active td * {
               overflow: hidden !important;
               text-overflow: ellipsis !important;
               white-space: nowrap !important;
            }
            
            /* Column width and spacing constraints to prevent huge gaps */
            .lm-th-checkbox, .lm-checkbox-col {
               width: 45px !important;
               max-width: 45px !important;
               text-align: center !important;
            }
            .lm-th-image, .lm-image-col {
               width: 70px !important;
               max-width: 70px !important;
               text-align: center !important;
            }
            .lm-th-name, .lm-name-col {
               width: 220px !important;
               max-width: 220px !important;
            }
            .lm-th-address, .lm-address-col {
               width: 250px !important;
               max-width: 250px !important;
            }
            .lm-th-phone, .lm-phone-glowed {
               width: 140px !important;
               max-width: 140px !important;
            }
            .lm-th-email, .lm-email-glowed {
               width: 180px !important;
               max-width: 180px !important;
            }
            .lm-th-web, .lm-web-glowed {
               width: 140px !important;
               max-width: 140px !important;
            }
            .lm-th-gmb, .lm-gmb-formatted {
               width: 90px !important;
               max-width: 90px !important;
            }
            .lm-th-status, .lm-status-formatted {
               width: 110px !important;
               max-width: 110px !important;
            }
            .lm-th-rating, .lm-rating-col {
               width: 90px !important;
               max-width: 90px !important;
            }
            .lm-th-reviews, .lm-reviews-col {
               width: 95px !important;
               max-width: 95px !important;
            }
        `;
        document.head.appendChild(style);
    }

    const rows = Array.from(table.querySelectorAll('tr')).slice(1);
    rows.forEach(row => {
        const tds = Array.from(row.querySelectorAll('td'));
        tds.forEach((td, index) => {
            const th = ths[index];
            if (!th) return;
            
            // Safe helpers to support both real DOM elements (with classList) and plain object mocks
            const hasClass = (cls) => th.classList && th.classList.contains && th.classList.contains(cls);
            const matchesText = (keywords) => {
                const text = (th.textContent || '').trim().toLowerCase().replace(/\s+/g, ' ');
                return keywords.some(kw => text.includes(kw));
            };

            // Format checkbox
            if (hasClass('lm-th-checkbox') || (th.querySelector && th.querySelector('input[type="checkbox"]'))) {
                td.classList.add('lm-checkbox-col');
            }
            
            // Format Name
            if (hasClass('lm-th-name') || matchesText(['name'])) {
                td.classList.add('lm-name-col');
            }
            
            // Format Image
            if (hasClass('lm-th-image') || matchesText(['image', 'logo'])) {
                td.classList.add('lm-image-col');
            }
            
            // Format Rating
            if (hasClass('lm-th-rating') || matchesText(['rating', 'stars'])) {
                td.classList.add('lm-rating-col');
            }
            
            // Format Reviews
            if (hasClass('lm-th-reviews') || matchesText(['review'])) {
                td.classList.add('lm-reviews-col');
            }
            
            // Format Address (glowing & blinking white, copy on click)
            if (hasClass('lm-th-address') || matchesText(['address'])) {
                td.classList.add('lm-address-col');
                if (!td.classList.contains('lm-address-glowed')) {
                    td.classList.add('lm-address-glowed');
                    const text = td.textContent.trim();
                    if (text) {
                        td.innerHTML = `<span class="lm-glow-white lm-white-blink" style="display:inline-block; cursor:copy;">${text}</span>`;
                        td.style.cursor = 'copy';
                        td.title = 'Click to copy address';
                        td.addEventListener('click', (e) => {
                            e.stopPropagation();
                            copyToClipboard(text, td);
                        });
                    }
                }
            }
            
            // Format GMB URL / Google Maps URL
            if (hasClass('lm-th-gmb') || matchesText(['gmb', 'google maps'])) {
                if (!td.classList.contains('lm-gmb-formatted')) {
                    td.classList.add('lm-gmb-formatted');
                    const urlText = td.textContent.trim();
                    if (urlText && (urlText.startsWith('http://') || urlText.startsWith('https://'))) {
                        td.innerHTML = ''; // clear original text
                        
                        const btn = document.createElement('a');
                        btn.href = urlText;
                        btn.target = '_blank';
                        btn.textContent = 'Visit';
                        btn.className = 'px-3 py-1 rounded-md text-xs font-bold transition-all inline-flex items-center justify-center cursor-pointer';
                        
                        const applyYellowStyle = (el) => {
                            el.classList.remove('lm-green-blink');
                            el.style.cssText = `
                                background: rgba(251, 191, 36, 0.15) !important;
                                border: 1px solid var(--lm-primary) !important;
                                color: var(--lm-primary) !important;
                                box-shadow: 0 0 10px rgba(251, 191, 36, 0.3) !important;
                                text-decoration: none !important;
                                display: inline-flex !important;
                                text-transform: uppercase !important;
                                letter-spacing: 0.5px !important;
                            `;
                        };

                        const applyGreenStyle = (el) => {
                            el.classList.add('lm-green-blink');
                            el.style.cssText = `
                                background: rgba(var(--lm-primary-rgb), 0.15) !important;
                                border: 1px solid var(--lm-primary) !important;
                                color: var(--lm-primary) !important;
                                text-shadow: 0 0 8px var(--lm-primary) !important;
                                box-shadow: 0 0 10px rgba(var(--lm-primary-rgb), 0.2) !important;
                                text-decoration: none !important;
                                display: inline-flex !important;
                                text-transform: uppercase !important;
                                letter-spacing: 0.5px !important;
                            `;
                        };
                        
                        // Check if it's already visited in session storage
                        let visitedUrls = [];
                        try {
                            visitedUrls = JSON.parse(sessionStorage.getItem('lmVisitedUrls') || '[]');
                        } catch (_) {}
                        
                        const isVisited = visitedUrls.includes(urlText);
                        if (isVisited) {
                            applyYellowStyle(btn);
                        } else {
                            applyGreenStyle(btn);
                        }
                        
                        btn.onmouseenter = (e) => {
                            let currentVisited = [];
                            try {
                                currentVisited = JSON.parse(sessionStorage.getItem('lmVisitedUrls') || '[]');
                            } catch (_) {}
                            if (currentVisited.includes(urlText)) {
                                btn.style.background = 'var(--lm-primary)';
                                btn.style.color = '#000';
                                btn.style.boxShadow = '0 0 15px rgba(251, 191, 36, 0.6)';
                            } else {
                                btn.style.background = 'var(--lm-primary)';
                                btn.style.color = '#000';
                                btn.style.boxShadow = '0 0 15px rgba(var(--lm-primary-rgb), 0.5)';
                            }
                            btn.style.transform = 'translateY(-1px)';
                        };
                        btn.onmouseleave = (e) => {
                            let currentVisited = [];
                            try {
                                currentVisited = JSON.parse(sessionStorage.getItem('lmVisitedUrls') || '[]');
                            } catch (_) {}
                            if (currentVisited.includes(urlText)) {
                                applyYellowStyle(btn);
                            } else {
                                applyGreenStyle(btn);
                            }
                            btn.style.transform = 'translateY(0)';
                        };

                        btn.onclick = (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            let currentVisited = [];
                            try {
                                currentVisited = JSON.parse(sessionStorage.getItem('lmVisitedUrls') || '[]');
                            } catch (_) {}
                            if (!currentVisited.includes(urlText)) {
                                currentVisited.push(urlText);
                                if (currentVisited.length > 200) currentVisited.shift();
                                try {
                                    sessionStorage.setItem('lmVisitedUrls', JSON.stringify(currentVisited));
                                } catch (_) {}
                            }
                            applyYellowStyle(btn);
                            
                            // Copy to clipboard
                            copyToClipboard(urlText, btn);
                            
                            // Open in new tab
                            window.open(urlText, '_blank');
                        };
                        
                        td.appendChild(btn);
                    }
                }
            }
            
            // Format Business Status (glowing & blinking white, copy on click)
            if (hasClass('lm-th-status') || matchesText(['status'])) {
                if (!td.classList.contains('lm-status-formatted')) {
                    td.classList.add('lm-status-formatted');
                    const statusText = td.textContent.trim();
                    if (statusText) {
                        const bg = 'rgba(255, 255, 255, 0.05)';
                        const border = 'rgba(255, 255, 255, 0.2)';
                        td.innerHTML = `<span class="lm-glow-white lm-white-blink px-2.5 py-1 rounded-md text-[11px] font-bold" style="background:${bg}; border:1px solid ${border}; display:inline-block; text-transform:uppercase; letter-spacing:0.5px; box-shadow: 0 2px 6px rgba(0,0,0,0.3);">${statusText}</span>`;
                        
                        const span = td.querySelector('span');
                        if (span) {
                            span.style.cursor = 'copy';
                            span.title = 'Click to copy status';
                        }
                        td.style.cursor = 'copy';
                        td.title = 'Click to copy status';
                        td.addEventListener('click', (e) => {
                            e.stopPropagation();
                            copyToClipboard(statusText, td);
                        });
                    }
                }
            }
            
            // Format Phone (glowing & blinking white, copy on click)
            if (hasClass('lm-th-phone') || matchesText(['phone'])) {
                if (!td.classList.contains('lm-phone-glowed')) {
                    td.classList.add('lm-phone-glowed');
                    const text = td.textContent.trim();
                    if (text) {
                        td.innerHTML = `<span class="lm-glow-white lm-white-blink" style="display:inline-block; cursor:copy;">${text}</span>`;
                        td.style.cursor = 'copy';
                        td.title = 'Click to copy phone number';
                        td.addEventListener('click', (e) => {
                            e.stopPropagation();
                            copyToClipboard(text, td);
                        });
                    }
                }
            }
            
            // Format Email (glowing & blinking white, copy on click)
            if (hasClass('lm-th-email') || matchesText(['email'])) {
                if (!td.classList.contains('lm-email-glowed')) {
                    td.classList.add('lm-email-glowed');
                    const text = td.textContent.trim();
                    if (text) {
                        td.innerHTML = `<span class="lm-glow-white lm-white-blink" style="display:inline-block; cursor:copy;">${text}</span>`;
                        td.style.cursor = 'copy';
                        td.title = 'Click to copy email address';
                        td.addEventListener('click', (e) => {
                            e.stopPropagation();
                            copyToClipboard(text, td);
                        });
                    }
                }
            }
            
            // Format Website (glowing & blinking white, copy on click)
            if (hasClass('lm-th-web') || matchesText(['website'])) {
                if (!td.classList.contains('lm-web-glowed')) {
                    td.classList.add('lm-web-glowed');
                    td.style.cursor = 'copy';
                    td.title = 'Click to copy website URL';
                    
                    const link = td.querySelector('a');
                    if (link) {
                        link.classList.add('lm-glow-white', 'lm-white-blink');
                        link.style.textDecoration = 'none';
                        link.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            const url = link.href || link.textContent.trim();
                            copyToClipboard(url, link);
                            if (url && (url.startsWith('http') || url.startsWith('www.'))) {
                                window.open(url.startsWith('http') ? url : 'http://' + url, '_blank');
                            }
                        });
                    } else {
                        const text = td.textContent.trim();
                        if (text) {
                            td.innerHTML = `<span class="lm-glow-white lm-white-blink" style="display:inline-block; cursor:copy;">${text}</span>`;
                            td.addEventListener('click', (e) => {
                                e.stopPropagation();
                                copyToClipboard(text, td);
                            });
                        }
                    }
                }
            }
        });
    });
}

// ==========================================
// GEO BUCKET - LICENSING & SUBSCRIPTION UI LOCK
// ==========================================

// Perform the subscription check and lock/unlock the UI accordingly
// NOTE: All auth logic runs DIRECTLY here in the sidepanel context.
// The background.js service worker is a pre-bundled file that does NOT
// have our message handlers, so chrome.runtime.sendMessage would silently fail.

// ====== CONSTANTS ======
const _enc = [66,94,94,90,89,16,5,5,89,73,88,67,90,94,4,77,69,69,77,70,79,4,73,69,71,5,71,75,73,88,69,89,5,89,5,107,97,76,83,73,72,82,127,67,99,117,110,104,104,124,77,114,66,31,82,67,101,96,109,100,82,124,97,94,76,88,71,78,83,122,112,30,66,125,30,82,93,71,96,104,111,111,83,91,124,68,77,65,95,95,89,97,92,105,76,100,99,19,122,104,120,121,92,77,122,65,24,68,93,5,79,82,79,73];
const GEO_APP_SCRIPT_URL = _enc.map(c => String.fromCharCode(c ^ 42)).join('');
const GEO_TRIAL_DURATION_MS = 3 * 24 * 60 * 60 * 1000; // 72 hours
const GEO_SIGN_SECRET = "G30_BucK3T_S3cR3T_2026_HMAC";

async function geoVerifySignature(email, status, licenseKey, signatureHex) {
    try {
        if (!signatureHex) return false;
        const encoder = new TextEncoder();
        const keyData = encoder.encode(GEO_SIGN_SECRET);
        const cryptoKey = await crypto.subtle.importKey(
            'raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']
        );
        const rawString = (email || "") + (status || "") + (licenseKey || "");
        const dataBuffer = encoder.encode(rawString);
        const sigBytes = new Uint8Array(signatureHex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
        return await crypto.subtle.verify('HMAC', cryptoKey, sigBytes, dataBuffer);
    } catch(e) {
        return false;
    }
}
async function geoCheckStatusRemote(email, googleId) {
       logmsg('Checking remote for: ' + email);
   try {
      const r = await fetch(`${GEO_APP_SCRIPT_URL}?action=check_status&email=${encodeURIComponent(email)}&googleId=${encodeURIComponent(googleId)}&t=${Date.now()}`);
      const result = await r.json();
          logmsg('Remote result: ' + JSON.stringify(result));

      if (result.status !== "UNREGISTERED") {
          const isValid = await geoVerifySignature(email, result.status, result.licenseKey, result.signature);
          if (!isValid) {
              console.error("ANTI-TAMPER: Invalid payload signature detected. Network spoofing attempt blocked.");
              await chrome.storage.local.set({ "geo_bucket_is_valid": false });
              return { status: "EXPIRED" };
          }
      }
       if (result.status === "ACTIVE") {
         await chrome.storage.local.set({ "geo_bucket_is_valid": true, "geo_bucket_license_key": result.licenseKey || "MANUAL_PAID", "geo_bucket_seed": 42, "geo_bucket_signature": result.signature });
         return { status: "PAID", seed: 42 };
       } else if (result.status === "PAID" || result.status === "LICENSE_REQUIRED") {
           await chrome.storage.local.set({ "geo_bucket_is_valid": false });
           return { status: "LICENSE_REQUIRED", paymentUrl: result.paymentUrl };
       } else if (result.status === "PENDING") {
         await chrome.storage.local.set({ "geo_bucket_is_valid": false });
         return { status: "PENDING", paymentUrl: result.paymentUrl };
      } else if (result.status === "TRIAL_ACTIVE" || result.status === "TRIAL_PENDING") {
         await chrome.storage.local.set({ "geo_bucket_is_valid": false });
         return { status: result.status, timeLeftMs: result.timeLeftMs, paymentUrl: result.paymentUrl };
      } else if (result.status === "UNREGISTERED") {
         await chrome.storage.local.remove(["geo_bucket_user_email", "geo_bucket_google_id", "geo_bucket_is_valid"]);
         return { status: "LOGIN_REQUIRED" };
      }
      await chrome.storage.local.set({ "geo_bucket_is_valid": false });
      return { status: "EXPIRED", paymentUrl: result.paymentUrl };
   } catch (e) {
          logmsg('Remote error: ' + e.message);
          console.error("Remote status check failed:", e);
          return { error: true };
       }
}

async function geoCheckSubscription(forceRemote = true) {
       logmsg('geoCheckSub called');
   const data = await chrome.storage.local.get([
      "geo_bucket_is_valid", "geo_bucket_seed",
      "geo_bucket_user_email", "geo_bucket_google_id",
      "geo_bucket_install_time", "geo_bucket_license_key", "geo_bucket_signature", "geo_bucket_local_status"
   ]);

   // A. No email → show Google Sign-In card
   if (!data.geo_bucket_user_email || !data.geo_bucket_google_id) {
      return { status: "LOGIN_REQUIRED" };
   }

   // B. Check remote sheet
   if (forceRemote) {
       const remote = await geoCheckStatusRemote(data.geo_bucket_user_email, data.geo_bucket_google_id);
       if (remote.status === "PAID" || remote.status === "PENDING" || remote.status === "TRIAL_ACTIVE" || remote.status === "TRIAL_PENDING" || remote.status === "EXPIRED" || remote.status === "LOGIN_REQUIRED" || remote.status === "LICENSE_REQUIRED") {
          await chrome.storage.local.set({ "geo_bucket_local_status": remote.status });
          return remote;
       }
   }
   
   if (data.geo_bucket_local_status === "PENDING" || data.geo_bucket_local_status === "TRIAL_PENDING") {
       return { status: data.geo_bucket_local_status };
   }
   
   // C. Already PAID locally (Fallback if remote check failed or forceRemote=false)
   if (data.geo_bucket_is_valid && data.geo_bucket_signature) {
      const isValidLocal = await geoVerifySignature(data.geo_bucket_user_email, "ACTIVE", data.geo_bucket_license_key, data.geo_bucket_signature);
      if (isValidLocal) {
          return { status: "PAID", seed: 42 };
      }
   }

   // D. Fallback to local timer
   let installTime = data.geo_bucket_install_time;
   if (!installTime) {
      installTime = Date.now();
      await chrome.storage.local.set({ "geo_bucket_install_time": installTime });
   }
   const elapsed = Date.now() - installTime;
   if (elapsed < GEO_TRIAL_DURATION_MS) {
      logmsg('Returning local TRIAL_ACTIVE'); return { status: "TRIAL_ACTIVE", timeLeftMs: GEO_TRIAL_DURATION_MS - elapsed };
   }
   logmsg('Returning local EXPIRED'); return { status: "EXPIRED" };
}

async function geoVerifyLicense(key) {
   try {
      const r = await fetch(`${GEO_APP_SCRIPT_URL}?action=verify&key=${encodeURIComponent(key)}`);
      const result = await r.json();
      if (result.valid) {
         let toSave = { 
             "geo_bucket_license_key": key.trim().toUpperCase(), 
             "geo_bucket_is_valid": true, 
             "geo_bucket_seed": result.seed,
             "geo_bucket_signature": result.signature 
         };
         if (result.email) {
             toSave["geo_bucket_user_email"] = result.email.trim();
         }
         await chrome.storage.local.set(toSave);
         return { success: true, seed: result.seed };
      }
      return { success: false, error: "Invalid or unpaid license key." };
   } catch (e) {
      return { success: false, error: "Network error. Please try again." };
   }
}

async function geoSubmitBkash(email, bkashNumber) {
   try {
      const r = await fetch(GEO_APP_SCRIPT_URL, {
         method: 'POST',
         headers: { 'Content-Type': 'text/plain;charset=utf-8' },
         body: JSON.stringify({ action: "update_bkash", email, bkashNumber })
      });
      return await r.json();
   } catch (e) {
      return { error: "Network error. Please try again." };
   }
}

async function geoSubmitCrypto(email) {
   try {
      const r = await fetch(GEO_APP_SCRIPT_URL, {
         method: 'POST',
         headers: { 'Content-Type': 'text/plain;charset=utf-8' },
         body: JSON.stringify({ action: "create_invoice", email })
      });
      return await r.json();
   } catch (e) {
      return { error: "Network error. Please try again." };
   }
}

async function isBangladeshUser() {
    try {
        const lang = (navigator.language || '').toLowerCase();
        const tzOffset = new Date().getTimezoneOffset();
        const res = await chrome.storage.local.get(['geo_bucket_user_locale']) || {};
        const storedLocale = res.geo_bucket_user_locale || '';
        return lang.startsWith('bn') || tzOffset === -360 || storedLocale.toLowerCase().startsWith('bn');
    } catch(e) {
        return false;
    }
}

async function geoManualRegister(email) {
   try {
      const fakeGoogleId = "manual_" + email.replace(/[^a-zA-Z0-9]/g, "");
      const r = await fetch(GEO_APP_SCRIPT_URL, {
         method: 'POST',
         headers: { 'Content-Type': 'text/plain;charset=utf-8' },
         body: JSON.stringify({ action: "register", googleId: fakeGoogleId, email })
      });
      const result = await r.json();
      if (result.success) {
         await chrome.storage.local.set({ 
            geo_bucket_user_email: email, 
            geo_bucket_google_id: fakeGoogleId,
            geo_bucket_install_time: Date.now()
         });
         return { success: true, email };
      }
      return { success: false, error: "Registration failed." };
   } catch (e) {
      return { success: false, error: "Network error." };
   }
}

async function geoLoginGoogle() {
   return new Promise((resolve) => {
      chrome.identity.getAuthToken({ interactive: true }, function(token) {
         if (chrome.runtime.lastError || !token) {
            chrome.identity.getProfileUserInfo({ 'accountStatus': 'ANY' }, function(userInfo) {
               if (userInfo && userInfo.email && userInfo.id) {
                  finishLogin(userInfo.email, userInfo.id, "", "", "");
               } else {
                  resolve({ success: false, error: "No signed-in Chrome profile found." });
               }
            });
         } else {
            fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
               headers: { Authorization: `Bearer ${token}` }
            })
            .then(res => res.json())
            .then(data => {
               if (data.email && data.id) {
                  finishLogin(data.email, data.id, data.name || "", data.picture || "", data.locale || "");
               } else {
                  resolve({ success: false, error: "Failed to fetch Google profile data." });
               }
            })
            .catch(err => {
               resolve({ success: false, error: "Network error fetching Google profile." });
            });
         }
      });

      async function finishLogin(email, id, name, picture, locale) {
         try {
            await fetch(GEO_APP_SCRIPT_URL, {
               method: 'POST',
               headers: { 'Content-Type': 'text/plain;charset=utf-8' },
               body: JSON.stringify({ action: "register", googleId: id, email: email, name: name, picture: picture, locale: locale })
            });
            await chrome.storage.local.set({ 
               geo_bucket_user_email: email, 
               geo_bucket_google_id: id,
               geo_bucket_user_name: name,
               geo_bucket_user_picture: picture,
               geo_bucket_user_locale: locale,
               geo_bucket_install_time: Date.now()
            });
            resolve({ success: true, email: email });
         } catch (err) {
            resolve({ success: false, error: err.toString() });
         }
      }
   });
}

(function initSubscriptionLock() {
  // Show initial loading screen for at least 3 seconds
  if (typeof window.lmShowLoadingScreen === 'function') {
     window.lmShowLoadingScreen(3000);
  }
  
  // Wait for 3 seconds loading to complete, during which we verify status
  setTimeout(async () => {
     const response = await geoCheckSubscription();
     logmsg('Final response: ' + JSON.stringify(response));
     if (response && (response.status === "PAID" || response.status === "TRIAL_ACTIVE" || response.status === "TRIAL_PENDING")) {
        // Valid subscription/trial - hide loading screen and allow usage
        const overlay = document.getElementById("initial-loading-overlay");
        if (overlay) {
           overlay.style.opacity = "0";
           setTimeout(() => { overlay.style.display = "none"; }, 500);
        }
        
        if (response.status === "TRIAL_ACTIVE" || response.status === "TRIAL_PENDING") {
           initTrialPromos(response.timeLeftMs, response.paymentUrl, response.status === "TRIAL_PENDING");
        }
     } else {
        // Locked - Show Licensing Overlay (or LOGIN_REQUIRED card)
        showLicensingOverlay(response ? response.status : "EXPIRED", response ? response.paymentUrl : null);
     }
    
    // Status polling every 2 minutes
    setInterval(async () => {
       const response = await geoCheckSubscription();
       if (response && (response.status === "PAID" || response.status === "TRIAL_ACTIVE" || response.status === "TRIAL_PENDING")) {
          // Valid subscription/trial - remove overlay if it accidentally exists
          const overlay = document.getElementById("lm-licensing-overlay-container");
          if (overlay) overlay.remove();
       } else {
          const existingOverlay = document.getElementById("lm-licensing-overlay-container");
          if (!existingOverlay) {
             showLicensingOverlay(response ? response.status : "EXPIRED", response ? response.paymentUrl : null);
          } else {
             // Only re-render if the status text has changed (e.g., from EXPIRED to LOGIN_REQUIRED)
             const isLoginScreen = (existingOverlay.shadowRoot ? existingOverlay.shadowRoot.innerHTML : existingOverlay.innerHTML).includes("Sign In Required");
             const shouldBeLogin = response && response.status === "LOGIN_REQUIRED";
             if (shouldBeLogin !== isLoginScreen) {
                 showLicensingOverlay(response ? response.status : "EXPIRED", response ? response.paymentUrl : null);
             }
          }
       }
    }, 2 * 60 * 1000);
  }, 3000);
})();

function initTrialPromos(timeLeftMs, paymentUrl, isPending = false) {
   // Remove existing banner if any
   const existingBanner = document.getElementById("geo-trial-banner");
   if (existingBanner) existingBanner.remove();

   // 1. Render top trial banner
   const banner = document.createElement("div");
   banner.id = "geo-trial-banner";
   banner.style.cssText = `
      background: linear-gradient(90deg, var(--lm-primary) 0%, #0d131a 100%);
      color: #ffffff;
      font-family: 'Hanken Grotesk', system-ui, -apple-system, sans-serif;
      padding: 8px 16px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(var(--lm-primary-rgb), 0.2);
      z-index: 1000;
      position: sticky;
      top: 0;
   `;

   // Calculate time remaining in days and hours
   const hoursLeft = Math.max(0, Math.floor(timeLeftMs / (1000 * 60 * 60)));
   const days = Math.floor(hoursLeft / 24);
   const hours = hoursLeft % 24;
   let timeStr = `${days} Days ${hours} Hours`;
   if (days === 0) {
      const minutes = Math.floor((timeLeftMs % (1000 * 60 * 60)) / (1000 * 60));
      timeStr = `${hours} Hours ${minutes} Minutes`;
   }

   banner.innerHTML = `
      <div style="display:flex; align-items:center; gap:6px;">
         <span class="material-symbols-outlined" style="font-size:14px; animation: pulseGlow 1s infinite alternate;">timer</span>
         <span>Free Trial Active: <strong>${timeStr} Remaining</strong></span>
      </div>
      <div style="display:flex; align-items:center; gap:12px;">
         <button id="trial-upgrade-btn" style="background:var(--lm-on-primary); color: var(--lm-primary); border:none; padding:4px 10px; border-radius:4px; font-weight:800; font-size:10px; cursor:pointer; text-transform:uppercase;">Upgrade</button>
         <span id="close-trial-banner" class="material-symbols-outlined" style="font-size:16px; cursor:pointer; color:rgba(255,255,255,0.6);">close</span>
      </div>
   `;
   
   // Inject style keyframe for banner if not loaded
   if (!document.getElementById("trial-banner-style")) {
      const style = document.createElement("style");
      style.id = "trial-banner-style";
      style.textContent = `
         @keyframes pulseGlow {
            from { opacity: 0.6; }
            to { opacity: 1; }
         }
      `;
      document.head.appendChild(style);
   }

   document.body.prepend(banner);

   // Adjust branding container position if banner exists
   const branding = document.getElementById('geo-permanent-logo-container');
   if (branding) branding.style.top = '65px';

   // Handlers
   const upgradeBtn = banner.querySelector("#trial-upgrade-btn");
   if (upgradeBtn) {
      upgradeBtn.onclick = () => {
         if (isPending) {
            showLicensingOverlay("PENDING", paymentUrl, true);
         } else {
            showLicensingOverlay("MANUAL_UPGRADE", paymentUrl, true);
         }
      };
   }

   const closeBtn = banner.querySelector("#close-trial-banner");
   if (closeBtn) {
      closeBtn.onclick = () => {
         banner.remove();
         if (branding) branding.style.top = '20px';
      };
   }

   // Show the promo popup immediately on load
   showTrialPromoModal(paymentUrl, isPending);

   // 2. Setup 5 minutes promotion modal
   const PROMO_INTERVAL = 5 * 60 * 1000; // 5 minutes
   setInterval(() => {
      showTrialPromoModal(paymentUrl, isPending);
   }, PROMO_INTERVAL);
}

function showTrialPromoModal(paymentUrl, isPending = false) {
   // Remove existing if any
   const existing = document.getElementById("geo-trial-promo-container");
   if (existing) existing.remove();

   const container = document.createElement("div");
   container.id = "geo-trial-promo-container";
   container.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 99999;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      font-family: 'Hanken Grotesk', system-ui, -apple-system, sans-serif;
      box-sizing: border-box;
      animation: fadeIn 0.3s ease;
   `;

   const card = document.createElement("div");
   card.style.cssText = `
      background: #161f2b;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      width: 100%;
      max-width: 340px;
      padding: 24px;
      text-align: center;
      color: #ffffff;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      animation: slideUp 0.3s ease;
      position: relative;
   `;

   card.innerHTML = `
      <div style="margin-bottom: 16px;">
         <span class="material-symbols-outlined" style="font-size:48px; color:var(--lm-primary);">workspace_premium</span>
      </div>
      <h3 style="margin:0 0 8px 0; font-size:18px; font-weight:800;">Upgrade to Premium</h3>
      <p style="color:#94a3b8; font-size:12px; line-height:1.5; margin:0 0 20px 0;">
         Unlock unlimited leads extraction and automatic verification. Upgrade now to save time!
      </p>
      <div style="display:flex; flex-direction:column; gap:8px;">
         <button id="promo-upgrade-btn" style="background:var(--lm-primary); color: var(--lm-on-primary); border:none; padding:12px; border-radius:8px; font-weight:800; font-size:12px; text-transform:uppercase; cursor:pointer;">Upgrade Now</button>
         <button id="promo-close-btn" style="background:rgba(255,255,255,0.05); color:#94a3b8; border:none; padding:10px; border-radius:8px; font-weight:700; font-size:12px; cursor:pointer;">Dismiss</button>
      </div>
   `;

   container.appendChild(card);
   document.body.appendChild(container);

   // Handlers
   card.querySelector("#promo-close-btn").onclick = () => {
      container.remove();
   };

   card.querySelector("#promo-upgrade-btn").onclick = () => {
      container.remove();
      if (isPending) {
         showLicensingOverlay("PENDING", paymentUrl, true);
      } else {
         showLicensingOverlay("MANUAL_UPGRADE", paymentUrl, true);
      }
   };
}


function generateWhatsAppQR() {
    return `
        <div style="margin-top: 16px; padding: 16px; background: linear-gradient(145deg, rgba(37, 211, 102, 0.1) 0%, rgba(18, 140, 126, 0.05) 100%); border: 1px solid rgba(37, 211, 102, 0.2); border-radius: 16px; display: flex; align-items: center; gap: 16px; text-align: left; position: relative; overflow: hidden; box-shadow: 0 8px 32px rgba(0,0,0,0.2); transition: transform 0.2s ease;">
            <div style="position: absolute; top: -20px; right: -20px; width: 100px; height: 100px; background: rgba(37, 211, 102, 0.1); filter: blur(30px); border-radius: 50%;"></div>
            
            <div style="position: relative; width: 76px; height: 76px; border-radius: 12px; background: #fff; padding: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); flex-shrink: 0;">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/8801951838769" style="width: 100%; height: 100%; border-radius: 6px;" alt="WhatsApp QR">
                <div style="position: absolute; bottom: -8px; right: -8px; background: #25D366; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid #090d12; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">
                    <svg viewBox="0 0 24 24" style="width: 16px; height: 16px; fill: #fff;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </div>
            </div>
            
            <div style="flex-grow: 1;">
                <h4 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 700; color: #fff; display: flex; align-items: center; gap: 6px;">
                    <svg viewBox="0 0 24 24" style="width: 14px; height: 14px; fill: #25D366;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    24/7 Premium Support
                </h4>
                <p style="font-size: 12px; color: rgba(255,255,255,0.7); margin: 0 0 6px 0; line-height: 1.4;">পেমেন্ট বা লাইসেন্স নিয়ে যেকোনো সমস্যায় সরাসরি আমাদের মেসেজ দিন।</p>
                <p style="font-size: 15px; color: #25D366; margin: 0; font-weight: 800; font-family: monospace; letter-spacing: 0.5px;">+88 01951838769</p>
            </div>
        </div>
    `;
}

async function showLicensingOverlay(status, paymentUrl, closable = false) {
   try {
       const res = await chrome.storage.local.get(['geo_bucket_local_status']);
       if ((res.geo_bucket_local_status === "PENDING" || res.geo_bucket_local_status === "TRIAL_PENDING") && status === "MANUAL_UPGRADE") {
           status = "PENDING";
       }
   } catch(e) {}

   const existing = document.getElementById("lm-licensing-overlay-container");
   if (existing) existing.remove();

   const container = document.createElement("div");
   container.id = "lm-licensing-overlay-container";

   if (status === "EXPIRED" || status === "MANUAL_UPGRADE" || status === "PENDING" || status === "LICENSE_REQUIRED") {
      container.style.cssText = "position: fixed !important; inset: 0 !important; z-index: 2147483647 !important; width: 100vw !important; height: 100vh !important; background: #090d12 !important; display: flex !important; align-items: center !important; justify-content: center !important; font-family: 'Hanken Grotesk', system-ui, -apple-system, sans-serif !important;";
      
      const initOverlay = document.getElementById("initial-loading-overlay");
      if (initOverlay) initOverlay.style.display = "none";

      const shadow = container.attachShadow({ mode: "open" });
      const style = document.createElement("style");
      style.textContent = `
         @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
         :host {
            --primary: var(--lm-primary);
            --bg-card: #161f2b;
            --text-white: #ffffff;
            --text-muted: #94a3b8;
            --border: rgba(255, 255, 255, 0.08);
            --on-primary: var(--lm-on-primary);
         }
         .overlay { width: 100%; height: 100%; display: flex; flex-direction: column; background: radial-gradient(circle at top, rgba(var(--lm-primary-rgb), 0.12) 0%, #090d12 100%); color: var(--text-white); padding: 40px 20px; box-sizing: border-box; overflow-y: auto; }
         .overlay > * { margin: auto; }
         .card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 20px; width: 100%; max-width: 700px; padding: 32px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05); box-sizing: border-box; text-align: center; animation: fadeIn 0.4s ease-out; position: relative; margin: auto; }
         .card-content-flex { display: flex; gap: 32px; text-align: left; align-items: stretch; }
         .card-left, .card-right { flex: 1; display: flex; flex-direction: column; }
         @media (max-width: 600px) { .card-content-flex { flex-direction: column; gap: 16px; } }
         @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
         h2 { margin: 0 0 8px 0; font-size: 24px; font-weight: 800; letter-spacing: 0.5px; }
         .subtitle { color: var(--text-muted); font-size: 14px; margin-bottom: 0; line-height: 1.5; }
         .close-btn { position: absolute; top: 16px; right: 16px; background: rgba(255,255,255,0.05); color: var(--text-muted); border: none; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; }
         .close-btn:hover { background: rgba(255,255,255,0.1); color: var(--text-white); }
         .payment-box { background: rgba(0,0,0,0.2); border: 1px solid var(--border); border-radius: 12px; padding: 16px; flex-grow: 1; }
         .payment-box h3 { margin: 0 0 8px 0; font-size: 15px; display: flex; align-items: center; gap: 8px; }
         .bkash-number-box { background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
         .bkash-number { font-family: monospace; font-size: 18px; font-weight: bold; color: var(--primary); letter-spacing: 1px; }
         .copy-btn { background: none; border: none; color: var(--text-muted); cursor: pointer; display: flex; align-items: center; transition: color 0.2s; }
         .copy-btn:hover { color: var(--text-white); }
         .input-group { margin-bottom: 12px; }
         .input-group label { display: block; font-size: 11px; color: var(--text-muted); margin-bottom: 4px; font-weight: 600; text-transform: uppercase; }
         .input-field { width: 100%; background: rgba(255,255,255,0.05); border: 1px solid var(--border); color: #fff; padding: 10px; border-radius: 8px; font-family: inherit; font-size: 13px; box-sizing: border-box; outline: none; transition: border-color 0.2s; }
         .input-field:focus { border-color: var(--primary); }
         .primary-btn { width: 100%; padding: 12px; background: var(--primary); color: var(--on-primary); border: none; border-radius: 12px; font-weight: 800; font-size: 14px; text-transform: uppercase; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 15px rgba(var(--lm-primary-rgb), 0.3); }
         .switch-link { margin-top: 16px; font-size: 12px; color: var(--text-muted); text-decoration: underline; cursor: pointer; transition: color 0.2s; display: inline-block; }
         .switch-link:hover { color: var(--primary); }
         @keyframes spin { 100% { transform: rotate(360deg); } }
      `;

      const isBD = await isBangladeshUser();
      let userEmail = '';
        try {
            const res = await chrome.storage.local.get(['geo_bucket_user_email']) || {};
            userEmail = res.geo_bucket_user_email || '';
        } catch(e) {}

      const overlay = document.createElement("div");
      overlay.className = "overlay";

      const title = status === "EXPIRED" ? "Free Trial Expired" : "Upgrade to Premium";
      const subtitle = status === "EXPIRED" 
         ? "Your 3-day free trial has ended. Upgrade to continue extracting leads." 
         : "Get unlimited leads extraction and automatic verification.";
         
      const closeBtnHTML = (status === "MANUAL_UPGRADE" || closable) 
         ? `<button class="close-btn" id="close-overlay"><span class="material-symbols-outlined">close</span></button>` 
         : ``;

      const renderState = async (state) => {
        let contentHTML = '';

        let maskedEmail = "your email";
        if (userEmail && userEmail.includes("@")) {
            const parts = userEmail.split("@");
            const name = parts[0];
            if (name.length > 6) {
               maskedEmail = name.substring(0, 4) + "***" + name.substring(name.length - 2) + "@" + parts[1];
            } else if (name.length > 3) {
               maskedEmail = name.substring(0, 2) + "***" + name.substring(name.length - 1) + "@" + parts[1];
            } else {
               maskedEmail = name + "***@" + parts[1];
            }
        }

        const qrHTML = `
        <div style="margin-top: 12px; padding: 12px; background: linear-gradient(145deg, rgba(37, 211, 102, 0.1) 0%, rgba(18, 140, 126, 0.05) 100%); border: 1px solid rgba(37, 211, 102, 0.2); border-radius: 12px; display: flex; align-items: center; gap: 12px; text-align: left; position: relative; overflow: hidden; box-shadow: 0 8px 32px rgba(0,0,0,0.2); transition: transform 0.2s ease;">
            <div style="position: absolute; top: -20px; right: -20px; width: 100px; height: 100px; background: rgba(37, 211, 102, 0.1); filter: blur(30px); border-radius: 50%;"></div>
            
            <div style="position: relative; width: 68px; height: 68px; border-radius: 10px; background: #fff; padding: 5px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); flex-shrink: 0;">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/8801951838769" style="width: 100%; height: 100%; border-radius: 6px;" alt="WhatsApp QR">
                <div style="position: absolute; bottom: -8px; right: -8px; background: #25D366; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid #090d12; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">
                    <svg viewBox="0 0 24 24" style="width: 16px; height: 16px; fill: #fff;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </div>
            </div>
            
            <div style="flex-grow: 1;">
                <h4 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 700; color: #fff; display: flex; align-items: center; gap: 6px;">
                    <svg viewBox="0 0 24 24" style="width: 14px; height: 14px; fill: #25D366;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    24/7 Premium Support
                </h4>
                <p style="font-size: 12px; color: rgba(255,255,255,0.7); margin: 0 0 6px 0; line-height: 1.4;">পেমেন্ট বা লাইসেন্স নিয়ে যেকোনো সমস্যায় সরাসরি আমাদের মেসেজ দিন।</p>
                <p style="font-size: 15px; color: #25D366; margin: 0; font-weight: 800; font-family: monospace; letter-spacing: 0.5px;">+88 01951838769</p>
            </div>
        </div>
        `;
        
        if (state === 'ACTIVATE') {
              contentHTML = `
                  <div class="split-view">
                      <div class="split-left" style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
                          <div style="margin-bottom: 16px;">
                              <span class="material-symbols-outlined" style="color: var(--lm-primary); font-size: 36px; margin-bottom: 8px; display: block;">mark_email_read</span>
                              <h2 style="font-size: 18px; font-weight: 800; color: #fff; margin-bottom: 4px;">License Generated</h2>
                              <p style="color: var(--text-muted); font-size: 13px; line-height: 1.4; margin: 0;">
                                  We have sent your unique license key to<br>
                                  <strong style="color: var(--lm-primary); font-size: 14px;">${maskedEmail}</strong><br>
                                  Please check your inbox (and spam folder) to activate your Premium access.
                              </p>
                          </div>
                          <div style="width: 100%;">
                              ${qrHTML}
                          </div>
                      </div>
                      <div class="split-right" style="display: flex; flex-direction: column; justify-content: center;">
                          <h2 style="font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                              <span class="material-symbols-outlined" style="color: var(--lm-primary);">key</span> Activate License
                          </h2>
                          <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 16px; line-height: 1.4;">
                              Paste the license key you received in your email to instantly unlock all Pro features.
                          </p>
                          <div style="background: rgba(var(--lm-primary-rgb), 0.05); border: 1px solid var(--border); padding: 16px; border-radius: 12px;">
                              <input type="text" id="geo-activation-key" placeholder="Paste license key..." style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.3); color: #fff; font-size: 14px; outline: none; box-sizing: border-box; margin-bottom: 12px; transition: border-color 0.2s ease;">
                              <button id="geo-activate-btn" class="primary-btn" style="width: 100%; padding: 12px; font-size: 14px;">Unlock Premium</button>
                          </div>
                      </div>
                  </div>
              `;
          } else if (state === 'BKASH') {
            let isBkashSubmitted = (status === "PENDING");
            
            const formFieldsHTML = isBkashSubmitted ? `
                <div style="background: rgba(var(--lm-primary-rgb), 0.1); border: 1px solid rgba(var(--lm-primary-rgb), 0.3); border-radius: 12px; padding: 16px; text-align: center; margin-bottom: 0;">
                    <span class="material-symbols-outlined" style="color: var(--lm-primary); font-size: 32px; margin-bottom: 8px;">pending_actions</span>
                    <p style="font-size: 14px; font-weight: 600; color: #fff; margin: 0 0 8px 0;">Verification Pending</p>
                    <p style="font-size: 12px; color: var(--text-muted); margin: 0; line-height: 1.4;">Your payment info was submitted successfully. Please wait up to 10 minutes for your license key to arrive in your email.</p>
                    
                    ${qrHTML}
                </div>
            ` : `
                <div id="geo-bkash-form-fields" style="transition: opacity 0.3s ease;">
                   <div class="input-group">
                      <label>Your Gmail</label>
                      <input type="email" id="geo-bkash-email" class="input-field" value="${userEmail}" readonly style="background-color: rgba(255,255,255,0.02); color: #64748b; cursor: not-allowed; border-color: rgba(255,255,255,0.05);" placeholder="email@gmail.com">
                   </div>
                   <div class="input-group">
                      <label>bKash Number (Last 4 digits)</label>
                      <input type="tel" id="geo-bkash-last4" class="input-field" placeholder="e.g. 5678" maxlength="4">
                   </div>
                </div>
                <button class="primary-btn" id="geo-bkash-submit" style="transition: all 0.2s ease;">Submit Payment Info</button>
              `;

            contentHTML = `
                <h2 style="margin-top: 0; text-align: center;">${title}</h2>
                <p class="subtitle" style="text-align: center; margin-bottom: 20px;">${subtitle}</p>
                <div class="card-content-flex">
                    <div class="card-left">
                        <div class="payment-box">
                          <h3 style="display: flex; align-items: center; gap: 8px;">
                                 <dotlottie-player src="/bkash-animation.lottie" background="transparent" speed="1" style="width: 32px; height: 32px;" loop autoplay></dotlottie-player>
                                 Pay with bKash (৳299/mo)
                              </h3>
                              <p style="font-size: 12px; color: var(--text-muted); margin: 0 0 10px 0; line-height: 1.4;">পার্সোনাল বিকাশ নাম্বারে ৳২৯৯ সেন্ড মানি করুন। এরপর হোয়াটসঅ্যাপে পেমেন্টের স্ক্রিনশট দিন। ১০ মিনিটের মধ্যে আপনার ইমেইলে লাইসেন্স কি পেয়ে যাবেন।</p>
                          
                          <div class="bkash-number-box">
                             <span class="bkash-number">01951838769</span>
                             <button class="copy-btn" id="copy-bkash" title="Copy number">
                                <span class="material-symbols-outlined" style="font-size: 16px;">content_copy</span>
                             </button>
                          </div>
                          ${formFieldsHTML}
                       </div>
                   </div>
                   
                   <div class="card-right" style="${isBkashSubmitted ? 'display: none;' : ''}">
                       <div class="payment-box" style="display: flex; flex-direction: column; justify-content: center;">
                           <p style="font-size: 13px; font-weight: 600; color: #fff; margin: 0 0 12px 0;"><span class="material-symbols-outlined" style="vertical-align: middle; font-size: 16px; margin-right: 4px; color: var(--primary);">vpn_key</span>Already Paid?</p>
                           <p style="font-size: 12px; color: var(--text-muted); margin: 0 0 12px 0;">If you received your license key, activate it instantly to unlock Pro features.</p>
                           <div style="display: flex; flex-direction: column; gap: 8px;">
                               <input type="text" id="geo-activation-key" placeholder="Paste license key..." style="width: 100%; padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.3); color: #fff; font-size: 13px; outline: none; box-sizing: border-box;">
                               <button id="geo-activate-btn" style="padding: 10px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05); color: #fff; font-weight: 600; cursor: pointer; transition: all 0.2s;">Activate License</button>
                           </div>
                       </div>
                       <div style="margin-top: 16px;">
                           ${qrHTML}
                       </div>
                       <div style="text-align: center; margin-top: auto; padding-top: 16px;">
                           <a class="switch-link" id="switch-crypto" style="display: none;">Switch to International Payment ($9)</a>
                       </div>
                   </div>
                </div>
            `;
        } else if (state === 'CRYPTO') {
            contentHTML = `
                <h2 style="margin-top: 0; text-align: center;">International Upgrade</h2>
                <p class="subtitle" style="text-align: center; margin-bottom: 20px;">Get full access instantly from anywhere in the world.</p>
                
                <div class="card-content-flex">
                    <div class="card-left">
                        <div class="payment-box">
                           <h3><span class="material-symbols-outlined" style="color:var(--lm-primary)">currency_bitcoin</span> Pay with Cryptocurrency</h3>
                           <p style="font-size: 13px; font-weight: 700; margin: 0 0 8px 0;">$9/month</p>
                           <p style="font-size: 12px; color: var(--text-muted); margin: 0 0 12px 0;">
                              You'll be redirected to a secure payment page. After payment, your license key will be emailed automatically within minutes.
                           </p>
                           
                           <button class="primary-btn" id="geo-crypto-pay">
                              <span class="material-symbols-outlined">rocket_launch</span> Pay Now
                           </button>
                        </div>
                    </div>
                    
                    <div class="card-right">
                       <div class="payment-box" style="display: flex; flex-direction: column; justify-content: center;">
                           <p style="font-size: 13px; font-weight: 600; color: #fff; margin: 0 0 12px 0;"><span class="material-symbols-outlined" style="vertical-align: middle; font-size: 16px; margin-right: 4px; color: var(--primary);">vpn_key</span>Already Paid?</p>
                           <p style="font-size: 12px; color: var(--text-muted); margin: 0 0 12px 0;">If you received your license key, activate it instantly to unlock Pro features.</p>
                           <div style="display: flex; flex-direction: column; gap: 8px;">
                               <input type="text" id="geo-activation-key" placeholder="Paste license key..." style="width: 100%; padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.3); color: #fff; font-size: 13px; outline: none; box-sizing: border-box;">
                               <button id="geo-activate-btn" style="padding: 10px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05); color: #fff; font-weight: 600; cursor: pointer; transition: all 0.2s;">Activate License</button>
                           </div>
                       </div>
                       <div style="text-align: center; margin-top: auto;">
                           <a class="switch-link" id="switch-bkash">Switch to bKash (Bangladesh)</a>
                       </div>
                    </div>
                </div>
            `;
        }

        overlay.innerHTML = `
            <div class="card">
                ${closeBtnHTML}
                ${contentHTML}
            </div>
        `;
        
        // Event Handlers
        const closeBtn = overlay.querySelector('#close-overlay');
        if (closeBtn && (status === 'MANUAL_UPGRADE' || closable)) closeBtn.onclick = () => container.remove();

        const activateBtn = overlay.querySelector('#geo-activate-btn');
        if (activateBtn) {
            activateBtn.onclick = async () => {
                const key = overlay.querySelector('#geo-activation-key').value.trim().toUpperCase();
                if (!key) return;
                activateBtn.disabled = true;
                activateBtn.innerHTML = 'Processing...';
                const result = await geoVerifyLicense(key);
                if (result?.success) {
                    activateBtn.innerHTML = 'Activated!';
                    setTimeout(() => { location.reload(); }, 1000);
                } else {
                    activateBtn.innerHTML = 'Invalid Key';
                    setTimeout(() => { activateBtn.disabled = false; activateBtn.innerHTML = 'Activate License'; }, 2000);
                }
            };
        }

        // State Handlers
        if (state === 'BKASH') {
            let copyBtn = overlay.querySelector('#copy-bkash');
            if (copyBtn) {
                copyBtn.onclick = () => navigator.clipboard.writeText('01951838769');
            }
            
            const last4Input = overlay.querySelector('#geo-bkash-last4');
            if (last4Input) {
                last4Input.addEventListener('input', function() {
                    this.value = this.value.replace(/[^0-9]/g, '').slice(0, 4);
                });
            }
            
            const submitBtn = overlay.querySelector('#geo-bkash-submit');
            if (submitBtn) {
                submitBtn.onclick = async (e) => {
                    const btn = e.target;
                    const last4 = overlay.querySelector('#geo-bkash-last4').value.trim();
                    if (last4.length !== 4) return alert('Enter exactly 4 digits of your bKash number.');
                    
                    btn.innerHTML = 'Submitting...';
                    btn.style.transform = 'scale(0.95)';
                    setTimeout(() => btn.style.transform = 'scale(1)', 150);
                    
                    const res = await geoSubmitBkash(userEmail, last4);
                    if (res?.success) {
                        if (closable) {
                            await chrome.storage.local.set({ "geo_bucket_local_status": "TRIAL_PENDING" });
                        } else {
                            await chrome.storage.local.set({ "geo_bucket_local_status": "PENDING" });
                        }
                        const formFields = overlay.querySelector('#geo-bkash-form-fields');
                        if (formFields) {
                            formFields.style.opacity = '0';
                            setTimeout(() => { formFields.style.display = 'none'; }, 300);
                        }
                        btn.innerHTML = 'Submitted Successfully!';
                        btn.style.background = 'var(--lm-primary)';
                        btn.style.color = '#000';
                        btn.style.boxShadow = '0 0 20px rgba(var(--lm-primary-rgb), 0.5)';
                        btn.disabled = true;
                        setTimeout(async () => {
                            status = "PENDING";
                            await renderState("BKASH");
                        }, 600);
                    } else {
                        alert('Error submitting details. Please try again.');
                        btn.innerHTML = 'Submit Payment Info';
                    }
                };
            }
            let swCrypto = overlay.querySelector('#switch-crypto');
            if (swCrypto) swCrypto.onclick = () => renderState('CRYPTO');
        } else if (state === 'CRYPTO') {
            let crBtn = overlay.querySelector('#geo-crypto-pay');
            if (crBtn) {
                crBtn.onclick = async () => {
                    crBtn.innerHTML = '<span class="material-symbols-outlined animate-spin" style="animation: spin 1s linear infinite;">autorenew</span> Generating Invoice...';
                    crBtn.style.pointerEvents = 'none';
                    crBtn.style.opacity = '0.7';
                    try {
                        const res = await geoSubmitCrypto(userEmail);
                        if (res && res.invoice_url) {
                            window.open(res.invoice_url, '_blank');
                            crBtn.innerHTML = '<span class="material-symbols-outlined">check_circle</span> Redirecting...';
                            setTimeout(() => {
                                crBtn.innerHTML = '<span class="material-symbols-outlined">rocket_launch</span> Pay Now';
                                crBtn.style.pointerEvents = 'auto';
                                crBtn.style.opacity = '1';
                            }, 3000);
                        } else {
                            throw new Error("Invalid response");
                        }
                    } catch (e) {
                        crBtn.innerHTML = '<span class="material-symbols-outlined">error</span> Error - Try Again';
                        setTimeout(() => {
                            crBtn.innerHTML = '<span class="material-symbols-outlined">rocket_launch</span> Pay Now';
                            crBtn.style.pointerEvents = 'auto';
                            crBtn.style.opacity = '1';
                        }, 3000);
                    }
                };
            }
            let swBkash = overlay.querySelector('#switch-bkash');
            if (swBkash) swBkash.onclick = () => renderState('BKASH');
        }
    }

              try {
            let initialState = 'BKASH'; // isBD ? 'BKASH' : 'CRYPTO';
              if (status === 'LICENSE_REQUIRED') initialState = 'ACTIVATE';
              await renderState(initialState);
        } catch(e) {
            console.error("renderState error:", e);
            overlay.innerHTML = "<div style='color:white; padding:50px;'>Error rendering overlay: " + e.message + "</div>";
        }
        shadow.appendChild(style);
        shadow.appendChild(overlay);
        document.body.appendChild(container);
        return;
   }

   // For LOGIN_REQUIRED
   container.style.cssText = "position: fixed; inset: 0; z-index: 100000; width: 100vw; height: 100vh; background: #090d12; display: flex; align-items: center; justify-content: center; font-family: 'Hanken Grotesk', system-ui, -apple-system, sans-serif;";
   const shadow = container.attachShadow({ mode: "open" });
   
   const style = document.createElement("style");
   style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
      :host {
         --primary: var(--lm-primary);
         --primary-hover: #1ed760;
         --bg-dark: #0d131a;
         --bg-card: #161f2b;
         --text-white: #ffffff;
         --text-muted: #94a3b8;
         --border: rgba(255, 255, 255, 0.08);
      }
      .wrapper {
         width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background: radial-gradient(circle at top, rgba(var(--lm-primary-rgb), 0.12) 0%, #090d12 100%); color: var(--text-white); padding: 20px; box-sizing: border-box; overflow-y: auto;
      }
      .card {
         background: var(--bg-card); border: 1px solid var(--border); border-radius: 20px; width: 100%; max-width: 420px; padding: 32px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05); box-sizing: border-box; text-align: center; animation: fadeIn 0.4s ease-out;
      }
      @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      .logo-box { margin-bottom: 24px; display: flex; justify-content: center; }
      .logo-circle { width: 64px; height: 64px; border-radius: 50%; background: rgba(var(--lm-primary-rgb), 0.1); border: 1px solid var(--primary); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px rgba(var(--lm-primary-rgb), 0.3); }
      .logo-icon { font-size: 32px; color: var(--primary); animation: pulseGlow 2s infinite alternate; }
      @keyframes pulseGlow { from { text-shadow: 0 0 10px rgba(var(--lm-primary-rgb), 0.5); } to { text-shadow: 0 0 20px rgba(var(--lm-primary-rgb), 1); } }
      h2 { margin: 0 0 8px 0; font-size: 24px; font-weight: 800; letter-spacing: 0.5px; }
      .subtitle { color: var(--text-muted); font-size: 14px; margin-bottom: 28px; line-height: 1.5; }
      .google-btn { width: 100%; padding: 14px; background: #ffffff; border: 1px solid #dadce0; border-radius: 12px; color: #3c4043; font-weight: 700; font-size: 14px; display: flex; align-items: center; justify-content: center; gap: 12px; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 2px 4px rgba(0,0,0,0.08); }
      .google-btn:hover { background: #f8f9fa; box-shadow: 0 4px 10px rgba(0,0,0,0.12); transform: translateY(-1px); }
      .google-btn:active { transform: scale(0.98); }
      .info-message { margin-top: 20px; font-size: 13px; font-weight: 700; color: #ef4444; }
      .info-message.success { color: var(--primary); }
   `;

   const wrapper = document.createElement("div");
   wrapper.className = "wrapper";
   
   wrapper.innerHTML = `
      <div class="card">
         <div class="logo-box">
            <div class="logo-circle">
               <span class="material-symbols-outlined logo-icon">gpp_maybe</span>
            </div>
         </div>
         <h2>Sign In Required</h2>
         <p class="subtitle">Log in with your Google account to initialize your profile and start your 3-day free trial.</p>
         
         <button class="google-btn" id="google-login-btn">
            <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
            <span>Continue with Google</span>
         </button>
         <div class="info-message" id="login-message-box"></div>
      </div>
   `;

   shadow.appendChild(style);
   shadow.appendChild(wrapper);
   document.body.appendChild(container);

   const googleBtn = shadow.getElementById("google-login-btn");
   const loginMsgBox = shadow.getElementById("login-message-box");

   googleBtn.onclick = async () => {
      loginMsgBox.textContent = "Connecting to Google...";
      loginMsgBox.className = "info-message success";

      const response = await geoLoginGoogle();
      if (response && response.success) {
         loginMsgBox.textContent = "Successfully registered! Reloading...";
         setTimeout(() => { location.reload(); }, 1000);
      } else {
         loginMsgBox.textContent = (response && response.error) || "Google sign-in failed.";
         loginMsgBox.className = "info-message";
      }
   };
}
function applyCleanDataView(isClean) {
    const table = document.querySelector('table');
    if (!table) return;
    
    if (isClean) {
        document.body.classList.add('lm-clean-table-active');
    } else {
        document.body.classList.remove('lm-clean-table-active');
    }
    
    const ths = Array.from(table.querySelectorAll('th'));
    if (ths.length === 0) return;
    
    const allowedCols = [
      // Raw names
      'name', 
      'full address', 
      'phone 1', 
      'phone standard format', 
      'email from website', 
      'website', 
      'reviews count', 
      'average rating', 
      'business status',
      'google maps url',
      'gmb url',
      'image/logo url',
      'image url',
      'image',
      
      // Formatted names
      'company/business name',
      'phone number (1 & 2)',
      'email address',
      'website url',
      'rating (stars)',
      'review count'
    ];
    
    const hiddenIndices = [];
    ths.forEach((th, index) => {
        if (th.querySelector('input[type="checkbox"]')) {
            th.classList.add('lm-th-checkbox');
            th.style.display = ''; // always show selection checkbox
            return;
        }
        
        const text = th.textContent.trim().toLowerCase().replace(/\s+/g, ' ');
        
        // Clear classes so they don't accumulate incorrectly
        th.classList.remove(
            'lm-th-gmb', 'lm-th-status', 'lm-th-phone', 'lm-th-email', 'lm-th-web',
            'lm-th-rating', 'lm-th-reviews', 'lm-th-name', 'lm-th-address', 'lm-th-image'
        );
        
        // Add header width constraint classes for Clean Data view
        if (text.includes('gmb') || text.includes('google maps') || text === 'gmb url') {
            th.classList.add('lm-th-gmb');
        } else if (text.includes('status')) {
            th.classList.add('lm-th-status');
        } else if (text.includes('phone')) {
            th.classList.add('lm-th-phone');
        } else if (text.includes('email')) {
            th.classList.add('lm-th-email');
        } else if (text.includes('website')) {
            th.classList.add('lm-th-web');
        } else if (text.includes('rating') || text.includes('stars')) {
            th.classList.add('lm-th-rating');
        } else if (text.includes('review')) {
            th.classList.add('lm-th-reviews');
        } else if (text.includes('name')) {
            th.classList.add('lm-th-name');
        } else if (text.includes('address')) {
            th.classList.add('lm-th-address');
        } else if (text.includes('image') || text.includes('logo')) {
            th.classList.add('lm-th-image');
        }

        const isCheckboxCol = index === 0 && (text === '' || /^\d+$/.test(text) || text.includes('image'));
        const isAllowed = allowedCols.some(col => text.includes(col)) || isCheckboxCol;
        
        if (isClean && !isAllowed) {
            th.style.display = 'none';
            hiddenIndices.push(index);
        } else {
            th.style.display = '';
        }
    });
    
    const rows = Array.from(table.querySelectorAll('tr')).slice(1);
    rows.forEach(row => {
        const tds = row.querySelectorAll('td');
        tds.forEach((td, index) => {
            if (isClean && hiddenIndices.includes(index)) {
                td.style.display = 'none';
            } else {
                td.style.display = '';
            }
        });
    });

    // Format special columns
    formatTableCells(table, ths);
}

// --- Database Purging Implementation ---
function clearAllLeadsFromStorage() {
   if (typeof chrome === "undefined" || !chrome.storage || !chrome.storage.local) return Promise.resolve(false);
   
   return new Promise((resolve) => {
      chrome.storage.local.get(null, (data) => {
         const updateObj = {};
         const keysToClear = [];
         
         const countKeys = ['scrapedcount', 'scraped_count', 'total_leads', 'scraped', 'count', 'resultscount', 'results_count', 'leads_count', 'savedcount', 'saved_count', 'totalfound', 'total_found'];
         const listKeys = ['leads', 'results', 'scraped_leads', 'saved_places', 'leads_data'];

         for (const [key, val] of Object.entries(data)) {
            const k = key.replace('local:', '').toLowerCase();
            
            if (Array.isArray(val)) {
               let isLeadsList = false;
               if (val.length === 0) {
                  if (listKeys.includes(k)) {
                     isLeadsList = true;
                  }
               } else {
                  const firstItem = val[0];
                  if (firstItem && typeof firstItem === 'object') {
                     const signatureKeys = ["id", "Name", "Keyword", "Full_Address", "Full Address", "Website", "Company/Business Name"];
                     const hits = Object.keys(firstItem).filter(ki => signatureKeys.includes(ki)).length;
                     if (hits >= 2) {
                        isLeadsList = true;
                     }
                  }
               }
               
               if (isLeadsList) {
                  updateObj[key] = [];
                  keysToClear.push(key);
               }
            }
            else if (typeof val === 'number') {
               if (countKeys.includes(k)) {
                  updateObj[key] = 0;
                  keysToClear.push(key);
               }
            }
         }

         // Clear IndexedDB store 'list'
         try {
            let dbName = "Geo Bucket_v5.4.2";
            if (chrome.runtime && chrome.runtime.getManifest) {
               const manifest = chrome.runtime.getManifest();
               dbName = (manifest.name || "Geo Bucket") + "_v" + (manifest.version || "5.4.2");
            }
            const request = indexedDB.open(dbName);
            request.onsuccess = function(event) {
               const db = event.target.result;
               if (db.objectStoreNames.contains("list")) {
                  const transaction = db.transaction(["list"], "readwrite");
                  const objectStore = transaction.objectStore("list");
                  objectStore.clear();
               }
               db.close();
            };
         } catch (e) {
            console.error("Geo Bucket: Error clearing IndexedDB in clearAllLeadsFromStorage:", e);
         }
         
         if (keysToClear.length > 0) {
            chrome.storage.local.set(updateObj, () => {
               console.log("Geo Bucket: Cleared leads and reset counters:", keysToClear);
               
               try {
                  chrome.runtime.sendMessage({ action: "clear_all_leads" });
               } catch (_) {}
               
               // Reset the stats UI text directly in siri.js if stats are visible
               const bigNum = document.querySelector('span.text-6xl') || document.querySelector('.lm-stats-upgraded span.text-6xl');
               if (bigNum) {
                  bigNum.textContent = '0';
               }
               
               resolve(true);
            });
         } else {
            resolve(true);
         }
      });
   });
}

function getLeadsCount() {
   return new Promise((resolve) => {
      try {
         let dbName = "Geo Bucket_v5.4.2";
         if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.getManifest) {
            const manifest = chrome.runtime.getManifest();
            dbName = (manifest.name || "Geo Bucket") + "_v" + (manifest.version || "5.4.2");
         }
         const request = indexedDB.open(dbName);
         request.onsuccess = function(event) {
            const db = event.target.result;
            if (!db.objectStoreNames.contains("list")) {
               db.close();
               resolve(0);
               return;
            }
            const transaction = db.transaction(["list"], "readonly");
            const objectStore = transaction.objectStore("list");
            const countRequest = objectStore.count();
            countRequest.onsuccess = function() {
               db.close();
               resolve(countRequest.result || 0);
            };
            countRequest.onerror = function() {
               db.close();
               resolve(0);
            };
         };
         request.onerror = function() {
            resolve(0);
         };
      } catch (e) {
         resolve(0);
      }
   });
}




// ==========================================
// GEO BUCKET - PERMANENT BRANDING INJECTION
// ==========================================
(function injectPermanentLogo() {
  const isDataTab = window.location.href.includes('chrome-extension') || window.location.pathname.includes('sidepanel.html');

  const container = document.createElement('div');
  container.id = 'geo-permanent-logo-container';
  
  if (isDataTab) {
      container.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 99999;
        display: flex;
        align-items: center;
        gap: 12px;
        pointer-events: none;
        transition: top 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      `;
  } else {
      container.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
        pointer-events: none;
        transition: top 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      `;
  }

  // Define profile container style based on tab
  const profileStyle = isDataTab 
    ? `position: fixed; top: 20px; right: 20px; display: none; align-items: center; min-width: 48px; min-height: 48px; z-index: 99999; transition: top 0.4s cubic-bezier(0.16, 1, 0.3, 1);`
    : `display: none; align-items: center; min-width: 48px; min-height: 48px; position: relative;`;

  container.innerHTML = `
    <div style="display: flex; align-items: center; gap: 12px; background: ${isDataTab ? 'rgba(13,20,29,0.8)' : 'transparent'}; padding: ${isDataTab ? '4px 16px 4px 4px' : '0'}; border-radius: 50px; ${isDataTab ? 'border: 1px solid rgba(var(--lm-primary-rgb),0.2); box-shadow: 0 4px 20px rgba(0,0,0,0.5); backdrop-filter: blur(10px);' : ''}">
      <div style="width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; position: relative;">
         <div style="position: absolute; inset: -4px; background: radial-gradient(circle, rgba(var(--lm-primary-rgb),0.2) 0%, transparent 70%); border-radius: 50%; animation: pulseGlow 2s infinite alternate;"></div>
         <img class="lm-radar-lottie" src="/logo.png" style="width: 100%; height: 100%; position: relative; z-index: 2; border-radius: 50%; object-fit: contain;" alt="Logo">
      </div>
      <div style="display: flex; flex-direction: column;">
        <h1 style="color: var(--lm-primary); font-weight: 900; font-size: ${isDataTab ? '20px' : '23px'}; margin: 0; line-height: 1; text-shadow: 0 0 15px rgba(var(--lm-primary-rgb),0.5); font-family: 'Hanken Grotesk', sans-serif; letter-spacing: 0.5px;">Geo Bucket</h1>
        <span id="geo-permanent-logo-subtext" style="color: var(--lm-primary); font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-top: 2px; text-shadow: 0 0 10px rgba(var(--lm-primary-rgb), 0.4);">Free Extractor</span>
      </div>
    </div>
    <div id="geo-permanent-profile-container" style="${profileStyle}"></div>
  `;
  
  // Use MutationObserver to ensure it stays in the DOM permanently
  const observer = new MutationObserver(() => {
    if (!document.getElementById('geo-permanent-logo-container')) {
      document.body.appendChild(container);
    }

    const trialBanner = document.getElementById('geo-trial-banner');
    const newTop = trialBanner ? '65px' : '20px';
    container.style.top = newTop;
    if (isDataTab) {
       const profileContainer = document.getElementById("geo-permanent-profile-container");
       if (profileContainer) {
          profileContainer.style.top = newTop;
       }
    }
    
    if (isDataTab) {
        // Hide native radar logo in Data Tab
        const nativeLogos = document.querySelectorAll('img[src*="radar"], svg[class*="radar"]');
        nativeLogos.forEach(logo => logo.style.display = 'none');
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
  document.body.appendChild(container);

  // Load Profile Picture & Check Premium Status
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
     chrome.storage.local.get(["geo_bucket_user_picture", "geo_bucket_is_valid"], (data) => {
        if (data.geo_bucket_user_picture) {
           const profileContainer = document.getElementById("geo-permanent-profile-container");
           if (profileContainer) {
              profileContainer.style.display = "flex";
              
              const isPremium = data.geo_bucket_is_valid === true;
              
              if (isPremium) {
                 document.body.classList.add('is-premium');
              } else {
                 document.body.classList.remove('is-premium');
              }
              
              const subtext = document.getElementById("geo-permanent-logo-subtext");
              if (subtext) {
                 if (isPremium) {
                    subtext.textContent = "Premium Extractor";
                    subtext.style.color = "var(--lm-primary)";
                    subtext.style.textShadow = "0 0 10px rgba(var(--lm-primary-rgb), 0.6)";
                 } else {
                    subtext.textContent = "Free Extractor";
                    subtext.style.color = "#ffffff";
                    subtext.style.textShadow = "0 0 10px rgba(255, 255, 255, 0.4)";
                 }
              }
              
              if (isPremium) {
                 profileContainer.innerHTML = `
                    <style>
                       @keyframes floatCrown {
                          0%, 100% { transform: translateY(0) rotate(-10deg); }
                          50% { transform: translateY(-3px) rotate(5deg); }
                       }
                       @keyframes premiumPopIn {
                          0% { opacity: 0; transform: translateX(-50%) scale(0.5) translateY(10px); }
                          100% { opacity: 1; transform: translateX(-50%) scale(1) translateY(0); }
                       }
                       @keyframes crownPopIn {
                          0% { opacity: 0; transform: scale(0.5) translateY(10px); }
                          100% { opacity: 1; transform: scale(1) translateY(0); }
                       }
                       .premium-profile-img {
                          width: 48px; height: 48px; border-radius: 50%; object-fit: cover;
                          border: 2px solid var(--lm-primary);
                          box-shadow: 0 0 20px rgba(var(--lm-primary-rgb), 0.6);
                       }
                       .premium-crown-wrapper {
                          position: absolute;
                          top: -14px;
                          right: -10px;
                          width: 24px;
                          height: 24px;
                          opacity: 0;
                          animation: crownPopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                          animation-delay: 2s;
                       }
                       .premium-crown-svg {
                          width: 100%;
                          height: 100%;
                          filter: drop-shadow(0 2px 4px rgba(var(--lm-primary-rgb), 0.6));
                          animation: floatCrown 4s infinite ease-in-out;
                       }
                       .premium-badge {
                          position: absolute;
                          bottom: -8px;
                          left: 50%;
                          transform: translateX(-50%) scale(0.5);
                          background: linear-gradient(135deg, var(--lm-primary), var(--lm-primary-hover));
                          color: var(--lm-on-primary);
                          font-size: 9px;
                          font-weight: 900;
                          padding: 2px 8px;
                          border-radius: 12px;
                          letter-spacing: 0.5px;
                          border: 1px solid rgba(var(--lm-primary-rgb), 0.4);
                          text-transform: uppercase;
                          white-space: nowrap;
                          box-shadow: 0 2px 8px rgba(var(--lm-primary-rgb), 0.4);
                          opacity: 0;
                          animation: premiumPopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                          animation-delay: 2.2s;
                       }
                    </style>
                    <img src="${data.geo_bucket_user_picture}" alt="Profile" class="premium-profile-img">
                    <div class="premium-crown-wrapper">
                       <svg class="premium-crown-svg" viewBox="0 0 24 24" fill="var(--lm-primary)">
                          <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
                       </svg>
                    </div>
                    <div class="premium-badge">PRO</div>
                 `;
              } else {
                 profileContainer.innerHTML = `
                    <style>
                       @keyframes floatCloud {
                          0%, 100% { transform: translateY(0) scale(1); }
                          50% { transform: translateY(-2px) scale(1.05); }
                       }
                       @keyframes freePopIn {
                          0% { opacity: 0; transform: translateX(-50%) scale(0.5) translateY(10px); }
                          100% { opacity: 1; transform: translateX(-50%) scale(1) translateY(0); }
                       }
                       @keyframes cloudPopIn {
                          0% { opacity: 0; transform: scale(0.5) translateY(10px); }
                          100% { opacity: 1; transform: scale(1) translateY(0); }
                       }
                       .free-profile-img {
                          width: 48px; height: 48px; border-radius: 50%; object-fit: cover;
                          border: 2px solid var(--lm-primary);
                          box-shadow: 0 0 20px rgba(var(--lm-primary-rgb), 0.6);
                       }
                       .free-cloud-wrapper {
                          position: absolute;
                          top: -14px;
                          right: -10px;
                          width: 24px;
                          height: 24px;
                          opacity: 0;
                          animation: cloudPopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                          animation-delay: 2s;
                       }
                       .free-cloud-svg {
                          width: 100%;
                          height: 100%;
                          filter: drop-shadow(0 2px 4px rgba(var(--lm-primary-rgb), 0.5));
                          animation: floatCloud 4s infinite ease-in-out;
                       }
                       .free-badge {
                          position: absolute;
                          bottom: -8px;
                          left: 50%;
                          transform: translateX(-50%) scale(0.5);
                          background: linear-gradient(135deg, var(--lm-primary), var(--lm-primary-hover));
                          color: var(--lm-on-primary);
                          font-size: 8px;
                          font-weight: 900;
                          padding: 2px 8px;
                          border-radius: 12px;
                          letter-spacing: 0.5px;
                          border: 1px solid rgba(var(--lm-primary-rgb), 0.4);
                          text-transform: uppercase;
                          white-space: nowrap;
                          box-shadow: 0 2px 8px rgba(var(--lm-primary-rgb), 0.4);
                          opacity: 0;
                          animation: freePopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                          animation-delay: 2.2s;
                       }
                    </style>
                    <img src="${data.geo_bucket_user_picture}" alt="Profile" class="free-profile-img">
                    <div class="free-cloud-wrapper">
                       <svg class="free-cloud-svg" viewBox="0 0 24 24" fill="#EF4444" stroke="#7F1D1D" stroke-width="0.5">
                          <path d="M18 16c2.2 0 4-1.8 4-4 0-1.9-1.3-3.5-3-3.9.1-.3.1-.7.1-1.1 0-2.8-2.2-5-5-5-2.2 0-4.1 1.4-4.8 3.3C8.6 5.1 8.1 5 7.5 5 5.6 5 4 6.6 4 8.5c0 .6.2 1.2.4 1.7C2.4 11 1 12.8 1 15c0 2.8 2.2 5 5 5h12z"/>
                          <circle cx="8" cy="21" r="1.5"/>
                          <circle cx="5" cy="23" r="1"/>
                          <path d="M11.5 8v4" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
                          <circle cx="11.5" cy="14" r="1" fill="#fff" stroke="none"/>
                       </svg>
                    </div>
                    <div class="free-badge">FREE</div>
                 `;
              }
           }
        }
     });
  }
})();
