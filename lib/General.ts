//To provide all re-usabel methods / functions related to whole application
import { Global } from "./Global";
export class General extends Global{
    // open application
    async openApplication(){
        await this.page.goto(this.url);
        await this.page.waitForTimeout(3000);
        console.log ("Application opened");
    };
    // login into application
    async login(){
        await this.page.locator(this.textbox_loginname).fill(this.username);
        await this.page.locator(this.textbox_password).fill(this.password);
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.login_button).click();
        console.log('Login completed');
        await this.page.waitForTimeout(3000);
    }
    // Logout from application
    async logout(){
        await this.page.getByText(this.logout_link).click();
        await this.page.waitForTimeout(3000);
        console.log('logout completed');
    }
    //enter into fream
    async AddEmply(){
        const fream = this.page.frameLocator(this.ifream);
        await fream.locator(this.add_button).click();
        await fream.locator(this.textbox_firstname).fill(this.firstname);
        await fream.locator(this.textbox_lastname).fill(this.lastname);
        await this.page.waitForTimeout(3000);
        await fream.locator(this.save_button).click();
        await this.page.waitForTimeout(3000);
        console.log("New Employee Added");
    }
    //Delet Employee
    async Delete(){
        const frame = this.page.frameLocator(this.ifream);
        await frame.locator(this.search_By).selectOption(this.value);
        await frame.locator(this.search_For).fill(this.emp_id)
        await frame.locator(this.search_button).click();
        await frame.locator(this.check_box).nth(1).check();
        await frame.locator(this.Delete_button).click();
        console.log('Employee deleted');

    }
}