import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { InvestimentosComponent } from './investimentos/investimentos.component';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [InvestimentosComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TableModule
  ]
})
export class PagesModule { }
