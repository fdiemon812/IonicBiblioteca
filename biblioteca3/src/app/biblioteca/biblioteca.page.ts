import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from '../interfaces/libro-interface';
import { BibliotecaService } from '../services/biblioteca.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  isbn:string;
  libros:Array<Libro>;
  busqueda:string; 
  constructor(private bibliotecaService:BibliotecaService, public router:Router) { }

  ngOnInit() {}


  obtenerLibros():void{

    
     this.bibliotecaService.getBibliotecaLibros(this.busqueda).subscribe({
       
      next: resp=>{this.libros=resp.docs},
      error:err=>{console.log(err)}
    
    });
  }

  getLibro(isb){
    
    this.isbn=isb;
    console.log("isbn")
    this.router.navigate(["/libro", isb]);
  }

}
