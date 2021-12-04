import { Injectable } from "@angular/core";
import { Members } from "src/app/models/members";
import { PrivateApiService } from "./private-api.service";

@Injectable({
  providedIn: "root",
})
export class MembersService {
  constructor(private https: PrivateApiService) {}

  create(members: Members) {
    return this.https.post("members", members);
  }
  editMembers(members: Members, id: string) {
    return this.https.put("members", members, id);
  }

  getMember(id: string) {
    return this.https.get("members", id);
  }
}
