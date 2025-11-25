const finais = {
  isaac_bom: {
    texto: "Destiny se encolheu um pouco mais sob os lençóis, ainda tremendo, o copo d’água meio esquecido na mão. Jordan permanecia ali, calado, apenas observando-a com aquela calma meticulosa. Nenhum gesto fora do lugar. Nenhuma palavra desnecessária. Mas, em outro lugar — talvez atrás de uma parede espelhada, ou em alguma sala escura do hospital — o doutor observava tudo. E, por um instante, sua expressão vacilou. Ele havia planejado analisar Destiny. Guiá-la. Corrigi-la. Mas agora… Ele começava a sentir.",
    corTexto: "#ffffff"
  },
   isaac_ruim: {
    texto: "Destiny se encolheu sob os lençóis, o copo d’água ainda trêmulo na mão. A respiração descompassada. Os olhos úmidos. Jordan permanecia ao lado da cama. Silencioso. Calmo. Metódico. Mas havia algo diferente em seu olhar agora — algo hesitante. E, do outro lado das câmeras, Dr. Bramfield observava. A caneta parou. Os dedos bateram uma vez na mesa. Pequenos gestos. Quase imperceptíveis. Mas, para alguém como ele, já diziam muito. Ele veio para guiar. Para ajustar. Mas Destiny… testava seus limites. E isso o irritava mais do que ele estava disposto a admitir. “Vamos ver até onde você aguenta.” Ele murmurou para si mesmo, com a voz polida, mas o olhar era uma lâmina afiada escondida sob luvas de veludo..",
    corTexto: "#ff2222"
  },
   isaac_neutro: {
    texto: "Final neutro com Dr. Isaac...",
    corTexto: "#aaaaaa"
  },

  // Finais com Jordan
  jordan_bom: {
    texto: "Final bom com Jordan...",
    corTexto: "#ffffff"
  },
  jordan_ruim: {
    texto: "Final ruim com Jordan...",
    corTexto: "#ff4444"
  },
  jordan_neutro: {
    texto: "Final neutro com Jordan...",
    corTexto: "#aaaaaa"
  },

  // Finais sem romance
  sozinho_insano: {
    texto: "Final solitário, completamente insano...",
    corTexto: "#ff0000"
  },
  sozinho_sadio: {
    texto: "Final solitário, mas consciente...",
    corTexto: "#cccccc"
  }
};

function verificarFinal() {
  let finalID;

  
  if (personagemEscolhido === "isaac") {
    if (afinidade.isaac >= 70 && insanidadeDestiny < 50) {
      finalID = "isaac_bom";
    } else if (afinidade.isaac < 30 || insanidadeDestiny >= 80) {
      finalID = "isaac_ruim";
    } else {
      finalID = "isaac_neutro";
    }
  } else if (personagemEscolhido === "jordan") {
    if (afinidade.jordan >= 70 && insanidadeDestiny < 50) {
      finalID = "jordan_bom";
    } else if (afinidade.jordan < 30 || insanidadeDestiny >= 80) {
      finalID = "jordan_ruim";
    } else {
      finalID = "jordan_neutro";
    }
  } else {
    if (insanidadeDestiny >= 70) {
      finalID = "sozinho_insano";
    } else {
      finalID = "sozinho_sadio";
    }
  }


finalizarJogo(finalID);
}



function finalizarJogo(finalID) {
  console.log("Final escolhido:", finalID);
if (!finais[finalID]) {
  console.error("Final não encontrado no objeto finais!");
}
  jogoFinalizado = true;

  const final = finais[finalID];

  if (!final) {
    alert("Final Desconhecido.");
    return;
  }

  
  document.getElementById("fala").style.display = "none";
  document.getElementById("opcoes").style.display = "none";
  document.getElementById("btnAvancar").style.display = "none";
  document.getElementById("personagemEsquerda").style.display = "none";
  document.getElementById("personagemDireita").style.display = "none";
  document.getElementById("btnSalvar").style.display = "none";
  document.getElementById("fundoCenario").style.display = "none";

  const containerTexto = document.getElementById("containerTexto");
  containerTexto.innerHTML = `
    <p style="font-size: 24px; color: ${final.corTexto}; margin-top: 40px;">
      ${final.texto}
    </p>
    <button class="btn" onclick="voltarAoMenu()">Voltar ao Menu</button>
  `;
  containerTexto.style.display = "block";

    window.scrollTo({ top: 0, behavior: 'auto' });
  setTimeout(() => {
    const scrollInterval = setInterval(() => {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        clearInterval(scrollInterval); // Para quando chegar no fim da página
      } else {
        window.scrollBy({ top: 1, behavior: 'smooth' }); // Rola devagar para baixo
      }
    }, 30); // Quanto menor o número, mais rápida a rolagem
  }, 500); // Espera 500ms antes de começar a rolar
 // document.getElementById("menuInicial").style.display = "block";

}