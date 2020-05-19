import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderManagementListComponent } from './components/orders/order-management-list/order-management-list.component';
import { OrderManagementBoardComponent } from './components/orders/order-management-board/order-management-board.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'order-management/:status', component: OrderManagementListComponent, pathMatch: 'full' },
  { path: 'dashboard', component: OrderManagementBoardComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
