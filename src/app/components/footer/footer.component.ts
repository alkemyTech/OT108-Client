import { Component, OnInit } from "@angular/core";
import { OrganizationService } from "src/app/features/backoffice/services/organization.service";
import { Organization } from "src/app/models/organization";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  organization: Organization | null;

  constructor(private serivce: OrganizationService) {
    this.organization = null;
  }

  ngOnInit(): void {
    this.getOrganization();
  }

  getOrganization() {
    this.serivce.getOrganization(1).subscribe((res) => {
      this.organization = res.data;
    });
  }
}
