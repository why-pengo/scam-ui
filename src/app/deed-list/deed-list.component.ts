import { Component, OnInit } from '@angular/core';
import {ClrDatagridStateInterface} from '@clr/angular';
import { Deed } from '../models/deed';

@Component({
  selector: 'app-deed-list',
  templateUrl: './deed-list.component.html',
  styleUrls: ['./deed-list.component.css']
})
export class DeedListComponent implements OnInit {
  loading = true;
  deeds: Deed[] = [];
  selected: Deed[] = [];

  constructor() {
    console.log(`constructor`);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.deeds.push(
      {id: 'test1', name: 'test1', creation: 'Jan 01, 2021', color: 'green'},
      {id: 'test2', name: 'test2', creation: 'Jan 01, 2021', color: 'green'},
      {id: 'test3', name: 'test3', creation: 'Jan 01, 2021', color: 'green'},
      {id: 'test4', name: 'test4', creation: 'Jan 01, 2021', color: 'green'},
      {id: 'test5', name: 'test5', creation: 'Jan 01, 2021', color: 'green'},
      {id: 'test6', name: 'test6', creation: 'Jan 01, 2021', color: 'green'},
      {id: 'test7', name: 'test7', creation: 'Jan 01, 2021', color: 'green'},
      {id: 'test8', name: 'test8', creation: 'Jan 01, 2021', color: 'green'},
      {id: 'test9', name: 'test9', creation: 'Jan 01, 2021', color: 'green'},
      {id: 'test10', name: 'test10', creation: 'Jan 01, 2021', color: 'green'},
      {id: 'test11', name: 'test11', creation: 'Jan 01, 2021', color: 'green'},
    );
  }

  onDelete(): void {
    console.log(`delete`);
  }

  refresh(state: ClrDatagridStateInterface): void {
    this.loading = false;
  }
}
