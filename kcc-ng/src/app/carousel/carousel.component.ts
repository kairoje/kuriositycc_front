import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images = [
    { name: '7chakras.png', caption: '7 Chakras'},
    { name: 'breakout.png', caption: 'Breakout'},
    { name: 'fnk.png', caption: 'Fast n Kurious'},
    { name: 'kuriositydef.png', caption: 'Kuriosity Def'},
    { name: 'mrkuriosity.png', caption: 'Mr Kuriosity'},
    { name: 'thankyoubag-red.png', caption: 'Thank you red'},
    { name: 'thatsonpyramid.png', caption: 'Thats on Pyramid'},
  ]; 
  
  ngOnInit(): void {}

}
