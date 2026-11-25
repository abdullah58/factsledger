---
title: Project Honey Pot
summary: >-
  Anti-spam honeypot network founded in 2004 by Matthew Prince and Lee
  Holloway that trapped email harvesters with decoy addresses, sued them for
  $1 billion in 2007, and seeded Cloudflare.
entityType: Organization
country: United States
established: "2004"
facts:
  - label: Founded
    value: "2004, by Matthew Prince and Lee Holloway"
  - label: Operated by
    value: Unspam Technologies, Inc.
  - label: What it is
    value: Distributed honeypot network tracking email harvesters, spammers, comment spammers, and dictionary attackers
  - label: Core service
    value: "http:BL, a DNS-based blacklist letting website administrators block suspicious and malicious web robots"
  - label: Scale (April 2007)
    value: More than 15,000 harvesters and 2.5 million spam servers identified; more than 2.2 million spam traps operating
  - label: Lawsuit
    value: "$1 billion suit filed April 2007 in U.S. District Court, Alexandria, Virginia, against John Doe harvesters"
  - label: Legacy
    value: Direct predecessor of Cloudflare — users asking it to stop threats, not just track them, became Cloudflare's founding thesis
timeline:
  - year: "2004"
    event: >-
      Matthew Prince and Lee Holloway build Project Honey Pot to answer where
      email spam comes from, planting unique decoy addresses on participating
      websites to trace harvesters.
    sourceType: Founder account; company history
  - year: "2005"
    event: >-
      Network World and Datamation cover the project; decoy addresses grow
      from about 4,000 to more than 32,000 within months, and the http:BL
      blocklist is announced for spring 2005.
    sourceType: Technology industry press
  - year: "2007"
    event: >-
      Project files a $1 billion lawsuit against John Doe email harvesters in
      federal court in Alexandria, Virginia, and launches QuickLinks, comment
      spam tracking, and blacklist services.
    sourceType: Technology industry press
  - year: "2009"
    event: >-
      Prince takes the project's lesson to Harvard Business School, where he
      and Michelle Zatlyn turn it into Cloudflare, winner of the HBS Business
      Plan Competition.
    sourceType: Company history; business-school press
openItems:
  - "Unspam's base is inconsistently reported: Datamation (2005) calls it a Chicago-based Unspam LLC, while Computerworld (2007) calls it a Park City, Utah-based Unspam Technologies Inc. No source read in this pass explains whether the company moved or reincorporated."
  - No source read in this pass reports the outcome of the 2007 $1 billion lawsuit (settlement, judgment, or dismissal).
  - No independent coverage of the project after 2007 was found in this pass; its later history is documented only by its own live website and Cloudflare's account.
  - The homepage counters are live first-party figures with no stated as-of date and no independent audit.
