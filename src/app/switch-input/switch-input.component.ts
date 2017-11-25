import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'switch-input',
  templateUrl: './switch-input.component.html',
  styleUrls: ['./switch-input.component.scss']
})
export class SwitchInputComponent {

  isOn: boolean = true;
  @Input() value: boolean;
  @Output() input = new EventEmitter<boolean>();
  
  switched(isOn: boolean) {
    this.input.emit(isOn);
  }
}
