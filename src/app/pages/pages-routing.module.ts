import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InvestimentosComponent} from './investimentos/investimentos.component';
import {ResgatePersonalizadoComponent} from './resgate-personalizado/resgate-personalizado.component';

const routes: Routes = [
  {
    path: 'investimentos',
    component: InvestimentosComponent,
    data: {
      pageTitle: 'Investimentos'
    },
  },
  {
    path: 'resgate-personalizado',
    component: ResgatePersonalizadoComponent,
    data: {
      pageTitle: 'Resgate Personalizado'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
