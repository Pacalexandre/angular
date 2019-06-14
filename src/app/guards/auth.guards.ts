import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    path: import("@angular/router").ActivatedRouteSnapshot[];
    route: import("@angular/router").ActivatedRouteSnapshot;

    constructor(private roteador: Router){}

    canActivate(): boolean {
        if(localStorage.getItem('TOKEN')){
            return true;
        } else {
            this.roteador.navigate([''])
            return false
        }
    }
}