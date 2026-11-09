---
title: AxCore
summary: Axoni's data-synchronization platform, built on distributed-ledger software to keep financial
  institutions' records in sync in real time; renamed HYDRA in September 2024.
entityType: CreativeWork
country: United States
location: New York, New York, United States
facts:
- label: Developer
  value: Axoni (Schvey, Inc., doing business as Axoni)
- label: Type
  value: Data-synchronization / distributed-ledger platform
- label: Current name
  value: HYDRA (renamed September 2024)
- label: Key deployment
  value: DTCC Trade Information Warehouse re-platforming
- label: Powers
  value: Veris equity-swaps network; cleared stock loans at OCC
timeline:
- year: '2016'
  event: 'Axoni''s AxCore underpins two bank pilots: 85 credit-default-swap test cases in April and 133
    equity-swaps test cases in October, both at a 100% success rate.'
  sourceType: WatersTechnology / CoinDesk (tier2)
- year: '2017'
  event: The Depository Trust & Clearing Corporation selects AxCore to re-platform its $11 trillion Trade
    Information Warehouse; IBM is designated to lead the initiative, with R3 advising.
  sourceType: FinTech Collective / Forbes (tier2)
- year: '2020'
  event: Axoni's Veris equity-swaps network launches, built on AxCore, with the first live trade data
    processed between Citi and Goldman Sachs.
  sourceType: Finadium (tier2)
- year: '2023'
  event: Axoni closes a $20 million financing round; AxCore is described as deployed across various asset
    classes and markets, processing trillions of dollars of transactions annually.
  sourceType: PR Newswire (first-party)
- year: '2024'
  event: Axoni rebrands its flagship data platform AxCore to HYDRA in September; the same month it sells
    Veris to LSEG, with Veris customers keeping access to HYDRA.
  sourceType: A-Team Insight / FStech (tier2)
sourceNote: Built from independent sources read in full, including A-Team Insight's rebrand coverage and
  Finadium's launch coverage. First-party releases are used only for uncontested product facts. Wikipedia
  was not used.
openItems:
- Whether AxCore/HYDRA is still the technology under the DTCC Trade Information Warehouse re-platforming
  today was not verified from a fully-read recent source and is not stated.
- The claim in Axoni's own releases that its technology processes "trillions of dollars of transactions
  annually" is first-party and is attributed as such; no independent figure was verified.
- Axoni's founding year is not stated; sources conflict (2013, 2016 and 2017 are all asserted somewhere).
related: []
sources:
- title: Axoni Updates and Rebrands Replication Software — Enhancing Flexibility
  url: https://a-teaminsight.com/blog/axoni-updates-and-rebrands-replication-software-enhancing-flexibility/
  publisher: A-Team Insight
  tier: tier2
  date: '2024-09-10'
  usedFor: AxCore renamed HYDRA, golden-source replication, byte-for-byte replication, Postgres/MongoDB/Kafka
    datastores, BlackRock/Goldman Sachs/OCC clients, Schvey interview, Coalition Greenwich batch-process
    statistic
- title: Axoni and 15 large firms launch distributed ledger for equity swaps processing
  url: https://finadium.com/axoni-and-15-large-firms-launch-distributed-ledger-for-equity-swaps-processing/
  publisher: Finadium
  tier: tier2
  date: 2020-02
  usedFor: Veris launch built on AxCore, first live Citi–Goldman Sachs trade data, 15-firm working group
- title: JP Morgan, Credit Suisse Among 8 in Latest Bank Blockchain Test
  url: https://www.coindesk.com/markets/2016/10/18/jp-morgan-credit-suisse-among-8-in-latest-bank-blockchain-test
  publisher: CoinDesk
  tier: tier2
  date: '2016-10-18'
  usedFor: 133 equity-swaps test cases, 50 Axoni Core infrastructure tests, eight participating firms
- title: Axoni CEO Hails Blockchain 'Success' in 85 Test Cases
  url: https://www.waterstechnology.com/emerging-technologies/2454001/axoni-ceo-hails-blockchain-success-in-85-test-cases
  publisher: WatersTechnology
  tier: tier2
  date: '2016-04-08'
  usedFor: 85 CDS test cases, 100% success rate, four banks and DTCC
- title: Axoni closes Series-B led by Goldman Sachs
  url: https://fintech.frb.io/articles/axoni-closes-series-b-led-by-goldman-sachs
  publisher: FinTech Collective (Forbes interview reprint)
  tier: tier2
  date: 2018-08
  usedFor: DTCC selection of AxCore for Trade Information Warehouse, $11T, IBM lead and R3 advising, Schvey
    data-synchronization framing
