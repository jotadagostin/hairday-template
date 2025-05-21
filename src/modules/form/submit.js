import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

//date atual para o input:
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual e defini a data minina:
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  //previne o comportamento padrao de recarregar a pagina
  event.preventDefault();

  try {
    //recuperando o nome do cliente:
    const name = clientName.value.trim();

    if (!name) {
      return alert("informe nome do cliente");
    }

    //recuperar horario selecionado:
    const hourSelected = document.querySelector(".hour-selected");

    //recupera o horario selecionado:
    if (!hourSelected) {
      return alert("Selecione o horario");
    }

    //Recuperar somente a hora:
    const [hour] = hourSelected.innerText.split(":");
    console.log(hour);

    //Insere a hora na data:
    const when = dayjs(selectedDate.value).add(hour, "hour");

    //gerar um ID:
    const id = new Date().getTime();

    await scheduleNew({
      id,
      name,
      when,
    });
  } catch (error) {
    alert("Nao foi possivel agendar o agendamento!");
    console.log(error);
  }
};
