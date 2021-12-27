import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NewsService } from "../../../backoffice/services/news.service";
import { News } from "../../../../models/news";
import { ToastrService } from "ngx-toastr";

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
  texto: string = "";

  constructor(
    private fb: FormBuilder,
    private servicio: NewsService,
    private toastr: ToastrService
  ) {
    this.buscador = this.fb.group({
      name: ["", Validators.required],
    });
  }

  ngOnInit(): void {}

  btnSearchOnClick() {
    let name = this.buscador.value.name;
    this.searchNews(name);
  }

  searchNews(name: string) {
    this.news = [];
    this.allNews = [];
    let encontrado = false;
    this.servicio.getAllNews().subscribe(
      (res) => {
        if (this.buscador.value.name.length >= 3) {
          this.validacion = true;
          for (let i = 0; i < res.data.length; i++) {
            if (
              res.data[i].name.toLowerCase() ===
              this.buscador.value.name.toLowerCase()
            ) {
              encontrado = true;
              this.news.push(
                res.data[i].name.charAt(0).toUpperCase() +
                  res.data[i].name.slice(1)
              );
            }
          }

          if (!encontrado) {
            this.toastr.toastrConfig.preventDuplicates = true;
            this.toastr.error("That news doesn't exist", "Error", {
              timeOut: 2000,
            });
          }
        }
        if (this.buscador.value.name.length < 3) {
          this.validacion = false;
          this.texto = "All the news";
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
}
