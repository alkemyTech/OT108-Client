import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Activity } from "src/app/models/activities";
import { PrivateApiService } from "./private-api.service";

@Injectable({
  providedIn: "root",
})
export class ActivityService {
  constructor(private https: PrivateApiService) {}

  creationActivity(activity: Activity): Observable<any> {
    return this.https.post("activities", activity);
  }

  editActivity(id: string, activity: Activity): Observable<any> {
    return this.https.put("activities", activity, id);
  }

  getActivity(id?: string) {
    return this.https.get("activities", id);
  }
  delateActivity(id: string) {
    return this.https.delete("activities", id);
  }
}
