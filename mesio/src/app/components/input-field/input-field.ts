import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input-field',
  imports: [],
  templateUrl: './input-field.html',
  styleUrl: './input-field.scss',
})
export class InputField {
  @Input() value: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() containerStyle: {[key: string]: string} = {};
  @Input() onChange: ((value: string) => void) | undefined;

  setValue(): void {
    const result = window.prompt(`Enter your ${this.label}`, this.value);
    if (result !== null) {
      this.value = result;
    }
  }
}
