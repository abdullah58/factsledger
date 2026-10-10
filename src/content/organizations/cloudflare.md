---
title: Cloudflare, Inc.
summary: >-
  The San Francisco internet-infrastructure company whose network sits in front
  of millions of websites — and which keeps colliding with the power that
  position confers, from cutting off extremist customers to a Tokyo court
  holding it liable for manga piracy.
entityType: Organization
country: United States
location: San Francisco, California
facts:
  - label: Founded
    value: "2009"
  - label: Founders
    value: Matthew Prince, Lee Holloway, Michelle Zatlyn
  - label: Listed
    value: "NYSE: NET (since 13 September 2019)"
  - label: IPO price
    value: $15 per share
  - label: What it does
    value: Internet infrastructure, security, and developer platform (CDN, DDoS mitigation, Zero Trust, Workers)
  - label: Network scale (2020)
    value: 200+ cities in 100+ countries; ~1B unique IPs and ~25M sites/apps served daily
timeline:
  - year: "2009"
    event: >-
      Founded by Matthew Prince, Michelle Zatlyn and Lee Holloway; the business
      model is sketched on a napkin during a Harvard Business School class trip
      to Silicon Valley, and the company wins the HBS Business Plan Competition.
    sourceType: Professional-body event account (tier2)
  - year: "2017"
    event: >-
      Cloudflare terminates neo-Nazi site the Daily Stormer — its first-ever
      customer cutoff — after the site claims the company secretly supports it.
    sourceType: Technology press (tier2)
  - year: "2019"
    event: >-
      Draft S-1 filed with the SEC in May; IPO priced at $15 per share in
      September, with shares trading on the NYSE under ticker NET from 13
      September. In August the company cuts off 8chan after the El Paso and
      Dayton shootings, later disclosing the terminations as an IPO risk factor.
    sourceType: SEC record (tier1); company announcement; technology press (tier2)
  - year: "2025"
    event: >-
      On 18 November a database permissions change doubles the size of a Bot
      Management feature file, crashing the company's own network with HTTP 5xx
      errors for hours. The next day, the Tokyo District Court orders Cloudflare
      to pay ¥500M (S$4.2M) to four Japanese publishers for manga-piracy
      copyright infringement.
    sourceType: Company post-mortem (first-party); news agency (tier1)
openItems:
  - Current network-scale figures change frequently and are company-claimed; this profile dates every scale figure to its source rather than asserting a current number.
  - The outcome of Cloudflare's planned appeal against the November 2025 Tokyo manga-piracy ruling was not verified.
  - The resolution of the OFAC self-disclosure noted in the 2019 S-1 process (possible sanctions noncompliance involving Iran, Sudan, and Syria) was not verified beyond the disclosure itself.
  - Whether the company sustained the post-outage engineering changes described in its November 2025 post-mortem was not independently verified.
related:
  - label: "U.S. Securities and Exchange Commission"
    href: /organizations/us-securities-and-exchange-commission/

