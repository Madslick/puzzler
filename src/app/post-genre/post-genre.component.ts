import { Component, Output, OnInit, ElementRef, ViewChild, EventEmitter } from '@angular/core';

import { PuzzleService } from '../services/puzzle.service';

import { Puzzle } from '../models/puzzle';
import { Genre } from '../models/genre';

@Component({
  selector: 'app-post-genre',
  templateUrl: './post-genre.component.html',
  styleUrls: ['./post-genre.component.scss']
})
export class PostGenreComponent implements OnInit {
    @ViewChild('genreName') genreName: ElementRef;
    //@Output() onThemeAdded = new EventEmitter<Ingredient>();

    constructor(private puzzleService: PuzzleService) { }

    ngOnInit() {
    }

    postGenre(){
        const genreName = this.genreName.nativeElement.value;

        const genre = new Genre(genreName);
        this.puzzleService.postGenre(genre).subscribe((genre) => console.log(genre));
        //this.onThemeAdded.emit(theme);
    }

}
