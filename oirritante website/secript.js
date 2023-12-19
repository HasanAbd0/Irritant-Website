var afbeeldingElement = document.getElementById("beweegbareAfbeelding");

afbeeldingElement.addEventListener("click", function () {
  beweegAfbeeldingAutomatisch();
});

function beweegAfbeeldingAutomatisch() {
  var positie = window.innerWidth - afbeeldingElement.width;
  var snelheid = 150;

  var beweegInterval = setInterval(function () {
    positie -= snelheid;

    if (positie < 0) {
      positie = window.innerWidth - afbeeldingElement.width;
    }

    afbeeldingElement.style.left = positie + "px";
  }, 16);
}

beweegAfbeeldingAutomatisch();

const lightBoxClose = () => {
  document.getElementById("lol").style.disp = "none";
};
// alert("Don't inter this website : 324234234");
// alert("Don't inter this website: 324234234");
// alert("Don't inter this website: 324234234");
// alert("Don't inter this website: 324234234");
