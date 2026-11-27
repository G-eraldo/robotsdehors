<script setup>
import { site } from '#shared/data/site.js'
const p = site.publisher
</script>
<template>
  <SimplePage title="Mentions légales" path="/mentions-legales" noindex :description="`Éditeur, responsable de publication et hébergeur de ${site.name}.`">
    <h2>Éditeur</h2>
    <p>{{ p.company }}<br>{{ p.rcs }}<br>SIRET : {{ p.siret }}<br>{{ p.address }}<br>E-mail : <a :href="`mailto:${p.email}`">{{ p.email }}</a><br>Téléphone : <a :href="`tel:${p.phoneHref}`">{{ p.phone }}</a></p>
    <p>Responsable de la publication : {{ p.name }}.</p>
    <h2>Hébergement</h2>
    <p>Serveur VPS exploité par l’éditeur.<br>{{ site.host.name }}, {{ site.host.address }}<br>Téléphone : {{ site.host.phone }}</p>
    <h2>Propriété et liens</h2>
    <p>Les textes et la présentation du site sont protégés. Les marques citées appartiennent à leurs titulaires. Les illustrations d’appareils sont des rendus génériques et ne représentent pas un modèle précis. Les liens externes mènent vers des sites sous la responsabilité de leurs éditeurs.</p>
  </SimplePage>
</template>
