import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface CidadeRapida {
  nome: string;
  rota: string;
  icone: string;
}

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: false
})
export class FolderPage implements OnInit {
  public folder!: string;
  public cep: string = '';
  
  cidadesRapidas: CidadeRapida[] = [
    { nome: 'Bertioga', rota: '/bertioga', icone: 'location-outline' },
    { nome: 'Cubatão', rota: '/cubatao', icone: 'location-outline' },
    { nome: 'Guarujá', rota: '/guaruja', icone: 'location-outline' },
    { nome: 'Itanhaém', rota: '/itanhaem', icone: 'location-outline' },
    { nome: 'Mongaguá', rota: '/mongagua', icone: 'location-outline' },
    { nome: 'Peruíbe', rota: '/peruibe', icone: 'location-outline' },
    { nome: 'Praia Grande', rota: '/praiagrande', icone: 'location-outline' },
    { nome: 'Santos', rota: '/santos', icone: 'location-outline' },
    { nome: 'São Vicente', rota: '/saovicente', icone: 'location-outline' },
  ];

  private activatedRoute = inject(ActivatedRoute);
  constructor(private router: Router) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  // Formata CEP para padrão XXXXX-XXX ao sair do campo
  formatarCep() {
    const cepLimpo = this.cep.replace(/[-\s]/g, '');
    if (cepLimpo.length === 8) {
      this.cep = cepLimpo.substring(0, 5) + '-' + cepLimpo.substring(5);
    }
  }

  // Normaliza CEP removendo hífen e espaços
  private normalizarCep(cep: string): string {
    return cep.replace(/[-\s]/g, '');
  }

  navegarParaCidade(rota: string) {
    this.router.navigate([rota]);
  }

