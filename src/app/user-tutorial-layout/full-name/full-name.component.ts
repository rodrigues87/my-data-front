import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-tutorial',
  templateUrl: './full-name.component.html',
  styleUrls: ['./full-name.component.scss']
})
export class FullNameComponent implements OnInit {

  start: boolean = false
  formFirstName: boolean = false;

  firstName: string ='';
  lastName: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => this.start = true, 1000)

    this.firstName = localStorage.getItem('firstName');
    if(this.firstName === "null"){
      this.firstName = ''
    }
    this.lastName = localStorage.getItem('lastName');
    if(this.lastName === "null"){
      this.lastName = ''
    }
  }

  showImputFirstName() {
    this.formFirstName = true;
  }

  saveFullName() {

    localStorage.setItem('firstName', this.firstName);
    localStorage.setItem('lastName', this.lastName);

    this.router.navigate(["/user-tutorial/birth-date"])

  }

  setName(firstName: any) {
    this.firstName = firstName;
  }

  setLastName(lastName: any) {
    this.lastName = lastName;
  }
}
