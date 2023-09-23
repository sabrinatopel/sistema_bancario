import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Conta } from 'src/app/shared/models/conta';
import { ContasService } from 'src/app/shared/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listagem-contas',
  templateUrl: './listagem-contas.component.html',
  styleUrls: ['./listagem-contas.component.scss'],
})
export class ListagemContasComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'numero',
    'agencia',
    'saldo',
    'cliente',
    'funcoes',
  ];
  dataSource = new MatTableDataSource<Conta>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private contaService: ContasService) {}

  ngAfterViewInit() {
    this.listarContas(1, 5);
  }

  listarContas(page: number, pageSize: number) {
    this.contaService.listar_paginado(page, pageSize).subscribe((contas) => {
      this.dataSource.data = contas;
    });
  }

  onPageChange(event: PageEvent) {
    const pageIndex = event.pageIndex + 1;
    const pageSize = event.pageSize;
    this.listarContas(pageIndex, pageSize);
  }

  deletarCLiente(id: number) {
    Swal.fire({
      title: 'Você tem certeza que deseja deletar?',
      text: 'Não tem como reverter essa ação',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: 'grey',
      confirmButtonText: 'Deletar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.contaService.removeById(id).subscribe({
          next: () => {
            Swal.fire({
              icon: 'success',
              title: 'Sucesso',
              text: 'Conta deletado com sucesso!',
              showConfirmButton: false,
              timer: 1500,
            });
            this.listarContas(1, 5);
          },
          error: (error) => {
            console.error(error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Erro ao deletar conta!',
            });
          },
        });
      }
    });
  }
}
