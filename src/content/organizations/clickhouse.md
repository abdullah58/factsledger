---
title: ClickHouse
summary: >-
  Open-source columnar database company spun out of Yandex in 2021, now valued
  at $15 billion — and the database at the centre of Cloudflare's November 2025
  global outage, through a permissions change, not a software defect.
entityType: Organization
country: United States
location: San Francisco Bay Area, California
established: "2021"
facts:
  - label: Company
    value: ClickHouse, Inc. (Delaware incorporation, September 2021)
  - label: Headquarters
    value: San Francisco Bay Area, California
  - label: Founders
    value: Aaron Katz (CEO), Alexey Milovidov (CTO), Yury Izrailevsky (President)
  - label: Technology origins
    value: Begun 2009 at Yandex; production 2012; open-sourced June 2016 (Apache 2.0)
  - label: Product
    value: Open-source column-oriented OLAP database for real-time SQL analytics; monetised via ClickHouse Cloud
  - label: Series D
    value: $400 million at a $15 billion valuation, January 2026 (Dragoneer lead)
  - label: Total funding
    value: Over $1.05 billion in disclosed equity across six rounds (2021–2026)
  - label: Customers (2025–2026)
    value: 2,000+ at Series C, including Sony and Anthropic; later Meta, Tesla, Capital One
timeline:
  - year: "2009"
    event: >-
      Alexey Milovidov and team at Yandex start an experimental project to test
      whether analytical reports can be generated in real time from
      non-aggregated, constantly growing data.
    sourceType: Company history (first-party)
  - year: "2012"
    event: >-
      After three years of development, ClickHouse launches in production to
      power Yandex.Metrica, then the second-largest web analytics platform in
      the world.
    sourceType: Company history (first-party)
  - year: "2016"
    event: >-
      ClickHouse is released as open source under the Apache 2.0 licence;
      adoption follows from Uber, Comcast, eBay and Cisco.
    sourceType: BusinessWire (tier2)
  - year: "2021"
    event: >-
      ClickHouse, Inc. incorporates in Delaware; Series A of about $50M led by
      Index Ventures and Benchmark in September; Series B of $250M at a $2B
      valuation led by Coatue and Altimeter in October.
    sourceType: BusinessWire (tier2)
  - year: "2022"
    event: >-
      European offices open in Amsterdam; early-access programme launches for
      the cloud service.
    sourceType: Company history (first-party)
  - year: "2025"
    event: >-
      Series C of $350M led by Khosla Ventures announced 29 May; total funding
      passes $650M; 2,000+ customers. In November, a permissions change on a
      ClickHouse cluster at Cloudflare triggers Cloudflare's worst outage since
      2019.
    sourceType: SiliconANGLE (tier2) and Cloudflare postmortem
  - year: "2026"
    event: >-
      Series D of $400M at a $15B valuation led by Dragoneer, announced 16
      January, alongside the acquisition of Langfuse for LLM observability.
    sourceType: TechCrunch (tier2)
