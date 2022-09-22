import { Pipe, PipeTransform } from '@angular/core';

const URL = 'https://image.tmdb.org/t/p';

@Pipe({
  name: 'image',
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
