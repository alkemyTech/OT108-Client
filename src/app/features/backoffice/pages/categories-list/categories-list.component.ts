import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Categories } from "src/app/models/categories";
import { CategoriesService } from "../../services/categories.service";

@Component({
  selector: "app-categories-list",
  templateUrl: "./categories-list.component.html",
  styleUrls: ["./categories-list.component.scss"],
})
export class CategoriesListComponent implements OnInit {
  list: any[] = [];
  listCopy: any[] = [];
  search: string = "";
  control: boolean = false;
  constructor(private service: CategoriesService, private router: Router) {}

  ngOnInit(): void {
    this.service.getCategory().subscribe((data) => {
      data.data.forEach((element: any) => {
        if (!element.deleted_at) {
          this.list.push(element);
          this.listCopy = this.list;
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

  filter() {
    this.listCopy = this.list;
    if (this.listCopy && this.search.length > 3) {
      const listFilter = this.listCopy?.filter((category: Categories) => {
        return (
          category.name?.toLowerCase().includes(this.search.toLowerCase()) ||
          category.description
            ?.toLocaleLowerCase()
            .includes(this.search.toLowerCase())
        );
      });
      if (listFilter) {
        this.listCopy = listFilter;
      }
    }
  }
}
