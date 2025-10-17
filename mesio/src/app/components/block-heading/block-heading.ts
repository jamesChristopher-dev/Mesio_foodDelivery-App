import {NgStyle} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-block-heading',
  imports: [RouterLink, NgStyle],
  templateUrl: './block-heading.html',
  styleUrl: './block-heading.scss',
})
export class BlockHeading {
  @Input() title: string = '';
  @Input() routerLink: any[] | string = '';
  @Input() containerStyle: {[key: string]: string} = {};
}
