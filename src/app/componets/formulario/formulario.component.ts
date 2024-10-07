import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibrosService } from '../../service/libros.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  servicio=inject(LibrosService)


  id: any
  nombre: any
  autor: any
  anio: any
  
  imagen:any


  guardar(formulario: any) {
    alert("guardado");
    this.servicio.postLibros(formulario.value).subscribe({
      next: (response) => {
        console.log('Datos guardados con éxito', response);
      },
      error: (error) => {
        console.error('Error al guardar los datos', error);
      }
    });
    this.borrar()
    location.href = 'libros'



  }
  borrar() {
    this.id = '';
    this.autor = '';
    this.anio = '';
    this.nombre = '';
  
    this.imagen = '';
  }


}
