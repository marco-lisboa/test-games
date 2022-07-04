import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { APIResponse, Game } from 'src/app/models/interface';
import { ActivatedRoute, Params } from '@angular/router';
import { ServicesService } from './../../services/services.service';
import { Interface } from 'readline';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
  export class HomeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, service: ServicesService) { }
  ngOnInit(): void {
  }


  /*searchGames(search?: string): void {
    this.httpService
    .getGameList(search)
    .subscribe((gameList: APIResponse<Game>) => {
      this.games = gameList.results;
      console.log(gameList);
    })
  }*/

}
