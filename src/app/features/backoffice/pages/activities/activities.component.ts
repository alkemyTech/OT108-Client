import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { loadActivitiesList } from "src/app/state/actions/activities.actions";
import { AppState } from "src/app/state/app.state";
import { selectActivities } from "src/app/state/selectors/activities.selector";

@Component({
  selector: "app-activities",
  templateUrl: "./activities.component.html",
  styleUrls: ["./activities.component.scss"],
})
export class ActivitiesComponent implements OnInit {
  list: any;
  list$: Observable<any> = new Observable();
  loading$: Observable<boolean> = new Observable();
  control: boolean = false;
  constructor(private store: Store<{ retrievedActivitiesList: any }>,private router: Router) {
    this.list$ = this.store.select(selectActivities);
  }

  ngOnInit(): void {
    this.store.dispatch(loadActivitiesList());
  }

  getDetail(id: string) {
    this.router.navigate(["/backoffice/activities/" + id]);
  }

  addItem() {
    if (this.control == true) {
      this.control = false;
    } else {
      this.control = true;
    }
  }
}
