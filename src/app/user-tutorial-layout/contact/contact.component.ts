import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {
    phone: any = '';
    email: any = '';
    formContact: boolean =false;
    numberMask = ['(',/\d/,/\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    isFirstExecution: boolean = true;
    message: ['Vamos adicionar alguns dados de contato'];

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

    showInputContract() {
        this.formContact = true;
    }

    saveContact() {
        this.storageService.setItem('phone',this.phone)
        this.storageService.setItem('email',this.email)

        this.router.navigate(["/forms/profile"])

        this.isFirstExecution = false;

    }

    ngAfterViewInit(): void {
        this.showInputContract();

    }
}
