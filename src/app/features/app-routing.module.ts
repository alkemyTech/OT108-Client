import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "public/donatios",
    pathMatch: "full",
  },

  {
    path: "public",
    loadChildren: () =>
      import("./public/public.module").then((m) => m.PublicModule),
  },
  {
    path: "backoffice",
    loadChildren: () =>
      import("./backoffice/backoffice.module").then((m) => m.BackofficeModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
