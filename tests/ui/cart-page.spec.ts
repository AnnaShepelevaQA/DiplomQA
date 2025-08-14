import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CatalogPage } from '../pages/CatalogPage';
import { CartPage } from '../pages/CartPage';

test.describe('Cart Tests', () => {
    let homePage: HomePage;
    let catalogPage: CatalogPage;
    let cartPage: CartPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        catalogPage = new CatalogPage(page);
        cartPage = new CartPage(page);
        
        await homePage.goToPage();
    });

    test('Add product to cart from catalog', async () => {
        await homePage.openCatalogSection('Мобильные телефоны');
        await catalogPage.addFirstProductToCart();
        
        const cartCounter = await homePage.cartIcon.locator('.auth-bar__counter').textContent();
        expect(cartCounter).toBe('1');
    });

    test('Remove product from cart', async () => {
        await homePage.openCatalogSection('Телевизоры');
        await catalogPage.addFirstProductToCart();
        
        await homePage.cartIcon.click();
        await cartPage.removeButton.first().click();
        await expect(cartPage.emptyCartMessage).toBeVisible();
    });
});