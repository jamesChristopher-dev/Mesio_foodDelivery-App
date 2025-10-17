import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Header} from '@/app/components/header/header';
import {Button} from '@/app/components/button/button';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';

@Component({
  selector: 'app-confirmation-code',
  standalone: true,
  imports: [Header, Button, SafeAreaView],
  templateUrl: './confirmation-code.html',
  styleUrl: './confirmation-code.scss',
})
export class ConfirmationCode {
  otpCode: string[] = ['', '', '', '', ''];

  constructor(private router: Router) {}

  handleCodeChange(index: number, value: string): void {
    const result = window.prompt('Enter code', value);
    if (result !== null) {
      const chars = result.split('');
      const newOtpCode = [...this.otpCode];

      for (let i = 0; i < chars.length && index + i < this.otpCode.length; i++) {
        newOtpCode[index + i] = chars[i];
      }

      this.otpCode = newOtpCode;
    }
  }

  resendOtp(): void {
    alert('Resend OTP logic goes here');
  }

  confirm(): void {
    this.router.navigate(['/sign-up-account-created']);
  }
}
