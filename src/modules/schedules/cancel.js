import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";
const period = document.querySelectorAll('.period');

// Gera evento de click para cada período
period.forEach((periods) => {
  // Captura o evento de click na lista.
  periods.addEventListener('click', async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado.
      const item = event.target.closest('li');
      // Obtém o id do agendamento a partir do dataset da li.
      const { id } = item.dataset;

      // Verifica se o id existe e solicita confirmação para cancelar o agendamento.
      if (id) {
        const isConfirm = confirm("Tem certeza que deseja cancelar esse agendamento?");
        if (isConfirm) {
          await scheduleCancel({ id });
          // Recarrega  os agendamentos.
          schedulesDay();
        }
      }
    }
  });

});