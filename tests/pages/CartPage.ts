import { Page, Locator } from '@playwright/test';

export class CartPage {
    public readonly page: Page;
    
    // Локаторы элементов каталога
    public readonly catalogLink: Locator;
    public readonly phoneCategory: Locator;
    public readonly tvCategory: Locator;
    public readonly laptopCategory: Locator;
    public readonly firstProductCard: Locator;
    public readonly addToCartButton: Locator;
    
    // Локаторы элементов корзины
    public readonly cartItems: Locator;
    public readonly itemTitle: Locator;
    public readonly removeButton: Locator;
    public readonly emptyCartMessage: Locator;
    public readonly quantityInput: Locator;
    public readonly totalPrice: Locator;
    public readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        
        this.catalogLink = page.locator('//*[@class="b-main-navigation__text" and text()="Каталог"]/parent::a');
        this.phoneCategory = page.locator('//*[contains(@class, "catalog-navigation-list__category")]//*[contains(text(), "Мобильные телефоны")]');
        this.tvCategory = page.locator('//*[contains(@class, "catalog-navigation-list__category")]//*[contains(text(), "Телевизоры")]');
        this.laptopCategory = page.locator('//*[contains(@class, "catalog-navigation-list__category")]//*[contains(text(), "Ноутбуки")]');
        this.firstProductCard = page.locator('(//*[contains(@class, "catalog-form__offers-item") and not(contains(@style, "none"))])[1]');
        this.addToCartButton = page.locator('(//*[contains(@class, "catalog-form__button") and contains(text(), "В корзину")])[1]');
        
        this.cartItems = page.locator('//*[contains(@class, "cart-form__offers-item")]');
        this.itemTitle = page.locator('(//*[contains(@class, "cart-form__description_part")]//a)[1]');
        this.removeButton = page.locator('(//*[contains(@class, "cart-form__button_remove")])[1]');
        this.emptyCartMessage = page.locator('//*[contains(@class, "cart-message__title") and contains(text(), "Корзина пуста")]');
        this.quantityInput = page.locator('(//*[@name="quantity" and contains(@class, "cart-form__input")])[1]');
        this.totalPrice = page.locator('(//*[contains(@class, "cart-form__description-part_sum")])[1]');
        this.checkoutButton = page.locator('//*[contains(@class, "cart-form__button_order")]');
    }

    async navigateToCart() {
        await this.page.goto('https://cart.onliner.by');
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForSelector('//*[contains(@class, "cart-form__title") and contains(text(), "Корзина")]', 
            { state: 'visible', timeout: 15000 });
    }

    async clearCart() {
        await this.navigateToCart();
        while (await this.cartItems.count() > 0) {
            await this.removeButton.first().click();
            await this.page.waitForTimeout(1000);
        }
    }

    async addPhoneToCart() {
        await this.catalogLink.waitFor({ state: 'visible', timeout: 15000 });
        await this.catalogLink.click();
        
        await this.phoneCategory.waitFor({ state: 'visible', timeout: 15000 });
        await this.phoneCategory.click();
        
        await this.firstProductCard.waitFor({ state: 'visible', timeout: 15000 });
        await this.firstProductCard.hover();
        
        await this.addToCartButton.waitFor({ state: 'visible', timeout: 15000 });
        await this.addToCartButton.click();
        
        await this.page.waitForSelector('//*[contains(text(), "Товар добавлен в корзину")]', { timeout: 5000 })
            .catch(() => this.page.waitForTimeout(2000));
    }

    async addTvToCart() {
        await this.catalogLink.click();
        await this.tvCategory.click();
        await this.firstProductCard.hover();
        await this.addToCartButton.click();
        await this.page.waitForTimeout(2000);
    }

    async addLaptopToCart() {
        await this.catalogLink.click();
        await this.laptopCategory.click();
        await this.firstProductCard.hover();
        await this.addToCartButton.click();
        await this.page.waitForTimeout(2000);
    }

    async changeQuantity(quantity: number) {
        await this.quantityInput.first().fill(quantity.toString());
        await this.quantityInput.first().press('Enter');
        await this.page.waitForTimeout(1000);
    }

    async removeFirstItem() {
        await this.removeButton.first().click();
        await this.page.waitForSelector('//div[contains(@class, "cart-form__offers-item")]', { state: 'detached' }).catch(() => {});
    }

    async getItemsCount(): Promise<number> {
        return await this.cartItems.count();
    }
}