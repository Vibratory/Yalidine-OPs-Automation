ACtl.runInTab('#currentTab', () => {
	function getCharacter(str, n) {
		let newString = str.slice(-n);
		return newString;
	}

	let x = document.getElementsByTagName("p")[1].innerHTML;
	let n;

	x = (getCharacter(x, 6));
	x = x.replace(/\D/g, '');

	const textInput = document.getElementById("tracking");//gets the input box and puts event listener on it to listen for enter click
	textInput.addEventListener('keydown', (event) => {
		if (event.key === 'Enter') {
			n = document.getElementById("choosenSelected").innerHTML; //get number of checked packages
			if (n == x) {

				alert(n + " is equal to " + x + "done now click submit");
				document.getElementById("sendData").click(); // clicks Creer le sac
				
			} else {
			
				alert(n + " is not yet equal to " + x + "stil a few more packages");
			}
		}
	});
});
