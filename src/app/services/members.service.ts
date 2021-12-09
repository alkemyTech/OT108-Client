import { Injectable } from "@angular/core";
import { Members } from "src/app/models/members";
import { PublicApiService } from "./public-api.service";

@Injectable({
  providedIn: "root",
})
export class MembersService {
  constructor(private https: PublicApiService) {}

  create(members: Members) {
    return this.https.post("members", members);
  }

  getMember(id: string) {
    return this.https.get("members", id);
  }
}
