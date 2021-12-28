import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SlideService } from '../../services/slide.service';

@Component({
  selector: 'app-slides-detail',
  templateUrl: './slides-detail.component.html',
  styleUrls: ['./slides-detail.component.scss']
})
export class SlidesDetailComponent implements OnInit {
  id: string | null = null;
  slide: any;
  edits = false;
  control: boolean = false;
  constructor(
    private serchId: ActivatedRoute,
    private router: Router,
    private service: SlideService
  ) {
    this.id = this.serchId.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    if (this.id) {
      this.service.getSlide(this.id).subscribe((data) => {
        this.slide = data.data;

        this.verificEdit();
      });
    } else {
    }
  }
  verificEdit() {
    if (this.slide.created_at !== this.slide.updated_at) {
      this.edits = true;
    }
  }
  date(fecha: string) {
    const dateDay = new Date(fecha).toLocaleString();

    return dateDay;
  }

  delet(id: string) {}
  edit(id: string) {
    this.router.navigate(["/backoffice/slides/edit/" + id]);
  }

  addItem() {
    if (this.control == true) {
      this.control = false;
    } else {
      this.control = true;
    }
  }
}
