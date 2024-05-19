let t;
 t = prompt('Checki'); //scan the tracking code
ACtl.runInTab('#currentTab', t, t => {
	//let t = prompt('Checki');
	
	window.open("https://yalidine.app/app/colis/index.php?source=cec&column=tracking&q=" + t, "_self");

});// takes u to (tous les colis) page of this tracking
await ACtl.on('tabLoadEnd', '#currentTab'); // wait for page to load

ACtl.runInTab('#currentTab', () => {
document.getElementsByClassName("btn btn-sm btn-success")[1].click();

});
	await ACtl.sleep(5000) ;
	
ACtl.runInTab('#currentTab', () => {
let sac = document.getElementsByTagName("Strong")[12];
alert(sac);
});