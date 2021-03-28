import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ClienteServiceService} from '../cliente-service.service'

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  Cliente: any = {};

  constructor(public restApi: ClienteServiceService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.restApi.getCliente(this.id).subscribe((data: {}) => {
      this.Cliente = data;//data[0]; 
    })
  }

  updateCliente(dataCliente) {
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
