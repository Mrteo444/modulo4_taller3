import { Component } from '@angular/core';
import { FormularioComponent } from "../../componets/formulario/formulario.component";
import { TablaComponent } from "../../componets/tabla/tabla.component";

@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports: [FormularioComponent, TablaComponent],
  templateUrl: './biblioteca.component.html',
  styleUrl: './biblioteca.component.css'
})
export class BibliotecaComponent {
  cerrar(){
    localStorage.removeItem('login')
    window.location.href='login'

  }

}
