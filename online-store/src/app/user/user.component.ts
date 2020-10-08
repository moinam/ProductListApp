import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  isAbout: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