  pesquisar() {
    const cepNormalizado = this.normalizarCep(this.cep);
    
    // Mapeamento de CEPs para cidades (prefixos de 5 dígitos)
    const cepParaCidade: { [key: string]: string } = {
      // Bertioga
      '11250': '/bertioga',
      // Cubatão
      '11530': '/cubatao',
      '11531': '/cubatao',
      '11532': '/cubatao',
      '11533': '/cubatao',
      '11534': '/cubatao',
      '11535': '/cubatao',
      '11536': '/cubatao',
      '11537': '/cubatao',
      '11538': '/cubatao',
      '11539': '/cubatao',
      // Guarujá
      '11410': '/guaruja',
      '11411': '/guaruja',
      '11412': '/guaruja',
      '11413': '/guaruja',
      '11414': '/guaruja',
      '11415': '/guaruja',
      '11416': '/guaruja',
      '11417': '/guaruja',
      '11418': '/guaruja',
      '11419': '/guaruja',
      '11420': '/guaruja',
      '11421': '/guaruja',
      '11422': '/guaruja',
      '11423': '/guaruja',
      '11424': '/guaruja',
      '11425': '/guaruja',
      '11426': '/guaruja',
      '11427': '/guaruja',
      '11428': '/guaruja',
      '11429': '/guaruja',
      '11430': '/guaruja',
      '11431': '/guaruja',
      '11432': '/guaruja',
      '11433': '/guaruja',
      '11434': '/guaruja',
      '11435': '/guaruja',
      '11436': '/guaruja',
      '11437': '/guaruja',
      '11438': '/guaruja',
      '11439': '/guaruja',
      // Itanhaém
      '11740': '/itanhaem',
      // Mongaguá
      '11730': '/mongagua',
      '11731': '/mongagua',
      '11732': '/mongagua',
      '11733': '/mongagua',
      '11734': '/mongagua',
      '11735': '/mongagua',
      '11736': '/mongagua',
      '11737': '/mongagua',
      '11738': '/mongagua',
      '11739': '/mongagua',
      // Peruíbe
      '11750': '/peruibe',
      '11751': '/peruibe',
      '11752': '/peruibe',
      '11753': '/peruibe',
      '11754': '/peruibe',
      '11755': '/peruibe',
      '11756': '/peruibe',
      '11757': '/peruibe',
      '11758': '/peruibe',
      '11759': '/peruibe',
      // Praia Grande
      '11700': '/praiagrande',
      '11701': '/praiagrande',
      '11702': '/praiagrande',
      '11703': '/praiagrande',
      '11704': '/praiagrande',
      '11705': '/praiagrande',
      '11706': '/praiagrande',
      '11707': '/praiagrande',
      '11708': '/praiagrande',
      '11709': '/praiagrande',
      // Santos
      '11010': '/santos',
      '11011': '/santos',
      '11012': '/santos',
      '11013': '/santos',
      '11014': '/santos',
      '11015': '/santos',
      '11016': '/santos',
      '11017': '/santos',
      '11018': '/santos',
      '11019': '/santos',
      '11020': '/santos',
      '11021': '/santos',
      '11022': '/santos',
      '11023': '/santos',
      '11024': '/santos',
      '11025': '/santos',
      '11026': '/santos',
      '11027': '/santos',
      '11028': '/santos',
      '11029': '/santos',
      '11030': '/santos',
      '11031': '/santos',
      '11032': '/santos',
      '11033': '/santos',
      '11034': '/santos',
      '11035': '/santos',
      '11036': '/santos',
      '11037': '/santos',
      '11038': '/santos',
      '11039': '/santos',
      '11040': '/santos',
      '11041': '/santos',
      '11042': '/santos',
      '11043': '/santos',
      '11044': '/santos',
      '11045': '/santos',
      '11046': '/santos',
      '11047': '/santos',
      '11048': '/santos',
      '11049': '/santos',
      '11050': '/santos',
      '11051': '/santos',
      '11052': '/santos',
      '11053': '/santos',
      '11054': '/santos',
      '11055': '/santos',
      '11056': '/santos',
      '11057': '/santos',
      '11058': '/santos',
      '11059': '/santos',
      '11060': '/santos',
      '11061': '/santos',
      '11062': '/santos',
      '11063': '/santos',
      '11064': '/santos',
      '11065': '/santos',
      '11066': '/santos',
      '11067': '/santos',
      '11068': '/santos',
      '11069': '/santos',
      '11070': '/santos',
      '11071': '/santos',
      '11072': '/santos',
      '11073': '/santos',
      '11074': '/santos',
      '11075': '/santos',
      '11076': '/santos',
      '11077': '/santos',
      '11078': '/santos',
      '11079': '/santos',
      '11080': '/santos',
      '11081': '/santos',
      '11082': '/santos',
      '11083': '/santos',
      '11084': '/santos',
      '11085': '/santos',
      '11086': '/santos',
      '11087': '/santos',
      '11088': '/santos',
      '11089': '/santos',
      // São Vicente
      '11310': '/saovicente',
      '11311': '/saovicente',
      '11312': '/saovicente',
      '11313': '/saovicente',
      '11314': '/saovicente',
      '11315': '/saovicente',
      '11316': '/saovicente',
      '11317': '/saovicente',
      '11318': '/saovicente',
      '11319': '/saovicente',
      '11320': '/saovicente',
      '11321': '/saovicente',
      '11322': '/saovicente',
      '11323': '/saovicente',
      '11324': '/saovicente',
      '11325': '/saovicente',
      '11326': '/saovicente',
      '11327': '/saovicente',
      '11328': '/saovicente',
      '11329': '/saovicente',
      '11330': '/saovicente',
      '11331': '/saovicente',
      '11332': '/saovicente',
      '11333': '/saovicente',
      '11334': '/saovicente',
      '11335': '/saovicente',
      '11336': '/saovicente',
      '11337': '/saovicente',
      '11338': '/saovicente',
      '11339': '/saovicente',
      '11340': '/saovicente',
      '11341': '/saovicente',
      '11342': '/saovicente',
      '11343': '/saovicente',
      '11344': '/saovicente',
      '11345': '/saovicente',
      '11346': '/saovicente',
      '11347': '/saovicente',
      '11348': '/saovicente',
      '11349': '/saovicente',
    };

    // Pega os primeiros 5 dígitos do CEP normalizado
    const prefixoCep = cepNormalizado.substring(0, 5);
    
    const rota = cepParaCidade[prefixoCep];
    
    if (rota) {
      console.log(`CEP ${this.cep} -> ${rota}`);
      this.router.navigate([rota]);
    } else {
      console.log('CEP não encontrado na Baixada Santista');
      alert('CEP não encontrado na região da Baixada Santista. Verifique se o CEP está correto.');
    }
  }
}