import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { CadastroComponent } from './cadastro.component';
import { CadastroRoutingModule } from './cadastro-routing.module';

@NgModule({
    declarations: [
        CadastroComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedComponentModule,
        CadastroRoutingModule
    ],
    exports: [CadastroComponent]
})
export class CadastroModule { }

