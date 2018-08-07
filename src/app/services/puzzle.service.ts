import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Puzzle } from '../models/puzzle';
import { Genre } from '../models/genre';
import { Brand } from '../models/brand';


@Injectable({
  providedIn: 'root'
})
export class PuzzleService {
    private url = 'http://localhost:5000';  // URL to web api
    private genresUrl = '/api/genres/';
    private brandsUrl = '/api/puzzlebrands/';
    private puzzlesUrl = '/api/puzzles/';

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    getItems(): Observable<Puzzle []>{
        return this.http.get<Puzzle []>(this.url + this.puzzlesUrl)
        .pipe(
            tap(items => this.log('fetched items')),
            catchError(this.handleError('getItems', []))
        );
    }

    getBrands(): Observable<Brand []> {
        return this.http.get<Brand []>(this.url + this.brandsUrl)
        .pipe(
            tap(items => this.log('fetched brands')),
            catchError(this.handleError('getBrands', []))
        );
    }

    getGenres(): Observable<Genre []> {
        return this.http.get<Genre []>(this.url + this.genresUrl)
        .pipe(
            tap(items => this.log('fetched genres')),
            catchError(this.handleError('getGenres', []))
        );
    }

    postPuzzle(puzzle: Puzzle): Observable<Puzzle> {
        return this.http.post<Puzzle>(this.url + this.puzzlesUrl, puzzle, this.httpOptions)
        .pipe(
            tap((puzzle: Puzzle) => this.log("Added a Puzzle")),
            catchError(this.handleError<Puzzle>('AddPuzzle'))
        );
    }

    postGenre(genre: Genre): Observable<Genre> {
        return this.http.post<Genre>(this.url + this.genresUrl, genre, this.httpOptions)
        .pipe(
            tap((genre: Genre) => this.log("Added a Theme")),
            catchError(this.handleError<Genre>('AddTheme'))
        );
    }

    postBrand(brand: Brand): Observable<Genre> {
        return this.http.post<Brand>(this.url + this.brandsUrl, brand, this.httpOptions)
        .pipe(
            tap((genre: Brand) => this.log("Added a Brand")),
            catchError(this.handleError<Brand>('AddBrand'))
        );
    }

    private log(message) {
        console.log(message);
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
