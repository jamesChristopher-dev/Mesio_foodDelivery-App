import {Component} from '@angular/core';

import {Header} from '@/app/components/header/header';
import {Button} from '@/app/components/button/button';
import {InputField} from '@/app/components/input-field/input-field';

@Component({
  selector: 'app-verify-your-phone-number',
  imports: [Header, Button, InputField],
  templateUrl: './verify-your-phone-number.html',
  styleUrl: './verify-your-phone-number.scss',
})
export class VerifyYourPhoneNumber {}
