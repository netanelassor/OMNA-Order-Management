import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderChangeLog } from '../models/order-log.model';
import { OrderStatus } from '../models/order-status-enum.model';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-change-order-status-modal',
  templateUrl: './change-order-status-modal.component.html',
  styleUrls: ['./change-order-status-modal.component.scss']
})
export class ChangeOrderStatusModalComponent implements OnInit {

  get OrderStatusEnum() { return OrderStatus; }
  changeOrderStatusForm: FormGroup;
  orderStatusList = [
    OrderStatus.Submitted,
    OrderStatus.Canceled,
    OrderStatus.Hold,
  ];
  isFormReady = false;

  constructor(
    public dialogRef: MatDialogRef<ChangeOrderStatusModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { order: Order, newStatus?: OrderStatus },
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.changeOrderStatusForm = this.formBuilder.group({
      orderStatus: [this.data.newStatus, [Validators.required]],
      changedBy: ['', [Validators.required]],
      statusComment: ['']
    });
    this.isFormReady = true;
    this.changeOrderStatusForm.controls.orderStatus.setValue(this.data.newStatus);
  }

  confirmChanges() {
    const newChangeLog: OrderChangeLog = {
      orderId: this.data.order.id,
      date: new Date(),
      changedBy: this.changeOrderStatusForm.controls.changedBy.value,
      comment: this.changeOrderStatusForm.controls.statusComment.value,
      status: this.changeOrderStatusForm.controls.orderStatus.value,
      customerId: this.data.order.customer.id,
      customerName: this.data.order.customer.name
    };
    this.dialogRef.close(newChangeLog);

    return newChangeLog;
  }

  closeModal(): void {
    this.dialogRef.close(null);
  }
}
