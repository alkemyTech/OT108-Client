import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from '../../services/activity.service';


@Component({
  selector: 'app-activities-details',
  templateUrl: './activities-details.component.html',
  styleUrls: ['./activities-details.component.scss']
})
export class ActivitiesDetailsComponent implements OnInit {
  id: string | null = null;
  activity: any;
  edits = false;
  control: boolean = false;
  constructor(
    private serchId: ActivatedRoute,
    private router: Router,
    private service: ActivityService
  ) {
    this.id = this.serchId.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    if (this.id) {
      this.service.getActivity(this.id).subscribe((data) => {
        this.activity = data.data;

        this.verificEdit();
      });
    } else {
    }
  }
  verificEdit() {
    if (this.activity.created_at !== this.activity.updated_at) {
      this.edits = true;
    }
  }
  date(fecha: string) {
    const dateDay = new Date(fecha).toLocaleString();

    return dateDay;
  }

  delet(id: string) {}
  edit(id: string) {
    this.router.navigate(["/backoffice/activities/edit/" + id]);
  }

  addItem() {
    if (this.control == true) {
      this.control = false;
    } else {
      this.control = true;
    }
  }
}
