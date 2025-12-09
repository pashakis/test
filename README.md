# test
=======
# SauceDemo Cypress Framework Report

## 1. Overview
This Cypress framework automates end-to-end tests for the SauceDemo application, including login and cart/checkout functionality. The tests cover positive and negative scenarios.

## 2. Architecture Choices
- **Folder Structure:** Tests organized under `integration/login` and `integration/cart` for clarity.
- **Custom Commands:** `cy.login()` and `cy.addToCart()` created to avoid code duplication and improve maintainability.
- **Fixtures:** Test data stored in `cypress/fixtures/data.json` for data-driven testing.
- **Selectors:** Used `[data-test="..."]` attributes and `.closest()` for reliable element selection.
- **Arrow Functions vs this:** Arrow functions with local variables chosen to avoid issues with `this` binding.

## 3. Test Coverage
**Login:**  
- Successful login  
- Locked-out user  
- Invalid password  
- Empty credentials  

**Cart/Checkout:**  
- Add item to cart  
- Remove item from cart  
- Successful checkout  
- Checkout with missing info  

## 4. Additional Details / Benefits
- Each test is independent and uses `beforeEach()` for setup.  
- Scalable structure for adding more features in the future.  
- Reliable, maintainable, and professional code suitable for real-world projects.


# Part 2: API Testing (Petstore API)

**API Base URL:** `https://petstore.swagger.io/v2`

### Features Tested:
1. **CRUD operations on Pet resource**
   - Create a new pet (POST)
   - Retrieve pet by ID (GET)
   - Update pet (PUT)
   - Delete pet (DELETE)
   - Retrieve deleted pet (GET negative)

### Architecture Choices:
- **Cypress `cy.request()`** used for API requests — no external library needed.
- **Fixture `petData.json`** stores all pet test data.
- **`apiHelper.js`** contains reusable functions for API calls, keeping test files clean.
- Full Chai assertions ensure response correctness and error handling.
- Tests are structured for readability, scalability, and maintainability.

### Benefits:
- Reusable and data-driven framework.
- Scalable for additional API endpoints.
- Clear separation of test logic, helpers, and test data.
