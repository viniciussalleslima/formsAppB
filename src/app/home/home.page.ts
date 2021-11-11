import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{

  listaUsuarios = [];
  constructor(public storage: StorageService) {}

  async buscarUsuarios(){
    this.listaUsuarios = await this.storage.getAll();

  }
  ngOnInit() {
    this.buscarUsuarios();
  }

}
