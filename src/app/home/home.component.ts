import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EinkaufsService } from '../einkaufsservice.service';

interface produkt{
  name: String,
  preis: Number,
  bild: String
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private einkaufsService : EinkaufsService, private router : Router ) { }

   produkt: produkt ={name: null, preis:null, bild:null};
   

  imgsrc = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSDEMy_QEExduCyrx5VlOXFpGNvZJT0BkvZhu-Dj4rw9-x1HEGFB1U_vERqXuw9Jh3OBd9gTBhcfms&usqp=CAc";
  produktname = "Turnschuh";
  produkttext = "Hier kann eine kurzer Produkttext stehen";
  produktpreis = 14.99;
  waehrung = "€";

  ngOnInit() {
    this.produkt.name= "test";
  }

  inEinkaufswaagen(name: String, preis: Number, bild: String){
     window.alert(name);
    this.produkt.name = name;
    this.produkt.preis = preis;
    this.produkt.bild = bild;
    this.einkaufsService.hinzufuegen(this.produkt);
  }

  einkaufswaagen(){
     this.router.navigateByUrl('/einkaufswaagen');
  }


}