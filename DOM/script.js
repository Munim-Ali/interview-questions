let button = document.querySelector("#changeButtonText");
button.addEventListener("click", () => {
  const para = document.getElementById("myParagraph");
  para.textContent = "The updated paragraph";
});

//Example 2
document
  .getElementById("hightlightFirstCity")
  .addEventListener("click", function () {
    const citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });
