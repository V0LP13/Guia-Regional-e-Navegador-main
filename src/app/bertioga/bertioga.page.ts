import { Component, OnInit } from '@angular/core';

interface PontoTuristico {
  nome: string;
  descricao: string;
  imagem: string;
}

@Component({
  selector: 'app-bertioga',
  templateUrl: './bertioga.page.html',
  styleUrls: ['./bertioga.page.scss'],
  standalone: false
})
export class BertiogaPage implements OnInit {
  cidadeFoto: string = 'assets/images/cidades/bertioga.jpg';
  cidadeNome: string = 'Bertioga';

  descricao: string = 'Bertioga é um município brasileiro do estado de São Paulo, localizado na Região Metropolitana da Baixada Santista. Conhecida por suas belas praias, pela Mata Atlântica preservada e pelo Forte São João, a cidade encanta visitantes com sua natureza exuberante e clima agradável.';

  pontosTuristicos: PontoTuristico[] = [
    {
      nome: 'Forte São João',
      descricao: 'Fortaleza histórica construída em 1547, uma das mais antigas do Brasil, localizada na foz do Rio Itapanhaú.',
      imagem: 'assets/images/pontos-turisticos/bertioga-forte-sao-joao.jpg'
    },
    {
      nome: 'Praia da Enseada',
      descricao: 'A praia mais famosa da cidade, com águas calmas e infraestrutura completa de quiosques e restaurantes.',
      imagem: 'assets/images/pontos-turisticos/bertioga-praia-enseada.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
