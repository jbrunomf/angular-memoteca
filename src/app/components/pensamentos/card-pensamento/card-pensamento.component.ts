import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pensamento',
  templateUrl: './card-pensamento.component.html',
  styleUrls: ['./card-pensamento.component.css']
})
export class CardPensamentoComponent {

  @Input() pensamento = {
    conteudo: "Eu gosto de Angular",
    autoria: "João Bruno",
    modelo: 'modelo1'
  }

}
