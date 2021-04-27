import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncomingEventsPage } from './incoming-events.page';

const routes: Routes = [
  {
    path: '',
    component: IncomingEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomingEventsPageRoutingModule {}
