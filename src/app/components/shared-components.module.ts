import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmailFormFieldDirective } from './cmail-form-group/cmail-form-field.directive';
import { CmailFormGroupComponent } from './cmail-form-group/cmail-form-group.component';
import { CmailListItemComponent } from './cmail-list-item/cmail-list-item.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        HeaderComponent, 
        CmailListItemComponent,
        CmailFormFieldDirective,
        CmailFormGroupComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent, 
        CmailListItemComponent,   
        CmailFormFieldDirective,
        CmailFormGroupComponent
    ]
})

export class SharedComponentModule{}