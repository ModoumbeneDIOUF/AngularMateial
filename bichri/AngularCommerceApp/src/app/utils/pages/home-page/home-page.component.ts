import { HomeService } from './../../../services/home.service';
import { Component, OnInit } from '@angular/core';
import { Url } from 'src/app/services/url';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  uri = new Url()
  imageUri = this.uri.uri



  featuredProducts: any = []
  trendingProducts: any = []
  specialOffreProducts: any = []
  flashProducts: any = []





  constructor(private homeService:HomeService) { }

  ngOnInit(): void {

    this.getFeaturedProduct()
    this.getTrendingProducts()
    this.getSpecialOffreProducts()
    this.getFlashProducts()
  }



  getFeaturedProduct(){

    this.homeService.getFeaturedProduct().
    subscribe(response => {

        this.featuredProducts = response


    })
  }

  getTrendingProducts(){

    this.homeService.getTrendingProducts().
    subscribe(response => {

        this.trendingProducts = response


    })
  }

  getSpecialOffreProducts(){

    this.homeService.getspecialOffreProducts().
    subscribe(response => {

        this.specialOffreProducts = response




    })
  }


  getFlashProducts(){

    this.homeService.getflashProducts().
    subscribe(response => {

        this.flashProducts = response


    })
  }

}
