import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Activity } from "src/app/models/activities";
import { environment } from "src/environments/environment";
import { PrivateApiService } from "./private-api.service";

@Injectable({
  providedIn: "root",
})
export class ActivityService {
  url = environment.activities;
  constructor(private https: PrivateApiService) {}

  creationActivity(activity: Activity): Observable<any> {
    return this.https.post(this.url, activity);
  }

  editActivity(id: string, activity: Activity): Observable<any> {
    return this.https.put(this.url, activity, id);
  }

  getActivity(id?: string): Observable<any> {
    return this.https.get(this.url, id);
  }
  delateActivity(id: string) {
    return this.https.delete(this.url, id);
  }
}
