let s = document.getElementsByClassName("btn btn-sm btn-outline-success")[0].textContent;
alert(s);

if (s.trim() == "En préparation") {
	alert("En préparation");
} else {
	alert("Expedie");
}
