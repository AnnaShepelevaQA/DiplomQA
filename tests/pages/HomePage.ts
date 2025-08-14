import {Page, Locator} from '@playwright/test';
import dotenv from 'dotenv'
dotenv.config()

export class HomePage {
    public readonly page: Page;
    public readonly topMenuNews: Locator;
    public readonly topDropDownMenu: Locator;
    public readonly cookieBtn: Locator;
    public readonly iphoneBtn: Locator;
    public readonly searchInput: Locator;
    public readonly catalogLink: Locator;
    public readonly autoMarketLink: Locator;
    public readonly realEstateLink: Locator;
    public readonly servicesDropdownLink: Locator;
    public readonly logo: Locator;
    public readonly fleaMarketLink: Locator;
    public readonly forumsLink: Locator;
    public readonly cartIcon: Locator;

    constructor (page: Page) {
        this.page = page;
        this.topMenuNews = page.locator('//*[@class="b-main-navigation__text" and text()="Новости"]');
        this.topDropDownMenu = page.locator('//*[@class="b-main-navigation__dropdown-title-link" and text()="Люди"]');
        this.iphoneBtn = page.locator('//*[@class="project-navigation__sign" and text()="Apple iPhone"]');
        this.cookieBtn = page.locator('#submit-button');
        this.logo = page.locator('.onliner_logo');
        this.catalogLink = page.locator('//*[@class="b-main-navigation__text" and text()="Каталог"]');
        this.cartIcon = page.locator('//*[contains(@class, "auth-bar__item--cart")]');
        this.autoMarketLink = page.locator('//*[@class="b-main-navigation__text" and text()="Автобарахолка"]');
        this.realEstateLink = page.locator('//*[@class="b-main-navigation__text" and text()="Дома и квартиры"]');
        this.fleaMarketLink = page.locator('//*[@class="b-main-navigation__text" and text()="Барахолка"]');
        this.forumsLink = page.locator('//*[@class="b-main-navigation__text" and text()="Форумы"]');
        this.searchInput = page.locator('input.fast-search__input');
        this.servicesDropdownLink = page.locator('//*[@class="b-main-navigation__dropdown-title-link" and text()="Услуги"]');
    }

    async goToPage() {
        await this.page.goto(process.env.BASE_UI_URL || '');
    }

    async cookieBanner() {
        if (await this.cookieBtn.isVisible()) {
            await this.cookieBtn.click();
        }
    }

    async openCatalogSection(sectionName: string) {
        await this.catalogLink.click();
        
        const electronicsTab = this.page.locator(
            '//div[contains(@class, "catalog-navigation-classifier__item")]' +
            '//span[contains(., "Электроника")]'
        );
        await electronicsTab.click();
        
        const targetSection = this.page.locator(
            `//span[contains(@class, "catalog-navigation-list__dropdown-title") ` +
            `and contains(., "${sectionName}")]`
        );
        
        await targetSection.scrollIntoViewIfNeeded();
        await targetSection.click({ timeout: 10000 });
        
        await this.page.waitForLoadState('networkidle');
    }

    async navigationIphone() {
        await this.iphoneBtn.click(); 
    }

    async dropDownNews() {
        await this.topMenuNews.first().hover();
    }

    dropDownMenu() {
        return this.topDropDownMenu.first();
    }

    async searchFor(query: string) {
        await this.searchInput.fill(query);
        await this.page.keyboard.press('Enter');
    }

    async goToCatalog() {
        await this.catalogLink.click();
    }

    async goToAutoMarket() {
        await this.autoMarketLink.click();
    }

    async goToRealEstate() {
        await this.realEstateLink.click();
    }

    async goToServicesFromDropdown() {
        await this.topMenuNews.first().hover();
        await this.servicesDropdownLink.click();
    }

    async isLogoVisible(): Promise<boolean> {
        return await this.logo.isVisible();
    }

    async goToFleaMarket() {
        await this.fleaMarketLink.click();
    }

    async goToForums() {
        await this.forumsLink.click();
    }

    async getCurrentUrl(): Promise<string> {
        return this.page.url();
    }
}