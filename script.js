/* montrer le toast quand on load la page */

window.onload = (event) => {

  var toastLiveExample = document.getElementById('liveToast')

  var toast = new bootstrap.Toast(toastLiveExample)

  

  toast.show()

}


function faireDisparaitre() {
	 document.getElementById("fauxloading").style.display = " none";
	 /*
	 document.getElementById("fauxloading").style.opacity = " 0%";
	 document.getElementById("fauxloading").style.visibility = " hidden";
	 document.getElementById(fauxloading).style.height = 0%;
*/
	 

    // votre code pour le faux loading ici!
}


//NE RIEN MODIFIER EN DESSOUS DE CETTE LIGNE!!
function attendreAvantDeDisparaitre() {
          setTimeout(function () {
            faireDisparaitre();

          },5000);

}
attendreAvantDeDisparaitre(); 


