import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    phone: any = '';
    email: any = '';
    formContact: boolean =false;

    constructor(private router: Router, private storageService: StorageService) {
    }

    ngOnInit(): void {
        this.phone = this.storageService.getItem('phone')
        this.email = this.storageService.getItem('email')

    }

    setPhone(value: any) {
        this.phone = value;
    }

    setEmail(value: any) {
        this.email = value;
    }

    showInputContact() {
        this.formContact = true;
    }

    saveContact() {
        this.storageService.setItem('phone',this.phone)
        this.storageService.setItem('email',this.email)

        this.router.navigate(["/admin/user-profile"])
    }
}
