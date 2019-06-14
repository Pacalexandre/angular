import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { LoginRoutingModule } from './login-routing.modules';
import { LoginComponent } from './login.component';
import { LoginService } from 'src/app/services/login.services';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedComponentModule,
        LoginRoutingModule
    ],
    exports: [
        LoginComponent
    ],
    providers: [
        LoginService
    ]
})
export class LoginModule { }