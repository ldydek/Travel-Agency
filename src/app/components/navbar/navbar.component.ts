import { Component, OnInit, HostListener } from '@angular/core';
import { User } from "../../classes/user";
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  visible = false;
  width: any;
  guest = new User('amogus', 'guest', 'none', -1, [], false);
  user!: User;

  constructor(public authService: AuthService, public userService: UserService) { }

  ngOnInit(): void {
    this.width = window.innerWidth;
    this.authService.userData.subscribe(user => {
      if (user != null) {
        this.userService.users.subscribe(e => {
          this.user = e.filter((usr: { key: string; }) => usr.key == user.uid)[0];
        })
      }
      else {
        this.user = this.guest;
      }
    });
  }
}
