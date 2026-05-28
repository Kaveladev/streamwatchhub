# StreamWatchHub

> **Where-to-watch API for movies, TV series, and football** — global broadcast & streaming availability in one call.

Look up the exact streaming service or TV channel that carries any movie, series, or football match in **17 supported countries** — with deep links, monetization type (subscription / rent / buy / ads), and broadcaster confidence scores.

[![Website](https://img.shields.io/badge/Website-streamwatchhub.com-00CC4F?style=for-the-badge&logo=googlechrome&logoColor=white)](https://streamwatchhub.com/api/) [![Movies & Series on RapidAPI](https://img.shields.io/badge/RapidAPI-Movies%20%26%20Series-00CC4F?style=for-the-badge)](https://rapidapi.com/kavela-kavela-default/api/streamwatchhub-movies-series/pricing) ![Sports on RapidAPI (coming soon)](https://img.shields.io/badge/RapidAPI-Sports%20%E2%80%94%20coming%20soon-3f3f46?style=for-the-badge)

---

## What it does

| Question | Answer in one API call |
|---|---|
| "Where can I watch *The Bear* in Saudi Arabia?" | `OSN+ · Shahid VIP · Apple TV (rent)` |
| "What channel shows Real Madrid vs Barcelona in Romania?" | `Orange Sport · Prima Sport` |
| "All trending movies on Netflix in Italy this week?" | Ranked list with posters, year, runtime, provider deep-links |
| "Which channel broadcasts the Champions League final in Hungary?" | `TV2 Sport (free-to-air) · Spíler TV` |
| "Live football matches happening right now in Bulgaria?" | Scores, minute, broadcaster, every league we follow |
| "Where can I stream Premier League in India?" | `JioHotstar · Star Sports` |
| "What's the kickoff broadcaster for Bundesliga in Germany?" | `Sky Deutschland · DAZN` |

---

## Two products, one platform

### 🎬 StreamWatchHub Movies & Series
- **28,000+ titles** (15K movies + 13K TV series), refreshed daily from TMDB
- **590+ unique streaming providers** across 17 countries (Netflix, Disney+, Max, Apple TV, OSN+, Shahid, Movistar+, Kinopoisk, Sky Go, Paramount+, JioHotstar, Globoplay, Canal+, DAZN, …)
- Subscription / rent / buy / ad-supported labels per offer
- Deep links to start watching, normalized across providers
- Trending, search, by-TMDB-ID lookup
- Localized titles, posters, overviews (TMDB-native per locale)

### ⚽ StreamWatchHub Sports — *direct API live · RapidAPI listing pending*
- **23+ football leagues**, live + upcoming + recent fixtures
- Live scores updated every 5 minutes during match windows
- **Per-country broadcaster resolver** — same league, different channel in each of 17 countries
- Big-5 European leagues + UCL/UEL/UECL + Saudi Pro League + Russian Premier League + 8 domestic leagues
- Backed by api-sports.io fixture data + curated broadcaster mapping

**Movies & Series** is live on RapidAPI ($4.99/mo Pro tier · free 1,000 calls/month).  
**Sports** ships on RapidAPI soon — until then, direct API access available for enterprise (`Authorization: Bearer …`).

---

## Coverage (17 countries)

Streaming availability is live in all 17. Football broadcaster mapping is seeded for all 17 but marketed via the bundled `/v1/sports/*` API surface — full RapidAPI Sports listing publishes when the per-country fixture coverage hits our 90% target.



🇺🇸 USA · 🇬🇧 UK · 🇩🇪 Germany · 🇫🇷 France · 🇮🇹 Italy · 🇪🇸 Spain · 🇧🇷 Brazil · 🇮🇳 India · 🇷🇺 Russia · 🇸🇦 Saudi Arabia · 🇦🇪 UAE · 🇶🇦 Qatar · 🇷🇸 Serbia · 🇭🇺 Hungary · 🇧🇬 Bulgaria · 🇷🇴 Romania · 🇹🇷 Turkey

| Country | Top sport broadcaster (2025-26) | Streaming providers | Eligible titles |
|---|---|---|---|
| 🇺🇸 US | NFL/NBA/MLB networks, ESPN+, Paramount+ | 70+ (Netflix, Hulu, Max, Disney+, Prime, …) | 10,500+ |
| 🇬🇧 GB | Sky Sports · TNT Sports (Premier League) | 60+ (Sky, NOW, BBC iPlayer, ITVX, Prime, …) | 11,300+ |
| 🇩🇪 DE | Sky Deutschland · DAZN (Bundesliga) | 60+ (Sky, WOW, RTL+, Joyn, Magenta, …) | 11,500+ |
| 🇫🇷 FR | DAZN · beIN Sports (Ligue 1) | 50+ (Canal+, Orange, Pathé, myCANAL, …) | 11,200+ |
| 🇪🇸 ES | Movistar+ · DAZN (La Liga) | 40+ (Movistar+, DAZN, Filmin, SkyShowtime, …) | 13,000+ |
| 🇮🇹 IT | DAZN · Sky Italia (Serie A) | 37 (Sky, NOW, DAZN, Mediaset, TIMvision, …) | 11,800+ |
| 🇧🇷 BR | Globo · Premiere · Amazon · Cazé TV (Brasileirão) | 50+ (Globoplay, Telecine, Prime, Max, …) | 10,400+ |
| 🇮🇳 IN | JioHotstar · Star Sports (Premier League intl.) | 30+ (JioHotstar, Sony LIV, ZEE5, JioCinema, …) | 8,500+ |
| 🇷🇺 RU | Match Premier (Russian Premier League) | 13 (Kinopoisk, Okko, Premier, Amediateka, …) | 5,300+ |
| 🇸🇦 SA | SSC Sports (Saudi Pro League), beIN MENA | 13 (OSN+, Shahid VIP, TOD, STARZPLAY, …) | 9,800+ |
| 🇦🇪 AE | SSC Sports, beIN MENA, AD Sports | 13 (Shahid, OSN+, STARZPLAY, …) | 9,700+ |
| 🇶🇦 QA | beIN Sports MENA, Alkass | 10 (Shahid, OSN+, beIN Connect, …) | 9,700+ |
| 🇷🇸 RS | Arena Sport (Saudi PL + SuperLiga), Sport Klub | 13 | 10,600+ |
| 🇭🇺 HU | Spíler TV (Saudi PL + NB I), M4 Sport | 15 (Netflix, HBO Max, SkyShowtime, …) | 10,800+ |
| 🇧🇬 BG | NovaSport (Saudi PL + First League), Diema | 13 | 10,800+ |
| 🇷🇴 RO | Digi Sport (Saudi PL + Liga I), Prima Sport | 12 | 10,700+ |
| 🇹🇷 TR | beIN Sports Türkiye (Süper Lig) | 25+ (Exxen, BluTV, Disney+, GAİN, …) | 12,000+ |

Coverage expanding — request a country: hello@streamwatchhub.com

---

## Quickstart

### Via RapidAPI (recommended)

1. Subscribe on RapidAPI — get your `X-RapidAPI-Key` instantly
2. Call any endpoint:

```bash
curl -X GET 'https://streamwatchhub-streaming.p.rapidapi.com/v1/streaming/trending?country=IT&type=movie&limit=5' \
  -H 'X-RapidAPI-Host: streamwatchhub-streaming.p.rapidapi.com' \
  -H 'X-RapidAPI-Key: YOUR_RAPIDAPI_KEY'
```

### Direct (enterprise)

```bash
curl 'https://api.streamwatchhub.com/v1/sports/matches?country=GB&date=2026-08-15' \
  -H 'Authorization: Bearer swh_live_YOURKEY'
```

See [`examples/`](./examples) for Node.js, Python, PHP, and more curl snippets.

---

## Endpoints at a glance

### Sports
- `GET /v1/sports/leagues?country=XX` — leagues + broadcasters in that country
- `GET /v1/sports/matches?country=XX&date=YYYY-MM-DD` — fixtures with resolved broadcasters
- `GET /v1/sports/match/:id?country=XX` — single match detail
- `GET /v1/sports/channel-for?league=...&country=XX` — fast resolver lookup
- `GET /v1/sports/platforms?country=XX` — broadcaster directory

### Streaming
- `GET /v1/streaming/title/:tmdb_id?country=XX&type=movie|tv` — providers for a specific title
- `GET /v1/streaming/trending?country=XX&type=movie|tv` — popular titles with availability
- `GET /v1/streaming/search?q=...&country=XX` — full-text title search
- `GET /v1/streaming/providers?country=XX` — provider directory ranked by catalog size

### Meta
- `GET /v1/countries` — supported country list with timezone + language (17 currently)

Full schema: [`spec/openapi-sports.yaml`](./spec/openapi-sports.yaml) · [`spec/openapi-streaming.yaml`](./spec/openapi-streaming.yaml)

---

## Pricing

| Tier | Price (per product) | Bundle (both) | Monthly calls |
|---|---|---|---|
| **Basic** (Free) | $0 | $0 | 1,000 |
| **Pro** | $4.99 | $9.99 | 50,000 |
| **Ultra** | TBD | TBD | 500,000 |
| **Enterprise** | Custom | Custom | Unlimited |

Subscribe on RapidAPI — no contract, cancel anytime.

> **Sports access today:** Direct API via Bearer token (enterprise / partner). RapidAPI Sports listing launches once we hit broadcaster coverage targets across all 17 markets.

---

## Data sources & freshness

- **Streaming availability:** TMDB watch/providers, refreshed daily 03:30 UTC
- **Football fixtures:** api-sports.io, refreshed daily 02:30 UTC
- **Live scores:** every 5 min during match window (09:00-23:30 UTC)
- **Broadcaster mapping:** manually curated for accuracy, override-able per match, refreshed daily 06:45 UTC

We attribute TMDB and api-sports.io as required by their respective terms.

---

## Status

- Service: [api.streamwatchhub.com/healthz](https://api.streamwatchhub.com/healthz)
- Uptime: monitored 24/7 (alerts on Telegram)
- Public site: [streamwatchhub.com](https://streamwatchhub.com) — JustWatch-style consumer-facing UI in 17 locales

---

## Contact

- General / partnerships: hello@streamwatchhub.com
- API support / enterprise: api@streamwatchhub.com
- Privacy / GDPR: privacy@streamwatchhub.com
- Issues / feature requests: [open an issue](https://github.com/Kaveladev/streamwatchhub/issues)

---

## License

This repository (docs, OpenAPI specs, examples) is MIT-licensed. The API service itself is proprietary.
