# PremiumDrive

PremiumDrive is a responsive luxury car-rental website built with HTML, CSS, and vanilla JavaScript. Visitors can browse a catalogue of six luxury car brands, search by brand, sign in through a demo authentication flow, and try a mock checkout experience.

## Overview

The project has two parallel user journeys, implemented as separate static pages (no client-side routing):

1. **Guest journey** — [`index.html`](index.html) → [`cars.html`](cars.html) → [`sign.html`](sign.html) / [`signp.html`](signp.html). Visitors land on the public home page, browse the catalogue, and are prompted to sign in or register.
2. **Signed-in journey** — [`indexSignedIn.html`](indexSignedIn.html) → [`carsSignedIn.html`](carsSignedIn.html). Once "signed in", the user sees an account-aware layout and can open the checkout modal on a vehicle.

## Features

- Vehicle catalogue covering six brands: Mercedes, McLaren, Rolls-Royce, Porsche, Aston Martin, and Lamborghini
- Live brand/name search and filtering on the car catalogue page
- Vehicle cards with make, model, year, and daily rental price
- Responsive navigation and page layouts
- Demo login and registration pages ([`sign.html`](sign.html), [`signp.html`](signp.html))
- Demo checkout modal on the signed-in catalogue with card, PayPal, Apple Pay, and Google Pay tabs
- Scroll-triggered animations via ScrollReveal, icons via Boxicons and Ionicons

## Pages

| Page | Description |
| --- | --- |
| [`index.html`](index.html) | Public home page |
| [`cars.html`](cars.html) | Public vehicle catalogue with search |
| [`sign.html`](sign.html) | Demo login page |
| [`signp.html`](signp.html) | Registration page |
| [`indexSignedIn.html`](indexSignedIn.html) | Signed-in home page |
| [`carsSignedIn.html`](carsSignedIn.html) | Signed-in catalogue and checkout modal |

> An OTP verification page (`Otpverification.html`) exists in the `Final web project/` subfolder but is not currently wired up at the project root.

## Project Structure

```text
.
├── index.html            # Public home page
├── indexSignedIn.html    # Signed-in home page
├── cars.html              # Public vehicle catalogue
├── carsSignedIn.html      # Signed-in catalogue + checkout
├── sign.html               # Demo login
├── signp.html              # Registration
├── js.js                    # Shared client-side script
├── style.css                # Styles for index / indexSignedIn
├── carstyle.css             # Styles for cars / carsSignedIn
├── signIncss.css            # Styles for sign / signp
├── img/                      # Legacy image assets
├── new imgs/                  # Car renders used on the catalogue pages
├── images/images/               # Themed asset library (about, banners, book,
│                                 #  cars, chooseUs, contact, download, faq,
│                                 #  hero, logo, plan, team, testimonials)
└── Final web project/            # Older duplicate copy of the site
                                    #  (kept for reference; not the active version)
```

## Running the Project

This is a static website — no package installation, build tool, or backend is required.

### Option 1: Open in a browser

Open [`index.html`](index.html) directly in a web browser.

### Option 2: Use VS Code Live Server

1. Install the **Live Server** extension in VS Code.
2. Open the project folder.
3. Right-click [`index.html`](index.html).
4. Select **Open with Live Server**.

### Demo Login

The current demonstration login (in [`sign.html`](sign.html)) accepts:

```text
Email: daniel@gmail.com
Password: 7799
```

## Technologies and Assets

- HTML5, CSS3, and vanilla JavaScript
- [Boxicons](https://boxicons.com/) — loaded from jsDelivr CDN
- [ScrollReveal](https://scrollrevealjs.org/) — loaded from unpkg CDN
- [Ionicons](https://ionic.io/ionicons) — loaded from unpkg CDN
- Local image assets under `img/`, `new imgs/`, and `images/images/`

Boxicons, ScrollReveal, and Ionicons are loaded from external CDNs, so an internet connection is required for icons and animations to load correctly.

## Limitations

- Authentication uses a hardcoded, client-side demo credential — it is not secure and is for demonstration only.
- The checkout form does not process real payments or persist any transaction data.
- No backend or database is included; all vehicle data lives inline in [`cars.html`](cars.html) / [`carsSignedIn.html`](carsSignedIn.html).
- The `Final web project/` subfolder is a leftover duplicate of the whole site and can likely be removed once confirmed unneeded.

For production use, authentication and validation should be handled by a secure backend, and payments should be processed through a PCI-compliant payment provider.

## License

No license has been specified yet.
