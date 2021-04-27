import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncomingEventsPageRoutingModule } from './incoming-events-routing.module';

import { IncomingEventsPage } from './incoming-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncomingEventsPageRoutingModule
  ],
  declarations: [IncomingEventsPage]
})
export class IncomingEventsPageModule {}
