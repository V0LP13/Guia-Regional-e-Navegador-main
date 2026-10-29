import { Component, OnInit } from '@angular/core';

interface PontoTuristico {
  nome: string;
  descricao: string;
  imagem: string;
}

@Component({
  selector: 'app-saovicente',
  templateUrl: './saovicente.page.html',
  styleUrls: ['./saovicente.page.scss'],
  standalone: false
})
export class SaovicentePage implements OnInit {
  cidadeFoto: string = 'assets/images/cidades/saovicente.jpg';
  cidadeNome: string = 'São Vicente';

  descricao: string = 'São Vicente, a "Primeira Cidade do Brasil", fundada em 1532, é o berço da nacionalidade. Com centro histórico rico, a cidade preserva o primeiro hospital, a primeira câmara e a primeira vila do país. Suas praias e o teleférico para a Ilha Porchat completam o roteiro.';

  pontosTuristicos: PontoTuristico[] = [
    {
      nome: 'Centro Histórico - Vila de São Vicente',
      descricao: 'Conjunto colonial com a Igreja Matriz (1532), Paço Municipal, Cadeia Antiga e ruas de paralelepípedo preservadas.',
      imagem: 'assets/images/pontos-turisticos/saovicente-centro-historico.jpg'
    },
    {
      nome: 'Ilha Porchat e Teleférico',
      descricao: 'Ilha com mirante 360°, forte, capela e restaurante, acessada por teleférico com vista da baía e manguezais.',
      imagem: 'assets/images/pontos-turisticos/saovicente-ilha-porchat.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
