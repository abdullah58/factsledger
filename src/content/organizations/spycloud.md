---
title: SpyCloud, Inc.
summary: >-
  The Austin cybersecurity firm founded in 2016 that fights credential theft by
  recapturing criminals' own stolen data — including by social-engineering
  threat actors — to warn companies before their logins are weaponized.
entityType: Organization
country: United States
location: Austin, Texas
facts:
  - label: Founded
    value: "2016"
  - label: Founder
    value: "Ted Ross (co-founder and CEO)"
  - label: What it does
    value: "Identity threat protection — recapturing stolen credentials, session cookies, and PII from criminal sources to prevent account takeover, ransomware, and fraud"
  - label: 2023 funding
    value: "$110 million growth round led by Riverwood Capital"
timeline:
  - year: "2016"
    event: >-
      SpyCloud is founded in Austin, Texas, by CEO Ted Ross with a founding
      team organized around a single idea: that criminals' own stolen data
      could be turned against them. The company focuses on preventing account
      takeover (ATO) fraud by finding exposed employee and customer accounts
      early.
    sourceType: Specialist technology press (tier2)
  - year: "2017"
    event: >-
      SpyCloud makes its Finovate debut and wins Best of Show for its Exposed
      Credential Monitoring and Alert Service. CEO Ted Ross describes the
      company's "human intelligence tradecraft" — techniques used by its
      research team to social-engineer threat actors and infiltrate covert
      criminal groups, recovering stolen information before it is posted to
      public forums or sold underground. At the time the company ingests about
      40 million new credentials per week.
    sourceType: Finovate (tier2)
  - year: "2020"
    event: >-
      SpyCloud raises $30 million in Series C funding led by Centana Growth
      Partners, with participation from M12 (Microsoft's venture fund), Altos
      Ventures, Silverton Partners, and March Capital Partners. During the
      early pandemic the company's researchers uncover 139,000 new
      virus-themed web domains and track credential-stuffing attacks on food
      delivery apps. Its repository holds over 100 billion assets, including
      more than 21 billion passwords.
    sourceType: Specialist fintech press (tier2)
  - year: "2021"
    event: >-
      SpyCloud launches its Identity Risk Engine, an API that scans billions
      of recaptured data points to score fraud risk at account opening, login,
      and transaction. The company reports more than 145 billion recaptured
      breached assets, 30 billion email addresses, and 25 billion passwords,
      collecting from 50+ breach sources per week, and $58.5 million raised to
      date.
    sourceType: Finovate (tier2)
  - year: "2023"
    event: >-
      SpyCloud closes a $110 million growth round led by Riverwood Capital —
      its largest round, after previously raising more than $58 million across
      four rounds — to fund global expansion and authentication-bypass
      prevention as passkeys and passwordless authentication spread.
    sourceType: SecurityWeek (tier2)
openItems:
  - The "world's largest recaptured data lake" / "one trillion assets" figures appear only in company-issued anniversary materials, which were not consulted; this profile uses only the figures reported by independently read press (100B assets/21B passwords in 2020; 145B assets/30B emails/25B passwords in 2021).
  - Co-founder Alen Puzic is not named in the independently read sources; the profile credits CEO Ted Ross as co-founder per Finovate and does not assert the full founding team.
  - Law-enforcement cooperation claims (FBI, Europol, takedowns) appeared only in company-issued materials and are not repeated here.
  - Customer claims (Fortune 10 penetration, account counts) are company statements relayed in press releases; the profile does not assert them as verified fact.
sources:
  - title: "SpyCloud Spots Stolen Credentials with Deep Dives into the Dark Web"
    url: https://finovate.com/spycloud-spots-stolen-credentials-deep-dives-dark-web/
    publisher: Finovate
    tier: tier2
    date: "2017-10-20"
    usedFor: Austin-based company; FinovateFall 2017 debut and Best of Show; product lineup (Corporate Credential Exposure Notifications, ATO for Employees/Customers); "interacting with the dark web's nefarious characters"; Ross interview — exact-match vs heuristic solutions, HUMINT tradecraft (social-engineering threat actors, infiltrating covert groups, recovering data pre-posting), 40M new credentials/week, Ross's threat-sharing-platform background
    sourceNote: Independent fintech/technology press; includes a direct e-mail interview with CEO Ted Ross.
  - title: SpyCloud Unveils its Identity Risk Engine
    url: https://finovate.com/spycloud-unveils-its-identity-risk-engine/
    publisher: Finovate
    tier: tier2
    date: "2021-12-08"
    usedFor: Identity Risk Engine launch (API risk scoring at account opening/login/transaction); recaptured-data approach (credentials actively traded in the criminal underground, sources unreachable by crawlers, tech + human intelligence); 145B breached assets, 30B emails, 25B passwords, 50+ breach sources/week; founded 2016; $58.5M raised from Centana, M12, March Capital, Silverton; Ted Ross co-founder and CEO
    sourceNote: Independent fintech/technology press.
  - title: SpyCloud raises $30 mn in Series C funding to prevent account takeovers
    url: https://ibsintelligence.com/ibsi-news/spycloud-raises-30-mn-in-series-c-funding-to-prevent-account-takeovers/
    publisher: IBS Intelligence
    tier: tier2
    date: "2020-08-18"
    usedFor: $30M Series C led by Centana Growth Partners; participants M12, Altos Ventures, Silverton Partners, March Capital; Eric Byunn joins board; pandemic-era research (139,000 virus-themed domains, credential stuffing on food delivery apps); founded 2016; 100B+ assets, 21B+ passwords; account-takeover prevention thesis
    sourceNote: Independent fintech press.
  - title: Digital Identity Protection Firm SpyCloud Raises $110 Million
    url: https://www.securityweek.com/digital-identity-protection-firm-spycloud-raises-110-million/?amp
    publisher: SecurityWeek
    tier: tier2
    date: "2023-08-24"
    usedFor: $110M growth round led by Riverwood Capital; previously >$58M in four rounds including the 2020 $30M Series C; founded 2016, Austin; dark-web-data database model; plans for authentication-bypass prevention and passkeys-era defenses; Ross quote
    sourceNote: Independent cybersecurity press.
published: "2026-10-04"
lastUpdated: "2026-10-04"
draft: false
---

## Overview

SpyCloud is an Austin, Texas, cybersecurity company founded in 2016 with an unusual premise: instead of only defending corporate perimeters, it fights cybercrime by recapturing criminals' own stolen data — credentials, session cookies, and personal information traded in the criminal underground — and handing it back to the companies whose employees and customers it exposes ([Finovate](https://finovate.com/spycloud-spots-stolen-credentials-deep-dives-dark-web/)). Its platform watches for exposed logins so organizations can reset passwords, revoke sessions, and remediate malware infections before stolen access is weaponized into account takeover, ransomware, or fraud ([IBS Intelligence](https://ibsintelligence.com/ibsi-news/spycloud-raises-30-mn-in-series-c-funding-to-prevent-account-takeovers/); [SecurityWeek](https://www.securityweek.com/digital-identity-protection-firm-spycloud-raises-110-million/?amp)).

## The "exact match" thesis

Co-founder and CEO Ted Ross arrived at the idea after noticing the rising tide of third-party data breaches and concluding that the available defenses were mismatched to the problem. Most solutions were heuristic or behavior-based — "prone to false positives," in his telling — while what was needed was simpler: compare the credentials a company actually uses against the credentials criminals actually hold, an exact match, with "no false positives, no calls to the help desk" ([Finovate](https://finovate.com/spycloud-spots-stolen-credentials-deep-dives-dark-web/)). Ross had previously built a threat-sharing platform, where he saw that most threat feeds revolved around indicators of compromise — artifacts that require a trained security professional to create and use — while companies wanted defenses that were easy to understand, easy to operationalize, and effective ([Finovate](https://finovate.com/spycloud-spots-stolen-credentials-deep-dives-dark-web/)).

The company debuted publicly at FinovateFall 2017, winning Best of Show for its Exposed Credential Monitoring and Alert Service: corporate exposure notifications, an Active Directory monitor that compared newly stolen credentials against active users, and an API that checked customer logins for exposed credentials ([Finovate](https://finovate.com/spycloud-spots-stolen-credentials-deep-dives-dark-web/)).

## HUMINT tradecraft: social-engineering the criminals

SpyCloud's most distinctive claim — and the detail almost no SERP result covers — is methodological. Because many sources of stolen credentials cannot be reached by automated tools or web crawlers, the company says it uses a combination of technical innovation and human intelligence: its research team social-engineers threat actors to infiltrate and maintain connections to covert criminal groups, aiming to recover stolen information before it is posted to a public forum or sold underground ([Finovate](https://finovate.com/spycloud-spots-stolen-credentials-deep-dives-dark-web/); [Finovate](https://finovate.com/spycloud-unveils-its-identity-risk-engine/)). Ross declined to detail the tradecraft for operational-security reasons, but described the goal plainly: "to recover this information before it can be used against our customers" ([Finovate](https://finovate.com/spycloud-spots-stolen-credentials-deep-dives-dark-web/)).

The scale was already striking in 2017: Ross said the company was ingesting about 40 million new credentials every week, after deduplication, and had credentials for "just about every enterprise with a digital presence" — finding 10 new breached databases from private sources every working day ([Finovate](https://finovate.com/spycloud-spots-stolen-credentials-deep-dives-dark-web/)). By 2020 its repository held over 100 billion assets including more than 21 billion passwords ([IBS Intelligence](https://ibsintelligence.com/ibsi-news/spycloud-raises-30-mn-in-series-c-funding-to-prevent-account-takeovers/)); by late 2021, more than 145 billion breached assets, 30 billion email addresses, and 25 billion passwords, drawn from more than 50 new breach sources a week ([Finovate](https://finovate.com/spycloud-unveils-its-identity-risk-engine/)).

## From pandemic fraud to the passwordless era

The company's funding history tracks the attack landscape. In August 2020 it raised a $30 million Series C led by Centana Growth Partners, with M12 (Microsoft's venture fund), Altos Ventures, Silverton Partners, and March Capital participating, to expand product and engineering as pandemic-era fraud surged ([IBS Intelligence](https://ibsintelligence.com/ibsi-news/spycloud-raises-30-mn-in-series-c-funding-to-prevent-account-takeovers/)). Its researchers had uncovered 139,000 new virus-themed web domains in the pandemic's early days and were tracking criminals posing as government agencies and running credential-stuffing attacks against food delivery apps ([IBS Intelligence](https://ibsintelligence.com/ibsi-news/spycloud-raises-30-mn-in-series-c-funding-to-prevent-account-takeovers/)). "Criminals work together to steal information and find creative ways to monetize it," Ross said. "As a result, even the most careful and sophisticated organizations are vulnerable" ([IBS Intelligence](https://ibsintelligence.com/ibsi-news/spycloud-raises-30-mn-in-series-c-funding-to-prevent-account-takeovers/)).

In late 2021 the company launched its Identity Risk Engine: businesses place it at their most critical fraud points — account opening, login, transactions — and a single API query on an email address or phone number returns a risk score built from the recaptured data, aimed at account takeover, identity fraud, new-account fraud, and synthetic identities ([Finovate](https://finovate.com/spycloud-unveils-its-identity-risk-engine/)). Then in August 2023 came the largest round: a $110 million growth round led by Riverwood Capital, after more than $58 million raised across four earlier rounds, earmarked for global expansion and authentication-bypass prevention — defenses designed for the passkeys and passwordless era, where stolen sessions and cookies matter as much as stolen passwords ([SecurityWeek](https://www.securityweek.com/digital-identity-protection-firm-spycloud-raises-110-million/?amp)).

## What this profile does not claim

The company's larger data-volume figures (a "trillion assets," "12 billion new pieces of data per month," "25 billion assets per month") and its law-enforcement cooperation claims (FBI, Europol, named takedowns) appear only in company-issued materials, which were not consulted; this profile uses only figures reported by independently read press. Customer-penetration claims (Fortune 10 counts, protected-account totals) are likewise company statements and are not asserted as verified fact. Co-founder Alen Puzic's name does not appear in the independently read sources, so the profile credits only CEO Ted Ross as co-founder rather than asserting a complete founding team. Post-2023 developments — including the company's 2024–2026 product and funding history — were outside the independently read sources and are deliberately omitted.
