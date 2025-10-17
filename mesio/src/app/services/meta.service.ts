import {Injectable} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(private meta: Meta) {}

  setThemeColor(themeColor: string): void {
    this.meta.updateTag({name: 'theme-color', content: themeColor});
  }

  setBackgroundColor(backgroundColor: string): void {
    document.body.style.backgroundColor = backgroundColor;
  }
}
