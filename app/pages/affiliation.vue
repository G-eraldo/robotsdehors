<script setup>
import { site } from '#shared/data/site.js'
</script>
<template>
  <SimplePage title="Affiliation" path="/affiliation" lead="Comment le site est financé." :description="`${site.name} est financé par des liens partenaires Amazon. Ce que cela implique pour vous.`">
    <p><strong>En tant que Partenaire Amazon, {{ site.name }} réalise un bénéfice sur les achats remplissant les conditions requises.</strong></p>
    <p>Concrètement : lorsque vous cliquez sur un bouton « Voir le prix sur Amazon » puis achetez sur amazon.fr, Amazon peut verser une commission au site. Le prix que vous payez est le même que si vous étiez arrivé sur Amazon directement.</p>
    <h2>Ce que cela ne change pas</h2>
    <ul>
      <li>Les appareils sont retenus pour leur adéquation à un besoin, pas pour le montant de la commission.</li>
      <li>Les limites de chaque appareil sont publiées, y compris quand elles peuvent dissuader d’acheter.</li>
      <li>Aucun fabricant ne relit ni ne valide les contenus.</li>
    </ul>
    <h2>Identification des liens</h2>
    <p>Les liens partenaires portent l’attribut <code>rel="sponsored"</code> et sont signalés à proximité du bouton.</p>
  </SimplePage>
</template>
