import {Component} from '@angular/core';

import {svg} from '@/app/svg';
import {Header} from '@/app/components/header/header';
import {SafeAreaView} from '@/app/components/safe-area-view/safe-area-view';

@Component({
  selector: 'app-faq',
  imports: [SafeAreaView, Header],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  svg = svg;
  openAccordions: Set<number> = new Set();

  faq = [
    {
      id: 1,
      question: 'How do I place an order?',
      answer:
        'Select a restaurant and dishes, add them to your cart, and proceed to checkout. Enter your address and payment method. After confirming, you can track your order status in the app.',
    },
    {
      id: 2,
      question: 'Can I pay for my order online?',
      answer:
        'Yes, you can pay online using a bank card, Apple Pay, Google Pay, or choose to pay cash to the courier upon delivery.',
    },
    {
      id: 3,
      question: 'How do I use a promo code?',
      answer:
        'Enter your promo code in the special field at checkout. If the promo code is valid, the discount will be applied automatically.',
    },
    {
      id: 4,
      question: 'How can I track my courier?',
      answer:
        'After placing your order, you will see the courier’s location on the map and can track their route in real time.',
    },
    {
      id: 5,
      question: 'What should I do if my order is delayed?',
      answer:
        'If your order is delayed, contact support via the in-app chat or by phone listed in the "Contacts" section. We will help resolve your issue.',
    },
    {
      id: 6,
      question: 'Can I cancel my order?',
      answer:
        'You can cancel your order before the restaurant starts preparing it. Go to "My Orders" and select the order you want to cancel.',
    },
    {
      id: 7,
      question: 'How do I leave feedback about my order?',
      answer:
        'After receiving your order, you can leave feedback and a rating in the "My Orders" section. Your opinion is important and helps us improve our service!',
    },
  ];

  toggleAccordion(orderId: number): void {
    if (this.openAccordions.has(orderId)) {
      this.openAccordions.delete(orderId);
    } else {
      this.openAccordions.add(orderId);
    }
  }
}