sources:
  - title: Project Honey Pot goes after the harvesters
    url: https://www.networkworld.com/article/860419/software-project-honey-pot-goes-after-the-harvesters.html
    publisher: Network World
    tier: tier2
    date: "2005-02-08"
    usedFor: >-
      Trap mechanism (unique time-stamped address per visitor, harvester IP
      identified); early scale 42,000+ addresses, 1,000+ spam messages, 245
      harvesters; CAN-SPAM Act makes harvesting illegal
  - title: E-mail harvesters hit with $1B antispam lawsuit
    url: https://www.computerworld.com/article/1656280/e-mail-harvesters-hit-with-1b-antispam-lawsuit.html
    publisher: Computerworld
    tier: tier2
    date: "2007-04-26"
    usedFor: >-
      $1B lawsuit filed in U.S. District Court, Alexandria, Va., on behalf of
      members in 100+ countries; John Doe defendants; Jon Praed counsel;
      6M+ emails, 2.5M spam IPs, ~15,000 harvester IPs; Unspam Technologies
      Inc. of Park City, Utah; QuickLinks and comment-spam announcements
  - title: Can Antispammers Win the War?
    url: https://www.datamation.com/trends/can-antispammers-win-the-war/
    publisher: Datamation
    tier: tier2
    date: "2005-02-01"
    usedFor: >-
      Decoy addresses grew from ~4,000 to 32,000+; 0.4-second ISP
      notification claim; http:BL planned for spring 2005; Unspam LLC
      described as Chicago-based; Prince as Unspam cofounder
  - title: Lawsuit Targets 'Spam Harvesters'
    url: https://redmondmag.com/articles/2007/04/27/lawsuit-targets-spam-harvesters.aspx
    publisher: Redmond magazine
    tier: tier2
    date: "2007-04-27"
    usedFor: >-
      Independent confirmation of the 2007 lawsuit, Alexandria filing,
      Unspam Technologies Inc., and the "worst of the worst" targeting
      strategy
  - title: A Different Kind of Honeypot Project
    url: https://www.mail-archive.com/isn@infosecnews.org/msg01346.html
    publisher: Windows IT Pro Security UPDATE (via InfoSec News)
    tier: tier3
    date: "2007-04"
    usedFor: >-
      Mechanism detail: dynamic trap addresses, http:BL DNS queries
      distinguishing search-engine robots from spammers and harvesters,
      Apache module, donated MX records; 2007 scale figures
  - title: Our Story
    url: https://www.cloudflare.com/our-story/
    publisher: Cloudflare
    tier: first-party
    usedFor: >-
      2004 founding by Prince and Holloway; the "where does spam come from"
      question; thousands of websites from 185+ countries; users asking to
      stop threats, not just track them; the HBS meeting and 2009 contest win
  - title: "The Web's Largest Community Tracking Online Fraud & Abuse"
    url: https://www.projecthoneypot.org/
    publisher: Project Honey Pot
    tier: first-party
    usedFor: >-
      Current operating status and site-displayed counters (trap addresses,
      spam servers, harvesters, comment spammers, dictionary attackers)
  - title: "Web Performance Daybook Volume 2, Chapter 15: Using Intelligent Caching to Avoid the Bot Performance Tax"
    url: https://www.oreilly.com/library/view/web-performance-daybook/9781449337667/ch15.html
    publisher: O'Reilly Media
    tier: first-party
    date: "2012-06-18"
    usedFor: >-
      Prince's own account: he and Holloway started Project Honey Pot in 2004
      to track online fraud and abuse via IP-reputation pages; Holloway's
      high-performance database background