- title: Axoni Announces $20 Million Equity Financing Led by EJF Ventures
  url: https://www.prnewswire.com/news-releases/axoni-announces-20-million-equity-financing-led-by-ejf-ventures-with-participation-from-laurion-capital-communitas-capital-and-existing-investors-301808202.html
  publisher: PR Newswire (Axoni release)
  tier: first-party
  date: '2023-04-26'
  usedFor: AxCore description, deployments (OCC, DTCC, DirectBooks, equity swaps), trillions in annual
    transactions, more than $110M raised
- title: LSEG acquires post-trade processing specialist Veris
  url: https://www.fstech.co.uk/fst/Lseg_acquires_post_trade_processing_specialist_veris.php
  publisher: FStech
  tier: tier2
  date: '2024-09-18'
  usedFor: Veris customers retain HYDRA access after the LSEG sale
author: Muhammad Abdullah Al Yasin
published: '2026-11-09'
lastUpdated: '2026-11-09'
draft: false
---

## Overview

AxCore is [Axoni](/organizations/axoni/)'s data-synchronization platform — distributed-ledger software that keeps financial institutions' records in sync with each other in real time, so both sides of a trade always hold the same data. ([PR Newswire](https://www.prnewswire.com/news-releases/axoni-announces-20-million-equity-financing-led-by-ejf-ventures-with-participation-from-laurion-capital-communitas-capital-and-existing-investors-301808202.html)) It underpinned Axoni's best-known work: the DTCC's $11 trillion Trade Information Warehouse re-platforming and the Veris equity-swaps network. ([FinTech Collective](https://fintech.frb.io/articles/axoni-closes-series-b-led-by-goldman-sachs)) In September 2024 Axoni renamed the platform HYDRA, for the multi-headed creature of Greek mythology, symbolizing replication from a single source to many destinations. ([A-Team Insight](https://a-teaminsight.com/blog/axoni-updates-and-rebrands-replication-software-enhancing-flexibility/))

AxCore's story is really the story of Axoni's pivot: the company began selling blockchain, but its chief executive, [Greg Schvey](/people/greg-schvey/), kept reframing the technology as a data-synchronization problem — "the application of it to solve for data synchronization" between institutions that each maintain their own books. ([FinTech Collective](https://fintech.frb.io/articles/axoni-closes-series-b-led-by-goldman-sachs)) That framing is what turned a ledger prototype into infrastructure used by central counterparties, clearing houses and the world's largest banks — and it is why the platform survived Axoni's 2024 sale of Veris to the London Stock Exchange Group as a standalone product.

## What AxCore synchronizes

When two financial institutions trade, each records the trade in its own systems, and every amendment, cash flow or corporate action must then be reconciled between two diverging records. AxCore guarantees that data is "continually and automatically replicated in real time, with guaranteed accuracy and completeness," reducing cost, risk and errors when trade data moves between institutions. ([PR Newswire](https://www.prnewswire.com/news-releases/axoni-announces-20-million-equity-financing-led-by-ejf-ventures-with-participation-from-laurion-capital-communitas-capital-and-existing-investors-301808202.html)) The retooled HYDRA replicates data "byte-for-byte" between databases — Postgres, MongoDB, Kafka and others, on-premises or in the cloud — with the databases "constantly pinging each other saying 'have I given you all the data that you're supposed to have?'" as Schvey put it. ([A-Team Insight](https://a-teaminsight.com/blog/axoni-updates-and-rebrands-replication-software-enhancing-flexibility/)) The pitch lands because the status quo is batch processing: cited Coalition Greenwich research found more than 90 percent of firms saying batch processes are difficult because of inefficiencies and operational risks in data sharing. ([A-Team Insight](https://a-teaminsight.com/blog/axoni-updates-and-rebrands-replication-software-enhancing-flexibility/)) With databases repopulated automatically, firms hold a real-time view of trading positions instead of waiting for end-of-day reports. ([A-Team Insight](https://a-teaminsight.com/blog/axoni-updates-and-rebrands-replication-software-enhancing-flexibility/))

## From ledger software to HYDRA

AxCore proved itself in bank pilots. In April 2016 it ran 85 credit-default-swap test cases with Bank of America Merrill Lynch, Citi, Credit Suisse and JPMorgan at a 100% success rate, and that October it passed 133 equity-swaps test cases with eight firms plus 50 tests of its own infrastructure. ([WatersTechnology](https://www.waterstechnology.com/emerging-technologies/2454001/axoni-ceo-hails-blockchain-success-in-85-test-cases); [CoinDesk](https://www.coindesk.com/markets/2016/10/18/jp-morgan-credit-suisse-among-8-in-latest-bank-blockchain-test)) The decisive endorsement came in January 2017, when the Depository Trust & Clearing Corporation selected AxCore to re-platform its Trade Information Warehouse, the record-keeping system for more than $11 trillion of credit derivatives, with [IBM](/organizations/ibm/) leading the initiative and the R3 consortium advising. ([FinTech Collective](https://fintech.frb.io/articles/axoni-closes-series-b-led-by-goldman-sachs)) By April 2023 Axoni said AxCore was deployed across various asset classes and markets and that its technology processed trillions of dollars of transactions annually. ([PR Newswire](https://www.prnewswire.com/news-releases/axoni-announces-20-million-equity-financing-led-by-ejf-ventures-with-participation-from-laurion-capital-communitas-capital-and-existing-investors-301808202.html)) The September 2024 HYDRA rebrand completed the pivot from "blockchain software" to "data replication platform," and when Axoni sold Veris to LSEG that month, Veris customers kept their HYDRA access. ([FStech](https://www.fstech.co.uk/fst/Lseg_acquires_post_trade_processing_specialist_veris.php))

| Deployment | Market | Status per sources |
|---|---|---|
| DTCC Trade Information Warehouse | Global credit derivatives ($11T) | Selected January 2017; IBM-led re-platforming |
| Veris equity-swaps network | Equity swaps | Launched February 2020, built on AxCore |
| Cleared stock-loan transactions | Stock loan, Options Clearing Corporation | Deployed or in development (2023) |
| Corporate-bond primary issuance | Primary issuance, with DirectBooks | In development (2023) |
| Global derivatives platform | Derivatives | Slated to launch 2023 |

## Frequently asked questions

### What is AxCore?
AxCore is Axoni's data-synchronization platform: distributed-ledger software that replicates data between financial institutions in real time with guaranteed accuracy and completeness, so counterparties always hold identical records of trades and positions. It was renamed HYDRA in September 2024. ([PR Newswire](https://www.prnewswire.com/news-releases/axoni-announces-20-million-equity-financing-led-by-ejf-ventures-with-participation-from-laurion-capital-communitas-capital-and-existing-investors-301808202.html))

### Is AxCore the same as HYDRA?
Yes. In September 2024 Axoni rebranded its flagship data platform AxCore to HYDRA, named for the multi-headed mythological creature, to symbolize replicating data from a single source to many destinations in real time. The underlying technology is the same platform. ([A-Team Insight](https://a-teaminsight.com/blog/axoni-updates-and-rebrands-replication-software-enhancing-flexibility/))

### What is AxCore used for?
Its highest-profile uses are the DTCC's $11 trillion Trade Information Warehouse re-platforming and the Veris equity-swaps network, plus cleared stock-loan transactions at the Options Clearing Corporation and a corporate-bond issuance platform with DirectBooks. By 2023 Axoni said it was deployed across various asset classes and markets. ([FinTech Collective](https://fintech.frb.io/articles/axoni-closes-series-b-led-by-goldman-sachs))

### How is AxCore different from a blockchain?
AxCore began as distributed-ledger software, but Axoni repositioned it as a data-replication platform: the emphasis is on synchronizing databases byte-for-byte in real time rather than on the ledger itself. In practice, clients use it to keep databases identical, not to run a blockchain network. The 2024 HYDRA rebrand made that positioning explicit. ([A-Team Insight](https://a-teaminsight.com/blog/axoni-updates-and-rebrands-replication-software-enhancing-flexibility/))

### Did AxCore survive the sale of Veris to LSEG?
Yes. When Axoni sold its Veris post-trade business to the London Stock Exchange Group in September 2024, Veris customers continued to benefit from HYDRA, Axoni's data platform for real-time replication between institutions. The sale covered Veris and related intellectual property; HYDRA stayed with Axoni. ([FStech](https://www.fstech.co.uk/fst/Lseg_acquires_post_trade_processing_specialist_veris.php))

## What this profile does not claim

- It does not state whether AxCore/HYDRA still underpins the DTCC Trade Information Warehouse today; no fully-read recent source verifies the current status.
- It does not present Axoni's "trillions of dollars of transactions annually" as an independently verified figure; it is the company's own claim, attributed as such.
- It does not state an Axoni founding year; sources conflict (2013, 2016 and 2017 are all asserted somewhere).
- It does not repeat marketing superlatives from Axoni's releases (such as "easiest and most secure way to replicate data") as fact.
- It does not describe AxLang, Axoni's smart-contract language, beyond the rename context; AxLang's post-2018 fate could not be verified and it is held as a separate candidate.
