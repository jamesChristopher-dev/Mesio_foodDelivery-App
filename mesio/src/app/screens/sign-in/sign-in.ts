import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';

import {svg} from '@/app/svg';
import {Button} from '@/app/components/button/button';
import {Header} from '@/app/components/header/header';
import {InputField} from '@/app/components/input-field/input-field';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';

@Component({
  selector: 'app-sign-in',
  imports: [InputField, Button, Header, RouterModule, SafeAreaView],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignIn {
  svg = svg;
  rememberMe = false;

  setRememberMe(): void {
    this.rememberMe = !this.rememberMe;
  }
}
