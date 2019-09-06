import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private movieService:MoviesService) { }

  ngOnInit() {
  }

  searchMovie(e){
    const movies = this.movieService.getMoviesBySearchValue(e.target.value);
    this.movieService.updateMoviesEvent.next(movies);
  }

}
