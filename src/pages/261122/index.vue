<script setup lang="ts">
const store = useCompleanno2022Store()

const min = 60 * 1000
const now = new Date().getTime()
const louvre = new Date(2022, 10, 26, 15, 45).getTime()
const eiffel = new Date(2022, 10, 26, 21, 45).getTime()

const louvreDiff = now - louvre
const eiffelDiff = now - eiffel

const isBetween = (min: number, max: number, num: number) => num >= min && num <= max
const toObject = (text: any, mode = 'text', step = -1) => ({ step, text, mode })

const whatToShow = computed(() => {
  if (louvreDiff < 0)
    return toObject(store.specials[0].pre)
  else if (isBetween(0, min * 20, louvreDiff))
    return toObject(store.specials[0].post, 'button', 0)
  else if (eiffelDiff < 0 && louvreDiff > 0)
    return toObject(store.specials[1].pre)
  else if (isBetween(0, min * 20, eiffelDiff))
    return toObject(store.specials[1].post, 'button', 1)
  else if (isBetween(min * 20 + 1, min * 75, eiffelDiff))
    return toObject(store.specials[2].pre)
  else
    return toObject(store.specials[2].post)
})

const handleBtnClick = () => {
  if (whatToShow.value.step === 0)
    window.open('/compleanno261122/Louvre.pdf', '_blank')
  else
    window.open('/compleanno261122/Eiffel.pdf', '_blank')
}

const showParis = ref(true)
</script>

<template>
  <transition name="opacity" mode="out-in">
    <div v-if="showParis" centered-full @click="showParis = false">
      <p>Buon compleanno amore mio..</p>
      <img src="/favicon.png" alt="">
      <p text-xs>(cliccami)</p>
    </div>
    <div text="center" text-lg p-big pb="!0" v-else>
      <article>
        <p v-for="(line, i) in store.sentences" :key="`line_${i}`" :h="line ? null : '35pt'">
          <span v-if="!line.includes('%foto%')">{{ line }}</span>
          <img pt="2rem" pb="4rem" v-else :src="`/compleanno261122/${line.replace('%foto%', '')}`" alt="">
        </p>
      </article>

      <article centered-full mt="16rem">
        <template v-if="whatToShow.mode === 'text'">
          <p v-for="(line, j) in whatToShow.text" :key="`specialline_${j}`" :h="line ? null : '70pt'">
            {{ line }}
          </p>
        </template>
        <button v-else btn @click="handleBtnClick" bg="#909082">
          <span>{{ whatToShow.text[0] }}</span>
        </button>
      </article>
    </div>
  </transition>
</template>

<route lang="yaml">
meta:
  layout: Compleanno2022
</route>
