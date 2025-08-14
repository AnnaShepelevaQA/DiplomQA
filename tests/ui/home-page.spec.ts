import { test, expect, Browser } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Check home page', async()=> {
    let browser: Browser;

    test("Check dropDown panel from News", async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.goToPage();

        homePage.dropDownNews();

        const checkMenu = homePage.dropDownMenu();

        await expect(checkMenu).toBeVisible({timeout: 5000});
    })

    test("Check button Apple iPhone", async ({page}) => {
        const homePage = await new HomePage(page);;
        await homePage.goToPage();

        await homePage.navigationIphone();

        await expect(homePage.page).toHaveURL(/campaign=iphone/)
    });

});