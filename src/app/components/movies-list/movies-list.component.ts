import { Component, OnInit, Input } from '@angular/core';
import {Imovie} from "../../models/Imovie.model";
import {MoviesService} from "../../services/movies.service";
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  //movies:Imovie[];
  @Input() movies:Imovie[];
  constructor(private moviesService:MoviesService) { 
    this.movies = null;
   // this.deletedMovies = [];
  }

  ngOnInit(){

  }
/*
  async ngOnInit() {
    this.movies = await this.moviesService.getMovies();
  }
*/
}
