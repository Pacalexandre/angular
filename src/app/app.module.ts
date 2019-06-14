import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModuloRoteamento } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponentModule } from './components/shared-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedComponentModule,
    ModuloRoteamento

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
