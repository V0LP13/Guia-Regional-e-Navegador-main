import { Component, OnInit } from '@angular/core';

interface PontoTuristico {
  nome: string;
  descricao: string;
  imagem: string;
}

@Component({
  selector: 'app-cubatao',
  templateUrl: './cubatao.page.html',
  styleUrls: ['./cubatao.page.scss'],
  standalone: false
})
export class CubataoPage implements OnInit {
  cidadeFoto: string = 'assets/images/cidades/cubatao.jpg';
  cidadeNome: string = 'Cubatão';

  descricao: string = 'Cubatão é conhecida como a "Cidade Símbolo da Ecologia" por sua recuperação ambiental exemplar. Localizada na Baixada Santista, abriga o maior polo industrial da América Latina e preserva importantes áreas de Mata Atlântica na Serra do Mar.';

  pontosTuristicos: PontoTuristico[] = [
    {
      nome: 'Parque Ecológico Perequê',
      descricao: 'Área de preservação com trilhas, viveiro de mudas, lago e centro de educação ambiental na Mata Atlântica.',
      imagem: 'assets/images/pontos-turisticos/cubatao-parque-pereque.jpg'
    },
    {
      nome: 'Serra do Mar - Caminhos do Mar',
      descricao: 'Estrada histórica com mirantes deslumbrantes, ruínas do antigo caminho do mar e rica biodiversidade.',
      imagem: 'assets/images/pontos-turisticos/cubatao-caminhos-do-mar.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
