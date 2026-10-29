import { Component, OnInit } from '@angular/core';

interface PontoTuristico {
  nome: string;
  descricao: string;
  imagem: string;
}

@Component({
  selector: 'app-guaruja',
  templateUrl: './guaruja.page.html',
  styleUrls: ['./guaruja.page.scss'],
  standalone: false
})
export class GuarujaPage implements OnInit {
  cidadeFoto: string = 'assets/images/cidades/guaruja.jpg';
  cidadeNome: string = 'Guarujá';

  descricao: string = 'Guarujá, a "Pérola do Atlântico", é um dos destinos mais procurados do litoral paulista. Com 27 km de praias, infraestrutura turística completa e vida noturna agitada, a cidade encanta moradores e visitantes o ano todo.';

  pontosTuristicos: PontoTuristico[] = [
    {
      nome: 'Praia da Enseada',
      descricao: 'A maior e mais famosa praia da cidade, com 5,6 km de extensão, calçadão, ciclovia e diversos quiosques.',
      imagem: 'assets/images/pontos-turisticos/guaruja-praia-enseada.jpg'
    },
    {
      nome: 'Fortaleza de Santo Amaro da Barra Grande',
      descricao: 'Fortaleza do século XVI, tombada pelo patrimônio histórico, com vista panorâmica para o canal do porto.',
      imagem: 'assets/images/pontos-turisticos/guaruja-fortaleza.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
