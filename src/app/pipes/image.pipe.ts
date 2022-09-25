import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.imgPath;

@Pipe({
  name: 'image',
  pure: false
})
export class ImagePipe implements PipeTransform {
  transform(img: string, size: string = 'w500'): string {
    if (!img) {
      return 'assets/images/no-image-banner.jpg';
    }

    const imgURL = `${URL}/${size}${img}`;
    return imgURL;
  }
}
