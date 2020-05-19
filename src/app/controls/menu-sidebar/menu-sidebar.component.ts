import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/shared/models/menu-item.model';
@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      title: 'Dashboard',
      routeParams: '',
      routeUrl: '/dashboard',
      iconName: ''
    },
    {
      title: 'Open Orders',
      routeParams: '/0',
      routeUrl: '/order-management',
      iconName: ''
    },
    {
      title: 'Submitted Orders',
      routeParams: '/1',
      routeUrl: '/order-management',
      iconName: ''
    },
    {
      title: 'Canceled Orders',
      routeParams: '/2',
      routeUrl: '/order-management',
      iconName: ''
    }
    ,
    {
      title: 'Orders on Holds',
      routeParams: '/3',
      routeUrl: '/order-management',
      iconName: ''
    }
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}
