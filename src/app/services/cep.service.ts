import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})export class CepService {

    //https://www.codigofonte.com.br/codigos/classe-de-validacao-de-cnpjcpfcep-e-email
    constructor(private http:HttpClient) { }

    getCep(cep:string){
        console.log(cep)
        return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`);
    }

}
