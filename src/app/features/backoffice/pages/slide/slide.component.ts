import { Component, OnInit } from "@angular/core";
import { Slides } from "src/app/models/slides";
import { SlideService } from "../../services/slide.service";

import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import * as slideActions from "../../../../state/actions/slide.actions";
import * as slideSelector from "../../../../state/selectors/slide.selector";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-slide",
  templateUrl: "./slide.component.html",
  styleUrls: ["./slide.component.scss"],
})
export class SlideComponent implements OnInit {
  slide$: Observable<any> = new Observable();
  slides: Slides[] = [];
  imagenNull: boolean = false;
  slideStore$!: Subscription;
  control: boolean = false;

  constructor(
    private service: SlideService,
    private router: Router,
    private store: Store<{ getAllSlides: any }>
  ) {
    this.slide$ = this.store.select(slideSelector.selectAllSlides);
  }

  ngOnInit(): void {
    this.store.dispatch(slideActions.getAllSlides());
  }

  getDetail(id: string) {
    this.router.navigate(["/backoffice/slides/" + id]);
  }

  addItem() {
    if (this.control == true) {
      this.control = false;
    } else {
      this.control = true;
    }
  }
}
