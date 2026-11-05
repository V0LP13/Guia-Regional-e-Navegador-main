import { Component, OnInit } from '@angular/core';

interface PontoTuristico {
  nome: string;
  descricao: string;
  imagem: string;
}

@Component({
  selector: 'app-itanhaem',
  templateUrl: './itanhaem.page.html',
  styleUrls: ['./itanhaem.page.scss'],
  standalone: false
})
export class ItanhaemPage implements OnInit {
  cidadeFoto: string = 'assets/images/cidades/itanhaem.jpg';
  cidadeNome: string = 'Itanhaém';

  descricao: string = 'Itanhaém, a "Segunda Cidade do Brasil", fundada em 1532, alia história e natureza. Conhecida pelo Centro Histórico preservado, pela Gruta de Nossa Senhora de Lourdes e pelas praias de areia branqueada, é destino de fé, ecoturismo e descanso.';

  pontosTuristicos: PontoTuristico[] = [
    {
      nome: 'Centro Histórico - Convento e Igreja Matriz',
      descricao: 'Conjunto jesuíta do século XVI com a Igreja de Nossa Senhora da Conceição, convento, museu de arte sacra e vista para o rio.',
      imagem: 'assets/images/pontos-turisticos/itanhaem-centro-historico.jpg'
    },
    {
      nome: 'Gruta de Nossa Senhora de Lourdes',
      descricao: 'Santuário natural em gruta à beira-mar, local de romaria e fé, com imagem da santa e vista para o oceano.',
      imagem: 'assets/images/pontos-turisticos/itanhaem-gruta-lourdes.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
