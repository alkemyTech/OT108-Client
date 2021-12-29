import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Activity } from "src/app/models/activities";
import { loadActivitiesList } from "src/app/state/actions/activities.actions";
import { AppState } from "src/app/state/app.state";
import { selectActivities } from "src/app/state/selectors/activities.selector";

@Component({
  selector: "app-activities",
  templateUrl: "./activities.component.html",
  styleUrls: ["./activities.component.scss"],
})
export class ActivitiesComponent implements OnInit {
  list: Activity[] | null = null;
  list$: Observable<any> = new Observable();
  loading$: Observable<boolean> = new Observable();
  listCopy: Activity[] | null = null;
  search: string = "";
  control: boolean = false;
  constructor(
    private store: Store<{ retrievedActivitiesList: any }>,
    private router: Router
  ) {
    this.list$ = this.store.select(selectActivities);
  }

  ngOnInit(): void {
    this.store.dispatch(loadActivitiesList());
    if (!this.list) {
      this.list$.subscribe((list: any) => {
        this.list = null;
        this.listCopy = [];
        this.list = list;
        this.listCopy = list;
      });
    }
  }

  getDetail(id: number) {
    this.router.navigate(["/backoffice/activities/" + id]);
  }

  addItem() {
    if (this.control == true) {
      this.control = false;
    } else {
      this.control = true;
    }
  }

  filter() {
    this.listCopy = this.list;
    if (this.listCopy && this.search.length > 3) {
      const listFilter = this.listCopy?.filter((activities: Activity) => {
        return (
          activities.name?.toLowerCase().includes(this.search.toLowerCase()) ||
          activities.description
            ?.toLocaleLowerCase()
            .includes(this.search.toLowerCase())
        );
      });
      if (listFilter) {
        this.listCopy = listFilter;
      }
    }
  }

  id(numer: number) {
    return numer.toString();
  }
}
