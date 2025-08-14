import { Page, Locator } from '@playwright/test';

export class CatalogPage {
    public readonly page: Page;
    
    public readonly firstProductCard: Locator;
    public readonly addToCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        
        this.firstProductCard = page.locator('(//*[contains(@class, "catalog-form__offers-item")])[1]');
        this.addToCartButton = page.locator('(//*[contains(@class, "button_cart")])[1]');
    }

    async addFirstProductToCart() {
        await this.firstProductCard.hover();
        await this.addToCartButton.click();
        await this.page.waitForTimeout(2000);
    }
}