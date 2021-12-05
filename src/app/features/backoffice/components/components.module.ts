import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card/card.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ContactoFormComponent } from "./contacto/contacto-form/contacto-form.component";

@NgModule({
  declarations: [CardComponent, ContactoFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ComponentsModule {}
