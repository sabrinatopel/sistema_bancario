import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/shared/models/cliente';
import { Conta } from 'src/app/shared/models/conta';
import { ClientesService } from 'src/app/shared/services/clientes.service';
import { ContasService } from 'src/app/shared/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-conta',
  templateUrl: './cadastro-conta.component.html',
  styleUrls: ['./cadastro-conta.component.scss'],
})
export class CadastroContaComponent implements OnInit {
  editar: any;
  formGroup: FormGroup;
  clientesList: any;
  constructor(
    private clienteService: ClientesService,
    private contaService: ContasService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formGroup = new FormGroup({
      id: new FormControl(null),
      numero: new FormControl('', Validators.required),
      agencia: new FormControl('', Validators.required),
      saldo: new FormControl('', Validators.required),
      cliente: new FormControl('', Validators.required),
    });
    this.editar = false;
  }

  ngOnInit(): void {
    this.getAll();

    if (this.route.snapshot.params['id']) {
      this.editar = true;
      this.contaService
        .getById(this.route.snapshot.params['id'])
        .subscribe((conta: any) => {
          this.formGroup.patchValue(conta);
        });
    }
  }

  cadastrar() {
    const conta: Conta = this.formGroup.value;
    if (this.editar) {
      this.contaService.updateById(this.route.snapshot.params['id'], conta).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: 'Conta atualizado com sucesso!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigate(['/conta']);
        },
        error: (error: any) => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Erro ao atualizar conta!',
          });
        },
      });
    } else {
      this.contaService.create(conta).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: 'Conta cadastrado com sucesso!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigate(['/conta']);
        },
        error: (error: any) => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Erro ao cadastrar conta!',
          });
        },
      });
    }
  }
  getAll() {
    this.clienteService
      .getAll()
      .subscribe((conta:any[]) => {
        this.clientesList = conta
      });
  }
}
