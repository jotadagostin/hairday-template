import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

//date atual para o input:
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual e defini a data minina:
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  //previne o comportamento padrao de recarregar a pagina
  event.preventDefault();
  console.log("enviado!");
};
