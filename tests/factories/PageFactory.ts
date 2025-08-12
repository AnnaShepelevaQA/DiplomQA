import { Browser } from "@playwright/test";
import {HomePage} from "../pages/HomePage";

export class PageFactory {
    static async getHomePage(browser: Browser): Promise<HomePage> {
        const context = await browser.newContext();
        const page = await context.newPage();
        return new HomePage(page);
    }
}