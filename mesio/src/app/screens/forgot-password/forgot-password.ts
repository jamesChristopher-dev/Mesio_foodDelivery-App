import {Component} from '@angular/core';

import {svg} from '@/app/svg';
import {RouterLink} from '@angular/router';
import {Header} from '@/app/components/header/header';
import {Button} from '@/app/components/button/button';
import {InputField} from '@/app/components/input-field/input-field';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';

@Component({
  selector: 'app-forgot-password',
  imports: [SafeAreaView, Header, InputField, Button, RouterLink],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {
  svg = svg;
}
