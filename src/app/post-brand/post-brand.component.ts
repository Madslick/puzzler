import { Component, OnInit, ViewChild } from '@angular/core';

import { PuzzleService } from '../services/puzzle.service';
import { Brand  } from '../models/brand';

@Component({
  selector: 'app-post-brand',
  templateUrl: './post-brand.component.html',
  styleUrls: ['./post-brand.component.scss']
})
export class PostBrandComponent implements OnInit {
    @ViewChild('brandName') brandName: ElementRef;

    constructor(private puzzleService: PuzzleService) { }

    ngOnInit() {
    }

    postBrand(){
        const brandName = this.brandName.nativeElement.value;
        const brand = new Brand(brandName);

        this.puzzleService.postBrand(brand).subscribe((brand) => console.log(brand));
    }
}
