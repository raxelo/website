<script lang="ts" setup>
import { cn } from '~/utils/cn';

const route = useRoute();


defineProps<{
    link: string
}>()
</script>

<template>
    <NuxtLink :href="link" :class="cn(
        'card transition-all duration-300',
        link === route.path ? 'active' : ''
    )">
        <div class="card-header">
            <slot name="card-header" />
        </div>
        <div class="card-footer text-sm leading-loose">
            <slot name="card-footer" />
        </div>
    </NuxtLink>
</template>

<style>
.card {
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.25);
    color: black;
    width: 250px;
    display: block;
    position: relative;
    filter: grayscale(0.85)
}

.dark .card {
    background: rgb(72, 72, 81);
    color: white;
}

.card.active {
    cursor: default;
    filter: grayscale(0);
}

.card:hover, .card:focus, .card.active {
    border-color: black;
    transform: translate(-15px, -15px);
    box-shadow: 15px 15px 0px black;
    filter: grayscale(0);
    outline: none;;
}

.card:hover::after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    bottom: -16px;
    right: -16px;
    z-index: -1;
    display: block;
}

.card-header {
    padding: 12px;
    height: 100px;
}

.card-footer {
    background: var(--pink);
    text-align: center;
}
</style>
