import { ApiRequest } from "../../assets/js/request.js";

/** Clase que representa al componente computador */
class Computador {
  constructor() {}

  /** Actualiza el listado de computadores en la tabla */
  static get() {
    ApiRequest.get("Caracteristicas", "getAll")
      .then((response) => {
        /** Referencia del cuerpo de la tabla */
        const tbody = document.querySelector("#list-table tbody");
        tbody.innerHTML = ""; // Limpia la tabla

        response.data.forEach((item) => {
          if (item.gce_estado === 1) {
            tbody.innerHTML += `<tr>
          <td>${item.gce_nombre_equipo}</td>
          <td>${item.gce_board}</td>
          <td>${item.gce_case}</td>
          <td>${item.gce_procesador}</td>
          <td>${item.gce_grafica}</td>
          <td>${item.gce_ram}</td>
          <td>${item.gce_disco_duro}</td>
          <td>${item.gce_teclado}</td>
          <td>${item.gce_mouse}</td>
          <td>${item.gce_pantalla}</td>
          <td>
            <div class="form-check form-switch">
              <input name="gce_id_estado" id="gce_id_estado" class="form-check-input" type="checkbox" role="switch" ${
                Number(item.gce_estado) === 1 ? "checked" : ""
              }
                onchange="Computador.updateStatus(${
                  item.gce_id
                }, event.target.checked)">
            </div>
          </td>
          <td>
          <button type="button" name="gce_id_edit" id="gce_id_edit" class="btn btn-outline-info fa fa-pencil edit" data-bs-toggle="modal" data-bs-target="#modalEdit"> 
          </button>
          </td>
          <td>
          <button type="button" name="gce_id_delete" id="gce_id_delete" class="btn btn-outline-danger fa fa-trash delete" onclick="Computador.deleteComputer(${
              item.gce_id
            })">
          </button>
          </td>
        </tr>`; // Añade la fila a la tabla
          } else {
            tbody.innerHTML += `<tr style="background-color:#FF4269">
            <td>${item.gce_nombre_equipo}</td>
            <td>${item.gce_board}</td>
            <td>${item.gce_case}</td>
            <td>${item.gce_procesador}</td>
            <td>${item.gce_grafica}</td>
            <td>${item.gce_ram}</td>
            <td>${item.gce_disco_duro}</td>
            <td>${item.gce_teclado}</td>
            <td>${item.gce_mouse}</td>
            <td>${item.gce_pantalla}</td>
            <td>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" ${
                  Number(item.gce_estado) === 1 ? "checked" : ""
                }
                  onchange="Computador.updateStatus(${
                    item.gce_id
                  }, event.target.checked)">
              </div>
            </td>
            <td>
              <button type="button" name="gce_id_edit" id="gce_id_edit" class="btn btn-outline-info fa fa-pencil edit" data-bs-toggle="modal" data-bs-target="#modalEdit"> 
              </button>
              </td>
              <td>
              <button type="button" name="gce_id_delete" id="gce_id_delete" class="btn btn-outline-danger fa fa-trash delete" onclick="Computador.deleteComputer(${
                  item.gce_id
                })">
              </button>
          </td>
          </tr>`; // Añade la fila a la tabla
          }
        });
      })
      .catch((error) => console.log("Ha ocurrido un error", error));
  }

  /** Registra un computador en la base de datos */
  static add = (event) => {
    event.preventDefault(); // Cancela el restablecimiento de la página

    /** Formulario de registro */
    const registerForm = event.target;

    const parameters = {
      gce_nombre_equipo: registerForm.querySelector(
        '[name="gce_nombre_equipo"]'
      ).value,
      gce_board: registerForm.querySelector('[name="gce_board"]').value,
      gce_case: registerForm.querySelector('[name="gce_case"]').value,
      gce_procesador: registerForm.querySelector('[name="gce_procesador"]')
        .value,
      gce_grafica: registerForm.querySelector('[name="gce_grafica"]').value,
      gce_ram: registerForm.querySelector('[name="gce_ram"]').value,
      gce_disco_duro: registerForm.querySelector('[name="gce_disco_duro"]')
        .value,
      gce_teclado: registerForm.querySelector('[name="gce_teclado"]').value,
      gce_mouse: registerForm.querySelector('[name="gce_mouse"]').value,
      gce_pantalla: registerForm.querySelector('[name="gce_pantalla"]').value,
      gce_estado: registerForm.querySelector('[name="gce_estado"]').value,
    };

    ApiRequest.post("Caracteristicas", "addOne", parameters)
      .then((response) => {
        console.log("Añadir", response, response.data);
        const formulario = document.querySelector("#register-form");
        formulario.reset(); // Limpia el formulario
        Computador.get(); //actualiza la tabla
        Swal.fire({
          icon: "success",
          title: "Saved!",
          text: "Info saved successfully!",
          confirmButtonColor: "green",
          confirmButtonText: "Ok!",
          showCancelButton: false,
          cancelButtonColor: "#d33",
          timer: 3000,
        });
      })
      .catch((error) => console.log("Ha ocurrido un error", error));
  };

  /**
   * Actualiza el estado de un computador
   * @param {number} id Identificador del computador
   * @param {status} boolean Nuevo estado
   */
  static updateStatus = (id, status) => {

     const parameters = {
       gce_nombre_equipo: querySelector(
         '[name="gce_nombre_equipo"]'
       ).value,
       gce_estado: querySelector('[name="gce_estado"]').value,
     };
 
     ApiRequest.post("Caracteristicas", "addOne", parameters)
       .then((response) => {
         console.log("Añadir", response, response.data);
         const formulario = document.querySelector("#register-form");
         formulario.reset(); // Limpia el formulario
         Computador.get(); //actualiza la tabla
         Swal.fire({
           icon: "success",
           title: "Saved!",
           text: "Info saved successfully!",
           confirmButtonColor: "green",
           confirmButtonText: "Ok!",
           showCancelButton: false,
           cancelButtonColor: "#d33",
           timer: 3000,
         });
       })
       .catch((error) => console.log("Ha ocurrido un error", error));
  };

  static deleteComputer = (computerid) => {
    Swal.fire({
      title: `Are you sure delete record id=${computerid}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const parameters = {
          gce_id: computerid,
        };
    
        ApiRequest.post("Caracteristicas", "delete", parameters)
          .then((response) => {
            console.log("delete", response);
          })
          .catch((error) => console.log("Ha ocurrido un error", error));
      }
    });
  };
}

// Evento que espera a que cargue el contenido HTML
document.addEventListener("DOMContentLoaded", () => {
  Computador.get(); // Actualiza la tabla de computadores
});

(function () {
  // Habilita el uso de las clases en el archivo HTML
  this.Computador = Computador;
  this.ApiRequest = ApiRequest;
}.apply(window));
