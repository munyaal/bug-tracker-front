import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { cardModel } from '../models/cardModel';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private card = new BehaviorSubject<cardModel[]>([
    {
      "titulo":"Problema de inicio de sesión",
      "user":"@Pablo2324",
      "fecha":"11:25pm 21 de junio del 2021",
      "estadoColor":"#4BA765",
      "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas pariatur alias enim, velit, architecto tempora minus repellat id odit nostrum provident nulla, molestiae fugiat? Quo facere sunt adipisci excepturi tempore?",
      "image":"https://generacionxbox.com/wp-content/uploads/2020/09/Halo-3-ODST.jpg"
    },
    {
      "titulo":"Problema de visualizacion de incidentes",
      "user":"@ReD965263",
      "fecha":"12:25pm 02 de julio del 2022",
      "estadoColor":"#4BA765",
      "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas pariatur alias enim, velit, architecto tempora minus repellat id odit nostrum provident nulla, molestiae fugiat? Quo facere sunt adipisci excepturi tempore?",
      "image":"https://generacionxbox.com/wp-content/uploads/2020/09/Halo-3-ODST.jpg"
    },
    {
      "titulo":"Problema de inicio de creacion de incidentes",
      "user":"@puff1154",
      "fecha":"12:25pm 02 de julio del 2022",
      "estadoColor":"#4BA765",
      "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas pariatur alias enim, velit, architecto tempora minus repellat id odit nostrum provident nulla, molestiae fugiat? Quo facere sunt adipisci excepturi tempore?",
      "image":"https://generacionxbox.com/wp-content/uploads/2020/09/Halo-3-ODST.jpg"
    },
    {
      "titulo":"Problema de carga de la paguina",
      "user":"@leD1522",
      "fecha":"12:25pm 02 de julio del 2022",
      "estadoColor":"#4BA765",
      "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas pariatur alias enim, velit, architecto tempora minus repellat id odit nostrum provident nulla, molestiae fugiat? Quo facere sunt adipisci excepturi tempore?",
      "image":"https://generacionxbox.com/wp-content/uploads/2020/09/Halo-3-ODST.jpg"
    },
    {
      "titulo":"Problema con los estados",
      "user":"@ASD_15SSD",
      "fecha":"02:25am 31 de febrero del 2007",
      "estadoColor":"#4BA765",
      "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas pariatur alias enim, velit, architecto tempora minus repellat id odit nostrum provident nulla, molestiae fugiat? Quo facere sunt adipisci excepturi tempore?",
      "image":"https://generacionxbox.com/wp-content/uploads/2020/09/Halo-3-ODST.jpg"
    }
  ])

  constructor(private http:HttpClient) { }
  
  getCard():Observable<cardModel[]>{
    return this.card//http.get<cardModel[]>('Route');
  }
}
