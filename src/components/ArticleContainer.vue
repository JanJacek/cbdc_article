<template>
  <article class="article-container">
    <section id="front-page">
      <p class="text-h3 text-bold">CBDC <q-btn icon="download" flat label="PDF" dense disable /></p>
      <p class="text-h4">Jan Jacek Bobkiewicz</p>
      <p>
        Artykuł poświęcony CBDC – wirtualnej walucie banków centralnych, zrealizowany w ramach
        przedmiotu „Finanse” na SGH w 2025 roku.
      </p>
    </section>

    <section id="intro">
      <p class="text-h5 text-bold">WSTĘP</p>
      <p>
        Innowacje można podzielić na dwie kategorie: ewolucyjne i rewolucyjne. Innowacje ewolucyjne
        stopniowo udoskonalają istniejące rozwiązania, podnosząc jakość oraz dostępność dóbr i
        usług. Natomiast innowacje rewolucyjne wywierają fundamentalny wpływ na rzeczywistość – nie
        tylko wprowadzają nowe technologie, lecz także przekształcają całe systemy społeczne i
        gospodarcze, redefiniując umowę społeczną, na której opiera się nasze życie.<br />
        <br />
        CBDC to narzędzie o rewolucyjnym potencjale, które nie tylko zmienia zasady funkcjonowania
        systemu finansowego, ale także wpływa na codzienne życie każdego z nas. To nie jest jedynie
        techniczna innowacja czy kosmetyczna modyfikacja sposobu, w jaki płacimy za zakupy. To
        fundamentalna zmiana w kontroli nad pieniądzem, jego dostępności i sposobie, w jaki rządy
        oraz banki centralne mogą oddziaływać na gospodarkę. CBDC może wpłynąć na Twoją prywatność,
        bezpieczeństwo finansowe, a nawet swobodę gospodarowania własnymi środkami. Niezależnie od
        tego, czy interesujesz się finansami, czy nie – skutki tej zmiany odczujesz osobiście.
      </p>
    </section>

    <section id="digital-currency">
      <p class="text-h5 text-bold">Waluta Cyforwa</p>

      <section id="definition">
        <p class="text-h6">Definicja</p>
        <p>
          Pieniądz w formie monet i banknotów jest powszechnie znany, a ludzie są do niego
          przywiązani ze względu na jego wielowiekową historię sięgającą IX wieku. Nawet odejście od
          parytetu złota w 1971 roku nie zachwiało zaufaniem do pieniądza papierowego. Wciąż
          pozostaje on podstawową formą środka płatniczego.
        </p>

        <p>
          Pomimo że na rewolucję monetarną trzeba było czekać ponad tysiąc lat, nagły rozwój
          technologii informacyjnej sprawił, że w 2025 roku wirtualne waluty stały się
          rzeczywistością. Wirtualne waluty to cyfrowe środki płatnicze, które istnieją wyłącznie w
          formie elektronicznej i nie mają fizycznego odpowiednika, jak monety czy banknoty. W
          przeciwieństwie do tradycyjnych walut emitowanych przez banki centralne, mogą być
          zdecentralizowane, jak kryptowaluty (np. Bitcoin), lub centralnie kontrolowane, jak
          planowane cyfrowe waluty banków centralnych (CBDC). Ich wprowadzenie oznacza fundamentalną
          zmianę w sposobie przechowywania, przesyłania i kontrolowania pieniądza, co wpływa zarówno
          na system finansowy, jak i codzienne życie ludzi.
        </p>
      </section>
      <section id="types">
        <p class="text-h6">Rodzaje walut cyfrowych</p>
        <p>
          Wirtualne waluty można podzielić na trzy kategorie: kryptowaluty, stablecoiny i CBDC.
          Kryptowaluty to zdecentralizowane środki płatnicze, które nie są emitowane ani
          kontrolowane przez żadną instytucję. Ich wartość zależy od popytu i podaży na rynku, co
          sprawia, że są bardzo niestabilne. Stablecoiny to cyfrowe waluty, których wartość jest
          ściśle powiązana z tradycyjnymi walutami, takimi jak dolar czy euro. Ich celem jest
          zapewnienie stabilności cen, co sprawia, że są bardziej przewidywalne i użytecz
        </p>
      </section>
    </section>

    <section id="bibliography">
      <p class="text-h5">bibliogtafia</p>
      <ul>
        <li>
          <a href="https://www.google.pl">testowy link porwadzący do storny google</a>
        </li>
        <li>
          <a href="https://www.google.pl">testowy link porwadzący do storny google</a>
        </li>
        <li>
          <a href="https://www.google.pl">testowy link porwadzący do storny google</a>
        </li>
      </ul>
    </section>
  </article>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { naviStore } from 'src/stores/example-store'
const store = naviStore()
watch(
  () => store.cbdc_article_selected_section,
  (newSection) => {
    if (newSection) {
      const section = document.getElementById(newSection)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  },
)
</script>

<style scoped>
.article-container {
  font-family: Arial, Helvetica, sans-serif;
  padding: 100px 100px;
}
section {
  max-width: 700px;
}
.frog {
  /* place it in right down corner forever */
  position: fixed;
  top: 0;
  right: 0;
  margin: 20px;
  /* tranalate  mirror */

  transform: scaleX(-1);
}
</style>
