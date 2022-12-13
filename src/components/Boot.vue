<script setup>
const props = defineProps({
  loadTo: {
    type: Number,
    required: true,
  },
  loadFrom: {
    type: Number,
    required: true,
  },
})
const emit = defineEmits(['ready'])
const numbers = computed(() => {
  const n = []
  let curr = props.loadTo
  do {
    n.push(curr)
    curr--
  } while (curr >= props.loadFrom)
  return n
})

let interval = null
const selected = ref(props.loadFrom)
const increment = () => {
  if (selected.value < props.loadTo) { selected.value++ }
  else {
    clearInterval(interval)
    setTimeout(() => emit('ready'), 6500)
  }
}
onMounted(() => {
  interval = setInterval(increment, 400)
})
onBeforeUnmount(() => {
  if (interval)
    clearInterval(interval)
})
</script>

<template>
  <div centered-full>
    <p class="boot_anim" :class="{ ready: selected === loadTo }">
      <span v-for="n in numbers" :key="n" :class="{ selected: selected === n && n !== loadFrom }">{{ n }}</span>
    </p>
  </div>
</template>

<style>
.boot_anim {
  display: flex;
  flex-direction: column;
  text-align: center;
  height: min-content;
  gap: 5px;
}

@keyframes selectedSpan {
  0% {
    transform: translate(0, 0) scale(2);
  }
  50% {
    transform: translate(0, 40vh) scale(2);
  }
  100% {
    transform: translate(0, 40vh) scale(6);
  }
}
.boot_anim.ready span {
  opacity: 0;
}
.boot_anim.ready span.selected {
  animation: selectedSpan 5s;
  animation-fill-mode: forwards;
  animation-delay: 1s;
}
.boot_anim span {
  transition: 1s;
}
.boot_anim span.selected {
  transform: scale(2);
  opacity: 1;
}
</style>
