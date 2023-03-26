import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CepService} from "../../services/cep.service";
import {estados} from "../../constants/estados";
import {StorageService} from "../../services/storage.service";

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
    formAddress: boolean = false;

    estado: string = '';
    cidade: string = '';
    pais: string = '';
    endereco: string = '';
    numero: string = '';

    cep: string = '';

    mapsUrl = '';

    options: string[] = estados.map(value => value.nome);

    constructor(private router: Router, private cepService: CepService, private storageService: StorageService) {
    }

    ngOnInit(): void {

        this.estado = this.storageService.getItem('estado')
        this.cidade = this.storageService.getItem('cidade')
        this.pais = this.storageService.getItem('pais')
        this.endereco = this.storageService.getItem('endereco')
        this.numero = this.storageService.getItem('numero')
        this.cep = this.storageService.getItem('cep')

    }

    saveFullAddress() {

        this.storageService.setItem('estado', this.estado);
        this.storageService.setItem('cidade', this.cidade);
        this.storageService.setItem('pais', this.pais);
        this.storageService.setItem('endereco', this.endereco);
        this.storageService.setItem('numero', this.numero);
        this.storageService.setItem('cep', this.cep);

        this.mapsUrl = 'https://www.google.com/maps/search/' + this.endereco + "," + this.numero

        this.storageService.setItem('mapsUrl', this.mapsUrl);

        this.router.navigate(["/tutorial/contact"])

    }

    showImputAddress() {
        this.formAddress = true;
    }

    setCep(value: any) {
        if (value.length >= 8)
            this.cepService.getCep(value).subscribe(value => {
                this.estado = value.uf;
                this.cidade = value.localidade;
                this.pais = 'Brasil';
                this.endereco = value.logradouro;
            })
        this.cep = value;
    }

    setPais(value: any) {
        this.pais = value;

    }

    setEstado(value: any) {
        this.estado = value;

    }

    setCidade(value: any) {
        this.cidade = value;

    }

    setNumero(value: any) {
        this.numero = value;

    }

    setEndereco(value: any) {
        this.endereco = value;

    }

}
