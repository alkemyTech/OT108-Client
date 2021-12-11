import { Injectable } from "@angular/core";
import { Members } from "src/app/models/members";
import { environment } from "src/environments/environment";
import { PrivateApiService } from "./private-api.service";

@Injectable({
  providedIn: "root",
})
export class MembersService {
  url = environment.members;
  constructor(private https: PrivateApiService) {}

  create(members: Members) {
    return this.https.post(this.url, members);
  }
  editMembers(members: Members, id: string) {
    return this.https.put(this.url, members, id);
  }

  getMember(id: string) {
    return this.https.get(this.url, id);
  }
}
