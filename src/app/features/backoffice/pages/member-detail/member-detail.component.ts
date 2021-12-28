import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {
  id: string | null = null;
  member: any;
  edits = false;
  control: boolean = false;
  constructor(
    private serchId: ActivatedRoute,
    private router: Router,
    private service: MembersService
  ) {
    this.id = this.serchId.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    if (this.id) {
      this.service.getMember(this.id).subscribe((data) => {
        this.member = data.data;

        this.verificEdit();
      });
    } else {
    }
  }
  verificEdit() {
    if (this.member.created_at !== this.member.updated_at) {
      this.edits = true;
    }
  }
  date(fecha: string) {
    const dateDay = new Date(fecha).toLocaleString();

    return dateDay;
  }

  delet(id: string) {}
  edit(id: string) {
    this.router.navigate(["/backoffice/member/edit/" + id]);
  }

  addItem() {
    if (this.control == true) {
      this.control = false;
    } else {
      this.control = true;
    }
  }
}
