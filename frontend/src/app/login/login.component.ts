import { Component } from "@angular/core";


@Component ({
    selector : 'app-login',
    templateUrl:'./login.component.html',
    styleUrls :['./login.component.scss']
})

export class LoginComponent {
    email:string = "" ; 
    password :string = "" ; 
    error:string="";

    navigate() {
        if (this.email=="saad@gmail.com" && this.password == "123456")
            window.location.href = 'admin/dashboard' ; else this.error = "Try again !" ;
    }
}

