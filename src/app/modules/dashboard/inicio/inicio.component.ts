import { Component, OnInit } from '@angular/core';
import { cardModel } from 'src/app/models/cardModel';
import { CardService } from 'src/app/services/cardService.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
    card:cardModel[]=[];
  constructor(private _cardService: CardService) { }

  ngOnInit(): void {
    this.loadCard();
  }

  loadCard(){
    this._cardService.getCard().subscribe(data=>{
      console.log(data);
      this.card=data;
    })
  }

}
