<div align="center">

<img src="icons/128x128.png" alt="Client Koi Extension" width="80" />

# Client Koi - #1 Google Maps Scraper & B2B Lead Extractor

**Client Koi** is the ultimate Google Maps scraper Chrome extension and B2B lead generation tool. Built on React and Manifest V3, this powerful Google Maps data extractor automates the scraping of local business profiles, bypassing captchas to instantly build a verified list of emails, phone numbers, and websites. If you are looking for the official Client Koi github repository, you have found it!

[![Version](https://img.shields.io/badge/v7.1.2-stable-1DB954?style=flat-square&labelColor=0A0A0A)](https://github.com/Shihab-Miah/Client-Koi)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black&labelColor=0A0A0A)](https://github.com/Shihab-Miah/Client-Koi)
[![Chrome](https://img.shields.io/badge/Manifest-V3-4285F4?style=flat-square&logo=googlechrome&logoColor=white&labelColor=0A0A0A)](https://github.com/Shihab-Miah/Client-Koi)
[![License](https://img.shields.io/badge/License-Proprietary-E5E2E1?style=flat-square&labelColor=0A0A0A)](#license)

<br />

<img src="assets/banner.png" alt="Client Koi Google Maps Scraper" width="720" />

</div>

<br />

## What is Client Koi?

Client Koi is a robust Chrome extension designed to scrape B2B leads from Google Maps at scale. 

You search for a target (e.g., "marketing agencies in New York"), start the engine, and it autonomously sweeps through the listings. It extracts standard Maps data (names, phones, addresses, ratings) and then deep-crawls the linked business websites to pull verified emails and social media profiles.

Manual prospecting is a massive bottleneck in B2B sales. The goal of Client Koi is to provide a local scraper that bypasses rate limits, handles captchas automatically, and outputs data that is ready to be pushed directly to your CRM—no manual cleaning required.

<br />

## Core Architecture & Features

This isn't just a basic HTML/JS scraper. The Client Koi extension is built as a complete SaaS product inside the browser.

### The Stack
- **Frontend**: React 18, Vite, and TailwindCSS. The UI features a custom glassmorphic design system, WebGL shader backgrounds, and Lottie animations for a premium, weightless feel.
- **Backend**: 100% serverless, running on Google Apps Script. It handles Google OAuth identity mapping, trial lifecycles, and license validation.
- **Security**: The offline fallback is locked down. API endpoints are XOR-obfuscated, and the backend generates HMAC-SHA256 signatures to prevent offline tampering of the license state.

### Scraping Engine
- **Data Interceptor Pipeline**: The engine hooks directly into `chrome.storage.local`, transforming raw, messy JSON payloads from Maps into clean, normalized business records on the fly.
- **Smart Captcha Bypass**: Automatically intercepts and solves Google Maps captchas in the background. You don't have to sit there babysitting the scraper.
- **Deep Web Crawling**: Maps rarely provides emails. The engine spins up background workers to visit the business's website and scrape contact forms, `mailto:` links, and social footprints (Facebook, Instagram, LinkedIn).
- **Anti-Ban Mechanics**: Built-in humanized delays and request jitter prevent Google from flagging your session.

### Monetization & Payments
- **Crypto Native**: Fully automated crypto checkouts using the NOWPayments API. Webhooks trigger the backend to generate a license key and dispatch a styled HTML email automatically.
- **bKash Integration**: Localized manual payment flow for regional users.

<br />

## What it extracts

When you initiate the Client Koi download and export to `.CSV` or `.XLSX`, the data is perfectly formatted. 

| Field | Source |
| :--- | :--- |
| **Business Name** | Google Maps metadata |
| **Phone Number (1 & 2)** | Google Maps + website fallbacks |
| **Email Address** | Deep-crawled from the business website |
| **Website URL** | Direct URL (unwrapped from Google's redirect tracker) |
| **Address Data** | Split into Full Address, City, State, Zip, and Country |
| **Rating & Reviews** | Star rating and total review count |
| **Category** | Primary industry classification |
| **Social Links** | Facebook, Instagram, Twitter/X, and LinkedIn |
| **Working Hours** | Operating schedule |

<br />

## Prerequisites
Before installing, ensure you have:
- **Google Chrome v100+** (or a Chromium-based browser like Brave/Edge)
- **Active 2Captcha Account** (Optional, but required for automated captcha bypassing during large scrapes)

<br />

## Installation

Everything runs locally in your browser. No data is sent to our servers.

1. Click the green **Code** button above and select **Download ZIP**
2. Unzip the folder to a permanent directory on your machine
3. Open `chrome://extensions` in Chrome
4. Turn on **Developer Mode** (top right toggle)
5. Click **Load Unpacked** and select the unzipped `Client-Koi` folder
6. Pin Client Koi to your toolbar

<br />

## Configuration & API Key Setup

To maximize the extraction engine without getting blocked by Google:

1. Click the Client Koi extension icon in your Chrome toolbar.
2. Navigate to the **Settings (Gear Icon)** in the side panel.
3. **2Captcha API Key**: Paste your `2Captcha API Key` here. This allows the extension to automatically solve Google's "Unusual Traffic" captchas in the background.
4. **Scraping Speed / Delays**: We recommend keeping the default dynamic jitter (2000ms - 4000ms). Lowering this below 1000ms significantly increases the risk of triggering Google's rate limiters.

<br />

## Getting Started

1. Go to Google Maps and search for a niche and location (e.g., "plumbers in Chicago").
2. Open the Client Koi side panel.
3. Hit **Start**.
4. Once the sweep is complete, click **Export** to generate your CSV or XLSX file client-side.

<br />

## Troubleshooting & FAQ

**Manifest V3 Warnings in Chrome Extensions Page?**
If you see warnings about "Manifest V3" or "Service Workers" in `chrome://extensions`, you can safely ignore them. Client Koi uses the absolute latest Chrome extension architecture, and Google's developer mode sometimes flags standard background scripts. 

**Google Maps DOM Updates / Scraper Breaking?**
Google Maps frequently changes their underlying HTML structure. If the scraper suddenly stops pulling phone numbers, ensure you are on the absolute latest version (`v7.1.2`). We push silent updates to accommodate DOM changes.

**Does my data leave my computer?**
No. The scraping and export generation happen entirely client-side. The only thing that touches the backend is your Google Identity (for the free trial) and license validation checks.

**Can I run multiple searches?**
Yes. The extension tracks your current session and automatically deduplicates leads if you run overlapping searches.

<br />

## License

This software is **Proprietary**.
Unauthorized distribution, modification, or commercial resale of this source code is strictly prohibited without explicit written consent from the author. 

<br />

---

<div align="center">

Made by [Shihab Miah](https://github.com/Shihab-Miah)

[Instagram](https://www.instagram.com/client.koi/) &bull; [Facebook](https://www.facebook.com/Client.koi)

<sub>© 2026 Client Koi</sub>

</div>

