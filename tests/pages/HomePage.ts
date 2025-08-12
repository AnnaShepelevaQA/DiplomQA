import {Page, Locator} from '@playwright/test';
import dotenv from 'dotenv'
dotenv.config()


export class HomePage {
    public readonly topMenuNews: Locator;
    public readonly topDropDownMenu: Locator;

    constructor (private page: Page) {
        this.topMenuNews = page.locator('text="Новости"')
        this.topDropDownMenu = page.locator('.b-main-navigation__dropdown-wrapper')
    }

    async goToPage() {
        await this.page.goto(process.env.BASE_UI_URL || '');
    }

    async projectNavigation() {
        await this.page.locator('text="Мобильные телефоны"').first().click(); 
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