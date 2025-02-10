# EcommerceAngular19Test

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.6.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Notes

Difference between server side rendering and static site generation.
- Server side rendering - the files are rendered on the server and html files sent to the browser.
  - Best for Ecommerce sites where we have dynamic pricing, inventory updates.
  - News websites - with frequently updated content.
  - User dashboards - personalized content.


- Static site generation - the files are generated during build time and a copy of the html files saved on the sever. This is what is rendered every time a user makes a request. Not good for frequently changing data.
  - Best for blogs
  - Landing pages
  - Website portfolios

## Angular 2025
 - Signals - for now for everything apart from (forms and http requests)
 - rxResource
 - Angular CLI or Nx - Nx is a little complex for the start. It is suited for large scale apps. Easy migration can be done via: ``nx import``
 - Testing - Jasmine, Jest. Karma is replaced.
 - Testing - Playwright - Fast modern & reliable E2E testing. Upcoming community driven CT.
 - Code guidelines - angular-eslint. Prettier formats staged files. Husky - ensures proper Git Hook execution. Sheriff - for module boundaries, dependency rules.
 - Signal Store (Ngrx) - for local and global state management. Built on signals. 
 - Redux - for event based systems.
 - use inject over constructor
 - SSR, Hydration and Incremental Hydration.
 - PNPM over NPM or Yarn
 - To try out 
   - Angular Tanstack query - managing client/server state in combination with the SignalStore.
   - Cursor - AI Enhanced IDE
   - HttpResource - Signalized HttpClient successor.
   - Signal Forms - unifying and signalizing. Forms integration.

   - wit.ai - for NLP like the OG conversion English to Latin.