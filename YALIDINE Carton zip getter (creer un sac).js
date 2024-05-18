function getCharacter(str,n) { //pick the last N number of chars from link to get only the zip
    let newString = str.slice(-n); 
    return newString; 
  
}
function getWilayaFullZip(WZip){ //get HUB zip code
switch (WZip) {
    case "1":
        alert("wilaya is adrar");
        WZip = "10101" ;
   break;

   case "2":
       alert("wilaya is chlef");
       WZip = "21101";
   break;

   case "3":
       alert("wilaya is Laghouat");
       WZip = "30101";
    break;

    case "4":
        alert("wilaya is adrar");
        WZip = "40101" ;
   break;

   case "5":
       alert("wilaya is chlef");
       WZip = "50102";
   break;

   case "6":
       alert("wilaya is Laghouat");
       WZip = "60101";
    break;
    case "7":
        alert("wilaya is adrar");
        WZip = "70401" ;
   break;

   case "8":
       alert("wilaya is chlef");
       WZip = "80101";
   break;

   case "9":
       alert("wilaya is Laghouat");
       WZip = "90101";
    break;

    case "10":
        alert("wilaya is adrar");
        WZip = "101601" ;
   break;

   case "11":
       alert("wilaya is chlef");
       WZip = "110101";
   break;

   case "12":
       alert("wilaya is Laghouat");
       WZip = "120101";
    break;

    case "13":
        alert("wilaya is adrar");
        WZip = "135001" ;
   break;

   case "14":
       alert("wilaya is chlef");
       WZip = "143901";
   break;

   case "15":
       alert("wilaya is Laghouat");
       WZip = "151101";
    break;

    case "16":
        alert("wilaya is adrar");
        WZip = "161501" ;
   break;

   case "17":
       alert("wilaya is chlef");
       WZip = "171401";
   break;

   case "18":
       alert("wilaya is Laghouat");
       WZip = "180101";
    break;

    case "19":
        alert("wilaya is adrar");
        WZip = "190201" ;
   break;

   case "20":
       alert("wilaya is chlef");
       WZip = "201101";
   break;

   case "21":
       alert("wilaya is Laghouat");
       WZip = "213501";
    break;

    case "22":
        alert("wilaya is adrar");
        WZip = "223601" ;
   break;

   case "23":
       alert("wilaya is chlef");
       WZip = "230801";
   break;

   case "24":
       alert("wilaya is Laghouat");
       WZip = "241901";
    break;

    case "25":
        alert("wilaya is adrar");
        WZip = "250603" ;
   break;

   case "26":
       alert("wilaya is chlef");
       WZip = "263301";
   break;

   case "27":
       alert("wilaya is Laghouat");
       WZip = "271801";
    break;

    case "28":
        alert("wilaya is adrar");
        WZip = "282802" ;
   break;

   case "29":
       alert("wilaya is chlef");
       WZip = "292801";
   break;

   case "30":
       alert("wilaya is Laghouat");
       WZip = "301301";
    break;

   case "31":
       alert("wilaya is Laghouat");
       WZip = "310501";
    break;

    case "32":
        alert("wilaya is adrar");
        WZip = "320101" ;
   break;

   case "33":
       alert("wilaya is chlef");
       WZip = "330101";
   break;

   case "34":
       alert("wilaya is Laghouat");
       WZip = "340601";
    break;

    case "35":
        alert("wilaya is adrar");
        WZip = "350101" ;
   break;

   case "36":
       alert("wilaya is chlef");
       WZip = "361701";
   break;

   case "37":
       alert("wilaya is Laghouat");
       WZip = "370201";
    break;

    case "38":
        alert("wilaya is adrar");
        WZip = "382101" ;
   break;

   case "39":
       alert("wilaya is chlef");
       WZip = "390101";
   break;
   case "40":
       alert("wilaya is Laghouat");
       WZip = "401301";
    break;

   case "41":
       alert("wilaya is Laghouat");
       WZip = "410101";
    break;

    case "42":
        alert("wilaya is Tizpaza");
        WZip = "420101" ;
   break;

   case "43":
       alert("wilaya is Mila");
       WZip = "431601";
   break;

   case "44":
       alert("wilaya is Ain Defla");
       WZip = "440101";
    break;

    case "45":
        alert("wilaya is Naama");
        WZip = "450101" ;
   break;

   case "46":
       alert("wilaya is Aïn Témouchent");
       WZip = "460401";
   break;

   case "47":
       alert("wilaya is Ghardaia");
       WZip = "470701";
    break;

    case "48":
        alert("wilaya is Relizan");
        WZip = "483001" ;
   break;

	}
return WZip
}

var AD = document.getElementsByClassName("border-left")[14]; 
//alert(AD.textContent);

if (AD.innerHTML.trim() == "")  { //to know if StopDesk or HomeDelivery


var W = document.getElementsByClassName("mr-1 btn btn-sm btn-outline-info")[1].href; 
//alert(W);

WZip = (getCharacter(W,2));

WZip = WZip.replace(/\D/g, ''); // Remove non number chars

alert("wilaya number is = "+WZip);

WZip = (getWilayaFullZip(WZip));

window.open("https://yalidine.app/app/sac/ajouter.php?t=v&f_hi=195502&t_hi="+WZip, "_self");

}else {

var SD = document.getElementsByClassName("mr-1 btn btn-sm btn-outline-info")[2].href;//get link



ZIP = (getCharacter(SD,6));
//use only last 6 chars they represent the zip
//alert (ZIP);
ZIP = ZIP.replace(/\D/g, ''); // Remove non number chars
window.open("https://yalidine.app/app/sac/ajouter.php?t=v&f_hi=195502&t_hi="+ZIP, "_self");
//add zip to sac link to get the exact vers wilaya Agency

}