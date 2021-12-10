# StoreFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# MyStore

MyStore is Angular application created for a Udacity project, that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process.

## Getting Started

To use these files, simply merge the folders into the root directory of your scaffolded Angular application.

## Project Instructions

### Setup

Make sure to have Angular setup on your machine. You can find setup instructions on their website here. [https://angular.io](https://angular.io)

### yarn install

Installs required dependencies.

### ng serve

Runs the app and can be viewed at [http://localhost:4200](http://localhost:4200)

### ng test

*Tests are not currently setup.*
Spec files are created for components, but they are not fleshed out, so tests currently don't 'test' anything.


#### Project Structure

- *NavBar* displays the list of all components created for easy navigation.
- *Product list* page, which displays the available products for the user to choose and add to their cart (in various quantities)
- *Product details* page, which displays more information about any particular product
- *Cart*, which includes the products that the user has added to their cart
- *Confirmation page*, which shows the outcome after the user completes the checkout process (i.e., submits the checkout form)

- 

- `data.json`. Project fetches product information from this included file to populate the store.