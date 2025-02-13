import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CredencialPageRoutingModule } from './credencial-routing.module';
import { CredencialPage } from './credencial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CredencialPageRoutingModule
  ],
  declarations: [CredencialPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CredencialPageModule {}
