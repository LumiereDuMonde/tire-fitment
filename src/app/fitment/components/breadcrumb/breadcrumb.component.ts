import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() breadCrumbLabel: string = null;
  @Input() selected: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
