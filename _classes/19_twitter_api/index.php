<html>
<?php
require_once('twitter-api-php/TwitterAPIExchange.php');

$settings = array(
    'oauth_access_token' => "16192753-C3Ah2Dg9JJLaaOZHyzFxPqW4jYF9iVTdq5alkSfBa",
    'oauth_access_token_secret' => "zAM5whJiLbi9d97EZkC5Ty5akHifwsYudXEkVi54",
    'consumer_key' => "7DupEseAPvT0aGaA9zwuKA",
    'consumer_secret' => "9Va802Pnpfd5nkz23ZIsqkQJjz2ZqLUxuAxzXQSI"
);

$url = 'https://api.twitter.com/1.1/search/tweets.json';
$requestMethod = 'GET';
$getfield = '?q=%23baseball&count=2';

$twitter = new TwitterAPIExchange($settings);
/**echo $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();
**/

$string = json_decode($twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest(),$assoc = TRUE);

foreach($string['statuses'] as $items)
    {
    
        echo "Tweet: " . $items['text'] . "<br />";
        echo "When: " . $items['created_at'] . "<br />";
        
        $user = $items['user'];
        
        
        echo "Who: " . $items['user']['name'] . "<br />";
        
        echo "<hr>";
    }



echo "<pre>";
print_r($string);
echo "</pre>";

?>

</html>