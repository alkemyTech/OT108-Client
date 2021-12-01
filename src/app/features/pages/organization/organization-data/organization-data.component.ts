import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizationService } from 'src/app/services/organization.service';
import { Organization } from 'src/app/models/organization';
@Component({
  selector: 'app-organization-data',
  templateUrl: './organization-data.component.html',
  styleUrls: ['./organization-data.component.scss']
})
export class OrganizationDataComponent implements OnInit {
  Organization!: Organization; 
  name: any;
  logo: string | undefined;
  short_description: string | undefined;


  constructor(
    private organizationService: OrganizationService,
    private actividadRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getOrganization();
    console.log(this.Organization)
  }
  getOrganization(){
    return this.organizationService.getOrganization(1).subscribe((res)=>{
        this.name=res.data?.name;
        this.logo=res.data?.logo;
        this.short_description=res.data?.short_description;
         
       })
  }

}
