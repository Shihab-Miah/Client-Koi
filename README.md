<div align="center">

<img src="icons/128x128.png" alt="Client Koi" width="80" />

# Client Koi

A high-performance lead extraction engine for Google Maps. Built on React and Manifest V3, with a serverless backend, automated captcha bypassing, and a heavy focus on clean data output.

[![Version](https://img.shields.io/badge/v7.1.2-stable-1DB954?style=flat-square&labelColor=0A0A0A)](https://github.com/Shihab-Miah/Client-Koi)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black&labelColor=0A0A0A)](https://github.com/Shihab-Miah/Client-Koi)
[![Chrome](https://img.shields.io/badge/Manifest-V3-4285F4?style=flat-square&logo=googlechrome&logoColor=white&labelColor=0A0A0A)](https://github.com/Shihab-Miah/Client-Koi)
[![License](https://img.shields.io/badge/License-Proprietary-E5E2E1?style=flat-square&labelColor=0A0A0A)](#license)

<br />

<img src="assets/banner.png" alt="Client Koi" width="720" />

</div>

<br />

## What is this?

Client Koi is a robust Chrome extension designed to scrape B2B leads from Google Maps at scale. 

You search for a target (e.g., "restaurants in Miami"), start the engine, and it autonomously sweeps through the listings. It extracts standard Maps data (names, phones, addresses, ratings) and then deep-crawls the linked business websites to pull emails and social media profiles.

I built this because manual prospecting is a massive bottleneck in B2B sales. The goal was to build a scraper that runs locally, bypasses rate limits, handles captchas automatically, and outputs data that is actually ready to be pushed to a CRM—no manual cleaning required.

<br />

## Core Architecture & Features

This isn't just a basic HTML/JS scraper. The extension is built as a complete SaaS product inside the browser.

### The Stack
- **Frontend**: React 18, Vite, and TailwindCSS. The UI features a custom glassmorphic design system, WebGL shader backgrounds, and Lottie animations for a premium, weightless feel.
- **Backend**: 100% serverless, running on Google Apps Script. It handles Google OAuth identity mapping, 3-day trial lifecycles, and license validation.
- **Security**: The offline fallback is locked down. API endpoints are XOR-obfuscated, and the backend generates HMAC-SHA256 signatures to prevent offline tampering of the license state.

### Scraping Engine
- **Data Interceptor Pipeline**: The engine hooks directly into `chrome.storage.local` via `interceptor.js`, transforming raw, messy JSON payloads from Maps into clean, normalized business records on the fly.
- **2Captcha Integration**: Automatically intercepts and solves Google Maps captchas in the background. You don't have to sit there babysitting the scraper.
- **Deep Web Crawling**: Maps rarely provides emails. The engine spins up background workers to visit the business's website and scrape contact forms, `mailto:` links, and social footprints (Facebook, Instagram, LinkedIn).
- **Anti-Ban Mechanics**: Built-in humanized delays and request jitter prevent Google from flagging your session.

### Monetization & Payments
- **Crypto Native**: Fully automated crypto checkouts using the NowPayments API. Webhooks trigger the backend to generate a license key and dispatch a styled HTML email automatically.
- **bKash Integration**: Localized manual payment flow for regional users.

<br />

## What it extracts

When you export to `.CSV` or `.XLSX`, the data is already formatted. 

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

## Installation

Everything runs locally in your browser. No data is sent to my servers.

1. Click the green **Code** button above and select **Download ZIP**
2. Unzip the folder to a permanent directory on your machine
3. Open `chrome://extensions` in Chrome
4. Turn on **Developer Mode** (top right toggle)
5. Click **Load Unpacked** and select the unzipped `Client-Koi` folder
6. Pin Client Koi to your toolbar

<br />

## Getting Started

1. Go to Google Maps and search for a niche and location (e.g., "plumbers in Chicago").
2. Click the Client Koi icon to open the React side panel.
3. Configure your 2Captcha API key in the settings (optional, but highly recommended for large scrapes).
4. Hit **Start**.
5. Once the sweep is complete, click **Export** to generate your CSV or XLSX file client-side.

<br />

## FAQ

**Does my data leave my computer?**
No. The scraping and export generation happen entirely client-side. The only thing that touches the backend is your Google Identity (for the free trial) and license validation checks.

**Can I run multiple searches?**
Yes. The extension tracks your current session and automatically deduplicates leads if you run overlapping searches.

<br />

---

<div align="center">

Made by [Shihab Miah](https://github.com/Shihab-Miah)

<sub>© 2025 Client Koi</sub>

</div>
