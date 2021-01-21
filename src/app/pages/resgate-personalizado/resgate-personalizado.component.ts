import { Component, OnInit } from '@angular/core';
import {Investimento} from '../../shared/models/investimento';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resgate-personalizado',
  templateUrl: './resgate-personalizado.component.html',
  styleUrls: ['./resgate-personalizado.component.scss']
})
export class ResgatePersonalizadoComponent implements OnInit {

  investimento: Investimento;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('data')) {
      this.investimento = JSON.parse(sessionStorage.getItem('data')) as Investimento;
    } else {
      this.router.navigate(['/investimentos']);
    }
  }

}
