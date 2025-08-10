import {Page} from '@playwright/test';

export class HomePage {
    constructor (private page: Page) {}

    async goToPage() {
        await this.page.goto('https://www.onliner.by/');
    }

    async projectNavigation() {
        await this.page.locator('text="Мобильные телефоны"').first().click(); 
    }

    async search(){

    } 
}