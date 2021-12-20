import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CategoriesService } from "../../services/categories.service";

@Component({
  selector: "app-categories-list",
  templateUrl: "./categories-list.component.html",
  styleUrls: ["./categories-list.component.scss"],
})
export class CategoriesListComponent implements OnInit {
  list: any[] = [];
  control: boolean = false;
  constructor(private service: CategoriesService, private router: Router) {}

  ngOnInit(): void {
    this.service.getCategory().subscribe((data) => {
      data.data.forEach((element: any) => {
        if (!element.deleted_at) {
          this.list.push(element);
        }
      });
    });
  }
  getDetail(id: string) {
    this.router.navigate(["/backoffice/categories/" + id]);
  }

  addItem() {
    if (this.control == true) {
      this.control = false;
    } else {
      this.control = true;
    }
  }
}
