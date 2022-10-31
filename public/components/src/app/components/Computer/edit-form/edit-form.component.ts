import { Component, OnInit, Input } from '@angular/core';

import { AppService } from '../../../app.service';
import { Computer } from '../../../app.interface';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {
  constructor(
    private service: AppService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  @Input() computer:any = []

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    if (id) {
      this.service.getComputerByID(id).subscribe(
        (res) => {
          console.log(res);
          this.computer = res;
        },
        (err) => console.error('Hay un error al obtener la data')
      );
    }
  }

  actualizarComputer() {
    Swal.fire({
      title: `Are you sure edit this record?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service
          .updateComputer(this.computer.gce_id!, this.computer)
          .subscribe(
            (res) => {
              Swal.fire({
                icon: 'success',
                title: 'Edited!',
                text: 'Computer edited successfully!',
                confirmButtonColor: 'green',
                confirmButtonText: 'Ok!',
                showCancelButton: false,
                cancelButtonColor: '#d33',
                timer: 3000,
              });
              console.log(res);
              this.router.navigate(['/computers']);
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
}
