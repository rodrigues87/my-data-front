import {Component, OnInit} from '@angular/core';
import {CepService} from "../services/cep.service";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from 'rxjs/operators';
import {estados} from "../constants/estados";
import { Router } from '@angular/router';
@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    constructor(private cepService: CepService, private _router: Router) {
    }

    estado: string = '';
    cidade: string = '';
    pais: string = '';
    endereco: string = '';
    numero: number;

    myControl = new FormControl('');
    options: string[] = estados.map(value => value.nome);
    filteredOptions: Observable<string[]>;

    isFirstTime = false;
    ngOnInit() {

        if(this.isFirstTime){
            this._router.navigate(['/account'])
            this.isFirstTime = false;
        }

        this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value || '')),
        );
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
}
