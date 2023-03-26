import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {CepService} from "../../services/cep.service";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from 'rxjs/operators';
import {estados} from "../../constants/estados";
import { Router } from '@angular/router';
import {StorageService} from "../../services/storage.service";

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, AfterViewInit {

    constructor(private cepService: CepService,
                private storageService: StorageService,
                private _router: Router) {
    }

    firstName: string ='';
    lastName: string = '';

    day: string = '';
    month: string = '';
    year: string = '';

    phone: any = '';
    email: any = '';

    cep: string = '';

    estado: string = '';
    cidade: string = '';
    pais: string = '';
    endereco: string = '';
    numero: string = '';

    myControl = new FormControl('');
    options: string[] = estados.map(value => value.nome);
    filteredOptions: Observable<string[]>;

    isFirstTime = false;
    birthDate: string = '';
    cpf: string = '';
    rg: string = '';
    mapsUrl: string = '';
    isDisabled: boolean = true;
    ngOnInit() {



        if(this.isFirstTime){
            this._router.navigate(['/account'])
            this.isFirstTime = false;
        }

        this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value || '')),
        );

        this.firstName = this.storageService.getItem('firstName');
        this.lastName = this.storageService.getItem('lastName');
        this.phone = this.storageService.getItem('phone')
        this.email = this.storageService.getItem('email')
        this.day = this.storageService.getItem("day")
        this.month = this.storageService.getItem("month")
        this.year = this.storageService.getItem("year")
        this.birthDate = this.year+'-'+this.month+'-'+this.day
        this.cidade = this.storageService.getItem('cidade')
        this.pais = this.storageService.getItem('pais')
        this.endereco = this.storageService.getItem('endereco')
        this.numero = this.storageService.getItem('numero')
        this.cep = this.storageService.getItem('cep')
        this.mapsUrl = this.storageService.getItem('mapsUrl')
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }

    checkCep(event) {
        if (event.length >= 8)
            this.cepService.getCep(event).subscribe(value => {
                console.log(value)
                this.clearValues();
                this.estado = value.uf;
                console.log("estado do cep: " + this.estado)

                this.cidade = value.localidade;
                this.pais = 'Brasil';
                this.endereco = value.logradouro;
            })
    }

    private clearValues() {
        this.estado = '';
        this.cidade = '';

        this.pais = '';
        this.endereco = '';
    }

    ngAfterViewInit(): void {
        this.estado = this.storageService.getItem("estado")
    }

    gotoMaps() {
        console.log("teste")
        window.open(
            this.mapsUrl,
            '_blank'
        );
    }

    changeInputStatus() {

        this.isDisabled = this.isDisabled !== true;

    }
}
