# Mesio — Food Delivery React Native Template (README — Ready to Paste)

> **One-line pitch:** Mesio is a production-ready, conversion-focused React Native food delivery template — built to ship mobile apps for restaurants, marketplaces and delivery platforms quickly, with polished UI, checkout flows, and plug-and-play integrations.

## Project Overview

Mesio is a fully designed React Native template for food ordering and delivery apps. It contains menu screens, cart/checkout, filters, promos, order history, profile and notifications — all wired with polished UX patterns ideal for conversion: quick ordering, upsells, and simple repeat ordering. Use it as an MVP to test product-market fit or as a foundation for a multi-restaurant marketplace.

---

## Screenshots

(Place these images in your repo `assets/screenshots` and reference them here.)
![1](https://github.com/user-attachments/assets/85bfbd4a-57c3-475f-bcd4-4ae0d0063cdb)
![2](https://github.com/user-attachments/assets/b1c3b9c0-661e-47e8-9c89-9bebe2dd15ef)
![3](https://github.com/user-attachments/assets/b2a66cde-f7d9-49f7-8ac3-326e25a737c2)
![4](https://github.com/user-attachments/assets/dfbe5c5d-c997-4380-93dd-6f41ffcbc444)
![5](https://github.com/user-attachments/assets/d8f26c72-6c63-4436-8b89-0b272839d87f)

---

## Key Selling Points

* **Ship fast:** UI + ordering UX already built — reduce frontend dev 50–80%.
* **Conversion-first flows:** clear CTAs, upsell placements, promo code flow, one-tap reorder.
* **Mobile-first performance:** optimized lists, lazy images, and smooth animations.
* **Extensible:** architected to plug into any backend (REST/GraphQL, Firebase, Supabase).
* **Production-ready checklist:** push notifications, payments, and analytics guidance included.

---

## What’s Included

* Full set of mobile screens: Home, Restaurant list, Menu, Cart, Checkout, My Orders, Profile, Notifications, Filters.
* Reusable UI components: Cards, Lists, Badges, Form elements, Bottom navigation.
* Demo data & JSON examples for quick prototyping.
* Basic auth flows (email/phone) and profile editing UI.
* Documentation & setup scripts to run locally.

---

## Tech Stack & Architecture

* **Framework:** React Native (works with either React Native CLI or Expo — check `package.json` in your copy).
* **Navigation:** React Navigation (stack + bottom tabs).
* **State management:** Redux / Context (depending on template variant) or local state for small apps.
* **Networking:** axios / fetch (REST).
* **Optional:** Firebase / Supabase for auth & realtime features.
* **Native modules:** Push notifications (FCM/APNs), device permissions, image handling.

---

## Quickstart — Run Locally

> **Note:** Check `package.json` to confirm whether the template uses Expo or bare RN. Below are both flows.

### 1) Common steps

```bash
# Clone repo
git clone https://github.com/your-username/mesio-app.git
cd mesio-app

# Install deps
npm install
# or
yarn
```

### 2) Expo (if `expo` is in dependencies)

```bash
# start dev server
npx expo start
# then use Expo Go on device or simulators
```

### 3) React Native CLI (if bare RN)

```bash
# iOS
npx pod-install ios
npx react-native run-ios

# Android
npx react-native run-android
```

### 4) Environment

* Copy `.env.example` → `.env` and fill keys: API_URL, FIREBASE_*, STRIPE_KEY, FCM_KEY, etc.
* For Android emulator, ensure Google Play services present for FCM.
* For iOS, ensure correct bundle id and provisioning profile.

---

## iOS & Android — Build & Release Notes

* **iOS**

  * Configure App ID, Push Notification capabilities, and set up APNs (key or cert).
  * Use Xcode for code signing; consider Fastlane for automated builds.
  * Test on TestFlight before App Store submission.

* **Android**

  * Update `applicationId` and version codes.
  * Add `google-services.json` for Firebase.
  * Generate a signing key and configure `gradle.properties` for release signing.

* **Tips**

  * Use EAS Build (Expo) or Fastlane to automate builds and uploads.
  * Keep secrets out of VCS; use secret storage in CI (GitHub Secrets or HashiCorp Vault).

---

## Recommended Integrations (Production)

* **Payments:** Stripe for cards (mobile SDKs), or Apple Pay / Google Pay via Stripe. Consider RevenueCat for in-app purchases/subscriptions.
* **Notifications:** Firebase Cloud Messaging (FCM) + APNs. For advanced routing, use OneSignal or Braze.
* **Auth / Realtime:** Firebase Auth + Firestore or Supabase (auth, realtime).
* **Storage & Media:** Cloudinary or S3 for images and CDN delivery.
* **Analytics:** Firebase Analytics + Mixpanel/Amplitude for product funnels.
* **Error tracking:** Sentry for React Native.

---

## Suggested Backend & Data Model (minimal)

A small RESTful backend is enough to get started. Example resources:

* `/restaurants` — list, filters, location.
* `/menus/:restaurantId` — categories, items, modifiers.
* `/cart` — per-user cart persistence.
* `/orders` — create, status updates, history.
* `/users` — profile, addresses, payment methods.
* `/promocodes` — validation & redemption.

**Example `Order` model**

```json
{
  "id": "uuid",
  "userId": "uuid",
  "items": [{"menuItemId":"", "qty": 2, "price": 15}],
  "total": 45,
  "status": "pending|accepted|preparing|on_the_way|delivered|cancelled",
  "createdAt": "iso"
}
```

---

## Admin / Merchant Panel (Plan)

Ship the mobile app with a lightweight admin/merchant panel that lets restaurants:

* Accept/decline orders and update statuses.
* Manage menu items, prices, and availability.
* View orders & revenue reports.
* Manage promotions & coupons.

**Quick options:** Build a React/Next.js admin panel or use Firebase + custom admin pages. For faster delivery, use a low-code dashboard (Retool, Forest Admin) connected to your API.

---

## Customization Guide (Fast wins)

* Change brand colors and fonts in a single theme file (`/src/theme` or `constants`).
* Replace demo images with real assets and enable adaptive `srcset`/responsive images.
* Hook the cart and checkout to a working payments sandbox (Stripe test keys) before going live.
* Localize strings (i18n) using `react-i18next` or similar — important for marketplaces.

---

## Performance, Testing & QA

* Use FlatList with `keyExtractor`, `getItemLayout`, and `shouldComponentUpdate`-style optimizations.
* Lazy-load images and use low-res placeholders.
* Implement unit tests for pure functions (Jest) and E2E tests with Detox or Appium for flows (order -> checkout -> order history).
* Test on physical devices regularly (not just simulators) — GPS, push, and camera behave differently.

---

## CI / CD & Delivery Pipeline

* **CI:** GitHub Actions or GitLab to run linting, unit tests, and build checks.
* **CD:** Use Fastlane or EAS to produce signed builds and publish to TestFlight / Play Console.
* Example pipeline:

  1. `lint` → `test` → `build` (android/ios) → upload artifacts → `deploy` to staging.

---

## Security & Privacy Checklist

* Use HTTPS for all API calls.
* Never embed secret keys in the app — use your backend to request ephemeral tokens.
* Store sensitive data securely (Keychain on iOS, EncryptedSharedPreferences on Android).
* Implement rate-limiting and input validation server-side.
* Provide a privacy policy & in-app consent for data and push notifications.

---

## Analytics & KPI Tracking (what to measure)

* Conversion: sessions → add-to-cart → checkout completion.
* Retention: 1-day, 7-day, 30-day active users.
* Average order value (AOV) and repeat purchase rate.
* Funnel drop-off points (menu -> cart, cart -> checkout, checkout -> paid).
* Push notification conversions and coupon redemptions.

---

## How to Pitch This Project to Clients / Recruiters

* **For clients:** “Ship a branded mobile ordering app in weeks, not months — Mesio gives you UI, UX, and the funnel to start processing orders and collecting revenue quickly.”
* **For recruiters:** “Led the mobile product (React Native) for a marketplace-ready food app — responsible for conversion-focused UX, payment flows, and integrations with push & analytics.”

Suggested bullets you can copy to proposals:

* Reduced frontend build time by 60% using production UI templates.
* Built conversion-first flows: persistent cart, promos, and 1-tap reorder.
* Implemented analytics for funnel optimization pre-launch.

---

## Project Structure (example)

```
/src
 ├─ components/      # reusable UI components
 ├─ screens/         # Home, Restaurant, Menu, Cart, Orders, Profile
 ├─ navigation/      # react-navigation stacks & tabs
 ├─ services/        # api clients, auth, payments
 ├─ store/           # redux or context
 ├─ assets/          # images/fonts
 ├─ theme/           # colors, spacing, fonts
 └─ utils/           # helpers
package.json
README.md
.env.example
```

---

## Contact / Author

**Author:** Your Name

* GitHub: `https://github.com/your-username`
* Email: `your.email@example.com`

*(Replace placeholders before publishing.)*

---

## License

Specify a license that matches how you want to distribute this template (MIT, commercial, etc.). Example:

```
MIT License — see LICENSE file for details.
```

---

## Next steps I can generate for you (pick one)

* A ready-to-paste `package.json` with dev scripts and recommended dependencies.
* A sample `server.js` (Express) with minimal API endpoints for restaurants, menus and orders (mock data).
* A GitHub Actions workflow that builds and runs tests for Android/iOS and optionally deploys artifacts to storage.
* A one-week sprint checklist to ship a client-ready MVP (day-by-day).
