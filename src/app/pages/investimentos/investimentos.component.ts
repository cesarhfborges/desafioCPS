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

  investimentos: Investimento[];

  cols = [
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
    this.insestimentosService.getInvestimentos().subscribe(
      res => {
        console.log(res);
        this.investimentos = res;
      }
    );
  }

  open(rData: Investimento): void {
    console.log(rData.nome);
    if (rData.indicadorCarencia === 'N') {
      sessionStorage.setItem('data', JSON.stringify(rData));
      this.router.navigate(['/resgate-personalizado']);
    }
  }
}