sources:
  - title: Cloudflare outage on November 18, 2025
    url: https://blog.cloudflare.com/18-november-2025-outage
    publisher: Cloudflare Blog
    tier: first-party
    usedFor: >-
      The November 2025 outage mechanics in full: 11:05 UTC permissions
      change on a ClickHouse cluster; the unfiltered system.columns query
      returning duplicate rows; the feature file doubling past the 200-feature
      limit; the FL2 proxy panic; timeline 11:20–17:06 UTC; worst outage since
      2019; remediation steps. First-party to Cloudflare, corroborated by
      Network World.
  - title: How a bot management file push crippled Cloudflare's global network
    url: https://www.networkworld.com/article/4092917/how-a-bot-management-file-push-crippled-cloudflares-global-network.html
    publisher: Network World
    tier: tier2
    date: "2025-11-19"
    usedFor: >-
      Independent confirmation of the ClickHouse link in the November 2025
      outage: a query running on a ClickHouse cluster generated the doubled
      feature file; six-hour outage; analyst reaction on configuration-driven
      outages
  - title: ClickHouse Raises $250M Series B To Scale Groundbreaking OLAP Database Management System Globally
    url: https://www.businesswire.com/news/home/20211028005287/en
    publisher: BusinessWire
    tier: tier2
    date: "2021-10-28"
    usedFor: >-
      Series B $250M at $2B valuation (Coatue and Altimeter leads); Series A
      ~$50M (Index and Benchmark); Yandex origins; 2016 open source and
      adoption by Uber, Comcast, eBay, Cisco; 20,000+ GitHub stars; Cloudflare
      engineering chief's 2021 endorsement of ClickHouse for log analytics
  - title: ClickHouse reels in $350M for its high-speed columnar database
    url: https://siliconangle.com/2025/05/29/clickhouse-reels-350m-high-speed-columnar-database/
    publisher: SiliconANGLE
    tier: tier2
    date: "2025-05-29"
    usedFor: >-
      Series C $350M led by Khosla Ventures; total funding over $650M; columnar
      architecture and vectorized execution explained; ClickHouse Cloud,
      Keeper and ClickPipes; 2,000+ customers including Sony and Anthropic
  - title: Snowflake, Databricks challenger ClickHouse hits $15B valuation
    url: https://techcrunch.com/2026/01/16/snowflake-databricks-challenger-clickhouse-hits-15b-valuation/
    publisher: TechCrunch
    tier: tier2
    date: "2026-01-16"
    usedFor: >-
      Series D $400M at $15B valuation led by Dragoneer; ~2.5x the May 2025
      valuation; Langfuse acquisition; ARR growth over 250% year over year;
      customers Meta, Tesla, Capital One; competition with Snowflake and
      Databricks; 2021 spin-out from Yandex
  - title: Our Story
    url: https://clickhouse.com:2087/company/our-story
    publisher: ClickHouse
    tier: first-party
    usedFor: >-
      Company timeline 2009–2026 (experimental project, 2012 production
      launch, 2016 open source, 2021 incorporation and funding, 2022 Amsterdam
      offices, 2025 Series C, 2026 Series D and Langfuse); founding team;
      employees in over 10 countries
sourceNote: >-
  The outage account rests on Cloudflare's own postmortem, read in full and
  independently confirmed by Network World; the funding ladder is documented
  round by round from BusinessWire, SiliconANGLE and TechCrunch. The
  company's own history page is used only for uncontested timeline facts.
openItems:
  - "The November 2025 outage link is confirmed, but the framing matters: the fault was Cloudflare's permissions change and unfiltered query, not a ClickHouse defect. The profile states this explicitly."
  - The expansion of the name ClickHouse into "Clickstream Data Warehouse" was not verified from a fully-read source and is not asserted.
  - The Amsterdam subsidiary (ClickHouse B.V.) rests on Wikipedia as a lead index and is not asserted.
  - A second, shorter Cloudflare outage on 5 December 2025 was not verified from a fully-read source this pass and is not covered.
  - The Series C valuation ($6.35 billion) is a Bloomberg figure as reported by TechCrunch, not a company disclosure.
  - Employee count and revenue beyond ARR growth were not verified from a fully-read source and are not stated.
author: Muhammad Abdullah Al Yasin
published: "2026-11-25"
lastUpdated: "2026-11-25"
draft: false
---

## Overview

