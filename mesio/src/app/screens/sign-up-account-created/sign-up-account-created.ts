import {Component} from '@angular/core';

import {svg} from '@/app/svg';
import {Button} from '@/app/components/button/button';

@Component({
  selector: 'app-sign-up-account-created',
  imports: [Button],
  templateUrl: './sign-up-account-created.html',
  styleUrl: './sign-up-account-created.scss',
})
export class SignUpAccountCreated {
  svg = svg;
}
