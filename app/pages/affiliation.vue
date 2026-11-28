<script setup>
import { site } from '#shared/data/site.js'
</script>
<template>
  <SimplePage title="Affiliation" meta-title="Affiliation Amazon : comment le site est financé" updated-at="2026-11-28" path="/affiliation" lead="Le site est financé par des liens partenaires Amazon : ce que cela change pour vous, et ce que cela ne change pas." :description="`${site.name} est financé par des liens partenaires Amazon. Ce que cela implique pour vous.`">
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
    <h2>Pourquoi Amazon ?</h2>
    <p>Amazon.fr propose la plupart des modèles comparés ici, avec une page produit qui affiche le prix du moment, la disponibilité, le vendeur et ses conditions de retour. Si d’autres marchands sont ajoutés, leurs liens seront signalés de la même façon et cette page sera mise à jour.</p>
    <h2>Questions fréquentes</h2>
    <h3>Le prix est-il plus élevé quand je passe par vos liens ?</h3>
    <p>Non. Le prix affiché par Amazon est le même, que vous arriviez par un lien du site ou directement.</p>
    <h3>Combien touche le site ?</h3>
    <p>Un pourcentage du montant des achats éligibles, fixé par Amazon selon la catégorie de produit. Le site ne connaît pas l’identité des acheteurs.</p>
    <h3>Les fabricants paient-ils pour apparaître ?</h3>
    <p>Non. Aucun fabricant ne paie, ne fournit de produit en échange d’un avis, ni ne relit les fiches avant publication.</p>
  </SimplePage>
</template>
