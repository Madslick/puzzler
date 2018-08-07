import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';

import { PuzzleService } from '../services/puzzle.service';
import { Puzzle } from '../models/puzzle';

export class PuzzleDataSource extends DataSource<Puzzle> {
    constructor(private puzzles: Puzzle []){
        super();
    }

    connect(): Observable<Puzzle []> {

        let x = of(this.puzzles);
        return x;
    }

    disconnect() { }
}

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
    columnsToDisplay = ['name', 'piecesCount', 'genreName', 'puzzleBrandName', 'rent'];
    private ELEMENT_DATA: Puzzle[] = [
        /*{ name: "Monkey Business", piecesCount: 550, genreName: "Jungle", puzzleBrandName: "Mattel" },
        { name: "Dolphins", piecesCount: 750, genreName: "Ocean", puzzleBrandName: "Mattel" },
        { name: "The Jungle Book", piecesCount: 550, genreName: "Jungle", puzzleBrandName: "Mattel" },
        { name: "Coral Reef", piecesCount: 1000, genreName: "Ocean", puzzleBrandName: "Mattel" },
        { name: "Where's Waldo", piecesCount: 1500, genreName: "City", puzzleBrandName: "Mattel" }*/

    ];

    dataSource: PuzzleDataSource;

    constructor(private puzzleService: PuzzleService) { }

    ngOnInit() {

        this.puzzleService.getItems().subscribe(items => {
            this.ELEMENT_DATA = items;
            this.dataSource = new PuzzleDataSource(this.ELEMENT_DATA);
        });
    }

}
