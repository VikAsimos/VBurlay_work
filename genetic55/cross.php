<?
	$a = "1001001001010";
	$b = "0100010111111";
	$cr1a = substr($a,0,4);
	$cr2a = substr($a,4);
	
	$cr1b = substr($b,0,4);
	$cr2b = substr($b,4);
	
	$ab = $cr1a.$cr2b;
	$ba = $cr1b.$cr2a;
	
	echo "$a  $b  $ab $ba";
	