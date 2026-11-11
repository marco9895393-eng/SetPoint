// SetPoint Vôlei — funcionalidades demonstrativas do projeto
const PRODUTOS = [
    {
        "id": "bola-mikasa-v200w",
        "nome": "Bola Mikasa V200W",
        "categoria": "Bolas",
        "preco": 1099.99,
        "precoTexto": "R$ 1.099,99",
        "img": "https://cdn.vnda.com.br/mikasa/2024/11/29/13_31_40_684_13_11_0_084_bola20oficial20de20voleibol20mikasa20v200w_1.jpg?v=1732897905",
        "alt": "Bola Mikasa V200W",
        "link": "https://www.mikasa.com.br/MK000062.html"
    },
    {
        "id": "bola-penalty-8-1-pro",
        "nome": "Bola Penalty 8.1 Pro",
        "categoria": "Bolas",
        "preco": 599.99,
        "precoTexto": "R$ 599,99",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFgq3q3JexnbT49FIS8twiBA35tAvwsvKMTdcNUZrsnCVq20Rln3H1ciE&s=10",
        "alt": "Bola Penalty 8.1 Pro",
        "link": "https://www.penalty.com.br/bola-volei-penalty-8-1-pro/p?srsltid=AfmBOooP0olr6kJpYpwI5AQTUDfay3vpWPLEKtF5F_eLNGSk97AHCuls"
    },
    {
        "id": "bola-molten-v5m5000",
        "nome": "Bola Molten V5M5000",
        "categoria": "Bolas",
        "preco": 799.9,
        "precoTexto": "R$ 799.90",
        "img": "https://combatkimonos.com.br/wp-content/uploads/2025/07/Volei-V5M-5000-1-600x600.jpeg",
        "alt": "Bola Molten V5M5000",
        "link": "https://www.molten.com.br/bola-de-volei-molten-v5m5000-volleyball-fivb-approved-com-flistatec-1"
    },
    {
        "id": "bola-penalty-vp5000",
        "nome": "Bola Penalty vp5000",
        "categoria": "Bolas",
        "preco": 189.99,
        "precoTexto": "R$ 189,99",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM4T2HA4voSXvU8GtbuAcUgY_3Jb-2fyWbNs1tO6flBIE5GxoZ_w6D74w&s=10",
        "alt": "Bola penalty vp 5000",
        "link": "https://www.penalty.com.br/bola-volei-penalty-vp-5000-x/p?srsltid=AfmBOopKu86UGAM5KcqKAsxf6UFwC5bcUhoQbEkS1gCs0eBUecyiBhjF"
    },
    {
        "id": "bola-mikasa-v360w",
        "nome": "Bola Mikasa v360W",
        "categoria": "Bolas",
        "preco": 219.99,
        "precoTexto": "R$ 219,99",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWqXczrcIV0AJQ0gTJzaaIe6rgdRVoO6hxy4TIcLcGAFvk8nfv1nr2aCQ&s=10",
        "alt": "Bola Mikasa v360W",
        "link": "https://www.mikasa.com.br/MK000121.html"
    },
    {
        "id": "joelheira-n1-sport-knit",
        "nome": "Joelheira N1 Sport Knit",
        "categoria": "Joelheiras",
        "preco": 197.91,
        "precoTexto": "R$ 197,91",
        "img": "https://images.yampi.me/assets/stores/maniadefutsal/uploads/images/joelheira-volei-n1-sport-knit-3d-12303-p-6679cf6ec12e7-medium.jpg",
        "alt": "Joelheira N1 Sport Knit 3D",
        "link": "https://www.protenista.com.br/acessorios/munhequeiras/joelheira-n1-sport-spry-em-tecido-knit-3d-cores?variant_id=16229&parceiro=4346"
    },
    {
        "id": "mizuno-elite-9-sl2",
        "nome": "Mizuno Elite 9 Sl2",
        "categoria": "Joelheiras",
        "preco": 219.99,
        "precoTexto": "R$ 219,99",
        "img": "https://http2.mlstatic.com/D_NQ_NP_659093-CBT82020028939_012025-O.webp",
        "alt": "Mizuno Elite 9 Sl2",
        "link": "https://www.amazon.com.br/Joelheira-v%C3%B4lei-Mizuno-Elite-Preto/dp/B017F0O242?source=ps-sl-shoppingads-lpcontext&psc=1&smid=A2EB9PYM83FCP9"
    },
    {
        "id": "joelheira-nike-v-lei-essential-knee-pad",
        "nome": "Joelheira Nike Vôlei Essential Knee Pad",
        "categoria": "Joelheiras",
        "preco": 290.82,
        "precoTexto": "R$ 290,82",
        "img": "https://static.ativaesportes.com.br/public/ativaesportes/imagens/produtos/joelheira-nike-volei-essential-knee-pad-unissex-66466fcb723c6.jpg",
        "alt": "Joelheira Nike Essential Knee Pad",
        "link": "https://www.amazon.com.br/Joelheira-Essential-Volleyball-Knee-Pad/dp/B00HQJUHE2?source=ps-sl-shoppingads-lpcontext&psc=1&smid=A2WKAQ5WODH4R2"
    },
    {
        "id": "manguito-n1",
        "nome": "Manguito N1",
        "categoria": "Manguitos",
        "preco": 177.55,
        "precoTexto": "R$ 177,55",
        "img": "https://http2.mlstatic.com/D_Q_NP_663547-MLA113983381329_072026-O.webp",
        "alt": "Manguito N1",
        "link": "https://www.centauro.com.br/prot--de-antebraco-n1-spry-preto-sem-listra-tag-branca-tam-m11u2s-mktp.html?cor=02"
    },
    {
        "id": "manguito-tm7",
        "nome": "Manguito TM7",
        "categoria": "Manguitos",
        "preco": 99.77,
        "precoTexto": "R$ 99,77",
        "img": "https://m.media-amazon.com/images/I/51nKNVYyr2L._AC_UF1000,1000_QL80_.jpg",
        "alt": "Manguito TM7",
        "link": "https://www.tm7sports.com.br/vestuario-tm7/manguito-uv-block-tm7"
    },
    {
        "id": "manguito-poker",
        "nome": "Manguito Poker",
        "categoria": "Manguitos",
        "preco": 59.99,
        "precoTexto": "R$ 59,99",
        "img": "https://http2.mlstatic.com/D_NQ_NP_667395-MLA92032449864_092025-O.webp",
        "alt": "Manguito Poker",
        "link": "https://loja.poker.esp.br/bike/manguito/manguito-c-elastano-protecao-insetos-uv50-04469-15619?parceiro=9182&variant_id=101485"
    },
    {
        "id": "manguito-vitsho",
        "nome": "Manguito Vitsho",
        "categoria": "Manguitos",
        "preco": 32.0,
        "precoTexto": "R$ 32,00",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSI_mI8x6Mi3DHwl9YZKE7TgpU_gzGCY_IVM3u2lfUJQ&s=10",
        "alt": "Manguito Vitsho",
        "link": "https://www.amazon.com.br/Manguito-Curto-Futebol-Atividades-F%C3%ADsicas/dp/B0CSG7997V?source=ps-sl-shoppingads-lpcontext&smid=A3D2Z25Q32MNKO&psc=1"
    }
];
const CHAVE_CARRINHO = "carrinho";
const CUPONS = { VOLEI10: 10, BLACK15: 15 };

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.getElementById("overlay");
  if (!sidebar || !overlay) return;
  sidebar.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.getElementById("overlay");
  if (!sidebar || !overlay) return;
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") hideSidebar();
});

