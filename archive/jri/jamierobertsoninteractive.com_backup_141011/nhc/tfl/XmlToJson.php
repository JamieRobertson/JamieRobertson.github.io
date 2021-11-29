<?php

class XmlToJson {

	public function Parse ($url) {

		$fileContents= file_get_contents($url);



		// this addition is for the CDATA tags tfl uses
		//$fileContents = str_replace("<![CDATA[", '', $fileContents);
		//$fileContents = str_replace("]]>", '', $fileContents);

		//$fileContents = str_replace(array("\n", "\r", "\t"), '', $fileContents);

		//$fileContents = trim(str_replace('"', "'", $fileContents));



		// Strip whitespace between xml tags
		$fileContents = preg_replace('~\s*(<([^>]*)>[^<]*</\2>|<[^>]*>)\s*~','$1',$fileContents);

		// Convert CDATA into xml nodes.
		$simpleXml = simplexml_load_string($fileContents,'SimpleXMLElement', LIBXML_NOCDATA);

		// original
		// $simpleXml = simplexml_load_string($fileContents);

		$json = json_encode($simpleXml);

		//added this later : broke
		//$json = json_decode($json);

		return $json;

	}

}

?>