sources:
  - title: "Division of Corporation Finance comment letter re: Cloudflare, Inc. Draft Registration Statement on Form S-1 (CIK 0001477333)"
    url: https://www.sec.gov/Archives/edgar/data/1477333/000000000019010130/filename1.pdf
    publisher: U.S. Securities and Exchange Commission
    tier: tier1
    date: "2019-06-20"
    usedFor: Draft S-1 submitted 24 May 2019; Matthew Prince as CEO; 101 Townsend Street, San Francisco address; prospectus disclosure of self-reported possible OFAC sanctions noncompliance (Iran, Sudan, Syria)
    sourceNote: Primary SEC record; used for filing facts and the sanctions self-disclosure the SEC itself flagged.
  - title: "Japan court orders Cloudflare to pay $4.2m over manga piracy"
    url: https://www.straitstimes.com/asia/east-asia/japan-court-orders-cloudflare-to-pay-4-2m-over-manga-piracy
    publisher: The Straits Times (Agence France-Presse)
    tier: tier1
    date: "2025-11-20"
    usedFor: Tokyo District Court ruling 19 Nov 2025; ¥500M damages; Kodansha, Shueisha, Shogakukan, Kadokawa; suit filed Tokyo 2022; two piracy sites with 4,000+ titles and 300M monthly views; 2019 settlement; appeal planned
    sourceNote: AFP wire via a major newspaper; independent of all parties.
  - title: "Cloudflare IPO: A real tech giant in the making — with a female co-founder"
    url: https://www.zdnet.com/article/cloudflare-ipo-a-real-tech-giant-in-the-making-with-a-female-co-founder/
    publisher: ZDNet
    tier: tier2
    date: "2019-08-15"
    usedFor: Founders Matthew Prince, Lee Holloway, Michelle Zatlyn; founded June 2009; San Francisco HQ; S-1 for NYSE listing, ticker NET, >$5B valuation; >$320M raised in six rounds; 2018 revenue ~$193M; 20M+ websites, 193 data centers
    sourceNote: Independent technology press at IPO time; used for founding and IPO facts.
  - title: "Cloudflare says cutting off 8chan is an IPO 'risk factor'"
    url: https://techcrunch.com/?p=1869208
    publisher: TechCrunch
    tier: tier2
    date: "2019-08-27"
    usedFor: 8chan cutoff Aug 2019; El Paso/Dayton shootings (31 killed), New Zealand link (50 killed); second-ever customer termination after the Daily Stormer (2017); IPO risk-factor disclosure language; Prince's prior "moral judgments"/defer-to-courts stance; reports of services to sanctioned-entity sites
    sourceNote: Independent technology press; used for the deplatforming controversy and the company's own risk disclosure.
  - title: "How Cloudflare's Founders Matthew Prince (HBS '09) and Michelle Zatlyn (HBS '09) Are Helping to Build a Better Internet"
    url: https://www.hbscny.org/events/register-virtual-how-cloudflareas-founders-matthew-prince-hbs-a09-and-michelle-zatlyn-hbs-a09-are-helping-to-build-a-better-internet/
    publisher: Harvard Business School Club of New York
    tier: tier2
    date: "2020-10-06"
    usedFor: 2009 napkin origin on HBS Silicon Valley trip; Lee Holloway recruited as programmer; HBS Business Plan Competition win; Prince co-created Project Honey Pot; network scale (~1B unique IPs/day, ~25M sites/apps, ~72B threats/day, 200+ cities, 100+ countries); Zatlyn's Google/Toshiba background
    sourceNote: Professional alumni-body event page; used for origin story and dated scale figures.
  - title: "Cloudflare outage on November 18, 2025"
    url: https://blog.cloudflare.com/18-november-2025-outage/
    publisher: Cloudflare (company blog)
    tier: first-party
    date: "2025-11-18"
    usedFor: Outage timeline (11:20 UTC start; ClickHouse permissions change 11:05; feature file doubled; 200-feature limit vs ~60 in use; Rust panic; HTTP 5xx); affected services (core CDN/security, Turnstile, Workers KV, Dashboard login, Access, Email Security); initial DDoS misdiagnosis; recovery ~14:30 / 17:06 UTC; not a cyberattack
    sourceNote: First-party post-mortem; used only for the company's own uncontested technical account of its outage.
  - title: "Cloudflare Announces Pricing of Initial Public Offering"
    url: https://ipo-edge.com/cloudflare-announces-pricing-of-initial-public-offering/
    publisher: Business Wire (Cloudflare company announcement)
    tier: first-party
    date: "2019-09-12"
    usedFor: IPO priced at $15/share; 35M shares (+5.25M underwriter option); NYSE trading from 13 Sept 2019 under ticker NET; registration effective 12 Sept 2019
    sourceNote: Company-issued announcement; used only for the uncontested IPO pricing facts.
