import { NewProjectModalComponent } from './../components/new-project-modal/new-project-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectsPageRoutingModule } from './projects-routing.module';

import { ProjectsPage } from './projects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectsPageRoutingModule
  ],
  declarations: [
    ProjectsPage,
    NewProjectModalComponent
  ],
  entryComponents: [NewProjectModalComponent]
})
export class ProjectsPageModule {}
