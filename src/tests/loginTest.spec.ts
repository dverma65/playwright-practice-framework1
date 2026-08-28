import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test.skip("Login Page test", async({page}) =>{
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    //await loginPage.fillUserName("deekshaverma6509@gmail.com");
    await loginPage.fillUserName(process.env.userid!);
    await loginPage.clickLoginBtn();
    //await loginPage.fillPassword("Deeksh@1308");
    await loginPage.fillPassword(process.env.password!)
    const homePage = await loginPage.clickLoginBtn();
    await page.waitForTimeout(7000);
    await homePage.expectServiceTitleToBeVisible();
    
});

test("sample test", async({page}) => {
    console.log(process.env.NODE_ENV);
    console.log(process.env.userid);
    console.log(process.env.password);
});