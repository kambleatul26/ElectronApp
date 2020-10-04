import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  loading;
  projects = []

  constructor(
    private http: HttpClient,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
  ) { }

  createProject(formData) {
    const createProjectURL = environment.URL + 'api/project/addProject';
    return this.http.post(createProjectURL, formData);
  }

  getProjects() {
    const getProjectsURL = environment.URL + 'api/project/getProjects';
    return this.http.get(getProjectsURL);
  }

  async presentLoading(msg) {
    this.loading = await this.loadingCtrl.create({
      spinner: 'crescent',
      message: msg,
      translucent: true,
      cssClass: 'custom-loading'
    });
    return await this.loading.present();
  }

  async presentAlert(header, msg) {
    const alert = await this.alertCtrl.create({
      header: header,
      // subHeader: 'Subtitle',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
}
