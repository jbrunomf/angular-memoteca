import { Component } from '@angular/core';
import {Pensamento} from "../pensamento";

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})

export class CriarPensamentoComponent {
  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'João Bruno',
    modelo: '1'
  }

  criarPensamento(){
    alert("Pensamento Adicionado com Sucesso!")
  }

  limparForm(){
    alert('Ação Cancelada!')
    this.pensamento.autoria = '',
    this.pensamento.conteudo = '',
    this.pensamento.id = 0,
    this.pensamento.modelo = ''
  }

}
