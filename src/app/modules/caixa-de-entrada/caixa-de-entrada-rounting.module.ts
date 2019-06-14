import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';

const rotaCaixaDeEntrada: Routes = [
    { path: '', component: CaixaDeEntradaComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(rotaCaixaDeEntrada)
    ],
    exports: [RouterModule]
})

export class CaixaDeEntradaRoutingModule { }