import {ClienteDetailsComponent} from '../cliente-details/cliente-details.component'
import {Observable} from "rxjs";
import {ClienteServiceService} from '../cliente-service.service'
import {Cliente} from '../model/cliente'
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})

export class ClienteListComponent implements OnInit {

  Cliente: any = [];

  constructor(private clienteService: ClienteServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  //Cargar lista de clientes
  reloadData() {
    return this.clienteService.getClienteList().subscribe((data: {}) => {
      this.Cliente = data;
    })
  }

}
