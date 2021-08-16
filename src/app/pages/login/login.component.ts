import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OauthService } from "../../shared/oauth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  constructor(private router: Router, private oauthService: OauthService) {}

  login: string = "";
  password: string = "";

  authorization() {
    this.oauthService.login(this.login, this.password).subscribe(
      (data) => {
        this.router.navigateByUrl(`/message/${data.user}`).then();
      },
      (error) => {
        this.router.navigateByUrl("/login").then();
      }
    );
  }
}
