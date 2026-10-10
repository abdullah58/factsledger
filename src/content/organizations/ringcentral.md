---
entityType: Organization
title: RingCentral
name: RingCentral
summary: "American cloud-communications company (NYSE: RNG) providing voice, messaging, and contact-center platforms to more than 600,000 businesses. In 2026 it reported record free cash flow, declared its first dividend, and suffered a major breach."
country: United States
facts:
  - label: Ticker
    value: "NYSE: RNG"
  - label: Founder and Chief Executive Officer
    value: "Vlad Shmunis"
  - label: Business customers
    value: "More than 600,000"
  - label: FY2025 revenue
    value: "$2.52 billion, up 5% year over year"
  - label: FY2025 free cash flow
    value: "$530 million (record)"
  - label: First dividend
    value: "$0.075 per share quarterly, declared February 2026"
  - label: Share repurchase authorization
    value: "$500 million"
  - label: AI annual recurring revenue
    value: "$100 million"
  - label: 2026 breach
    value: "ShinyHunters extortion group stole data via voice-phishing; ~1.6 million unique email addresses with names, phone numbers, and physical addresses confirmed by Have I Been Pwned"
  - label: Gartner UCaaS Magic Quadrant
    value: "Leader for the 12th consecutive year (2026), alongside Cisco, Microsoft, and Zoom"
timeline:
  - year: "2026-02-19"
    event: "RingCentral reports FY2025 results ($2.52B revenue, record $530M free cash flow) and declares its first quarterly dividend of $0.075 per share."
  - year: "2026-07-27"
    event: "The ShinyHunters extortion group adds RingCentral to its dark-web leak site, claiming theft of more than 623 gigabytes of data."
  - year: "2026-07-28"
    event: "RingCentral publicly discloses the intrusion as a 'sophisticated social engineering campaign' and does not pay the extortion demand."
  - year: "2026-08-13"
    event: "Have I Been Pwned analyzes the leaked archive and confirms approximately 1.6 million unique accounts with full contact profiles."
sources:
  - title: "RingCentral Was Hacked by Phone Call: 1.6M Users' Contact Details Now Arm Vishing Attacks"
    url: "https://nationalcybersecurity.com/ringcentral-was-hacked-by-phone-call-1-6m-users-contact-details-now-arm-vishing-attacks-hacker/"
    publisher: "National Cyber Security Consulting"
    tier: "tier3"
    usedFor: "Breach timeline, ShinyHunters entry via voice-phishing, data volumes, HIBP analysis, vishing-toolkit implications, 600,000+ business customers"
    date: "2026-08-15"
  - title: "RingCentral Announces First Dividend Amid Strong Cash Growth"
    url: "https://www.tipranks.com/news/company-announcements/ringcentral-announces-first-dividend-amid-strong-cash-growth"
    publisher: "TipRanks"
    tier: "tier2"
    usedFor: "FY2025 results, first dividend, buyback authorization, AI ARR, AI Receptionist, OpenAI integration, 2026 guidance, ticker and market cap"
    date: "2026-02-20"
  - title: "Gartner UCaaS Magic Quadrant 2026"
    url: "https://uctoday.com/who-are-gartners-2026-ucaas-magic-quadrant-leaders-and-who-just-got-cut"
    publisher: "UC Today"
    tier: "tier2"
    usedFor: "2026 UCaaS Leader placement, 12th consecutive year, four unchanged Leaders, ~600 integrations, AIR Pro, pricing caution"
    date: "2026-08"
openItems:
  - "Headquarters city (reported as Belmont, California) was not stated in any fully read source."
  - "RingCentral's founding year and early history were not covered by the fully read sources."
  - "The company's exact characterization of the breach's scope ('a limited portion' of customers) conflicts with HIBP's independent 1.6M figure; RingCentral has neither confirmed nor denied the HIBP count."
  - "The Q2 2026 dividend increase to $0.125 per share appears in company-release reposts (first-party) and was not independently verified."
published: "2026-10-04"
lastUpdated: "2026-10-04"
---

## Overview

