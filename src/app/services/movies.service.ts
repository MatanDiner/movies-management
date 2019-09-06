import { Injectable } from '@angular/core';
import {Imovie} from "../models/Imovie.model";
import {Subject} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies:Imovie[];
  dbUrl:string;
  id:number;
  constructor() { 
    this.movies = [];
    this.dbUrl = "https://movies-management.firebaseio.com/movies.json";
    this.id = 21;
  }

  iconClickedEvent = new Subject<{movie:Imovie,iconType:string}>();
  updateMoviesEvent = new Subject<Imovie[]>();
  backDropClickedEvent = new Subject<boolean>();

  async getMovies():Promise<Imovie[]>{
    const response = await fetch(this.dbUrl);
    const data = await response.json();
    this.movies = data;
    return this.movies; 
  }

  deleteMovie(mId){
      this.movies = this.movies.filter(m=>m.id!==mId);
  }

  editMovie(mId,updatedMovie){
    const index = this.movies.findIndex(m=>m.id===mId);
    const movie = {...this.movies[index]};
    for(let key in updatedMovie){
      movie[key] = updatedMovie[key].value;
    }
    this.movies.splice(index,1,movie);
  }
   

  addMovie(movie){
    const id = this.id.toString();
    this.id++;
    const newMovie = {
      id,
      img:'assets/images/noImg.jpg',
      Title:"",
      Genre:"",
      Year:0,
      Director:"",
      Runtime:0,
    }
    for(let key in movie){
      newMovie[key] = movie[key].value;
    }
    this.movies.push(newMovie);
  }


  getMoviesBySearchValue(value){
     const movies = this.movies.filter(m=>m.Title.toLowerCase().includes(value.toLowerCase()));
     return movies;
  }

}
