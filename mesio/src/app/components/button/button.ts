import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule, RouterLink],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() label!: string;
  @Input() colorScheme: 'primary' | 'secondary' = 'primary';
  @Input() containerStyle: {[key: string]: any} = {};
  @Output() onClick = new EventEmitter<void>();
  @Input() routerLink: string | string[] | undefined;
}
