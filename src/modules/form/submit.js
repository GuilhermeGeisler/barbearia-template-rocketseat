import dayjs from "dayjs";

const form = document.querySelector("form");
const SelectedDate = document.getElementById("date");

// Data atual para formatar o input.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual no campo de data.
SelectedDate.value = inputToday;

// Define a data mínima como a data atual.
SelectedDate.min = inputToday;

form.onsubmit = (event) => {
  // Previne o comportamento padrão recarregar a página.
  event.preventDefault();

}