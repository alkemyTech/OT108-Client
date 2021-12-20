import { Component, OnInit } from "@angular/core";
import { timer } from "rxjs";
import { SlideService } from "src/app/features/backoffice/services/slide.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  welcomeText: string = `<H1>SOMOS MAS ONG</H1>`;
  itemList: any;
  load: boolean = true;
  constructor(private service: SlideService) {}

  ngOnInit(): void {
    this.service.getAllSlides().subscribe((res: any) => {
      this.itemList = res.data;
      this.load = false;
    });
  }
}
