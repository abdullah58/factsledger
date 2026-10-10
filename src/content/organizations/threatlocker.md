---
title: ThreatLocker
summary: >-
  The Orlando zero-trust security company built on a default-deny thesis —
  founded in 2017 after cyber threats hit the founders' children's school —
  that reached nearly $500 million in funding with a $190 million Series F in
  2026.
entityType: Organization
country: United States
location: Maitland, Florida, United States
facts:
  - label: Founded
    value: "2017, in Orlando, Florida, by Danny Jenkins, Sami Jenkins and John Carolan"
  - label: Headquarters
    value: "Maitland, Florida (Orlando area); offices also in Dublin, Dubai and Brisbane"
  - label: Approach
    value: "Zero-trust default-deny: application allowlisting plus Ringfencing"
  - label: Total funding
    value: "Nearly $500 million, including a $190 million Series F in July 2026"
  - label: Customers
    value: "More than 70,000 organizations worldwide (company-reported)"
timeline:
  - year: "2017"
    event: >-
      Danny Jenkins, Sami Jenkins and John Carolan found ThreatLocker in
      Orlando in response to cybersecurity threats at their children's school;
      the software they built became the basis of its endpoint security
      platform.
    sourceType: Orlando Economic Partnership (tier2)
  - year: "2022"
    event: >-
      ThreatLocker raises a $100 million Series C in April, then moves its
      headquarters to 1950 Summit Park Drive in Maitland — the former home of
      Electronic Arts Orlando — growing local headcount from 100 to 215 in
      months.
    sourceType: Orlando Economic Partnership (tier2)
  - year: "2024"
    event: >-
      A $115 million Series D round brings total funding past $200 million.
    sourceType: SecurityWeek (tier2)
  - year: "2025"
    event: >-
      ThreatLocker raises a $60 million Series E.
    sourceType: SecurityWeek (tier2)
  - year: "2026"
    event: >-
      A $190 million Series F led by Elephant — with D. E. Shaw Ventures,
      Arthur Ventures and new investor Koch Disruptive Technologies — funds AI
      security controls and a Reading, U.K. office; the company reports
      70,000+ customer organizations and adds zero-trust network and cloud
      access products.
    sourceType: SecurityWeek / MSSP Alert (tier2)
sourceNote: >-
  Built only from independent sources fetched and read in full: SecurityWeek,
  MSSP Alert and the Orlando Economic Partnership (all tier2). No first-party
  material was cited. Wikipedia was used only as a lead index and is not
  cited.
openItems:
  - The Series F valuation was not disclosed; the $1.6 billion figure refers
    to the prior round, attributed to a source familiar with the matter.
  - The 70,000+ customer figure is company-reported via the press and was not
    independently audited.
  - Details of the children's-school incident that prompted the founding are
    stated only as reported by the Orlando Economic Partnership.
sources:
  - title: ThreatLocker Raises $190 Million in Series F Funding
    url: https://www.securityweek.com/threatlocker-raises-190-million-in-series-f-funding/
    publisher: SecurityWeek
    tier: tier2
    date: "2026-07-29"
    usedFor: Series F $190M, prior rounds (B $20M, C $100M, D $115M, E $60M), ~$500M total, $1.6B prior valuation, platform description, 70,000+ orgs, Jenkins default-deny quote
    sourceNote: Independent cybersecurity trade press
  - title: ThreatLocker raises $190 million to expand zero-trust platform and global operations
    url: https://www.msspalert.com/brief/threatlocker-raises-190-million-to-expand-zero-trust-platform-and-global-operations
    publisher: MSSP Alert
    tier: tier2
    date: "2026-07-29"
    usedFor: Series F investors (Elephant, D.E. Shaw, Arthur Ventures, Koch), Reading UK office, Orlando/Dublin/Dubai/Brisbane locations, Ringfencing and AI-agent controls, ZTNA/cloud access products, MSP channel angle
    sourceNote: Independent managed-security channel publication
  - title: "ThreatLocker, a Pioneer in Endpoint Security, Expands into New Maitland Headquarters"
    url: https://news.orlando.org/blog/threatlocker-a-pioneer-in-endpoint-security-expands-into-new-maitland-headquarters/
    publisher: Orlando Economic Partnership
    tier: tier2
    date: "2022-12"
    usedFor: 2017 founding by the Jenkinses and John Carolan after school cyber threats, Series C $100M, Maitland HQ move (former EA building, 42,000 sq ft), 100-to-215 headcount growth, allowlisting/Ringfencing description, Zero Trust World event
    sourceNote: Regional economic-development organization; independent of the company
published: "2026-10-04"
lastUpdated: "2026-10-04"
draft: false
---

## Overview

