import {CommonModule} from '@angular/common';
import {Component, ChangeDetectorRef, DestroyRef, inject} from '@angular/core';
import {trigger, transition, style, animate, state} from '@angular/animations';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

import {ModalService} from '@/app/services/modal.service';

@Component({
  selector: 'app-burger-modal',
  imports: [CommonModule],
  templateUrl: './burger-modal.html',
  styleUrl: './burger-modal.scss',
  animations: [
    trigger('slideInOut', [
      state('in', style({transform: 'translateX(0)', opacity: 1})),
      state('out', style({transform: 'translateX(-100%)', opacity: 0})),
      transition('out => in', [animate('300ms ease-out')]),
      transition('in => out', [animate('300ms ease-in')]),
    ]),
  ],
})
export class BurgerModal {
  isOpen = false;
  private destroyRef = inject(DestroyRef);

  menuItems = [
    {
      id: 1,
      titleLine1: '27 Division St, New York,',
      titleLine2: 'NY 10002, USA',
    },
    {
      id: 2,
      titleLine1: 'mesiosale@mail.com',
      titleLine2: 'mesiosupport@mail.com',
    },
    {
      id: 3,
      titleLine1: '+17  123456789',
      titleLine2: '+17  987654321',
    },
  ];

  constructor(
    private modalService: ModalService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.modalService.isOpen$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(isOpen => {
      this.isOpen = isOpen;
      this.cdr.detectChanges();
    });
  }

  closeModal(): void {
    this.modalService.closeModal();
  }

  openModal(): void {
    this.modalService.openModal();
  }
}
