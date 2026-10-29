import { Component, OnInit } from '@angular/core';

interface PontoTuristico {
  nome: string;
  descricao: string;
  imagem: string;
}

@Component({
  selector: 'app-peruibe',
  templateUrl: './peruibe.page.html',
  styleUrls: ['./peruibe.page.scss'],
  standalone: false
})
export class PeruibePage implements OnInit {
  cidadeFoto: string = 'assets/images/cidades/peruibe.jpg';
  cidadeNome: string = 'Peruíbe';

  descricao: string = 'Peruíbe é conhecida como a "Capital do Surf" e "Cidade das Praias Desertas". Com 32 km de litoral, a cidade preserva praias selvagens, sítios arqueológicos e a Reserva Indígena Piaçaguera. Oferece ecoturismo, história e ondas perfeitas.';

  pontosTuristicos: PontoTuristico[] = [
    {
      nome: 'Praia do Guaraú',
      descricao: 'Praia preservada na divisa com Iguape, acessível por trilha ou barco, com mar cristalino e mata nativa.',
      imagem: 'assets/images/pontos-turisticos/peruibe-praia-guarau.jpg'
    },
    {
      nome: 'Ruínas do Abarebebê',
      descricao: 'Sítio arqueológico com ruínas de uma igreja jesuíta do século XVI, uma das mais antigas do Brasil.',
      imagem: 'assets/images/pontos-turisticos/peruibe-ruinas-abarebebe.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
