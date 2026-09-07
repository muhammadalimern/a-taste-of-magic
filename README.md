# Culinary Canvas Pro

Build a complete, premium, modern restaurant website that looks like a real-world professional business website suitable for presenting to a paying client.

The website must feel visually impressive from the first screen, with strong typography, premium spacing, polished cards, elegant interactions, excellent mobile responsiveness, and a professional restaurant brand identity.

IMPORTANT: This is a FRONTEND-ONLY project.

==================================================

1. MANDATORY TECH STACK

==================================================

Use ONLY:

- React

- Vite

- JavaScript

- JSX

- Tailwind CSS

STRICTLY DO NOT USE:

- TypeScript

- TSX

- Next.js

- Backend

- Node/Express API

- MongoDB

- Supabase

- Firebase

- Authentication

- Database

- n8n

- Webhooks

- External APIs

- Server-side functionality

All functionality must be handled entirely on the frontend using React state, props, reusable components, and browser localStorage where persistence is needed.

Use .js and .jsx files only.

Do not create .ts or .tsx files.

==================================================

2. CORE GOAL

==================================================

Create a restaurant website that looks like something a professional web developer would deliver to a real restaurant client.

The website should NOT look like a basic student project or generic template.

The design should immediately communicate:

- Premium

- Modern

- Elegant

- Trustworthy

- Welcoming

- Professional

- High-quality food

- Strong visual hierarchy

Create an original restaurant brand. Do not copy an existing restaurant website or brand.

Use realistic placeholder restaurant content and professional food imagery.

==================================================

3. VISUAL DESIGN DIRECTION

==================================================

Create a sophisticated restaurant visual identity.

Design principles:

- Premium typography

- Strong hero section

- Generous whitespace

- Elegant section spacing

- High-quality food presentation

- Modern cards

- Subtle shadows

- Rounded corners where appropriate

- Strong CTA buttons

- Beautiful hover states

- Smooth but lightweight transitions

- Excellent visual hierarchy

- Consistent spacing system

- Professional navigation

- Premium footer

Avoid:

- Generic template appearance

- Excessive gradients

- Excessive glassmorphism

- Huge text that damages mobile UX

- Excessive animations

- Flashy unnecessary effects

- Cluttered layouts

- Too many colors

- Excessive image usage

Use a sophisticated restaurant color palette with excellent contrast.

Make the website look expensive without making it visually complicated.

==================================================

4. RESPONSIVE DESIGN

==================================================

The website must be fully responsive.

Optimize specifically for:

- Desktop

- Laptop

- Tablet

- Mobile

Mobile experience is extremely important.

On mobile:

- Navbar must work perfectly

- Navigation menu must be easy to open and close

- Buttons must be touch-friendly

- Cards must resize properly

- Cart must be easy to access

- Forms must be easy to complete

- Images must not overflow

- Text must remain readable

- No horizontal scrolling

- No broken layouts

Test every major section conceptually for mobile responsiveness.

==================================================

5. GLOBAL NAVIGATION

==================================================

Create a sticky responsive navbar.

Navbar should include:

- Restaurant logo/name

- Home

- Menu

- About

- Gallery

- Contact

- FAQ

- Reserve a Table CTA

- Shopping cart icon

Cart icon must display a dynamic item count badge.

On mobile:

- Use a hamburger menu

- Menu opens/closes smoothly

- Clicking a navigation item closes the mobile menu

- Navigation remains easy to use

Navbar should become slightly more compact/elegant when scrolling.

==================================================

6. HOME PAGE

==================================================

Create a visually impressive homepage.

Hero section:

- Large compelling headline

- Short restaurant description

- Primary CTA: "Explore Menu"

- Secondary CTA: "Reserve a Table"

- Premium restaurant/food visual

- Small supporting information such as opening hours or location

- Strong visual hierarchy

Example messaging style:

"Where Every Meal Becomes a Memory"

Do not copy this exact text if a better original restaurant identity can be created.

Hero should immediately make the visitor want to explore the restaurant.

==================================================

7. POPULAR DISHES

==================================================

Create a "Chef's Favorites" or "Popular Dishes" section.

Display several featured dishes.

Each dish card should include:

- Image

- Dish name

- Description

- Price

- Rating

- Category

- Add to Cart button

Add subtle hover interactions.

The Add to Cart button must actually work.

==================================================

8. RESTAURANT HIGHLIGHTS

==================================================

Create a premium "Why Choose Us" section.

Include items such as:

- Fresh ingredients

- Expert chefs

