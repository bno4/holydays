// variables
let startDate = document.getElementById("start_date");
let endDate = document.getElementById("end_date");
const btn = document.querySelector("button");

// Functions

// Evenements
startDate.addEventListener("input", () => {
  //   console.log(startDate.value);
});

endDate.addEventListener("input", () => {
  //   console.log(endDate.value);
});

btn.addEventListener("click", () => {
  console.log(endDate.value, startDate.value);
});
