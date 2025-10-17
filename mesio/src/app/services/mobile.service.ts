import {Injectable, DestroyRef, inject, signal} from '@angular/core';
import {fromEvent} from 'rxjs';
import {distinctUntilChanged, map, startWith} from 'rxjs/operators';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Injectable({providedIn: 'root'})
export class MobileService {
  private readonly destroyRef = inject(DestroyRef);
  readonly isMobile = signal(false);

  constructor() {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') return;

    const check = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    fromEvent(window, 'resize')
      .pipe(
        startWith(0), // сразу вычислить текущее значение
        map(check),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(v => this.isMobile.set(v));
  }
}
