import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  formGroup: FormGroup;
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

  onSubmit(){
    this.moviesService.addMovie(this.formGroup.controls);
    this.moviesService.updateMoviesEvent.next(this.moviesService.movies);
    this.cancel.emit(true);
  }

  onCancel(){
    this.cancel.emit(true);
  }

  ngOnInit() {
  }

}
