import { Component, OnInit } from '@angular/core';
import {CepService} from "../services/cep.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private cepService: CepService) { }

  estado: string = '';
  cidade: string = '';
  pais: string = '';
  endereco: string = '';

  ngOnInit() {
  }

  checkCep(event) {
    if(event.length >= 8)
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
    this.endereco= '';
  }
}
