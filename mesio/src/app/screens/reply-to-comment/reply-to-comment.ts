import {Component} from '@angular/core';
import {Location} from '@angular/common';

import {svg} from '@/app/svg';
import {Button} from '@/app/components/button/button';
import {Header} from '@/app/components/header/header';
import {InputField} from '@/app/components/input-field/input-field';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';

@Component({
  selector: 'app-reply-to-comment',
  imports: [SafeAreaView, Header, InputField, Button],
  templateUrl: './reply-to-comment.html',
  styleUrl: './reply-to-comment.scss',
})
export class ReplyToComment {
  svg = svg;

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
