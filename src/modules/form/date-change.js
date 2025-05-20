import { schedulesDay } from "../schedules/load";
//selecionar o input de date
const selectedDate = document.getElementById("date");

//Recarregara lista de horarios quando o input de data mudar:

selectedDate.onchange = () => schedulesDay();
