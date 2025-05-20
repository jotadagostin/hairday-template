import { apiConfig } from "./api-config";

export async function scheduleNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });

    alert("Agendamento realizado com sucesso");
  } catch {
    console.log(error);
    alert("Nao foi possivel agendar, tente novamente mais tarde...");
  }
}
