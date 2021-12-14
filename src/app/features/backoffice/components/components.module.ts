import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card/card.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CardsComponent } from "./cards/cards.component";

@NgModule({
  declarations: [CardComponent, CardsComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CardsComponent],
})
export class ComponentsModule {}
