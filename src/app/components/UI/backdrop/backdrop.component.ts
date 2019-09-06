import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css']
})
export class BackdropComponent implements OnInit {

  constructor(private moviesService:MoviesService) { }

  ngOnInit() {
  }

  closeModal(){
    this.moviesService.backDropClickedEvent.next(true);
  }

}
