import { Component, OnInit } from "@angular/core";
import { Slides } from "src/app/models/slides";
import { SlideService } from "../../services/slide.service";

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as slideActions from '../../../../store/slide-store/slide.actions';
import * as slideSelector from '../../../../store/slide-store/slide.selector';
import { Observable } from "rxjs";


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

  constructor(
    private service: SlideService,
    private store: Store<{ getAllSlides: any }>) {
     this.slide$ =  this.store.select(slideSelector.selectAllSlides)
    }

  ngOnInit(): void {
    this.store.dispatch(slideActions.getAllSlides())
 
  }

  
  }
 

