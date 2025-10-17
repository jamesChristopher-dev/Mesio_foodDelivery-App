import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

export interface VerificationState {
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class VerificationService {
  private initialState: VerificationState = {
    isEmailVerified: false,
    isPhoneVerified: false,
  };

  private verificationState = new BehaviorSubject<VerificationState>(
    this.initialState,
  );
  verificationState$ = this.verificationState.asObservable();

  setVerificationState(state: VerificationState): void {
    this.verificationState.next(state);
  }

  getVerificationState(): VerificationState {
    return this.verificationState.value;
  }

  setEmailVerified(): void {
    const currentState = this.verificationState.value;
    this.setVerificationState({
      ...currentState,
      isEmailVerified: true,
    });
  }

  setPhoneVerified(): void {
    const currentState = this.verificationState.value;
    this.setVerificationState({
      ...currentState,
      isPhoneVerified: true,
    });
  }
}
