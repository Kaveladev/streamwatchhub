<?php
/**
 * StreamWatchHub — PHP example
 * Run: RAPIDAPI_KEY=... php example.php
 */

$KEY = getenv('RAPIDAPI_KEY');
$COUNTRY = 'IT';

function swh_get($host, $path, $params = []) {
    global $KEY;
    $url = "https://$host$path?" . http_build_query($params);
    $opts = ['http' => [
        'header' => "X-RapidAPI-Key: $KEY\r\nX-RapidAPI-Host: $host\r\n",
        'method' => 'GET',
    ]];
    return json_decode(file_get_contents($url, false, stream_context_create($opts)), true);
}

// Where can I watch The Bear in Italy?
$bear = swh_get(
    'streamwatchhub-streaming.p.rapidapi.com',
    '/v1/streaming/title/76479',
    ['country' => $COUNTRY, 'type' => 'tv']
);
echo "The Bear in $COUNTRY:\n";
foreach ($bear['availability'] ?? [] as $a) {
    echo "  {$a['provider']} ({$a['monetization']}) → {$a['deep_link']}\n";
}

// Top 5 trending movies
$top = swh_get(
    'streamwatchhub-streaming.p.rapidapi.com',
    '/v1/streaming/trending',
    ['country' => $COUNTRY, 'type' => 'movie', 'limit' => 5]
);
echo "\nTop 5 movies streaming in $COUNTRY:\n";
foreach ($top['titles'] as $t) {
    $platforms = implode(', ', array_slice(array_map(fn($a) => $a['provider'], $t['availability'] ?? []), 0, 3));
    echo "  {$t['title']} ({$t['year']}) — $platforms\n";
}

// Today's football matches
$today = date('Y-m-d');
$fixtures = swh_get(
    'streamwatchhub-sports.p.rapidapi.com',
    '/v1/sports/matches',
    ['country' => $COUNTRY, 'date' => $today]
);
echo "\nToday's matches in $COUNTRY:\n";
foreach (array_slice($fixtures['matches'], 0, 5) as $m) {
    $ch = $m['resolution']['platform'] ?? 'unknown broadcaster';
    echo "  {$m['match_time']} — {$m['home_team']} vs {$m['away_team']} ({$m['league']}) → $ch\n";
}
