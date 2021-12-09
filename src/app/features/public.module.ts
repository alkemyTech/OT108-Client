import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesModule } from "./public/pages/pages.module";
import { ComponentsModule } from "./public/components/components.module";
import { PublicRoutingModule } from "./public/public-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, PagesModule, ComponentsModule, PublicRoutingModule],
})
export class PublicModule {}
