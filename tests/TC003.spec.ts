import {test} from '@playwright/test';
import { General } from '../lib/General';

test ('TC003', async ({page}) => {
const obj = new General(page);
await obj.openApplication();
await obj.login();
await obj.Delete();
await obj.logout();


});