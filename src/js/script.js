let linguagens = [];
let frameworks = [];
const cardContainer = document.querySelector(".card-container");
const frameworksContainer = document.querySelector(".frameworks-container");
const campoBusca = document.querySelector('input[type="text"]');

const officialLogoMap = {
  react: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  angular: "https://angular.io/assets/images/logos/angular/angular.svg",
  vue: "https://vuejs.org/logo.svg",
  svelte: "https://svelte.dev/images/svelte-logo.svg",
  django: "https://static.djangoproject.com/img/logos/django-logo-positive.svg",
  spring: "https://spring.io/img/spring-logo.svg",
  rust: "https://www.rust-lang.org/static/images/rust-logo-blk.svg",
  laravel: "https://laravel.com/img/logomark.min.svg",
  nestjs: "https://nestjs.com/img/logo-small.svg",
  kubernetes: "https://kubernetes.io/images/nav_logo.svg",
  docker:
    "https://www.docker.com/wp-content/uploads/2023/08/logo-docker-blue.svg",
  graphql: "https://graphql.org/img/logo.svg",
  pulumi: "https://www.pulumi.com/images/logo/svg/pulumi-logo.svg",
  helm: "https://helm.sh/img/helm-logo.svg",
  terraform:
    "https://www.terraform.io/assets/images/logos/terraform-wordmark.svg",
  deno: "https://deno.land/logo.svg",
  ktor: "https://ktor.io/assets/img/ktor_logo_grayscale.svg",
  flutter: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
  nextjs:
    "https://assets.vercel.com/image/upload/v1662131559/front/vercel/brands/nextjs/nextjs-icon.svg",
  php: "https://www.php.net/images/logos/php-logo.svg",
  typescript:
    "https://raw.githubusercontent.com/microsoft/TypeScript/main/doc/logo-ts.svg",
  go: "https://go.dev/images/go-logo-blue.svg",
  python:
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  kotlin: "https://kotlinlang.org/assets/images/kotlin-logo.png",
  swift: "https://developer.apple.com/swift/images/swift-logo.svg",
  cplusplus: "https://isocpp.org/files/img/cpp_logo.png",
  postgresql: "https://www.postgresql.org/media/img/about/press/elephant.png",
  mongodb: "https://www.mongodb.com/assets/images/global/leaf.svg",
  redis: "https://redis.io/images/redis.svg",
  kafka: "https://kafka.apache.org/images/apache_kafka_logo.png",
  rabbitmq: "https://www.rabbitmq.com/logo/rabbitmq-logo.svg",
  jenkins: "https://www.jenkins.io/images/logos/jenkins/jenkins.svg",
  gatsby: "https://www.gatsbyjs.com/Gatsby-Monogram.svg",
  astro: "https://astro.build/assets/press/astro-logo-dark.svg",
  cassandra: "https://cassandra.apache.org/_/img/cassandra-logo.svg",
  redux: "https://redux.js.org/img/redux.svg",
  scala: "https://www.scala-lang.org/resources/img/scala-logo.svg",
  prometheus: "https://prometheus.io/assets/prometheus_logo_grey.svg",
  grafana: "https://grafana.com/static/img/logos/grafana_logo_swirl_dark.svg",
  neo4j:
    "https://neo4j.com/wp-content/themes/neo4jweb/assets/images/neo4j-logo.svg",
  cockroachdb:
    "https://www.cockroachlabs.com/wp-content/uploads/2022/03/CockroachDB.svg",
  solidjs: "https://www.solidjs.com/img/logo/solid-logo.svg",
  sqlite: "https://www.sqlite.org/images/sqlite_logo.png",
  zig: "https://ziglang.org/assets/zig-logo-stacked.svg",
  envoy: "https://www.envoyproxy.io/img/logo.svg",
  istio: "https://istio.io/latest/img/istio-bluelogo-nolabel.svg",
  elixir: "https://elixir-lang.org/images/logo/logo.png",
  perl: "https://www.perl.org/images/perl_logo.png",
  fsharp: "https://fsharp.org/img/logo/fsharp-logo.png",
  flutter:
    "https://flutter.dev/assets/images/shared/brand/flutter/logo/flutter-lockup.png",
  dart: "https://dart.dev/assets/shared/dart/logo+text/horizontal/white.svg",
};

