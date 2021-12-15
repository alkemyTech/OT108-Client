import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.scss"],
})
export class CardListComponent implements OnInit {
  @Input() id: string | null = null;
  @Input() name: string | null = null;
  @Input() description: string | null = null;
  @Input() image: string | null = null;
  constructor() {}

  ngOnInit(): void {}
}
