let etapa = 0;
let personagemAtual = "";
let personagemEscolhido = null;
let afinidade = {
    Isaac: 0,
    Eden: 30,
    Jordan: 10,
    Anthony: 10
};
let insanidadeDestiny = 0;
let jogoFinalizado = false;
let idiomaAtual = localStorage.getItem("idioma") || "pt";
let personagensEmCena = {};

function mudarIdioma() {
  const select = document.getElementById("idioma");
  idiomaAtual = select.value;
  localStorage.setItem("idioma", idiomaAtual);

  atualizarTextosIdioma();

  etapa = 0;
  avancar();
  carregarCena(1);
}

function atualizarTextosIdioma() {
  const texto = traducoes[idiomaAtual];
  document.getElementById("capitulo").innerText = texto.capitulo;
  document.querySelector("button[onclick='iniciarJogo()']").innerText = texto.btnJogar;
  document.querySelector("button[onclick='carregarJogo()']").innerText = texto.btnCarregar;
  document.querySelector("button[onclick='abrirOpcoes()']").innerText = texto.btnOpcoes;
  document.querySelector("button[onclick='sair()']").innerText = texto.btnSair;
  document.getElementById("btnSalvar").innerText = texto.salvar;
  document.querySelector("#opcoesMenu h2").innerText = texto.config;
  document.querySelector("#opcoesMenu button").innerText = texto.voltar;
  document.querySelector("label[for='idioma']").innerText = texto.idioma;
}

function mostrarPersonagem(p) {

  const nomeFormatado = p.nome.charAt(0).toUpperCase() + p.nome.slice(1);
  const barra = document.getElementById("afinidade" + nomeFormatado);
  if (barra) barra.style.display = "block";

    // Verifica se esse personagem já está na cena com a mesma posição e expressão
  const idUnico = `${p.nome}_${p.expressao}_${p.lado}`;
  if (personagensEmCena[idUnico]) return; // Já está, não precisa reaparecer

  personagensEmCena = {}; // Limpa tudo (caso esteja mudando os personagens)
  personagensEmCena[idUnico] = true; // Marca como presente agora


  let imagemID;
  if (p.lado === "direita") {
    imagemID = "personagemDireita";
  } else if (p.lado === "esquerda") {
    imagemID = "personagemEsquerda";
  } else {
    imagemID = "imagemPersonagem"; // para centro (opcional)
  }

  const imagem = document.getElementById(imagemID);
  imagem.src = `personagens/${p.nome.toLowerCase()}-${p.expressao || "neutra"}.png`;
  imagem.classList.add("visivel");

  atualizarAfinidade(nomeFormatado, 0);
}



function atualizarInsanidade(valor) {
  console.log("Insanidade atual da Destiny:", insanidadeDestiny);
  insanidadeDestiny += valor;

  if (insanidadeDestiny > 100) insanidadeDestiny = 100;
  if (insanidadeDestiny < 0) insanidadeDestiny = 0;

  const barra = document.getElementById("insanidadeDestiny");
  if (barra) {
    barra.style.width = insanidadeDestiny + "%";
  }

}

function mostrarCapitulo(titulo, proximaEtapa) {
  const capituloDiv = document.getElementById("capitulo");
  capituloDiv.textContent = titulo;
  capituloDiv.style.display = "block";
  capituloDiv.style.opacity = "0";

  // Efeito de fade in
  setTimeout(() => {
    capituloDiv.style.transition = "opacity 2s ease";
    capituloDiv.style.opacity = "1";
  }, 100);

  // Depois de um tempo, some com o título e avança
  setTimeout(() => {
    capituloDiv.style.opacity = "0";
    setTimeout(() => {
      capituloDiv.style.display = "none";
      etapa = proximaEtapa;
      avancar();
    }, 1000);
  }, 2500); // tempo que o título aparece antes de sumir
}



function esconderTodosPersonagens() {
document.querySelectorAll(".personagem-img").forEach(imagem => {
  imagem.classList.remove("visivel");
});


document.querySelectorAll('[id^="afinidade"]').forEach(barra => {
  barra.style.display = "none";
});
}





function atualizarAfinidade(personagem, valor) {
  console.log(`Afinidade de ${personagem}: ${afinidade[personagem]}`);
  afinidade[personagem] += valor;

    if (afinidade[personagem] > 100) afinidade[personagem] = 100;
    if (afinidade[personagem] < 0) afinidade[personagem] = 0;

    const barra = document.getElementById("nivel" + personagem);
    if (barra) {
      barra.style.width = afinidade[personagem] + "%";
    }
}

const fala = document.getElementById("fala");
const opcoes = document.getElementById("opcoes");
const btnAvancar = document.getElementById("btnAvancar");
const titulo = document.getElementById("etapaTitulo");
const capitulo = document.getElementById("capitulo");


function iniciarJogo() {
  jogoFinalizado = false;
  tocarMusicaJogo();
  etapa = 0;

  const idioma = localStorage.getItem("idioma") || "pt";
  const script = document.createElement("script");
  script.src = `etapas.${idioma}.js`;

   script.onload = () => {

  document.getElementById("menuInicial").style.display = "none";
  document.getElementById("jogo").style.display = "block";
  document.getElementById("containerTexto").style.display = "block";
  document.getElementById("capitulo").style.display = "block"
  document.getElementById("btnSalvar").style.display = "block";

    const containerTexto = document.getElementById("containerTexto");
  if (containerTexto) {
    containerTexto.innerHTML = `
      <p id="fala" style="display:none;"></p>
      <div id="opcoes"></div>
      <button id="btnAvancar" class="btn" onclick="avancar()">OK</button>
    `;
  }
  carregarCena(1);
};

document.body.appendChild(script);
}



