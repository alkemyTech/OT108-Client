import { Component, OnInit } from "@angular/core";
import { ActivityService } from "src/app/services/activity.service";

@Component({
  selector: "app-activities-list",
  templateUrl: "./activities-list.component.html",
  styleUrls: ["./activities-list.component.scss"],
})
export class ActivitiesListComponent implements OnInit {
  activities: any[] = [];
  imagenNull: boolean = false;
  constructor(private service: ActivityService) {}

  ngOnInit(): void {
    this.getActivitys();
  }
  getActivitys() {
    this.service.getActivity().subscribe((data: any) => {
      this.activities = data.data;
    });
  }
}
