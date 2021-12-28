import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  list: any[] = [];
  control: boolean = false;
  constructor(private service: NewsService, private router: Router) {}

  ngOnInit(): void {
    this.service.getAllNews().subscribe((data) => {
      data.data.forEach((element: any) => {
        if (!element.deleted_at) {
          this.list.push(element);
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
}


