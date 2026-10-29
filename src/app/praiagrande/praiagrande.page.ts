import { Component, OnInit } from '@angular/core';

interface PontoTuristico {
  nome: string;
  descricao: string;
  imagem: string;
}

@Component({
  selector: 'app-praiagrande',
  templateUrl: './praiagrande.page.html',
  styleUrls: ['./praiagrande.page.scss'],
  standalone: false
})
export class PraiagrandePage implements OnInit {
  cidadeFoto: string = 'assets/images/cidades/praiagrande.jpg';
  cidadeNome: string = 'Praia Grande';

  descricao: string = 'Praia Grande é a cidade com a maior orla urbana do litoral paulista: 22,4 km de praias contínuas. Conhecida pela qualidade de vida, ciclovias extensas, feiras de artesanato e forte vocação para o turismo familiar, a cidade cresce mantendo sua identidade acolhedora.';

  pontosTuristicos: PontoTuristico[] = [
    {
      nome: 'Orla da Praia Grande / Calçadão',
      descricao: 'Maior calçadão à beira-mar do Brasil, com ciclovia, quiosques padronizados, academias ao ar livre e acessibilidade.',
      imagem: 'assets/images/pontos-turisticos/praiagrande-orla.jpg'
    },
    {
      nome: 'Fortaleza de Itaipu',
      descricao: 'Forte militar do século XIX, tombado pelo patrimônio, com museu, canhões originais e vista para o canal de Bertioga.',
      imagem: 'assets/images/pontos-turisticos/praiagrande-fortaleza-itaipu.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
