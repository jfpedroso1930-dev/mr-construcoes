/**
 * MR CONSTRUÇÕES — Base de Dados dos Projetos & Portfólio
 * 
 * Este ficheiro contém os dados de todos os projetos apresentados no website.
 * Para substituir as fotografias de demonstração pelas fotografias reais da sua empresa,
 * basta atualizar os URLs no campo 'heroImage' e na lista 'gallery' de cada projeto.
 */

const PROJECTS_DATA = [
  {
    id: "villa-monsanto",
    slug: "villa-monsanto",
    title: "Villa Monsanto",
    tagline: "Moradia Contemporânea em Betão Aparente",
    category: "construcao",
    categoryLabel: "Construção",
    location: "Monsanto, Lisboa",
    year: "2024",
    area: "650 m²",
    duration: "14 Meses",
    status: "Concluído",
    architecture: "Atelier Bernardes & Associados",
    engineering: "MR Engenharia & Construções",
    layoutType: "featured-large",
    description: "Construção de raiz de uma residência unifamiliar contemporânea que se funde com a encosta arborizada. O projeto destaca-se pela pureza volumétrica, onde o betão arquitetónico à vista estabelece um diálogo contínuo com a caixilharia minimalista oculta e os painéis de madeira termotratada. Cada detalhe foi executado com tolerâncias milimétricas, garantindo transições contínuas entre as áreas sociais interiores e o deck com piscina infinita.",
    highlights: [
      "Estrutura em betão armado aparente texturado com cofragem em réguas de madeira",
      "Caixilharia oculta de grandes dimensões (altura livre de 3,40m) com vidro duplo acústico",
      "Piscina infinity suspensa revestida em pedra natural de xisto escuro",
      "Pavimentos interiores contínuos em microcimento mineral de alta resistência",
      "Sistema integrado de domótica KNX para controlo bioclimático, luz e segurança",
      "Certificação Energética A+ com painéis fotovoltaicos e bomba de calor geotérmica"
    ],
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85",
        caption: "Fachada sul com alçado transparente virado para o jardim e piscina infinita",
        type: "horizontal"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
        caption: "Geometria volumétrica e continuidade dos materiais exteriores",
        type: "horizontal"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=85",
        caption: "Área social com pé-direito duplo, integração fluida com o exterior",
        type: "vertical"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
        caption: "Cozinha com ilha monolítica em pedra Dekton e carpintarias em carvalho escovado",
        type: "horizontal"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85",
        caption: "Master Suite com vista panorâmica e acabamentos em tons neutros",
        type: "vertical"
      },
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1800&q=85",
        caption: "Instalação sanitária principal em pedra calcária de Ataíja bujardada",
        type: "horizontal"
      }
    ]
  },
  {
    id: "apartamento-chiado",
    slug: "apartamento-chiado",
    title: "Apartamento Chiado",
    tagline: "Reabilitação de Património & Conforto Contemporâneo",
    category: "reabilitacao",
    categoryLabel: "Reabilitação",
    location: "Chiado, Lisboa",
    year: "2024",
    area: "285 m²",
    duration: "9 Meses",
    status: "Concluído",
    architecture: "Studio Arquitetura Histórica",
    engineering: "MR Engenharia",
    layoutType: "portrait-tall",
    description: "Reabilitação integral de um apartamento nobre do século XIX no coração do Chiado. O desafio principal consistiu em preservar e restaurar minuciosamente os tetos trabalhados em estuque original e o soalho em espinha de carvalho francês, integrando de forma invisível todas as infraestruturas modernas de climatização por condutas, isolamento acústico e iluminação cénica indireta.",
    highlights: [
      "Recuperação e restauro manual de estuques decorativos e molduras de época",
      "Soalho em madeira maciça de carvalho em espinha com tratamento a óleo natural",
      "Climatização integral invisível por condutas ocultas em sancas decorativas",
      "Carpintarias interiores com portas pivotantes de 3 metros de altura",
      "Casas de banho revestidas a mármore Estremoz polido e ferragens em latão escovado",
      "Reforço estrutural anti-sísmico das vigas originais de madeira"
    ],
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
        caption: "Salão nobre com restauração dos estuques de época e iluminação contemporânea",
        type: "horizontal"
      },
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=85",
        caption: "Harmonia entre o mobiliário contemporâneo e o soalho em espinha recuperado",
        type: "vertical"
      },
      {
        url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1800&q=85",
        caption: "Zona de jantar com luz natural envolvente e carpintarias à medida",
        type: "horizontal"
      },
      {
        url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=85",
        caption: "Cozinha minimalista desenhada à medida integrada no espaço social",
        type: "vertical"
      },
      {
        url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1800&q=85",
        caption: "Transição para a varanda tradicional em ferro fundido com vista sobre o rio",
        type: "horizontal"
      }
    ]
  },
  {
    id: "casa-do-lago",
    slug: "casa-do-lago",
    title: "Casa do Lago",
    tagline: "Residência Minimalista sobre Espelho de Água",
    category: "construcao",
    categoryLabel: "Construção",
    location: "Quinta da Marinha, Cascais",
    year: "2023",
    area: "520 m²",
    duration: "12 Meses",
    status: "Concluído",
    architecture: "Gabinete Contemporâneo Cascais",
    engineering: "MR Construções",
    layoutType: "asymmetric-grid",
    description: "Uma moradia térrea de forte expressão arquitetónica, implantada junto a um espelho de água que reflete os planos horizontais da cobertura suspensa. A obra exigiu uma fundação de engenharia complexa em terreno arenoso e uma execução exímia das grandes vigas de transição em betão branco que dispensam pilares intermédios na sala de 140 m².",
    highlights: [
      "Cobertura em consola com 6 metros de balanço em betão protendido branco",
      "Espelho de água periférico de 180 m² com sistema de filtragem biológica",
      "Caixilhos basculantes em aço corten e vidro de baixa emissividade",
      "Paredes interiores em gesso cartonado duplo com isolamento térmico e acústico de alta densidade",
      "Garagem subterrânea climatizada com rampa em calçada portuguesa moderna"
    ],
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85",
        caption: "Volume principal e espelho de água sob a luz do entardecer",
        type: "horizontal"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
        caption: "Plano envidraçado de grandes dimensões com transição para o terraço coberto",
        type: "horizontal"
      },
      {
        url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1800&q=85",
        caption: "Escadaria helicoidal escultórica executada em betão in-situ",
        type: "vertical"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=85",
        caption: "Pormenor do alpendre suspenso e integração paisagística com os pinheiros mansos",
        type: "horizontal"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85",
        caption: "Interior da sala de estar com lareira suspensa de dupla face",
        type: "vertical"
      }
    ]
  },
  {
    id: "penthouse-avenida",
    slug: "penthouse-avenida",
    title: "Penthouse Avenida",
    tagline: "Remodelação Total de Alta Gama",
    category: "remodelacao",
    categoryLabel: "Remodelação",
    location: "Avenida da Liberdade, Lisboa",
    year: "2023",
    area: "340 m²",
    duration: "7 Meses",
    status: "Concluído",
    architecture: "Atelier Lux Design",
    engineering: "MR Construções",
    layoutType: "wide-editorial",
    description: "Remodelação radical do último piso de um edifício emblemático da Avenida da Liberdade. Com remodelação integral do layout original, foram criadas áreas sociais integradas com vistas panorâmicas sobre a cidade e o Tejo. A obra combinou marcenarias personalizadas em nogueira canaletto, pedra mármore Nero Marquina e sistemas acústicos topo de gama.",
    highlights: [
      "Reorganização espacial completa eliminando barreiras visuais",
      "Painéis de correr do chão ao teto em nogueira canaletto com fechos magnéticos",
      "Bancadas de cozinha e casas de banho esculpidas em bloco maciço de mármore",
      "Sistema de som embutido Bowers & Wilkins em todas as divisões",
      "Terraço panorâmico de 90 m² com jacuzzi privativo e pérgula bioclimática"
    ],
    heroImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2000&q=85",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=85",
        caption: "Amplo salão da penthouse com grandes envidraçados e iluminação indireta",
        type: "horizontal"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1800&q=85",
        caption: "Painéis de marcenaria sob medida e biblioteca integrada com iluminação LED",
        type: "vertical"
      },
      {
        url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1800&q=85",
        caption: "Cozinha de assinatura com ilha de trabalho e eletrodomésticos Gaggenau embutidos",
        type: "horizontal"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85",
        caption: "Quarto principal com closet walk-in de acabamento lacado mate",
        type: "vertical"
      },
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1800&q=85",
        caption: "Casa de banho em suite com banheira freestanding e torneiras em preto fosco",
        type: "horizontal"
      }
    ]
  },
  {
    id: "herdade-da-comporta",
    slug: "herdade-da-comporta",
    title: "Herdade da Comporta",
    tagline: "Arquitetura Sustentável & Integração Natural",
    category: "exteriores",
    categoryLabel: "Exteriores",
    location: "Comporta, Alentejo",
    year: "2024",
    area: "490 m²",
    duration: "10 Meses",
    status: "Concluído",
    architecture: "Atelier Terra & Mar",
    engineering: "MR Engenharia",
    layoutType: "featured-large",
    description: "Construção de uma residência térrea de inspiração tradicional alentejana com linguagem contemporânea. A utilização de materiais locais como a canha, cal branca, coberturas em colmo sintetizado e decks de madeira natural asseguram uma integração paisagística sem paralelo entre os pinheiros e as dunas da costa alentejana.",
    highlights: [
      "Execução de pavimentos exteriores contínuos em microbetão tom de areia",
      "Pérgulas rústicas em toros de pinho tratado e ensombramento de junco",
      "Piscina integrada com reboco de acabamento cor de areia natural",
      "Soluções de isolamento em cortiça expandida 100% natural portuguesa",
      "Paisagismo com espécies autóctones de baixa necessidade hídrica"
    ],
    heroImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2000&q=85",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1800&q=85",
        caption: "Vista aérea do pavilhão exterior e piscina harmonizada com o pinhal",
        type: "horizontal"
      },
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=85",
        caption: "Pormenores construtivos em alvenaria tradicional caiada a branco",
        type: "vertical"
      },
      {
        url: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1800&q=85",
        caption: "Espaço exterior de refeições com bancada de barbecue em betão moldado",
        type: "horizontal"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=85",
        caption: "Transição do exterior para a sala através de grandes portadas de correr",
        type: "vertical"
      }
    ]
  },
  {
    id: "palacete-estrela",
    slug: "palacete-estrela",
    title: "Palacete Estrela",
    tagline: "Reabilitação Estrutural e Conservação Arquitetónica",
    category: "reabilitacao",
    categoryLabel: "Reabilitação",
    location: "Estrela, Lisboa",
    year: "2023",
    area: "780 m²",
    duration: "18 Meses",
    status: "Concluído",
    architecture: "Atelier de Reabilitação Patrimonial",
    engineering: "MR Construções & Estruturas",
    layoutType: "portrait-tall",
    description: "Reabilitação integral de um palacete de três pisos construído no início do século XX. A intervenção englobou o reforço sísmico da alvenaria tradicional com cintagens de aço ocultas, restauração de cantarias em lioz, instalação de elevador panorâmico e modernização completa das redes térmicas e hidráulicas.",
    highlights: [
      "Reforço estrutural anti-sísmico através de tirantes de aço e perfis metálicos discretos",
      "Restauro especializado de cantarias em pedra lioz original e escadaria de honra",
      "Instalação de elevador com caixa em vidro transparente integrada no vão da escada",
      "Substituição de toda a caixilharia histórica por réplicas em madeira com vidro térmico",
      "Jardim privativo murado com fonte restaurada e nova iluminação cenográfica"
    ],
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=85",
        caption: "Pormenor do pórtico de entrada com cantarias em lioz recuperadas",
        type: "horizontal"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85",
        caption: "Salas de pé-direito elevado com vãos em arco e iluminação contemporânea",
        type: "vertical"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
        caption: "Nova galeria envidraçada que liga o corpo histórico ao jardim privado",
        type: "horizontal"
      },
      {
        url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1800&q=85",
        caption: "Varandins em ferro trabalhado restaurados segundo os métodos tradicionais",
        type: "vertical"
      }
    ]
  },
  {
    id: "residencia-foz",
    slug: "residencia-foz",
    title: "Residência Foz do Douro",
    tagline: "Arquitetura de Interiores & Acabamentos Exclusivos",
    category: "interiores",
    categoryLabel: "Interiores",
    location: "Foz do Douro, Porto",
    year: "2024",
    area: "390 m²",
    duration: "8 Meses",
    status: "Concluído",
    architecture: "Porto Studio Arquitetura",
    engineering: "MR Construções",
    layoutType: "asymmetric-grid",
    description: "Projeto de execução e acabamentos de requinte para uma habitação na primeira linha de mar. A maresia atlântica exigiu materiais altamente resistentes e duráveis, privilegiando o aço inoxidável náutico, pedra calcária de grão fino e madeiras nobres tratadas com vernizes ecológicos de alta performance.",
    highlights: [
      "Caixilharia com tratamento marítimo de alta durabilidade contra a corrosão salina",
      "Revestimentos verticais em ripas de carvalho com absorção acústica integrada",
      "Iluminação arquitetural oculta com temperatura de cor regulável (2700K a 3000K)",
      "Garrafeira climatizada à medida com vidro duplo e controlo térmico digital",
      "Pavimento radiante em toda a extensão da habitação para conforto máximo"
    ],
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=85",
        caption: "Ambiente interior com paleta de tons quentes, linho, madeira e betão",
        type: "horizontal"
      },
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
        caption: "Zona de leitura com luz natural filtrada e mobiliário embutido",
        type: "vertical"
      },
      {
        url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1800&q=85",
        caption: "Porta pivotante de entrada de dimensões monumentais em madeira maciça",
        type: "vertical"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
        caption: "Pormenores de bancada e carpintaria com encaixes de marcenaria artesanal",
        type: "horizontal"
      }
    ]
  },
  {
    id: "edificio-zenith",
    slug: "edificio-zenith",
    title: "Edifício Corporativo Zenith",
    tagline: "Engenharia de Fachadas & Espaços Comerciais",
    category: "construcao",
    categoryLabel: "Construção",
    location: "Parque das Nações, Lisboa",
    year: "2023",
    area: "1.250 m²",
    duration: "16 Meses",
    status: "Concluído",
    architecture: "Metrópole Arquitetos",
    engineering: "MR Engenharia & Gestão de Obras",
    layoutType: "wide-editorial",
    description: "Construção e acabamentos de topo para a nova sede de um grupo financeiro internacional. Uma obra executada com certificação LEED Gold, com fachada cortina ventilada de alta eficiência térmica, atrium com pé-direito quádruplo e soluções flexíveis de open-space corporativo com excelente performance acústica.",
    highlights: [
      "Fachada de vidro duplo com controlo solar inteligente e lâminas de cerâmica extrudida",
      "Átrio central com escadaria monumental em aço estrutural e degraus de betão pré-fabricado",
      "Pisos técnicos sobrelevados em placas de sulfato de cálcio para flexibilidade de cablagem",
      "Sistemas de climatização VRV de recuperação de calor e ventilação com filtros HEPA",
      "Certificação internacional de sustentabilidade LEED Gold"
    ],
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",
        caption: "Fachada exterior com geometria contemporânea e vidro de alta performance",
        type: "horizontal"
      },
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=85",
        caption: "Átrio de receção com abundante iluminação zenital e pavimentos polidos",
        type: "vertical"
      },
      {
        url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85",
        caption: "Salas de reunião executivas com revestimento em ripas acústicas de madeira",
        type: "horizontal"
      },
      {
        url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1800&q=85",
        caption: "Espaço de trabalho contemporâneo com vista panorâmica sobre o rio Tejo",
        type: "vertical"
      }
    ]
  }
];

