import {test} from '@playwright/test';
import { General } from '../lib/General';
test('@Web TC001', async ({page}) => {
    const obj = new General(page);
   await obj.openApplication();
   await obj.login();
   await obj.logout();
})