published: "2026-10-03"
lastUpdated: "2026-10-03"
draft: false
---

## Overview

Cloudflare is a San Francisco internet-infrastructure company whose network sits between millions of websites and their visitors, providing content delivery, DDoS protection, security, and a developer platform. That position — a private company operating a critical layer of the public internet — is what makes Cloudflare interesting: it has repeatedly been forced to reckon with the power it holds, whether by cutting off extremist customers, by being held liable in a Tokyo court for manga piracy on its network, or by taking itself offline through its own configuration errors ([TechCrunch](https://techcrunch.com/?p=1869208); [The Straits Times](https://www.straitstimes.com/asia/east-asia/japan-court-orders-cloudflare-to-pay-4-2m-over-manga-piracy); [Cloudflare Blog](https://blog.cloudflare.com/18-november-2025-outage/)).

## From an anti-spam side project to internet infrastructure

The company was founded in June 2009 by Matthew Prince, Lee Holloway, and Michelle Zatlyn ([ZDNet](https://www.zdnet.com/article/cloudflare-ipo-a-real-tech-giant-in-the-making-with-a-female-co-founder/)). The origin story, as told by the Harvard Business School alumni club: during a 2009 HBS class trip to Silicon Valley, Prince described an open-source project tracking online fraud and spammers; Zatlyn saw the opportunity not just to track the bad actors but to stop them; the two sketched the business model on a napkin that evening, recruited their friend and programmer Lee Holloway, and won the HBS Business Plan Competition ([HBS Club of NY](https://www.hbscny.org/events/register-virtual-how-cloudflareas-founders-matthew-prince-hbs-a09-and-michelle-zatlyn-hbs-a09-are-helping-to-build-a-better-internet/)). Prince had co-created Project Honey Pot, a community tracking online fraud and abuse, which seeded the idea ([HBS Club of NY](https://www.hbscny.org/events/register-virtual-how-cloudflareas-founders-matthew-prince-hbs-a09-and-michelle-zatlyn-hbs-a09-are-helping-to-build-a-better-internet/)).

By the October 2020 telling, the network processed requests from 1 billion unique IP addresses daily and protected 25 million websites and applications against 72 billion cyber threats a day, spanning more than 200 cities in over 100 countries ([HBS Club of NY](https://www.hbscny.org/events/register-virtual-how-cloudflareas-founders-matthew-prince-hbs-a09-and-michelle-zatlyn-hbs-a09-are-helping-to-build-a-better-internet/)). At the IPO a year earlier, the figures were 20 million-plus websites served through 193 data centers, with 2018 revenue near $193 million on more than $320 million raised across six private rounds ([ZDNet](https://www.zdnet.com/article/cloudflare-ipo-a-real-tech-giant-in-the-making-with-a-female-co-founder/)).

Cloudflare filed its draft S-1 registration statement with the SEC on 24 May 2019 ([SEC](https://www.sec.gov/Archives/edgar/data/1477333/000000000019010130/filename1.pdf)), priced its IPO at $15 per share, and began trading on the New York Stock Exchange under the ticker NET on 13 September 2019 ([Business Wire](https://ipo-edge.com/cloudflare-announces-pricing-of-initial-public-offering/)). Buried in that S-1 process was a less-told detail: the SEC's comment letter notes the prospectus disclosed that Cloudflare had self-reported to the U.S. Treasury's Office of Foreign Assets Control possible noncompliance with economic sanctions programs involving entities under counterterrorism sanctions or affiliated with comprehensively sanctioned governments — Iran, Sudan, and Syria ([SEC](https://www.sec.gov/Archives/edgar/data/1477333/000000000019010130/filename1.pdf)).

## The neutrality problem

For years Prince's stated position was that Cloudflare should not police its customers: in a 2015 interview he said he never wanted to be making "moral judgments on what's good and bad" and would defer to the courts ([TechCrunch](https://techcrunch.com/?p=1869208)). The company broke that stance twice. In 2017 it terminated the neo-Nazi site the Daily Stormer — its first-ever customer cutoff — after the site claimed Cloudflare secretly supported it. In August 2019 it cut off 8chan, an anonymous message board linked to the El Paso and Dayton shootings that killed 31 people and to the New Zealand shootings that killed 50 ([TechCrunch](https://techcrunch.com/?p=1869208)).

Remarkably, Cloudflare disclosed those terminations in its IPO filing as a risk factor, warning investors that the activities of its customers could cause "significant adverse political, business, and reputational consequences" — and that some prospective customers had already declined to subscribe partly because of the actions of other customers ([TechCrunch](https://techcrunch.com/?p=1869208)). The filing thus framed content moderation not as corporate virtue but as a business liability. The company has also faced reports that it provided web protection to sites linked to sanctioned entities including al-Shabaab and the Taliban, responding that it tries "to be neutral" ([TechCrunch](https://techcrunch.com/?p=1869208)).

## When the infrastructure fails itself

On 18 November 2025 at 11:20 UTC, Cloudflare's own network began failing to deliver core traffic, showing users error pages across customer sites ([Cloudflare Blog](https://blog.cloudflare.com/18-november-2025-outage/)). The cause, in the company's post-mortem: a change at 11:05 to a ClickHouse database's permissions caused duplicate rows in a "feature file" used by its Bot Management system; the file doubled in size, exceeded a hard limit of 200 machine-learning features (normal use was ~60), and panicked the Rust proxy code with an unhandled error — producing HTTP 5xx errors network-wide ([Cloudflare Blog](https://blog.cloudflare.com/18-november-2025-outage/)). The team initially misdiagnosed the symptoms as a hyper-scale DDoS attack. Core traffic was largely flowing by 14:30 and all systems were normal by 17:06 UTC; affected services included the core CDN, Turnstile, Workers KV, dashboard logins, Access, and Email Security ([Cloudflare Blog](https://blog.cloudflare.com/18-november-2025-outage/)). It was not a cyberattack — it was the internet's bodyguard tripping over its own shoelaces.

## Copyright liability in Tokyo

A day later, on 19 November 2025, the Tokyo District Court ordered Cloudflare to pay ¥500 million (S$4.2 million) to four major Japanese publishers — Kodansha, Shueisha, Shogakukan, and Kadokawa — for copyright infringement over servers hosting manga-piracy sites ([The Straits Times](https://www.straitstimes.com/asia/east-asia/japan-court-orders-cloudflare-to-pay-4-2m-over-manga-piracy)). The publishers, who filed suit in Tokyo in 2022, said Cloudflare provided servers for two massive piracy sites distributing more than 4,000 manga titles without permission and drawing 300 million views a month; they had previously reached a settlement with the company in 2019 over an earlier takedown request but said it kept serving piracy sites ([The Straits Times](https://www.straitstimes.com/asia/east-asia/japan-court-orders-cloudflare-to-pay-4-2m-over-manga-piracy)). Cloudflare planned to appeal, according to Japanese media ([The Straits Times](https://www.straitstimes.com/asia/east-asia/japan-court-orders-cloudflare-to-pay-4-2m-over-manga-piracy)).

## What this profile does not claim

- It does not assert a current network-scale figure; scale numbers are dated to their sources (2019, 2020) because the company's claims change and are self-reported.
- It does not report the outcome of the Tokyo ruling appeal, which was not verified.
- It does not resolve the OFAC self-disclosure beyond noting the 2019 disclosure itself; no penalty or clearance was verified.
- It does not independently verify the technical claims of the November 2025 post-mortem; they are the company's own account, presented as such.
- It takes no position on whether Cloudflare's content-moderation decisions were right or wrong — only on what the company said and did, as reported.
