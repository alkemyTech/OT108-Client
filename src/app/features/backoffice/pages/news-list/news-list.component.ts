import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { News } from "src/app/models/news";
import { NewsService } from "../../services/news.service";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.scss"],
})
export class NewsListComponent implements OnInit {
  list: any[] = [];
  listCopy: any[] = [];
  search: string = "";
  control: boolean = false;
  constructor(private service: NewsService, private router: Router) {}

  ngOnInit(): void {
    this.service.getAllNews().subscribe((data) => {
      data.data.forEach((element: any) => {
        if (!element.deleted_at) {
          this.list.push(element);
          this.listCopy = this.list;
        }
      });
    });
  }
  getDetail(id: string) {
    this.router.navigate(["/backoffice/news/" + id]);
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
      const listFilter = this.listCopy?.filter((news: News) => {
        return (
          news.name?.toLowerCase().includes(this.search.toLowerCase()) ||
          news.content?.toLocaleLowerCase().includes(this.search.toLowerCase())
        );
      });
      if (listFilter) {
        this.listCopy = listFilter;
      }
    }
  }
}
