import { Component, OnInit } from '@angular/core';

import { AppService } from '../../../app.service';
import { Computer } from '../../../app.interface';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {
  ngOnInit(): void {}

  public computadores: Computer[] = [];

  computer: Computer = {
    gce_nombre_equipo: '',
    gce_board: '',
    gce_case: '',
    gce_procesador: '',
    gce_grafica: '',
    gce_ram: '',
    gce_disco_duro: '',
    gce_teclado: '',
    gce_mouse: '',
    gce_pantalla: '',
    gce_estado: 1,
  };

  constructor(private service: AppService) {
    this.getComputers();
  }

  getComputers() {
    this.service.getComputers().subscribe(
      (res) => {
        this.computadores = res;
        // console.log(this.computadores);
      },
      (err) => console.error('Hay un error al obtener la data')
    );
  }

  submitComputer() {
    if (this.computer.gce_nombre_equipo.trim().length === 0) {
      return;
    }
    this.service.createComputer(this.computer).subscribe(
      (res) => {
        this.computer = res;
        Swal.fire({
          icon: 'success',
          title: 'Created!',
          text: 'Computer created successfully!',
          confirmButtonColor: 'green',
          confirmButtonText: 'Ok!',
          showCancelButton: false,
          cancelButtonColor: '#d33',
          timer: 3000,
        });
        this.computer = {
          gce_nombre_equipo: '',
          gce_board: '',
          gce_case: '',
          gce_procesador: '',
          gce_grafica: '',
          gce_ram: '',
          gce_disco_duro: '',
          gce_teclado: '',
          gce_mouse: '',
          gce_pantalla: '',
          gce_estado: 1,
        };
        this.getComputers();
      },
      (err) => console.error('Hay un error al obtener la data')
    );
  }

  eliminarComputer(id: number) {
    Swal.fire({
      title: `Are you sure delete record id=${id}?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteComputer(id).subscribe(
          (res) => {
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Computer deleted successfully!',
              confirmButtonColor: 'green',
              confirmButtonText: 'Ok!',
              showCancelButton: false,
              cancelButtonColor: '#d33',
              timer: 3000,
            });
            this.getComputers();
          },
          (err) => {
            Swal.fire({
              icon: 'error',
              title: 'ERROR!',
              text: err,
              confirmButtonColor: 'green',
              confirmButtonText: 'Ok!',
              showCancelButton: false,
              cancelButtonColor: '#d33',
              timer: 3000,
            });
          }
        );
      }
    });
  }

  changeStatus(id: number) {
    this.service.changeStatusComputer(id, this.computer.gce_estado).subscribe(
      (res) => {
        this.getComputers();
        console.log(res);
      },
      (err) => console.error('Hay un error al cambiar el status')
    );
  }
}
