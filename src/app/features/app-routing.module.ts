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
    path: "backoffice",
    loadChildren: () =>
      import("../features/backoffice/backoffice.module").then(
        (m) => m.BackofficeModule
      ),
  },
  {
    path: "public",
    loadChildren: () =>
      import("./public.module").then((m) => m.PublicModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
