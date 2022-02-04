import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Libro } from '../interfaces/libro-interface';
import { BibliotecaService } from '../services/biblioteca.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {


  libros:Array<Libro>;
  busqueda:string; 
  constructor(private bibliotecaService:BibliotecaService, public navControl:NavController) { }

  ngOnInit() {}


  obtenerLibros():void{

    
     this.bibliotecaService.getBibliotecaLibros(this.busqueda).subscribe({
       
      next: resp=>{this.libros=resp.docs},
      error:err=>{console.log(err)}
    
    });
  }

  getLibro(isbn){
    

    console.log("isbn")
    this.navControl.push("libro");
  }

}