function carregarCena(numeroEtapa) {
  const capitulo = document.getElementById("capitulo");
  const fala = document.getElementById ("fala");

  if (numeroEtapa === 1) {

    capitulo.classList.remove("mostrar");
    capitulo.style.display = "block";
    fala.style.display = "none";

    setTimeout(() => {
    capitulo.classList.add("mostrar");
    }, 100);
  
  setTimeout(() => {
  fala.style.display = "block";
 }, 2000); }
 else { 
  avancar();
 }
}



function carregarJogo() {
  const progresso = localStorage.getItem("saveSlot1");

  if (progresso) {
    const dados = JSON.parse(progresso);

    etapa = dados.etapa;
    afinidade = dados.afinidade;
    personagemAtual = dados.personagemAtual;
    personagemEscolhido = dados.personagemEscolhido;
    insanidadeDestiny = dados.insanidadeDestiny;
    idiomaAtual = dados.idiomaAtual;

    document.getElementById("menuInicial").style.display = "none";
    document.getElementById("jogo").style.display = "block";

    atualizarAfinidade("isaac", 0);
    carregarCena(etapa);
  } else {
    alert("Nenhum save encontrado!");
  }
}

function salvarJogo() {
  const progresso = {
    etapa,
    personagemAtual,
    personagemEscolhido,
    afinidade,
    insanidadeDestiny,
    idiomaAtual
   
  };
  localStorage.setItem("saveSlot1", JSON.stringify(progresso));
  alert("Jogo salvo!");
}

function abrirOpcoes() {
  document.getElementById("menuInicial").style.display = "none";
  document.getElementById("opcoesMenu").style.display = "block";
}

function voltarAoMenu() {
  document.getElementById("opcoesMenu").style.display = "none";
  document.getElementById("menuInicial").style.display = "block";
  document.getElementById("containerTexto").style.display = "none";
  document.getElementById("fundoCenario").style.display = "none";
  document.getElementById("barraContainer").style.display = "none";
  
  tocarMusicaMenu();
  
}

function sair() {
  document.getElementById("containerTexto").style.display = "none";
  alert("Até logo...");
}


function mudarFundo(caminhoImagem) {
  const fundo = document.getElementById("fundoCenario");
  fundo.style.backgroundImage = `url('${caminhoImagem}')`;

}



function avancar() {
  console.log("Etapa atual:", etapa);
  personagensEmCena = {};
  esconderTodosPersonagens();

  if (jogoFinalizado) return;

  

  const dado = etapas[etapa];  
  if (!dado) {
    finalizarJogo();
    return;
  }

  const fala = document.getElementById("fala");
  const textoFala = typeof dado.fala === "function" ? dado.fala() : dado.fala;
  fala.innerText = textoFala || "";
  fala.style.display = "block";

  if (Array.isArray(dado.personagens)) {
    dado.personagens.forEach(p => {
      if (p && p.nome) {
        mostrarPersonagem(p);
      }
    });
  }   else if (dado.personagem) {
  const p = typeof dado.personagem === "function" ? dado.personagem() : dado.personagem;
  if (p && p.nome) {
    mostrarPersonagem(p);
  }
}

  // muda o fundo
  if (dado.cenario) {
    mudarFundo(dado.cenario);
  }

  if (etapa === 0) {
    capitulo.style.display = "block";
  } else {
    capitulo.style.display = "none";
  }

  // trata as opções
  const opcoes = document.getElementById("opcoes");
  const btnAvancar = document.getElementById("btnAvancar");

  if (dado.opcoes) {
    opcoes.innerHTML = "";
    btnAvancar.style.display = "none";

    dado.opcoes.forEach(op => {
      const botao = document.createElement("button");
      botao.className = "btn";
      botao.innerText = op.texto;

      botao.onclick = () => {
        if (op.efeito) { 
          op.efeito();
        }

        if (op.acaoFinal) {
          verificarFinal();
          return;}

          if (op.proximaEtapa !== undefined) {
          etapa = op.proximaEtapa; 
  }   avancar();
      };

      opcoes.appendChild(botao);
  });
  } else {
    opcoes.innerHTML = "";
    btnAvancar.style.display = "inline-block";

    if (dado.proximaEtapa !== undefined) {
    etapa = dado.proximaEtapa;
  } else {
    etapa++; }
  }
}


window.onload = () => {
  tocarMusicaMenu();
  const select = document.getElementById("idioma");
  select.value = idiomaAtual;
  atualizarTextosIdioma();
};


const audioMenu = document.getElementById("audioMenu");
const audioJogo = document.getElementById("audioJogo");

function tocarMusicaMenu() {
  audioJogo.pause();
  audioMenu.currentTime = 0;
  audioMenu.volume = 0.4;
  audioMenu.play();
}

function tocarMusicaJogo() {
  audioMenu.pause();
  audioJogo.currentTime = 0;
  audioJogo.volume = 0.4;
  audioJogo.play();
}