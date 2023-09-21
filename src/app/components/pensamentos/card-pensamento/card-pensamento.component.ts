import {Component, Input} from '@angular/core';
import {Pensamento} from "../pensamento";

@Component({
  selector: 'app-card-pensamento',
  templateUrl: './card-pensamento.component.html',
  styleUrls: ['./card-pensamento.component.css']
})
export class CardPensamentoComponent {

  @Input() pensamento: Pensamento = {
    id: 1,
    conteudo: "Eu gosto de Angular",
    autoria: "João Bruno",
    modelo: 'modelo1'
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length > 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
