import { Component, OnInit, Input,Output ,EventEmitter} from '@angular/core';
import { Imovie } from 'src/app/models/Imovie.model';
import {MoviesService} from '../../services/movies.service';
@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.css']
})
export class MovieDeleteComponent implements OnInit {
  @Input() movie:Imovie;
  @Output() cancel = new EventEmitter<boolean>();
  @Output() deleteMovieId = new EventEmitter<string>();
  constructor( private moviesService:MoviesService) { }

  ngOnInit() {
  }

  onCancelClicked(){
    this.cancel.emit(true);
   }


   onDeleteClicked(){
       this.moviesService.deleteMovie(this.movie.id);
       this.moviesService.updateMoviesEvent.next(this.moviesService.movies);
       this.cancel.emit(true);
   }

}