- Authentic flavors

- Fast service

- Warm atmosphere

- Quality guaranteed

Use elegant icons.

Use SVG/CSS icons or a lightweight icon library only.

==================================================

9. HOW IT WORKS

==================================================

Create a simple visual section:

1. Explore the Menu

2. Add Your Favorites

3. Review Your Cart

4. Place Your Order

This section should explain the frontend ordering experience.

==================================================

10. ABOUT PREVIEW

==================================================

Create a beautiful short About section on the homepage.

Include:

- Restaurant story

- Food philosophy

- Experience

- CTA to About page

Use a balanced image/text layout.

==================================================

11. TESTIMONIALS

==================================================

Create a premium customer reviews section.

Include 3–5 realistic testimonials.

Each testimonial can include:

- Customer name

- Rating

- Review

- Optional avatar

Use a clean carousel or responsive cards.

Do not use heavy carousel libraries if unnecessary.

==================================================

12. GALLERY PREVIEW

==================================================

Create a homepage gallery preview.

Show a small selection of:

- Food

- Interior

- Restaurant atmosphere

- Chef

- Dining experience

Include CTA to the full Gallery page.

Images should be optimized and lazy-loaded where appropriate.

==================================================

13. FINAL CTA

==================================================

Create a visually strong final CTA section.

Example concept:

"Good Food. Great Moments. Your Table Awaits."

Buttons:

- Reserve a Table

- Explore Menu

==================================================

14. MENU PAGE

==================================================

Create a complete interactive menu page.

Categories:

- Starters

- Main Course

- Burgers

- Pizza

- Desserts

- Drinks

Create realistic sample menu data using JavaScript arrays.

Each menu item must contain:

- id

- name

- description

- price

- category

- image

- rating

- popular

- optional tags

==================================================

15. MENU SEARCH

==================================================

Add a working menu search.

User should be able to search dishes by:

- Name

- Description

- Category

Search results should update instantly using React state.

Show a clean empty state when no items match.

==================================================

16. CATEGORY FILTER

==================================================

Create working category filters.

Categories:

All

Starters

Main Course

Burgers

Pizza

Desserts

Drinks

Clicking a category should instantly filter menu items.

Search and category filtering must work together.

==================================================

17. ADD TO CART — FULLY FUNCTIONAL

==================================================

This is extremely important.

Implement a real frontend shopping cart using React state.

Users must be able to:

- Add items to cart

- Add the same item multiple times

- Increase quantity

- Decrease quantity

- Remove an item

- Clear entire cart

- View total item count

- View subtotal

- View order summary

The cart must update immediately without page reload.

Cart badge must show the total quantity of items.

Example:

If:

Burger × 2

Pizza × 1

Cart badge should show:

3

==================================================

18. CART DRAWER / CART PAGE

==================================================

Create a premium cart drawer or dedicated cart page.

Cart should display:

- Product image

- Product name

- Price

- Quantity

- Plus button

- Minus button

- Remove button

- Item subtotal

Bottom section:

- Subtotal

- Optional service fee

- Total

- Checkout button

Create an attractive empty-cart state.

Example:

"Your cart is waiting for something delicious."

CTA:

"Explore Menu"

==================================================

19. CART PERSISTENCE

==================================================

Use browser localStorage.

If the user refreshes the website:

- Cart should remain intact

- Quantities should remain intact

- Cart should restore automatically

Do NOT use a database.

Do NOT use backend APIs.

==================================================

20. CHECKOUT EXPERIENCE

==================================================

Create a frontend-only checkout page.

Include:

Customer information:

- Full name

- Phone

- Email

- Address

- Optional delivery notes

Order summary:

- Selected items

- Quantities

- Subtotal

- Total

Payment method UI:

- Cash on Delivery

- Pay at Restaurant

These are UI selections only.

Do not connect to real payment gateways.

Do not process real payments.

When the user submits the order:

Show a polished frontend confirmation screen.

Example:

"Order Received!"

Include:

- Order number generated on the frontend

- Customer name

- Order summary

- Estimated preparation time

- Button to return home

The order does NOT need to be stored on a server.

==================================================

21. OPTIONAL FOOD CUSTOMIZATION

==================================================

For suitable dishes, support simple frontend customization.

Examples:

Burger:

- Add cheese

- Extra sauce

- No onions

Pizza:

- Extra cheese

- Spicy

- Extra toppings

Customization should affect the cart item representation.

Do not overcomplicate this feature.

==================================================

22. TOAST NOTIFICATIONS

