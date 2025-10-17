import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

import {svg} from '@/app/svg';
import {Button} from '@/app/components/button/button';
import {Header} from '@/app/components/header/header';
import {InputField} from '@/app/components/input-field/input-field';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';

@Component({
  selector: 'app-sign-up',
  imports: [Button, Header, InputField, RouterLink, SafeAreaView],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
})
export class SignUp {
  svg = svg;
  agreeToTerms = false;

  setAgreeToTerms() {
    this.agreeToTerms = !this.agreeToTerms;
  }
}
