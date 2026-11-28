<script setup>
// Rend un contenu éditorial décrit en blocs : { p | h2 | h3 | ul | ol | table | callout }.
// Le texte peut contenir des liens internes au format [libellé](/chemin), du **gras** et de l'*italique*.
defineProps({ blocks: { type: Array, required: true } })

function esc(s) {
  return String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}
function inline(s) {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*\w])\*(?=\S)([^*]+?)(?<=\S)\*(?!\*)/g, '$1<em>$2</em>')
    .replace(/\[([^\]]+)\]\((\/[^)\s]*|https:\/\/[^)\s]+)\)/g, (_, label, href) =>
      href.startsWith('/') ? `<a href="${href}">${label}</a>` : `<a href="${href}" target="_blank" rel="noopener">${label}</a>`)
}
const slug = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
</script>

<template>
  <div class="prose-cd">
    <template v-for="(b, i) in blocks" :key="i">
      <p v-if="b.p" v-html="inline(b.p)" />
      <h2 v-else-if="b.h2" :id="slug(b.h2)">{{ b.h2 }}</h2>
      <h3 v-else-if="b.h3">{{ b.h3 }}</h3>
      <ul v-else-if="b.ul"><li v-for="(li, j) in b.ul" :key="j" v-html="inline(li)" /></ul>
      <ol v-else-if="b.ol"><li v-for="(li, j) in b.ol" :key="j" v-html="inline(li)" /></ol>
      <aside v-else-if="b.callout" class="rounded-2xl border border-line bg-surface px-5 py-4 text-[0.98rem] shadow-card">
        <p v-if="b.title" class="font-semibold">{{ b.title }}</p>
        <p class="mt-1 text-ink/80" v-html="inline(b.callout)" />
      </aside>
      <div v-else-if="b.table" class="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <table class="w-full min-w-[34rem] border-separate border-spacing-0 overflow-hidden rounded-2xl bg-surface text-left text-[0.92rem] shadow-card">
          <thead>
            <tr><th v-for="h in b.table.head" :key="h" scope="col" class="border-b border-line bg-ink/[0.03] px-4 py-3 font-semibold">{{ h }}</th></tr>
          </thead>
          <tbody>
            <tr v-for="(row, r) in b.table.rows" :key="r" class="[&:last-child>td]:border-0">
              <td v-for="(cell, c) in row" :key="c" class="border-b border-line px-4 py-3 align-top" :class="c === 0 && 'font-medium'" v-html="inline(cell)" />
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </div>
</template>
