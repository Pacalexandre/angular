import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { ModuloRoteamento } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponentModule } from './components/shared-components.module';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';
import { CmailFormGroupComponent } from './components/cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from './components/cmail-form-group/cmail-form-field.directive';


@NgModule({
  declarations: [
    AppComponent,
    CaixaDeEntradaComponent,
    LoginComponent,
    CmailFormFieldDirective,
    CmailFormGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento,
    ReactiveFormsModule,
    HttpClientModule,
    SharedComponentModule,
    ModuloRoteamento

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
