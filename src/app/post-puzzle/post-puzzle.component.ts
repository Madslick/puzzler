import { Component, Output, OnInit, ElementRef, ViewChild, } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { PuzzleService } from '../services/puzzle.service';
import { Puzzle } from '../models/puzzle';
@Component({
  selector: 'app-post-puzzle',
  templateUrl: './post-puzzle.component.html',
  styleUrls: ['./post-puzzle.component.scss']
})
export class PostPuzzleComponent implements OnInit {

    private items: Puzzle [];
    private genres: Genre [];
    private brands: Brand [];

    @ViewChild("puzzleName") puzzleName: ElementRef;
    @ViewChild("puzzleCount") puzzlePieces: ElementRef;
    @ViewChild("puzzleGenre") puzzleGenre: any;
    @ViewChild("puzzleBrand") puzzleBrand: any;


    constructor(private puzzleService: PuzzleService) { }

    ngOnInit() {
        this.puzzleService.getGenres().subscribe(genres => this.genres = genres);
        this.puzzleService.getBrands().subscribe(brands => this.brands = brands);
    }

    postPuzzle() {
        let puzzle = new Puzzle(
            this.puzzleName.nativeElement.value,
            this.puzzlePieces.nativeElement.value,
            this.puzzleGenre.selected.value,
            this.puzzleBrand.selected.value
        );

        this.puzzleService.postPuzzle(puzzle).subscribe((puzzle) => console.log(puzzle));
    }

}
