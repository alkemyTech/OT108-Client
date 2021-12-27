import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PublicPagesModule } from "./pages/public.pages.module";
import { PagesModule } from "../backoffice/pages/pages.module";
import { ComponentsModule } from "./components/components.module";
import { PublicRoutingModule } from "./public-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [CommonModule, PagesModule, ComponentsModule, PublicRoutingModule,PublicPagesModule, ReactiveFormsModule, FormsModule],
})
export class PublicModule {}
