import { Component, OnInit } from '@angular/core';
import peliculas from '../../../assets/movies.json';

@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./peliculas-list.component.css']
})
export class PeliculasListComponent implements OnInit {

  private sortJSON(data, key, orden) {
    return data.sort(function (a, b) {
        var x = a[key],
        y = b[key];

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
  }

  peliculasData: any;
  peliculasDataOrdenado: any;
  constructor() { 
    this.peliculasData = peliculas;
    this.peliculasDataOrdenado = peliculas; //this.sortJSON(this.peliculasData, 'title', 'asc');
    console.log(peliculas);
    console.log(this.peliculasDataOrdenado)
  }
  isToggled: boolean = true;
  private ordenar(){
    this.isToggled = !this.isToggled;
    if (this.isToggled) {
      console.log(peliculas)
      this.peliculasData = this.sortJSON(this.peliculasDataOrdenado, 'title', 'asc');
      console.log("ordenar")
      console.log(peliculas)
    }else{
      this.peliculasData = peliculas;
      console.log("no ordenar")
      console.log(peliculas)
    }
  }

  ngOnInit() {
  }

}
