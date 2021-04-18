import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralGuidePageRoutingModule } from './general-guide-routing.module';

import { GeneralGuidePage } from './general-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralGuidePageRoutingModule
  ],
  declarations: [GeneralGuidePage]
})
export class GeneralGuidePageModule {}
