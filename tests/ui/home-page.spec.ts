import { test, expect, Browser } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { PageFactory } from '../factories/PageFactory';
import { BrowserSingleton } from '../utils/core/BrowserSingleton';

test.describe('Check home page', async()=> {
    let browser: Browser;

    test.beforeAll(async () => {
        browser = await BrowserSingleton.getInstance();
    });

    test.beforeAll(async () => {
        browser = await BrowserSingleton.getInstance();
    });

    test("Check dropDown panel from News", async () => {
        const homePage = await PageFactory.getHomePage(browser);
        await homePage.goToPage;

        homePage.dropDownNews();

        const checkMenu = await homePage.dropDownMenu();

        await expect(checkMenu).toBeVisible({timeout: 5000});
    })

});