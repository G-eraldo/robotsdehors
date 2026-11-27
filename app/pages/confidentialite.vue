<script setup>
import { site } from '#shared/data/site.js'
</script>
<template>
  <SimplePage title="Confidentialité" path="/confidentialite" noindex :description="`Données personnelles et cookies sur ${site.name} : aucun traceur, journaux techniques et liens partenaires Amazon.`">
    <h2>Pas de traceur sur ce site</h2>
    <p>{{ site.name }} ne dépose aucun cookie, n’utilise pas d’outil de mesure d’audience et n’affiche pas de publicité. Aucun bandeau de consentement n’est donc nécessaire.</p>
    <h2>Journaux techniques</h2>
    <p>Le serveur enregistre des journaux techniques (adresse IP, page demandée, date) pour la sécurité et le bon fonctionnement. Ils sont conservés pour une durée limitée et ne sont pas utilisés à des fins commerciales.</p>
    <h2>Liens vers Amazon</h2>
    <p>Lorsque vous cliquez sur un lien partenaire, vous quittez le site. Amazon peut alors déposer ses propres cookies pour attribuer l’achat, selon sa politique de confidentialité.</p>
    <h2>Vos droits</h2>
    <p>Pour toute question sur vos données : <a :href="`mailto:${site.publisher.email}`">{{ site.publisher.email }}</a>. Vous pouvez aussi saisir la CNIL.</p>
  </SimplePage>
</template>