RingCentral (NYSE: RNG) is an American cloud-communications company whose platforms provide voice, messaging, contact-center, and workforce-engagement tools to more than 600,000 businesses ([TipRanks](https://www.tipranks.com/news/company-announcements/ringcentral-announces-first-dividend-amid-strong-cash-growth); [National Cyber Security Consulting](https://nationalcybersecurity.com/ringcentral-was-hacked-by-phone-call-1-6m-users-contact-details-now-arm-vishing-attacks-hacker/)). Founded and led by CEO Vlad Shmunis, the company spent 2026 on two sharply contrasting tracks: a financial maturation marked by its first-ever dividend, and one of the year's most symbolically charged corporate breaches ([TipRanks](https://www.tipranks.com/news/company-announcements/ringcentral-announces-first-dividend-amid-strong-cash-growth); [National Cyber Security Consulting](https://nationalcybersecurity.com/ringcentral-was-hacked-by-phone-call-1-6m-users-contact-details-now-arm-vishing-attacks-hacker/)).

## The phone company hacked by phone call

In July 2026, the cybercriminal extortion group ShinyHunters added RingCentral to its Tor-hosted dark-web leak site, claiming to have stolen more than 623 gigabytes of data and setting a July 30 payment deadline ([National Cyber Security Consulting](https://nationalcybersecurity.com/ringcentral-was-hacked-by-phone-call-1-6m-users-contact-details-now-arm-vishing-attacks-hacker/)). RingCentral publicly disclosed the intrusion on July 28, describing it as a "sophisticated social engineering campaign," and did not pay the extortion demand; on August 3, ShinyHunters published a compressed 280-gigabyte archive of the claimed stolen files ([National Cyber Security Consulting](https://nationalcybersecurity.com/ringcentral-was-hacked-by-phone-call-1-6m-users-contact-details-now-arm-vishing-attacks-hacker/)).

According to The Register, a ShinyHunters spokesperson said the group gained entry by voice-phishing a RingCentral employee — calling them on the phone and persuading them to hand over their password ([National Cyber Security Consulting](https://nationalcybersecurity.com/ringcentral-was-hacked-by-phone-call-1-6m-users-contact-details-now-arm-vishing-attacks-hacker/)). The irony is structural: RingCentral's core product is business phone infrastructure, and it was breached through the very channel it sells to 600,000 businesses ([National Cyber Security Consulting](https://nationalcybersecurity.com/ringcentral-was-hacked-by-phone-call-1-6m-users-contact-details-now-arm-vishing-attacks-hacker/)).

On August 13, the breach-notification service Have I Been Pwned independently analyzed the archive and added approximately 1.6 million unique email addresses to its database — each accompanied by the account holder's full name, phone number, and physical address ([National Cyber Security Consulting](https://nationalcybersecurity.com/ringcentral-was-hacked-by-phone-call-1-6m-users-contact-details-now-arm-vishing-attacks-hacker/)). That four-element combination is precisely what an attacker needs to run a convincing impersonation call — meaning the breach effectively packaged a vishing toolkit targeting the customers of a voice-communications company, using the same technique that produced it ([National Cyber Security Consulting](https://nationalcybersecurity.com/ringcentral-was-hacked-by-phone-call-1-6m-users-contact-details-now-arm-vishing-attacks-hacker/)).

RingCentral told customers that "if you are not contacted by RingCentral, you are not affected," but the company has neither confirmed nor denied HIBP's 1.6 million figure and has not disclosed how many individuals it directly notified ([National Cyber Security Consulting](https://nationalcybersecurity.com/ringcentral-was-hacked-by-phone-call-1-6m-users-contact-details-now-arm-vishing-attacks-hacker/)).

## The maturing business: first dividend, AI pivot

Months before the breach, RingCentral reported a financial profile of unusual maturity for a growth-era SaaS company. Full-year 2025 revenue reached $2.52 billion (up 5%), with subscriptions exceeding 95% of sales; GAAP operating margin expanded to 4.8%, and the company generated record free cash flow of $530 million while cutting net leverage to 1.7 times ([TipRanks](https://www.tipranks.com/news/company-announcements/ringcentral-announces-first-dividend-amid-strong-cash-growth)).

On February 19, 2026, the board approved the company's first cash dividend — $0.075 per share quarterly — and raised the share-repurchase authorization to $500 million, signaling a deliberate shift toward returning capital to investors ([TipRanks](https://www.tipranks.com/news/company-announcements/ringcentral-announces-first-dividend-amid-strong-cash-growth)). Operationally, AI-led products reached $100 million in annual recurring revenue, with the AI Receptionist serving more than 8,000 customers, and the company deepened its AI capabilities through an integration with [OpenAI](/organizations/openai/) ([TipRanks](https://www.tipranks.com/news/company-announcements/ringcentral-announces-first-dividend-amid-strong-cash-growth)).

In the UCaaS market itself, RingCentral retained its Leader position in Gartner's 2026 Magic Quadrant — its twelfth consecutive year — alongside Cisco, Microsoft, and Zoom, with Gartner crediting close to 600 prebuilt integrations and the new AIR Pro agentic tool while cautioning that midlevel pricing sits above the market average ([UC Today](https://uctoday.com/who-are-gartners-2026-ucaas-magic-quadrant-leaders-and-who-just-got-cut)).

## What this profile does not claim

This profile does not confirm RingCentral's own characterization of the breach's scope — the "limited portion" framing conflicts with HIBP's independent 1.6 million figure, which the company has neither confirmed nor denied. It does not verify the reported Q2 2026 dividend increase, which appears only in company-release reposts. Founding history and headquarters city were not covered by the fully read sources. Financial figures reflect the cited reporting periods and may have changed.
