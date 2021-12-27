import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.scss"],
})
export class CardListComponent implements OnInit {
  @Input() id: string | null | undefined = null;
  @Input() name: string | null | undefined = null;
  @Input() description: string | null | undefined = null;
  @Input() image: string | null | undefined = null;
  constructor() {}

  ngOnInit(): void {}
}
