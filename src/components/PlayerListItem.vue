<script lang="ts" setup>
const props = defineProps({
  isBank: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  readyState: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <li>
    <span v-if="props.isBank">
      B
    </span>
    <span>
      {{ name }}
    </span>
    <figure class="icon">
      {{ props.readyState ? '✔️' : '❌' }}
    </figure>
  </li>
</template>

<style scoped>

</style>