const logoMap = {
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "c#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  csharp:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  go: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  ruby: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
  rust: "https://www.rust-lang.org/static/images/rust-logo-blk.svg",
  kotlin:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  swift:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  "c++":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  angular:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
  vue: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  svelte:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
  "next.js": "https://cdn.simpleicons.org/nextdotjs",
  nextjs: "https://cdn.simpleicons.org/nextdotjs",
  next: "https://cdn.simpleicons.org/nextdotjs",
  laravel: "https://cdn.simpleicons.org/laravel",
  django:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  spring:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  flutter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  redis:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  kubernetes:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  kafka:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
  rabbitmq:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg",
  jenkins:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  ansible:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
  gatsby:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg",
  nestjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
  astro:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg",
  cassandra:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg",
  "three.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
  redux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  scala:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg",
  deno: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg",
  prometheus:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
  grafana:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
  neo4j:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg",
  cockroachdb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cockroachdb/cockroachdb-original.svg",
  solidjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidjs/solidjs-original.svg",
  pulumi:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pulumi/pulumi-original.svg",
  helm: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg",
  terraform:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
  graphql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  sqlite:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
};

const aliasMap = {
  nextjs: "nextdotjs",
  threejs: "threedotjs",
  expressjs: "express",
  vue: "vuedotjs",
  svelt: "svelte",
  webassembly: "webassembly",
  kafka: "apachekafka",
  cassandra: "apachecassandra",
  phoenix: "phoenixframework",
  cockroachdb: "cockroachlabs",
  solidjs: "solid",
  envoy: "envoyproxy",
  dynamodb: "amazondynamodb",
  postgres: "postgresql",
  sqlite: "sqlite",
  nestjs: "nestjs",
  astro: "astro",
  istio: "istio",
  grafana: "grafana",
  prometheus: "prometheus",
  mariadb: "mariadb",
  couchbase: "couchbase",
  neo4j: "neo4j",
  vagrant: "vagrant",
  chef: "chef",
  rethinkdb: "rethinkdb",
  opentofu: "opentofu",
  flutter: "flutter",
  dart: "dart",
  elixir: "elixir",
  perl: "perl",
  fsharp: "fsharp",
  haskell: "haskell",
};

