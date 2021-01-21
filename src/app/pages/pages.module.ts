import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {InvestimentosComponent} from './investimentos/investimentos.component';
import {TableModule} from 'primeng/table';
import {ResgatePersonalizadoComponent} from './resgate-personalizado/resgate-personalizado.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [InvestimentosComponent, ResgatePersonalizadoComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TableModule,
    RouterModule,
  ]
})
export class PagesModule {
}
