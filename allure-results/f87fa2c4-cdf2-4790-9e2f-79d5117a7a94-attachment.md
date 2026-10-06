# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Testsuite.spec.ts >> Test suite >> TC002
- Location: tests\Testsuite.spec.ts:11:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://ctcorphyd.com/SureshIT/login.php
Call log:
  - navigating to "https://ctcorphyd.com/SureshIT/login.php", waiting until "load"

```

# Test source

```ts
  1  | //To provide all re-usabel methods / functions related to whole application
  2  | import { Locator } from "@playwright/test";
  3  | import { Global } from "./Global";
  4  | export class General extends Global{
  5  |     // open application
  6  |     async openApplication(){
> 7  |         await this.page.goto(this.url);
     |                         ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://ctcorphyd.com/SureshIT/login.php
  8  |         await this.page.waitForTimeout(3000);
  9  |         console.log ("Application opened");
  10 |     };
  11 |     // login into application
  12 |     async login(){
  13 |         await this.page.locator(this.textbox_loginname).fill(this.username);
  14 |         await this.page.locator(this.textbox_password).fill(this.password);
  15 |         await this.page.waitForTimeout(3000);
  16 |         await this.page.locator(this.login_button).click();
  17 |         console.log('Login completed');
  18 |         await this.page.waitForTimeout(3000);
  19 |     }
  20 |     // Logout from application
  21 |     async logout(){
  22 |         await this.page.getByRole(this.logout_role as "link", { name: this.logout_name }).click();
  23 |         await this.page.waitForTimeout(3000);
  24 |         console.log('logout completed');
  25 |     }
  26 |     //enter into fream
  27 |     async AddEmply(){
  28 |         const fream = this.page.frameLocator(this.ifream);
  29 |         await fream.locator(this.add_button).click();
  30 |         await fream.locator(this.textbox_firstname).fill(this.firstname);
  31 |         await fream.locator(this.textbox_lastname).fill(this.lastname);
  32 |         await this.page.waitForTimeout(3000);
  33 |         await fream.locator(this.save_button).click();
  34 |         await this.page.waitForTimeout(3000);
  35 |         console.log("New Employee Added");
  36 |     }
  37 |     //Delet Employee
  38 |     async Delete(){
  39 |         const frame = this.page.frameLocator(this.ifream);
  40 |         await frame.locator(this.search_By).selectOption(this.value);
  41 |         await frame.locator(this.search_For).fill(this.emp_id)
  42 |         await frame.locator(this.search_button).click();
  43 |         await frame.locator(this.check_box).nth(1).check();
  44 |         await frame.locator(this.Delete_button).click();
  45 |         console.log('Employee deleted');
  46 |  
  47 |     }
  48 | }
```