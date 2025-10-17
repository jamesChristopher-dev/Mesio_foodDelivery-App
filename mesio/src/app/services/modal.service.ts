import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpenSubject.asObservable();

  openModal(): void {
    this.isOpenSubject.next(true);
  }

  closeModal(): void {
    this.isOpenSubject.next(false);
  }

  toggleModal(): void {
    const currentState = this.isOpenSubject.value;
    this.isOpenSubject.next(!currentState);
  }
}
