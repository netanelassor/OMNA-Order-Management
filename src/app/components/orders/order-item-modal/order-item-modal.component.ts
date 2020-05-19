import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from '../models/order.model';
import { OrderStatus } from '../models/order-status-enum.model';

@Component({
  selector: 'app-order-item-modal',
  templateUrl: './order-item-modal.component.html',
  styleUrls: ['./order-item-modal.component.scss']
})
export class OrderItemModalComponent implements OnInit {
  get OrderStatusEnum() { return OrderStatus; }

  constructor(
    public dialogRef: MatDialogRef<OrderItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { order: Order },
  ) { }

  ngOnInit(): void {
    console.log(this.data.order);
  }



  confirmChanges() {

    this.dialogRef.close();
  }

  closeModal(): void {
    this.dialogRef.close(null);
  }
}
