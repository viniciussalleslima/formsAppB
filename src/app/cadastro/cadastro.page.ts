import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  usuario: Usuario = new Usuario{};

  confirmaSenha = '';

  constructor(public storage: StorageService, public router: Router) { }

  ngOnInit() {
  }

  salvar() {
    this.storage.set(this.Usuario.cpf, this.usuario);
    this.router.navigateByUrl('/home');
  }

}
