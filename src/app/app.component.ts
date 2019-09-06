import { Component ,OnInit} from '@angular/core';
import { Imovie } from './models/Imovie.model';
import {MoviesService} from "./services/movies.service";
import {Subscription} from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movies-managment';
  isCanceled : boolean;
  movie:Imovie;
  iconType:string;
  deletedMovies:string[];
  subsMovies:Subscription;
  subsIconEventObj:Subscription;
  subsCancel:Subscription;
  movies:Imovie[];
  constructor(private moviesService:MoviesService){
    this.isCanceled = true;
    this.movie = null;
    this.iconType = "";
    this.movies = null;
  }

  async ngOnInit(){

        this.movies = await this.moviesService.getMovies(); 
      this.subsMovies = this.moviesService.updateMoviesEvent.subscribe(movies=>{
          this.movies = movies;
        })

        this.subsIconEventObj = this.moviesService.iconClickedEvent.subscribe(iconEventObj=>{
          this.movie = iconEventObj.movie;
          this.iconType = iconEventObj.iconType;
          this.isCanceled = false;
        })

        this.subsCancel = this.moviesService.backDropClickedEvent.subscribe(cancel=>{
          this.isCanceled = cancel;
        })
  }

  onCancel(cancel:boolean){
     this.isCanceled = cancel;
  }

  ngOnDestroy() {
    this.subsMovies.unsubscribe();
    this.subsIconEventObj.unsubscribe();
    this.subsCancel.unsubscribe();
  }



}
