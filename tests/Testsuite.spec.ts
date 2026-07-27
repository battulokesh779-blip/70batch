import {test} from '@playwright/test'
import { General } from '../lib/General'

test.describe("Test suite" ,() => {
test('TC001', async ({page}) => {
    const obj = new General(page);
   await obj.openApplication();
   await obj.login();
   await obj.logout();
});
test('TC002',async ({page}) =>{
    const obj = new General(page);
   await obj.openApplication();
   await obj.login();
   await obj.AddEmply();
   await obj.logout();
});

});