function formatarMoeda(valor) {
  return Number(valor || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function converterPreco(valor) {
  if (typeof valor === "number") return valor;
  const texto = String(valor || "0").replace(/[^0-9,.-]/g, "");
  if (texto.includes(",")) return Number(texto.replace(/\\./g, "").replace(",", ".")) || 0;
  return Number(texto) || 0;
}

function getCart() {
  try {
    const dados = JSON.parse(localStorage.getItem(CHAVE_CARRINHO) || "[]");
    if (!Array.isArray(dados)) return [];
    return dados.map(item => ({
      id: String(item.id || ""),
      nome: item.nome || "Produto",
      preco: converterPreco(item.preco),
      img: item.img || "",
      quantidade: Math.max(1, Number(item.quantidade) || 1)
    })).filter(item => item.id);
  } catch (erro) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(cart));
  atualizarContadorCarrinho();
}

function addToCart(idOuProduto) {
  const produto = typeof idOuProduto === "string"
    ? PRODUTOS.find(item => item.id === idOuProduto)
    : idOuProduto;
  if (!produto) {
    alert("Não foi possível encontrar esse produto.");
    return;
  }
  const cart = getCart();
  const existente = cart.find(item => item.id === produto.id);
  if (existente) existente.quantidade += 1;
  else cart.push({
    id: produto.id, nome: produto.nome,
    preco: converterPreco(produto.preco), img: produto.img, quantidade: 1
  });
  saveCart(cart);
  alert(produto.nome + " foi adicionado ao carrinho!");
}

function removeFromCart(id) {
  saveCart(getCart().filter(item => item.id !== id));
  renderizarCarrinho();
  renderizarCheckout();
}

function alterarQuantidade(id, variacao) {
  const cart = getCart();
  const item = cart.find(produto => produto.id === id);
  if (!item) return;
  item.quantidade += variacao;
  saveCart(cart.filter(produto => produto.quantidade > 0));
  renderizarCarrinho();
  renderizarCheckout();
}

function clearCart() {
  localStorage.removeItem(CHAVE_CARRINHO);
  saveCart([]);
  renderizarCarrinho();
  renderizarCheckout();
}

function atualizarContadorCarrinho() {
  const contador = document.getElementById("contador-carrinho");
  if (!contador) return;
  contador.textContent = getCart().reduce((soma, item) => soma + item.quantidade, 0);
}

function totalCarrinho() {
  return getCart().reduce((soma, item) => soma + item.preco * item.quantidade, 0);
}

function renderizarCarrinho() {
  const container = document.getElementById("lista-carrinho");
  if (!container) return;
  const cart = getCart();
  const subtotal = totalCarrinho();
  const subtotalEl = document.getElementById("subtotal-carrinho");
  const totalEl = document.getElementById("total-carrinho");
  const checkout = document.getElementById("ir-checkout");
  if (!cart.length) {
    container.innerHTML = '<div class="carrinho-vazio"><h2>Seu carrinho está vazio.</h2><p>Escolha seus produtos no catálogo para vê-los aqui.</p><a class="botao botao-principal" href="catalogo.html">Ir para o catálogo</a></div>';
    if (checkout) checkout.classList.add("desativado");
  } else {
    if (checkout) checkout.classList.remove("desativado");
    container.innerHTML = cart.map(item => `
      <article class="item-carrinho">
        <img src="${item.img}" alt="${item.nome}">
        <div class="item-carrinho-info"><h3>${item.nome}</h3><p>${formatarMoeda(item.preco)} cada</p>
          <div class="controle-quantidade">
            <button type="button" aria-label="Diminuir quantidade" onclick="alterarQuantidade('${item.id}', -1)">−</button>
            <span>${item.quantidade}</span>
            <button type="button" aria-label="Aumentar quantidade" onclick="alterarQuantidade('${item.id}', 1)">+</button>
          </div>
        </div>
        <div class="item-carrinho-final"><strong>${formatarMoeda(item.preco * item.quantidade)}</strong><button class="link-remover" type="button" onclick="removeFromCart('${item.id}')">Remover</button></div>
      </article>`).join("");
  }
  if (subtotalEl) subtotalEl.textContent = formatarMoeda(subtotal);
  if (totalEl) totalEl.textContent = formatarMoeda(subtotal);
}

function aplicarCupom() {
  const input = document.getElementById("codigo-cupom");
  const msg = document.getElementById("mensagem-cupom");
  if (!input || !msg) return;
  const codigo = input.value.trim().toUpperCase();
  if (!CUPONS[codigo]) {
    localStorage.removeItem("cupomSetPoint");
    msg.textContent = "Cupom inválido. Confira se digitou VOLEI10 ou BLACK15.";
    msg.className = "mensagem-form erro";
  } else {
    localStorage.setItem("cupomSetPoint", codigo);
    msg.textContent = `Cupom ${codigo} aplicado: ${CUPONS[codigo]}% de desconto.`;
    msg.className = "mensagem-form sucesso";
  }
  renderizarCheckout();
}

function renderizarCheckout() {
  const resumo = document.getElementById("resumo-checkout");
  if (!resumo) return;
  const cart = getCart();
  const subtotal = totalCarrinho();
  const cupom = localStorage.getItem("cupomSetPoint") || "";
  const descontoPercentual = CUPONS[cupom] || 0;
  const desconto = subtotal * descontoPercentual / 100;
  resumo.innerHTML = cart.length ? cart.map(item => `<p class="item-resumo"><span>${item.nome} × ${item.quantidade}</span><strong>${formatarMoeda(item.preco * item.quantidade)}</strong></p>`).join("") : '<p>Seu carrinho está vazio. <a href="catalogo.html">Voltar ao catálogo</a>.</p>';
  document.getElementById("checkout-subtotal").textContent = formatarMoeda(subtotal);
  document.getElementById("checkout-desconto").textContent = "- " + formatarMoeda(desconto);
  document.getElementById("checkout-total").textContent = formatarMoeda(subtotal - desconto);
  const btn = document.getElementById("finalizar-pedido");
  if (btn) btn.disabled = cart.length === 0;
  const input = document.getElementById("codigo-cupom");
  if (input && cupom && !input.value) input.value = cupom;
  const msg = document.getElementById("mensagem-cupom");
  if (msg && cupom) {
    msg.textContent = `Cupom ${cupom} aplicado: ${descontoPercentual}% de desconto.`;
    msg.className = "mensagem-form sucesso";
  }
}

function finalizarPedido() {
  if (!getCart().length) return;
  const total = totalCarrinho() * (1 - (CUPONS[localStorage.getItem("cupomSetPoint")] || 0) / 100);
  const resumo = document.getElementById("resumo-checkout");
  document.querySelector(".painel-checkout").innerHTML = `
    <div class="pedido-sucesso"><span class="selo-sucesso">✓</span><h2>Pedido demonstrativo concluído!</h2>
    <p>O total simulado foi de <strong>${formatarMoeda(total)}</strong>.</p>
    <p>Nenhum pagamento foi realizado. Esta loja é um projeto escolar.</p>
    <a class="botao botao-principal" href="catalogo.html">Voltar ao catálogo</a></div>`;
  localStorage.removeItem(CHAVE_CARRINHO);
  localStorage.removeItem("cupomSetPoint");
  atualizarContadorCarrinho();
}

function renderizarProdutoDetalhe() {
  const alvo = document.getElementById("detalhe-produto");
  if (!alvo) return;
  const id = new URLSearchParams(window.location.search).get("id");
  const p = PRODUTOS.find(item => item.id === id);
  if (!p) {
    alvo.innerHTML = '<div class="carrinho-vazio"><h2>Produto não encontrado</h2><a href="catalogo.html">Voltar ao catálogo</a></div>';
    return;
  }
  alvo.innerHTML = `<img src="${p.img}" alt="${p.alt}" class="imagem-detalhe">
    <div class="info-detalhe"><span class="categoria-mini">${p.categoria}</span><h1>${p.nome}</h1>
    <p class="preco-detalhe">${formatarMoeda(p.preco)}</p>
    <p>Produto selecionado do catálogo SetPoint Vôlei. Consulte a loja indicada para informações atualizadas sobre disponibilidade e características.</p>
    <button class="botao botao-principal" type="button" onclick="addToCart('${p.id}')">Adicionar ao carrinho</button>
    <a class="link-loja link-detalhe" href="${p.link}" target="_blank" rel="noopener noreferrer">Consultar loja indicada</a></div>`;
}

function carregarCadastro() {
  const form = document.getElementById("form-cadastro");
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    const usuario = {
      nome: document.getElementById("nome").value.trim(),
      email: document.getElementById("email").value.trim().toLowerCase(),
      telefone: document.getElementById("telefone").value.trim()
    };
    if (document.getElementById("senha").value.length < 6) {
      document.getElementById("mensagem-cadastro").textContent = "A senha precisa ter pelo menos 6 caracteres.";
      return;
    }
    localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario));
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    document.getElementById("mensagem-cadastro").textContent = "Cadastro demonstrativo realizado! Redirecionando para o perfil...";
    setTimeout(() => window.location.href = "perfil.html", 700);
  });
}

