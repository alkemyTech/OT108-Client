import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/state/app.state";
import { selectAuth } from "src/app/state/selectors/auth.selector";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  auth$: Observable<boolean> = new Observable();
  constructor(private store: Store<AppState>, private router: Router) {
    this.auth$ = this.store.select(selectAuth);
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let auths: boolean = false;
    this.auth$.subscribe((auth) => {
      auths = auth;
    });
    if (auths) {
      return true;
    } else {
      this.router.navigate(["/public"]);
      return false;
    }
  }
}
