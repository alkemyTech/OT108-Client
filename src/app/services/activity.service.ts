import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { Activity } from "../models/activities";
import { PublicApiService } from "./public-api.service";

@Injectable({
  providedIn: "root",
})
export class ActivityService {
  constructor(private https: PublicApiService) {}

  creationActivity(activity: Activity): Observable<any> {
    return this.https.post("activities", activity);
  }

  getActivity(id?: string) {
    return this.https.get("activities", id);
  }
}
