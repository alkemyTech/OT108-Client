import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PublicPagesModule } from "./pages/public.pages.module";
import { PagesModule } from "../backoffice/pages/pages.module";
import { ComponentsModule } from "./components/components.module";
import { PublicRoutingModule } from "./public-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, PagesModule, ComponentsModule, PublicRoutingModule,PublicPagesModule],
})
export class PublicModule {}
