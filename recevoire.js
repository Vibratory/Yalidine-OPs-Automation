let t;
t = prompt('Checki'); //scan the tracking code
ACtl.runInTab('#currentTab', ()=> {
	//let t = prompt('Checki');

	window.open("https://yalidine.app/app/recevoir/recevoir_colis.php?hi=195502", "_self");

}); // takes u to (tous les colis) page of this tracking

await ACtl.on('tabLoadEnd', '#currentTab'); // wait for page to load

ACtl.runInTab('#currentTab', t, t => {

	document.getElementById("tracking").value = t; // inputs tracking code in box

	//alert("niggers man");
	document.getElementsByClassName("btn btn-success")[0].click(); //clicks Ajouter a la liste
	document.getElementById("sendData").click(); // clicks Creer le sac
});
