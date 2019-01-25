window.onload =function(){
	document.getElementById("result").style.display = "none";
};
var url="http://numbersapi.com/";
async function numcall(){
	var jso="?json";
	var getNum= document.getElementById("searchBox").value;
	var response = await fetch(url+getNum+jso);
	var res = await response.json();
	console.log(res.text);
	document.getElementById("def").innerHTML = res.text;
	document.getElementById("result").style.display = "block";
	// "http://notepad.pw.js"
}
// numcall();