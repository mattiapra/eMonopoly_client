<script setup>
import {Howl, Howler} from 'howler';

const ready = ref(false)

useHead({
  title: 'Buon 21esimo compleanno amore mio',
})

onMounted(() => {
  const sound = new Howl({
    src: ['/compleanno261122/bg.mp3']
  })
  sound.play()
})
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="opacity" mode="out-in">
      <Boot v-if="!ready" :load-from="2001" :load-to="2022" @ready="ready = true" />
      <component :is="Component" v-else />
    </transition>
  </router-view>
</template>
