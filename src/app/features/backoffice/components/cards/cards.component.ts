import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"],
})
export class CardsComponent implements OnInit {
  @Input() id: string | null = null;
  @Input() name: string | null = null;
  @Input() description: string | null = null;
  @Input() image: string | null = null;
  constructor() {}

  ngOnInit(): void {}
}
