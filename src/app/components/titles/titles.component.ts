import { Component, OnInit } from '@angular/core';
import { SlideService } from 'src/app/services/slide.service';
import { NewsService } from '../../features/pages/news/news-form/news.service'

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss']
})
export class TitlesComponent implements OnInit {

  image:string = ""
  title:string = ""
  defaultImg:string = "https://www.grancapitan.com.ar/wp-content/uploads/2014/10/default-img.gif"

  constructor(private service:NewsService) {
    this.service.obtenerNovedad("1054").subscribe(res =>
      {this.image = res.data.image
      this.title = res.data.name}
       )
   }

  ngOnInit(): void {
    
  }

  getBackGroundImage(){
    return {'background-image': 'url(' + this.image + ')'}
  }

  getDefaultImage(){
    return {'background-image': 'url(' + this.defaultImg + ')'}
  }

}
