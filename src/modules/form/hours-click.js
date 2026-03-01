export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");


  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      // Remove a classe de selecionado de todos os horários n selecionados.
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      // Adiciona a classe na LI (hora) clicada.
      selected.target.classList.add("hour-selected");
    });
  });
}