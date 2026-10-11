---
title: CrowdStrike Holdings, Inc.
summary: >-
  The cybersecurity company whose Falcon sensor — software meant to protect
  Windows machines — crashed about 8.5 million of them on 19 July 2024 in a worldwide outage,
  drawing congressional scrutiny, a Delta lawsuit, and a shareholder class action.
entityType: Organization
country: United States
location: Austin, Texas
facts:
  - label: Founded
    value: September 2011
  - label: Co-founders
    value: George Kurtz (CEO) and Dmitri Alperovitch (former CTO)
  - label: Listed
    value: "Nasdaq: CRWD (since June 2019)"
  - label: Flagship product
    value: Falcon platform (endpoint detection and response)
  - label: 19 July 2024 outage
    value: Faulty Channel File 291 update; ~8.5M Windows devices crashed
  - label: Shareholder suit
    value: "Class action filed 30 July 2024 (W.D. Texas No. 24-00857)"
  - label: Delta suit
    value: Filed 25 October 2024, Fulton County Superior Court, Georgia
timeline:
  - year: "2011"
    event: >-
      CrowdStrike begins in September 2011, co-founded by George Kurtz and
      Dmitri Alperovitch, who designs the Falcon platform architecture and its
      endpoint detection and response offering.
    sourceType: Technology channel press (tier2)
  - year: "2019"
    event: >-
      CrowdStrike begins public trading on the Nasdaq in June 2019.
    sourceType: Technology channel press (tier2)
  - year: "2020"
    event: >-
      Co-founder and CTO Dmitri Alperovitch leaves to launch a nonprofit focused
      on cybersecurity policy.
    sourceType: Technology channel press (tier2)
  - year: "2024"
    event: >-
      On 19 July a faulty Falcon sensor content update (Channel File 291)
      crashes about 8.5 million Windows devices worldwide. A shareholder class
      action follows on 30 July; CrowdStrike's Adam Meyers testifies before a
      U.S. House subcommittee on 24 September; Delta sues on 25 October.
    sourceType: Technology press (tier2); Reuters/AP (tier1); House record (tier1)
openItems:
  - The outcomes of the Delta lawsuit and the shareholder class action were not verified from fully-read sources as of the research date.
  - Whether CrowdStrike fully implemented the staggered/canary deployment model it promised after the outage was not verified.
  - "The precise final count of affected devices — Microsoft estimated about 8.5 million; other reports said 'more than 8 million.'"
