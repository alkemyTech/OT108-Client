import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Organization } from "src/app/models/organization";
import { OrganizationService } from "../../services/organization.service";

@Component({
  selector: "app-organization",
  templateUrl: "./organization.component.html",
  styleUrls: ["./organization.component.scss"],
})
export class OrganizationComponent implements OnInit {
  Organization!: Organization;
  name: any;
  logo: string | undefined;
  short_description: string | undefined;

  constructor(
    private organizationService: OrganizationService,
    private actividadRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getOrganization();
  }

  getOrganization() {
    return this.organizationService.getOrganization(1).subscribe((res: any) => {
      this.name = res.data?.name;
      this.logo = res.data?.logo;
      this.short_description = res.data?.short_description;
    });
  }
}