sourceNote: >-
  The project's early years are unusually well documented in independent
  trade press (Network World, Datamation, Computerworld, 2005–2007), which
  carries the factual load here. Founding detail comes from the founders'
  own accounts (Cloudflare's history and Prince's O'Reilly chapter), and
  current status from the project's own live site. No independent coverage
  after 2007 was found.
author: Muhammad Abdullah Al Yasin
published: "2026-11-25"
lastUpdated: "2026-11-25"
draft: false
---

## Overview

Project Honey Pot is a distributed anti-spam honeypot network founded in 2004 by [Matthew Prince](/people/matthew-prince/) and [Lee Holloway](/people/lee-holloway/). Its idea was disarmingly simple: plant unique, invisible decoy email addresses on participating websites, and when automated harvesters scraped those addresses and spam later arrived at them, the project could identify exactly which machine had done the harvesting ([Network World](https://www.networkworld.com/article/860419/software-project-honey-pot-goes-after-the-harvesters.html)). It grew from a side project into a community tracking online fraud and abuse across thousands of websites, produced a blacklist service called http:BL, and in 2007 filed a $1 billion lawsuit against the harvesters it had identified ([Computerworld](https://www.computerworld.com/article/1656280/e-mail-harvesters-hit-with-1b-antispam-lawsuit.html)). Its lasting significance is as the seed of [Cloudflare](/organizations/cloudflare/): the project's users kept asking it not just to track the bad actors but to stop them, and that request became a company ([Cloudflare](https://www.cloudflare.com/our-story/)).

## How the trap worked

In 2004, Prince and Holloway "set out to answer the basic question: 'Where does email spam come from?'" ([Cloudflare](https://www.cloudflare.com/our-story/)). The system they built let anyone with a website track how spammers harvested email addresses, and Project Honey Pot was born ([Cloudflare](https://www.cloudflare.com/our-story/)). Prince later described it as a site that "tracks online fraud and abuse" and "primarily consists of web pages that report the reputation of IP addresses" ([O'Reilly](https://www.oreilly.com/library/view/web-performance-daybook/9781449337667/ch15.html)).

The mechanism, as Network World explained in February 2005, was that website operators installed a piece of software that generated "a unique, time-stamped e-mail address for each visitor" ([Network World](https://www.networkworld.com/article/860419/software-project-honey-pot-goes-after-the-harvesters.html)). If a harvester grabbed the address and passed it to a spammer who then mailed it, "the IP address that harvested the address can be identified along with the date and time that the address was harvested" ([Network World](https://www.networkworld.com/article/860419/software-project-honey-pot-goes-after-the-harvesters.html)). A contemporary trade-press account added the operational detail: the code pulled unique addresses from Project Honey Pot servers, tied to the visiting IP address, and inserted them dynamically into the page — so any mail arriving at a trap address could only have come from a harvester ([Windows IT Pro](https://www.mail-archive.com/isn@infosecnews.org/msg01346.html)). Participants could also donate unused MX records from their own domains to create more traps ([Windows IT Pro](https://www.mail-archive.com/isn@infosecnews.org/msg01346.html)).

Growth was fast. By February 2005 the project had issued more than 42,000 unique addresses, received more than 1,000 spam messages at them, and identified 245 harvesters ([Network World](https://www.networkworld.com/article/860419/software-project-honey-pot-goes-after-the-harvesters.html)). Datamation, reporting the same month, put the decoy count above 32,000 — up from about 4,000 at the end of November 2004 — and reported Prince's claim that his servers could notify ISPs within 0.4 seconds of a decoy address receiving a message ([Datamation](https://www.datamation.com/trends/can-antispammers-win-the-war/)). By April 2007 the project said it had identified more than 15,000 harvesters and 2.5 million spam servers and was operating more than 2.2 million spam traps ([Windows IT Pro](https://www.mail-archive.com/isn@infosecnews.org/msg01346.html)).

## The http:BL blacklist

Identifying harvesters was only half the design; the other half was letting websites act on the data. Project Honey Pot built http:BL, a DNS-based blacklist that let administrators query a visitor's IP address and learn whether it belonged to a known harmless search-engine robot, a known spammer, or a known email harvester, and then block or challenge the visitor accordingly ([Windows IT Pro](https://www.mail-archive.com/isn@infosecnews.org/msg01346.html)). Datamation reported in 2005 that the list would become available in spring of that year and could be used by ISPs "to disable accounts as soon as it's clear they're being used for spamming" ([Datamation](https://www.datamation.com/trends/can-antispammers-win-the-war/)). An Apache module was available for direct integration ([Windows IT Pro](https://www.mail-archive.com/isn@infosecnews.org/msg01346.html)).

| Measure | February 2005 | April 2007 |
|---|---|---|
| Decoy / trap addresses | 42,000+ issued | 2,200,000+ operating |
| Harvesters identified | 245 | 15,000+ |
| Spam servers identified | Not yet reported | 2,500,000+ |
| Spam messages collected | 1,000+ | 6,000,000+ |

Sources: [Network World](https://www.networkworld.com/article/860419/software-project-honey-pot-goes-after-the-harvesters.html) (2005 figures); [Computerworld](https://www.computerworld.com/article/1656280/e-mail-harvesters-hit-with-1b-antispam-lawsuit.html) and [Windows IT Pro](https://www.mail-archive.com/isn@infosecnews.org/msg01346.html) (2007 figures). The two 2005 counts come from different reports in the same month and are not strictly comparable — Datamation counted "decoy addresses" above 32,000 while Network World counted "unique e-mail addresses issued" above 42,000.

## The $1 billion lawsuit

In April 2007 the project turned its database into a legal weapon. A $1 billion lawsuit was filed in the U.S. District Court in Alexandria, Virginia, by Unspam Technologies Inc. on behalf of Project Honey Pot members in more than 100 countries, targeting the John Doe harvesters behind the scraping ([Computerworld](https://www.computerworld.com/article/1656280/e-mail-harvesters-hit-with-1b-antispam-lawsuit.html)). It was, the project said, "the first major case in the United States to bring a claim against spammers for harvesting e-mail addresses", a practice that had been a penalty enhancement under the CAN-SPAM Act since the act passed but was rarely provable without the project's harvest-to-spam linkage ([Computerworld](https://www.computerworld.com/article/1656280/e-mail-harvesters-hit-with-1b-antispam-lawsuit.html)). Lead attorney Jon Praed of the Internet Law Group planned to use subpoenas to force ISPs to disclose the identities behind the tracked IP addresses, "going after the largest targets" first ([Computerworld](https://www.computerworld.com/article/1656280/e-mail-harvesters-hit-with-1b-antispam-lawsuit.html)).

The suit was the centrepiece of a week of announcements: new QuickLinks software to help bloggers on Typepad and Blogger track harvesters, a service for tracking comment spammers, and a service for creating blacklists to block comment spammers and harvesters automatically ([Computerworld](https://www.computerworld.com/article/1656280/e-mail-harvesters-hit-with-1b-antispam-lawsuit.html)). The strategy drew a favourable assessment from John Levine, chairman of the Internet Anti-Spam Research group, who said the project did "a good job of gathering evidence against e-mail harvesters that will probably stand up in a court of law" ([Computerworld](https://www.computerworld.com/article/1656280/e-mail-harvesters-hit-with-1b-antispam-lawsuit.html)). No source read in this pass reports how the suit ended, and this profile claims no outcome for it.

## From tracking to stopping: the Cloudflare lineage

Project Honey Pot "quietly grew over the years", with thousands of websites from more than 185 countries signing up, and Holloway's flexible architecture adapting to track more of the threats web administrators faced ([Cloudflare](https://www.cloudflare.com/our-story/)). But the users had "one repeated request: don't just track the bad guys, stop them" ([Cloudflare](https://www.cloudflare.com/our-story/)). That gap between observation and action became Cloudflare's founding thesis. In 2009 Prince, then studying for his MBA at [Harvard Business School](/universities/harvard-business-school/), described the project to classmate [Michelle Zatlyn](/people/michelle-zatlyn/) on a class trip to [Silicon Valley](/places/silicon-valley/); the two sketched a business plan for a service that would stop threats rather than merely track them, enlisted Holloway to build the prototype, and won the school's Business Plan Competition that April ([Cloudflare](https://www.cloudflare.com/our-story/)). The project itself is still operating: its homepage, live at the time of writing, calls it "The Web's Largest Community Tracking Online Fraud & Abuse" and displays live counters including 529,548,029 trap addresses monitored, 109,488,273 spam servers identified, and 916,100 harvesters identified ([Project Honey Pot](https://www.projecthoneypot.org/)).

## Frequently asked questions

### What is Project Honey Pot?

It is a distributed honeypot network founded in 2004 by Matthew Prince and Lee Holloway. Participating websites plant unique decoy email addresses that only automated harvesters can find; when spam arrives at a decoy, the project identifies the harvesting machine. It also runs http:BL, a blacklist that lets sites block known harvesters and spammers.

### How is Project Honey Pot different from a spam filter?

A spam filter blocks junk mail after it is sent. Project Honey Pot attacks one step earlier, at the harvesting stage: it identifies the people and machines collecting email addresses to supply spammers, and gives website owners the data to block them before any spam is sent.

### What was the $1 billion lawsuit about?

Filed in April 2007 in federal court in Alexandria, Virginia, it targeted unidentified "John Doe" email harvesters on behalf of project members in over 100 countries. It was billed as the first major US case against harvesting itself under the CAN-SPAM Act, using subpoenas to unmask harvesters behind tracked IP addresses. Its outcome was not verified in this pass.

### Is Project Honey Pot still running?

Yes. Its website remains live and displays running counters of trap addresses monitored, spam servers and harvesters identified, and comment spammers and dictionary attackers tracked. The counters are live first-party figures with no stated as-of date, so they should be read as the site's own current display, not audited statistics.

### How did Project Honey Pot lead to Cloudflare?

Project users repeatedly asked the team to stop online threats, not just track them. Prince took that idea to Harvard Business School in 2009, where he and Michelle Zatlyn built it into a business plan with Lee Holloway's prototype — and won the school's Business Plan Competition. That company became Cloudflare.

## What this profile does not claim

- It does not state a single headquarters for the project or its operator: 2005 coverage describes a Chicago-based Unspam LLC, while 2007 coverage describes a Park City, Utah-based Unspam Technologies Inc., and no source read explains the difference.
- It does not report the outcome of the 2007 $1 billion lawsuit — no source read in this pass gives one.
- It does not present the homepage counters as audited or dated statistics; they are live figures displayed on the project's own site.
- It does not cover the project's history after 2007 in independent depth, because no independent coverage from that period was found; the post-2007 account rests on the project's own site and Cloudflare's history.
