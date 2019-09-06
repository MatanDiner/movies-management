import { Component, OnInit, Input } from '@angular/core';
import { Imovie } from 'src/app/models/Imovie.model';
import {MoviesService} from "../../../services/movies.service"
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie:Imovie
  constructor(private moviesService:MoviesService) { 
     this.movie = null;
  }

  ngOnInit() {
  }


  onIconClicked(iconType:string){
    const movie = this.movie;
    this.moviesService.iconClickedEvent.next({movie,iconType})
  }

}
