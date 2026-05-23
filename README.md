# StreamWatchHub

> **Where-to-watch API for movies, TV series, and football** — global broadcast & streaming availability in one call.

Look up the exact streaming service or TV channel that carries any movie, series, or football match in 10 supported countries — with deep links, monetization type (subscription / rent / buy / ads), and broadcaster confidence scores.

[![Website](https://img.shields.io/badge/Website-streamwatchhub.com-00CC4F?style=for-the-badge&logo=googlechrome&logoColor=white)](https://streamwatchhub.com/api/) [![Movies & Series on RapidAPI](https://img.shields.io/badge/RapidAPI-Movies%20%26%20Series-00CC4F?style=for-the-badge)](https://rapidapi.com/kavela-kavela-default/api/streamwatchhub-movies-series/pricing) [![Sports on RapidAPI](https://img.shields.io/badge/RapidAPI-Sports-00CC4F?style=for-the-badge)](https://rapidapi.com/)

---

## What it does

| Question | Answer in one API call |
|---|---|
| "Where can I watch *The Bear* in Saudi Arabia?" | `OSN+ · Shahid VIP · Apple TV (rent)` |
| "What channel shows Real Madrid vs Barcelona in Romania?" | `Orange Sport · Prima Sport` |
| "All trending movies on Netflix in Italy this week?" | Ranked list with posters, year, runtime, provider deep-links |
| "Which channel broadcasts the Champions League final in Hungary?" | `TV2 Sport (free-to-air) · Spíler TV` |
| "Live football matches happening right now in Bulgaria?" | Scores, minute, broadcaster, every league we follow |

---

## Two products, one platform

### 🎬 StreamWatchHub Movies & Series
- 590+ titles (movies + TV series), refreshed daily
- 70+ streaming providers per country (Netflix, Disney+, HBO Max, Apple TV, OSN+, Shahid, Movistar Plus+, Kinopoisk, Tivify, Now TV, Sky Go, Paramount+, …)
- Subscription / rent / buy / ad-supported labels
- Deep links to start watching
- Trending, search, by-title lookup

### ⚽ StreamWatchHub Sports
- 23 football leagues, live + upcoming + recent fixtures
- Live scores updated every 5 minutes during match windows
- Per-country broadcaster resolver — same league, different channel in each country
- Big-5 European leagues + UCL/UEL/UECL + Saudi Pro League + Russian Premier League + 8 domestic leagues
- Backed by api-sports.io football data

Get the bundle for $9.99/mo or each separately for $4.99/mo. Free tier available (1,000 calls/month).

---

## Coverage (Wave 1)

10 countries: **🇸🇦 Saudi Arabia · 🇦🇪 UAE · 🇶🇦 Qatar · 🇷🇸 Serbia · 🇭🇺 Hungary · 🇧🇬 Bulgaria · 🇷🇴 Romania · 🇮🇹 Italy · 🇪🇸 Spain · 🇷🇺 Russia**

| Country | Sport leagues | Streaming providers | Trending titles |
|---|---|---|---|
| 🇮🇹 IT | Serie A, Serie B, Coppa Italia, UCL, UEL + Big-5 | 37 (Netflix, Sky, DAZN, Now TV, Mediaset, Paramount+, Disney+, HBO Max, …) | 286 |
| 🇪🇸 ES | La Liga, Segunda, Copa del Rey + Big-5 | 39 (Movistar+, DAZN, Filmin, Netflix, Tivify, …) | 285 |
| 🇭🇺 HU | NB I, M4 Sport + cross-EU | 15 (Netflix, HBO Max, SkyShowtime, Disney+, Spíler, …) | 244 |
| 🇷🇴 RO | Liga I, Digi Sport, Prima + cross-EU | 12 | 241 |
| 🇧🇬 BG | First League + cross-EU | 13 | 233 |
| 🇸🇦 SA | Saudi Pro League, TOD, SSC, beIN MENA | 13 (Netflix, OSN+, Shahid VIP, TOD, STARZPLAY, …) | 179 |
| 🇦🇪 AE | UAE Pro League, AD Sports, beIN MENA | 13 | 181 |
| 🇶🇦 QA | Qatar Stars League, Alkass, beIN MENA | 10 | 150 |
| 🇷🇸 RS | SuperLiga, Arena Sport, Sport Klub | 13 | 168 |
| 🇷🇺 RU | Premier Liga, Match TV, Okko Sport | 13 (Kinopoisk, Okko, Premier, Amediateka, …) | 121 |

More countries on the roadmap (US, GB, DE, FR, TR).

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
curl 'https://api.streamwatchhub.com/v1/sports/matches?country=SA&date=2026-05-23' \
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
- `GET /v1/countries` — supported country list with timezone + language

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

---

## Data sources & freshness

- **Streaming availability:** TMDB watch/providers, refreshed daily 03:30 UTC
- **Football fixtures:** api-sports.io, refreshed daily 02:30 UTC
- **Live scores:** every 5 min during match window
- **Broadcaster mapping:** manually curated for accuracy, override-able per match

We attribute TMDB and api-sports.io as required by their respective terms.

---

## Status

- Service: [api.streamwatchhub.com/healthz](https://api.streamwatchhub.com/healthz)
- Uptime: monitored 24/7 (alerts on Telegram)

---

## Contact

- Issues / feature requests: [open an issue](https://github.com/Kaveladev/streamwatchhub/issues)
- Enterprise / custom contracts: hello@streamwatchhub.com (TODO)

---

## License

This repository (docs, OpenAPI specs, examples) is MIT-licensed. The API service itself is proprietary.
