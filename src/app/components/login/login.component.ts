import { ToastsManager  } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private authService: AuthService, private router : Router, private toastr : ToastsManager) {
  }

  ngOnInit() {
  }

  register(username, password){
    return this.authService.register(username, password).then(data => this.router.navigate(['home']));
  }

  login(username, password){
    return this.authService.login(username, password).then(data => this.router.navigate(['home']));
  }

  submit(form, isLogin){
    if(isLogin) {
      this.login(form.value.username, form.value.password).then( res => form.reset()).catch(res => {
        if(res.status === 401) this.toastr.error('Incorrect username or password.', 'Error!');
      });
    } else {
      this.register(form.value.username, form.value.password).then( res => form.reset()).catch(res => {
        if(res.status === 409) this.toastr.error('Username already taken.', 'Error!');
      });
    }
  }
}
