import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from '../../services/activity.service';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  id: string | null = null;
  news: any;
  edits = false;
  control: boolean = false;
  constructor(
    private serchId: ActivatedRoute,
    private router: Router,
    private service: NewsService
  ) {
    this.id = this.serchId.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    if (this.id) {
      this.service.getNews(this.id).subscribe((data) => {
        this.news = data.data;

        this.verificEdit();
      });
    } else {
    }
  }
  verificEdit() {
    if (this.news.created_at !== this.news.updated_at) {
      this.edits = true;
    }
  }
  date(fecha: string) {
    const dateDay = new Date(fecha).toLocaleString();

    return dateDay;
  }

  delet(id: string) {}
  edit(id: string) {
    this.router.navigate(["/backoffice/news/edit/" + id]);
  }

  addItem() {
    if (this.control == true) {
      this.control = false;
    } else {
      this.control = true;
    }
  }
}
