import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})

export class CriarPensamentoComponent {
  pensamento = {
    id: '1',
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
    this.pensamento.id = '',
    this.pensamento.modelo = ''
  }

}
