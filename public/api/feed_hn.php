<?php
header('Content-Type: application/json');

$ch = curl_init("https://news.ycombinator.com/rss");
curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);

$xml = curl_exec($ch);
curl_close($ch);

$rss = simplexml_load_string($xml);

$items = [];

foreach ($rss->channel->item as $item) {
    $items[] = [
        "titulo" => (string)$item->title,
        "liga"   => (string)$item->link,
        "date"   => (string)$item->pubDate,
    ];
}

echo json_encode($items);

?>
