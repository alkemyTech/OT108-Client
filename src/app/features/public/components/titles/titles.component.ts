import { Component, OnInit } from "@angular/core";
import { SlideService } from "src/app/services/slide.service";
import { NewsService } from "src/app/features/backoffice/services/news.service";

@Component({
  selector: "app-titles",
  templateUrl: "./titles.component.html",
  styleUrls: ["./titles.component.scss"],
})
export class TitlesComponent implements OnInit {
  image: string = "";
  title: string = "";

  constructor(private service: NewsService) {}

  ngOnInit(): void {
    this.service.getNews("054").subscribe((res) => {
      this.image = res.data.image;
      this.title = res.data.name;
    });
    if (this.image == "" && this.title == "") {
      this.image =
        "https://www.grancapitan.com.ar/wp-content/uploads/2014/10/default-img.gif";
      this.title = "No hay titulo disponible";
    }
  }

  getBackGroundImage() {
    return { "background-image": "url(" + this.image + ")" };
  }
}
