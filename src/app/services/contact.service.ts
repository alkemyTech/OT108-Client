import { Injectable } from '@angular/core';
import { Contact } from '../models/conctact';
import { PrivateApiServiceService } from './private-api-service.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:PrivateApiServiceService) { }

  creationContact(contacts:Contact){
    return this.http.post("contacts",contacts);
  }
}



