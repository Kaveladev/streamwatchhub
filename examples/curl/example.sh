#!/bin/bash
# StreamWatchHub — curl examples
# Set: export RAPIDAPI_KEY=your_key_from_rapidapi

KEY="$RAPIDAPI_KEY"
COUNTRY="IT"

STREAMING="streamwatchhub-streaming.p.rapidapi.com"
SPORTS="streamwatchhub-sports.p.rapidapi.com"

echo "=== Where to watch The Bear (tmdb 76479) in $COUNTRY ==="
curl -s "https://$STREAMING/v1/streaming/title/76479?country=$COUNTRY&type=tv" \
  -H "X-RapidAPI-Key: $KEY" -H "X-RapidAPI-Host: $STREAMING" | jq .

echo
echo "=== Trending movies in $COUNTRY ==="
curl -s "https://$STREAMING/v1/streaming/trending?country=$COUNTRY&type=movie&limit=5" \
  -H "X-RapidAPI-Key: $KEY" -H "X-RapidAPI-Host: $STREAMING" | jq '.titles[] | {title, year, providers: [.availability[].provider] | unique}'

echo
echo "=== All streaming providers in $COUNTRY (catalog size) ==="
curl -s "https://$STREAMING/v1/streaming/providers?country=$COUNTRY" \
  -H "X-RapidAPI-Key: $KEY" -H "X-RapidAPI-Host: $STREAMING" | jq '.providers[] | {name, titles_total, titles_flatrate}'

echo
echo "=== Today's football fixtures in $COUNTRY ==="
TODAY=$(date +%Y-%m-%d)
curl -s "https://$SPORTS/v1/sports/matches?country=$COUNTRY&date=$TODAY" \
  -H "X-RapidAPI-Key: $KEY" -H "X-RapidAPI-Host: $SPORTS" | jq '.matches[] | {time: .match_time, match: (.home_team + " vs " + .away_team), league, channel: .resolution.platform}'

echo
echo "=== Which channel shows Premier League in Saudi Arabia? ==="
curl -s "https://$SPORTS/v1/sports/channel-for?league=Premier+League&country=SA" \
  -H "X-RapidAPI-Key: $KEY" -H "X-RapidAPI-Host: $SPORTS" | jq .

echo
echo "=== All supported countries ==="
curl -s "https://$SPORTS/v1/countries" \
  -H "X-RapidAPI-Key: $KEY" -H "X-RapidAPI-Host: $SPORTS" | jq '.countries[] | {code, name_en, tz}'
