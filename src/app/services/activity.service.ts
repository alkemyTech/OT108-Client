import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { Activity } from "../models/activities";
import { PrivateApiServiceService } from "./private-api-service.service";
@Injectable({
  providedIn: "root",
})
export class ActivityService {
  constructor(private https: PrivateApiServiceService) {}

  creationActivity(activity: Activity): Observable<any> {
    return this.https.post("activities", activity);
  }

  editActivity(id: string, activity: Activity): Observable<any> {
    return this.https.put("activities", activity, id);
  }

  getActivity(id: string) {
    return this.https.get("activities", id);
  }
}
