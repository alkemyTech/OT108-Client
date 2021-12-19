import { Component, OnInit } from "@angular/core";
import { ActivityService } from "src/app/services/activity.service";
import { DialogService } from "src/app/services/dialog.service";

@Component({
  selector: "app-activities-list",
  templateUrl: "./activities-list.component.html",
  styleUrls: ["./activities-list.component.scss"],
})
export class ActivitiesListComponent implements OnInit {
  activities: any[] = [];
  imagenNull: boolean = false;
  load:boolean = false
  constructor(
    private service: ActivityService,
    private serviceDialog: DialogService) {}

  ngOnInit(): void {
    this.getActivitys();
  }
  getActivitys() {
    this.service.getActivity().subscribe((data: any) => {
      this.activities = data.data
      this.load = true
    },
    (error) => {
      this.serviceDialog.openErrorDialog();
      this.load = true
    }
    );
    
  }
}
