import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';


const rotas: Routes = [
    {path: '', component: LoginComponent},
    {path: 'inbox', component: CaixaDeEntradaComponent },
    {path: 'cadastro', loadChildren: 'src/app/modules/cadastro/cadastro.module#CadastroModule'},
    {path: '**',redirectTo: 'inbox'}
]

//export const ModuloRoteamento = RouterModule.forRoot(rotas);

@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ],
    exports: [ RouterModule]
})

export class ModuloRoteamento{}