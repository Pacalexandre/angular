import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from './guards/auth.guards';

const rotas: Routes = [
    { path: '',
        loadChildren: 'src/app/modules/login/login.module#LoginModule' 
    },

    { path: 'inbox',  
        loadChildren: 'src/app/modules/caixa-de-entrada/caixa-de-entrada.module#CaixaDeEntradaModule',
        canActivate: [AuthGuard] //protegeUrl 
    },

    { path: 'cadastro',
        loadChildren: 'src/app/modules/cadastro/cadastro.module#CadastroModule' 
    },

    { path: '**',
        redirectTo: 'inbox' 
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard
    ]
})

export class ModuloRoteamento { }