sources:
  - title: "ICYMI: Committee Examines CrowdStrike Processes in First Congressional Hearing on the Disastrous July Global IT Outage"
    url: https://homeland.house.gov/2024/09/26/icymi-committee-examines-crowdstrike-processes-in-first-congressional-hearing-on-the-disastrous-july-global-it-outage/
    publisher: U.S. House Committee on Homeland Security
    tier: tier1
    date: "2024-09-26"
    usedFor: 24 Sept 2024 subcommittee hearing; witness Adam Meyers (SVP) testified instead of CEO George Kurtz, who was initially requested 22 July; updates pushed "to all customers in one session"; 10–12 content updates/day; federal agencies (FCC, Social Security, CBP, CISA) affected; kernel-access defense as industry standard; CISA Director Easterly "dress rehearsal" remark
    sourceNote: Official House committee record; primary source for the congressional dimension.
  - title: "CrowdStrike is sued by shareholders over huge software outage"
    url: https://www.reuters.com/legal/crowdstrike-is-sued-by-shareholders-over-huge-software-outage-2024-07-31/?utm_source=Sailthru&utm_medium=Newsletter&utm_campaign=Daily-Docket&utm_term=080124&user_email=555980d7d799790815c3d01fdaafc9aaf6fcc0f5a003324d15b1494a2
    publisher: Reuters
    tier: tier1
    date: "2024-07-31"
    usedFor: Shareholder class action filed 30 July 2024 in Austin federal court; lead plaintiff Plymouth County Retirement Association; case name and number (W.D. Texas No. 24-00857); inadequate-testing allegation; shares fell 32% over 12 days wiping out $25B market value ($343.05 to $231.96); Kurtz and CFO Burt Podbere named defendants; Delta hired David Boies; Bastian's $500M CNBC quote
    sourceNote: Independent wire reporting; used for the litigation facts and market-impact figures.
  - title: "Delta sues cybersecurity firm CrowdStrike over tech outage that canceled flights"
    url: https://990theanswer.com/national/delta-sues-cybersecurity-firm-crowdstrike-over-tech-outage-that-canceled-flights/43bb230d2edf235bb9f7928c4279fec2
    publisher: Associated Press
    tier: tier1
    date: "2024-10-25"
    usedFor: Delta suit filed 25 Oct 2024 in Fulton County Superior Court, Georgia; "cut corners" allegation and failure-to-test claim; >$500M losses; ~7,000 flights cancelled over five days; CrowdStrike's "misinformation"/under-$10M-liability/antiquated-IT response; DOT investigation of Delta's slower recovery
    sourceNote: AP wire; both sides' claims reported with attribution.
  - title: "CrowdStrike: Content validation bug led to global outage"
    url: https://www.techtarget.com/cybersecurity/news/366596579/CrowdStrike-Content-validation-bug-led-to-global-outage
    publisher: TechTarget
    tier: tier2
    date: "2024-07-24"
    usedFor: Preliminary Post Incident Review (24 July) and Root Cause Analysis (6 Aug 2024) per CrowdStrike's own account; Channel File 291; 21-vs-20 input mismatch between Content Validator and Content Interpreter; out-of-bounds memory read; published 04:09 UTC / reverted 05:27 UTC 19 July; ~8.5M Windows devices per Microsoft (<1% of total); Rapid Response vs Sensor Content testing gap; promised canary/staggered deployment; manual remediation required
    sourceNote: Independent specialist press reporting CrowdStrike's own PIR/RCA; technical cause attributed to the company's account.
  - title: "Microsoft outage: Not the first time CrowdStrike CEO George Kurtz is facing a global disruption"
    url: https://www.businesstoday.in/technology/news/story/microsoft-outage-not-the-first-time-crowdstrike-ceo-george-kurtz-is-facing-a-global-disruption-438035-2024-07-22
    publisher: BusinessToday (India)
    tier: tier2
    date: "2024-07-22"
    usedFor: Kurtz was McAfee's CTO during its 2010 faulty antivirus-definition update that crashed Windows XP machines (via analyst Anshel Sag's viral post); Kurtz apology quote; Forbes net-worth fall $3.2B to $2.9B with stock down 11%; 8.5M affected devices
    sourceNote: Independent business press; the McAfee parallel is presented as a reported observation, not an established causal pattern.
  - title: "CrowdStrike Co-Founder Dmitri Alperovitch Leaves To Launch Nonprofit"
    url: https://www.crn.com/news/security/crowdstrike-co-founder-dmitri-alperovitch-leaves-to-launch-nonprofit
    publisher: CRN
    tier: tier2
    date: "2020-02-20"
    usedFor: Founded September 2011; co-founders George Kurtz (CEO) and Dmitri Alperovitch (CTO); Alperovitch designed the Falcon architecture and the endpoint detection and response offering; Alperovitch's 2020 departure; Nasdaq listing June 2019; California base
    sourceNote: Independent channel press; used for founding and platform facts.
published: "2026-10-03"
lastUpdated: "2026-10-03"
draft: false
---

## Overview

