import { Component, OnInit } from "@angular/core";
import { Activity } from "src/app/models/activities";
import { ActivityService } from "../../services/activity.service";

@Component({
  selector: "app-activities",
  templateUrl: "./activities.component.html",
  styleUrls: ["./activities.component.scss"],
})
export class ActivitiesComponent implements OnInit {
  activities: any[] = [];
  imagenNull: boolean = false;

  constructor(private service: ActivityService) {}

  ngOnInit(): void {
    this.getActivitys();
  }

  getActivitys() {
    this.service.getActivity().subscribe((data: any) => {
      data.forEach((element: any) => {
        this.activities.push(element.data);
      });
    });
  }
}