ClickHouse is an open-source columnar database company — ClickHouse, Inc., incorporated in Delaware in September 2021 and headquartered in the [San Francisco](/places/san-francisco/) Bay Area — whose database began life in 2009 as an experiment inside Yandex, was open-sourced in 2016, and is now valued at $15 billion after a $400 million Series D in January 2026 ([BusinessWire](https://www.businesswire.com/news/home/20211028005287/en); [TechCrunch](https://techcrunch.com/2026/01/16/snowflake-databricks-challenger-clickhouse-hits-15b-valuation/)). It sells real-time analytics: a column-oriented database that answers SQL queries over billions of rows in seconds, monetised through the managed ClickHouse Cloud service. And it holds an unusual place in internet history: on 18 November 2025, a permissions change on a ClickHouse cluster inside [Cloudflare](/organizations/cloudflare/) triggered Cloudflare's worst outage since 2019 — not because ClickHouse's software failed, but because a Cloudflare query, suddenly able to see more metadata than before, returned every database column twice ([Cloudflare Blog](https://blog.cloudflare.com/18-november-2025-outage)).

## From Yandex experiment to open-source standard

Work on ClickHouse began in 2009, when Alexey Milovidov and his team at Yandex started an experimental project to test whether analytical reports could be generated in real time from non-aggregated data that was also constantly being added in real time ([ClickHouse](https://clickhouse.com:2087/company/our-story)). It took three years to prove the hypothesis; in 2012 ClickHouse launched in production for the first time, powering Yandex.Metrica, then the second-largest web analytics platform in the world ([ClickHouse](https://clickhouse.com:2087/company/our-story)). The technology was "first developed a decade ago at Yandex, Europe's leading internet service corporation, to power its large web analytics platform" ([BusinessWire](https://www.businesswire.com/news/home/20211028005287/en)).

In June 2016 Yandex released ClickHouse as open source under the Apache 2.0 licence, and adoption followed from household names including Uber, Comcast, eBay and Cisco; by October 2021 there had been about 20,000 pull requests from more than 800 contributors, and the project had passed 20,000 GitHub stars ([BusinessWire](https://www.businesswire.com/news/home/20211028005287/en)). What sets the database apart is its columnar architecture: instead of storing data row by row, it stores each column's data together, so aggregation queries read only the columns they need — and vectorized query execution runs queries in bulk rather than one after another ([SiliconANGLE](https://siliconangle.com/2025/05/29/clickhouse-reels-350m-high-speed-columnar-database/)). The result processes "hundreds of millions to over a billion rows and tens of gigabytes of data per server per second" ([BusinessWire](https://www.businesswire.com/news/home/20211028005287/en)).

## The funding ladder

In September 2021 the core team left Yandex and incorporated ClickHouse, Inc., with Aaron Katz as CEO, Alexey Milovidov as CTO and Yury Izrailevsky as President ([ClickHouse](https://clickhouse.com:2087/company/our-story)). The money followed fast: an initial $50 million Series A led by Index Ventures and Benchmark in September 2021, then a $250 million Series B at a $2 billion valuation in October 2021, led by Coatue and Altimeter ([BusinessWire](https://www.businesswire.com/news/home/20211028005287/en)). European offices opened in Amsterdam in 2022, and the company launched its cloud service ([ClickHouse](https://clickhouse.com:2087/company/our-story)).

| Round | Date | Amount | Valuation | Lead |
| --- | --- | --- | --- | --- |
| Series A | Sep 2021 | ~$50M | — | Index Ventures, Benchmark |
| Series B | Oct 2021 | $250M | $2B | Coatue, Altimeter |
| Series C | May 2025 | $350M | ~$6.35B (reported) | Khosla Ventures |
| Series D | Jan 2026 | $400M | $15B | Dragoneer |

The Series C, announced on 29 May 2025 and led by Khosla Ventures, brought total outside funding past $650 million; the company disclosed more than 2,000 customers, including Sony and Anthropic ([SiliconANGLE](https://siliconangle.com/2025/05/29/clickhouse-reels-350m-high-speed-columnar-database/)). Eight months later, on 16 January 2026, ClickHouse announced a $400 million Series D at a $15 billion valuation — about 2.5 times the May 2025 valuation — led by Dragoneer Investment Group, and the acquisition of Langfuse, a startup that helps developers track AI agents ([TechCrunch](https://techcrunch.com/2026/01/16/snowflake-databricks-challenger-clickhouse-hits-15b-valuation/)). Annual recurring revenue had grown more than 250% year over year, and the customer list now included Meta, Tesla and Capital One ([TechCrunch](https://techcrunch.com/2026/01/16/snowflake-databricks-challenger-clickhouse-hits-15b-valuation/)). The company competes with Snowflake and Databricks ([TechCrunch](https://techcrunch.com/2026/01/16/snowflake-databricks-challenger-clickhouse-hits-15b-valuation/)).

## The Cloudflare outage: what actually happened

ClickHouse's most famous hour was one it did not cause. Cloudflare had been a longtime ClickHouse user: in October 2021 its Head of Engineering, Usman Muzaffar, said "ClickHouse helps us efficiently and reliably analyze logs across trillions of Internet requests to identify malicious traffic" and called Cloudflare a "longtime supporter" of the project ([BusinessWire](https://www.businesswire.com/news/home/20211028005287/en)). Four years later that deployment took down a fifth of the web — through no defect in ClickHouse itself.

On 18 November 2025 at 11:20 UTC, Cloudflare's network began failing to deliver core network traffic, knocking out services including ChatGPT, Canva and X; it was not a cyberattack, and Cloudflare called it its worst outage since 2019 ([Cloudflare Blog](https://blog.cloudflare.com/18-november-2025-outage); [Network World](https://www.networkworld.com/article/4092917/how-a-bot-management-file-push-crippled-cloudflares-global-network.html)). The trigger, in Cloudflare's own postmortem, was "a change to one of our database systems' permissions which caused the database to output multiple entries into a 'feature file' used by our Bot Management system" — and "[t]he database system in question uses ClickHouse's software" ([Cloudflare Blog](https://blog.cloudflare.com/18-november-2025-outage)).

The mechanism was precise and is worth stating exactly, because the shorthand version misleads. At 11:05 UTC Cloudflare made access to the underlying `r0` database explicit, so distributed subqueries could run as the initial user. A Bot Management feature-file job built its list of features from a metadata query — `SELECT name, type FROM system.columns WHERE table = 'http_requests_features' ORDER BY name` — which did not filter by database name. Before the change, the querying user could only see the table in the `default` database; after it, the same query also returned the identical columns from `r0`, so every feature came back twice and the file more than doubled in size ([Cloudflare Blog](https://blog.cloudflare.com/18-november-2025-outage)). Bot Management normally uses about 60 features against a hard limit of 200; the bad file exceeded 200, and the FL2 Rust proxy code panicked on the oversized file, returning HTTP 5xx errors ([Cloudflare Blog](https://blog.cloudflare.com/18-november-2025-outage)). Because the file regenerated every five minutes from a ClickHouse cluster being gradually updated, the network oscillated between good and bad files — which initially looked like a hyper-scale DDoS attack ([Cloudflare Blog](https://blog.cloudflare.com/18-november-2025-outage); [Network World](https://www.networkworld.com/article/4092917/how-a-bot-management-file-push-crippled-cloudflares-global-network.html)). Core traffic was largely flowing again by 14:30 UTC and all systems were normal by 17:06 ([Cloudflare Blog](https://blog.cloudflare.com/18-november-2025-outage)).

The correction matters: ClickHouse returned exactly the metadata the new permissions made visible. The failure required three Cloudflare-side ingredients — the permissions change, an unfiltered metadata query, and a proxy with no size check and an unhandled error on oversized input. Cloudflare's own remediation list starts with hardening the ingestion of its generated configuration files "in the same way we would for user-generated input" ([Cloudflare Blog](https://blog.cloudflare.com/18-november-2025-outage)). The outage is a story about how a customer deploys ClickHouse, not about a defect in ClickHouse — and it is also, incidentally, a measure of how deeply the database is embedded in internet infrastructure: a metadata query against it could take down a fifth of the web.

## FAQ

**What is ClickHouse?** An open-source, column-oriented database for real-time analytical processing (OLAP), queried with SQL. It stores data by column rather than by row, so aggregation queries over billions of rows run in seconds. The commercial company behind it is ClickHouse, Inc.

**Who founded ClickHouse?** The technology was created at Yandex by Alexey Milovidov and his team from 2009. The company was founded in 2021 by Milovidov (CTO), Aaron Katz (CEO) and Yury Izrailevsky (President) when the team spun out of Yandex.

**Did ClickHouse cause Cloudflare's November 2025 outage?** No — not as a software defect. A Cloudflare permissions change on its ClickHouse cluster made a metadata query return every column twice, doubling a Bot Management file past a 200-feature limit in Cloudflare's own proxy, which then panicked. ClickHouse behaved as designed.

**How much has ClickHouse raised?** About $1.05 billion in disclosed equity: ~$50M Series A (2021), $250M Series B at $2B (2021), $350M Series C at ~$6.35B (2025), and $400M Series D at $15B (January 2026), plus a $100M credit facility.

**How does ClickHouse make money if the database is open source?** Through ClickHouse Cloud, a paid managed service, plus related tooling (ClickHouse Keeper for coordination, ClickPipes for ingestion). The core database remains open source under the Apache 2.0 licence.

## What this profile does not claim

- It does not blame ClickHouse's software for the November 2025 Cloudflare outage — the postmortem attributes the failure to Cloudflare's permissions change, its unfiltered query, and its proxy's missing size check.
- It does not assert a headcount or a current revenue figure beyond the reported ARR growth of more than 250% year over year at the Series D.
- It does not expand "ClickHouse" into "Clickstream Data Warehouse"; that expansion was not verified from a fully-read source.
- It does not cover the reported second Cloudflare outage of 5 December 2025, which was not verified from a fully-read source this pass.
- "ClickHouse" here means ClickHouse, Inc. and its open-source database — not unrelated products sharing the name.
