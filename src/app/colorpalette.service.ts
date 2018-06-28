import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Colorpalette} from './colorpalette';
import {Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColorpaletteService {

  constructor(
    private http:HttpClient
  ) { }

  private handleError(error: HttpErrorResponse) {

    // client-side or network error
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
      // additional action to handle error goes here:
    } else { // backend error
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
      // additional action to handle error goes here:
    }

    return throwError ('Something bad happened!');
  }

  getColorPalettes(colorpalette?:Colorpalette):Observable<Colorpalette[]>{
    if(colorpalette){
      return this.http.get<Colorpalette[]>('http://api.tkusaka.com/palette_api.php?api_key=5b3549186e29f&palette_id='+colorpalette.id).pipe(catchError(this.handleError));  
    }
    return this.http.get<Colorpalette[]>('http://api.tkusaka.com/palette_api.php?api_key=5b3549186e29f').pipe(catchError(this.handleError));
  }
}

