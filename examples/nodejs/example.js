// StreamWatchHub — Node.js example
// Install: npm install undici
// Run:     node example.js

import { fetch } from 'undici';

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY; // get from rapidapi.com
const COUNTRY = 'IT';

// --- 1) Where can I watch The Bear in Italy? ---
async function whereToWatch(tmdbId, type) {
  const r = await fetch(
    `https://streamwatchhub-streaming.p.rapidapi.com/v1/streaming/title/${tmdbId}?country=${COUNTRY}&type=${type}`,
    {
      headers: {
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'streamwatchhub-streaming.p.rapidapi.com',
      },
    }
  );
  return r.json();
}

// --- 2) What's trending on Italian streaming right now? ---
async function trending(type = 'movie', limit = 10) {
  const r = await fetch(
    `https://streamwatchhub-streaming.p.rapidapi.com/v1/streaming/trending?country=${COUNTRY}&type=${type}&limit=${limit}`,
    {
      headers: {
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'streamwatchhub-streaming.p.rapidapi.com',
      },
    }
  );
  return r.json();
}

// --- 3) Which channel shows today's football matches in Italy? ---
async function todayMatches() {
  const today = new Date().toISOString().slice(0, 10);
  const r = await fetch(
    `https://streamwatchhub-sports.p.rapidapi.com/v1/sports/matches?country=${COUNTRY}&date=${today}`,
    {
      headers: {
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'streamwatchhub-sports.p.rapidapi.com',
      },
    }
  );
  return r.json();
}

// Demo
const bear = await whereToWatch(76479, 'tv'); // tmdb id for The Bear
console.log(`The Bear in ${COUNTRY}:`);
for (const a of bear.availability || []) {
  console.log(`  ${a.provider} (${a.monetization}) → ${a.deep_link}`);
}

const top = await trending('movie', 5);
console.log(`\nTop 5 movies streaming in ${COUNTRY}:`);
for (const t of top.titles) {
  const platforms = (t.availability || []).map(a => a.provider).slice(0, 3).join(', ');
  console.log(`  ${t.title} (${t.year}) — ${platforms}`);
}

const fixtures = await todayMatches();
console.log(`\nToday's matches in ${COUNTRY}:`);
for (const m of fixtures.matches.slice(0, 5)) {
  const ch = m.resolution?.platform || 'unknown broadcaster';
  console.log(`  ${m.match_time} — ${m.home_team} vs ${m.away_team} (${m.league}) → ${ch}`);
}
