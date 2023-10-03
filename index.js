// variables
const inputs = document.querySelectorAll('input[type="date"]');
const btn = document.querySelector("button");
const totalPrice = document.getElementById("total");
const nightPrice = document.getElementById("nightPrice").innerText;

// setup date of the day
const today = new Date().toISOString().split("T")[0];

// on injecte aux inputs l'attribut min et sa valeur par défaut (date du jour)

document.getElementById("start_date").setAttribute("min", `${today}`);
document.getElementById("end_date").setAttribute("min", `${today}`);

let startTravel = "";
let endTravel = "";

// Functions
const startDate = (value) => {
  startTravel = value;
  // on prend la valeur de l'input pour recréer une date au format correct
  let selectStart = new Date(startTravel);
  // on ajoute +1 jour à la date sélectionnée
  let minEndDate = selectStart.setDate(selectStart.getDate() + 1);
  // conversion de la date en ISO pour l'envoyer dans l'attribut min de l'input. Le user est obligé de choisir + 24h après celle choisie
  const minIsoEndDate = new Date(minEndDate).toISOString().split("T")[0];
  console.log(minIsoEndDate);
  document.getElementById("end_date").setAttribute("min", `${minIsoEndDate}`);
};

const endDate = (value) => {
  endTravel = value;
};

// Evenements
inputs.forEach((date) => {
  date.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "start_date":
        startDate(e.target.value);
        break;
      case "end_date":
        endDate(e.target.value);
        break;
      default:
        null;
    }
  });
});

btn.addEventListener("click", () => {
  if (startTravel >= today && endTravel >= startTravel) {
    let startPoint = new Date(startTravel);
    let endPoint = new Date(endTravel);
    let difference = endPoint.getTime() - startPoint.getTime();
    console.log(difference);
    let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
    let totalNights = nightPrice * totalDays;

    totalPrice.innerText = `${totalNights} `;
  } else {
    alert(
      "Merci de renseigner une date de départ au moins égale à celle d'aujourd'hui ET une date de retour ultérieure à la date de départ !"
    );
  }
});
