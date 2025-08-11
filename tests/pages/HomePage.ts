import {Page} from '@playwright/test';
import dotenv from 'dotenv'
dotenv.config()


export class HomePage {
    constructor (private page: Page) {}

    async goToPage() {
        await this.page.goto(process.env.BASE_UI_URL || '');
    }

    async projectNavigation() {
        await this.page.locator('text="Мобильные телефоны"').first().click(); 
    }

    async dropDowmNews() {
        const newsLocator = this.page.locator('text="Новости"');
        await newsLocator.hover();
    }

    async search(){

    } 
}