import { Component, OnInit } from "@angular/core";
import { Slides } from "src/app/models/slides";
import { SlideService } from "../../services/slide.service";

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as slideActions from '../../../../store/slide-store/slide.actions';
import * as slideSelector from '../../../../store/slide-store/slide.selector';


@Component({
  selector: "app-slide",
  templateUrl: "./slide.component.html",
  styleUrls: ["./slide.component.scss"],
})
export class SlideComponent implements OnInit {
  slides: Slides[] = [];
  imagenNull: boolean = false;
   slideStore$!: Subscription;

  constructor(
    private service: SlideService,
    private store: Store<{ slide: any }>) {
      this.store.dispatch(slideActions.getAllSlides())
    }

  ngOnInit(): void {
  this.slideStore$ = this.store.select(slideSelector.selectAllSlides)
  .subscribe((slide) => {
    this.slides = [...slide];
    console.log(slide)
  }

  )
  }
 
}
