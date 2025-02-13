import { Component, inject, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CredencialPage } from 'src/app/pages/credencial/credencial.page';

@Component({
  selector: 'app-tabmenu',
  templateUrl: './tabmenu.page.html',
  styleUrls: ['./tabmenu.page.scss'],
  standalone: false
})
export class TabmenuPage implements OnInit {

  private modalController = inject(ModalController);

  constructor() { }

  ngOnInit() {}

  public async apresentarModalCredencialCreate() {
    const modal = await this.modalController.create({
      component: CredencialPage,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.25, 0.5, 0.85],
      cssClass: "modal-custom"
    });
    modal.present();
  }

}