==================================================

When a user adds an item:

Show a beautiful lightweight toast:

"Margherita Pizza added to your cart."

When an item is removed:

"Item removed from cart."

When checkout is successful:

"Your order has been received."

Use lightweight implementation.

Avoid heavy notification libraries if unnecessary.

==================================================

23. FAVORITES

==================================================

Add a heart/favorite interaction to menu cards.

Users should be able to favorite dishes.

Persist favorites using localStorage.

Favorite state should remain after refresh.

This is frontend-only.

==================================================

24. RESERVE A TABLE PAGE

==================================================

Create a professional reservation page.

Fields:

- Full name

- Phone

- Email

- Number of guests

- Date

- Preferred time

- Special requests

Add validation.

Required fields should be clearly indicated.

When submitted:

Do NOT send data to any API.

Instead:

- Validate the form

- Show a loading state

- Show a successful reservation confirmation UI

Example:

"Reservation Request Received"

Generate a simple frontend reservation reference number.

Clearly structure the code so a real API/webhook could be connected later.

==================================================

25. CONTACT PAGE

==================================================

Include:

- Address

- Phone

- Email

- Opening hours

- Contact form

- Map/location visual section

Contact form:

- Name

- Email

- Phone

- Message

Validate fields.

On submission:

Show a frontend success message.

Do not send data anywhere.

==================================================

26. ABOUT PAGE

==================================================

Create a premium About page.

Sections:

- Restaurant story

- Our philosophy

- Chef's approach

- Fresh ingredients

- Restaurant experience

- Mission

- CTA

Use professional visual storytelling.

==================================================

27. GALLERY PAGE

==================================================

Create a responsive gallery.

Use optimized images.

Include categories if appropriate:

- Food

- Interior

- Chef

- Atmosphere

Images should:

- Lazy load below the fold

- Maintain aspect ratio

- Avoid layout shifts

- Open in a lightweight image preview/modal when clicked

==================================================

28. FAQ PAGE / SECTION

==================================================

Create an interactive FAQ accordion.

Questions should cover:

- Do I need a reservation?

- What are your opening hours?

- Do you offer vegetarian options?

- Do you accommodate dietary requirements?

- What is the cancellation policy?

- Do you host private events?

- Do you offer takeaway?

- Do you offer delivery?

Accordion must work properly.

Only relevant answers should expand.

==================================================

29. FOOTER

==================================================

Create a premium footer.

Include:

- Restaurant logo/name

- Short description

- Quick links

- Menu links

- Contact details

- Opening hours

- Social media icons

- Reserve a Table CTA

- Copyright

Social links can be placeholder URLs.

==================================================

30. WHATSAPP / CONTACT CTA

==================================================

Add a subtle WhatsApp/contact CTA.

On mobile especially:

- Make phone number clickable

- Make WhatsApp CTA easy to access

Use placeholder contact information.

Do not connect any backend.

==================================================

31. REUSABLE COMPONENT ARCHITECTURE

==================================================

Use reusable React components.

Suggested structure:

src/

  components/

    Navbar.jsx

    Footer.jsx

    Button.jsx

    MenuCard.jsx

    CategoryFilter.jsx

    SearchBar.jsx

    CartDrawer.jsx

    CartItem.jsx

    QuantityControl.jsx

    Toast.jsx

    ReservationForm.jsx

    ContactForm.jsx

    FAQItem.jsx

    TestimonialCard.jsx

    GalleryGrid.jsx

    SectionHeading.jsx

  pages/

    Home.jsx

    Menu.jsx

    About.jsx

    Gallery.jsx

    Contact.jsx

    Reservation.jsx

    Checkout.jsx

    FAQ.jsx

  data/

    menuData.js

    testimonials.js

    faqData.js

  hooks/

    useCart.js

    useFavorites.js

    useLocalStorage.js

  App.jsx

  main.jsx

Use React Router for page navigation if needed.

Keep components clean and reusable.

==================================================

32. STATE MANAGEMENT

==================================================

Do NOT install Redux unless absolutely necessary.

Use React:

- useState

- useEffect

- useContext where appropriate

- custom hooks

Create clean cart state management.

Keep cart logic separate from UI components.

==================================================

33. ACCESSIBILITY

==================================================

Follow accessibility best practices.

Include:

- Semantic HTML

- Proper labels

- Accessible buttons

- Keyboard navigation

- Visible focus states

- ARIA labels where needed

- Good color contrast

- Alt text for images

- Logical heading hierarchy

Do not rely only on color to communicate information.

