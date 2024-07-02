<script lang="ts" setup>
import { ref } from 'vue';

const today = ref(new Date());
</script>

<template>
    <footer class="bg-black text-white pb-12 py-6">
        <div>
            &copy; {{ today.getFullYear() }} Lucas Goyeche
        </div>
    </footer>
    <div class="footer-bg"></div>
</template>

<style>
footer {
    text-align: center;
}

.footer-bg {
    content: "";
    display: block;
    height: 100%;
    top: 50%;
    bottom: 0;
    background-color: black;
    width: 100%;
    position: fixed;
    left: 0;
    z-index: 1;
}
</style>
