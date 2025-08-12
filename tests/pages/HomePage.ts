import {Page, Locator} from '@playwright/test';
import dotenv from 'dotenv'
dotenv.config()


export class HomePage {
    public readonly page: Page;
    public readonly topMenuNews: Locator;
    public readonly topDropDownMenu: Locator;
    public readonly cookieBtn: Locator;
    public readonly iphoneBtn: Locator;

    constructor (page: Page) {
        this.topMenuNews = page.locator('//*[@class="b-main-navigation__text" and text()="Новости"]')
        this.topDropDownMenu = page.locator('//*[@class="b-main-navigation__dropdown-title-link" and text()="Люди"]')
        this.iphoneBtn = page.locator('//*[@class="project-navigation__sign" and text()="Apple iPhone"]')
        this.cookieBtn = page.locator('#submit-button')
        this.page = page;
    }

    async goToPage() {
        await this.page.goto(process.env.BASE_UI_URL || '');
    }

    async cookieBanner () {
        if (await this.cookieBtn.isVisible()) {
            await this.cookieBtn.click();
    }}

    async navigationIphone() {
        await this.iphoneBtn.click(); 
    }

    async dropDownNews() {
        await this.topMenuNews.first().hover();
    }

    dropDownMenu() {
        return this.topDropDownMenu.first();
    }

    async search(){

    } 
}