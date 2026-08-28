import { Page, expect } from '@playwright/test';

export default class HomePage{
    private readonly serviceitleLocator = "Service";

    constructor(private page: Page){

    }
    async expectServiceTitleToBeVisible(){
        await expect(this.page.getByRole('link', {name: this.serviceitleLocator}).first()).toBeVisible({timeout:15000});
    }

}