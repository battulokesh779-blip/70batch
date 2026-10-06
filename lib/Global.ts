import {Locator, Page} from '@playwright/test';
export class Global {
    public page!: Page;
    constructor(page: Page) {
        this.page = page;
       // this.logout_link = this.page.getByRole('link', { name: 'logout' });
    }
 //***********Test Data************* */
 public url : string = "https://ctcorphyd.com/SureshIT/login.php";
 public username : string = "sureshit"
 public password : string = "sureshit"
 public firstname : string = "lokesh"
 public lastname : string =  "battu"
 public emp_id   =  "10004"
 public label   = "{label:'Emp. ID'}"
 public      value="0"

 //*********objects/Elements******** */
 public  textbox_loginname = "//*[@name='txtUserName']";
 public  textbox_password =  "//*[@name='txtPassword']";
 public  login_button     =  "//*[@value='Login']";
 //public  logout_link : Locator     = this.page.getByRole('link',{name:'logout'});
 public  ifream           =  "//*[@id='rightMenu']";
 public  add_button      =  '//*[@value="Add"]';
 public  save_button     =  '//*[@value="Save"]';
 public  textbox_firstname = '//*[@name="txtEmpFirstName"]';
 public  textbox_lastname  = '//*[@name="txtEmpLastName"]'; 
 public  search_By         = '//*[@id="loc_code"]';
 public  search_For       =   '//*[@id="loc_name"]';
 public  search_button     =   '//*[@value="Search"]';
 public  check_box         =    '//*[@name="chkLocID[]"]';
 public  Delete_button     =  '//*[@value="Delete"]'; 
 public logout_role       =  "link";
 public logout_name      =    "logout" ;
}
