let fatos = [
      ////// fatos de janeiro /////////
      {
        data: "01/01/1801",
        titulo: "Formação do Reino Unido",
        descricao: "O Reino Unido da Grã-Bretanha e da Irlanda é oficialmente formado.",
        link: "https://pt.wikipedia.org/wiki/Reino_Unido_da_Grã-Bretanha_e_Irlanda",
        capa: "https://ensinarhistoria.com.br/s21/wp-content/uploads/2019/10/Gr%C3%A3-Bretanha-e-Reino-Unido.jpg"
      },
      {
        data: "02/01/1959",
        titulo: "Luna I",
        descricao: "A União Soviética lança a Luna I, a primeira sonda espacial a se aproximar da Lua com sucesso",
        link: "https://gauchazh.clicrbs.com.br/cultura-e-lazer/almanaque/noticia/2019/01/ha-60-anos-satelite-sovietico-tornava-se-o-primeiro-objeto-espacial-a-escapar-da-gravidade-terrestre-cjqflurm90p1n01rxsk3mq33l.html",
        capa: "https://www.rbsdirect.com.br/imagesrc/24926229.jpg?w=1200&h=630&a=c&version=1575255600"
      },
      {
        data: "03/01/1959",
        titulo: "Alasca se torna estado dos EUA",
        descricao: "O Alasca é oficialmente incorporado como o 49º estado dos Estados Unidos.",
        link: "https://pt.wikipedia.org/wiki/Alasca",
        capa: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Alaska.svg"
      },
      {
        data: "04/01/1643",
        titulo: "Nascimento de Isaac Newton",
        descricao: "Isaac Newton, um dos maiores cientistas da história, nasce na Inglaterra.",
        link: "https://pt.wikipedia.org/wiki/Isaac_Newton",
        capa: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTGNBuKZS2dQ8gViURYxqj0ih63BJgwf4e1KAPzMc1AyYVjDkc_"
      },
      {
        data: "05/01/1933",
        titulo: "Início da construção da ponte Golden Gate",
        descricao: "A construção da icônica Ponte Golden Gate começa em São Francisco, EUA.",
        link: "https://pt.wikipedia.org/wiki/Ponte_Golden_Gate",
        capa: "https://cdn.pixabay.com/photo/2016/07/28/20/52/golden-gate-bridge-1549662_640.jpg"
      },
      {
        data: "06/01/1412",
        titulo: "Nascimento de Joana d'Arc",
        descricao: "Joana d'Arc, heroína francesa e santa, nasce em Domrémy, França.",
        link: "https://pt.wikipedia.org/wiki/Joana_d%27Arc",
        capa: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTepTMTZWVkj90OqHJa29mMqTjaOuMM1_agw8L0Zt56xvTMwy01"
      },
      {
        data: "07/01/1610",
        titulo: "Descoberta das luas de Júpiter",
        descricao: "Galileo Galilei descobre as quatro maiores luas de Júpiter.",
        link: "https://pt.wikipedia.org/wiki/Luas_de_Galileu",
        capa: "https://www.gov.br/aeb/pt-br/assuntos/noticias/galileu-descobriu-as-primeiras-luas-de-jupiter-ha-406-anos/luas-de-jupiter.jpg"
      },
      {
        data: "08/01/2023",
        titulo: "Ataques em Brasília",
        descricao: "O 8 de janeiro de 2023 entrou para a história do Brasil como o dia em que a democracia brasileira foi colocada em xeque. Insatisfeito com a posse do presidente Lula, em 1º de janeiro, um grupo de manifestantes invadiu as sedes dos Três Poderes da República.",
        link: "https://jornal.usp.br/artigos/o-que-foi-o-8-de-janeiro/",
        capa: "https://s01.video.glbimg.com/640x360/12058184.jpg"
      },
      {
        data: "09/01/1768",
        titulo: "Primeiro show moderno de circo",
        descricao: "Philip Astley realiza o primeiro show moderno de circo em Londres.",
        link: "https://pt.wikipedia.org/wiki/Circo",
        capa: "https://operamundi.uol.com.br/wp-content/uploads/2023/10/bc45b558-bcce-4b73-a766-8d56cf784ee9.png"
      },
      {
        data: "10/01/1920",
        titulo: "Criação da Liga das Nações",
        descricao: "Em 10 de janeiro de 1920 foi ratificado pela Liga das Nações o Tratado de Versalhes, acordo que pôs fim à Primeira Guerra Mundial, mas cujas condições impostas à Alemanha pelos país.",
        link: "https://www1.folha.uol.com.br/folha/livrariadafolha/ult10082u676422.shtml#:~:text=Em%2010%20de%20janeiro%20de,a%20eclosão%20da%20Segunda%20Guerra.",
        capa: "https://static.dw.com/image/18174367_604.webp"
      },
      {
        data: "11/01/1908",
        titulo: "Grand Canyon torna-se monumento nacional",
        descricao: "O Grand Canyon é designado como monumento nacional pelo presidente Theodore Roosevelt.",
        link: "https://pt.wikipedia.org/wiki/Grand_Canyon",
        capa: "https://www.visiteosusa.com.br/sites/default/files/styles/16_9_470x264/public/images/hero_media_image/2016-11/CanyonDeChelly_ChinleAZ%20%281%29.jpg?itok=9U66U5-c"
      },
      {
        data: "12/01/2010",
        titulo: "Terremoto no Haiti",
        descricao: "Um terremoto devastador atinge o Haiti, causando grande destruição.",
        link: "https://pt.wikipedia.org/wiki/Terremoto_no_Haiti_em_2010",
        capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/2010_Haiti_earthquake_damage2.jpg/1280px-2010_Haiti_earthquake_damage2.jpg"
      },
      {
        data: "13/01/1898",
        titulo: "Publicação de 'J'accuse'",
        descricao: "Émile Zola publica 'J'accuse', uma carta aberta no contexto do caso Dreyfus.",
        link: "https://cliohistoriaeliteratura.com/2020/01/13/publicacao-jaccuse-hoje-na-historia/",
        capa: "https://cliohistoriaeliteratura.com/wp-content/uploads/2020/01/jaccuse...__page_de_couverture_du_journal_le28099aurore_publiant_la_lettre_de28099emile_zola_au_prc3a9sident_de_la_rc3a9publique_m._fc3a9lix_faure_c3a0_propos_de_le28099affaire_dreyfus.jpg"
      },
      {
        data: "14/01/1954",
        titulo: "Casamento de Marilyn Monroe e Joe DiMaggio",
        descricao: "Marilyn Monroe se casa com o jogador de beisebol Joe DiMaggio.",
        link: "https://aventurasnahistoria.com.br/noticias/reportagem/neste-dia-em-1954-marlyn-monroe-casava-com-jogador-de-beisebol-joe-dimaggio.phtml",
        capa: "https://aventurasnahistoria.com.br/media/uploads/capamonroe8r7t6.jpg"
      },
      {
        data: "15/01/1929",
        titulo: "Nasce Martin Luther King Jr",
        descricao: "Nasceu Martin Luther King Jr, líder pacifista que lutou contra o racismo e pelos direitos civis dos negros. Ele foi assassinado em abril de 1968",
        link: "https://brasilescola.uol.com.br/historiag/martin-luther-king.htm",
        capa: "https://s5.static.brasilescola.uol.com.br/be/2023/01/retrato-de-martin-luther-king-jr-um-dos-lideres-da-luta-contra-a-segregacao-racial-nos-estados-unidos.jpg"
      },
      {
        data: "16/01/1920",
        titulo: "Início da Lei Seca nos EUA",
        descricao: "Entra em vigor a Lei Seca nos Estados Unidos, proibindo bebidas alcoólicas.",
        link: "https://pt.wikipedia.org/wiki/Lei_Seca",
        capa: "https://s3.static.brasilescola.uol.com.br/be/2023/09/mosto-para-producao-de-cerveja-sendo-despejado-no-esgoto-por-autoridades-norte-americanas-durante-a-lei-seca.jpg"
      },
      {
        data: "17/01/1991",
        titulo: "Início da Operação Tempestade no Deserto",
        descricao: "A Operação Tempestade no Deserto, parte da Guerra do Golfo, tem início.",
        link: "https://www.defesaaereanaval.com.br/historia/17-de-janeiro-de-1991-comecava-a-operacao-desert-storm",
        capa: "https://cdn-defesaaereanaval.nuneshost.com/wp-content/uploads/2017/01/Desert-Storm_08.jpg"
      },
      {
        data: "18/01/1871",
        titulo: "Proclamação do Império Alemão",
        descricao: "Proclamação do Império Alemão com Guilherme I como imperador.",
        link: "https://pt.wikipedia.org/wiki/Imp%C3%A9rio_Alem%C3%A3o",
        capa: "https://operamundi.uol.com.br/wp-content/uploads/2023/10/Wernerprokla.jpg"
      },
      {
        data: "19/01/1809",
        titulo: "Nascimento de Edgar Allan Poe",
        descricao: "Edgar Allan Poe, poeta e escritor, nasce em Boston, EUA.",
        link: "https://pt.wikipedia.org/wiki/Edgar_Allan_Poe",
        capa: "https://www.hjnahistoria.com.br/assets/imgcapa/edgar_allan_poe.jpg"
      },
      {
        data: "20/01/1981",
        titulo: "Liberação dos reféns americanos no Irã",
        descricao: "Após 444 dias de cativeiro, os reféns americanos são libertados no Irã.",
        link: "https://acervo.oglobo.globo.com/fatos-historicos/refens-americanos-no-ira-sao-libertados-em-1981-apos-444-dias-de-cativeiro-9263328",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanCChoNsTfiKIS0cKVWfHCfRLzeF1IRoTyw&s"
      },
      {
        data: "21/01/1793",
        titulo: "Execução de Luís XVI",
        descricao: "Luís XVI é guilhotinado durante a Revolução Francesa.",
        link: "https://aventurasnahistoria.com.br/noticias/reportagem/luis-xvi-o-rei-guilhotinado-que-deu-fim-aos-mais-de-mil-anos-de-monarquia-francesa-continua.phtml",
        capa: "https://aventurasnahistoria.com.br/media/uploads/mundo/guilhotina_luis.jpg"
      },
      {
        data: "22/01/1901",
        titulo: "Morte da Rainha Vitória",
        descricao: "Morte da Rainha Vitória do Reino Unido, marcando o fim da Era Vitoriana.",
        link: "https://aventurasnahistoria.com.br/personagens/rainha-vitoria.html",
        capa: "https://aventurasnahistoria.com.br/media/_versions/caparainh9d8d7f_widelg.jpg"
      },
      {
        data: "23/01/1950",
        titulo: "Morte de Salvador Dalí",
        descricao: "Em 23 de janeiro de 1989, morria o gênio da pintura Salvador Dalí. Ícone do surrealismo, o artista catalão foi uma das maiores autoridades da arte contemporânea.",
        link: "https://www.dw.com/pt-br/1989-morte-de-salvador-dalí/a-3971142",
        capa: "https://s2-galileu.glbimg.com/-FNVaV6W0uLJHRD_Ohb0Xrk9JyE=/0x0:900x701/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/M/x/vBfKA6Ssq9wq9mFb4gag/2020-05-11-salvador-dali-cover.jpeg"
      },
      {
        data: "24/01/1965",
        titulo: "Morte de Winston Churchill",
        descricao: "Winston Churchill, primeiro-ministro britânico durante a Segunda Guerra Mundial, falece.",
        link: "https://aventurasnahistoria.com.br/personagens/historia-biografia-de-winston-churchill.html",
        capa: "https://aventurasnahistoria.com.br/media/_versions/church88d9f_widelg.jpg"
      },
      {
        data: "25/01/1554",
        titulo: "Fundação da cidade de São Paulo",
        descricao: "Fundação da cidade de São Paulo, Brasil, pelos padres jesuítas.",
        link: "https://ensina.rtp.pt/artigo/fundacao-da-cidade-de-sao-paulo/",
        capa: "https://ensina.rtp.pt/site-uploads/2018/03/Funda%C3%A7%C3%A3o-S%C3%A3o-Paulo-854x480.jpg"
      },
      {
        data: "26/01/1788",
        titulo: "Primeiros colonos chegam à Austrália",
        descricao: "Primeiros prisioneiros britânicos chegam à Austrália, iniciando a colonização.",
        link: "https://rotadocanguru.com.br/historia-da-australia-da-colonizacao-a-independencia/",
        capa: "https://1.bp.blogspot.com/-XRD51CSwJoo/YCz8z8aCpPI/AAAAAAAAVUA/ugIDz0sIsZgKweJX2oizMztmAzx1J7o7gCLcBGAsYHQ/s800/800px-The_First_Fleet_entering_Port_Jackson%252C_January_26%252C_1788%252C_drawn_1888_A9333001h.jpg"
      },
      {
        data: "27/01/1945",
        titulo: "Libertação de Auschwitz",
        descricao: "Tropas soviéticas libertam o campo de concentração de Auschwitz.",
        link: "https://contrapoder.net/artigo/76-anos-da-libertacao-de-auschwitz/",
        capa: "https://contrapoder.net/wp-content/uploads/2021/01/nazi04-1024x683.jpg"
      },
      {
        data: "28/01/1986",
        titulo: "Explosão do Challenger",
        descricao: "A explosão do ônibus espacial Challenger ocorre logo após o lançamento.",
        link: "https://astronomiachapeco.com.br/2021/02/05/cineastro-onibus-espacial-challenger/",
        capa: "https://astronomiachapeco.com.br/wp-content/uploads/2021/02/Challenger_Netflix_horizontal.jpg"
      },
      {
        data: "29/01/1886",
        titulo: "Patente do automóvel de Karl Benz",
        descricao: "Karl Benz patenteia o primeiro automóvel movido a gasolina.",
        link: "https://autoesporte.globo.com/carros/noticia/2016/01/130-anos-da-patente-do-primeiro-automovel.ghtml",
        capa: "https://s2-autoesporte.glbimg.com/Gfv1Lfbpvxc2BXFGPJao9zjdHec=/0x0:620x485/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/o/C/HhxBLYTk2EDVzkhOctBw/2016-01-29-carro-karl.jpg"
      },
      {
        data: "30/01/1948",
        titulo: "Assassinato de Mahatma Gandhi",
        descricao: "Mahatma Gandhi, líder pacifista indiano, é assassinado por um extremista hindu.",
        link: "https://www.brasildefato.com.br/2021/01/30/assassinado-ha-73-anos-gandhi-inspira-lutas-pelo-mundo-e-e-alvo-de-disputa-na-india",
        capa: "https://cdn.brasildefato.com.br/media/e85d0cb253229461b34434be0359e7ba.jpg"
      },
      {
        data: "31/01/1542",
        titulo: "Descoberta das Cataratas do Iguaçu",
        descricao: "Descoberta das Cataratas do Iguaçu, na atual fronteira entre o Brasil e a Argentina, pelo espanhol Dom Álvar Núñez Cabeza de Vaca",
        link: "https://pt.wikipedia.org/wiki/Cataratas_do_Iguaçu#:~:text=O%20primeiro%20europeu%20a%20descobrir,é%20nomeada%20com%20seu%20nome.",
        capa: "https://turismoitaipu.com.br/wp-content/uploads/2024/03/cataratas-do-iguacu-em-foz-com-arco-iris-1.jpg"
      },
      
      ////// fatos de fevereiro /////////
      {
        data: "01/02/1814",
        titulo: "Erupção do vulcão Mayon",
        descricao: "Erupção do vulcão Mayon nas Filipinas, mata cerca de 1 200 pessoas; foi a mais devastadora erupção deste vulcão.",
        link: "https://pt.wikipedia.org/wiki/Vulcão_Mayon",
        capa: "https://upload.wikimedia.org/wikipedia/commons/7/73/Pyroclastic_flows_at_Mayon_Volcano.jpg"
      },
      {
        data: "02/02/1892",
        titulo: "Inaugurado Porto de Santos",
        descricao: "A Alemanha se rende em Stalingrado, marcando uma virada decisiva na Segunda Guerra Mundial.",
        link: "https://www.portodesantos.com.br/conheca-o-porto/historia-2/",
        capa: "https://www.portodesantos.com.br/wp-content/uploads/Praia-do-Consulado-Porto-de-Santos-Oleo-Sobre-Tela-Fundacao-Pinacoteca-Benedicto-Calixto-scaled.jpg"
      },
      {
        data: "03/02/1959",
        titulo: "O 'Dia em que a música morreu'",
        descricao: 'O dia em que a música morreu com o adeus trágico de Buddy Holly, Ritchie Valens e JP "The Big Bopper" Richardson',
        link: "https://www.canalhistory.com.br/hoje-na-historia/o-dia-em-que-musica-morreu-com-o-adeus-tragico-de-buddy-holly-ritchie-valens-e-jp#:~:text=Foram%20vítimas%20do%20acidente%20aéreo,do%20piloto%20provocaram%20o%20acidente.",
        capa: "https://www.canalhistory.com.br/sites/history.uol.com.br/files/styles/wide/public/images/2019/10/30/buddy_holly.jpg"
      },
      {
        data: "04/02/2004",
        titulo: "Lançamento do Facebook",
        descricao: "Mark Zuckerberg e colegas de Harvard lançam o Facebook, mudando a forma como as redes sociais operam.",
        link: "https://pt.wikipedia.org/wiki/Facebook",
        capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Facebook_Logo.png/250px-Facebook_Logo.png"
      },
      {
        data: "05/02/1971",
        titulo: "Apollo 14 na Lua",
        descricao: "A Apollo 14 foi um voo espacial tripulado norte-americano responsável pelo terceiro pouso na Lua.",
        link: "https://www.youtube.com/watch?v=RsD3WwPbJOc",
        capa: "https://tm.ibxk.com.br/2021/02/08/08174213714333.jpg"
      },
      {
        data: "06/02/1952",
        titulo: "Elizabeth II torna-se rainha",
        descricao: "Elizabeth II sobe ao trono após a morte de seu pai, o rei George VI.",
        link: "https://pt.wikipedia.org/wiki/Elizabeth_II_do_Reino_Unido",
        capa: "https://s3.static.brasilescola.uol.com.br/be/2020/05/elizabeth-jovem-be.jpg"
      },
      {
        data: "07/02/1992",
        titulo: "Assinatura do Tratado de Maastricht",
        descricao: "É assinado o Tratado de Maastricht, estabelecendo a União Europeia e criando o euro.",
        link: "https://pt.wikipedia.org/wiki/Tratado_de_Maastricht",
        capa: "https://www.cursosapientia.com.br/admimg/siteBlog/cacd-diplomata-itamaraty-diplomacia-26-anos-do-tratado-de-maastricht.png"
      },
      {
        data: "08/02/1587",
        titulo: "Execução de Maria, Rainha dos Escoceses",
        descricao: "Maria, Rainha da Escócia, é executada por conspiração contra Elizabeth I.",
        link: "https://mundoeducacao.uol.com.br/historiageral/maria-stuart.htm#:~:text=Em%201586%2C%20Maria%20Stuart%20foi,8%20de%20fevereiro%20de%201587.",
        capa: "https://aventurasnahistoria.com.br/media/_versions/personagem/maria_da_escocia_widelg.jpg"
      },
      {
        data: "09/02/1963",
        titulo: "Primeiro voo do Boeing 727",
        descricao: "O primeiro voo do Boeing 727 acontece, revolucionando o transporte aéreo comercial.",
        link: "https://flapinternational.com.br/destaque/61-anos-da-primeira-decolagem-do-boeing-727/",
        capa: "https://flapinternational.com.br/wp-content/uploads/2024/02/boeing-727-first-flight-2.jpg"
      },
      {
        data: "10/02/1996",
        titulo: "Deep Blue derrota Garry Kasparov",
        descricao: "O supercomputador Deep Blue vence o campeão mundial de xadrez Garry Kasparov pela primeira vez.",
        link: "https://pt.wikipedia.org/wiki/Deep_Blue",
        capa: "https://mega.ibxk.com.br/2022/12/14/14161110512322.jpg?ims=1232x690"
      },
      {
        data: "11/02/1990",
        titulo: "Libertação de Nelson Mandela",
        descricao: "Nelson Mandela é libertado da prisão após 27 anos, marcando o fim do apartheid na África do Sul.",
        link: "https://pt.wikipedia.org/wiki/Nelson_Mandela",
        capa: "https://vestibulares.estrategia.com/portal/wp-content/uploads/2022/07/shutterstock_1089865076-1-1-2.jpg"
      },
      {
        data: "12/02/1809",
        titulo: "Nascimento de Charles Darwin",
        descricao: "Charles Darwin, autor da teoria da evolução por seleção natural, nasce em Shrewsbury, Inglaterra.",
        link: "https://123ecos.com.br/docs/charles-darwin/",
        capa: "https://123ecos.com.br/wp-content/uploads/2024/08/quem-foi-charles-darwin-624x351.jpg"
      },
      {
        data: "13/02/1945",
        titulo: "Bombardeio de Dresden",
        descricao: "Bombardeio devastador em Dresden durante a Segunda Guerra Mundial, matando milhares de civis.",
        link: "https://www.bbc.com/portuguese/geral-51486829",
        capa: "https://c.files.bbci.co.uk/D54D/production/_110850645_gettyimages-152192723.jpg"
      },
      {
        data: "14/02/1929",
        titulo: "Massacre do Dia de São Valentim",
        descricao: "Sete membros da gangue de Bugs Moran são mortos pela gangue de Al Capone em Chicago.",
        link: "https://pt.wikipedia.org/wiki/Massacre_do_Dia_de_S%C3%A3o_Valentim",
        capa: "https://i0.wp.com/www.estilogangster.com.br/wp-content/uploads/2016/09/George-Bugs-Moran.jpg?fit=835%2C529&ssl=1"
      },
      {
        data: "15/02/1898",
        titulo: "Explosão do USS Maine",
        descricao: "O USS Maine explode em Havana, levando os EUA à guerra contra a Espanha.",
        link: "https://aventurasnahistoria.com.br/noticias/reportagem/neste-dia-em-1898-a-explosao-de-um-navio-mudava-para-sempre-a-historia-dos-eua-e-do-mundo.phtml",
        capa: "https://aventurasnahistoria.com.br/media/uploads/legacy/2019/02/14/uss-maine-capa-1129332.jpg"
      },
      {
        data: "16/02/1959",
        titulo: "Fidel Castro assume como primeiro-ministro de Cuba",
        descricao: "Fidel Castro se torna o líder de Cuba após a Revolução Cubana.",
        link: "https://pt.wikipedia.org/wiki/Fidel_Castro",
        capa: "https://s4.static.brasilescola.uol.com.br/be/2020/08/presidente-cuba.jpg"
      },
      {
        data: "17/02/1600", 
        titulo: "Execução de Giordano Bruno",
        descricao: "O filósofo Giordano Bruno é queimado na fogueira pela Inquisição por suas ideias cosmológicas.",
        link: "https://pt.wikipedia.org/wiki/Giordano_Bruno",
        capa: "https://upload.wikimedia.org/wikipedia/commons/1/15/Giordano_Bruno.jpg"
      },
      {
        data: "18/02/1930",
        titulo: "Descoberta de Plutão",
        descricao: "O astrônomo Clyde Tombaugh descobre Plutão no Observatório Lowell, nos EUA.",
        link: "https://www.ccvalg.pt/astronomia/noticias/2020/02/21_tombaugh_plutao.htm",
        capa: "https://img.odcdn.com.br/wp-content/uploads/2022/11/Clyde-Tombaugh.jpg"
      },
      {
        data: "19/02/1942",
        titulo: "Ordem Executiva 9066 nos EUA",
        descricao: "O presidente Roosevelt assina a ordem que cria campos de internamento para nipo-americanos durante a Segunda Guerra Mundial.",
        link: "https://pt.wikipedia.org/wiki/Ordem_Executiva_9066",
        capa: "https://s.libertaddigital.com/2020/08/11/1920/1080/fit/franflin-delano-roosevelt.jpg"
      },
      {
        data: "20/02/1962",
        titulo: "John Glenn orbita a Terra",
        descricao: "O astronauta John Glenn se torna o primeiro americano a orbitar a Terra.",
        link: "https://pt.wikipedia.org/wiki/John_Glenn",
        capa: "https://t.ctcdn.com.br/Nz-tbDyHKC4LRoe_9l8Z5TKnMnQ=/640x360/smart/i563832.png"
      },
      {
        data: "21/02/1965",
        titulo: "Assassinato de Malcolm X",
        descricao: "O ativista dos direitos civis Malcolm X é assassinado enquanto discursava em Nova York.",
        link: "https://pt.wikipedia.org/wiki/Malcolm_X",
        capa: "https://mundonegro.inf.br/wp-content/uploads/2023/02/Copia-de-CAPA-MN-2022-2023-02-22T135125.523.jpg"
      },
      {
        data: "22/02/1732",
        titulo: "Nascimento de George Washington",
        descricao: "Nasce George Washington, o primeiro presidente dos Estados Unidos.",
        link: "https://pt.wikipedia.org/wiki/George_Washington",
        capa: "https://www.infoescola.com/wp-content/uploads/2019/11/George-Washington.jpg"
      },
      {
        data: "23/02/1945",
        titulo: "Levantamento da bandeira em Iwo Jima",
        descricao: "Soldados dos EUA erguem a bandeira no Monte Suribachi durante a Batalha de Iwo Jima, um momento icônico da Segunda Guerra Mundial.",
        link: "https://pt.wikipedia.org/wiki/Batalha_de_Iwo_Jima",
        capa: "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/iwo-jima-flag-raising-rosenthal-gung-ho.jpg?w=760&h=705"
      },
      {
        data: "24/02/2022",
        titulo: "Invasão da Ucrânia pela Rússia",
        descricao: "A Rússia invade a Ucrânia, desencadeando uma guerra em larga escala e uma crise global.",
        link: "https://pt.wikipedia.org/wiki/Invas%C3%A3o_da_Ucr%C3%A2nia_pela_R%C3%BAssia",
        capa: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/10/ucrania-bandeira-e1669824290812.jpg"
      },
      {
        data: "25/02/1986",
        titulo: "Queda de Ferdinand Marcos",
        descricao: "O presidente das Filipinas, Ferdinand Marcos, foge do país após a Revolução do Poder Popular.",
        link: "https://pt.wikipedia.org/wiki/Ferdinand_Marcos",
        capa: "https://ogimg.infoglobo.com.br/in/25502971-057-18b/FT1086A/760/98914373_FILES-This-file-photo-taken-on-November-15-1985-shows-Philippine-President-Ferdinand-Ma.jpg"
      },
      {
        data: "26/02/1993",
        titulo: "Atentado no World Trade Center",
        descricao: "Um atentado à bomba no World Trade Center em Nova York mata seis pessoas e fere mais de mil.",
        link: "https://pt.wikipedia.org/wiki/Atentado_ao_World_Trade_Center_em_1993",
        capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/WTCTerroristAttack1993.jpg/250px-WTCTerroristAttack1993.jpg"
      },
      {
        data: "27/02/1933",
        titulo: "Incêndio no Reichstag",
        descricao: "O Reichstag, parlamento alemão, é incendiado, permitindo que Hitler consolide seu poder.",
        link: "https://aventurasnahistoria.com.br/noticias/reportagem/incendio-no-reichstag-ha-90-anos-fogo-no-parlamento-alemao-impulsionava-consolidacao-nazista.phtml",
        capa: "https://esquerdaonline.com.br/wp-content/uploads/2018/10/maxresdefault-1.jpg"
      },
      {
        data: "28/02/1954",
        titulo: "Televisão em Cores",
        descricao: "Primeiros aparelhos de televisão em cores que utilizam o padrão NTSC são oferecidos para venda ao público.",
        link: "https://pt.wikipedia.org/wiki/Televisão_em_cores",
        capa: "https://f.i.uol.com.br/fotografia/2017/01/05/661531-970x600-1.jpeg"
      },
      ////////// Fatos de março /////////////
      {
        data: "01/03/1936",
        titulo: "A construção da represa Hoover é concluída",
        descricao: "A represa Hoover, uma das maiores obras de engenharia dos Estados Unidos, é concluída.",
        link: "https://pt.wikipedia.org/wiki/Represa_Hoover",
        capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Hoover_Dam_HDR.jpg/1280px-Hoover_Dam_HDR.jpg"
      },
      {
        data: "02/03/1836",
        titulo: "Declaração de Independência do Texas",
        descricao: "O Texas declara sua independência do México, estabelecendo a República do Texas.",
        link: "https://pt.wikipedia.org/wiki/Declara%C3%A7%C3%A3o_de_Independ%C3%AAncia_do_Texas",
        capa: "https://upload.wikimedia.org/wikipedia/commons/1/16/Sam_Houston_at_San_Jacinto.jpg"
      },
      {
        data: "03/03/1931",
        titulo: "Adotada a canção 'The Star-Spangled Banner'",
        descricao: "O hino nacional dos Estados Unidos, 'The Star-Spangled Banner', é oficialmente adotado.",
        link: "https://pt.wikipedia.org/wiki/The_Star-Spangled_Banner",
        capa: "https://cdn.wizard.com.br/wp-content/uploads/2021/07/30113641/bandeiras-dos-estados-unidos-tremulando.jpg"
      },
      {
        data: "04/03/1933",
        titulo: "Posse de Franklin D. Roosevelt",
        descricao: "Franklin D. Roosevelt toma posse como o 32º presidente dos EUA e inicia seu primeiro mandato.",
        link: "https://pt.wikipedia.org/wiki/Franklin_D._Roosevelt",
        capa: "https://operamundi.uol.com.br/wp-content/uploads/2023/10/fb_roosevelt.jpg"
      },
      {
        data: "05/03/1953",
        titulo: "Morte de Josef Stalin",
        descricao: "O líder soviético Josef Stalin morre após governar a União Soviética por quase 30 anos.",
        link: "https://pt.wikipedia.org/wiki/Josef_Stalin",
        capa: "https://aventurasnahistoria.com.br/media/uploads/urss_end.jpeg"
      },
      {
        data: "06/03/1899",
        titulo: "Patente da aspirina",
        descricao: "A Bayer registra a patente da aspirina, um dos medicamentos mais utilizados no mundo.",
        link: "https://pt.wikipedia.org/wiki/Aspirina",
        capa: "https://operamundi.uol.com.br/wp-content/uploads/2023/10/7bf37c08-a014-474f-8495-9af0f149ee35.png"
      },
      {
        data: "07/03/1965",
        titulo: "Domingo Sangrento em Selma, Alabama",
        descricao: "Ativistas dos direitos civis são violentamente reprimidos pela polícia em Selma, Alabama, durante uma marcha.",
        link: "https://pt.wikipedia.org/wiki/Domingo_Sangrento_(1965)",
        capa: "https://www.gov.br/palmares/pt-br/assuntos/noticias/ha-55-anos-acontecia-a-marcha-de-selma-a-montgomery/SELMA2600x436.jpg"
      },
      {
        data: "08/03/1910",
        titulo: "Raymonde de Laroche",
        descricao: "A aviadora francesa Raymonde de Laroche torna-se a primeira mulher a receber uma licença de piloto",
        link: "https://www.diasdoano.com/historia/a-aviadora-francesa-raymonde-de-laroche-tornou-se-a-primeira-mulher-a-receber-uma-licenca-de-piloto/",
        capa: "https://www.oexplorador.com.br/exp/wp-content/uploads/2014/10/Raymonde-de-Laroche.jpg"
      },
      {
        data: "09/03/1959",
        titulo: "Lançamento da boneca Barbie",
        descricao: "A boneca Barbie é lançada pela Mattel no American International Toy Fair.",
        link: "https://pt.wikipedia.org/wiki/Barbie",
        capa: "https://d.newsweek.com/en/full/2107834/original-barbie-doll-1959.png?w=1600&h=1600&q=88&f=98486671950a36d6717b7c492cea3509"
      },
      {
        data: "10/03/1876",
        titulo: "Primeira transmissão de telefone por Alexander Graham Bell",
        descricao: "Alexander Graham Bell faz a primeira transmissão de voz por telefone, dizendo: 'Sr. Watson, venha aqui'.",
        link: "https://aventurasnahistoria.com.br/noticias/almanaque/historia-os-bastidores-do-primeiro-telefonema-da-historia.phtml",
        capa: "https://santaportal.com.br/wp/wp-content/uploads/2021/05/2016310205426g.jpg"
      },
      {
        data: "11/03/2011",
        titulo: "Terremoto e tsunami no Japão",
        descricao: "Um terremoto de magnitude 9,0 atinge o Japão, seguido por um tsunami devastador.",
        link: "https://pt.wikipedia.org/wiki/Terremoto_e_tsunami_de_T%C5%8Dhoku_de_2011",
        capa: "https://s2-g1.glbimg.com/NRBDRr5kcOYkxG1GsYpVvuoWflw=/0x0:640x360/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/S/B/AaUKAfS3GOkUYklUjLbw/116824737-tsujapangetty.jpeg"
      },
      {
        data: "12/03/1930",
        titulo: "Mahatma Gandhi lidera a Marcha do Sal",
        descricao: "Mahatma Gandhi inicia a Marcha do Sal, um ato de protesto contra o monopólio britânico sobre o sal na Índia.",
        link: "https://pt.wikipedia.org/wiki/Mahatma_Gandhi",
        capa: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Marche_sel.jpg"
      },
      {
        data: "13/03/2013",
        titulo: "Papa Francisco eleito",
        descricao: "O cardeal Jorge Mario Bergoglio é eleito Papa, tornando-se o Papa Francisco.",
        link: "https://pt.wikipedia.org/wiki/Papa_Francisco",
        capa: "https://img.cancaonova.com/cnimages/canais/uploads/sites/11/2020/09/papa-francisco-vaticano_daniel-ibanez-CNA.jpg"
      },
      {
        data: "14/03/1879",
        titulo: "Nascimento de Albert Einstein",
        descricao: "Nasce Albert Einstein, físico alemão conhecido por sua teoria da relatividade.",
        link: "https://pt.wikipedia.org/wiki/Albert_Einstein",
        capa: "https://lh3.googleusercontent.com/proxy/pxBcQHD9y5cMApfsFPYLJ5qxzQI47POEr2RDGJcQ9PtJSP5jt3sAd5SXLJGCHGvqwS-frVtYr2vObTD9WqCVSKKwKK7scrUq8eYpuCBY8SpSCc_E1xRdv9N1NAJgTTAddINUFT3LEEDY6nsZqDOH629D"
      },
      {
        data: "15/03/44 a.C.",
        titulo: "Assassinato de Júlio César",
        descricao: "Júlio César, ditador romano, é assassinado no Senado por um grupo de conspiradores.",
        link: "https://pt.wikipedia.org/wiki/J%C3%BAlio_C%C3%A9sar",
        capa: "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/rsmarch15.jpg?w=1900&h=1043"
      },
      {
        data: "16/03/1968",
        titulo: "Massacre de My Lai",
        descricao: "Soldados americanos matam centenas de civis vietnamitas no vilarejo de My Lai durante a Guerra do Vietnã.",
        link: "https://pt.wikipedia.org/wiki/Massacre_de_My_Lai",
        capa: "https://radiopeaobrasil.com.br/wp-content/uploads/2018/04/image-1024x691.jpg"
      },
      {
        data: "17/03/1992",
        titulo: "Atentado à embaixada de Israel em Buenos Aires",
        descricao: "A embaixada de Israel em Buenos Aires é alvo de um atentado a bomba, matando 29 pessoas.",
        link: "https://pt.wikipedia.org/wiki/Atentado_%C3%A0_Embaixada_de_Israel_na_Argentina",
        capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Embajada_Destr.JPG/250px-Embajada_Destr.JPG"
      },
      {
        data: "18/03/1965",
        titulo: "Primeira caminhada espacial",
        descricao: "O cosmonauta soviético Alexei Leonov realiza a primeira caminhada espacial da história.",
        link: "https://pt.wikipedia.org/wiki/Alexei_Leonov",
        capa: "https://mensageirosideral.blogfolha.uol.com.br/files/2017/07/leonov-spacewalk.jpg"
      },
      {
        data: "19/03/1953",
        titulo: "Oscar é televisionado",
        descricao: "Em 19 de março de 1953, pela primeira vez a cerimônia de entrega do Oscar foi televisionada ao vivo, mas somente para os Estados Unidos e o Canadá",
        link: "https://www.gazetadopovo.com.br/vida-e-cidadania/o-dia-19-de-marco-na-historia-9l9b6k5pihf8mcz06fyjhp7fw/#:~:text=Em%2019%20de%20março%20de,invadiu%20o%20território%20norte-americano.",
        capa: "https://blogdorogerinho.wordpress.com/wp-content/uploads/2015/03/bob-hope-hosts-the-hollywood-portion-of-the-ceremony-at-the-rko-pantages-theatre.jpg"
      },
      {
        data: "20/03/1657",
        titulo: "Nasce Shelton Jackson Le (seu irmão hahaha)",
        descricao: "Nascia Shelton Jackson Lee , mais conhecido como o cineasta Spike Lee. Entre seus filmes se destacam Malcolm X , Faça a coisa certa, Febre da Selva e Mais e Melhores Blues.",
        link: "https://pt.wikipedia.org/wiki/Spike_Lee",
        capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Spike_Lee_Cannes_2018.jpg/375px-Spike_Lee_Cannes_2018.jpg"
      },
      {
        data: "21/03/1960",
        titulo: "Dia Internacional para a Eliminação da Discriminação Racial",
        descricao: "No dia 21 de março de 1960, na África do Sul, 20 mil negros protestavam contra uma lei que limitava os lugares por onde eles podiam circular. A manifestação era pacífica, mas tropas do Exército atiraram contra a multidão.",
        link: "https://bvsms.saude.gov.br/21-3-dia-internacional-para-a-eliminacao-da-discriminacao-racial/#:~:text=INÍCIO-,21%2F3%20–%20Dia%20Internacional%20para%20a%20Eliminação%20da%20Discriminação%20Racial,Exército%20atiraram%20contra%20a%20multidão.",
        capa: "https://s2.glbimg.com/djOdqNsiPRGHlbrSvdElrRlswA0=/i.glbimg.com/og/ig/infoglobo1/f/original/2022/03/21/shaperville.jpg"
      },
      {
        data: "22/03/1963",
        titulo: "Lançamento do álbum 'Please Please Me' dos Beatles",
        descricao: "A banda britânica The Beatles lança seu primeiro álbum de estúdio, 'Please Please Me'.",
        link: "https://pt.wikipedia.org/wiki/Please_Please_Me",
        capa: "https://hqrock.com.br/wp-content/uploads/2013/03/pleasepleaseme-cover.jpg?w=640"
      },
      {
        data: "23/03/1775",
        titulo: "Discurso 'Dê-me liberdade ou dê-me a morte!'",
        descricao: "Patrick Henry faz seu famoso discurso 'Dê-me liberdade ou dê-me a morte!' em defesa da liberdade das Treze Colônias.",
        link: "https://pt.wikipedia.org/wiki/Patrick_Henry",
        capa: "https://beckerbeatriz.wordpress.com/wp-content/uploads/2022/02/patrick_henry_speaking_before_the_virginia_assembly_cropped.png"
      },
      {
        data: "24/03/1989",
        titulo: "Desastre do Exxon Valdez",
        descricao: "O navio petroleiro Exxon Valdez derrama milhões de litros de petróleo no Alasca, causando um desastre ambiental.",
        link: "https://pt.wikipedia.org/wiki/Desastre_ambiental_do_Exxon_Valdez",
        capa: "https://www.abtlp.org.br/wp-content/uploads/2020/04/O-acidente-do-Exxon-Valdez-no-Alasca-mais-de-30-anos-depois.jpg"
      },
      {
        data: "25/03/1957",
        titulo: "Assinatura do Tratado de Roma",
        descricao: "É assinado o Tratado de Roma, que estabelece a Comunidade Econômica Europeia, precursora da União Europeia.",
        link: "https://pt.wikipedia.org/wiki/Tratado_de_Roma",
        capa: "https://operamundi.uol.com.br/wp-content/uploads/2023/10/Treaty_of_Rome.jpg"
      },
      {
        data: "26/03/1979",
        titulo: "Assinatura do Tratado de Paz Israel-Egito",
        descricao: "Israel e Egito assinam um tratado de paz, mediado pelos Estados Unidos.",
        link: "https://noticias.uol.com.br/ultimas-noticias/deutschewelle/2017/03/26/1979-egito-e-israel-assinam-o-acordo-de-camp-david.htm",
        capa: "https://conteudo.imguol.com.br/2013/04/03/camp-david-1364998512211_615x300.jpg"
      },
      {
        data: "27/03/2022",
        titulo: "Will Smith agride o comediante Chris Rock",
        descricao: "Will Smith surpreendeu os fãs e os colegas da indústria cinematográfica ao protagonizar um episódio escandaloso durante a cerimônia do Oscar de 2022",
        link: "https://exame.com/casual/oscar-2024-relembre-o-tapa-de-will-smith-durante-a-cerimonia-de-premiacao/",
        capa: "https://conteudo.imguol.com.br/c/entretenimento/7b/2022/03/27/will-smith-soca-chris-rock-durante-o-oscar-1648435870138_v2_900x506.jpg"
      },
      {
        data: "28/03/1979",
        titulo: "Acidente nuclear de Three Mile Island",
        descricao: "Ocorre um grave acidente na usina nuclear de Three Mile Island, nos EUA, o pior acidente nuclear da história americana.",
        link: "https://pt.wikipedia.org/wiki/Acidente_nuclear_de_Three_Mile_Island",
        capa: "https://img.odcdn.com.br/wp-content/uploads/2023/08/Usina-de-Three-Mile-Island.webp"
      },
      {
        data: "29/03/1974",
        titulo: " Primeiro voo de um balão dirigível no Rio de Janeiro",
        descricao: "Em 29 de março de 1882, ocorreu o primeiro voo de um balão dirigível no Rio de Janeiro, o “Le Victoria”, criado pelo paraense Júlio Cezar Ribeiro de Souza (1843-1887), inventor reconhecido como pioneiro no desenvolvimento da dirigibilidade aérea.",
        link: "https://ensinarhistoria.com.br/linha-do-tempo/primeiro-voo-de-um-dirigivel-no-rio-de-janeiro/",
        capa: "https://ensinarhistoria.com.br/s21/wp-content/uploads/2018/07/dirigivel.jpg"
      },
      {
        data: "30/03/1981",
        titulo: "Nascimento do guitarrista Eric Clapton",
        descricao: "Eric Clapton nasceu no dia 30 de março de 1945 na pequena vila de Ripley, dentro do condado de Surrey, que fica localizado nos arredores da capital Londres. Na época de seu nascimento, tropas americanas e canadenses ocupavam o local para ajudar no esforço aliado durante a fase final da Segunda Guerra Mundial.",
        link: "https://guitarload.com.br/2021/12/22/biografia-de-eric-clapton/",
        capa: "https://guitarload.com.br/wp-content/uploads/2021/12/yardbirds.jpg"
      },
      {
        data: "31/03/1889",
        titulo: "Inauguração da Torre Eiffel",
        descricao: "A Torre Eiffel, um dos marcos mais famosos do mundo, é oficialmente inaugurada em Paris.",
        link: "https://pt.wikipedia.org/wiki/Torre_Eiffel",
        capa: "https://pensenumanoticia.com.br/wp-content/uploads/2021/03/torre-eiffel.jpg"
      },

      //// fatos abril //////
      {
        data: "01/04/1976",
        titulo: "Fundação da Apple Inc.",
        descricao: "Steve Jobs, Steve Wozniak e Ronald Wayne fundam a Apple Inc., que revolucionaria a tecnologia.",
        link: "https://pt.wikipedia.org/wiki/Apple_Inc.",
        capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/250px-Apple_logo_black.svg.png"
      },
      {
        data: "02/04/1964",
        titulo: "Lançamento da Zond 1",
        descricao: "Enviada para Vênus, sobrevoou o planeta em julho do mesmo ano, a uma distância de 100.000 km e entrou em órbita em torno do Sol.",
        link: "https://pt.wikipedia.org/wiki/Zond_1",
        capa: "https://nssdc.gsfc.nasa.gov/planetary/image/zond_1.jpg"
      },
      {
        data: "03/04/1973",
        titulo: "Primeira chamada de telefone móvel",
        descricao: "Martin Cooper, engenheiro da Motorola, realiza a primeira chamada de telefone móvel da história.",
        link: "https://pt.wikipedia.org/wiki/Martin_Cooper",
        capa: "https://s2-g1.glbimg.com/4Mz-To5kT_vYPbwFjstYU17cxNY=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/A/A/VC4WIGSUAN5wet5aB4JQ/martin-cooper.jpg"
      },
      {
        data: "04/04/1968",
        titulo: "Lançamento do Programa Apollo 6",
        descricao: "A NASA lança o Apollo 6, um teste não tripulado do foguete Saturn V que abriria caminho para a missão Apollo 11.",
        link: "https://pt.wikipedia.org/wiki/Apollo_6",
        capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Apollo_6_launch.jpg/1200px-Apollo_6_launch.jpg"
      },
      {
        data: "05/04/1994",
        titulo: "Fundação da Netscape",
        descricao: "É fundada a Netscape Communications, pioneira no desenvolvimento de navegadores de internet.",
        link: "https://pt.wikipedia.org/wiki/Netscape",
        capa: "https://s2-techtudo.glbimg.com/IK8_Z5NC9jn3AgZ7neSLt6SvV30=/0x0:695x468/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/j/B/OB4WdVRq6ijRToauF2xw/2014-10-13-1334239565-netscape-logo.png"
      },
      {
        data: "06/04/1917",
        titulo: "Os EUA entram na Primeira Guerra Mundial",
        descricao: "Os Estados Unidos entram oficialmente na Primeira Guerra Mundial, o que marcaria o início de sua posição de liderança global.",
        link: "https://pt.wikipedia.org/wiki/Participa%C3%A7%C3%A3o_dos_Estados_Unidos_na_Primeira_Guerra_Mundial",
        capa: "https://aulazen.com/wp-content/uploads/2018/06/Entrada-Americana-na-Primeira-Guerra-Mundial.jpg"
      },
      {
        data: "07/04/1948",
        titulo: "Fundação da Organização Mundial da Saúde (OMS)",
        descricao: "É fundada a Organização Mundial da Saúde, uma agência especializada da ONU voltada para a saúde global.",
        link: "https://pt.wikipedia.org/wiki/Organiza%C3%A7%C3%A3o_Mundial_da_Sa%C3%BAde",
        capa: "https://static.biologianet.com/2020/05/oms-bandeira.jpg"
      },
      {
        data: "08/04/1888",
        titulo: "Indendencia ou Morte é exposto ao público",
        descricao: "O quadro Independência ou Morte, de Pedro Américo, é exposto ao público pela primeira vez na Academia Real de Belas Artes de Florença, Itália. Três meses depois, o quadro seria entregue ao governo paulista para integrar a coleção do Museu do Ipiranga;",
        link: "https://pt.wikipedia.org/wiki/Independência_ou_Morte_(Pedro_Américo)",
        capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Pedro_Am%C3%A9rico_-_Independ%C3%AAncia_ou_Morte_-_Google_Art_Project.jpg/1000px-Pedro_Am%C3%A9rico_-_Independ%C3%AAncia_ou_Morte_-_Google_Art_Project.jpg"
      },
      {
        data: "09/04/1865",
        titulo: "Fim da Guerra Civil Americana",
        descricao: "A Guerra Civil Americana termina com a rendição das forças confederadas, abrindo caminho para a reunificação dos Estados Unidos.",
        link: "https://pt.wikipedia.org/wiki/Guerra_Civil_Americana",
        capa: "https://www.infoescola.com/wp-content/uploads/2011/09/guerra-civil-americana.jpg"
      },
      {
        data: "10/04/1998",
        titulo: "Acordo da Sexta-Feira Santa",
        descricao: "O Acordo da Sexta-Feira Santa é assinado na Irlanda do Norte, promovendo a paz entre os nacionalistas e unionistas.",
        link: "https://pt.wikipedia.org/wiki/Acordo_da_Sexta-Feira_Santa",
        capa: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/02/GettyImages-1470008841.jpg?w=1024"
      },
      {
        data: "11/04/1970",
        titulo: "Lançamento da missão Apollo 13",
        descricao: "A NASA lança a missão Apollo 13, que apesar de complicações, trouxe os astronautas de volta em segurança.",
        link: "https://pt.wikipedia.org/wiki/Apollo_13",
        capa: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/3775_27F532521BCA7BB2.jpg?w=1024"
      },
      {
        data: "12/04/1961",
        titulo: "Yuri Gagarin se torna o primeiro homem no espaço",
        descricao: "O cosmonauta soviético Yuri Gagarin se torna o primeiro ser humano a viajar para o espaço.",
        link: "https://pt.wikipedia.org/wiki/Yuri_Gagarin",
        capa: "https://averdade.org.br/wp-content/uploads/2013/04/yuri-gagarin.jpg"
      },
      {
        data: "13/04/1742",
        titulo: "Primeira apresentação do 'Messias' de Handel",
        descricao: "O oratório 'Messias', de Georg Friedrich Handel, é apresentado pela primeira vez em Dublin, Irlanda.",
        link: "https://pt.wikipedia.org/wiki/Messias_(Handel)",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0OuGsM4Y6ux0FGjnIDhU-UBMBKprTluBQ1g&s"
      },
      {
        data: "14/04/1894",
        titulo: "Primeira exibição pública de cinema no Kinetoscope",
        descricao: "O Kinetoscope, inventado por Thomas Edison, realiza a primeira exibição pública de cinema em Nova York.",
        link: "https://pt.wikipedia.org/wiki/Kinetosc%C3%B3pio",
        capa: "https://darkside.blog.br/wp-content/uploads/2021/11/Exibicao-cinetoscopio-1024x810.jpg"
      },
      {
        data: "15/04/1452",
        titulo: "Nascimento de Leonardo da Vinci",
        descricao: "Nasce Leonardo da Vinci, um dos maiores gênios da história, conhecido por suas contribuições à arte e ciência.",
        link: "https://pt.wikipedia.org/wiki/Leonardo_da_Vinci",
        capa: "https://www.cartacapital.com.br/wp-content/uploads/2019/02/Kombo-Leonardo-Da-Vinci-und-Leonardo-di-Caprio.jpg"
      },
      {
        data: "16/04/1889",
        titulo: " Nasce Charles Chaplin",
        descricao: "Charles Spencer Chaplin Junior, mais conhecido como Charlie Chaplin, nasceu em Londres, no dia 16 de abril de 1889, sendo filho de Hannah Chaplin e Charles Chaplin Senior.",
        link: "https://brasilescola.uol.com.br/biografia/charles-chaplin.htm",
        capa: "https://i0.wp.com/imagens.formigaeletrica.com.br/2017/12/chaplin.jpg?resize=720%2C400"
      },
      {
        data: "17/04/1964",
        titulo: "Lançamento do Ford Mustang",
        descricao: "O icônico carro Ford Mustang é apresentado ao público pela primeira vez.",
        link: "https://pt.wikipedia.org/wiki/Ford_Mustang",
        capa: "https://revistacarro.com.br/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-19-at-13.10.55.jpeg"
      },
      {
        data: "18/04/1955",
        titulo: "Morte de Albert Einstein",
        descricao: "O físico Albert Einstein, um dos maiores cientistas da história, falece em Princeton, EUA.",
        link: "https://pt.wikipedia.org/wiki/Albert_Einstein",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLsIT732mQd_W6FUqcVR3GHVodZn__VyYsGg&s"
      },
      {
        data: "19/04/1943",
        titulo: "Descoberta dos efeitos do LSD",
        descricao: "Albert Hofmann descobre os efeitos alucinógenos do LSD, substância que seria usada para pesquisas científicas e psicoterapias.",
        link: "https://pt.wikipedia.org/wiki/LSD",
        capa: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/B3BC/production/_104421064_e040720a-197c-4eb2-9c71-4c828decc8e0.jpg.webp"
      },
      {
        data: "20/04/1862",
        titulo: "Fundação da Sociedade Real de Astronomia",
        descricao: "A Sociedade Real de Astronomia é fundada no Reino Unido, impulsionando a pesquisa astronômica.",
        link: "https://pt.wikipedia.org/wiki/Sociedade_Royal_de_Astronomia",
        capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Royal_Society_20040420.jpg/800px-Royal_Society_20040420.jpg"
      },
      {
        data: "21/04/1989",
        titulo: "Lançamento do Game Boy",
        descricao: "A Nintendo lança o Game Boy, um dos consoles portáteis de maior sucesso da história.",
        link: "https://pt.wikipedia.org/wiki/Game_Boy",
        capa: "https://img.odcdn.com.br/wp-content/uploads/2019/04/20190418085717.jpg"
      },
      {
        data: "22/04/1970",
        titulo: "Primeiro Dia da Terra",
        descricao: "O primeiro Dia da Terra é celebrado, um evento criado para conscientizar sobre a preservação do meio ambiente.",
        link: "https://pt.wikipedia.org/wiki/Dia_da_Terra",
        capa: "https://img.estadao.com.br/resources/jpg/4/1/1619049466414.jpg"
      },
      {
        data: "23/04/1616",
        titulo: "Morte de William Shakespeare",
        descricao: "O dramaturgo William Shakespeare, considerado o maior escritor em língua inglesa, morre em Stratford-upon-Avon.",
        link: "https://pt.wikipedia.org/wiki/William_Shakespeare",
        capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/250px-Shakespeare.jpg"
      },
      {
        data: "24/04/1990",
        titulo: "Lançamento do telescópio Hubble",
        descricao: "A NASA lança o telescópio espacial Hubble, que revolucionaria a astronomia.",
        link: "https://pt.wikipedia.org/wiki/Telesc%C3%B3pio_espacial_Hubble",
        capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HST-SM4.jpeg/250px-HST-SM4.jpeg"
      },
      {
        data: "25/04/1953",
        titulo: "Descoberta da estrutura do DNA",
        descricao: "James Watson e Francis Crick publicam sua descoberta da estrutura em dupla hélice do DNA.",
        link: "https://pt.wikipedia.org/wiki/DNA",
        capa: "https://blog.biogenetika.com.br/wp-content/uploads/2020/01/james-watson-francis-crick.jpg"
      },
      {
        data: "26/04/1986",
        titulo: "Acidente nuclear de Chernobyl",
        descricao: "Ocorre o acidente nuclear em Chernobyl, na Ucrânia, sendo o pior desastre nuclear da história.",
        link: "https://pt.wikipedia.org/wiki/Acidente_nuclear_de_Chernobil",
        capa: "https://s2.glbimg.com/uYbAIBksQvUTawBOnAEBuKd8iJc=/640x424/i.glbimg.com/og/ig/infoglobo1/f/original/2022/02/25/chernobyl.jpg"
      },
      {
        data: "27/04/1994",
        titulo: "Primeiras eleições democráticas na África do Sul",
        descricao: "Nelson Mandela é eleito presidente da África do Sul nas primeiras eleições democráticas multirraciais.",
        link: "https://pt.wikipedia.org/wiki/Nelson_Mandela",
        capa: "https://ensinarhistoria.com.br/s21/wp-content/uploads/2019/04/10_Nelson-Mandela.jpg"
      },
      {
        data: "28/04/1789",
        titulo: "Motim no HMS Bounty",
        descricao: "A tripulação do HMS Bounty se rebela contra o capitão William Bligh, iniciando um dos motins mais famosos da história.",
        link: "https://pt.wikipedia.org/wiki/HMS_Bounty",
        capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Mutiny_HMS_Bounty.jpg/1200px-Mutiny_HMS_Bounty.jpg"
      },
      {
        data: "29/04/2011",
        titulo: "Casamento do Príncipe William e Kate Middleton",
        descricao: "O príncipe William e Kate Middleton se casam na Abadia de Westminster, atraindo a atenção mundial.",
        link: "https://pt.wikipedia.org/wiki/Casamento_de_William_de_Gales_e_Catherine_Middleton",
        capa: "https://static1.purepeople.com.br/articles/3/11/29/13/@/1470243-kate-middleton-e-principe-william-se-cas-580x326-2.jpg"
      },
      {
        data: "30/04/1789",
        titulo: "Posse de George Washington",
        descricao: "George Washington toma posse como o primeiro presidente dos Estados Unidos.",
        link: "https://pt.wikipedia.org/wiki/George_Washington",
        capa: "https://s2.static.brasilescola.uol.com.br/be/2021/02/aposentadoria-washington.jpg"
      },

      ////// fatos maio ////////
    {
      data: "01/05/1886",
      titulo: "Início das manifestações pela jornada de 8 horas",
      descricao: "Protestos em Chicago, que marcaram o início das lutas por melhores condições de trabalho e o estabelecimento da jornada de 8 horas.",
      link: "https://pt.wikipedia.org/wiki/Dia_do_Trabalhador",
      capa: "https://www.sindimont.org.br/ckfinder/userfiles/images/IMAGEM%2033.png"
    },
    {
      data: "02/05/2012",
      titulo: "Venda do quadro The Scream",
      descricao: " Uma versão do quadro The Scream (O Grito), do norueguês Edvard Munch, é vendida em Nova Iorque, pelo valor recorde de US$ 120 milhões.",
      link: "https://epocanegocios.globo.com/Informacao/Resultados/noticia/2012/05/o-grito-de-edvard-munch-bate-recorde-e-e-vendido-por-us-1199-milhoes.html",
      capa: "http://e.glbimg.com/og/ed/f/302x416/2012/05/03/ogrito.jpg"
    },
    {
      data: "03/05/1978",
      titulo: "Primeiro email spam é enviado",
      descricao: "O primeiro email de spam registrado na história é enviado, marcando o início de uma nova era na comunicação digital.",
      link: "https://pt.wikipedia.org/wiki/Spam_(inform%C3%A1tica)",
      capa: "https://conteudo.imguol.com.br/c/noticias/dc/2017/07/11/spam-1499787765549_v2_900x506.jpg"
    },
    {
      data: "04/05/1959",
      titulo: "Primeira cerimônia do Grammy",
      descricao: "A primeira cerimônia do Grammy Awards é realizada em Los Angeles, celebrando a excelência na música.",
      link: "https://pt.wikipedia.org/wiki/Grammy_Awards",
      capa: "https://upload.wikimedia.org/wikipedia/pt/6/63/Trof%C3%A9u_Grammy_Awards.jpeg"
    },
    {
      data: "05/05/1961",
      titulo: "Primeiro voo espacial tripulado dos EUA",
      descricao: "Alan Shepard se torna o primeiro americano a viajar ao espaço no voo Freedom 7 da NASA.",
      link: "https://pt.wikipedia.org/wiki/Alan_Shepard",
      capa: "https://acervo.oglobo.globo.com/incoming/22889383-322-557/materia/Alan-Shepard.jpg"
    },
    {
      data: "06/05/1954",
      titulo: "Roger Bannister corre a milha em menos de 4 minutos",
      descricao: "Roger Bannister se torna o primeiro homem a correr uma milha em menos de quatro minutos.",
      link: "https://pt.wikipedia.org/wiki/Roger_Bannister",
      capa: "https://tutameia.jor.br/wp-content/uploads/2018/03/bannister.jpg"
    },
    {
      data: "07/05/2000",
      titulo: "Primeiro transplante de mão realizado com sucesso",
      descricao: "A equipe médica do Dr. Jean-Michel Dubernard realiza o primeiro transplante de mão bem-sucedido no mundo.",
      link: "https://pt.wikipedia.org/wiki/Transplante_de_m%C3%A3o",
      capa: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/6555/production/_124914952_handtransplant_handsout_pa.jpg.webp"
    },
    {
      data: "08/05/1945",
      titulo: "Dia da Vitória na Europa (VE Day)",
      descricao: "A Alemanha Nazista se rende oficialmente, encerrando a Segunda Guerra Mundial na Europa.",
      link: "https://pt.wikipedia.org/wiki/Dia_da_Vit%C3%B3ria_na_Europa",
      capa: "https://fenajud.org.br/wp-content/uploads/2020/05/WhatsApp-Image-2020-05-08-at-16.48.51-1.jpeg"
    },
    {
      data: "09/05/1950",
      titulo: "Declaração Schuman",
      descricao: "A Declaração Schuman propõe a criação da Comunidade Europeia do Carvão e do Aço, que mais tarde evoluiria para a União Europeia.",
      link: "https://pt.wikipedia.org/wiki/Declara%C3%A7%C3%A3o_Schuman",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjpXkY0ibnrLVUiYi9O76TZP-k9zbyL_mvGg&s"
    },
    {
      data: "10/05/1994",
      titulo: "Nelson Mandela torna-se presidente da África do Sul",
      descricao: "Nelson Mandela se torna o primeiro presidente negro da África do Sul após o fim do apartheid.",
      link: "https://pt.wikipedia.org/wiki/Nelson_Mandela",
      capa: "https://s2.glbimg.com/k9_Tcl4Ie5ZWJsB3wEhdSX_I6dU=/645x388/i.glbimg.com/og/ig/infoglobo1/f/original/2019/05/10/78006244_johanesburgo_africa_do_sul_22-04-1994_nelson_mandela_-_eleicao_presidencial_-_com_a_vitoria.jpg"
    },
    {
      data: "11/05/1997",
      titulo: "Deep Blue vence Garry Kasparov",
      descricao: "O supercomputador da IBM, Deep Blue, derrota o campeão mundial de xadrez Garry Kasparov.",
      link: "https://pt.wikipedia.org/wiki/Deep_Blue",
      capa: "https://imagens.ebc.com.br/o7s7hvsopGFJv77parOQvzuSdYQ=/754x0/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/11mai17c.jpeg?itok=zm939ON6"
    },
    {
      data: "12/05/2008",
      titulo: "Lançamento do primeiro rover Phoenix em Marte",
      descricao: "A NASA lança o Phoenix Mars Lander, que confirma a existência de gelo em Marte.",
      link: "https://pt.wikipedia.org/wiki/Phoenix_(sonda_espacial)",
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Phoenix_landing.jpg/1200px-Phoenix_landing.jpg"
    },
    {
      data: "13/05/1981",
      titulo: "Papa João Paulo II sobrevive a atentado",
      descricao: "O Papa João Paulo II é alvejado em uma tentativa de assassinato, mas sobrevive e posteriormente perdoa o agressor.",
      link: "https://pt.wikipedia.org/wiki/Atentado_contra_Jo%C3%A3o_Paulo_II",
      capa: "https://img.cancaonova.com/cnimages/canais/uploads/sites/11/2014/03/papa-e-ali-agca.jpg"
    },
    {
      data: "14/05/1948",
      titulo: "Fundação do Estado de Israel",
      descricao: "David Ben-Gurion proclama a independência de Israel, que se torna um novo Estado soberano.",
      link: "https://pt.wikipedia.org/wiki/Declara%C3%A7%C3%A3o_de_Independ%C3%AAncia_de_Israel",
      capa: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/fbd7/live/decc7cf0-83fa-11ee-913e-f1ed4de8fadb.jpg.webp"
    },
    {
      data: "15/05/1928",
      titulo: "Primeira aparição de Mickey Mouse",
      descricao: "O personagem Mickey Mouse faz sua primeira aparição no curta animado 'Plane Crazy'.",
      link: "https://pt.wikipedia.org/wiki/Mickey_Mouse",
      capa: "https://viagemegastronomia.cnnbrasil.com.br/wp-content/uploads/sites/5/2018/09/Curiosidade05_Mickey90th.jpg"
    },
    {
      data: "16/05/1929",
      titulo: "Primeira cerimônia do Oscar",
      descricao: "A Academia de Artes e Ciências Cinematográficas realiza a primeira cerimônia do Oscar.",
      link: "https://pt.wikipedia.org/wiki/Pr%C3%AAmios_Oscar",
      capa: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/03/estatueta-oscar.jpg"
    },
    {
      data: "17/05/1954",
      titulo: "Decisão Brown vs. Board of Education",
      descricao: "A Suprema Corte dos EUA declara inconstitucional a segregação racial em escolas públicas.",
      link: "https://pt.wikipedia.org/wiki/Brown_v._Board_of_Education",
      capa: "https://imgs.jusbr.com/publications/noticias/338368046/embedded/1463488144645.jpg"
    },
    {
      data: "18/05/1980",
      titulo: "Eruption do Monte Santa Helena",
      descricao: "O Monte Santa Helena, nos EUA, entra em erupção, sendo uma das maiores erupções vulcânicas da história do país.",
      link: "https://pt.wikipedia.org/wiki/Monte_Santa_Helena",
      capa: "https://upload.wikimedia.org/wikipedia/commons/d/dc/MSH82_st_helens_plume_from_harrys_ridge_05-19-82.jpg"
    },
    {
      data: "19/05/1910",
      titulo: "Halley se aproxima da Terra",
      descricao: "O cometa Halley se aproximou da Terra. O cometa Halley entrou no Sistema Solar em 1986. Segundo as contas será visto novamente em 2061.",
      link: "https://brasilescola.uol.com.br/geografia/cometa-halley.htm",
      capa: "https://aventurasnahistoria.com.br/media/_versions/astronomia/halley_widelg.jpg"
    },
    {
      data: "20/05/1873",
      titulo: "Patente do jeans azul",
      descricao: "Levi Strauss e Jacob Davis registram a patente do jeans azul, um dos itens de vestuário mais populares do mundo.",
      link: "https://pt.wikipedia.org/wiki/Levi_Strauss",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1RMGc9Egy0ziE9HBSrcN6xTLHszARj_MdA&s"
    },
    {
      data: "21/05/1927",
      titulo: "Charles Lindbergh conclui o primeiro voo solo transatlântico",
      descricao: "Charles Lindbergh se torna o primeiro piloto a cruzar o Atlântico em um voo solo e sem escalas.",
      link: "https://pt.wikipedia.org/wiki/Charles_Lindbergh",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6JSDWlIaIF24afmX6ARIWP4VITSkh2DmOCg&s"
    },
    {
      data: "22/05/1990",
      titulo: "Reunificação do Iêmen",
      descricao: "A República do Iêmen do Norte e do Sul é oficialmente reunificada, formando o Iêmen unificado.",
      link: "https://pt.wikipedia.org/wiki/Reunifica%C3%A7%C3%A3o_do_I%C3%AAmen",
      capa: "https://upload.wikimedia.org/wikipedia/commons/5/5a/YAR-PDRY.PNG"
    },
    {
      data: "23/05/1934",
      titulo: "Bonnie e Clyde são mortos",
      descricao: "Os famosos criminosos Bonnie Parker e Clyde Barrow são mortos em uma emboscada pela polícia.",
      link: "https://pt.wikipedia.org/wiki/Bonnie_e_Clyde",
      capa: "https://aventurasnahistoria.com.br/media/uploads/800px-1932_ford_v-8_containing_the_remains_of_bonnie_parker_and_clyde_barrow.jpg"
    },
    {
      data: "24/05/1844",
      titulo: "Primeira mensagem de telégrafo",
      descricao: "Samuel Morse envia a primeira mensagem de telégrafo, marcando o início de uma nova era nas comunicações.",
      link: "https://pt.wikipedia.org/wiki/Samuel_Morse",
      capa: "https://unicamp.br/unicamp/sites/default/files/2019-06/img_ART_PS_otelegrafo_capaPO_20160628.jpg"
    },
    {
      data: "25/05/1977",
      titulo: "Lançamento de Star Wars",
      descricao: "O filme *Star Wars: Uma Nova Esperança* estreia nos cinemas e se torna um fenômeno cultural.",
      link: "https://pt.wikipedia.org/wiki/Star_Wars",
      capa: "https://cdn.ome.lt/9_sC4tyWRmMNxyNvC8wg-30jXzw=/837x0/smart/uploads/conteudo/fotos/Lista-03_XpwI7bI.jpg"
    },
    {
      data: "26/05/1897",
      titulo: "Publicação de 'Drácula' de Bram Stoker",
      descricao: "O romance gótico <string>Drácula</string>, de Bram Stoker, é publicado, definindo o arquétipo moderno dos vampiros.",
      link: "https://pt.wikipedia.org/wiki/Dr%C3%A1cula",
      capa: "https://s2-galileu.glbimg.com/1oUwqxN9MOlp9wqq9qEx_SiUqJ0=/0x0:1000x792/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/Q/k/ybsJdPQ0eLYDtDTK92yQ/2017-10-25-dracula-1931-004-bela-lugosi-in-the-bedroom-00m-xfh.jpeg"
    },
    {
      data: "27/05/1937",
      titulo: "Inauguração da Ponte Golden Gate",
      descricao: "A Ponte Golden Gate é inaugurada em São Francisco, Califórnia, como uma das maiores obras de engenharia da época.",
      link: "https://pt.wikipedia.org/wiki/Ponte_Golden_Gate",
      capa: "https://s2.glbimg.com/04AxC0L1OH3xgnoKP3FsVMMzXNJaz73yECGFikkA7WlIoz-HdGixxa_8qOZvMp3w/s.glbimg.com/jo/g1/f/original/2012/05/27/golden-gate-75th_fran.jpghttps://s2.glbimg.com/04AxC0L1OH3xgnoKP3FsVMMzXNJaz73yECGFikkA7WlIoz-HdGixxa_8qOZvMp3w/s.glbimg.com/jo/g1/f/original/2012/05/27/golden-gate-75th_fran.jpg"
    },
    {
      data: "28/05/1934",
      titulo: "Nascem as quíntuplas Dionne",
      descricao: "As quíntuplas Dionne, as primeiras quíntuplas conhecidas a sobreviverem, nascem no Canadá.",
      link: "https://pt.wikipedia.org/wiki/Qu%C3%ADntuplas_Dionne",
      capa: "https://metwo.com.br/wp-content/uploads/2019/05/irmas-quintuplas-da-familia-dionne_a416855.jpg"
    },
    {
      data: "29/05/1953",
      titulo: "Escalada do Monte Everest",
      descricao: "Sir Edmund Hillary e Tenzing Norgay se tornam as primeiras pessoas a chegar ao cume do Monte Everest.",
      link: "https://pt.wikipedia.org/wiki/Monte_Everest",
      capa: "https://ogimg.infoglobo.com.br/in/23696014-306-cd0/FT1086A/760/82882845_REVALIDATINGMANDATORY-CREDIT-REQUIRED-nimsdai-Project-Possible-This-handout-photo.jpg"
    },
    {
      data: "30/05/1431",
      titulo: "Joana d'Arc é executada",
      descricao: "Joana d'Arc, heroína francesa, é queimada na fogueira após ser acusada de heresia.",
      link: "https://pt.wikipedia.org/wiki/Joana_d%27Arc",
      capa: "https://aventurasnahistoria.com.br/media/_versions/personagem/albert_lynch_-_jeanne_darc_widelg.jpg"
    },
    {
      data: "31/05/2005",
      titulo: "Revelada a identidade de 'Garganta Profunda'",
      descricao: "Mark Felt revela ser 'Garganta Profunda', a fonte que ajudou a expor o escândalo Watergate.",
      link: "https://pt.wikipedia.org/wiki/Garganta_Profunda_(informante)",
      capa: "https://aventurasnahistoria.com.br/media/uploads/personagem/vanity_fair__garganta_profunda.jpg"
    },
    ////////// fatos de junho //////////
    {
      data: "01/06/1967",
      titulo: "Lançamento do álbum 'Sgt. Pepper's Lonely Hearts Club Band'",
      descricao: "A banda britânica The Beatles lança o álbum 'Sgt. Pepper's Lonely Hearts Club Band', considerado uma obra-prima da música.",
      link: "https://operamundi.uol.com.br/hoje-na-historia/podcast-hh-1967-beatles-lancam-album-sgt-peppers-lonely-hearts-club-band/",
      capa: "https://igormiranda.com.br/wp-content/smush-webp/2022/05/Beatles-Sgt-Peppers-Lonely-Hearts-Club-Band-cover-photoshoot-1024x683.jpg.webp"
    },
    {
      data: "02/06/1953",
      titulo: "Coroação da Rainha Elizabeth II",
      descricao: "Elizabeth II é coroada como rainha do Reino Unido em uma cerimônia histórica na Abadia de Westminster.",
      link: "https://pt.wikipedia.org/wiki/Elizabeth_II_do_Reino_Unido",
      capa: "https://conteudo.imguol.com.br/c/entretenimento/43/2023/04/28/a-rainha-elizabeth-2-em-sua-coroacao-em-1953-1682698698455_v2_900x506.png"
    },
    {
      data: "03/06/1970",
      titulo: "Brasil tricampeão",
      descricao: "Brasil tricampeão consagra Pelé no México em 70.",
      link: "https://www.bbc.com/portuguese/reporterbbc/story/2006/05/060600_copa1970",
      capa: "https://assets.goal.com/images/v3/blt7ec64b38f5aaeaa6/7a9b859c72c6e727566e78c0cb2a2760552955c1.jpg?auto=webp&format=pjpg&width=3840&quality=60"
    },
    {
      data: "04/06/2010",
      titulo: "Britânica é a 1ª mulher a cruzar a remo o Pacífico",
      descricao: "A britânica Roz Savage se tornou a primeira mulher a cruzar a remo o Oceano Pacífico ao chegar a Papua Nova Guiné, dois anos depois de sair do porto americano de San Francisco.",
      link: "https://g1.globo.com/mundo/noticia/2010/06/britanica-e-a-1a-mulher-a-cruzar-a-remo-o-pacifico.html",
      capa: "https://s2-ge.glbimg.com/4QrjC20M7PXRkdg8vlrkFfwbVLA=/0x0:960x640/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/F/s/vu5dRkSDuDXYSJEoixtQ/jasmine-harrison-2.jpg"
    },
    {
      data: "05/06/1981",
      titulo: "Descoberta do vírus HIV",
      descricao: "O CDC publica o primeiro relatório sobre a AIDS, uma descoberta que abriria caminho para o entendimento e tratamento da doença.",
      link: "https://pt.wikipedia.org/wiki/HIV",
      capa: "https://proffelipebarros.com.br/wp-content/uploads/2021/07/HIV-1024x559.jpg"
    },
    {
      data: "06/06/1944",
      titulo: "Dia D – Invasão da Normandia",
      descricao: "Forças aliadas desembarcam na Normandia durante a Segunda Guerra Mundial, marcando o início do fim do regime nazista na Europa.",
      link: "https://pt.wikipedia.org/wiki/Dia_D",
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/D-day_-_British_Forces_during_the_Invasion_of_Normandy_6_June_1944_B5246.jpg/250px-D-day_-_British_Forces_during_the_Invasion_of_Normandy_6_June_1944_B5246.jpg"
    },
    {
      data: "07/06/1929",
      titulo: "Fundação do Estado do Vaticano",
      descricao: "O Tratado de Latrão entre a Itália e o Vaticano é assinado, estabelecendo o Estado da Cidade do Vaticano como uma nação independente.",
      link: "https://pt.wikipedia.org/wiki/Tratado_de_Latr%C3%A3o",
      capa: "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/d5683d694d31ed887b98186f3be92acd.jpg"
    },
    {
      data: "08/06/1995",
      titulo: "Lançamento da linguagem de programação PHP",
      descricao: "Rasmus Lerdorf lança o PHP, uma linguagem de programação que revolucionaria o desenvolvimento web.",
      link: "https://pt.wikipedia.org/wiki/PHP",
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/800px-PHP-logo.svg.png"
    },
    {
      data: "09/06/1934",
      titulo: "Primeira aparição do Pato Donald",
      descricao: "O Pato Donald faz sua estreia no curta-metragem de animação 'The Wise Little Hen', da Disney.",
      link: "https://pt.wikipedia.org/wiki/Pato_Donald",
      capa: "https://www.meionews.com/uploads/imagens/2022/6/8/webp/pato-donald-aparece-pela-primeira-vez-no-cinema-ha-exatos-88-anos-bbee5738-720d-4062-8678-fdbdfd8c8c63.jpg.webphttps://www.meionews.com/uploads/imagens/2022/6/8/webp/pato-donald-aparece-pela-primeira-vez-no-cinema-ha-exatos-88-anos-bbee5738-720d-4062-8678-fdbdfd8c8c63.jpg.webp"
    },
    {
      data: "10/06/1829",
      titulo: "Primeira corrida de remo entre Oxford e Cambridge",
      descricao: "A tradicional corrida de remo entre as universidades de Oxford e Cambridge acontece pela primeira vez, iniciando uma das rivalidades esportivas mais conhecidas do mundo.",
      link: "https://pt.wikipedia.org/wiki/The_Boat_Race",
      capa: "https://s2.glbimg.com/JGRNaKWOffYCp5Qi5h6ILNkkfIE=/s.glbimg.com/jo/g1/f/original/2014/04/04/remo.jpg"
    },
    {
      data: "11/06/2002",
      titulo: "Lançamento do Mars Odyssey",
      descricao: "A NASA lança a sonda Mars Odyssey para explorar Marte, descobrindo evidências de água e gelo no planeta.",
      link: "https://pt.wikipedia.org/wiki/2001_Mars_Odyssey",
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/2001_mars_odyssey_wizja.jpg/1200px-2001_mars_odyssey_wizja.jpg"
    },
    {
      data: "12/06/1964",
      titulo: "Nelson Mandela é condenado à prisão perpétua",
      descricao: "Nelson Mandela é condenado à prisão perpétua por sua luta contra o apartheid na África do Sul, tornando-se um símbolo global de resistência.",
      link: "https://pt.wikipedia.org/wiki/Nelson_Mandela",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XMCRp23uj1QPUCC6DbarPnp0X_kniRg3jg&s"
    },
    {
      data: "13/06/1983",
      titulo: "Pioneer 10 deixa o Sistema Solar",
      descricao: "A sonda Pioneer 10 se torna a primeira nave espacial a deixar o Sistema Solar, ultrapassando a órbita de Netuno.",
      link: "https://pt.wikipedia.org/wiki/Pioneer_10",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZ4dZ-lN7Frgyq3Q2TEwb6DNwdse74kkZyw&s"
    },
    {
      data: "14/06/1777",
      titulo: "Criação da bandeira dos Estados Unidos",
      descricao: "O Congresso dos EUA aprova a resolução que adota a bandeira dos Estados Unidos, com 13 listras e 13 estrelas representando os estados originais.",
      link: "https://pt.wikipedia.org/wiki/Bandeira_dos_Estados_Unidos",
      capa: "https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/significado-da-bandeira-dos-estados-unidos.jpg"
    },
    {
      data: "15/06/1215",
      titulo: "Assinatura da Magna Carta",
      descricao: "O rei João da Inglaterra assina a Magna Carta, limitando o poder da monarquia e estabelecendo direitos fundamentais para os cidadãos.",
      link: "https://pt.wikipedia.org/wiki/Magna_Carta",
      capa: "https://static.historiadomundo.com.br/2023/01/carta-magna-inglesa-assinada-em-1215-a-primeira-constituicao-da-historia.jpg"
    },
    {
      data: "16/06/1963",
      titulo: "Valentina Tereshkova se torna a primeira mulher no espaço",
      descricao: "A cosmonauta soviética Valentina Tereshkova se torna a primeira mulher a viajar para o espaço.",
      link: "https://pt.wikipedia.org/wiki/Valentina_Tereshkova",
      capa: "https://s2.glbimg.com/I6SWQwpcuQAA0OSkjoF-IczpkeM=/e.glbimg.com/og/ed/f/original/2020/06/16/valentina_tereshkova.jpg"
    },
    {
      data: "17/06/1994",
      titulo: "Abertura da Copa do Mundo FIFA de 1994",
      descricao: "A Copa do Mundo FIFA de 1994 é aberta nos Estados Unidos, sendo uma das edições mais memoráveis do torneio.",
      link: "https://pt.wikipedia.org/wiki/Copa_do_Mundo_FIFA_de_1994",
      capa: "https://s2-memoriaglobo.glbimg.com/4vssIJcqc9o8HewqDzOWvTdioqU=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_ee6202d7f3f346a7a5d7affb807d8893/internal_photos/bs/2021/E/D/nSZvASRVqBQqTfAjGs9g/globo-61128zdzytwjqstt19t-original.jpg"
    },
    {
      data: "18/06/1928",
      titulo: "Amelia Earhart faz o primeiro voo transatlântico feminino",
      descricao: "Amelia Earhart se torna a primeira mulher a cruzar o Oceano Atlântico em um voo, marcando um grande feito na aviação.",
      link: "https://pt.wikipedia.org/wiki/Amelia_Earhart",
      capa: "https://aventurasnahistoria.com.br/media/uploads/hard_news/gettyimages-1161352.jpg"
    },
    {
      data: "19/06/1865",
      titulo: "Juneteenth – Abolição da escravidão nos EUA",
      descricao: "Juneteenth marca o fim oficial da escravidão nos Estados Unidos, com a libertação dos últimos escravos no Texas.",
      link: "https://pt.wikipedia.org/wiki/Juneteenth",
      capa: "https://aventurasnahistoria.com.br/media/_versions/escravidao/juneteenth_widelg.jpg"
    },
    {
      data: "20/06/1782",
      titulo: "A águia-careca é adotada como símbolo dos EUA",
      descricao: "O Congresso dos EUA adota a águia-careca como símbolo nacional, representando liberdade e independência.",
      link: "https://pt.wikipedia.org/wiki/%C3%81guia-careca",
      capa: "https://img.freepik.com/fotos-premium/nos-eua-a-aguia-careca-e-um-simbolo-de-liberdade-e-de-orgulho-da-nacao-muitas-vezes-retratada-ao-lado-das-estrelas-e-listras-da-bandeira-americana-que-celebra-a-independencia_984126-12143.jpg"
    },
    {
      data: "21/06/2004",
      titulo: "SpaceShipOne se torna a primeira nave espacial comercial tripulada",
      descricao: "O SpaceShipOne, uma nave privada, realiza o primeiro voo espacial tripulado, marcando o início da era comercial no espaço.",
      link: "https://pt.wikipedia.org/wiki/SpaceShipOne",
      capa: "https://upload.wikimedia.org/wikipedia/commons/3/32/Spaceship_one2.jpg"
    },
    {
      data: "22/06/1953 ",
      titulo: "Nasceu a cantora norte-americana Cyndi Lauper",
      descricao: "Cynthia Ann Stephanie Lauper Thornton, mais conhecida como Cyndi Lauper, nasceu no dia 22 de junho de 1953 na cidade Nova York, nos Estados Unidos.",
      link: "https://pt.wikipedia.org/wiki/Cyndi_Lauper",
      capa: "https://m.media-amazon.com/images/I/61-sxMh-UhL._AC_UF894,1000_QL80_.jpg"
    },
    {
      data: "23/06/2016",
      titulo: "Primeiro Dia Olímpico Mundial",
      descricao: "O Dia Olímpico Mundial é celebrado para promover os ideais dos Jogos Olímpicos e o espírito esportivo ao redor do mundo.",
      link: "https://pt.wikipedia.org/wiki/Dia_Ol%C3%ADmpico",
      capa: "https://www.cbclubes.org.br/sites/default/files/2022-06/img_DIA-OLIMPICO_SITE_220531.jpg"
    },
    {
      data: "24/06/1916",
      titulo: "Primeira mulher eleita ao Parlamento Britânico",
      descricao: "Nancy Astor se torna a primeira mulher eleita para o Parlamento Britânico, abrindo caminho para a igualdade de gênero na política.",
      link: "https://pt.wikipedia.org/wiki/Nancy_Astor",
      capa: "https://static.poder360.com.br/2022/07/elizabeth-truss-reino-unido-848x477.jpeg"
    },
    {
      data: "25/06/1982",
      titulo: "Lançamento do filme 'Blade Runner'",
      descricao: "O filme de ficção científica *Blade Runner* é lançado, tornando-se um dos maiores clássicos do cinema.",
      link: "https://pt.wikipedia.org/wiki/Blade_Runner",
      capa: "https://img.odcdn.com.br/wp-content/uploads/2021/09/Blade-Runner.jpg"
    },
    {
      data: "26/06/1945",
      titulo: "Assinatura da Carta das Nações Unidas",
      descricao: "Representantes de 50 países assinam a Carta das Nações Unidas, fundando oficialmente a ONU.",
      link: "https://pt.wikipedia.org/wiki/Carta_das_Na%C3%A7%C3%B5es_Unidas",
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Uncharter.pdf/page1-1200px-Uncharter.pdf.jpg"
    },
    {
      data: "27/06/1954",
      titulo: "Primeira usina nuclear do mundo é conectada à rede elétrica",
      descricao: "A primeira usina nuclear do mundo, em Obninsk, na Rússia, é conectada à rede elétrica, inaugurando a era da energia nuclear.",
      link: "https://pt.wikipedia.org/wiki/Usina_nuclear_de_Obninsk",
      capa: "https://clickpetroleoegas.com.br/blog/wp-content/uploads/2022/10/Qual-foi-a-primeira-usina-nuclear-do-mundo.jpg"
    },
    {
      data: "28/06/1914",
      titulo: "Assinatura do Tratado de Versalhes",
      descricao: "O Tratado de Versalhes é assinado, encerrando oficialmente a Primeira Guerra Mundial.",
      link: "https://pt.wikipedia.org/wiki/Tratado_de_Versalhes",
      capa: "https://static.historiadomundo.com.br/2024/06/a-pintura-historica-de-william-orpen-retrata-a-assinatura-do-tratado-de-versalhes-no-salao-dos-espelhos-em-1919.jpg"
    },
    {
      data: "29/06/2007",
      titulo: "Lançamento do primeiro iPhone",
      descricao: "O primeiro iPhone é lançado pela Apple, revolucionando o mundo da tecnologia e dos smartphones.",
      link: "https://pt.wikipedia.org/wiki/IPhone",
      capa: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/01/steve.jpg?w=1200&h=675&crop=1"
    },
    {
      data: "30/06/1908",
      titulo: "Evento de Tunguska",
      descricao: "Uma explosão misteriosa na região de Tunguska, na Sibéria, destrói cerca de 2.000 quilômetros quadrados de floresta, provavelmente causada pela explosão de um meteoro.",
      link: "https://pt.wikipedia.org/wiki/Evento_de_Tunguska",
      capa: "https://mega.ibxk.com.br/2022/11/16/16100242855281.jpg"
    },
    ////////// fatos de julho ///////////
    {
      data: "01/07/1994",
      titulo: "PLano Real",
      descricao: "Um novo plano econômico mudou a moeda brasileira do cruzeiro real para o real. A proposta era de que o real mantivesse paridade com o dólar",
      link: "https://www.camara.leg.br/tv/437249-lancado-ha-20-anos-plano-real-acabou-com-a-hiperinflaca",
      capa: "https://www.souzaaranhamachado.com.br/wp-content/uploads/2020/08/Plano-Real-1.jpg"
    },
    {
      data: "02/07/1964",
      titulo: "Aprovação da Lei dos Direitos Civis nos EUA",
      descricao: "A Lei dos Direitos Civis de 1964 é aprovada, proibindo a discriminação com base em raça, cor, religião, sexo ou origem nacional nos Estados Unidos.",
      link: "https://pt.wikipedia.org/wiki/Lei_dos_Direitos_Civis_de_1964",
      capa: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Lyndon_Johnson_signing_Civil_Rights_Act%2C_July_2%2C_1964.jpg"
    },
    {
      data: "03/07/1971",
      titulo: "Primeira mulher a assumir a presidência do Chile",
      descricao: "Isabel Allende, primeira mulher eleita para presidir o Senado chileno, assume a posição, sendo uma pioneira na política.",
      link: "https://pt.wikipedia.org/wiki/Isabel_Allende_Bussi",
      capa: "https://upload.wikimedia.org/wikipedia/commons/0/02/Portrait_Michelle_Bachelet.jpg"
    },
    {
      data: "04/07/1776",
      titulo: "Independência dos Estados Unidos",
      descricao: "A Declaração de Independência dos Estados Unidos é assinada, marcando a separação oficial das Treze Colônias do domínio britânico.",
      link: "https://pt.wikipedia.org/wiki/Declara%C3%A7%C3%A3o_de_Independ%C3%AAncia_dos_Estados_Unidos",
      capa: "https://static.escolakids.uol.com.br/conteudo_legenda/776b4432c4dd457d95a9ea1d1bb4e6b7.jpg"
    },
    {
      data: "05/07/1946",
      titulo: "Lançamento do biquíni",
      descricao: "O engenheiro francês Louis Réard apresenta o biquíni, uma inovação no mundo da moda que revolucionou as roupas de banho.",
      link: "https://pt.wikipedia.org/wiki/Biqu%C3%ADni",
      capa: "https://cdn.shopify.com/s/files/1/0101/7289/1236/files/Louis_Reard_First_Bikini_480x480.jpg?v=1644415881"
    },
    {
      data: "06/07/1957",
      titulo: "Primeiro encontro de John Lennon e Paul McCartney",
      descricao: "John Lennon e Paul McCartney se encontram pela primeira vez em Liverpool, um momento que marcaria o início da banda The Beatles.",
      link: "https://pt.wikipedia.org/wiki/John_Lennon",
      capa: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4kMVw9BGRjNWZUT7ZHazbhmvKYN8mifVSHPlRnaBqrrcAEN3aJqJgZL8gzPdEr-rB3cxq75LNl33ffrKUTNPysWSBoUIEYZ_oiQuoZAYeB5Z8sNas2PVMrSdnTgVQSbmpy_Ai1GE63JY/s1600/tumblr_nqh915TW451thhbf7o2_500.jpg"
    },
      {
        data: "07/07/1965",
        titulo: "Neil Armstrong se torna o primeiro civil a comandar uma missão espacial",
        descricao: "O astronauta norte-americano Neil Armstrong comandou a missão Gemini 8, tornando-se o primeiro civil a pilotar uma nave espacial. Essa missão foi um marco importante na corrida espacial.",
        link: "https://www.nasa.gov/mission_pages/gemini/gemini-8.html",
        capa: "https://s5.static.brasilescola.uol.com.br/be/conteudo/images/2-neil-armstrong.jpg"
    },
    {
      data: "08/07/2011",
      titulo: "Último lançamento de um ônibus espacial da NASA",
      descricao: "O ônibus espacial Atlantis faz seu último voo, marcando o fim do programa de ônibus espaciais da NASA.",
      link: "https://pt.wikipedia.org/wiki/Atlantis_%28%C3%B4nibus_espacial%29",
      capa: "https://media.gazetadopovo.com.br/2011/06/nasa_atlantis-1.0.76032274-gpLarge.jpg"
    },
    {
      data: "09/07/2011",
      titulo: "Independência do Sudão do Sul",
      descricao: "O Sudão do Sul declara sua independência, tornando-se o mais novo país do mundo.",
      link: "https://pt.wikipedia.org/wiki/Independ%C3%AAncia_do_Sud%C3%A3o_do_Sul",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0liBTX0wZ6hr3fEqx4N3M-ddw0d7AGvxY4w&s"
    },
    {
      data: "10/07/1962",
      titulo: "Lançamento do Telstar, o primeiro satélite de comunicações",
      descricao: "O Telstar, o primeiro satélite de comunicações, é lançado, possibilitando transmissões de TV e telecomunicações ao redor do mundo.",
      link: "https://pt.wikipedia.org/wiki/Telstar",
      capa: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2022/07/11/1126988959-d4506d12aeb7dfd0eb66fbeb4fb173a4.jpg"
    },
    {
      data: "11/07/1960",
      titulo: "Lançamento do romance *To Kill a Mockingbird*",
      descricao: "Harper Lee publica seu romance *To Kill a Mockingbird*, uma obra que se tornaria um clássico da literatura americana.",
      link: "https://pt.wikipedia.org/wiki/To_Kill_a_Mockingbird",
      capa: "https://cdn.kobo.com/book-images/4e1af857-e0e8-45fa-8922-e4bff584beca/1200/1200/False/to-kill-a-mockingbird-4.jpg"
    },
    {
      data: "12/07/1962",
      titulo: "Primeiro show dos Rolling Stones",
      descricao: "A banda britânica The Rolling Stones faz seu primeiro show oficial no Marquee Club, em Londres.",
      link: "https://pt.wikipedia.org/wiki/The_Rolling_Stones",
      capa: "https://rollingstone.com.br/media/_versions/rolling-stones-gimme-shelter-gettyimages-michaelochs_widelg.jpg"
    },
    {
      data: "13/07/1985",
      titulo: "Concerto Live Aid",
      descricao: "O Live Aid, um dos maiores concertos beneficentes da história, é realizado simultaneamente em Londres e Filadélfia para arrecadar fundos para combater a fome na Etiópia.",
      link: "https://pt.wikipedia.org/wiki/Live_Aid",
      capa: "https://dia.portalodia.com/media/editor/live-aid-19851594654495.jpg"
    },
    {
      data: "14/07/1789",
      titulo: "Queda da Bastilha",
      descricao: "A queda da Bastilha marca o início simbólico da Revolução Francesa e é celebrada como o Dia da Bastilha.",
      link: "https://pt.wikipedia.org/wiki/Queda_da_Bastilha",
      capa: "https://static.todamateria.com.br/upload/ba/st/bastilha-cke.jpg"
    },
    {
      data: "15/07/2006",
      titulo: "Twitter é lançado publicamente",
      descricao: "O Twitter, uma plataforma de mídia social, é lançado ao público, transformando a maneira como as pessoas se comunicam online.",
      link: "https://pt.wikipedia.org/wiki/Twitter",
      capa: "https://portal.euqueroinvestir.com/wp-content/uploads/2024/07/twitter-destaque.jpg"
    },
    {
      data: "16/07/1969",
      titulo: "Lançamento da Apollo 11",
      descricao: "A missão Apollo 11 é lançada pela NASA, levando os primeiros humanos à Lua.",
      link: "https://pt.wikipedia.org/wiki/Apollo_11",
      capa: "https://s2.glbimg.com/hAGoO-8YNcaJ19yrUwcp-C-7gXc=/e.glbimg.com/og/ed/f/original/2019/07/16/4.jpg"
    },
    {
      data: "17/07/1955",
      titulo: "Abertura da Disneylândia",
      descricao: "O primeiro parque temático da Disney, Disneylândia, abre suas portas ao público em Anaheim, Califórnia.",
      link: "https://pt.wikipedia.org/wiki/Disneyland",
      capa: "https://dicasdacalifornia.com.br/wp-content/uploads/sites/18/2015/09/disneyland-park-california.jpg"
    },
    {
      data: "18/07/1918",
      titulo: "Nascimento de Nelson Mandela",
      descricao: "Nasce Nelson Mandela, líder sul-africano e símbolo da luta contra o apartheid.",
      link: "https://pt.wikipedia.org/wiki/Nelson_Mandela",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JPr2xhFcrtgK7kqeKGl1qMxuhgp_gSPIUw&s"
    },
    {
      data: "19/07/64 d.C",
      titulo: "Grande incêndio de Roma",
      descricao: "O grande incêndio de Roma ocorreu nos dias 18 e 19 de julho de 64 d.C. Esse acontecimento foi uma das maiores catástrofes da antiguidade.",
      link: "https://brasilescola.uol.com.br/historiag/grande-incendio-roma.htm",
      capa: "https://ensinarhistoria.com.br/s21/wp-content/uploads/2019/07/Capa_Incendio-de-Roma.png"
    },
    {
      data: "20/07/1969",
      titulo: "Homem pisa na Lua",
      descricao: "Neil Armstrong se torna o primeiro homem a pisar na Lua, dizendo a famosa frase: 'Um pequeno passo para o homem, um grande salto para a humanidade.'",
      link: "https://pt.wikipedia.org/wiki/Apollo_11",
      capa: "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2021/07/1024px-Buzz_salutes_the_U.S._Flag.jpg?quality=70&strip=info&w=1024"
    },
    {
      data: "21/07/1983",
      titulo: "Recorde de temperatura mais baixa na Terra",
      descricao: "A temperatura mais baixa já registrada na Terra é registrada na Antártica: -89,2°C.",
      link: "https://pt.wikipedia.org/wiki/Esta%C3%A7%C3%A3o_Vostok",
      capa: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Wostok-Station_core32.jpg"
    },
    {
      data: "22/07/1994",
      titulo: "Shoemaker-Levy 9 colide com Júpiter",
      descricao: "Os fragmentos do cometa Shoemaker-Levy 9 colidem com Júpiter, proporcionando aos cientistas uma visão rara de um evento cósmico.",
      link: "https://pt.wikipedia.org/wiki/Cometa_Shoemaker-Levy_9",
      capa: "https://img.odcdn.com.br/wp-content/uploads/2021/07/Local-do-impacto-de-um-dos-fragmentos-do-Cometa-Shoemaker-Levy-9-em-Jupiter.jpg"
    },
    {
      data: "23/07/2010",
      titulo: "Primeira reunião do BRICS",
      descricao: "Os países do BRICS (Brasil, Rússia, Índia, China e África do Sul) realizam sua primeira reunião oficial.",
      link: "https://pt.wikipedia.org/wiki/BRICS",
      capa: "https://acervo.oglobo.globo.com/incoming/13255501-a39-de7/materia/2009-282838783-20090616115102096afp.jpg_20090616.jpg"
    },
    {
      data: "24/07/1911",
      titulo: "Descoberta de Machu Picchu",
      descricao: "O explorador americano Hiram Bingham descobre a cidade inca de Machu Picchu, no Peru.",
      link: "https://pt.wikipedia.org/wiki/Machu_Picchu",
      capa: "https://mega.ibxk.com.br/2018/11/19/machu-picchu-19171151659330.jpghttps://mega.ibxk.com.br/2018/11/19/machu-picchu-19171151659330.jpg"
    },
    {
      data: "25/07/1978",
      titulo: "Nascimento do primeiro bebê de fertilização in vitro",
      descricao: "Louise Brown, o primeiro bebê concebido por fertilização in vitro, nasce no Reino Unido.",
      link: "https://pt.wikipedia.org/wiki/Louise_Brown",
      capa: "https://operamundi.uol.com.br/wp-content/uploads/2023/10/915c3350-0911-474f-ae4d-017c84e2c024.png"
    },
    {
      data: "26/07/1953",
      titulo: "Início da Revolução Cubana",
      descricao: "Fidel Castro lidera um ataque ao quartel Moncada, dando início à Revolução Cubana.",
      link: "https://pt.wikipedia.org/wiki/Revolu%C3%A7%C3%A3o_Cubana",
      capa: "https://www.politize.com.br/wp-content/uploads/2024/07/fidel-castro-che-guevara-revolucao-cubana.jpg"
    },
    {
      data: "27/07/1990",
      titulo: "Início do projeto de sequenciamento do genoma humano",
      descricao: "O Projeto Genoma Humano, que visa mapear todos os genes humanos, é oficialmente lançado.",
      link: "https://pt.wikipedia.org/wiki/Projeto_Genoma_Humano",
      capa: "https://i0.wp.com/blog.mendelics.com.br/wp-content/uploads/2020/11/Ilustra-blog-30-anos.png?fit=1920%2C1080&ssl=1"
    },
    {
      data: "28/07/1914",
      titulo: "Início da Primeira Guerra Mundial",
      descricao: "A Primeira Guerra Mundial começa com a declaração de guerra da Áustria-Hungria contra a Sérvia.",
      link: "https://pt.wikipedia.org/wiki/Primeira_Guerra_Mundial",
      capa: "https://upload.wikimedia.org/wikipedia/commons/2/20/Vojska_Ada_Ciganlija.jpg"
    },
    {
      data: "29/07/1958",
      titulo: "Criação da NASA",
      descricao: "O Congresso dos Estados Unidos cria a NASA, a agência espacial responsável pela exploração do espaço.",
      link: "https://pt.wikipedia.org/wiki/NASA",
      capa: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-nasa-responsavel-pelo-desenvolvimento-novas-tecnologias-por-exploracoes-espaciais-57ea7f6742085.jpg"
    },
    {
      data: "30/07/1932",
      titulo: "Inauguração dos Jogos Olímpicos de Los Angeles",
      descricao: "Os Jogos Olímpicos de Verão de 1932 são inaugurados em Los Angeles, Califórnia.",
      link: "https://pt.wikipedia.org/wiki/Jogos_Ol%C3%ADmpicos_de_Ver%C3%A3o_de_1932",
      capa: "https://s01.video.glbimg.com/640x360/4090204.jpg"
    },
    {
      data: "31/07/1971",
      titulo: "Primeiro passeio de rover na Lua",
      descricao: "https://upload.wikimedia.org/wikipedia/commons/2/20/Vojska_Ada_Ciganlija.jpg",
      link: "https://pt.wikipedia.org/wiki/Apollo_15",
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Apollo_15_rover.jpg/250px-Apollo_15_rover.jpg"
    },

    //////////// fatos agosto /////////////////
    {
      data: "01/08/1834",
      titulo: "Abolição da escravidão no Império Britânico",
      descricao: "O Parlamento Britânico aprova a Abolição da Escravidão, libertando mais de 800.000 escravizados em suas colônias.",
      link: "https://pt.wikipedia.org/wiki/Slavery_Abolition_Act",
      capa: "https://ensinarhistoria.com.br/s21/wp-content/uploads/2019/04/Trafico_mercado-de-escravos-no-Rio-1826-Copia.jpg"
    },
    {
      data: "02/08/1932",
      titulo: "Carl David Anderson descobre o pósitron",
      descricao: "O físico Carl Anderson descobre o pósitron, uma partícula subatômica positiva, contribuindo para o avanço da física moderna.",
      link: "https://pt.wikipedia.org/wiki/P%C3%B3sitrons",
      capa: "https://upload.wikimedia.org/wikipedia/commons/4/45/Carl_David_Anderson.jpg"
    },
    {
      data: "03/08/1492",
      titulo: "Início da expedição de Cristóvão Colombo",
      descricao: "Cristóvão Colombo parte de Palos de la Frontera em sua primeira expedição, que resultaria na chegada à América.",
      link: "https://pt.wikipedia.org/wiki/Crist%C3%B3v%C3%A3o_Colombo",
      capa: "https://s3.static.brasilescola.uol.com.br/be/2020/05/embarque-espanha.jpg"
    },
    {
      data: "04/08/1903",
      titulo: "Primeira travessia do Canal da Mancha a nado",
      descricao: "O nadador Thomas Burgess realiza a primeira travessia bem-sucedida do Canal da Mancha a nado.",
      link: "https://pt.wikipedia.org/wiki/Canal_da_Mancha",
      capa: "https://s2-ge.glbimg.com/Z2MwucM4OtHucc999yLi5DX3YD8=/0x0:933x573/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2018/d/K/iKM0V1QmuBsG3I2NBROw/abilio01.jpg"
    },
    {
      data: "05/08/1962",
      titulo: "Dia Nacional da Saúde no Brasil",
      descricao: " A data, que tem como objetivo conscientizar as pessoas sobre a importância da educação sanitária e a ter um estilo de vida mais saudável, foi escolhida em homenagem ao médico e sanitarista Oswaldo Gonçalves Cruz, que nasceu em 5 de agosto de 1872",
      link: "https://pt.wikipedia.org/wiki/Nelson_Mandela",
      capa: "https://www.hsjrb.com.br/noticia/05-de-agosto-dia-nacional-da-saude/imagem/f70dfc34d94f198b78c915f3f29cc321.jpg"
    },
    {
      data: "06/08/1991",
      titulo: "Lançamento da World Wide Web",
      descricao: "A World Wide Web é lançada publicamente por Tim Berners-Lee, revolucionando a comunicação e o acesso à informação.",
      link: "https://pt.wikipedia.org/wiki/World_Wide_Web",
      capa: "https://www.techlise.com.br/blog/wp-content/uploads/2020/09/quem-e-tim-berners-lee.png"
    },
    {
      data: "07/08/1789",
      titulo: "Estabelecimento do Departamento de Guerra dos EUA",
      descricao: "O Congresso dos Estados Unidos cria o Departamento de Guerra, precursor do Departamento de Defesa, para garantir a segurança nacional.",
      link: "https://pt.wikipedia.org/wiki/Departamento_de_Guerra_dos_Estados_Unidos",
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Seal_of_the_United_States_Department_of_Defense.svg/800px-Seal_of_the_United_States_Department_of_Defense.svg.png"
    },
    {
      data: "08/08/1967",
      titulo: "Fundação da ASEAN",
      descricao: "A Associação de Nações do Sudeste Asiático (ASEAN) é criada para promover a cooperação econômica e a paz na região.",
      link: "https://pt.wikipedia.org/wiki/Associa%C3%A7%C3%A3o_de_Na%C3%A7%C3%B5es_do_Sudeste_Asi%C3%A1tico",
      capa: "https://static.todamateria.com.br/upload/56/3b/563bcc213cec2-asean-bloco-economico.jpg"
    },
    {
      data: "09/08/1974",
      titulo: "Primeira mulher a comandar uma missão da NASA",
      descricao: "Judy Sullivan se torna a primeira mulher a atuar como controladora de voo em uma missão da NASA.",
      link: "https://www.nasa.gov",
      capa: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/39374_A6789472D5584B14-1.jpg?w=1024"
    },
    {
      data: "10/08/1846",
      titulo: "Criação do Instituto Smithsonian",
      descricao: "O Instituto Smithsonian é fundado, tornando-se o maior complexo de museus e pesquisa dos Estados Unidos.",
      link: "https://pt.wikipedia.org/wiki/Instituto_Smithsonian",
      capa: "https://washington.org/sites/default/files/smithsonian-castle-during-cherry-blossom-season_ddc-photo.jpg"
    },
    {
      data: "11/08/1999",
      titulo: "Eclipse solar total visível em grande parte da Europa",
      descricao: "Um eclipse solar total é visível em grande parte da Europa e da Ásia, proporcionando um espetáculo astronômico.",
      link: "https://pt.wikipedia.org/wiki/Eclipse_solar_de_11_de_agosto_de_1999",
      capa: "https://reportermaceio.com.br/wp-content/uploads/2024/04/gettyimages-478494086jpg.webp.webp"
    },
    {
      data: "12/08/1981",
      titulo: "Lançamento do IBM PC",
      descricao: "A IBM lança seu primeiro computador pessoal, o IBM PC, que revolucionaria o mercado de tecnologia.",
      link: "https://pt.wikipedia.org/wiki/IBM_PC",
      capa: "https://img.odcdn.com.br/cdn-cgi/image/width=1280,height=720,fit=cover/wp-content/uploads/2021/08/IBM_PC_40_Anos_Abre.jpg"
    },
    {
      data: "13/08/1961",
      titulo: "Primeira transmissão de TV em cores no Reino Unido",
      descricao: "A primeira transmissão em cores da BBC ocorre, marcando um avanço tecnológico nas comunicações.",
      link: "https://pt.wikipedia.org/wiki/BBC",
      capa: "https://64.media.tumblr.com/6141cad419e6cd86b0d73d398002f928/28cc6f16edbe1514-bb/s1280x1920/a175fdaa377a509178c2d896ccc07101c5f48ef4.jpg"
    },
    {
      data: "14/08/1945",
      titulo: "Fim da Segunda Guerra Mundial com a rendição do Japão",
      descricao: "O Japão se rende oficialmente, marcando o fim da Segunda Guerra Mundial e o início de um período de paz.",
      link: "https://pt.wikipedia.org/wiki/V-J_Day",
      capa: "https://memorialdademocracia.com.br/publico/image/17000"
    },
    {
      data: "15/08/1969",
      titulo: "Início do Festival de Woodstock",
      descricao: "O Festival de Woodstock, um marco na história da música e da contracultura, começa em Nova York.",
      link: "https://pt.wikipedia.org/wiki/Festival_de_Woodstock",
      capa: "https://cdn.sanity.io/images/yvyhc5zz/production/d8d6e0ca7a55396c5d646b1c245fc191607b0007-1920x1080.jpg?w=1888&fit=crop"
    },
    {
      data: "16/08/1960",
      titulo: "Independência do Chipre",
      descricao: "O Chipre conquista sua independência do Reino Unido, tornando-se uma nação soberana.",
      link: "https://pt.wikipedia.org/wiki/Independ%C3%AAncia_do_Chipre",
      capa: "https://operamundi.uol.com.br/wp-content/uploads/2023/10/Chipre(2).jpg"
    },
    {
      data: "17/08/1945",
      titulo: "Proclamação da independência da Indonésia",
      descricao: "A Indonésia declara sua independência da Holanda, tornando-se uma nação soberana.",
      link: "https://pt.wikipedia.org/wiki/Independ%C3%AAncia_da_Indon%C3%A9sia",
      capa: "https://img.freepik.com/fotos-premium/dia-da-independencia-da-indonesia-declaracao-de-independencia-da-indonesia-em-17-de-agosto-de-1945-soekarno-e-mohammad-hatta-fizeram-a-proclamacao-da-bandeira-da-independencia-indonesia-generative-ai_887181-4533.jpg"
    },
    {
      data: "18/08/1920",
      titulo: "19ª Emenda dos EUA é ratificada",
      descricao: "A 19ª Emenda à Constituição dos EUA é ratificada, garantindo às mulheres o direito de voto.",
      link: "https://pt.wikipedia.org/wiki/19.%C2%AA_Emenda_%C3%A0_Constitui%C3%A7%C3%A3o_dos_Estados_Unidos",
      capa: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/12153_CACC8309B80814B5.jpg?w=1024"
    },
    {
      data: "19/08/1934",
      titulo: "Inauguração do Museu do Prado",
      descricao: "O Museu do Prado em Madri, um dos mais importantes museus de arte do mundo, é inaugurado.",
      link: "https://pt.wikipedia.org/wiki/Museu_do_Prado",
      capa: "https://simonde.com.br/wp-content/uploads/2022/10/museu-museo-del-prado-madri-madrid-espanha-europa-como-visitar-melhores-museus-1200-1.jpg"
    },
    {
      data: "20/08/1975",
      titulo: "Lançamento da sonda Viking 1",
      descricao: "A NASA lança a sonda Viking 1 para Marte, que enviaria as primeiras imagens detalhadas da superfície do planeta.",
      link: "https://pt.wikipedia.org/wiki/Viking_1",
      capa: "https://conteudo.ebc.com.br/portal/img/mars/2003.jpg"
    },
    {
      data: "21/08/1911",
      titulo: "Roubo da Mona Lisa",
      descricao: "A pintura *Mona Lisa* de Leonardo da Vinci é roubada do Museu do Louvre, sendo recuperada dois anos depois.",
      link: "https://pt.wikipedia.org/wiki/Mona_Lisa",
      capa: "https://aventurasnahistoria.com.br/media/uploads/monalisa_capa.jpeg"
    },
    {
      data: "22/08/1965 ",
      titulo: "Dia do Folclore",
      descricao: "22 de agosto é o dia do Folclore no Brasil. A data foi instituída em 1965 e tem por objetivo relembrar e valorizar aspectos da cultura brasileira. É o caso das lendas como a do Saci, da Mula-sem-cabeça, do Caipora e da cidade misteriosa de Jericoacoara. Câmara Cascudo, pesquisador falecido em 1986, foi uma das figuras mais importantes na preservação do folclore nacional.",
      link: "https://www12.senado.leg.br/radio/1/noticia/2022/08/18/22-de-agosto-e-o-dia-do-folclore",
      capa: "https://cdn.progresso.com.br/upload/dn_arquivo/2022/08/anyconvcom-design-sem-nome-14.jpg"
    },
    {
      data: "23/08/1966",
      titulo: "Primeira foto da Terra tirada da Lua",
      descricao: "A missão Lunar Orbiter 1 da NASA tira a primeira foto da Terra vista da Lua.",
      link: "https://pt.wikipedia.org/wiki/Lunar_Orbiter_1",
      capa: "https://conteudo.imguol.com.br/c/noticias/91/2019/01/24/iconica-foto-tirada-pelo-astronauta-william-anders-da-apollo-8-mostra-a-imagem-da-terra-vista-do-superficie-da-lua-1548354444152_v2_900x506.jpg"
    },
    {
      data: "24/08/1891",
      titulo: "Inauguração da primeira linha de bondes elétricos",
      descricao: "A primeira linha de bondes elétricos é inaugurada em Londres, revolucionando o transporte urbano.",
      link: "https://pt.wikipedia.org/wiki/El%C3%A9trico",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxoJoO4XrydEOxELzFRVgRIXhoM1YxtpQozQ&s"
    },
    {
      data: "25/08/1835",
      titulo: "O Grande Engodo da Lua",
      descricao: "O jornal *The Sun* de Nova York publica uma série de artigos satíricos alegando a descoberta de vida na Lua, conhecido como 'O Grande Engano da Lua'.",
      link: "https://pt.wikipedia.org/wiki/Grande_Engano_da_Lua",
      capa: "https://ichef.bbci.co.uk/news/1024/branded_portuguese/118A3/production/_127534817_newproject-5.jpghttps://ichef.bbci.co.uk/news/1024/branded_portuguese/118A3/production/_127534817_newproject-5.jpg"
    },
    {
      data: "26/08/1920",
      titulo: "Mulheres conquistam o direito ao voto nos EUA",
      descricao: "A 19ª Emenda dos Estados Unidos, que garante o direito de voto para as mulheres, é ratificada.",
      link: "https://pt.wikipedia.org/wiki/19.%C2%AA_Emenda_%C3%A0_Constitui%C3%A7%C3%A3o_dos_Estados_Unidos",
      capa: "https://www.acheiusa.com/wp-content/uploads/2020/08/vot3e-for-women.jpg"
    },
    {
      data: "27/08/1955",
      titulo: "Primeira transmissão em cores da televisão britânica",
      descricao: "A televisão britânica realiza sua primeira transmissão em cores, marcando um avanço tecnológico significativo.",
      link: "https://pt.wikipedia.org/wiki/Televis%C3%A3o_a_cores",
      capa: "https://ichef.bbci.co.uk/news/1024/branded_portuguese/384C/production/_92221441_001230780-1.jpg"
    },
    {
      data: "28/08/1963",
      titulo: "Discurso 'Eu Tenho um Sonho' de Martin Luther King Jr.",
      descricao: "Martin Luther King Jr. faz seu famoso discurso 'Eu Tenho um Sonho' durante a Marcha sobre Washington, um marco na luta pelos direitos civis.",
      link: "https://pt.wikipedia.org/wiki/Eu_Tenho_um_Sonho",
      capa: "https://cdn.brasildefato.com.br/media/33d32b1f8def1f7263965dd4316c0fdd.jpg"
    },
    {
      data: "29/08/2005",
      titulo: "Furacão Katrina atinge os EUA",
      descricao: "O Furacão Katrina atinge a Costa do Golfo dos Estados Unidos, gerando uma onda de solidariedade e esforços globais de assistência.",
      link: "https://pt.wikipedia.org/wiki/Furac%C3%A3o_Katrina",
      capa: "https://classic.exame.com/wp-content/uploads/2016/10/size_960_16_9_katrina1.jpg?quality=70&strip=info&w=960"
    },
    {
      data: "30/08/1999",
      titulo: "Timor-Leste vota pela independência da Indonésia",
      descricao: "O povo de Timor-Leste vota pela independência da Indonésia em um referendo histórico, abrindo caminho para a criação de um novo país.",
      link: "https://pt.wikipedia.org/wiki/Timor-Leste",
      capa: "https://naraiz.wordpress.com/wp-content/uploads/2012/08/clip_image002_thumb.jpg?w=640"
    },
    {
      data: "31/08/1997",
      titulo: "Lançamento do CD de Elton John 'Candle in the Wind'",
      descricao: "Elton John lança a versão dedicada à princesa Diana de sua música 'Candle in the Wind', que se torna um dos singles mais vendidos de todos os tempos.",
      link: "https://pt.wikipedia.org/wiki/Candle_in_the_Wind",
      capa: "https://m.media-amazon.com/images/I/71sIoUq-WFL._UF1000,1000_QL80_.jpg"
    },

    /////////// fatos de setembro /////////////////
    {
      data: "01/09/1969",
      titulo: "Estreia Jornal Nacional",
      descricao: "Primeira edição do jornalístico, que hoje é comandado por William Bonner e Renata Vasconcellos, foi ao ar em 1° de setembro de 1969 com Hilton Gomes e Cid Moreira na bancada.",
      link: "https://oglobo.globo.com/cultura/noticia/2024/09/01/jornal-nacional-completa-55-anos-no-ar-relembre-apresentadores-do-programa.ghtml",
      capa: "https://s2-oglobo.glbimg.com/uGTHurlXdv1utNQfupst5Ow3nd4=/0x60:2048x1457/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/k/P/asMXfUTbyqtvJazvLing/eleicoes-entrevista-bancada-jn-2018-mg-rv.jpg"
    },
    {
      data: "02/09/1945",
      titulo: "Assinatura da rendição do Japão",
      descricao: "O Japão assina a rendição oficial a bordo do USS Missouri, marcando o fim da Segunda Guerra Mundial e o início de um período de paz.",
      link: "https://pt.wikipedia.org/wiki/Rendição_do_Japão",
      capa: "https://ogimg.infoglobo.com.br/in/24142426-d4b-822/FT1086A/20150831-221030.jpg"
    },
    {
      data: "03/09/2003 ",
      titulo: "Gilberto Gil recebe o Grammy",
      descricao: "Gilberto Gil recebe o Grammy Latino prêmio de Personalidade do Ano, em Miami (EUA).",
      link: "https://www.correiodobrasil.com.br/gilberto-gil-recebe-premio-personalidade-do-ano-de-2003-em-miami/",
      capa: "https://lh3.googleusercontent.com/ci/AL18g_Syqn_FjPqX_xMr0_H75WJISN5FtPNHiZeF-Lcli-MVSG21AwP3JBQnWV79TbiMfgUDdl-QMA=s1200"
    },
    {
      data: "04/09/1998",
      titulo: "Fundação do Google",
      descricao: "Larry Page e Sergey Brin fundam o Google, que se tornaria o maior motor de busca da internet e uma das empresas mais influentes do mundo.",
      link: "https://pt.wikipedia.org/wiki/Google",
      capa: "https://s2-g1.glbimg.com/VPRQe1UZ2CjjIX_8mH74ME8eDtA=/0x0:660x303/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/J/e/veuH51QRGi0Ih67LA9cQ/google-bbc.jpg"
    },
    {
      data: "05/09/1977",
      titulo: "Lançamento da Voyager 1",
      descricao: "A NASA lança a Voyager 1, que se tornaria a primeira sonda a sair do Sistema Solar e enviar dados interplanetários.",
      link: "https://pt.wikipedia.org/wiki/Voyager_1",
      capa: "https://www.rbsdirect.com.br/filestore/4/6/0/4/5_f6502a8716ef34b/54064_fe7cf64e6bb3e94.jpg?w=700"
    },
    {
      data: "06/09/1991",
      titulo: "Independência da Rússia",
      descricao: "A Rússia declara formalmente sua independência da União Soviética, marcando o fim do domínio comunista e o início de uma nova era.",
      link: "https://pt.wikipedia.org/wiki/Independ%C3%AAncia_da_R%C3%BAssia",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBcI0zTkUEYIO0QxLpto8aPVg8-TP2elb97g&s"
    },
    {
      data: "07/09/1822",
      titulo: "Independência do Brasil",
      descricao: "Dom Pedro I proclama a independência do Brasil do Reino Unido de Portugal, Brasil e Algarves, marcando o nascimento de uma nação soberana.",
      link: "https://pt.wikipedia.org/wiki/Independ%C3%AAncia_do_Brasil",
      capa: "https://media.gazetadopovo.com.br/2022/08/28201314/iom.jpg"
    },
    {
      data: "08/09/1966",
      titulo: "Estreia de Star Trek na TV",
      descricao: "A série de televisão *Star Trek* estreia nos Estados Unidos, tornando-se uma das mais influentes e cultuadas franquias de ficção científica da história.",
      link: "https://pt.wikipedia.org/wiki/Star_Trek:_S%C3%A9rie_Cl%C3%A1ssica",
      capa: "https://efemeridesdoefemello.com/wp-content/uploads/2016/09/8set16.jpg?w=768&h=432"
    },
    {
      data: "09/09/1956",
      titulo: "Elvis Presley faz sua estreia no *The Ed Sullivan Show*",
      descricao: "Elvis Presley se apresenta no *The Ed Sullivan Show*, marcando um momento crucial em sua carreira e na história da música.",
      link: "https://pt.wikipedia.org/wiki/Elvis_Presley",
      capa: "https://www.udiscovermusic.com/wp-content/uploads/2023/09/elvis-presley-ed-sullivan-1000x600.jpg"
    },
    {
      data: "10/09/2008",
      titulo: "Grande Colisor de Hádrons é ativado",
      descricao: "O Grande Colisor de Hádrons (LHC), o maior acelerador de partículas do mundo, é ativado pela primeira vez no CERN.",
      link: "https://pt.wikipedia.org/wiki/Grande_Colisor_de_H%C3%A1drons",
      capa: "https://i.em.com.br/lN5fgvANdMDu09zZGTK4REnKvW4=/675x/smart/imgsapp.em.com.br/app/noticia_127983242361/2015/04/07/635202/20150407154437292073u.jpg"
    },
    {
      data: "11/09/2001",
      titulo: "Ataque às Torres Gêmeas",
      descricao: "Terroristas da Al-Qaeda lançaram dois aviões contra os edifícios do World Trade Center – as chamadas Torres Gêmeas em Nova York. Três mil pessoas morreram e mais de 6 mil ficaram feridas com os desabamentos..",
      link: "https://www.gazetadopovo.com.br/mundo/11-de-setembro-completa-19-anos/#:~:text=O%20que%20aconteceu%20em%2011,ficaram%20feridas%20com%20os%20desabamentos.",
      capa: "https://midias.correiobraziliense.com.br/_midias/jpg/2023/09/10/1200x801/1_wtc_11_setembro_atentado_terrorista_ny33_jpg-29400551.jpg?20230911111514?20230911111514"
    },
    {
      data: "12/09/1992",
      titulo: "Mae Jemison se torna a primeira mulher afro-americana no espaço",
      descricao: "A astronauta Mae Jemison embarca na missão STS-47, tornando-se a primeira mulher afro-americana a viajar para o espaço.",
      link: "https://pt.wikipedia.org/wiki/Mae_Jemison",
      capa: "https://s2.glbimg.com/RYpd_eYm5m3Hq6ZRCt1VZlH5kIg=/512x320/smart/e.glbimg.com/og/ed/f/original/2018/03/08/dr._mae_c._jemison_first_african-american_woman_in_space_-_gpn-2004-00020.jpg"
    },
    {
      data: "13/09/1985",
      titulo: "Super Mario Bros. é lançado",
      descricao: "*Super Mario Bros.*, um dos jogos mais influentes de todos os tempos, é lançado pela Nintendo no Japão.",
      link: "https://pt.wikipedia.org/wiki/Super_Mario_Bros.",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNi1MEFuCIGGNpkFHSgOnoAQ-X5U7fnlAzg&s"
    },
    {
      data: "14/09/1812",
      titulo: "Napoleão entra em Moscou",
      descricao: "Embora controverso, a entrada de Napoleão em Moscou durante as Guerras Napoleônicas marcou um importante ponto na história militar e geopolítica europeia.",
      link: "https://pt.wikipedia.org/wiki/Napole%C3%A3o_Bonaparte",
      capa: "https://causaoperaria.org.br/wp-content/uploads/2023/09/napoleaocapa1-203459.jpg"
    },
    {
      data: "15/09/2000",
      titulo: "Primeiro voo tripulado de uma nave espacial privada",
      descricao: "O SpaceShipOne realiza o primeiro voo espacial tripulado privado, marcando o início da era espacial comercial.",
      link: "https://pt.wikipedia.org/wiki/SpaceShipOne",
      capa: "https://aeromagazine.uol.com.br/media/versions/virgin_galactic_3_free_big.jpghttps://aeromagazine.uol.com.br/media/versions/virgin_galactic_3_free_big.jpg"
    },
    {
      data: "16/09/1925",
      titulo: "Nasce B.B King",
      descricao: "B. B. King, cantor e guitarrista norte-americano e um dos expoentes do blues ",
      link: "https://pt.wikipedia.org/wiki/B._B._King",
      capa: "https://whiplash.net/imagens_promo_22/bbking_promo_facebook.jpg?nocache"
    },
    {
      data: "17/09/1787",
      titulo: "Assinatura da Constituição dos Estados Unidos",
      descricao: "A Constituição dos Estados Unidos é assinada na Filadélfia, estabelecendo o quadro jurídico fundamental do país.",
      link: "https://pt.wikipedia.org/wiki/Constitui%C3%A7%C3%A3o_dos_Estados_Unidos",
      capa: "https://www.cafehistoria.com.br/wp-content/uploads/2021/12/Constituicao-Americana-1024x660.jpg"
    },
    {
      data: "18/09/1977",
      titulo: "Voyager 1 faz sua primeira fotografia de Júpiter",
      descricao: "A sonda Voyager 1 envia suas primeiras imagens de Júpiter, proporcionando novos conhecimentos sobre o maior planeta do Sistema Solar.",
      link: "https://pt.wikipedia.org/wiki/Voyager_1",
      capa: "https://cienciamundo.com/wp-content/uploads/2022/08/Voyager-1-Jupiter-NASA-2.jpg"
    },
    {
      data: "19/09/1991",
      titulo: "Descoberta de Ötzi, o Homem do Gelo",
      descricao: "Os restos mumificados de um homem da Idade do Cobre, conhecido como Ötzi, são descobertos nos Alpes, revelando novos detalhes sobre a vida pré-histórica.",
      link: "https://pt.wikipedia.org/wiki/%C3%96tzi",
      capa: "https://s2-galileu.glbimg.com/UjmjRsYslNtWxZopPpyHyvQVWlA=/0x0:848x502/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/N/6/WVeN8pTzWkSIB8OBfmQg/original-1-.webphttps://s2-galileu.glbimg.com/UjmjRsYslNtWxZopPpyHyvQVWlA=/0x0:848x502/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/N/6/WVeN8pTzWkSIB8OBfmQg/original-1-.webp"
    },
    {
      data: "20/09/1519",
      titulo: "Início da expedição de Fernão de Magalhães",
      descricao: "Fernão de Magalhães parte em sua expedição de circunavegação do globo, uma das maiores conquistas da história da exploração marítima.",
      link: "https://pt.wikipedia.org/wiki/Fern%C3%A3o_de_Magalh%C3%A3es",
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Magalh%C3%A3es_Elcano_Circum-navega%C3%A7%C3%A3o-pt.svg/1200px-Magalh%C3%A3es_Elcano_Circum-navega%C3%A7%C3%A3o-pt.svg.png"
    },
    {
      data: "21/09/1972",
      titulo: "Dia Internacional da Paz é estabelecido",
      descricao: "As Nações Unidas estabelecem o Dia Internacional da Paz para promover a paz mundial e a não-violência.",
      link: "https://pt.wikipedia.org/wiki/Dia_Internacional_da_Paz",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0HjZM5LIf10FyDcnS7-Lt-UcTXXlTLVnqGw&s"
    },
    {
      data: "22/09/1792",
      titulo: "Proclamação da Primeira República Francesa",
      descricao: "A Primeira República é proclamada na França, após a Revolução Francesa, abolindo a monarquia e introduzindo um novo governo republicano.",
      link: "https://mundoeducacao.uol.com.br/historiageral/convencao-nacional.htm",
      capa: "https://www.meisterdrucke.pt/kunstwerke/1260px/French_School_-_Proclamation_of_the_French_Republic_by_the_Convention_French_Revolution_21_Septe_-_%28MeisterDrucke-537020%29.jpg"
    },
    {
      data: "23/09/1846",
      titulo: "Descoberta de Netuno",
      descricao: "O planeta Netuno é descoberto pelos astrônomos Johann Galle e Heinrich d'Arrest, expandindo o conhecimento sobre o Sistema Solar.",
      link: "https://pt.wikipedia.org/wiki/Netuno",
      capa: ""
    },
    {
      data: "24/09/1957",
      titulo: "Início da dessegregação racial nas escolas dos EUA",
      descricao: "O presidente Dwight D. Eisenhower envia tropas federais para garantir a dessegregação racial na Little Rock Central High School, em Arkansas.",
      link: "https://pt.wikipedia.org/wiki/Dessegrega%C3%A7%C3%A3o_escolar_nos_Estados_Unidos",
      capa: "https://media.gazetadopovo.com.br/2021/04/29141901/Vivian-Malone-Alabama-EUA-960x540.jpg"
    },
    {
      data: "25/09/2008",
      titulo: "Lançamento do primeiro satélite da Índia",
      descricao: "A Índia lança seu primeiro satélite, o Chandrayaan-1, para explorar a Lua, marcando seu avanço na exploração espacial.",
      link: "https://pt.wikipedia.org/wiki/Chandrayaan-1",
      capa: "https://img.odcdn.com.br/wp-content/uploads/2021/02/67_0-1.jpg"
    },
    {
      data: "26/09/1983",
      titulo: "Stanislav Petrov impede um conflito nuclear",
      descricao: "O oficial soviético Stanislav Petrov evita um possível ataque nuclear, reconhecendo que o alerta de mísseis era um falso alarme.",
      link: "https://pt.wikipedia.org/wiki/Stanislav_Petrov",
      capa: "https://aventurasnahistoria.com.br/media/uploads/curiosidades/stanislav_petrov.jpg"
    },
    {
      data: "27/09/1825",
      titulo: "Locomotion Nº 1",
      descricao: "Em 27 de setembro de 1825, a Locomotion transportou o primeiro trem da Stockton and Darlington Railway, tornando-se a primeira locomotiva a operar em uma via férrea pública.",
      link: "https://pt.wikipedia.org/wiki/Locomotion_Nº_1",
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Locomotion_No._1..jpg/300px-Locomotion_No._1..jpg"
    },
    {
      data: "28/09/1928",
      titulo: "Alexander Fleming descobre a penicilina",
      descricao: "Alexander Fleming descobre a penicilina, dando início à era dos antibióticos e revolucionando a medicina moderna.",
      link: "https://pt.wikipedia.org/wiki/Alexander_Fleming",
      capa: "https://minio.scielo.br/documentstore/1678-4774/jY6NfbwqjkMQTbCdFBRbp4M/2c17ab6f46e3f1966e02e4d7fbfe848ce4404caa.jpg"
    },
    {
      data: "29/09/2008",
      titulo: "Primeira vez que um acelerador de partículas atinge sua potência máxima",
      descricao: "O Grande Colisor de Hádrons atinge sua potência máxima pela primeira vez, permitindo avanços sem precedentes na física de partículas.",
      link: "https://pt.wikipedia.org/wiki/Grande_Colisor_de_H%C3%A1drons",
      capa: "https://s2.static.brasilescola.uol.com.br/be/2021/02/acelerador-de-particulas.jpg"
    },
    {
      data: "30/09/1960",
      titulo: "Estreia de *Os Flintstones* na TV",
      descricao: "A série de animação *Os Flintstones* estreia na TV, tornando-se um clássico da animação mundial.",
      link: "https://pt.wikipedia.org/wiki/Os_Flintstones",
      capa: "https://www.hojeemdia.com.br/image/policy:1.803623.1631033045:1631033045/image.jpg?f=2x1&w=1200&"
    },

    ////////// fatos de outubro ////////////
    {
      data: "01/10/1949",
      titulo: "Proclamação da República Popular da China",
      descricao: "Mao Tsé-Tung proclama a fundação da República Popular da China, estabelecendo o governo comunista no país.",
      link: "https://pt.wikipedia.org/wiki/Proclama%C3%A7%C3%A3o_da_Rep%C3%BAblica_Popular_da_China",
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Mao_Proclaiming_New_China.JPG/640px-Mao_Proclaiming_New_China.JPG"
    },
    {
      data: "02/10/1869",
      titulo: "Nascimento de Mahatma Gandhi",
      descricao: "Mahatma Gandhi, o líder espiritual e político que liderou a independência da Índia por meio da não-violência, nasce.",
      link: "https://pt.wikipedia.org/wiki/Mahatma_Gandhi",
      capa: "https://static.historiadomundo.com.br/conteudo/images/estatua-em-homenagem-gandhi-construida-na-cidade-londres-inglaterra-5a6f64ddec933.jpg"
    },
    {
      data: "03/10/1990",
      titulo: "Reunificação da Alemanha",
      descricao: "A Alemanha Oriental e Ocidental se reúnem oficialmente, encerrando décadas de separação após a Segunda Guerra Mundial.",
      link: "https://pt.wikipedia.org/wiki/Reunifica%C3%A7%C3%A3o_da_Alemanha",
      capa: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2023/08/manifestantes-no-portao-de-brandemburgo-pedindo-a-reunificacao-da-alemanha-em-1989.jpg"
    },
    {
      data: "04/10/1957",
      titulo: "Lançamento do Sputnik 1",
      descricao: "A União Soviética lança o Sputnik 1, o primeiro satélite artificial da Terra, marcando o início da era espacial.",
      link: "https://pt.wikipedia.org/wiki/Sputnik_1",
      capa: "https://img.odcdn.com.br/wp-content/uploads/2022/10/sputnik.png"
    },
    {
      data: "05/10/1988",
      titulo: "Referendo no Chile encerra a ditadura de Pinochet",
      descricao: "O povo chileno vota em um referendo que encerra a ditadura de Augusto Pinochet, abrindo caminho para a restauração da democracia.",
      link: "https://pt.wikipedia.org/wiki/Referendo_de_1988_no_Chile",
      capa: "https://exclamacion.com.br/wp-content/uploads/2021/05/pinochet-1.jpg?w=1200"
    },
    {
      data: "06/10/1927",
      titulo: "Primeiro filme sonoro é lançado",
      descricao: "*O Cantor de Jazz* estreia nos cinemas, tornando-se o primeiro filme de longa-metragem com diálogos sincronizados e mudando a história do cinema.",
      link: "https://pt.wikipedia.org/wiki/O_Cantor_de_Jazz",
      capa: "https://cantodosclassicos.com/wp-content/uploads/2019/02/06022019-primeiros-filmes-falados-jazz01.jpg"
    },
    {
      data: "07/10/1959",
      titulo: "Sonda soviética Luna 3 tira as primeiras fotos do lado oculto da Lua",
      descricao: "A Luna 3, sonda soviética, envia as primeiras imagens do lado oculto da Lua, expandindo nosso conhecimento sobre o satélite.",
      link: "https://pt.wikipedia.org/wiki/Luna_3",
      capa: "https://spacetoday.com.br/wp-content/uploads/2017/10/171006_luna3_image4_comparison.jpg"
    },
    {
      data: "08/10/1871",
      titulo: "Grande Incêndio de Chicago",
      descricao: "Embora o incêndio tenha causado destruição em grande escala, ele levou à reconstrução de Chicago como uma das mais modernas e influentes cidades dos EUA.",
      link: "https://pt.wikipedia.org/wiki/Grande_Inc%C3%AAndio_de_Chicago",
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chicago-fire1.jpg/800px-Chicago-fire1.jpg"
    },
    {
      data: "09/10/1967",
      titulo: "Morte de Che Guevara",
      descricao: "Che Guevara, ícone revolucionário e símbolo de resistência, é executado na Bolívia, transformando-se em uma lenda mundial.",
      link: "https://pt.wikipedia.org/wiki/Che_Guevara",
      capa: "https://fpabramo.org.br/focusbrasil/wp-content/uploads/sites/11/2023/10/1967_CheGuevara_Arquivo-1.jpeg"
    },
    {
      data: "10/10/1964",
      titulo: "Abertura dos Jogos Olímpicos de Tóquio",
      descricao: "Os Jogos Olímpicos de Verão de 1964 são abertos em Tóquio, os primeiros a serem realizados na Ásia.",
      link: "https://pt.wikipedia.org/wiki/Jogos_Ol%C3%ADmpicos_de_Verao_de_1964",
      capa: "https://s2-g1.glbimg.com/zBxISFK4uQPvbq7X2mN4JYNkqj4=/0x0:3600x2439/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/0/l/CA99SvTWuSEBSuBBineQ/ap21204411894854.jpg"
    },
    {
      data: "11/10/1996",
      titulo: "Morte de Renato Russo",
      descricao: "Morreu o líder e vocalista da banda Legião Urbana, Renato Russo. Ele tinha 36 anos e descobriu ser soro-positivo em 1990. Renato Russo é autor de sucessos que marcaram a geração dos anos 1980 e 1990, como Será, Geração Coca-Cola, Que País é Este?, Eduardo e Mônica e Faroeste Caboclo.",
      link: "https://agenciaaids.com.br/noticia/como-se-nao-houvesse-amanha-ha-24-anos-a-morte-de-renato-russo-abalava-o-pais/",
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Svetlana_Savitskaya.jpg/250px-Svetlana_Savitskaya.jpg"
    },
    {
      data: "12/10/1492",
      titulo: "Cristóvão Colombo chega às Américas",
      descricao: "Cristóvão Colombo chega às Américas, marcando o início de um período de colonização e intercâmbio entre os continentes.",
      link: "https://pt.wikipedia.org/wiki/Crist%C3%B3v%C3%A3o_Colombo",
      capa: "https://static.todamateria.com.br/upload/co/lo/colombonovomundo-cke.jpg"
    },
    {
      data: "13/10/1884",
      titulo: "Início da Conferência de Berlim",
      descricao: "A Conferência de Berlim é convocada para regulamentar a colonização europeia na África, moldando a geopolítica do continente.",
      link: "https://pt.wikipedia.org/wiki/Confer%C3%AAncia_de_Berlim",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkcpPS7l_cJybA__0e2WRbpinFkSqjGGGk-Q&s"
    },
    {
      data: "14/10/1947",
      titulo: "Chuck Yeager quebra a barreira do som",
      descricao: "Chuck Yeager se torna o primeiro piloto a quebrar a barreira do som em um voo controlado.",
      link: "https://pt.wikipedia.org/wiki/Chuck_Yeager",
      capa: "https://aeromagazine.uol.com.br/media/versions/bell-x-1-chuck-yeager_1_free_big.jpg"
    },
    {
      data: "15/10/1993",
      titulo: "Nelson Mandela e Frederik de Klerk ganham o Prêmio Nobel da Paz",
      descricao: "Nelson Mandela e Frederik de Klerk são agraciados com o Prêmio Nobel da Paz por seus esforços em acabar com o apartheid na África do Sul.",
      link: "https://pt.wikipedia.org/wiki/Pr%C3%AAmio_Nobel_da_Paz",
      capa: "https://www.canalhistory.com.br/sites/history.uol.com.br/files/styles/facebook_card_1200x630/public/images/2019/08/14/espn_mandela_05.jpg"
    },
    {
      data: "16/10/1978",
      titulo: "Eleição do Papa João Paulo II",
      descricao: "Karol Wojtyła é eleito como o Papa João Paulo II, o primeiro papa não italiano em mais de 450 anos.",
      link: "https://pt.wikipedia.org/wiki/Papa_Jo%C3%A3o_Paulo_II",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9zIX4AxN06l4gt2_foZsc-vZGcLNy8M5JQ&s"
    },
    {
      data: "17/10/1931",
      titulo: "Inauguração do Cristo Redentor no Rio de Janeiro",
      descricao: "A estátua do Cristo Redentor é inaugurada no Rio de Janeiro, tornando-se um dos marcos mais reconhecidos do mundo.",
      link: "https://pt.wikipedia.org/wiki/Cristo_Redentor_(Rio_de_Janeiro)",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7x9tXqP-IYjyFVRAOjr223Zy4O76i-6xOKA&s"
    },
    {
      data: "18/10/1867",
      titulo: "Alasca é formalmente transferido para os Estados Unidos",
      descricao: "O Alasca é oficialmente transferido do Império Russo para os Estados Unidos após a compra do território.",
      link: "https://pt.wikipedia.org/wiki/Compra_do_Alasca",
      capa: "https://media.gazetadopovo.com.br/2019/08/24203314/alaska-77616_1280-960x540.jpg"
    },
    {
      data: "19/10/1781",
      titulo: "Rendição de Yorktown",
      descricao: "As tropas britânicas se rendem em Yorktown durante a Guerra da Independência dos Estados Unidos, marcando o fim das hostilidades.",
      link: "https://pt.wikipedia.org/wiki/Rendição_de_Yorktown",
      capa: "https://www.meisterdrucke.pt/kunstwerke/1260px/John%20Trumbull%20-%20The%20Surrender%20of%20Lord%20Cornwallis%20at%20Yorktown%20October%2019%201781%201787-c1828%20%20-%20%28MeisterDrucke-138729%29.jpg"
    },
    {
      data: "20/10/1973",
      titulo: "Abertura do Sydney Opera House",
      descricao: "A icônica Sydney Opera House é inaugurada na Austrália, tornando-se um dos marcos arquitetônicos mais famosos do mundo.",
      link: "https://pt.wikipedia.org/wiki/Sydney_Opera_House",
      capa: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Sydney_Australia._%2821339175489%29.jpg"
    },
    {
      data: "21/10/1879",
      titulo: "Thomas Edison inventa a lâmpada elétrica",
      descricao: "Thomas Edison testa com sucesso sua primeira lâmpada elétrica, revolucionando a iluminação e a vida moderna.",
      link: "https://pt.wikipedia.org/wiki/Thomas_Edison",
      capa: "https://www.tracosretos.com.br/uploads/images/2020/03/8-1585584682.jpg"
    },
    {
      data: "22/10/1797",
      titulo: "Primeiro salto de paraquedas realizado com sucesso",
      descricao: "André-Jacques Garnerin realiza o primeiro salto de paraquedas bem-sucedido, pousando em segurança após saltar de um balão.",
      link: "https://pt.wikipedia.org/wiki/André-Jacques_Garnerin",
      capa: "https://catracalivre.com.br/wp-content/uploads/2019/06/salto-paraquedas-dicas-perder-medo-910x708.jpg"
    },
    {
      data: "23/10/1940",
      titulo: "Primeiro voo do 14-bis",
      descricao: "O primeiro voo do 14-bis, avião projetado e pilotado por Alberto Santos Dumont, aconteceu em 23 de outubro de 1906. ",
      link: "https://militares.estrategia.com/portal/mundo-militar/datas-comemorativas/23-de-outubro-primeiro-voo-do-14-bis-de-santos-dumont-em-paris/",
      capa: "https://oespecialista.com.br/wp-content/uploads/2021/10/santos-dumont-14-bis-voo-518x307.jpg"
    },
    {
      data: "24/10/1929",
      titulo: "Queda da Bolsa de Valores de Nova York",
      descricao: "Embora tenha sido um evento devastador, a Grande Depressão levou a reformas econômicas globais, moldando a política financeira moderna.",
      link: "https://pt.wikipedia.org/wiki/Grande_Depress%C3%A3o",
      capa: "https://www.al.sp.gov.br/repositorio/noticia/hist/wallstreet%201929.jpg"
    },
    {
      data: "25/10/1881",
      titulo: "Nascimento de Pablo Picasso",
      descricao: "O renomado pintor e escultor espanhol Pablo Picasso, uma das figuras mais influentes da arte do século 20, nasce em Málaga, Espanha.",
      link: "https://pt.wikipedia.org/wiki/Pablo_Picasso",
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/800px-Pablo_picasso_1.jpg"
    },
    {
      data: "26/10/1863",
      titulo: "o Brasil declara guerra à Alemanha",
      descricao: "(1917) No dia 26 de outubro, o Brasil declara guerra à Alemanha, tornando-se assim o único país da América Latina a participar ativamente da I Guerra Mundial",
      link: "https://pt.wikipedia.org/wiki/FIFA",
      capa: "https://acervo.oglobo.globo.com/incoming/21728998-52e-b09/materia/O_GLOBO_Guerra.jpg"
    },
    {
      data: "27/10/1904",
      titulo: "Inauguração do metrô de Nova York",
      descricao: "O metrô de Nova York, um dos maiores e mais famosos sistemas de transporte do mundo, é inaugurado.",
      link: "https://pt.wikipedia.org/wiki/Metr%C3%B4_de_Nova_York",
      capa: "https://dicasnovayork.com.br/wp-content/uploads/2018/08/metro_header.jpg.webp"
    },
    {
      data: "28/10/1886",
      titulo: "Inauguração da Estátua da Liberdade",
      descricao: "A Estátua da Liberdade, presente da França aos Estados Unidos, é inaugurada em Nova York, simbolizando a liberdade e a democracia.",
      link: "https://pt.wikipedia.org/wiki/Est%C3%A1tua_da_Liberdade",
      capa: "https://www.folhadealphaville.com.br/images/articles/4932/b2ap3_thumbnail_estatua-da-liberdade2.jpg"
    },
    {
      data: "29/10/1969",
      titulo: "Primeira conexão de rede ARPANET",
      descricao: "A ARPANET, precursora da internet, realiza sua primeira conexão entre computadores, dando início à era digital.",
      link: "https://pt.wikipedia.org/wiki/ARPANET",
      capa: "https://www.deltainternet.net.br/laravel-filemanager/photos/4/j-c-r-licklider-23162415916285.jpg"
    },
    {
      data: "30/10/1938",
      titulo: "Transmissão da *Guerra dos Mundos* por Orson Welles",
      descricao: "Orson Welles realiza uma transmissão de rádio fictícia sobre uma invasão alienígena, causando pânico generalizado e se tornando um marco na história da mídia.",
      link: "https://pt.wikipedia.org/wiki/The_War_of_the_Worlds",
      capa: "https://s2.glbimg.com/UnEIfS0EgFiKsilaTZbPV_x_Ml4=/i.glbimg.com/og/ig/infoglobo1/f/original/2019/02/13/81061218_1938_-_orson_welles_radialista_-_com_o_programa_a_guerra_dos_mundos_a_marca_registrada_de_q.jpg"
    },
    {
      data: "31/10/1517",
      titulo: "Martinho Lutero inicia a Reforma Protestante",
      descricao: "Martinho Lutero prega suas 95 teses na porta da Igreja do Castelo em Wittenberg, dando início à Reforma Protestante.",
      link: "https://www.historiadomundo.com.br/idade-moderna/martinho-lutero.htm",
      capa: "https://static.historiadomundo.com.br/2020/10/lutero.jpg"
    },

    /////////// fatos de novembro //////////////
    {
      data: "01/11/1993",
      titulo: "Tratado de Maastricht entra em vigor",
      descricao: "O Tratado de Maastricht, que estabelece formalmente a União Europeia, entra em vigor, promovendo a integração econômica e política dos países europeus.",
      link: "https://pt.wikipedia.org/wiki/Tratado_de_Maastricht",
      capa: "https://www.cursosapientia.com.br/admimg/siteBlog/cacd-diplomata-itamaraty-diplomacia-26-anos-do-tratado-de-maastricht.pnghttps://www.cursosapientia.com.br/admimg/siteBlog/cacd-diplomata-itamaraty-diplomacia-26-anos-do-tratado-de-maastricht.png"
    },
    {
      data: "02/11/2000",
      titulo: "Primeira tripulação permanente chega à Estação Espacial Internacional",
      descricao: "A primeira tripulação permanente chega à Estação Espacial Internacional, iniciando a ocupação contínua da estação.",
      link: "https://pt.wikipedia.org/wiki/Estação_Espacial_Internacional",
      capa: "https://s2.glbimg.com/iFhFn6n82lYH_b-FpKL9Jzt_mmk=/300x225/s.glbimg.com/jo/g1/f/original/2015/11/02/nasagif.gif"
    },
    {
      data: "03/11/1957",
      titulo: "Laika se torna o primeiro ser vivo a orbitar a Terra",
      descricao: "A cadela Laika, a bordo da nave soviética Sputnik 2, se torna o primeiro ser vivo a orbitar a Terra, marcando um passo importante na exploração espacial.",
      link: "https://pt.wikipedia.org/wiki/Laika",
      capa: "https://upload.wikimedia.org/wikipedia/pt/b/be/Laika_%28cadela%29.jpghttps://upload.wikimedia.org/wikipedia/pt/b/be/Laika_%28cadela%29.jpg"
    },
    {
      data: "04/11/2008",
      titulo: "Eleição de Barack Obama",
      descricao: "Barack Obama é eleito o primeiro presidente afro-americano dos Estados Unidos, representando um marco na história do país.",
      link: "https://pt.wikipedia.org/wiki/Barack_Obama",
      capa: "https://c.files.bbci.co.uk/13621/production/_116839397_gettyimages-467354336.jpg"
    },
    {
      data: "05/11/1994",
      titulo: "Primeira conferência sobre o Protocolo de Quioto",
      descricao: "Realiza-se a primeira conferência sobre o Protocolo de Quioto, um acordo internacional para reduzir as emissões de gases de efeito estufa.",
      link: "https://pt.wikipedia.org/wiki/Protocolo_de_Quioto",
      capa: "https://media.wired.com/photos/593366be7965e75f5f3c7be5/191:100/w_1280,c_limit/kyoto_protocol.jpg"
    },
    {
      data: "06/11/1860",
      titulo: "Eleição de Abraham Lincoln como presidente dos EUA",
      descricao: "Abraham Lincoln é eleito presidente dos Estados Unidos, evento que levaria à abolição da escravidão no país.",
      link: "https://www.historiadomundo.com.br/idade-contemporanea/abraham-lincoln.htm",
      capa: "https://static.historiadomundo.com.br/2021/02/abraham-lincoln.jpg"
    },
    {
      data: "07/11/1917",
      titulo: "Revolução Russa de 1917",
      descricao: "A Revolução de Outubro na Rússia, liderada pelos bolcheviques, culmina com a derrubada do governo provisório e a ascensão de Lenin ao poder.",
      link: "https://pt.wikipedia.org/wiki/Revolução_de_Outubro",
      capa: "https://cdn.brasildefato.com.br/media/b02e5f79a97b271b846308ba115d4902.jpg"
    },
    {
      data: "08/11/1895",
      titulo: "Descoberta dos raios X",
      descricao: "O físico alemão Wilhelm Conrad Röntgen descobre os raios X, revolucionando a medicina diagnóstica.",
      link: "https://blog.jaleko.com.br/historia-da-medicina-a-descoberta-do-raio-x/",
      capa: "https://jaleko-blog-files.s3.amazonaws.com/wp-content/uploads/2021/01/14163546/Raio-X-810x693.png"
    },
    {
      data: "09/11/1989",
      titulo: "Queda do Muro de Berlim",
      descricao: "O Muro de Berlim cai, simbolizando o fim da Guerra Fria e a reunificação da Alemanha.",
      link: "https://pt.wikipedia.org/wiki/Queda_do_Muro_de_Berlim",
      capa: "https://ogimg.infoglobo.com.br/in/24070385-327-979/FT1086A/85588872_FILES-In-this-file-photo-taken-on-November-11-1989-West-Berliners-crowd-in-front-of-the.jpg"
    },
    {
      data: "10/11/1975",
      titulo: "Criação do Programa das Nações Unidas para o Meio Ambiente",
      descricao: "O Programa das Nações Unidas para o Meio Ambiente (PNUMA) é criado, consolidando os esforços globais para proteger o meio ambiente.",
      link: "https://pt.wikipedia.org/wiki/Programa_das_Nações_Unidas_para_o_Meio_Ambiente",
      capa: "https://upload.wikimedia.org/wikipedia/commons/d/d0/PNUMA_logo.png"
    },
    {
      data: "11/11/1918",
      titulo: "Fim da Primeira Guerra Mundial",
      descricao: "O Armistício de Compiègne é assinado, encerrando a Primeira Guerra Mundial e dando início ao período de paz na Europa.",
      link: "https://pt.wikipedia.org/wiki/Armistício_de_Compiègne_(1918)",
      capa: "https://media.vaticannews.va/media/content/dam-archive/vaticannews/multimedia/2018/11/o3/AdobeStock_66971101aem.jpg/_jcr_content/renditions/cq5dam.thumbnail.cropped.1500.844.jpeg"
    },
    {
      data: "12/11/1799",
      titulo: "Primeira chuva de Estrelas",
      descricao: "No dia 12 de novembro de 1 799, foi registada a primeira chuva de estrelas. A chuva de estrelas foi provocada pela passagem do meteorito Leonid, que passou junto à Terra em 1 799, 1 833 e também em 1 866. Esta foi uma das poucas chuvas de estrelas a durar 33 anos, o tempo de retorno do meteoro ao nosso planeta.",
      link: "https://planeta.rio/chuva-de-meteoros/",
      capa: "https://zenite.nu/wp-content/uploads/oldpics/f02/leonid1833.jpg"
    },
    {
      data: "13/11/1965",
      titulo: "Instituída lei que cria o cruzeiro novo como novo padrão monetário do Brasil.",
      descricao: " passou a vigorar a partir de 13 de fevereiro de 1967, pela Resolução 47 do Conselho Monetário Nacional, equivalendo 100 cruzeiros (antigos) de 1942 a 1 cruzeiro novo, sendo restabelecido o centavo.",
      link: "https://pt.wikipedia.org/wiki/Windows_1.0",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrxVQIKT8DBTGJM6qmr5bbWwp5DhXa8s1stw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrxVQIKT8DBTGJM6qmr5bbWwp5DhXa8s1stw&s"
    },
    {
      data: "14/11/1889",
      titulo: "Início da viagem de Nellie Bly ao redor do mundo",
      descricao: "A jornalista Nellie Bly parte de Nova York para tentar dar a volta ao mundo em menos de 80 dias, inspirada no livro de Júlio Verne.",
      link: "https://pt.wikipedia.org/wiki/Nellie_Bly",
      capa: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/494A/production/_110726781_foto1-libraryofcongress.jpg.webp"
    },
    {
      data: "15/11/1889",
      titulo: "Proclamação da República no Brasil",
      descricao: "O Brasil se torna uma república após um golpe militar que depôs o imperador Dom Pedro II, encerrando o período monárquico.",
      link: "https://pt.wikipedia.org/wiki/Proclamação_da_República_do_Brasil",
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Proclama%C3%A7%C3%A3o_da_Rep%C3%BAblica_by_Benedito_Calixto_1893.jpg/1200px-Proclama%C3%A7%C3%A3o_da_Rep%C3%BAblica_by_Benedito_Calixto_1893.jpg"
    },
    {
      data: "16/11/1945",
      titulo: "Criação da UNESCO",
      descricao: "A Organização das Nações Unidas para a Educação, a Ciência e a Cultura (UNESCO) é criada, com o objetivo de promover a cooperação internacional nessas áreas.",
      link: "https://pt.wikipedia.org/wiki/UNESCO",
      capa: "https://s1.static.brasilescola.uol.com.br/be/2021/11/bandeira-unesco-logomarca.jpg"
    },
    {
      data: "17/11/1869",
      titulo: "Inauguração do Canal de Suez",
      descricao: "O Canal de Suez é inaugurado no Egito, conectando o Mar Mediterrâneo ao Mar Vermelho e revolucionando o comércio marítimo.",
      link: "https://pt.wikipedia.org/wiki/Canal_de_Suez",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-tG3BG2NJLNt9hO6anxf62xnQdbDiYLuRg&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-tG3BG2NJLNt9hO6anxf62xnQdbDiYLuRg&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-tG3BG2NJLNt9hO6anxf62xnQdbDiYLuRg&s"
    },
    {
      data: "18/11/1928",
      titulo: "Primeira aparição de Mickey Mouse",
      descricao: "Mickey Mouse faz sua estreia no curta-metragem *Steamboat Willie*, tornando-se um dos personagens mais icônicos da cultura popular.",
      link: "https://pt.wikipedia.org/wiki/Mickey_Mouse",
      capa: "https://viagemegastronomia.cnnbrasil.com.br/wp-content/uploads/sites/5/2018/09/Curiosidade05_Mickey90th.jpg"
    },
      {
        data: "19/11/1889",
        titulo: "Proclamação da Bandeira do Brasil",
        descricao: "A nova bandeira do Brasil é oficialmente adotada, após a Proclamação da República, substituindo a bandeira do Império.",
        link: "https://pt.wikipedia.org/wiki/Bandeira_do_Brasil",
        capa: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-atual-bandeira-brasil-surgiu-logo-apos-proclamacao-republica-foi-adotada-no-dia-19-novembro-1889-5beafb10035e3.jpg"
      }
    ,
    {
      data: "20/11/1985",
      titulo: "Dia Internacional dos Direitos da Criança",
      descricao: "A ONU estabelece o Dia Internacional dos Direitos da Criança para promover a conscientização sobre os direitos das crianças em todo o mundo.",
      link: "https://pt.wikipedia.org/wiki/Dia_Internacional_dos_Direitos_da_Criança",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8pQeDN69JYcJYnCxE-3nhGH16MO_IjV2_w&s"
    },
    {
      data: "21/11/1877",
      titulo: "Invenção do fonógrafo por Thomas Edison",
      descricao: "Thomas Edison anuncia a invenção do fonógrafo, o primeiro dispositivo a gravar e reproduzir som.",
      link: "https://pt.wikipedia.org/wiki/Fonógrafo",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI_2BeF1BiB9s0HMJjRCYoBDUhnmnXTcJ_zA&s"
    },
    {
      data: "22/11/1963",
      titulo: "John F. Kennedy é assassinado",
      descricao: "Embora trágico, o assassinato de John F. Kennedy levou a grandes mudanças nas leis de direitos civis e à intensificação dos esforços para resolver conflitos globais.",
      link: "https://pt.wikipedia.org/wiki/John_F._Kennedy",
      capa: "https://s2-oglobo.glbimg.com/qtj1G8HdG4Jo88UTECqupaJ1wNI=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/C/d/06a8h4R8yVPL7pqBTjJw/jfkcarro.png"
    },
    {
      data: "23/11/1963",
      titulo: "Estreia de *Doctor Who* na TV",
      descricao: "A série de televisão *Doctor Who* estreia na BBC, tornando-se a série de ficção científica mais longeva da história da TV.",
      link: "https://pt.wikipedia.org/wiki/Doctor_Who",
      capa: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/10/26/981391881-doctor-who.jpg"
    },
    {
      data: "24/11/1859",
      titulo: "Publicação de *A Origem das Espécies* de Charles Darwin",
      descricao: "Charles Darwin publica *A Origem das Espécies*, que propõe a teoria da evolução por seleção natural, revolucionando a biologia.",
      link: "https://pt.wikipedia.org/wiki/A_Origem_das_Espécies",
      capa: "https://m.media-amazon.com/images/I/81X706V7XsL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      data: "25/11/1992",
      titulo: "Cúpula da Terra no Rio de Janeiro",
      descricao: "A Cúpula da Terra, realizada no Rio de Janeiro, reforça os compromissos globais para o desenvolvimento sustentável e a preservação ambiental.",
      link: "https://pt.wikipedia.org/wiki/Cúpula_da_Terra",
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Second_Earth_Summit_was_held_in_Rio_de_Janeiro.jpg/640px-Second_Earth_Summit_was_held_in_Rio_de_Janeiro.jpghttps://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Second_Earth_Summit_was_held_in_Rio_de_Janeiro.jpg/640px-Second_Earth_Summit_was_held_in_Rio_de_Janeiro.jpg"
    },
    {
      data: "26/11/1922",
      titulo: "Descoberta da tumba de Tutancâmon",
      descricao: "A tumba do faraó egípcio Tutancâmon é descoberta, uma das mais significativas descobertas arqueológicas do século XX.",
      link: "https://pt.wikipedia.org/wiki/Tutancâmon",
      capa: "https://s2.glbimg.com/1lwOveFCxtB4E-JntTr8DT_GKi4=/e.glbimg.com/og/ed/f/original/2020/06/10/p0770_colour.jpg"
    },
    {
      data: "27/11/1971",
      titulo: "Sonda Mars 2 chega a Marte",
      descricao: "A sonda soviética Mars 2 torna-se a primeira a atingir a superfície de Marte, embora o pouso tenha sido malsucedido.",
      link: "https://pt.wikipedia.org/wiki/Programa_Mars",
      capa: "https://upload.wikimedia.org/wikipedia/commons/1/13/Mars3_iki.jpg"
    },
    {
      data: "28/11/1520",
      titulo: "Fernão de Magalhães atravessa o Estreito de Magalhães",
      descricao: "Fernão de Magalhães e sua tripulação atravessam o estreito que leva seu nome, ligando os oceanos Atlântico e Pacífico.",
      link: "https://pt.wikipedia.org/wiki/Estreito_de_Magalhães",
      capa: "https://i0.wp.com/tolongedecasa.com/wp-content/uploads/2013/11/atravessando-o-estreito-de-magalhaes-2.jpg?ssl=1"
    },
    {
      data: "29/11/1947",
      titulo: "Resolução da ONU sobre a partição da Palestina",
      descricao: "A Assembleia Geral da ONU aprova a Resolução 181, que recomenda a partição da Palestina em um estado judeu e um estado árabe.",
      link: "https://pt.wikipedia.org/wiki/Resolução_181_da_Assembleia_Geral_das_Nações_Unidas",
      capa: "https://aulazen.com/wp-content/uploads/2018/07/1-23.jpg"
    },
    {
      data: "30/11/1872",
      titulo: "Primeiro jogo internacional de futebol",
      descricao: "O primeiro jogo internacional de futebol da história é disputado entre Escócia e Inglaterra.",
      link: "https://pt.wikipedia.org/wiki/História_do_futebol",
      capa: "https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2020/11/30050041/30.11-1o-Jogo-de-Futebol.jpg"
    },

    //////////// fatos de dezembro ////////////
    {
      data: "01/12/1913",
      titulo: "Primeira linha de montagem móvel da Ford",
      descricao: "A Ford Motor Company introduz a primeira linha de montagem móvel, revolucionando a indústria automotiva e a produção em massa.",
      link: "https://pt.wikipedia.org/wiki/Ford_Motor_Company",
      capa: "https://operamundi.uol.com.br/wp-content/uploads/2023/10/452px-Timehenryford-crop.jpg"
    },
    {
      data: "02/12/1982",
      titulo: "Primeiro transplante cardíaco de um coração artificial permanente",
      descricao: "O Dr. Barney Clark recebe o primeiro coração artificial permanente, o Jarvik-7, marcando um avanço significativo na medicina.",
      link: "https://pt.wikipedia.org/wiki/Coração_artificial",
      capa: "https://t.ctcdn.com.br/b2Q_HbrzNZbfgPi0qIpbiJiEn0w=/660x0/smart/filters:format(webp)/i656549.png"
    },
    {
      data: "03/12/1992",
      titulo: "Primeiro envio de SMS",
      descricao: "O primeiro SMS (mensagem de texto) da história é enviado no Reino Unido, iniciando uma nova era de comunicação.",
      link: "https://pt.wikipedia.org/wiki/SMS",
      capa: "https://oespecialista.com.br/wp-content/uploads/2021/12/vodafone-sms-nft-primeiro.jpg"
    },
    {
      data: "04/12/1961",
      titulo: "The Observer primeira edição",
      descricao: "É publicada a primeira edição do The Observer, o primeiro jornal dominical do mundo. ",
      link: "https://pt.wikipedia.org/wiki/Bell_UH-1_Iroquois",
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/1882-No06-Jul-20.pdf/page1-258px-1882-No06-Jul-20.pdf.jpg"
    },
    {
      data: "05/12/1952",
      titulo: "Grande Esmog de Londres",
      descricao: "Apesar das mortes e dificuldades, o Grande Esmog de Londres levou a mudanças fundamentais nas políticas ambientais do Reino Unido.",
      link: "https://pt.wikipedia.org/wiki/Grande_Esmog_de_Londres",
      capa: "https://mega.ibxk.com.br/2020/06/03/03220712981513.jpg"
    },
    {
      data: "06/12/1921",
      titulo: "Tratado Anglo-Irlandês é assinado",
      descricao: "O Tratado Anglo-Irlandês é assinado, estabelecendo o Estado Livre Irlandês e pondo fim à Guerra da Independência da Irlanda",
      link: "https://pt.wikipedia.org/wiki/Tratado_Anglo-Irlandês",
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/The_peacemakers-_George_Gavan_Duffy%2C_Erskine_Childers%2C_Robert_Barton_and_Arthur_Griffith_in_a_group_%2828455606301%29.jpg/248px-The_peacemakers-_George_Gavan_Duffy%2C_Erskine_Childers%2C_Robert_Barton_and_Arthur_Griffith_in_a_group_%2828455606301%29.jpg"
    },
    {
      data: "07/12/1995",
      titulo: "Galileo chega a Júpiter",
      descricao: "A sonda Galileo chega a Júpiter, tornando-se a primeira a orbitar o planeta e estudá-lo em profundidade.",
      link: "https://pt.wikipedia.org/wiki/Galileo_(sonda_espacial)",
      capa: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Artwork_Galileo-Io-Jupiter.JPG"
    },
    {
      data: "08/12/1991",
      titulo: "Assinatura do Acordo de Belavezha",
      descricao: "O Acordo de Belavezha é assinado, dissolvendo a União Soviética e criando a Comunidade dos Estados Independentes (CEI).",
      link: "https://pt.wikipedia.org/wiki/Acordos_de_Belaveja",
      capa: "https://www.prensalatina.com.br/wp-content/uploads/2022/12/Firma-Tratado-de-Belavezha-768x576-1.jpg"
    },
    {
      data: "09/12/1968",
      titulo: "Apresentação do 'The Mother of All Demos'",
      descricao: "Douglas Engelbart realiza a apresentação histórica conhecida como 'The Mother of All Demos', mostrando as primeiras formas de interação homem-máquina.",
      link: "https://pt.wikipedia.org/wiki/The_Mother_of_All_Demos",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRmkdlPFxhnEXmw21gdccrAq93KKrSBoWyeA&s"
    },
    {
      data: "10/12/1901",
      titulo: "Primeira cerimônia do Prêmio Nobel",
      descricao: "A primeira cerimônia de entrega do Prêmio Nobel é realizada em Estocolmo, premiando realizações em várias disciplinas.",
      link: "https://pt.wikipedia.org/wiki/Prêmio_Nobel",
      capa: "https://www.hjnahistoria.com.br/assets/imgcapa/premio-nobel.jpg"
    },
    {
      data: "11/12/1946",
      titulo: "UNICEF é criada",
      descricao: "A Assembleia Geral da ONU cria o UNICEF, dedicado a melhorar as condições de vida das crianças em todo o mundo.",
      link: "https://pt.wikipedia.org/wiki/UNICEF",
      capa: "https://operamundi.uol.com.br/wp-content/uploads/2023/10/600px-Flag_of_UNICEF_svg.png"
    },
    {
      data: "12/12/1901",
      titulo: "Primeira transmissão de rádio transatlântica",
      descricao: "Guglielmo Marconi realiza a primeira transmissão de rádio transatlântica, um marco na comunicação global.",
      link: "https://pt.wikipedia.org/wiki/Guglielmo_Marconi",
      capa: "https://kae.tec.br/eletricista/wp-content/uploads/2023/12/primeira-transmissao-de-radio.webp"
    },
    {
      data: "13/12/1912",
      titulo: "Nasceu o cantor Luiz Gonzaga",
      descricao: 'Luiz Gonzaga (1912-1989) foi um músico brasileiro. Sanfoneiro, cantor e compositor, recebeu o título de "Rei do Baião". Foi responsável pela valorização dos ritmos nordestinos, levou o baião, o xote e o xaxado, para todo o país. A música "Asa Branca" feita em parceria com Humberto Teixeira, gravada por Luiz Gonzaga no dia 3 de março de 1947, virou hino do Nordeste brasileiro..',
      link: "https://www.ebiografia.com/luiz_gonzaga/",
      capa: "https://akamai.sscdn.co/gcs/cifra-blog/pt/wp-content/uploads/2022/12/bf9d9c7-luiz-gonzaga.jpg"
    },
    {
      data: "14/12/1911",
      titulo: "Roald Amundsen é o primeiro a chegar ao Pólo Sul.",
      descricao: "Roald Amundsen é o primeiro a chegar ao Pólo Sul. O norueguês Roald Amundsen tornou-se o primeiro explorador a chegar ao Pólo Sul em 14 de dezembro de 1911, suplantando seu rival britânico, Robert Falcon Scott.",
      link: "https://pt.wikipedia.org/wiki/Mariner_2",
      capa: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Amundsen_Expedition_at_South_Pole.jpg"
    },
    {
      data: "15/12/1970",
      titulo: "Primeiro pouso em Vênus pela Venera 7",
      descricao: "A sonda soviética Venera 7 realiza o primeiro pouso controlado em Vênus e transmite dados da superfície.",
      link: "https://pt.wikipedia.org/wiki/Venera_7",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7OHaG9qRUci0Upi-SrFjmGvKzjBwPf4ijw&s"
    },
    {
      data: "16/12/1773",
      titulo: "Boston Tea Party",
      descricao: "A Boston Tea Party acontece como protesto contra os impostos britânicos, sendo um dos eventos que levaram à Revolução Americana.",
      link: "https://pt.wikipedia.org/wiki/Boston_Tea_Party",
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Boston_Tea_Party_Currier_colored.jpg/800px-Boston_Tea_Party_Currier_colored.jpg"
    },
    {
      data: "17/12/1903",
      titulo: "Primeiro voo dos Irmãos Wright",
      descricao: "Os irmãos Wright realizam o primeiro voo controlado em uma aeronave motorizada, marcando o início da aviação moderna.",
      link: "https://pt.wikipedia.org/wiki/Irmãos_Wright",
      capa: "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2013/12/18/800px-wrightflyer.jpg"
    },
    {
      data: "18/12/1865",
      titulo: "Abolição da escravidão nos EUA",
      descricao: "A 13ª Emenda à Constituição dos Estados Unidos é ratificada, abolindo formalmente a escravidão no país.",
      link: "https://operamundi.uol.com.br/historia/podcast-hoje-na-historia-1865-eua-oficializam-abolicao-da-escravatura/",
      capa: "https://ogimg.infoglobo.com.br/in/7400180-b98-35d/FT1086A/2013012461624.jpg"
    },
    {
      data: "19/12/1960",
      titulo: "Projeto Mercury: primeiro voo da nave Mercury com o foguete Redstone.",
      descricao: " Mercury-Redstone-1A foi lançada e alcançou 210 km de altitude, completando um voo espacial suborbital; após 15 minutos e 45 segundos, ela desceu ao oceano Atlântico e foi recuperada por helicópteros. Ali, ela se qualificou para voos com primatas — e, posteriormente, com humanos.",
      link: "https://canaltech.com.br/espaco/capsula-pioneira-nos-voos-espaciais-tripulados-ganha-novo-lar-nos-eua-221652/",
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Ham_Launch_-_GPN-2000-001007.jpg/1200px-Ham_Launch_-_GPN-2000-001007.jpg"
    },
    {
      data: "20/12/2007",
      titulo: "Roubadas pinturas de Pablo Picasso e de Cândido Portinari",
      descricao: "Roubadas do acervo do Museu de Arte de São Paulo (MASP) pinturas de Pablo Picasso e de Cândido Portinari. As obras, tombadas como patrimônio nacional pelo Iphan, estão avaliadas em aproximadamente 55 milhões de dólares.",
      link: "https://super.abril.com.br/mundo-estranho/como-foi-o-roubo-ao-masp-no-brasil-em-2007",
      capa: "https://super.abril.com.br/wp-content/uploads/2018/07/575745bc0e2163457509cc8fmasp31.jpeg"
    },
    {
      data: "21/12/1968",
      titulo: "Lançamento da Apollo 8",
      descricao: "A NASA lança a Apollo 8, a primeira missão tripulada a orbitar a Lua, abrindo caminho para a histórica missão Apollo 11.",
      link: "https://pt.wikipedia.org/wiki/Apollo_8",
      capa: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/09/413251812-i352578.jpeg"
    },
    {
      data: "22/12/1925",
      titulo: "O lendário nome do Fenerbahce e do futebol turco Lefter Küçükandonyadis nasceu em Büyükada, Istambul.",
      descricao: "Lefter Küçükandonyadis - Büyükada, 22 de dezembro de 1925 - Şişli, 13 de janeiro de 2012) foi um futebolista e treinador de futebol turco. Pela Seleção Turca de Futebol, envergou a camisa vermelha da equipe em cinquenta partidas, marcando 22 gols entre 1948 e 1963. Esteve presente na Copa do Mundo FIFA de 1954.[1]",
      link: "https://pt.wikipedia.org/wiki/Lefter_K%C3%BC%C3%A7%C3%BCkandonyadis",
      capa: "https://thumbs.dreamstime.com/b/monumento-ao-famoso-jogador-de-futebol-lefter-kucukandonyadis-fenerbahce-istambul-abandonou-setembro-%E2%80%94-turquia-158642890.jpg"
    },
    {
      data: "23/12/1888",
      titulo: "Van Gogh corta parte de uma das orelhas",
      descricao: "No dia 23 de dezembro, num acesso de loucura, o pintor holandês Vincent van Gogh corta a própria orelha esquerda e a entrega a uma prostituta",
      link: "https://agenciabrasil.ebc.com.br/radioagencia-nacional/geral/audio/2021-12/em-23-de-dezembro-de-1888-van-gogh-corta-parte-de-uma-das-orelhas",
      capa: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/CB4E/production/_104964025_van-gogh-portada.jpg.webp"
    },
    {
      data: "24/12/1914",
      titulo: "Trégua de Natal durante a Primeira Guerra Mundial",
      descricao: "Soldados britânicos e alemães trocam saudações e presentes na linha de frente durante a Primeira Guerra Mundial, em um momento de paz espontânea.",
      link: "https://pt.wikipedia.org/wiki/Trégua_de_Natal",
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Christmas_Truce_1914_IWM_HU_35801.jpg/250px-Christmas_Truce_1914_IWM_HU_35801.jpg"
    },
    {
      data: "25/12/1991",
      titulo: "Dissolução oficial da União Soviética",
      descricao: "A União Soviética é oficialmente dissolvida, pondo fim a 74 anos de regime comunista e resultando na independência de 15 repúblicas.",
      link: "https://pt.wikipedia.org/wiki/Dissolução_da_União_Soviética",
      capa: "https://s5.static.brasilescola.uol.com.br/be/2022/09/mikhail-gorbatchev.jpg"
    },
    {
      data: "26/12/2004",
      titulo: "Ajuda humanitária global após o tsunami no Oceano Índico",
      descricao: "Um enorme esforço humanitário internacional se mobiliza após o devastador tsunami no Oceano Índico, salvando milhares de vidas.",
      link: "https://pt.wikipedia.org/wiki/Tsunami_no_Índico_em_2004",
      capa: "https://c.files.bbci.co.uk/5868/production/_116823622_tsunamikhophiphigetty.jpg"
    },
    {
      data: "27/12/1936",
      titulo: " O autor do hino nacional da República da Turquia, o poeta Mehmet Akif Ersoy, morreu em Istambul.",
      descricao: "Istiklâl Marsi (A Marcha da Independência) é o hino nacional da Turquia, adotado oficialmente em 12 de março de 1921. Um total de 724 poemas foram submetidos a uma competição em escala nacional organizada para a escolha da composição original mais conveniente para esta marcha nacional",
      link: "https://pt.wikipedia.org/wiki/%C4%B0stikl%C3%A2l_Mar%C5%9F%C4%B1",
      capa: "https://cdn.trt.net.tr/images/large/rectangle/02e0/7446/f922/56e6d99c5ae08.jpg?time=1723070050"
    },
    {
      data: "28/12/1895",
      titulo: "Primeira exibição pública de filmes dos irmãos Lumière",
      descricao: "Os irmãos Lumière realizam a primeira exibição pública de filmes no Grand Café de Paris, marcando o nascimento do cinema.",
      link: "https://pt.wikipedia.org/wiki/Irmãos_Lumière",
      capa: "https://aventurasnahistoria.com.br/media/_versions/lumiere_widelg.png"
    },
    {
      data: "29/12/1845",
      titulo: "Texas se torna o 28º estado dos EUA",
      descricao: "O Texas é anexado aos Estados Unidos como o 28º estado, após anos de independência como a República do Texas.",
      link: "https://pt.wikipedia.org/wiki/História_do_Texas",
      capa: "https://s2.static.brasilescola.uol.com.br/be/2023/08/mapa-texas.png"
    },
    {
      data: "30/12/1922",
      titulo: "Criação da União Soviética",
      descricao: "A União Soviética é oficialmente fundada, marcando o início de um dos regimes políticos mais influentes do século XX.",
      link: "https://pt.wikipedia.org/wiki/Criação_da_União_Soviética",
      capa: "https://aulazen.com/wp-content/uploads/2018/06/1-3.jpg"
    },
    {
      data: "31/12/1879",
      titulo: "Thomas Edison - Lâmpada",
      descricao: "o inventor americano Thomas Edison apresentou pela primeira vez a lâmpada e iluminou as ruas da Pensilvânia com lâmpadas.",
      link: "https://super.abril.com.br/historia/thomas-edison#:~:text=A%20L%C3%82MPADA%20EL%C3%89TRICA,%2C%20ele%20brilha%2C%20gerando%20luz.",
      capa: "https://cdn.trt.net.tr/images/large/rectangle/31f8/0317/dc9a/5fd881732b675.jpg?time=1609324835"
    }
];



