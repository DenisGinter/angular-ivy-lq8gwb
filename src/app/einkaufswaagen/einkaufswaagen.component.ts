import { Component, OnInit } from '@angular/core';
import { EinkaufsService } from '../einkaufsservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-einkaufswaagen',
  templateUrl: './einkaufswaagen.component.html',
  styleUrls: ['./einkaufswaagen.component.css']
})
export class EinkaufswaagenComponent implements OnInit {

  constructor(private einkaufswaagenService: EinkaufsService, private router: Router) { }
  produkte;
  waehrung = "€"

  ngOnInit() {
    this.produkte = this.einkaufswaagenService.getProdukte();
  }

  zurueck(){
      
     this.router.navigateByUrl('');
  
  }



}