const SERVICES_DATA = [
  {
    id: "construcao",
    number: "01",
    title: "Construção de Raiz",
    category: "Construção",
    description: "Execução integral de moradias unifamiliares e edifícios contemporâneos, com especial foco em estruturas de betão aparente, caixilharia minimalista e eficiência energética de classe superior.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    tags: ["Moradias de Luxo", "Betão Arquitetónico", "Obras Chave-na-Mão", "Classe A+"]
  },
  {
    id: "remodelacao",
    number: "02",
    title: "Remodelação Integral",
    category: "Remodelação",
    description: "Transformação profunda de habitações e apartamentos de prestígio. Redefinição total de layouts, modernização de infraestruturas técnicas e acabamentos de elevado rigor estético.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80",
    tags: ["Apartamentos Nobres", "Open-Space", "Iluminação Cénica", "Domótica"]
  },
  {
    id: "reabilitacao",
    number: "03",
    title: "Reabilitação Urbana",
    category: "Reabilitação",
    description: "Recuperação criteriosa de património arquitetónico e edifícios históricos. Cruzamento entre o respeito pelas técnicas tradicionais e a integração invisível de soluções estruturais modernas.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    tags: ["Edifícios Históricos", "Reforço Sísmico", "Estuques & Cantarias", "Conservação"]
  },
  {
    id: "residenciais",
    number: "04",
    title: "Obras Residenciais",
    category: "Residencial",
    description: "Construção e requalificação de propriedades residenciais exclusivas. Garantimos acompanhamento personalizado e gestão rigorosa de todas as fases da obra.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    tags: ["Condomínios Privados", "Quintas & Herdades", "Espelhos de Água", "Privacidade"]
  },
  {
    id: "comerciais",
    number: "05",
    title: "Obras Comerciais",
    category: "Comercial",
    description: "Execução de espaços corporativos, sedes de empresas, boutiques de autor e projetos no setor da hospitalidade com cumprimento rigoroso de prazos e orçamentos acordados.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    tags: ["Escritórios Premium", "Boutiques & Retail", "Hospitality", "Certificação LEED"]
  },
  {
    id: "acabamentos",
    number: "06",
    title: "Acabamentos & Detalhe",
    category: "Acabamentos",
    description: "Carpintarias sob medida, cantarias em pedras naturais nobres, microcimento contínuo e serralharia artística. Onde a precisão do artesão encontra a exigência da arquitetura contemporânea.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    tags: ["Carpintaria Fina", "Mármores & Calcários", "Microcimento", "Serralharia Minimal"]
  }
];

if (typeof window !== "undefined") {
  window.PROJECTS_DATA = PROJECTS_DATA;
  window.SERVICES_DATA = SERVICES_DATA;
}
