import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.models';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  ELEMENT_DATA: Categoria[] = [
    {id: '1', nome: 'Hydrogen', descricao: "Lorem Ipsum"},
    {id: '2', nome: 'Helium', descricao: "Lorem Ipsum"},
    {id: '3', nome: 'Lithium', descricao: "Lorem Ipsum"},
    {id: '4', nome: 'Beryllium', descricao: "Lorem Ipsum"},
    {id: '5', nome: 'Boron', descricao:"Lorem Ipsum"},
    {id: '6', nome: 'Carbon', descricao: "Lorem Ipsum"},
    {id: '7', nome: 'Nitrogen', descricao: "Lorem Ipsum"},
    {id: '8', nome: 'Oxygen', descricao: "Lorem Ipsum"},
    {id: '9', nome: 'Fluorine', descricao: "Lorem Ipsum"},
    {id: '10', nome: 'Neon', descricao: "Lorem Ipsum"},
  ];
  categorias: Categoria[] = []

  displayedColumns: string[] = ['id', 'nome', 'descricao','livros', 'acoes'];
  dataSource = this.ELEMENT_DATA;

  constructor(private service: CategoriaService) {  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta=> {
      console.log(resposta);
      this.categorias = resposta;
    })
  }

}
