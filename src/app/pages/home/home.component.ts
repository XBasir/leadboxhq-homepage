import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featuredResponsive;

  featuredSlides: any = [{
    'title': 'featured-slide1',
    'featuredTitle': '2016 Tesla Model X P90D Ludicrous',
    'status': 'SOLD',
    'image': 'assets/images/featured-slide-car.webp'
  },
  {
    'title': 'featured-slide2',
    'featuredTitle': '2016 Tesla Model X P90D Ludicrous',
    'status': 'SOLD',
    'image': 'assets/images/featured-slide-car.webp'
  },
  {
    'title': 'featured-slide3',
    'featuredTitle': '2016 Tesla Model X P90D Ludicrous',
    'status': 'SOLD',
    'image': 'assets/images/featured-slide-car.webp'
  },
  {
    'title': 'featured-slide4',
    'featuredTitle': '2016 Tesla Model X P90D Ludicrous',
    'status': 'SOLD',
    'image': 'assets/images/featured-slide-car.webp'
  },
  {
    'title': 'featured-slide4',
    'featuredTitle': '2016 Tesla Model X P90D Ludicrous',
    'status': 'AVAILABLE',
    'image': 'assets/images/featured-slide-car.webp'
  }]

  constructor() {
    this.featuredResponsive = [
      {
          breakpoint: '1200px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '1024px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '768px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
  }

}
