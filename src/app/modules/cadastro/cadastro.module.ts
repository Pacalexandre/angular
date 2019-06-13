import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CmailFormFieldDirective } from 'src/app/components/cmail-form-group/cmail-form-field.directive';
import { CmailFormGroupComponent } from 'src/app/components/cmail-form-group/cmail-form-group.component';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';

@NgModule({
    declarations: [
        CadastroComponent,
        CmailFormFieldDirective,
        CmailFormGroupComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedComponentModule,
        //CmailFormModule,
        CadastroRoutingModule
    ],
    exports: [
        CadastroComponent
    ]
})
export class CadastroModule { }

