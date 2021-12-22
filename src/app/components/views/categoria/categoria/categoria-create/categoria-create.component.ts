import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../categoria.models';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  // tá dando erro porque não estou conseguindo fazer o post pra poder o backend me retornar algo
  create(): void {
    this.service.create(this.categoria).subscribe((resposta) => {
      this.router.navigate(['categorias']);
      this.service.mensagem('Categoria criada com sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.lengthh; i++) {
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }

}