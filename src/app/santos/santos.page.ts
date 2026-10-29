import { Component, OnInit } from '@angular/core';

interface PontoTuristico {
  nome: string;
  descricao: string;
  imagem: string;
}

@Component({
  selector: 'app-santos',
  templateUrl: './santos.page.html',
  styleUrls: ['./santos.page.scss'],
  standalone: false
})
export class SantosPage implements OnInit {
  cidadeFoto: string = 'assets/images/cidades/santos.jpg';
  cidadeNome: string = 'Santos';

  descricao: string = 'Santos, a "Cidade do Café", guarda o maior porto da América Latina e o centro histórico mais preservado do litoral paulista. Berço do futebol brasileiro (Santos FC), cidade de cultura rica, jardins de orla recordistas e arquitetura eclética que encanta.';

  pontosTuristicos: PontoTuristico[] = [
    {
      nome: 'Centro Histórico e Bolsa do Café',
      descricao: 'Conjunto arquitetônico preservado com o Palácio da Bolsa do Café, bondes turísticos e cafés tradicionais.',
      imagem: 'assets/images/pontos-turisticos/santos-centro-historico.jpg'
    },
    {
      nome: 'Orla da Praia e Jardins da Orla',
      descricao: 'Maior jardim de orla do mundo (Guinness), com 5,3 km de jardins temáticos, ciclovia e quiosques.',
      imagem: 'assets/images/pontos-turisticos/santos-orla-jardins.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
