"""StreamWatchHub — Python example.
Install: pip install requests
Run:     RAPIDAPI_KEY=... python example.py
"""
import os
import datetime as dt
import requests

KEY = os.environ["RAPIDAPI_KEY"]
COUNTRY = "IT"

STREAMING_HOST = "streamwatchhub-streaming.p.rapidapi.com"
SPORTS_HOST = "streamwatchhub-sports.p.rapidapi.com"


def headers(host):
    return {"X-RapidAPI-Key": KEY, "X-RapidAPI-Host": host}


def where_to_watch(tmdb_id, type_="movie"):
    r = requests.get(
        f"https://{STREAMING_HOST}/v1/streaming/title/{tmdb_id}",
        params={"country": COUNTRY, "type": type_},
        headers=headers(STREAMING_HOST),
    )
    return r.json()


def trending(type_="movie", limit=10):
    r = requests.get(
        f"https://{STREAMING_HOST}/v1/streaming/trending",
        params={"country": COUNTRY, "type": type_, "limit": limit},
        headers=headers(STREAMING_HOST),
    )
    return r.json()


def today_matches():
    today = dt.date.today().isoformat()
    r = requests.get(
        f"https://{SPORTS_HOST}/v1/sports/matches",
        params={"country": COUNTRY, "date": today},
        headers=headers(SPORTS_HOST),
    )
    return r.json()


if __name__ == "__main__":
    bear = where_to_watch(76479, "tv")
    print(f"The Bear in {COUNTRY}:")
    for a in bear.get("availability", []):
        print(f"  {a['provider']} ({a['monetization']}) → {a['deep_link']}")

    top = trending("movie", 5)
    print(f"\nTop 5 movies streaming in {COUNTRY}:")
    for t in top["titles"]:
        platforms = ", ".join(a["provider"] for a in (t.get("availability") or [])[:3])
        print(f"  {t['title']} ({t['year']}) — {platforms}")

    fixtures = today_matches()
    print(f"\nToday's matches in {COUNTRY}:")
    for m in fixtures["matches"][:5]:
        ch = (m.get("resolution") or {}).get("platform", "unknown broadcaster")
        print(f"  {m['match_time']} — {m['home_team']} vs {m['away_team']} ({m['league']}) → {ch}")
