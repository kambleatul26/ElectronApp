import { DataService } from '../../services/data.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-project-modal',
  templateUrl: './new-project-modal.component.html',
  styleUrls: ['./new-project-modal.component.scss'],
})
export class NewProjectModalComponent implements OnInit {

  projectName;

  fileName;
  updated = false;
  fileToUpload: File;

  constructor(
    private modalCtrl: ModalController,
    private dataS: DataService
  ) { }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.fileName = files.item(0).name;
    this.updated = true;
  }

  createProject() {
    let formData:FormData = new FormData();
    if(this.updated)
    {
      formData.append("file",this.fileToUpload);
      formData.append("name", this.projectName);
      this.dataS.createProject(formData)
        .subscribe(res => {
          // console.log(res);
          this.dataS.projects.push(res['project']);
          this.onCancel();
        }, err => {
          console.log(err);
          this.dataS.presentAlert('Error', err.error.message);
        })
    }
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  ngOnInit() {
  }

}