function normalizeName(name) {
  const n = String(name || "").toLowerCase();
  return n
    .replace(/\(.*?\)/g, "")
    .replace(/\+\+/g, "plusplus")
    .replace(/#/g, "sharp")
    .replace(/\./g, "")
    .replace(/[_\s]+/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function hasTag(entry, target) {
  if (!entry || !Array.isArray(entry.tags)) return false;
  const tl = entry.tags.map((t) => String(t).toLowerCase());
  return tl.some((t) => t.includes(target));
}

function getLogoUrl(nome, logo) {
  if (logo) return logo;
  const key = normalizeName(nome);
  if (officialLogoMap[key]) return officialLogoMap[key];
  if (logoMap[key]) return logoMap[key];
  const simpleSlug = aliasMap[key] || key;
  return `https://cdn.simpleicons.org/${simpleSlug}`;
}

function getLogoCandidates(nome, logo) {
  const key = normalizeName(nome);
  const candidates = [];
  if (logo) candidates.push(logo);
  if (officialLogoMap[key]) candidates.push(officialLogoMap[key]);
  if (logoMap[key]) candidates.push(logoMap[key]);
  const simpleSlug = aliasMap[key] || key;
  candidates.push(`https://cdn.simpleicons.org/${simpleSlug}`);
  const seen = new Set();
  return candidates.filter((u) => {
    const k = String(u);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

function applyLogo(imgEl, nome, logo) {
  const list = getLogoCandidates(nome, logo);
  let i = 0;
  function tryNext() {
    if (i >= list.length) {
      if (imgEl && imgEl.parentElement)
        imgEl.parentElement.style.display = "none";
      return;
    }
    imgEl.onerror = () => {
      tryNext();
    };
    imgEl.src = list[i++];
  }
  tryNext();
}

async function carregarLinguagens() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error("Erro ao carregar os dados.");
    }
    const data = await response.json();
    if (Array.isArray(data)) {
      linguagens = data.filter((e) => hasTag(e, "linguagem"));
      frameworks = data.filter((e) => hasTag(e, "framework"));
    } else {
      linguagens = data.linguagens || [];
      frameworks = data.frameworks || [];
    }
    exibirCards(linguagens);
    exibirFrameworks(frameworks);
  } catch (error) {
    console.error(error);
    cardContainer.innerHTML =
      "<p>Não foi possível carregar as linguagens. Tente novamente mais tarde.</p>";
    frameworksContainer.innerHTML =
      "<p>Não foi possível carregar os frameworks. Tente novamente mais tarde.</p>";
  }
}

function exibirCards(listaLinguagens) {
  cardContainer.innerHTML = "";

  if (listaLinguagens.length === 0) {
    cardContainer.innerHTML =
      "<p>Nenhuma linguagem encontrada para o termo buscado.</p>";
    return;
  }

  const itens = listaLinguagens.slice(0, 50);

  itens.forEach((linguagem) => {
    const card = document.createElement("div");
    card.className = "linguagem-box";
    card.innerHTML = `
            <div class="box-header"><div class="logo-wrap"><img class="box-logo" alt="${linguagem.nome} logo" loading="lazy"></div><h2>${linguagem.nome}</h2></div>
            <p>${linguagem.data_criacao}</p>
            <p>${linguagem.descricao}</p>
            <a href="${linguagem.link}" target="_blank">Saiba Mais</a>
        `;
    cardContainer.appendChild(card);
    const imgEl = card.querySelector(".box-logo");
    applyLogo(imgEl, linguagem.nome, linguagem.logo);
  });
}

function exibirFrameworks(listaFrameworks) {
  frameworksContainer.innerHTML = "";

  if (listaFrameworks.length === 0) {
    frameworksContainer.innerHTML = "<p>Nenhum framework encontrado.</p>";
    return;
  }

  const itens = listaFrameworks.slice(0, 50);

  itens.forEach((fw) => {
    const card = document.createElement("div");
    card.className = "framework-box";
    card.innerHTML = `
            <div class="box-header"><div class=\"logo-wrap\"><img class=\"box-logo\" alt=\"${fw.nome} logo\" loading=\"lazy\"></div><h2>${fw.nome}</h2></div>
            <p>${fw.data_criacao}</p>
            <p>${fw.descricao}</p>
            <a href="${fw.link}" target="_blank">Saiba Mais</a>
        `;
    frameworksContainer.appendChild(card);
    const imgEl = card.querySelector(".box-logo");
    applyLogo(imgEl, fw.nome, fw.logo);
  });
}

// removed modal logic

function iniciarBusca() {
  const termoBusca = campoBusca.value.toLowerCase();

  if (!termoBusca) {
    exibirCards(linguagens);
    exibirFrameworks(frameworks);
    return;
  }

  const resultadoLinguagens = linguagens.filter(
    (linguagem) =>
      linguagem.nome.toLowerCase().includes(termoBusca) ||
      linguagem.descricao.toLowerCase().includes(termoBusca)
  );

  const resultadoFrameworks = frameworks.filter(
    (fw) =>
      fw.nome.toLowerCase().includes(termoBusca) ||
      fw.descricao.toLowerCase().includes(termoBusca) ||
      (fw.linguagem && fw.linguagem.toLowerCase().includes(termoBusca))
  );

  exibirCards(resultadoLinguagens);
  exibirFrameworks(resultadoFrameworks);
}

document.addEventListener("DOMContentLoaded", carregarLinguagens);

campoBusca.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    iniciarBusca();
  }
});

document.addEventListener("mousemove", (e) => {
  const x = e.clientX + "px";
  const y = e.clientY + "px";
  document.documentElement.style.setProperty("--cursorX", x);
  document.documentElement.style.setProperty("--cursorY", y);
});

// tema claro removido
