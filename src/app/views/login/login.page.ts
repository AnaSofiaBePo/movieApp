import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private fieldTextType: boolean;
  constructor() {}

  toggleFieldTextType(event: any) {
    this.fieldTextType = event.target.value;
    console.log(this.fieldTextType);
  }

  ngOnInit() {}
}
