import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
}
)
export class EinkaufsService {

  constructor( 
  ) { }
  
  items = [];
 hinzufuegen(produkt){
    this.items.push(produkt);
  }

  getProdukte() {
    return this.items;
  }

  leeren() {
    this.items = [];
    return this.items;
  }

}