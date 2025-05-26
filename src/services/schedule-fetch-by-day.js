import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({ date }) {
  try {
    //Fazendo a requisicao:
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    //converte para JSON:
    const data = await response.json();

    //filtra os agendamentos pelo dia selecionado:
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    );

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Nao foi possivel buscar os agendamentos do dia selecionado");
  }
}
