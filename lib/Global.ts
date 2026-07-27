//To provide Test Data & object/ elements related to whole application
import {Page} from '@playwright/test';
export class Global {
    constructor(public page : Page){
        this.page = page;
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
 public  logout_link      =  "Logout";
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
}