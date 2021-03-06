import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pettype } from '../models/pettype';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PettypeService {

  public url: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  getPetTypes() {
    let pa = {
      accion: "ListarPettypes",
    }
    
    return this.http.post<Pettype[]>(this.url, JSON.stringify(pa));
  }

  addPetTypes(PT: Pettype) {
    let pa = {
      accion: "AnadePettype",
      pettype: PT,
    }
    
    return this.http.post<Pettype>(this.url, JSON.stringify(pa));
  }

  editPetTypes(PT: Pettype) {
    let pa = {
      accion: "ModificaPettype",
      pettype: PT,
    }
    
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }

  borrarPettype(id: number) {
    let pa = {
      accion: "BorraPettype",
      id: id,
    }
    
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }
}
