import { Component, OnInit, Input  } from '@angular/core';
import { Router } from '@angular/router';
import {ClienteServiceService} from '../cliente-service.service'

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css',]
})
export class CreateClienteComponent implements OnInit {

  id = (Math.floor(Math.random() * (99999 - 10000) + 100000));

  constructor(public restApi: ClienteServiceService, 
    public router: Router) { }

  @Input() Cliente = { serial:this.id, nmCliente: '', nombre: '', apellido: '', fechaNacimiento: '', direccion: '',
    telefono: '', telefonoAlterno: '', celular: '', email: '', cargo: '', ciudad: '', genero: 0,
    comunidad: '', empresaLabora: '', division: '', pais: '', hobbie: '' }

  ngOnInit(): void {
  }

  addCliente(dataCliente) {
    if(this.Cliente.nmCliente != '' ){
      if(this.Cliente.nombre != ''){
        this.restApi.createCliente(this.Cliente).subscribe((data: {}) => {
          this.router.navigate(['/clientes'])
        })
      }else{
        window.alert("Ingrese el nombre");
      }
    } else{
      window.alert("Ingrese el numero de cedula");
    }
  }
  

}
