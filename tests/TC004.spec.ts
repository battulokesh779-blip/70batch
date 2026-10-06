import {test, expect} from '@playwright/test';
import { General } from '../lib/General';
test ('TC004: Add and Delete Employee', async ({page})=>{
    const general = new General(page);
    await general.openApplication();
    await general.login();
    await general.Delete();
    await general.AddEmply();
    await general.logout();
} )  