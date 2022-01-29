import { Component, OnInit } from '@angular/core';
import { Libro } from '../interfaces/libro-interface';
import { BibliotecaService } from '../services/biblioteca.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {


  libros:Array<Libro>;

  constructor(private bibliotecaService:BibliotecaService) { }

  ngOnInit() {this.obtenerLibros()}


  obtenerLibros(){

    
     this.bibliotecaService.getBibliotecaLibros().subscribe({
       
      next: resp=>{this.libros=resp.docs},
      error:err=>{console.log(err)}
    
    });
  }

}
