import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NewsService } from "../../../backoffice/services/news.service";
import { News } from "../../../../models/news";

@Component({
  selector: "app-search-news",
  templateUrl: "./search-news.component.html",
  styleUrls: ["./search-news.component.scss"],
})
export class SearchNewsComponent implements OnInit {
  buscador: FormGroup;
  news: News[] = [];
  allNews: News[] = [];
  validacion: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _route: ActivatedRoute,
    private servicio: NewsService,
    private _router: Router
  ) {
    this.buscador = this.fb.group({
      name: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    
    this._route.queryParams.subscribe((params) => {
      if (params["search"] !== undefined) {
        this.searchNews(params["search"]);
      }
    });
  
  }

  btnSearchOnClick() {
    let name = this.buscador.value.name;
    this.searchNews(name);
    this.agregarSearchURL(name);
  }

  searchNews(name: string) {
    this.servicio.getAllNews().subscribe(
      (res) => {
        if (this.buscador.value.name.length >= 3) {
          this.validacion = true;
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].name === this.buscador.value.name) {
              this.news.push(
                res.data[i].name.charAt(0).toUpperCase() +
                  res.data[i].name.slice(1)
              );
            }
          }
        }
        if (this.buscador.value.name.length < 3) {
          for (let i = 0; i < res.data.length; i++) {
            this.allNews.push(
              res.data[i].name.charAt(0).toUpperCase() +
                res.data[i].name.slice(1)
            );
          }
        }
      },
      (error) => {
        console.log("imprimiendo error ", error);
      }
    );
  }

  agregarSearchURL(searchValue: string) {
    // changes the route without moving from the current view or
    // triggering a navigation event,
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        search: searchValue,
      },
      queryParamsHandling: "merge",
      // preserve the existing query params in the route
      skipLocationChange: false,
      // do not trigger navigation
    });
  }
}
