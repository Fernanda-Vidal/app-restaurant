import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from './components/pages/cardapio/cardapio.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MeusPedidosComponent } from './components/pages/meus-pedidos/meus-pedidos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'meus-pedidos', component: MeusPedidosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
