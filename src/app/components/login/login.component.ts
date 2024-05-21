import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(public fb: FormBuilder, public authService: AuthService) { }

  ngOnInit(): void {
  }

  submit() {
    this.authService.logIn(this.loginForm.get('email')!.value!, this.loginForm.get('password')!.value!);
  }
}