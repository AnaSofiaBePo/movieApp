import { NgModule } from '@angular/core';
import { ImagePipe } from './image.pipe';
import { PeersPipe } from './peers.pipe';

@NgModule({
  declarations: [ImagePipe, PeersPipe],
  imports: [],
  exports: [ImagePipe],
})
export class PipesModule {}
