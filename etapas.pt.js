     etapas = [
    {
      fala: "A primeira coisa que ela sentiu, antes mesmo do frio gélido do chão sob suas costas, foi uma pontada aguda na nuca — como se algo tivesse esmagado sua cabeça de dentro para fora.",
    },
    {
      fala: "O mundo ao seu redor girava. Seus olhos ardiam ao tentar se abrir. Cada pensamento era como atravessar um campo de vidro estilhaçado.",
    },
    {
      fala: "\"Onde estou?\"",
      cenario: "cenario/quarto.png",
      personagem: { nome: "destiny", expressao: "medo", lado: "esquerda"}
    },
    {
      fala:"Tentou se levantar de supetão — erro. Uma onda de tontura a tomou, como se o próprio chão tivesse puxado seu corpo de volta. Ela cambaleou, apoiando-se na parede fria, arfando. O quarto ao redor era branco, esterilizado, mas havia algo... errado. Não era a sujeira nas frestas, nem a lâmpada fria que piscava intermitente."
    },
    {
      fala:"Era o frio. Aquele frio que atravessava a pele, os músculos, e se enroscava nos ossos. O tipo de frio que não vem de fora — mas de dentro."
    },
    {
     fala:"E então, o vazio: ela não sabia quem era. Seu nome? Sua idade? Uma névoa espessa encobria tudo. O medo veio rastejando, pegajoso, incontrolável. E paralisante.",
     personagem: { nome: "destiny", expressao: "medo", lado: "esquerda"}
    },
    {
      fala:"Foi então que ela ouviu passos. Firmes. Calmos. Compassados.",
      personagem: { nome: "destiny", expressao: "medo", lado: "esquerda"}
    },
    {
      fala:"A maçaneta girou. O som metálico de uma chave rodando a fez recuar instintivamente. A porta se abriu... e ele entrou.",
       personagem: { nome: "destiny", expressao: "medo", lado: "esquerda"}
    },
    {fala:"Um homem alto, de postura impecável, usando um terno cinza tão perfeitamente passado que destoava do ambiente decadente ao redor. Sua aparência era sóbria, quase hipnótica: pele pálida demais, olhos de um verde acinzentado afiado como bisturis. O cabelo escuro estava penteado para trás com uma precisão quase clínica. Nada naquele homem parecia fora do lugar — e talvez fosse isso que tornava sua presença tão... perturbadora.",
      personagens: [
         { nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"}
      ]
      },
      {
        fala:"Ele a observava com intensidade cirúrgica. Não apenas seu corpo, mas suas reações. Seus olhos. Sua hesitação.",
         personagens: [
         { nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"}
         ]
      },
      {
        fala:"Sem dizer uma palavra, caminhou até a única cadeira no canto do quarto. Sentou-se com a coluna tão reta que parecia uma marionete em tensão. As mãos cruzadas sobre o joelho, os pés alinhados. Estático. Calculado. Contido.",
         personagens: [
         { nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"}
         ]
      },
      {
        fala:"Então, finalmente, ele falou — com uma voz calma demais, firme demais, como alguém que tem total controle da situação.",
       personagens: [
         { nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"}
         ]
      },
      {
        fala:"“Como se sente, Destiny?”",
        personagens: [
         { nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"}
         ]
      },
      {
        fala:"Ao ouvir aquele nome, um gosto amargo tomou sua boca. Era familiar. Era dela. Mas também era como ouvir o nome de um estranho que você jurava ter conhecido em outra vida.",
      personagens: [
         { nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"}
         ]
      },

      {personagens: [
         { nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"}
         ],
         opcoes: [
          {
            texto:"“Eu... estou bem, eu acho...",
            efeito: () => atualizarAfinidade("Isaac", 10),
            proximaEtapa: 15
          },
          {
            texto: "“Eu não sei quem sou. O que é isso? Onde estou?”",
            efeito: () => {atualizarAfinidade("Isaac", 5), atualizarInsanidade(2) },
            proximaEtapa: 16
          },
          {
            texto:"“Quem é você? Por que eu tô aqui? O que fizeram comigo?”",
             efeito: () => {atualizarAfinidade("Isaac", 0), atualizarInsanidade(7)},
             proximaEtapa: 17
             
      }]},

      {
        fala:"O doutor sorri levemente. Mas seu olhar não suaviza. Ele anota algo. “Muito bem. Começamos com abertura emocional. Isso é promissor.”",
        personagens: [
         { nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"feliz", lado: "direita"}
         ], proximaEtapa: 18     },


          {
        fala:"Ele inclina a cabeça, como quem examina uma reação esperada. “Memória parcial. Vamos avaliar mais tarde. Por enquanto, se concentre no presente.”",
        personagens: [
         { nome: "destiny", expressao: "neutra", lado: "esquerda"},
         {nome: "isaac", expressao:"preocupado", lado: "direita"}
         ],
         proximaEtapa: 18
      },

     {
        fala:"Ele suspira lentamente, sem mudar o tom. “Agressividade é comum no início do processo. Mas não se preocupe. Já passamos por isso antes.” A tensão no ar aumenta. Ele não parece ameaçado — parece preparado.",
        personagens: [
         { nome: "destiny", expressao: "raiva", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"}
         ], proximaEtapa:18
      },


      {
        fala:"Seus olhos o analisaram — sua postura, suas roupas, o jeito impecável com que cruzava os dedos. Aquele homem não combinava com aquele lugar. Elegante demais. Imaculado demais. Como uma mancha de luxo em um cenário abandonado.",
        personagens: [
         {nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"preocupado", lado: "direita"}
         ]
      },


      {
        fala:"“Bom… imagino que você tenha muitas perguntas.”",
        personagens: [
         {nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"preocupado", lado: "direita"}
         ]
      },
      {
        fala:"O som de sua voz fez o corpo dela reagir instintivamente — um salto para trás, um susto silencioso. Era uma voz que doía de tão familiar. Algo dentro dela se contorceu. Ela já o ouvira antes.",
        personagens: [
         {nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"preocupado", lado: "direita"}
         ]
      },
      {
        personagens: [
         {nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"preocupado", lado: "direita"}
         ],
         opcoes: [
          {
          texto: "“Você… parece familiar. Quem é você? Já nos conhecemos?”",
          efeito: () => {atualizarAfinidade("Isaac", 5), atualizarInsanidade(-2)},
          proximaEtapa: 22
          }, 
          {
            texto:"“Chega dessa palhaçada, onde estou? Que lugar é esse?!”",
            efeito: () => {atualizarAfinidade("Isaac", 0), atualizarInsanidade(5)},
             proximaEtapa: 25
          },
          {
            texto:"Permanecer em silêncio, apenas observando",
            efeito: () => {atualizarAfinidade("Isaac", 10),atualizarInsanidade(-5)}, 
            proximaEtapa: 28
          }
         ]
      },
      {
        fala:"“Já nos encontramos, sim. De certa forma. Meu nome é Isaac Bramfield. Medico psiquiatra responsavel pelo seu caso.”",
       personagens: [
         {nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"feliz", lado: "direita"}
         ],
      },
      {
        fala:"Mas antes que ela possa perguntar mais, ele vira de costas e acrescenta friamente: “O foco agora deve ser em você.”",
 personagens: [
         {nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"}
         ],
      },
      {
fala:"A conversa muda. O nome dele permanece no ar, sem contexto, sem segurança.",
 personagens: [
         {nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"}
         ], proximaEtapa: 30
      },

      {
        fala:"Por um breve instante, o controle em sua face se quebra — os lábios se apertam, o maxilar tensiona.",
 personagens: [
         {nome: "destiny", expressao: "raiva", lado: "esquerda"},
         {nome: "isaac", expressao:"raiva", lado: "direita"}
         ],
      },
      {
        fala:"“Você está onde precisa estar.” — ele responde seco. Mas então retoma o tom suave e impessoal: “Esse tipo de reação é comum nos primeiros dias.”",
 personagens: [
         {nome: "destiny", expressao: "raiva", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"}
         ],
      },
      {
        fala:"Ele anota algo num caderno que tirou do bolso. Destiny sente que foi classificada, não respondida. Algo naquilo o irritou — mas ele jamais demonstraria abertamente.",
     personagens: [
         {nome: "destiny", expressao: "raiva", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"}
     ], proximaEtapa: 30
      },
      {
        fala:"Ele sorri de leve. “Prefere observar antes de agir? Bom sinal.” Ele se levanta lentamente da cadeira e se aproxima alguns passos. “Você costumava fazer isso também.”",
 personagens: [
         {nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"feliz", lado: "direita"}
     ]
      },
      {
        fala:"Ela congela. “O quê...?” Mas ele não responde — apenas volta a sentar. Seu silêncio diz mais do que qualquer resposta.",
 personagens: [
         {nome: "destiny", expressao: "assustada", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"} ]
      },
      {
        fala:"O doutor permaneceu em silêncio por um tempo desconfortavelmente longo, observando cada respiração de Destiny como quem avalia uma criatura ferida — ou uma máquina quebrada.",
personagens: [
         {nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"preocupado", lado: "direita"}
         ], /////30
      },
      {
        fala:"“Destiny... sua família não viu outra escolha a não ser te trazer para cá.”",
        personagens: [
         {nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"preocupado", lado: "direita"}
         ],
      },
      {
        fala:"O ar congelou dentro dos pulmões dela. Família? Ela nem sabia que tinha uma. O nome soava falso em seus ouvidos — como algo inventado, colocado ali para dar contexto a uma história que ela nunca viveu.",
 personagens: [
         {nome: "destiny", expressao: "assustada", lado: "esquerda"},
         {nome: "isaac", expressao:"preocupado", lado: "direita"}
         ],
      },
      {
        fala:"O estômago dela revirou. Uma náusea quente subiu pela garganta. Ela encostou-se à parede de novo, sentindo as batidas do próprio coração ecoarem no vazio do quarto.",
personagens: [
         {nome: "destiny", expressao: "assustada", lado: "esquerda"},
         {nome: "isaac", expressao:"preocupado", lado: "direita"}
         ],
      },
      {
fala:"Por que não conseguia lembrar de nada? Nada fazia sentido. E ainda assim, aquele homem falava com a calma de quem repete um script velho, como se Destiny fosse só mais uma… só mais um caso clínico arquivado.",
personagens: [
         {nome: "destiny", expressao: "assustada", lado: "esquerda"},
         {nome: "isaac", expressao:"preocupado", lado: "direita"}
         ],
      },
      {
        fala:"“Estamos aqui para te ajudar a se recuperar.” — ele disse, com pausas cronometradas, como se ensaiadas. “Esperamos contar com a sua colaboração.”",
personagens: [
         {nome: "destiny", expressao: "assustada", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"}
         ],
      },
      {
        fala:"Aquela última frase… Soava mais como um aviso do que um pedido. Como se a não colaboração tivesse um preço.",
personagens: [
         {nome: "destiny", expressao: "assustada", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"}
         ],
      },
      { personagens: [   //////37
         {nome: "destiny", expressao: "assustada", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"}
         ],
         opcoes:[
          {
            texto:"“Recuperar… de quê? O que aconteceu comigo? Por que eu não lembro de nada?”",
            efeito: () => {atualizarAfinidade("Isaac", 10),atualizarInsanidade(-1)},
            proximaEtapa: 38
          },
          {
            texto:"“Para de falar em círculos! Me diz agora o que fizeram comigo!”",
          efeito: () => {atualizarAfinidade("Isaac", 0),atualizarInsanidade(4) }, 
         proximaEtapa: 40
          },
          {
            texto:"“Tudo bem. Eu… vou cooperar.”",
            efeito: () => {atualizarAfinidade("Isaac", 5), atualizarInsanidade(-2)}, 
            proximaEtapa: 43
          }]
         },

         {
          fala:"Dr. Bramfield levanta os olhos de suas anotações, observando-a como um professor paciente diante de uma aluna confusa.",
personagens: [
         {nome: "destiny", expressao: "assustada", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"}
         ],
         },
         {
          fala:"“Tudo em seu tempo, Destiny. O que você sente agora é esperado.” Ele fecha o caderno com um estalo seco. “Você vai ficar bem.”",
          personagens: [
         {nome: "destiny", expressao: "assustada", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"},], proximaEtapa: 46
         },
         {
         fala:"Ela avança um passo, e por um segundo seus olhos se encontram — o dela, desesperado. O dele… tranquilo demais.",
         personagens: [
         {nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"} ////40
         ]
         },
         {
          fala:"“Agressividade latente. É um padrão recorrente.” Ele abre o caderno de novo, fazendo anotações. “Mas compreensível, dado o histórico.”",
          personagens: [
         {nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"}
         ]
         },
         {
          fala:"Histórico? O que ele quer dizer com isso? Mas ele já se calou novamente.",
personagens: [
         {nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"feliz", lado: "direita"}
         ], proximaEtapa: 46
         },
          {
          fala:"Dr. Bramfield apenas observa. Então, com um gesto lento, abre o caderno e escreve algo.",
         personagens: [
         {nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"} ////43
         ]
         },
         {
          fala:"“Obediência inicial. Fragilidade emocional. Pode ser útil no processo.”",
 personagens: [
         {nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"}
         ]
         },
         {
          fala:"Útil.Não ‘boa paciente’. Não ‘em recuperação’. Apenas… útil.",
personagens: [
         {nome: "destiny", expressao: "medo", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"}
         ]
         },
         {
          fala:"“Um enfermeiro virá buscá-la em breve. Recomendo que descanse… o processo começa amanhã.”",
 personagens: [
         {nome: "destiny", expressao: "assustada", lado: "esquerda"},
         {nome: "isaac", expressao:"neutra", lado: "direita"} ////46
         ]
         },
         {
          fala:"E com isso, ele sai do quarto — sem olhar para trás. A porta se fecha com um som metálico pesado, como uma cela. Destiny permanece sozinha com o som da respiração e uma pergunta sufocante:",
           personagem:  {nome: "destiny", expressao: "medo", lado: "esquerda"},
         },
         {
          fala:"“O que fizeram comigo?”",
           personagem:  {nome: "destiny", expressao: "medo", lado: "esquerda"},
         },
         {
          fala:"O silêncio do quarto era denso. Quase sólido. Destiny se encolheu na cama dura, tentando encontrar um ponto de equilíbrio entre as perguntas sem respostas e o vazio cruel em sua mente",
        personagem:  {nome: "destiny", expressao: "medo", lado: "esquerda"},
        },
        {
          fala:"Mas foi quando fechou os olhos… Que tudo começou a queimar.",
cenario:"cenario/black.jpg"
        },
        {
          fala:"O cheiro de fumaça. O calor sufocante. A madeira estalando. As chamas lambendo as paredes de uma casa que ela conhecia — ou ao menos pensava que conhecia. E aquela voz…",

        },
        {
          fala:"“Destiny...”",

        },
        {
          fala:"Era suave. Familiar. Mas quebrada — como uma fita sendo rebobinada do jeito errado.",
/////53
        },
        {
          fala: "“Destiny, não!” O grito rasgou o ar.",

        },
        {
          fala:"Ela não conseguia ver o rosto. Mas sentia o desespero. O medo. A urgência.",

        },
        {
          fala:"O grito ficou preso dentro dela, vibrando como um eco infinito. E então… As chamas a devoraram.",

        },
        {
          fala: "Destiny acordou de sobressalto, com o corpo encharcado de suor. Garganta seca, sem ar, olhos arregalados. Seus dedos tremiam ao apertar os lençóis — como se ainda estivessem tentando escapar de um incêndio que já não existia.",

        },
        {
          fala:"“Meu Deus… o que é isso…?” Ela sussurrou. Mas as palavras pareciam cacos de vidro dentro da boca.",

        },
        {
          fala: "Sem perceber, lágrimas escorriam pelo seu rosto. Silenciosas, insistentes. Sem um aviso prévio. Foi só quando ouviu a voz dele que percebeu que não estava sozinha.",

        },
        {
          fala: "“Olá.”",

        },
        {
          fala:"A voz era suave. Quase um sussurro. “Eu trouxe o seu remédio. Não foi minha intenção te acordar…”",

        },
        {
          fala:"O enfermeiro estava parado perto da porta, ele tinha um rosto gentil, olhos atentos mas cada movimento seu era contido, calculado. Como se cada passo seguisse um manual invisível.",
          opcoes: [      ////////62
            {
              texto: "Devia ter avisado antes de sair entrando, acha não?",
              efeito: () => {atualizarAfinidade("Jordan", -5), atualizarInsanidade(1)},
              proximaEtapa: 63
            },
            {
              texto: "“Tá tudo bem… só… foi um pesadelo que me acordou, não você.”",
              efeito: () => {atualizarAfinidade("Jordan", 5), atualizarInsanidade(-3)},
              proximaEtapa:66
            },
            {
              texto:"“Você pode… só ficar aqui por um momento?”",
              efeito: () => {atualizarAfinidade("Jordan",10), atualizarInsanidade(-5)},
              proximaEtapa:68
            }
          ]
        },
        {
          fala:"O enfermeiro ergue uma sobrancelha, surpreso. Mas não rebate.",

        },
        {
          fala:"“Tem razão.” — ele diz calmamente, abaixando o olhar. “Não era minha intenção te incomodar.”",

        },
        {
          fala:"Mas a voz dele está mais distante agora. Mais fria. Ele deixa o copo d’água e o comprimido na mesinha sem dizer mais nada.",
          proximaEtapa:71

        },
        {
          fala:"O enfermeiro observa por um segundo. Então dá de ombros levemente.",

        },/////66
        {
          fala:"“Pesadelos são comuns nas primeiras semanas.” Ele entrega o remédio com um gesto metódico. “Tente dormir novamente após tomá-lo. É o que o doutor recomendaria.”",
          proximaEtapa:71

        },
        {
          fala:"O enfermeiro hesitou por um instante, como se calculasse a quebra da rotina. Mas então, assente com um gesto suave e caminha até uma cadeira no canto do quarto.",

        },
        {
          fala:"“Cinco minutos.” Ele diz, sentando-se com a mesma elegância silenciosa de um bibliotecário. “Depois preciso seguir com os próximos pacientes.”",

        },
        {
          fala:"O gesto é pequeno. Mas humano. E por um breve segundo, Destiny sente que não está tão sozinha ali dentro.",

        },
        {
          fala:"O quarto caiu em um silêncio denso. Destiny não falou. Não se mexeu. Apenas ficou ali, com a respiração presa e o coração acelerado. Mas então, a voz dele cortou a névoa.",
        },
        {
          fala:"“Eu não sei o que aconteceu com você antes de chegar aqui… Mas estou torcendo pela sua recuperação.”",

        },
        {
          fala:"Havia algo mecânico em sua fala. Ensaiado. Como se já tivesse dito aquilo dezenas de vezes. Mas ainda assim… havia um traço de sinceridade por baixo da superfície.",

        },
        {
          fala:"Destiny o encarou, tentando decifrar seu rosto. “Eu… não lembro de nada.” — sussurrou. “Mas acabei de sonhar com uma voz. Ela me chamava. Parecia desesperada… e eu a conhecia.”",

        },
        {
          fala: () => {
            if (afinidade["Jordan"] <15 ){
              return "Jordan respirou fundo, recuando um passo e cruzando os braços com leveza. Seu tom era calmo, mas distante — como alguém lendo um protocolo. “É comum ter pesadelos após traumas profundos. O importante agora é focar na sua recuperação.” Ele não parecia desconfortável… apenas acostumado. Como se estivesse observando um sintoma, não uma pessoa."
            } else {
              return "Jordan se aproximou em silêncio, e com um gesto cuidadoso, tocou a mão de Destiny — leve, sem pressionar. Seu olhar estava fixo nela, com uma delicadeza rara. “Pesadelos… são comuns quando a mente está tentando se proteger. Mas você vai ficar bem.” — disse, agora com uma doçura sutil na voz. “Eu acredito nisso.” A ternura no tom dele não parecia ensaiada. Era sincera. E por um momento, Destiny sentiu que não estava completamente sozinha."
            }
          },
            personagem: () => {
    if (afinidade["Jordan"] < 15) {
      return { nome: "destiny", expressao: "raiva", lado: "direita" };
    } else {
      return { nome: "destiny", expressao: "sorriso", lado: "direita" };
    }
  }
        },



















   

  ]