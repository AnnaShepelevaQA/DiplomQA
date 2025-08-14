import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Onliner Home Page Tests', () => {

    test("Check dropDown panel from News", async ({page}) => {
    const homePage = new HomePage(page);
    await homePage.goToPage();
    
    await homePage.topMenuNews.first().hover();
    
    const checkMenu = homePage.dropDownMenu();
    await expect(checkMenu).toBeVisible({timeout: 10000});
});
    
    test("Check button Apple iPhone", async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.goToPage();
        await homePage.navigationIphone();
        
        await expect(homePage.page).toHaveURL(/campaign=iphone/);
    });

    test("Verify catalog navigation", async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.goToPage();
        await homePage.goToCatalog();

        await expect(homePage.page).toHaveURL(/catalog\.onliner\.by/);
    });

    test("Check auto market section", async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.goToPage();
        await homePage.goToAutoMarket();

        await expect(homePage.page).toHaveURL(/ab\.onliner\.by/);
    });

    test("Verify real estate section", async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.goToPage();
        await homePage.goToRealEstate();

        await expect(homePage.page).toHaveURL(/r\.onliner\.by\/pk/);
    });

    test("Check logo visibility", async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.goToPage();
        const isLogoVisible = await homePage.isLogoVisible();

        await expect(isLogoVisible).toBeTruthy();
    });

    test("Check flea market section", async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.goToPage();
        await homePage.goToFleaMarket();

        await expect(homePage.page).toHaveURL(/baraholka\.onliner\.by/);
    });

    test("Handle cookie banner if present", async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.goToPage();
        await homePage.cookieBanner();
        
        await expect(homePage.cookieBtn).not.toBeVisible({timeout: 5000});
    });
});