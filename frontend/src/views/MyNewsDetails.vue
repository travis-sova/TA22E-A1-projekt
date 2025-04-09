<script lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const article = ref(null);

    onMounted(async () => {
      try {
        const response = await fetch('../../data/news.json');
        const articles = await response.json();
        article.value = articles.find((a: { id: number; }) => a.id === parseInt(route.params.id as string));
      } catch (error) {
        console.error('Error loading article:', error);
      }
    });

    return { article };
  }
};
</script>


<template>
  <div class="p-6 max-w-4xl mx-auto">
    <div v-if="article">
      <figure class="mb-6">
        <img :src="article.BigPicture" alt="News Image" class="w-full rounded-lg shadow-lg" />
      </figure>

      <h1 class="text-4xl font-bold mb-2">{{ $t(article.title) }}</h1>
      <p class=" text-sm mb-6">
        {{ new Date(article.date).toLocaleDateString() }}
      </p>

      <p class="text-lg leading-relaxed mb-4">
        {{ $t(article.description) }}
      </p>

      <div class="divider"></div>

      <div class="prose prose-lg max-w-none">
        <h2 class="text-2xl font-semibold">{{ $t('news.extended') }}</h2>
        <p>{{ $t(article.extendedDescription) }}</p>
      </div>

      <div class="mt-8">
        <router-link to="/News" class="btn btn-accent text-primary-content">
          {{ $t('news.back') }}
        </router-link>
      </div>
    </div>

    <div v-else>
      <p class="text-center text-xl">{{ $t('news.loading') }}</p>
    </div>
  </div>
</template>
