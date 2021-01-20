import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BaseLayoutComponent} from './layout/base-layout/base-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/investimentos',
    pathMatch: 'full'
  },
  {
    path: '',
    component: BaseLayoutComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    // canActivate: [AuthGuardService],
    // canActivateChild: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
