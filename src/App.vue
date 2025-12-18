<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import HelloWorld from './components/HelloWorld.vue'

const { locale, availableLocales } = useI18n({useScope: 'global'})

// Available languages
const langs = ref([
    'en-US',
    'zh-CN'
])

// Current language
const lang = ref(locale.value)

// Watch for language changes and update the i18n locale
watch(lang, (newLang) => {
    locale.value = newLang
})
</script>

<template>
    <RouterView />
    <div id="change-lang">
        <el-select v-model="locale">
            <el-option v-for="locale in availableLocales" :key="`locale-${locale}`" :value="locale">
                {{ locale }}
            </el-option>
        </el-select>
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

#change-lang {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
}
</style>