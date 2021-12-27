import { Component, OnDestroy, OnInit } from "@angular/core";
import { Slides } from "src/app/models/slides";
import { SlideService } from "../../services/slide.service";

import { Store } from "@ngrx/store";
import { Subscription, timer } from "rxjs";
import * as slideActions from "../../../../state/actions/slide.actions";
import * as slideSelector from "../../../../state/selectors/slide.selector";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-slide",
  templateUrl: "./slide.component.html",
  styleUrls: ["./slide.component.scss"],
})
export class SlideComponent implements OnInit, OnDestroy {
  slide$: Observable<any> = new Observable();
  slides: Slides[] = [];
  imagenNull: boolean = false;
  slideStore$!: Subscription;
  control: boolean = false;
  search: string = "";
  list: Slides[] | null = null;
  listCopy: Slides[] | null = null;
  constructor(
    private service: SlideService,
    private router: Router,
    private store: Store<{ getAllSlides: any }>
  ) {
    this.slide$ = new Observable();
    this.slide$ = this.store.select(slideSelector.selectAllSlides);
  }

  ngOnInit(): void {
    this.store.dispatch(slideActions.getAllSlides());
    if (!this.list) {
      this.slide$.subscribe((list: any) => {
        this.list = null;
        this.listCopy = [];
        this.list = list;
        this.listCopy = list;
      });
    }
  }
  ngOnDestroy(): void {
    this.list = null;
    this.listCopy = null;
  }
  getDetail(id: number) {
    this.router.navigate(["/backoffice/slides/" + id]);
  }

  addItem() {
    if (this.control == true) {
      this.control = false;
    } else {
      this.control = true;
    }
  }

  filterSlider() {
    this.listCopy = null;
    this.listCopy = this.list;
    if (this.listCopy && this.search.length > 3) {
      const listFilter = this.listCopy?.filter((slide: Slides) => {
        return (
          slide.name?.toLowerCase().includes(this.search.toLowerCase()) ||
          slide.description
            ?.toLocaleLowerCase()
            .includes(this.search.toLowerCase())
        );
      });
      if (listFilter) {
        this.listCopy = listFilter;
      }
    }
  }
  id(numer: number) {
    return numer.toString();
  }
}
