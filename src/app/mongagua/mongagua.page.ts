import { Component, OnInit } from '@angular/core';

interface PontoTuristico {
  nome: string;
  descricao: string;
  imagem: string;
}

@Component({
  selector: 'app-mongagua',
  templateUrl: './mongagua.page.html',
  styleUrls: ['./mongagua.page.scss'],
  standalone: false
})
export class MongaguaPage implements OnInit {
  cidadeFoto: string = 'assets/images/cidades/mongagua.jpg';
  cidadeNome: string = 'Mongaguá';

  descricao: string = 'Mongaguá, a "Cidade Poesia", possui 13 km de praias de areia branca e mar limpo. Conhecida pelo seu pôr do sol no mar (raro no litoral paulista), a cidade oferece tranquilidade, belezas naturais e o famoso Pescador, monumento símbolo da cidade.';

  pontosTuristicos: PontoTuristico[] = [
    {
      nome: 'Praia Centro / Plataforma de Pesca',
      descricao: 'Cartão-postal da cidade, a plataforma avança 400 metros mar adentro, ideal para pesca e contemplação do pôr do sol.',
      imagem: 'assets/images/pontos-turisticos/mongagua-plataforma.jpg'
    },
    {
      nome: 'Monumento ao Pescador',
      descricao: 'Estátua de 12 metros de altura na entrada da cidade, homenagem aos pescadores e símbolo de Mongaguá.',
      imagem: 'assets/images/pontos-turisticos/mongagua-pescador.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
