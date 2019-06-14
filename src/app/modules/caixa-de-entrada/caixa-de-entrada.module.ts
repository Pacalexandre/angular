import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-rounting.module';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';

@NgModule({
    declarations: [
        CaixaDeEntradaComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedComponentModule,
        HttpClientModule,
        CaixaDeEntradaRoutingModule     
    ],
    exports: [CaixaDeEntradaComponent]
})
export class CaixaDeEntradaModule { }