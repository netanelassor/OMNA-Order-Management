import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationItemComponent } from './components/notifications/notification-item/notification-item.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import {  OrderItemModalComponent } from './components/orders/order-item-modal/order-item-modal.component';
import { OrderManagementBoardComponent } from './components/orders/order-management-board/order-management-board.component';
import { OrderManagementListComponent } from './components/orders/order-management-list/order-management-list.component';
import { MenuSidebarComponent } from './controls/menu-sidebar/menu-sidebar.component';
import { MaterialModule } from './shared/material/material.module';
import { OrderStatusEnumPipe } from './shared/pipes/order-status-enum.pipe';
import { ChangeOrderStatusModalComponent } from './components/orders/change-order-status-modal copy/change-order-status-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderManagementBoardComponent,
    OrderManagementListComponent,
    NotificationsComponent,
    OrderStatusEnumPipe,
    NotificationItemComponent,
    ChangeOrderStatusModalComponent,
    OrderItemModalComponent,
    MenuSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
