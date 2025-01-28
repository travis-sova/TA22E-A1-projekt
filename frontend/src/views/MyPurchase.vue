<template>
    <div>
        <h1>Purchase</h1>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    id: Number,
    total: Number
});

</script>
