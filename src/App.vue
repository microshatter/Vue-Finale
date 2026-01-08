<script setup>
import { useI18n } from 'vue-i18n'

const { locale, availableLocales } = useI18n({useScope: 'global'})
</script>

<template>
    <RouterView />
    <hr>
    <div id="change-lang" class="text-center mt-4">
        <label>{{ $t('change-lang') }}</label>
        <div class="flex space-x-2 mt-2 justify-center">
            <button v-for="loc in availableLocales" :key="`locale-${loc}`" @click="locale = loc" :class="locale === loc ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'" class="px-4 py-2 rounded transition">
                {{ loc }}
            </button>
        </div>
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>