ThreatLocker is an Orlando-area cybersecurity company built around a blunt inversion of the industry's standard model: instead of trying to detect malicious software after it arrives, its platform blocks everything by default and runs only explicitly approved applications — a "default-deny" or zero-trust approach ([SecurityWeek](https://www.securityweek.com/threatlocker-raises-190-million-in-series-f-funding/)). Founded in 2017 by Danny Jenkins, Sami Jenkins and John Carolan, the company traces its origin to cybersecurity threats at the founders' children's school; the software they built in response became the basis of its endpoint security platform ([Orlando Economic Partnership](https://news.orlando.org/blog/threatlocker-a-pioneer-in-endpoint-security-expands-into-new-maitland-headquarters/)). By mid-2026 it reported more than 70,000 customer organizations and had raised nearly $500 million, including a $190 million Series F ([SecurityWeek](https://www.securityweek.com/threatlocker-raises-190-million-in-series-f-funding/)).

## Default-deny instead of detect-and-respond

The company's thesis, in CEO and co-founder Danny Jenkins's words: "Most cybersecurity tools are still built around identifying malicious activity after it has already entered an environment, when the damage may already be done. We believe the better model is to define what is allowed and deny everything else by default" ([SecurityWeek](https://www.securityweek.com/threatlocker-raises-190-million-in-series-f-funding/)). In practice the platform combines application allowlisting — permit-or-deny control over which software may run — with Ringfencing, which restricts what approved applications are allowed to do: which files, storage, network resources and system actions they can touch ([Orlando Economic Partnership](https://news.orlando.org/blog/threatlocker-a-pioneer-in-endpoint-security-expands-into-new-maitland-headquarters/), [MSSP Alert](https://www.msspalert.com/brief/threatlocker-raises-190-million-to-expand-zero-trust-platform-and-global-operations)). To guard against fileless attacks and exploits, it limits the actions of approved applications, manages user privileges, and regulates network traffic based on application identity; policy-based endpoint detection and response monitors indicators of compromise and can respond to anomalies in real time ([SecurityWeek](https://www.securityweek.com/threatlocker-raises-190-million-in-series-f-funding/)).

ThreatLocker has extended the model beyond endpoints. In 2026 it added zero-trust network access and zero-trust cloud access products, and it has been building controls aimed at AI-era risks: AI agents, AI-generated code, unauthorized AI tools, and policies governing AI websites and the movement of sensitive data ([MSSP Alert](https://www.msspalert.com/brief/threatlocker-raises-190-million-to-expand-zero-trust-platform-and-global-operations)). The broader platform is packaged for managed service providers, letting MSPs administer application control, network access and cloud policies through one stack — a deliberate channel strategy rather than direct-enterprise sales alone ([MSSP Alert](https://www.msspalert.com/brief/threatlocker-raises-190-million-to-expand-zero-trust-platform-and-global-operations)).

## The funding arc and the Orlando bet

ThreatLocker's capital history tracks its geographic expansion. After a $100 million Series C in April 2022, the company moved its headquarters to 1950 Summit Park Drive in Maitland — the former home of Electronic Arts Orlando — taking 42,000 square feet and growing local headcount from 100 to 215 within months ([Orlando Economic Partnership](https://news.orlando.org/blog/threatlocker-a-pioneer-in-endpoint-security-expands-into-new-maitland-headquarters/)). A $115 million Series D followed in 2024 and a $60 million Series E in 2025 ([SecurityWeek](https://www.securityweek.com/threatlocker-raises-190-million-in-series-f-funding/)). The July 2026 Series F — $190 million led by Elephant with D. E. Shaw Ventures, Arthur Ventures and new investor Koch Disruptive Technologies — was earmarked for AI-security development and international expansion starting with a Reading, U.K. office, adding to locations in Orlando, Dublin, Dubai and Brisbane ([MSSP Alert](https://www.msspalert.com/brief/threatlocker-raises-190-million-to-expand-zero-trust-platform-and-global-operations)). A source familiar with the matter put the prior round's valuation at $1.6 billion, with the Series F lifting it significantly ([SecurityWeek](https://www.securityweek.com/threatlocker-raises-190-million-in-series-f-funding/)). The company also runs Zero Trust World, its flagship conference in Orlando, as part of a 300-plus-events-a-year presence ([Orlando Economic Partnership](https://news.orlando.org/blog/threatlocker-a-pioneer-in-endpoint-security-expands-into-new-maitland-headquarters/)).

## What this profile does not claim

This profile does not state a Series F valuation — none was disclosed; the $1.6 billion figure describes the previous round. The 70,000-plus customer count is company-reported and was not independently audited. The founding story (threats at the founders' children's school) is stated as reported by the Orlando Economic Partnership; finer details of that incident were not verified. Product-capability descriptions reflect how the cited trade press describes the platform, not independent testing. No first-party ThreatLocker material was used in this profile.
