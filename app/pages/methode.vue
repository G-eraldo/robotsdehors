<script setup>
import { site } from '#shared/data/site.js'
</script>
<template>
  <SimplePage title="Notre méthode" meta-title="Notre méthode : sélection, sources et mises à jour" updated-at="2026-11-28" path="/methode" lead="Comment les modèles sont choisis, décrits et mis à jour, et ce que nous ne faisons pas." :description="`Comment ${site.name} sélectionne les appareils, vérifie leurs caractéristiques et signale ses limites.`">
    <h2>1. Partir du besoin</h2>
    <p>Chaque rubrique commence par les questions qui changent le choix : surface et pentes du terrain, arbres et zones, type et taille du bassin, budget d’entretien. La sélection couvre plusieurs profils plutôt qu’un « meilleur » unique.</p>
    <h2>2. Vérifier les chiffres à la source</h2>
    <p>Surface, pente, hauteur de coupe, autonomie, filtration : chaque valeur vient de la fiche du fabricant ou, à défaut, de la fiche produit du marchand. La source et la date de vérification sont affichées sur chaque fiche. Une donnée non publiée reste vide plutôt que d’être estimée.</p>
    <h2>3. Dire ce qui a été testé, et ce qui ne l’a pas été</h2>
    <p>Les fiches actuelles sont <strong>documentaires</strong> : elles s’appuient sur les données publiées, pas sur un essai. Si un appareil est un jour utilisé par l’auteur, la fiche le précisera avec le contexte (pièce, durée, conditions) et ses limites.</p>
    <h2>4. Mettre à jour</h2>
    <p>Les modèles et leurs références changent souvent. Les fiches sont revues régulièrement ; un modèle retiré de la vente est remplacé ou supprimé.</p>
    <h2>5. Signaler l’affiliation</h2>
    <p>Les boutons vers Amazon sont des liens partenaires. Ils ne modifient ni le classement ni le prix payé. Détails dans la page <NuxtLink to="/affiliation">Affiliation</NuxtLink>.</p>
    <h2>6. Quand les sources se contredisent</h2>
    <p>La fiche Amazon et la page du fabricant ne disent pas toujours la même chose : surface, contenu de la boîte, compatibilité. Dans ce cas, nous retenons en priorité la source du fabricant, nous signalons l’écart sur la fiche et, si la valeur reste douteuse, nous la laissons vide plutôt que de choisir au hasard. Un modèle dont la fiche marchande mélange plusieurs variantes est écarté.</p>
    <h2>Qui écrit ?</h2>
    <p>Toutes les fiches et tous les guides sont rédigés et vérifiés par {{ site.publisher.name }}, éditeur du site. Une erreur repérée ? <NuxtLink to="/contact">Signalez-la</NuxtLink> : la correction est datée sur la page.</p>
  </SimplePage>
</template>
