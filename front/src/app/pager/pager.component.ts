import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent {

  @Input() totalelements: number;
  @Input() currentpos: number;
  @Input() maxperpage: number;
  @Output() fromTo  = new EventEmitter<any>();
  totalElements: number[];

  // Répond lorsque Angular initialise le lien sur les données en entrée (Input) ou leur changement (Lifecyclehook).
  ngOnChanges(changes: SimpleChanges) {
    this.totalElements = Array(this.totalelements).fill(0).map((x,i)=>i);
  }

  changePosition(newPosition: number) {
    this.fromTo.emit({from: newPosition * this.maxperpage, to: (newPosition + 1) * this.maxperpage - 1});
  }

}
