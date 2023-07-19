// Conditions avec if
let age1 = 17;
let age2 = 18;

if (age1 < age2) {
  console.log("Vous ne pouvez pas accéder au site!");
} else if (age1 > age2) {
  console.log("Vous pouvez accéder au site en utilisant la version premium!");
} else {
  console.log("Votre cas n'a pas été spécifié!");
}

// Conditions avec switch
let age3 = 17;
let age4 = 18;

switch (true) {
  case (age3 = age4):
    console.log("Vous n'avez pas l'âge minimum réquis!");
    console.log("L'âge minimum réquis est " + age4);
    break;
  case (age3 = age4):
    console.log(
      "Vous pouvez accéder au site en souscrivant à la version premium!"
    );
    break;
  default:
    console.log("Votre cas n'a pas été spécifié!");
    break;
}

// Filtre pour le tableau

// Déclaration de variables
const searchInput = document.getElementById("search");
const tableRows = document.querySelectorAll(".table tbody tr");

// Création de l'événement
searchInput.addEventListener("keyup", function (event) {
  const searchText = event.target.value.toLowerCase();

  // Manipulation des éléments du tableau
  tableRows.forEach(function (row) {
    const name = row.querySelector("td:nth-child(1)").textContent.toLowerCase();
    const firstName = row
      .querySelector("td:nth-child(2)")
      .textContent.toLowerCase();

    if (name.includes(searchText) || firstName.includes(searchText)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});
