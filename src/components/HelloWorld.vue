<script setup>
import { ElButton } from 'element-plus';
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

defineProps({
    msg: String,
})

const count = ref(0)
</script>

<template>
    <ElButton>{{ t('button') }}</ElButton>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
