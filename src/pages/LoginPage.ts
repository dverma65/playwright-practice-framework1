import { Page } from '@playwright/test'
import HomePage from "./HomePage";

export default class LoginPage{
    private readonly userNameInputSelector = "input#username";
    private readonly passwordInputSelector = "input#password";
    private readonly loginButtonSelector = "input#Login";

    constructor(private page:Page){

    }

    async navigateToLoginPage(){
        await this.page.goto("/");
    }

    async fillUserName(username: string){
        await this.page.locator(this.userNameInputSelector).fill(username);
    }

    async fillPassword(password: string){
        await this.page.locator(this.passwordInputSelector).fill(password);
    }

    async clickLoginBtn(){
        await this.page.locator(this.loginButtonSelector).click().catch((error) =>{
            console.error(`Error clicking on Login Button: ${error}`);
            throw error;
        })
        const homePage = new HomePage(this.page);
        return homePage;
    }
}