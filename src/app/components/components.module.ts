import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { PipesModule } from '../pipes/pipes.module';
import { ShowPeersComponent } from './show-peers/show-peers.component';
import { SlidesShowBackdropComponent } from './slides-show-backdrop/slides-show-backdrop.component';
import { SlidesShowPosterComponent } from './slides-show-poster/slides-show-poster.component';

@NgModule({
  declarations: [SlidesShowBackdropComponent, SlidesShowPosterComponent, ShowPeersComponent],
  imports: [CommonModule, IonicModule, SwiperModule, PipesModule],
  exports: [SlidesShowBackdropComponent, SlidesShowPosterComponent, ShowPeersComponent],
})
export class ComponentsModule {}
