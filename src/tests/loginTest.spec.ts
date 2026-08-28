import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test("Login Page test", async({page}) =>{
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUserName("deekshaverma6509@gmail.com");
    await loginPage.clickLoginBtn();
    await loginPage.fillPassword("Deeksh@1308");
    const homePage = await loginPage.clickLoginBtn();
    await page.waitForTimeout(7000);
    await homePage.expectServiceTitleToBeVisible();
    
})