import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit{

  listaPensamentos = [
    {
      conteudo: "Conteúdo para teste  de aplicação Angular.",
      autoria: "João Bruno M. Fernandes",
      modelo: "modelo3"
    },
    {
      conteudo: "Espero que tudo esteja bem..",
      autoria: "Autor Desconhecido.",
      modelo: "modelo1"
    },
    {
      conteudo: "Dexa a vida me levar..",
      autoria: "Martinho da Vila",
      modelo: "modelo2"
    }
  ];

  constructor(){}

  ngOnInit(): void{}
}
