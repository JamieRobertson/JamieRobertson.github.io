<?php

include 'XmlToJson.php';

print XmlToJson::Parse("http://www.tfl.gov.uk/tfl/businessandpartners/syndication/feed.aspx?email=hello@jamierobertsoninteractive.com&feedId=7");


// here are some tests:

//$url = 'http://www.tfl.gov.uk/tfl/businessandpartners/syndication/feed.aspx?email=hello@jamierobertsoninteractive.com&feedId=7';
//$url = 'http://www.tfl.gov.uk/tfl/businessandpartners/syndication/feed.aspx?email=hello@jamierobertsoninteractive.com&feedId=1';
//$url = 'http://cloud.tfl.gov.uk/TrackerNet/LineStatus';

//$fileContents = file_get_contents($url);

//var_dump($fileContents);

?>