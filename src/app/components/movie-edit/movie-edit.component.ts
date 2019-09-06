import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Imovie } from '../../models/Imovie.model';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  formGroup: FormGroup;
  @Input() movie: Imovie;
  @Output() cancel = new EventEmitter<boolean>();
  constructor(builder:FormBuilder,private moviesService:MoviesService) {
    this.formGroup = builder.group({
      Title: [
        "", [
          Validators.required,
          Validators.maxLength(30)
        ]
      ],
      Year: [
        "", [
          Validators.required,
          Validators.maxLength(4),
          this.numberValidation
        ]
      ],
      Runtime: [
        "", [
          Validators.required,
          Validators.maxLength(3),
          this.numberValidation
        ]
      ],
      Director: [
        "", [
          Validators.required,
          Validators.maxLength(30)
        ]
      ],
      Genre: [
        "", [
          Validators.required,
          Validators.maxLength(30)
        ]
      ]
    })


  }


  numberValidation(control:FormControl):{[key:string]:boolean}{
    if (control.value !== null && !isNaN(control.value)){
         return null;
    } 
    return {isNumber : true}
  }
  

  ngOnInit() {
      for(let key in this.movie){
         if(key!=="id" && key!=="img")
         this.formGroup.controls[key].setValue(this.movie[key]);
      }
  }

  
  onSubmit(){
    this.moviesService.editMovie(this.movie.id,this.formGroup.controls);
    this.moviesService.updateMoviesEvent.next(this.moviesService.movies);
    this.cancel.emit(true);
  }

  onCancel(){
    this.cancel.emit(true);
  }


}
