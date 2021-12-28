import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  id: string | null = null;
  user: any;
  edits = false;
  control: boolean = false;
  constructor(
    private serchId: ActivatedRoute,
    private router: Router,
    private service: UsersService
  ) {
    this.id = this.serchId.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    if (this.id) {
      this.service.getUser(this.id).subscribe((data) => {
        this.user = data.data;

        this.verificEdit();
      });
    } else {
    }
  }
  verificEdit() {
    if (this.user.created_at !== this.user.updated_at) {
      this.edits = true;
    }
  }
  date(fecha: string) {
    const dateDay = new Date(fecha).toLocaleString();

    return dateDay;
  }

  delet(id: string) {}
  edit(id: string) {
    this.router.navigate(["/backoffice/user/edit/" + id]);
  }

  addItem() {
    if (this.control == true) {
      this.control = false;
    } else {
      this.control = true;
    }
  }
}
