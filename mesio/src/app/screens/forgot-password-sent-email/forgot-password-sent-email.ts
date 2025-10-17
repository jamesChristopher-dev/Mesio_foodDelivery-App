import {Component} from '@angular/core';

import {svg} from '@/app/svg';
import {Button} from '@/app/components/button/button';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';

@Component({
  selector: 'app-forgot-password-sent-email',
  imports: [Button, SafeAreaView],
  templateUrl: './forgot-password-sent-email.html',
  styleUrl: './forgot-password-sent-email.scss',
})
export class ForgotPasswordSentEmail {
  svg = svg;
}
