import {Component, Input} from '@angular/core';
import {Pensamento} from "../pensamento";
import {PensamentoService} from "../pensamento.service";
import {Router} from "@angular/router";

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
  constructor(private service: PensamentoService,
  private router: Router) {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length > 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  remover(){
    this.service.excluir(this.pensamento.id!).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }
}
