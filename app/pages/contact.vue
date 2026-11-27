<script setup>
import { site } from '#shared/data/site.js'
</script>
<template>
  <SimplePage title="Contact" path="/contact" lead="Une question, une erreur, une suggestion d’appareil ?" :description="`Contacter l’éditeur de ${site.name} : question, erreur repérée dans une fiche ou suggestion d’appareil à comparer.`">
    <p>Écrivez à <a :href="`mailto:${site.publisher.email}`">{{ site.publisher.email }}</a> en précisant « {{ site.name }} » dans l’objet.</p>
    <p>Nous ne répondons pas aux demandes de service après-vente : pour une panne ou une commande, contactez le vendeur ou le fabricant de l’appareil.</p>
  </SimplePage>
</template>
