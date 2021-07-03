import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deed-list',
  templateUrl: './deed-list.component.html',
  styleUrls: ['./deed-list.component.css']
})
export class DeedListComponent implements OnInit {
  selected: any;
  deeds: Array<{
    id: string,
    name: string,
    creation: string,
    color: string
  }> = [
    {id: 'test1', name: 'test1', creation: 'Jan 01, 2021', color: 'green'},
    {id: 'test2', name: 'test2', creation: 'Jan 01, 2021', color: 'green'},
    {id: 'test3', name: 'test3', creation: 'Jan 01, 2021', color: 'green'},
    {id: 'test4', name: 'test4', creation: 'Jan 01, 2021', color: 'green'},
    {id: 'test5', name: 'test5', creation: 'Jan 01, 2021', color: 'green'}
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
