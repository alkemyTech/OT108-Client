import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  control: boolean = false;
  list: any[] = [];

  constructor(private service:MembersService,private router: Router) { }

  ngOnInit(): void {
    this.service.getMember().subscribe((data) => {
      data.data.forEach((element: any) => {
        if (!element.deleted_at) {
          this.list.push(element);
        }
      });
    });
  }

  getDetail(id: string) {
    this.router.navigate(["/backoffice/member/" + id]);
  }

  addItem() {
    if (this.control == true) {
      this.control = false;
    } else {
      this.control = true;
    }
  }
}
