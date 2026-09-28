# MR CONSTRUÇÕES — Website & Portfólio de Arquitetura e Engenharia

Website moderno, premium e minimalista concebido para uma empresa de construção civil e engenharia de alto padrão, focado na apresentação visual de obras e captação de clientes qualificados.

---

## 🏛️ Destaques Visuais & Arquitetura do Site

- **Estética Minimalista & Sofisticada:** Paleta de tons neutros (branco papel, ardósia, greige, bronze e grafite arquitetónico) inspirada nas maiores referências mundiais de arquitetura contemporânea (*Dezeen*, *ArchDaily*, gabinetes internacionais).
- **Hero de Impacto Total (100vh):** Imagem arquitetónica de grande escala com a assinatura *"Construímos espaços. Criamos resultados."*, botões diretos de exploração e indicadores de credibilidade.
- **Portfólio Editorial Dinâmico:**
  - Composição editorial variada (fotografias horizontais panorâmicas, verticais em altura e grelhas assimétricas).
  - Hover discreto com metadados da obra (*Nome*, *Localização*, *Tipologia* e *"Ver projeto →"*).
  - Filtros instantâneos: `Todos` | `Construção` | `Remodelação` | `Reabilitação` | `Interiores` | `Exteriores`.
- **Páginas Individuais de Projeto:**
  - Hero em formato monumental.
  - Ficha técnica detalhada (Área, Prazo de execução, Ano, Gabinete de Arquitetura, Engenharia, Estado).
  - Galeria fotográfica extensa com grande espaçamento entre imagens e legendas discretas.
  - Visualizador **Lightbox em Ecrã Inteiro** com suporte a toque (swipe) e atalhos de teclado (`←`, `→`, `Esc`).
  - Chamada para ação final: *"Tem um projeto em mente? — Fale connosco"*.
  - Navegação entre obras anterior/seguinte.
- **Serviços Visuais:** Cartões com fotografia própria e descrições curtas para Construção de Raiz, Remodelação Integral, Reabilitação Urbana, Obras Residenciais, Obras Comerciais e Acabamentos & Detalhes.
- **Sobre Nós & Métricas:** Filosofia de rigor construtivo aliada aos números de confiança: **+18 anos de experiência**, **+150 projetos concluídos**, **100% rigor de prazos** e **+98% satisfação**.
- **Contactos & Orçamentos:** Formulário interativo com validação e feedback em toast, botão direto WhatsApp, coordenadas e escritórios.
- **Modal de Pedido de Orçamento Rápido:** Acessível a partir do botão fixo na navegação em qualquer momento.

---

## 📁 Estrutura de Ficheiros

```text
mrconstrucoes/
├── index.html              # Página principal e SPA de portfólio
├── projeto.html            # Página autónoma de detalhe de projeto
├── css/
│   ├── main.css            # Variáveis globais, tipografia, reset e utilitários
│   ├── components.css      # Header, Hero, Cartões de projeto, Filtros, Modal e Toasts
│   └── project-detail.css  # Layout editorial da página individual e galeria extensa
├── js/
│   ├── projects-data.js    # Base de dados estruturada de projetos e serviços
│   ├── lightbox.js         # Visualizador em ecrã inteiro de fotografias
│   ├── portfolio.js        # Filtragem e renderização editorial da grelha de projetos
│   ├── project-view.js     # Gestor de rotas e renderização do projeto individual
│   └── main.js             # Lógica de scroll, modais, formulários e navegação
└── assets/                 # Recursos gráficos e ícones
```

---

## 📷 Como Substituir as Fotografias pelas Obras Reais da Empresa

Todas as informações e imagens das obras estão concentradas no ficheiro:
👉 `js/projects-data.js`

Para atualizar ou adicionar uma obra:
1. Abra `js/projects-data.js`.
2. Substitua o `heroImage` e os URLs na lista `gallery` pelo caminho dos seus ficheiros locais (ex: `assets/obras/minha-obra-1.jpg`) ou links da CDN.
3. Altere o título, localização, área em m² e a descrição.
4. O website atualiza instantaneamente a galeria, os filtros e a página individual do projeto!

---

## 🚀 Como Executar Localmente

Como o projeto foi concebido em **HTML5, CSS3 puro e JavaScript ES6 moderno**, não requer compilações pesadas:

```bash
# Com Python 3 (já instalado no Mac/Linux):
python3 -m http.server 8080

# Ou simplesmente abra o ficheiro index.html em qualquer navegador web!
```
Aceda a `http://localhost:8080` no seu browser.