CrowdStrike is an American cybersecurity company whose Falcon platform — endpoint detection and response software installed on millions of corporate computers — became the instrument of a global outage that crashed about 8.5 million Windows devices worldwide. grounding flights, freezing hospitals and banks, and forcing manual, machine-by-machine recovery ([TechTarget](https://www.techtarget.com/cybersecurity/news/366596579/CrowdStrike-Content-validation-bug-led-to-global-outage)). The aftermath brought a shareholder class action, a $500-million-claim lawsuit from Delta Air Lines, and a congressional hearing that put the industry's kernel-level security architecture itself on trial ([Reuters](https://www.reuters.com/legal/crowdstrike-is-sued-by-shareholders-over-huge-software-outage-2024-07-31/); [Associated Press](https://990theanswer.com/national/delta-sues-cybersecurity-firm-crowdstrike-over-tech-outage-that-canceled-flights/43bb230d2edf235bb9f7928c4279fec2); [U.S. House Committee on Homeland Security](https://homeland.house.gov/2024/09/26/icymi-committee-examines-crowdstrike-processes-in-first-congressional-hearing-on-the-disastrous-july-global-it-outage/)).

## The company before the crash

CrowdStrike began in September 2011, co-founded by George Kurtz as CEO and Dmitri Alperovitch as CTO; Alperovitch designed the architecture of the Falcon platform along with its AI-based malware engine and endpoint detection and response (EDR) offering ([CRN](https://www.crn.com/news/security/crowdstrike-co-founder-dmitri-alperovitch-leaves-to-launch-nonprofit)). Alperovitch left in 2020 to launch a cybersecurity-policy nonprofit ([CRN](https://www.crn.com/news/security/crowdstrike-co-founder-dmitri-alperovitch-leaves-to-launch-nonprofit)). The company began public trading on the Nasdaq in June 2019 ([CRN](https://www.crn.com/news/security/crowdstrike-co-founder-dmitri-alperovitch-leaves-to-launch-nonprofit)), and is based in Austin, Texas ([Reuters](https://www.reuters.com/legal/crowdstrike-is-sued-by-shareholders-over-huge-software-outage-2024-07-31/)).

## 19 July 2024: a 78-minute window

At 04:09 UTC on 19 July 2024, CrowdStrike published a faulty channel-file update — Channel File 291 — for its Falcon Windows sensor; the defect was reverted at 05:27 UTC, a 78-minute window ([TechTarget](https://www.techtarget.com/cybersecurity/news/366596579/CrowdStrike-Content-validation-bug-led-to-global-outage)). Machines that had already loaded the file entered crash-and-reboot loops with the blue screen of death, and because the file reloaded on every boot, each affected device required manual remediation — Safe Mode, file deletion, reboot ([TechTarget](https://www.techtarget.com/cybersecurity/news/366596579/CrowdStrike-Content-validation-bug-led-to-global-outage)). [Microsoft](/organizations/microsoft/) estimated about 8.5 million Windows devices were affected — under 1% of all Windows devices, but concentrated in airlines, hospitals, banks, and emergency services ([TechTarget](https://www.techtarget.com/cybersecurity/news/366596579/CrowdStrike-Content-validation-bug-led-to-global-outage)).

CrowdStrike's own root cause analysis, published 6 August 2024, traced the crash to a confluence of three issues: a mismatch between the 21 inputs validated by its Content Validator and the 20 inputs provided to the Content Interpreter, a latent out-of-bounds memory-read issue in the interpreter, and the absence of a specific test for non-wildcard matching in the 21st field ([TechTarget](https://www.techtarget.com/cybersecurity/news/366596579/CrowdStrike-Content-validation-bug-led-to-global-outage)). The deeper process failure: the bad file was "Rapid Response Content" — template instances for behavioral pattern-matching — which did not undergo the staged, dogfooded rollout reserved for "Sensor Content." The company promised staggered deployment starting with canary releases, more validation checks, and greater customer control over updates ([TechTarget](https://www.techtarget.com/cybersecurity/news/366596579/CrowdStrike-Content-validation-bug-led-to-global-outage)).

## The fallout: courts, Congress, and the kernel question

Shareholders sued first. On 30 July 2024 a proposed class action was filed in federal court in Austin, Texas — Plymouth County Retirement Association v. CrowdStrike Inc et al (W.D. Texas No. 24-00857) — alleging the company concealed how inadequate software testing could cause the outage; Reuters reported the shares fell 32% over the next 12 days, wiping out $25 billion of market value, from $343.05 the day before the outage to $231.96 ([Reuters](https://www.reuters.com/legal/crowdstrike-is-sued-by-shareholders-over-huge-software-outage-2024-07-31/)). Kurtz and CFO Burt Podbere were named as defendants; the company said the case lacked merit ([Reuters](https://www.reuters.com/legal/crowdstrike-is-sued-by-shareholders-over-huge-software-outage-2024-07-31/)).

Delta Air Lines sued on 25 October 2024 in Fulton County Superior Court, Georgia, alleging CrowdStrike "cut corners, took shortcuts, and circumvented the very testing and certification processes it advertised," seeking compensation and punitive damages for more than $500 million in losses after cancelling about 7,000 flights over five days ([Associated Press](https://990theanswer.com/national/delta-sues-cybersecurity-firm-crowdstrike-over-tech-outage-that-canceled-flights/43bb230d2edf235bb9f7928c4279fec2)). CrowdStrike called Delta's claims "misinformation," said its liability was under $10 million, and blamed the airline's "antiquated IT infrastructure" — while the U.S. Department of Transportation separately investigated why Delta recovered more slowly than other carriers ([Associated Press](https://990theanswer.com/national/delta-sues-cybersecurity-firm-crowdstrike-over-tech-outage-that-canceled-flights/43bb230d2edf235bb9f7928c4279fec2)).

Congress came calling too. The [U.S. House of Representatives](/organizations/us-house-of-representatives/) Homeland Security Committee had initially asked CEO George Kurtz to testify on 22 July; the company sent Senior Vice President Adam Meyers instead, and he appeared before the cybersecurity subcommittee on 24 September ([U.S. House Committee on Homeland Security](https://homeland.house.gov/2024/09/26/icymi-committee-examines-crowdstrike-processes-in-first-congressional-hearing-on-the-disastrous-july-global-it-outage/)). Meyers testified that the company ships 10 to 12 content updates daily and that the faulty file had gone "to all customers in one session" — a model since revised — and confirmed federal agencies including the FCC, Social Security, Customs and Border Protection, and even CISA were affected ([U.S. House Committee on Homeland Security](https://homeland.house.gov/2024/09/26/icymi-committee-examines-crowdstrike-processes-in-first-congressional-hearing-on-the-disastrous-july-global-it-outage/)). Pressed on whether Falcon must run inside the operating-system kernel rather than user space, Meyers defended kernel access as "the industry standard" for visibility, enforcement, and anti-tamper ([U.S. House Committee on Homeland Security](https://homeland.house.gov/2024/09/26/icymi-committee-examines-crowdstrike-processes-in-first-congressional-hearing-on-the-disastrous-july-global-it-outage/)). CISA Director Jen Easterly had earlier called the incident a "dress rehearsal for what China may want to do" ([U.S. House Committee on Homeland Security](https://homeland.house.gov/2024/09/26/icymi-committee-examines-crowdstrike-processes-in-first-congressional-hearing-on-the-disastrous-july-global-it-outage/)).

## The Kurtz–[McAfee](/organizations/mcafee/) parallel

Within hours of the outage, industry analyst Anshel Sag's viral post noted an uncomfortable résumé line: Kurtz had been McAfee's chief technology officer in 2010, when a faulty McAfee antivirus-definition update crashed Windows XP machines around the world ([BusinessToday](https://www.businesstoday.in/technology/news/story/microsoft-outage-not-the-first-time-crowdstrike-ceo-george-kurtz-is-facing-a-global-disruption-438035-2024-07-22)). Kurtz apologised publicly for the CrowdStrike outage, and Forbes tracked his net worth falling from $3.2 billion to $2.9 billion as the stock dropped 11% ([BusinessToday](https://www.businesstoday.in/technology/news/story/microsoft-outage-not-the-first-time-crowdstrike-ceo-george-kurtz-is-facing-a-global-disruption-438035-2024-07-22)). The parallel is a reported observation about two update pipelines failing the same way fourteen years apart — not evidence of a single cause.

## What this profile does not claim

- It does not report outcomes for the Delta lawsuit or the shareholder class action; no resolutions were verified from fully-read sources.
- It does not verify whether CrowdStrike fully implemented its promised canary/staggered deployment model.
- The technical root cause is CrowdStrike's own account as reported by specialist press; independent reproduction of the 21-vs-20 mismatch was not examined.
- The 8.5-million-device figure is Microsoft's estimate; it measures devices, not organisations or people affected.
- The McAfee 2010 parallel is included as a reported observation with attribution, not as proof of a pattern.
