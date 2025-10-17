import {Routes} from '@angular/router';

import {Faq} from './screens/faq/faq';
import {Home} from './screens/home/home';
import {Dish} from './screens/dish/dish';
import {Shop} from './screens/shop/shop';
import {Order} from './screens/order/order';
import {SignIn} from './screens/sign-in/sign-in';
import {SignUp} from './screens/sign-up/sign-up';
import {Profile} from './screens/profile/profile';
import {Reviews} from './screens/reviews/reviews';
import {Wishlist} from './screens/wishlist/wishlist';
import {Checkout} from './screens/checkout/checkout';
import {Onboarding} from './screens/onboarding/onboarding';
import {OrderEmpty} from './screens/order-empty/order-empty';
import {ShopPopular} from './screens/shop-popular/shop-popular';
import {NewPassword} from './screens/new-password/new-password';
import {ShopCategory} from './screens/shop-category/shop-category';
import {MyPromocodes} from './screens/my-promocodes/my-promocodes';
import {OrderHistory} from './screens/order-history/order-history';
import {Notifications} from './screens/notifications/notifications';
import {WishlistEmpty} from './screens/wishlist-empty/wishlist-empty';
import {LeaveAReviews} from './screens/leave-a-reviews/leave-a-reviews';
import {ForgotPassword} from './screens/forgot-password/forgot-password';
import {ReplyToComment} from './screens/reply-to-comment/reply-to-comment';
import {ShopRecommended} from './screens/shop-recommended/shop-recommended';
import {OrderSuccessful} from './screens/order-successful/order-successful';
import {ConfirmationCode} from './screens/confirmation-code/confirmation-code';
import {MyPromocodesEmpty} from './screens/my-promocodes-empty/my-promocodes-empty';
import {SignUpAccountCreated} from './screens/sign-up-account-created/sign-up-account-created';
import {VerifyYourPhoneNumber} from './screens/verify-your-phone-number/verify-your-phone-number';
import {ForgotPasswordSentEmail} from './screens/forgot-password-sent-email/forgot-password-sent-email';

export const routes: Routes = [
  {
    path: '',
    component: Onboarding,
  },
  {
    path: 'faq',
    component: Faq,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'dish/:id',
    component: Dish,
  },
  {
    path: 'sign-in',
    component: SignIn,
  },
  {
    path: 'sign-up',
    component: SignUp,
  },
  {
    path: 'shop',
    component: Shop,
  },
  {
    path: 'reviews',
    component: Reviews,
  },
  {
    path: 'leave-a-review',
    component: LeaveAReviews,
  },
  {
    path: 'order-history',
    component: OrderHistory,
  },
  {
    path: 'shop-recommended',
    component: ShopRecommended,
  },
  {
    path: 'order',
    component: Order,
  },
  {
    path: 'order-empty',
    component: OrderEmpty,
  },
  {
    path: 'profile',
    component: Profile,
  },
  {
    path: 'shop-popular',
    component: ShopPopular,
  },
  {
    path: 'wishlist',
    component: Wishlist,
  },
  {
    path: 'new-password',
    component: NewPassword,
  },
  {
    path: 'my-promocodes',
    component: MyPromocodes,
  },
  {
    path: 'checkout',
    component: Checkout,
  },
  {
    path: 'order-successful',
    component: OrderSuccessful,
  },
  {
    path: 'reply-to-comment',
    component: ReplyToComment,
  },
  {
    path: 'shop-category/:category',
    component: ShopCategory,
  },
  {
    path: 'wishlist-empty',
    component: WishlistEmpty,
  },
  {
    path: 'notifications',
    component: Notifications,
  },
  {
    path: 'forgot-password',
    component: ForgotPassword,
  },
  {
    path: 'confirmation-code',
    component: ConfirmationCode,
  },
  {
    path: 'verify-your-phone-number',
    component: VerifyYourPhoneNumber,
  },
  {
    path: 'sign-up-account-created',
    component: SignUpAccountCreated,
  },
  {
    path: 'my-promocodes-empty',
    component: MyPromocodesEmpty,
  },
  {
    path: 'forgot-password-sent-email',
    component: ForgotPasswordSentEmail,
  },
];
