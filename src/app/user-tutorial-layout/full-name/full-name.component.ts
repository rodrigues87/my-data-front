import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {StorageService} from "../../services/storage.service";

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

  constructor(private router: Router, private storageService: StorageService) { }

  ngOnInit(): void {
    setTimeout(() => this.start = true, 1000)

    this.firstName = this.storageService.getItem('firstName');

    this.lastName = this.storageService.getItem('lastName');

  }

  showImputFirstName() {
    this.formFirstName = true;
  }

  saveFullName() {

    this.storageService.setItem('firstName', this.firstName);
    this.storageService.setItem('lastName', this.lastName);

    this.router.navigate(["/tutorial/birth-date"])

  }

  setName(firstName: any) {
    this.firstName = firstName;
  }

  setLastName(lastName: any) {
    this.lastName = lastName;
  }
}
