import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})export class StorageService {

    setItem(key, value: string) {
        if(value !== '' && value !== null){
            localStorage.setItem(key, value)
        }
    }

    getItem(key){

        return localStorage.getItem(key);
    }

}
