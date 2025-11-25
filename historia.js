function avancar() {
  etapa++;

  if (etapa === 1) {
    // Esconder título e mostrar capítulo
    titulo.style.display = "none";
    capitulo.style.display = "block";
    fala.style.display = "none";
  } 
  else if (etapa === 2) {
    // Esconder capítulo e mostrar fala inicial
    capitulo.style.display = "none";
    fala.style.display = "block";
    fala.innerText = "A primeira coisa que ela sentiu foi o frio.";
  } 
  else if (etapa === 3) {
    fala.innerText = "Não o frio do ar — mas do chão liso, estéril, tocando diretamente suas costas como um lençol de gelo. Seus olhos ainda estavam fechados, mas havia algo… errado. A pressão latejante na parte de trás da cabeça pulsava como uma sirene muda, e quando ela tentou se mexer, o estalo do ombro contra o chão ecoou pela sala silenciosa como uma acusação.";  
} 

  else if (etapa === 4) {
    fala.innerText = "Seus pensamentos vinham em ondas curtas, partidas, desconexas.'Onde…? Por que…? Eu…'";
    
  }

  else if (etapa === 5) {
    fala.innerText = "Nada.";
  }

  else if (etapa === 6) {
    fala.innerText = "Nenhum nome. Nenhum lugar. Nenhuma lembrança. A única coisa que lhe parecia real era a sensação sufocante de que tinha tido um pesadelo horrível. Daqueles que deixam um gosto de sangue na boca — mas que escapam pelos dedos assim que se tenta lembrar.";
  }

  else if (etapa === 7) {
    fala.innerText = "O teto branco acima dela parecia girar, e as luzes fluorescentes zumbiam como insetos nervosos.";
mudarFundo ("cenario/white-room.jpg")
}

else if (etapa === 8) {
    fala.innerText = "Então, o som: o giro metálico de uma chave. Um clique suave, seguido pelo ranger lento e calculado de uma porta sendo aberta.";
}

else if (etapa === 9) {
    fala.innerText = "Ela tentou se levantar — mas o corpo não respondeu de imediato. As pernas estavam bambas, como se tivessem esquecido como funcionar. Foi apenas quando ele entrou que ela percebeu que não estava mais sozinha."
}
 
 else if (etapa === 10) {
    mostrarPersonagem("Isaac");
    fala.innerText = "Um homem jovem parou à porta. Seu jaleco impecavelmente branco refletia a luz da sala, mas havia algo no modo como ele o usava — como um disfarce, não uma função. Os cabelos castanho-claros estavam perfeitamente arrumados, milimetricamente penteados para o lado, e os óculos finos emolduravam um rosto bonito demais para parecer real. Um rosto que queria ser gentil. Queria inspirar confiança.";
 }

 else if (etapa === 11) {
    mostrarPersonagem("Isaac");
    fala.innerText = "Mas o sorriso dele não tocava os olhos."
 }

 else if (etapa === 12) {
    mostrarPersonagem("Isaac");
    fala.innerText = "Eles eram de um azul claro e estático, como vidro congelado. E no momento em que ela olhou diretamente para eles, uma náusea inexplicável subiu em seu estômago."
 }

 else if (etapa === 13) {
    mostrarPersonagem("Isaac");
    fala.innerText = "— Ah… — ele disse com uma voz suave, quase encantadora. — Está acordada. Isso é excelente. Ele se aproximou devagar, os passos soando quase como um metrônomo. — Como está se sentindo? Confusa? Com dor de cabeça, talvez? Isso é esperado. Está segura agora."
    opcoes.innerHTML = `
      <button class="btn" onclick="responder(1)">Tentar falar algo</button>
      <button class="btn" onclick="responder(2)">Tentar se levantar</button>
    `;
    btnAvancar.style.display = "none";
}



else if (etapa === 14) {
    mostrarPersonagem("Isaac");
    fala.innerText = "Ele inclinou a cabeça levemente. — Seu nome… ainda está um pouco embaçado, certo?"

}

else if (etapa === 15) {
    mostrarPersonagem("Isaac");
    fala.innerText = " Como ele sabe disso? — pensou ela, e o medo que antes era só latente agora a golpeava com força real."
}

else if (etapa === 16) {
    mostrarPersonagem("Isaac");
    fala.innerText = "Instintivamente, ela recuou no chão frio, como se quisesse se fundir à parede. A dor na cabeça latejou mais uma vez, e o teto tremulou."
}

else if (etapa === 17) {
    mostrarPersonagem("Isaac");
    fala.innerText = "O médico — ou pelo menos, o homem vestido como um — apenas observou."
}

else if (etapa === 18) {
    mostrarPersonagem("Isaac");
    fala.innerText = "— Não se preocupe — disse, estendendo uma mão enluvada, mas sem jamais tocar nela. — Você está em tratamento. Esta clínica é um lugar seguro. Seu sorriso cresceu, mas os olhos continuavam mortos. — E em breve… você vai começar a se lembrar de tudo." 
}

else if (etapa === 19) {
  esconderTodosPersonagens()
  fala.innerText = "Ela ainda estava no chão. As costas pressionadas contra a parede gelada pareciam afundar num concreto invisível, como se algo naquele quarto quisesse mantê-la ali — pequena, frágil, contida. Foi só então que ela percebeu o frio cortante no ar. Ele não era apenas físico… era um frio que parecia nascer de dentro dela."
}


}


 


function responder(opcao) {
  if (opcao === 1) {
    fala.innerText = "Doutor: — Não precisa forçar nada — continuou ele, agachando-se para ficar na altura dela, com as mãos cruzadas sobre os joelhos como quem falava com uma criança. — Nós estamos aqui para te ajudar. ";
    atualizarAfinidade(0);
  } else {
    fala.innerText = "Doutor: — Não precisa forçar nada — continuou ele, agachando-se para ficar na altura dela, com as mãos cruzadas sobre os joelhos como quem falava com uma criança. — Nós estamos aqui para te ajudar.";
    atualizarAfinidade(0);
  }

  opcoes.innerHTML = "";
  btnAvancar.style.display = "inline-block";
}







const chapter1 = [
  {
    fala: "lalalalalal",
    personagem: "isaac-b.png",
    cenario: "white-room.png",
    opcoes: [
    {texto: "exemplo", proximaEtapa: 20},
    {texto: "exemplo", proximaEtapa: 21 }
    ]
  }
];


