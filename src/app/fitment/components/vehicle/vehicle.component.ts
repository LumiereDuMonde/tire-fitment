import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  _selectData: string[] = [];
  @Input('selectData') set selectDataSet(value: string[]) {
    
    if (!value) return;
    this.columnWidth = value.some((item) => item.length !== 4) ? 2 : 4;    
    this._selectData = [...value];
  }
  @Output() onSelected = new EventEmitter<string>();  
  @Input() loading = false;
  @Input() error: string = null;
  columnWidth = 2;

  constructor() { }

  ngOnInit(): void {
  }

  itemSelected(value: string) {
    this.onSelected.emit(value);
  }

}