==================================================

34. PERFORMANCE

==================================================

Prioritize excellent Lighthouse performance.

Requirements:

- Lightweight implementation

- Avoid unnecessary dependencies

- Optimize images

- Lazy load below-the-fold images

- Avoid huge assets

- Avoid background videos

- Avoid unnecessary animations

- Avoid layout shifts

- Use responsive images where practical

- Keep JavaScript bundle reasonable

Do not sacrifice usability for animations.

==================================================

35. ANIMATIONS

==================================================

Use subtle CSS transitions and lightweight animations.

Examples:

- Fade-in sections

- Card hover

- Button hover

- Navbar transition

- Cart drawer transition

- Modal transition

Animations should feel premium.

Do not use heavy animation libraries unless absolutely necessary.

Respect prefers-reduced-motion where practical.

==================================================

36. SEO

==================================================

Add basic SEO.

Include:

- Meaningful page titles

- Meta descriptions

- Semantic HTML

- Proper heading structure

- Descriptive image alt text

Example restaurant title style:

"Maison Ember | Modern Dining & Restaurant"

Create unique titles for major pages.

==================================================

37. ERROR / EMPTY STATES

==================================================

Create polished empty states for:

- Empty cart

- No menu search results

- No favorites

- Form errors

- Invalid form submissions

Never leave the user with a blank screen.

==================================================

38. FORM VALIDATION

==================================================

All forms must have frontend validation.

Validate:

- Required fields

- Email format

- Phone

- Guest count

- Date

- Time

Show clear inline error messages.

Do not submit invalid forms.

==================================================

39. IMPORTANT DATA RULE

==================================================

Restaurant menu data should be stored locally in JavaScript files.

Do NOT fetch menu data from external APIs.

Example:

menuData.js

Use realistic restaurant dishes and prices.

Make it easy for a future developer to replace the data.

==================================================

40. NO FAKE FUNCTIONALITY

==================================================

Any feature visible to the user must actually work on the frontend.

Do NOT create buttons that do nothing.

For example:

Add to Cart → must add to cart.

Quantity + → must increase quantity.

Quantity - → must decrease quantity.

Remove → must remove item.

Clear Cart → must clear cart.

Search → must filter dishes.

Categories → must filter dishes.

Favorite → must toggle favorite.

Reservation → must validate and show success.

Contact → must validate and show success.

Checkout → must validate and show confirmation.

FAQ → must expand/collapse.

Gallery → must open image preview.

Mobile menu → must open/close.

==================================================

41. ROUTING

==================================================

Create proper routes:

/

 /menu

 /about

 /gallery

 /contact

 /reservation

 /checkout

 /faq

Navigation should work without broken links.

==================================================

42. DESIGN QUALITY CONTROL

==================================================

Before considering the project complete, review the entire website as if you were a restaurant owner who is seeing it for the first time.

Ask:

- Does it look premium?

- Does the hero immediately grab attention?

- Does the website feel trustworthy?

- Is the menu easy to browse?

- Is ordering easy?

- Is the cart experience polished?

- Does mobile look professional?

- Are buttons and interactions obvious?

- Does the website feel like a real business website?

- Is there enough visual variety without being cluttered?

Improve anything that looks generic, unfinished, empty, or template-like.

==================================================

43. FINAL TECHNICAL CHECK

==================================================

Before finishing:

- Verify the application builds successfully.

- Verify there are no TypeScript files.

- Verify there are no .tsx files.

- Verify React + Vite is being used.

- Verify JavaScript/JSX only.

- Verify Tailwind CSS works.

- Verify all routes work.

- Verify Add to Cart works.

- Verify quantity controls work.

- Verify remove works.

- Verify clear cart works.

- Verify localStorage persistence works.

- Verify search works.

- Verify category filtering works.

- Verify favorites work.

- Verify checkout works.

- Verify reservation form works.

- Verify contact form works.

- Verify FAQ works.

- Verify gallery modal works.

- Verify mobile navigation works.

- Verify there are no console errors.

- Verify there are no broken images.

- Verify there is no horizontal scrolling on mobile.

MOST IMPORTANT:

This must remain a FRONTEND-ONLY React + Vite + JavaScript + Tailwind CSS project.

Do NOT introduce TypeScript, Next.js, backend services, databases, APIs, n8n, webhooks, authentication, or server-side functionality.

Build the complete polished website rather than creating only a visual mockup.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://a-taste-of-magic.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1cecb48e-d98d-4a85-9f2c-1e210c77c121).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
