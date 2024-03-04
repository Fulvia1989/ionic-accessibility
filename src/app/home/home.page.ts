import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { ModalComponent } from './components/modal/modal.component';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
modal;
messageResp;

@ViewChild(IonModal) modalRef: IonModal;

message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
name: string;



  constructor(
    private modalCtrl: ModalController,

  ) { }

  ngOnInit() {
  }
  

  async openModal() {
    if(!this.modal){
      this.modal = await this.modalCtrl.create({
        component: ModalComponent,
        backdropDismiss: false,
        swipeToClose: false,
        htmlAttributes: {'aria-labelledby':'modal-title'}
        
      });

      this.modal.present().then(()=>{
        let h2 = document.getElementById('modal-h2');
        console.log(h2);
        h2?.focus();
        this.modalCtrl.getTop().then(res=> console.log(res));
      })

      const { data, role } = await this.modal.onWillDismiss();
      this.modal = null;

      if (role === 'confirm') {
        this.messageResp = `Hello from ModalCtrl, ${data}!`;
      }
    }
  }

  cancel() {
    this.modalRef.dismiss(null, 'cancel');
  }
  
  confirm() {
    this.modalRef.dismiss(this.name, 'confirm');
  }
  onWillPresent(event){
    console.log(this.modalRef);
    let h2 = document.getElementById('inline-modal-h2');
    console.log(h2);
    h2?.focus();

  }
  
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.messageResp = `Hello from Inline Modal, ${ev.detail.data}!`;
    }
  }

}
