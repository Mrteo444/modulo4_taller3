import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibrosService } from '../../service/libros.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

  servicio=inject(LibrosService)
  ruta=inject(ActivatedRoute)


  id: any
  nombre: any
  autor: any
  anio: any
  
  imagen:any


  ngOnInit(){
    this.ruta.params.subscribe(parametro => {
      this.servicio.getlibro(parametro['idlibro']).subscribe(p => {
        this.id=p.idauto;
        this.id = p.id;
        this.nombre=p.nombre
        this.anio=p.anio
        this.autor=p.autor
       
        this.imagen=p.imagen
      })

    })
    
  }




  editar(formulario: any) {
    this.servicio.putlibros(formulario.value).subscribe();
    location.href='libros'
  }
  


}
