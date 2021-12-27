import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardListComponent } from "./card-list/card-list.component";
import { EmptyCardComponent } from "./empty-card/empty-card.component";

@NgModule({
  declarations: [CardListComponent, EmptyCardComponent],
  imports: [CommonModule],
  exports: [CardListComponent, EmptyCardComponent],
})
export class ComponentssModule {}
