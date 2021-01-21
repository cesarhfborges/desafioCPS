import {Component, OnInit} from '@angular/core';
import {InvestimentosService} from '../../shared/services/investimentos.service';
import {Investimento} from '../../shared/models/investimento';
import {Router} from '@angular/router';

@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.component.html',
  styleUrls: ['./investimentos.component.scss']
})
export class InvestimentosComponent implements OnInit {

  public loading = {
    investimentos: false,
  };

  public investimentos: Investimento[];

  public cols = [
    {field: 'nome', header: 'NOME', type: 'string'},
    {field: 'objetivo', header: 'OBJETIVO', type: 'string'},
    {field: 'saldoTotalDisponivel', header: 'SALDO TOTAL DISPONIVEL', type: 'money'},
  ];

  constructor(
    private insestimentosService: InvestimentosService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getInvestimentos();
  }

  getInvestimentos(): void {
    this.loading.investimentos = true;
    this.insestimentosService.getInvestimentos().subscribe(
      res => {
        this.investimentos = res;
        this.loading.investimentos = false;
      },
      error => {
        console.log(error);
        this.loading.investimentos = false;
      }
    );
  }

  open(rData: Investimento): void {
    if (rData.indicadorCarencia === 'N') {
      sessionStorage.setItem('data', JSON.stringify(rData));
      this.router.navigate(['/resgate-personalizado']);
    }
  }
}
