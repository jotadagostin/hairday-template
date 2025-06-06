export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      //remove a class hour-selected de todas as li nao selecionadas
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      //add a classe na li clicada
      selected.target.classList.add("hour-selected");
    });
  });
}
