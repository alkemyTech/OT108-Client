import { NonNullAssert } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Categories } from "src/app/models/categories";
import { CategoriesService } from "../../services/categories.service";

@Component({
  selector: "app-categories-details",
  templateUrl: "./categories-details.component.html",
  styleUrls: ["./categories-details.component.scss"],
})
export class CategoriesDetailsComponent implements OnInit {
  id: string | null = null;
  category: any;
  edits = false;
  control: boolean = false;
  constructor(
    private serchId: ActivatedRoute,
    private router: Router,
    private service: CategoriesService
  ) {
    this.id = this.serchId.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    if (this.id) {
      this.service.getCategory(this.id).subscribe((data) => {
        this.category = data.data;

        this.verificEdit();
      });
    } else {
    }
  }
  verificEdit() {
    if (this.category.created_at !== this.category.updated_at) {
      this.edits = true;
    }
  }
  date(fecha: string) {
    const dateDay = new Date(fecha).toLocaleString();

    return dateDay;
  }

  delet(id: string) {}
  edit(id: string) {
    this.router.navigate(["/backoffice/categories/edit/" + id]);
  }

  addItem() {
    if (this.control == true) {
      this.control = false;
    } else {
      this.control = true;
    }
  }
}
