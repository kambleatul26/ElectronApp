import { NewProjectModalComponent } from './../components/new-project-modal/new-project-modal.component';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  constructor(
    public modalController: ModalController,
    public dataS: DataService,
    private domSanitizer: DomSanitizer
  ) {
    this.dataS.getProjects()
      .subscribe(res => {
        // console.log(res);
        this.dataS.projects = res['projects'];
      }, err => {
        this.dataS.presentAlert('Error', err.error.message);
        console.log(err);
      })
  }

  createProject() {
    this.presentModal();
  }

  arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
    }
    return btoa(binary);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: NewProjectModalComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
