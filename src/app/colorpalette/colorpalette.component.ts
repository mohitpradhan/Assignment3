import { Component, OnInit } from '@angular/core';
import {Colorpalette} from '../colorpalette';
import {ColorpaletteService} from '../colorpalette.service';

@Component({
  selector: 'app-colorpalette',
  templateUrl: './colorpalette.component.html',
  styleUrls: ['./colorpalette.component.css']
})
export class ColorpaletteComponent implements OnInit {

  colorpalettesearch:Colorpalette=new Colorpalette();
  colorpalettes:Colorpalette[];

  constructor(private colorpaletteservice:ColorpaletteService) { }

  findColor(colorSearch)
  {
    this.colorpaletteservice.getColorPalettes(colorSearch).subscribe(data=>this.colorpalettes=data);
  }

  ngOnInit() {
    this.colorpaletteservice.getColorPalettes().subscribe(data=>this.colorpalettes=data);
  }

}
