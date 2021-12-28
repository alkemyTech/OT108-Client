import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-componentcampaign',
  templateUrl: './componentcampaign.component.html',
  styleUrls: ['./componentcampaign.component.scss']
})
export class ComponentcampaignComponent implements OnInit {
  @Input() imgbanner: string | null = null;
  @Input() titleCampa: string |  null = null;
  @Input() img1: string | null = null;
  @Input() description: string | null = null;
  @Input() days: string | null = null;

  
  constructor() { }

  ngOnInit(): void {
  }

}
