import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import {  Observable } from "rxjs";
import { loadActivitiesList } from "src/app/state/actions/activities.actions";
import { selectActivities } from "src/app/state/selectors/activities.selector";

@Component({
  selector: "app-activities-list",
  templateUrl: "./activities-list.component.html",
  styleUrls: ["./activities-list.component.scss"],
})
export class ActivitiesListComponent implements OnInit {
  activities: any[] = [];
  imagenNull: boolean = false;
  list$: Observable<any> = new Observable();
  load:boolean = false;
  constructor(private store: Store) {
    this.list$ = this.store.select(selectActivities);
  }

  ngOnInit(): void {
    this.store.dispatch(loadActivitiesList());
    this.load = true;
  }
}