function carregarLogin() {
  const form = document.getElementById("form-login");
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    const email = document.getElementById("email-login").value.trim().toLowerCase();
    const senha = document.getElementById("senha-login").value;
    const cadastrado = JSON.parse(localStorage.getItem("usuarioCadastrado") || "null");
    const msg = document.getElementById("mensagem-login");
    if (!senha) { msg.textContent = "Digite sua senha."; return; }
    if (!cadastrado || cadastrado.email !== email) {
      msg.textContent = "E-mail não encontrado neste navegador. Faça seu cadastro primeiro.";
      msg.className = "mensagem-form erro";
      return;
    }
    localStorage.setItem("usuarioLogado", JSON.stringify(cadastrado));
    window.location.href = "perfil.html";
  });
}

function carregarPerfil() {
  const alvo = document.getElementById("dados-perfil");
  if (!alvo) return;
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado") || "null");
  if (!usuario) {
    alvo.innerHTML = '<p>Você ainda não entrou em uma conta.</p><a class="botao botao-principal" href="login.html">Fazer login</a>';
    return;
  }
  alvo.innerHTML = `<div class="info-perfil"><span>Nome</span><strong>${usuario.nome || "—"}</strong></div>
    <div class="info-perfil"><span>E-mail</span><strong>${usuario.email || "—"}</strong></div>
    <div class="info-perfil"><span>Telefone</span><strong>${usuario.telefone || "Não informado"}</strong></div>`;
}

function fazerLogout() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", () => {
  atualizarContadorCarrinho();
  renderizarCarrinho();
  renderizarCheckout();
  renderizarProdutoDetalhe();
  carregarCadastro();
  carregarLogin();
  carregarPerfil();
});
