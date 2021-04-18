import { SupervisorComponent } from './../components/supervisor/supervisor.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import {TweetComponent} from '../components/tweet/tweet.component';
import {SharedComponentsModule} from '../components/shared-components.module';
import {SharedDirectivesModule} from '../directives/shared-directives.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    SharedComponentsModule,
    SharedDirectivesModule
  ],
    declarations: [Tab1Page, TweetComponent, SupervisorComponent]
})
export class Tab1PageModule {}
