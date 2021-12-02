import { Injectable } from '@angular/core';
import { Members } from 'src/app/models/members'; 
import { PrivateApiServiceService } from './private-api-service.service';


@Injectable({
  providedIn: 'root'
})
export class MembersService {
  
  constructor(
    private https: PrivateApiServiceService
    ) { }

  create(members:Members){
    return this.https.post("members",members);
  }
  editarMembers(members:Members,id:string){
    return this.https.put("members",members,id)
  }


  getMember(id:string){
    return this.https.get("members",id);
  }
}