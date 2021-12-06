import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-progress',
  templateUrl: './setup-progress.component.html',
  styleUrls: ['./setup-progress.component.scss']
})
export class SetupProgressComponent implements OnInit {
  progress:number = 70

  constructor() { }

  ngOnInit(): void {
  }

}
