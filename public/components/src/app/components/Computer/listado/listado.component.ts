import { Component, OnInit } from '@angular/core';

import { AppService } from '../../../app.service';
import { Computer } from '../../../app.interface';

import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {
  public computadores: Computer[] = [];

  public computerForm!: FormGroup;

  ngOnInit(): void {
    this.computerForm = this.initForm();
  }

  constructor(private service: AppService, private readonly fb: FormBuilder) {
    this.getComputers();
  }

  initForm(): FormGroup {
    return this.fb.group({
      gce_nombre_equipo: ['', [Validators.required]],
      gce_board: ['', [Validators.required]],
      gce_case: ['', [Validators.required]],
      gce_procesador: ['', [Validators.required]],
      gce_grafica: ['', [Validators.required]],
      gce_ram: ['', [Validators.required]],
      gce_disco_duro: ['', [Validators.required]],
      gce_teclado: ['', [Validators.required]],
      gce_mouse: ['', [Validators.required]],
      gce_pantalla: ['', [Validators.required]],
      gce_estado: ['', [Validators.required]],
    });
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

  submitForm(): void {
    // if (this.computer.gce_nombre_equipo.trim().length === 0) {
    //   return;
    // }
    this.service.createComputer(this.computerForm.value).subscribe(
      (res) => {
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
    this.service.changeStatusComputer(id, this.computerForm.value).subscribe(
      (res) => {
        this.getComputers();
        console.log(res);
      },
      (err) => console.error('Hay un error al cambiar el status')
    );
  }
}
