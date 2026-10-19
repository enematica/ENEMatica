<div align="center">

# ENEMática

**Plataforma educacional de Matemática com foco na preparação para o ENEM**

[![Site](https://img.shields.io/badge/Site-enematica.vacaria.ifrs.edu.br-1f6feb?style=for-the-badge)](https://enematica.vacaria.ifrs.edu.br/)
[![GitHub](https://img.shields.io/badge/GitHub-enematica%2FENEMatica-181717?style=for-the-badge&logo=github)](https://github.com/enematica/ENEMatica)

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django_5.2-092E20?style=flat-square&logo=django&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![CKEditor](https://img.shields.io/badge/CKEditor-0287D0?style=flat-square&logo=ckeditor4&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)
![Licença](https://img.shields.io/badge/Licen%C3%A7a-Apache%202.0-blue?style=flat-square)

[Acessar a plataforma](https://enematica.vacaria.ifrs.edu.br/) · [Ver código-fonte](https://github.com/enematica/ENEMatica)

🌐 [English](README.md) | **Português (Brasil)**

</div>

---

## Sobre o projeto

O **ENEMática** é uma plataforma educacional desenvolvida e mantida por bolsistas do **IFRS Campus Vacaria**, voltada ao estudo de Matemática e à preparação para o ENEM. O sistema vai além de um simples banco de questões: reúne em uma única aplicação web a resolução de questões com filtros, videoaulas comentadas, simulados cronometrados, resumos, modelagens matemáticas e outros materiais educacionais.

A aplicação é construída com **Python e Django** no backend e **HTML, CSS e JavaScript** no frontend, com interface responsiva e funcionalidades interativas como ferramenta de rascunho digital, expansão de questões e contador regressivo nos simulados. O projeto está em produção e o código-fonte é público.

---

## Principais funcionalidades

| Funcionalidade | Descrição |
| --- | --- |
| **Banco de questões** | Navegação e resolução de questões de Matemática do ENEM, de 2018 a 2025 |
| **Filtros** | Filtragem por conteúdo, ano, dificuldade e busca por enunciado ou número |
| **Paginação** | Listagem organizada em páginas para facilitar a navegação |
| **Videoaulas** | Videoaulas comentadas associadas a questões |
| **Rascunho digital** | Área de desenho para cálculos e anotações durante a resolução |
| **Questões expandidas** | Visualização ampliada da questão para facilitar a leitura |
| **Simulados** | Provas personalizadas por conteúdo, ano e dificuldade, com controle de tempo |
| **Resumos** | Mapas mentais e resumos dos principais temas de Matemática |
| **Modelagens** | Questões modeladas, figuras modeladas e jogos matemáticos |
| **Downloads** | Arquivos disponíveis para baixar nas páginas de modelagens |
| **Responsividade** | Interface adaptada para diferentes tamanhos de tela |

---

## Demonstração

### Página inicial: desktop e mobile

| Desktop | Mobile |
| --- | --- |
| ![Home Desktop](docs/gifs/home-desktop.gif) | ![Home Mobile](docs/gifs/home-mobile.gif) |

A página inicial apresenta a navegação principal, a identidade visual do projeto, os destaques do site e os cards de acesso rápido. Na versão mobile, a navegação e o layout se reorganizam para telas menores.

---

## Banco de questões

As questões são uma das funcionalidades centrais do ENEMática. A página reúne questões de Matemática do ENEM em uma interface com filtros, paginação, videoaulas, expansão e uma ferramenta de rascunho integrada.

### Filtros

O usuário pode combinar diferentes critérios para encontrar as questões desejadas:

* **Conteúdo:** seleção de um ou mais conteúdos de Matemática
* **Ano:** edições do ENEM disponíveis na plataforma
* **Dificuldade:** fácil, médio e difícil
* **Enunciado:** busca por trecho do enunciado ou pelo número da questão

![Filtrando questões por conteúdo](docs/gifs/questions-filter.gif)

O GIF mostra uma busca por conteúdo: o usuário seleciona um tema de Matemática e a lista é atualizada com as questões correspondentes.

### Paginação

As questões são apresentadas de forma paginada, o que mantém a página organizada mesmo com um grande volume de itens.

### Resolvendo questões

O usuário escolhe uma alternativa e recebe o resultado na hora. O GIF mostra os dois casos: uma resposta **certa** e uma **errada**, para ilustrar como a plataforma reage em cada situação. No final, ele indica a videoaula comentada para assistir.

![Respondendo uma questão e abrindo a videoaula](docs/gifs/questions-answer.gif)

### Videoaulas

Determinadas questões possuem acesso a uma videoaula comentada, que complementa a resolução. O final do GIF acima mostra como abri-la depois de responder.

### Expansão da questão

Cada questão pode ser ampliada, facilitando a leitura do enunciado, das figuras e das alternativas.

### Rascunho digital

Uma ferramenta integrada à resolução permite fazer cálculos e anotações sem sair da página. Ela oferece:

* caneta
* borracha
* seleção de cores
* ajuste de espessura
* desfazer
* refazer
* limpar

![Rascunho digital](docs/gifs/questions-scratchpad.gif)

---

## Simulados

O ENEMática possui uma área específica para prática por meio de simulados. O usuário monta a própria prova escolhendo:

* conteúdos, anos e níveis de dificuldade
* quantidade de questões
* tempo por questão

Após gerar o simulado, a página apresenta um contador regressivo para acompanhamento do tempo, as questões para resolução e a finalização da prova. A experiência reutiliza conceitos da página de questões, como a apresentação das alternativas e o uso da ferramenta de rascunho.

<!-- Se desejar, adicione uma imagem estática do simulado:
![Simulados](docs/images/simulado.png)
-->

---

## Modelagens

A página **Modelagens** é uma área dedicada a recursos didáticos de Matemática. Ela inclui questões do ENEM associadas a modelos físicos e representações tridimensionais, além de figuras e jogos. Cada item possui uma página de detalhes com fotos, descrição e, quando disponível, o arquivo para download.

### Visão geral da página

O GIF abaixo percorre a página Modelagens inteira, passando por todas as seções.

![Visão geral da página Modelagens](docs/gifs/modelagens-overview.gif)

### Detalhes de um item

O fluxo demonstrado é: **explorar, abrir, visualizar e baixar**.

1. O usuário navega pelas modelagens disponíveis
2. Abre a página de detalhes de um item
3. Visualiza a questão original e as imagens do modelo
4. Baixa o arquivo do modelo pelo botão de download

![Detalhes de um item de Modelagens e download](docs/gifs/modelagens-detail.gif)

### Categorias

| Categoria | Descrição |
| --- | --- |
| **Questões modeladas** | Questões do ENEM acompanhadas de modelos que ajudam a visualizar o problema, com conteúdos como geometria espacial, projeção ortogonal e orientação espacial |
| **Figuras modeladas** | Sólidos geométricos como cubo, esfera, cone, cilindro, prismas e pirâmides, com medidas definidas |
| **Jogos matemáticos** | Jogos que estimulam o raciocínio lógico e a percepção espacial |

Os recursos atendem tanto estudantes quanto professores. Nas páginas de detalhes das questões modeladas, o projeto informa os processos utilizados na confecção das peças, como **impressão 3D** e **corte a laser**, e orienta como usar o arquivo baixado para produzir o próprio modelo físico.

---

## Resumos

A página de resumos reúne mapas mentais e materiais visuais sobre temas de Matemática, como porcentagem, razão e proporção, operações com frações e estatística, com visualização ampliada das imagens.

---

## Design responsivo

A interface foi desenvolvida para se adaptar a diferentes dispositivos:

* Desktop
* Notebook
* Tablet
* Smartphone

Elementos como navegação, cards, grids, imagens, espaçamentos e organização do conteúdo se ajustam conforme o tamanho da tela. Os GIFs da página inicial, apresentados na seção de demonstração, ilustram essa adaptação entre desktop e mobile.

---

## Tecnologias utilizadas

| Tecnologia | Utilização |
| --- | --- |
| **Python** | Linguagem principal do backend |
| **Django 5.2** | Framework web e estrutura da aplicação |
| **HTML** | Estrutura das páginas |
| **CSS** | Estilização e layouts responsivos |
| **JavaScript** | Interatividade e funcionalidades dinâmicas |
| **django-ckeditor** | Edição de conteúdo rico, como enunciados formatados |
| **Pillow** | Processamento de imagens enviadas à plataforma |
| **python-dotenv** | Leitura de variáveis de ambiente |
| **Git** | Controle de versão |
| **GitHub** | Hospedagem e versionamento do código |

As dependências Python estão listadas em [`requirements.txt`](requirements.txt).

---

## Arquitetura e organização

O projeto utiliza o **Django** para estruturar a aplicação web, seguindo a separação de responsabilidades do framework:

* **Models:** definem as entidades e o esquema do banco de dados, como questões, conteúdos, modelagens e seus arquivos
* **Views:** concentram a lógica de cada página, incluindo filtros, paginação, geração de simulados e downloads
* **Templates:** definem a camada HTML renderizada para o usuário
* **URLs:** mapeiam cada rota do site para a view correspondente
* **Arquivos estáticos:** reúnem CSS, JavaScript e imagens do frontend
* **Banco de dados:** armazena o conteúdo da plataforma, acessado pelo ORM do Django

O resultado é uma estrutura organizada em aplicações Django, templates e arquivos estáticos, com backend e frontend separados por responsabilidade.

---

## Estrutura do projeto

```text
ENEMatica/
├── app/
├── enematica/
├── imagens/
├── materiais_apoio/
├── static/
├── templates/
├── LICENSE
├── manage.py
└── requirements.txt
```

| Item | Descrição |
| --- | --- |
| `app/` | Aplicação Django do projeto |
| `enematica/` | Configurações do projeto Django |
| `imagens/` | Recursos de imagem do repositório |
| `materiais_apoio/` | Implementação interna dos recursos da página **Modelagens** |
| `static/` | Arquivos estáticos (CSS, JavaScript e imagens) |
| `templates/` | Templates HTML |
| `manage.py` | Utilitário de gerenciamento do Django |
| `requirements.txt` | Dependências Python |
| `LICENSE` | Licença Apache 2.0 |

> O nome `materiais_apoio` é apenas o nome interno da aplicação. Para o usuário, a página é chamada **Modelagens**.

---

## Interatividade

O JavaScript é utilizado para implementar a lógica interativa do frontend, além do que seria possível apenas com HTML e CSS. Entre as funcionalidades:

* filtros de questões
* interações de navegação e paginação
* modais e visualização ampliada de imagens
* contador regressivo dos simulados
* expansão de questões
* ferramenta de rascunho
* controles da interface
* navegação responsiva

---

## Como executar localmente

### Pré-requisitos

* Python 3.10 ou superior
* Git

### 1. Clonar o repositório

```bash
git clone https://github.com/enematica/ENEMatica.git
cd ENEMatica
```

### 2. Criar e ativar o ambiente virtual

**Windows (PowerShell):**

```powershell
python -m venv venv
venv\Scripts\Activate.ps1
```

**Linux e macOS:**

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Instalar as dependências

```bash
pip install -r requirements.txt
```

### 4. Configurar as variáveis de ambiente

O projeto lê suas configurações sensíveis a partir de um arquivo `.env`, usando o `python-dotenv`. Crie o arquivo na raiz do projeto (no mesmo nível do `manage.py`) a partir do modelo:

**Windows (PowerShell):**

```powershell
Copy-Item .env.example .env
```

**Linux e macOS:**

```bash
cp .env.example .env
```

Em seguida, preencha os valores no `.env`.

### 5. Aplicar as migrações

```bash
python manage.py migrate
```

### 6. Iniciar o servidor de desenvolvimento

```bash
python manage.py runserver
```

A aplicação ficará disponível em `http://127.0.0.1:8000/`.

### Opcional: criar um superusuário

Para acessar o painel administrativo do Django:

```bash
python manage.py createsuperuser
```

---

## Variáveis de ambiente

As variáveis ficam no arquivo `.env`, que **não deve ser versionado**. O repositório inclui o modelo [`.env.example`](.env.example), sem valores reais.

```dotenv
SECRET_KEY=
DEBUG=
```

| Variável | Descrição | Exemplo em desenvolvimento |
| --- | --- | --- |
| `SECRET_KEY` | Chave secreta do Django, usada para assinar sessões, cookies e tokens. Deve ser única, longa e mantida em sigilo | Valor gerado pelo comando abaixo |
| `DEBUG` | Ativa ou desativa o modo de depuração do Django | `True` |

### Gerando uma `SECRET_KEY`

```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

Copie o valor gerado para o `.env`.

### Boas práticas

* Nunca envie o arquivo `.env` para o repositório. Confirme que ele está listado no `.gitignore`.
* Use uma `SECRET_KEY` diferente em cada ambiente (desenvolvimento e produção).
* Em produção, mantenha `DEBUG=False`. Com o modo de depuração ativo, o Django pode expor detalhes internos da aplicação em páginas de erro.
* Se uma chave for exposta por engano, gere uma nova e substitua a anterior.

---

## Código aberto

O código-fonte do ENEMática está disponível publicamente no GitHub, sob a licença **Apache 2.0**:

https://github.com/enematica/ENEMatica

Isso permite que qualquer pessoa interessada possa:

* consultar o código
* estudar sua implementação
* acompanhar a evolução do projeto
* compreender a arquitetura
* analisar as tecnologias utilizadas

---

## Aplicação em produção

O ENEMática possui uma versão pública, acessível pela internet:

https://enematica.vacaria.ifrs.edu.br/

Não se trata de um protótipo local, mas de uma aplicação disponibilizada publicamente para uso.

---

## Apoio institucional

O ENEMática é desenvolvido no contexto do **Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul (IFRS) - Campus Vacaria**, como projeto de extensão, e conta com o apoio institucional do IFRS.

A equipe de coordenação e bolsistas pode ser conhecida na página [Sobre Nós](https://enematica.vacaria.ifrs.edu.br/sobre-nos/) da plataforma.

---

## Reconhecimentos

🏆 **1º lugar na MOSTRATEC**, na área de Ciências Planetárias, Terrestres, Matemática e Física.

🏆 **3º lugar na FENADANTE**, na área de Exatas.

---

## Objetivo

O ENEMática busca apoiar o estudo e o ensino de Matemática, especialmente no contexto do ENEM. Para isso, reúne em um só lugar:

* prática
* questões
* videoaulas
* simulados
* ferramentas digitais
* modelagens
* materiais educacionais

---

## Acesse o projeto

**Plataforma:**
https://enematica.vacaria.ifrs.edu.br/

**Código-fonte:**
https://github.com/enematica/ENEMatica

Conheça a plataforma e fique à vontade para consultar o código-fonte.
