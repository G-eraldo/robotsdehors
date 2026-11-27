<script setup>
import { site } from '#shared/data/site.js'
</script>
<template>
  <SimplePage title="À propos" path="/a-propos" :lead="`Qui écrit ${site.name}, et pourquoi.`" :description="`Qui publie ${site.name}, ce que le site fait et ce qu’il ne fait pas.`">
    <p>{{ site.name }} est édité par {{ site.publisher.name }}, développeur web indépendant. Le site aide à choisir un robot tondeuse ou un robot de piscine sans se perdre dans les fiches commerciales : on part du terrain ou du bassin et des contraintes (pentes, arbres, taille, entretien), puis on regarde quels modèles y répondent.</p>
    <h2>Ce que vous trouverez ici</h2>
    <ul>
      <li>Des guides qui répondent d’abord à la question posée, puis expliquent le détail.</li>
      <li>Des fiches produits construites à partir des caractéristiques officielles, avec leur source et leur date de vérification.</li>
      <li>Des limites écrites noir sur blanc : un appareil n’est jamais parfait pour tout le monde.</li>
    </ul>
    <h2>Ce que vous ne trouverez pas</h2>
    <ul>
      <li>De faux tests ou des notes inventées. Les fiches indiquent quand un appareil n’a pas été utilisé.</li>
      <li>Des prix : ils changent trop vite. Ils sont à vérifier sur la page du marchand.</li>
      <li>Des conseils d’installation électrique ou de traitement de l’eau : pour ces sujets, la notice du fabricant et un professionnel priment.</li>
    </ul>
    <p>Une remarque, une erreur repérée ? <NuxtLink to="/contact">Écrivez-nous</NuxtLink>.</p>
  </SimplePage>
</template>
