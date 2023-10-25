import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images = [
    { name: '7chakras.jpg', caption: '7 Chakras'},
    { name: 'breakout.jpg', caption: 'Breakout'},
    { name: 'fnk.jpg', caption: 'Fast n Kurious'},
    { name: 'killthecat.jpg', caption: 'Kill the Cat'},
    { name: 'kuriositydef.jpg', caption: 'Kuriosity Def'},
    { name: 'mrkuriosity.jpg', caption: 'Mr Kuriosity'},
    { name: 'thankyoubag-blk.HEIC', caption: 'Thank you black'},
    { name: 'thatnkyoubag-red.jpg', caption: 'Thank you red'},
    { name: 'thatsonpyramid.jpg', caption: 'Thats on Pyramid'},
  ]
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
