import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {

  @Input() totalelements: number;
  @Input() currentpos: number;
  @Input() maxperpage: number;
  @Output() fromTo  = new EventEmitter<any>();
  totalElements: number[];

  ngOnInit() {
    this.totalElements = Array(this.totalelements).fill(0).map((x,i)=>i);
  }

  changePosition(newPosition: number) {
    this.fromTo.emit({from: newPosition * this.maxperpage, to: (newPosition + 1) * this.maxperpage - 1});
  }

}
