import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private movieService:MoviesService) { }

  ngOnInit() {
  }

  onIconClicked(){
      this.movieService.iconClickedEvent.next({movie:null,iconType:"add"})
  }

}
