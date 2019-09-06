import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Imovie } from 'src/app/models/Imovie.model';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  @Input() movie:Imovie;
  @Output() cancel = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  onOkClicked(){
   this.cancel.emit(true);
  }

}
