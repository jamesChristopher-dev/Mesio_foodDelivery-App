import {RouterOutlet} from '@angular/router';
import {Component, inject} from '@angular/core';

import {MobileService} from './services/mobile.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'mesio';
  private readonly isMobileSvc = inject(MobileService);
  readonly isMobile = this.isMobileSvc.isMobile;
}
