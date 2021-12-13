import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesModule } from "./pages/pages.module";
import { ComponentsModule } from "./components/components.module";
import { PublicRoutingModule } from "./public-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, PagesModule, ComponentsModule, PublicRoutingModule],
})
export class PublicModule {}
