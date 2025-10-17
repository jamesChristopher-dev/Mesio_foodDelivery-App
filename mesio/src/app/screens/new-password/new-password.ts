import {Component} from '@angular/core';

import {svg} from '@/app/svg';
import {Header} from '@/app/components/header/header';
import {Button} from '@/app/components/button/button';
import {InputField} from '@/app/components/input-field/input-field';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';

@Component({
  selector: 'app-new-password',
  imports: [Header, SafeAreaView, InputField, Button],
  templateUrl: './new-password.html',
  styleUrl: './new-password.scss',
})
export class NewPassword {
  svg = svg;
}
