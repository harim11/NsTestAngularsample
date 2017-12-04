import { Component, OnInit } from '@angular/core';
import { User, NsTestUserService} from '../shared';
import { Injectable } from '@angular/core';
let gettempname="";
@Injectable()
export class checkTemplate implements OnInit {
    public static getBaseHref(){
        return "Hello";
    }
 constructor(
        private userService: NsTestUserService
            ) {}
            
      currentUser: User;
      UserName: string="";
      templateName :string="";
      ngOnInit() {
        this.userService.currentUser.subscribe(
            (userData: User) => {
              this.currentUser = userData;
              this.UserName = this.currentUser.username ;
            }
          );
         if(this.UserName=="hari")
         {
            this.templateName= './NsTest-editor.component.html';
         }
         else
         {
            this.templateName='./template2.html';
         }
         gettempname= this.templateName;
      }

      public static getTemplatePath() : string {
    
       return gettempname;
        
      }

     public switchTemplate() :any {
        this.userService.currentUser.subscribe(
            (userData: User) => {
              this.currentUser = userData;
              this.UserName = this.currentUser.username ;
            }
          );
         if(this.UserName=="hari")
         {
            this.templateName= './NsTest-editor.component.html';
         }
         else
         {
            this.templateName='./template2.html';
         }
      return this.templateName;
      }
    


}