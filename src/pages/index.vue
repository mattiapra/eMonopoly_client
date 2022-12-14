<script lang="ts" setup>
import PlayerListItem from '~/components/PlayerListItem.vue'
import { usePlayerStore } from '~/store/player'

const playerStore = usePlayerStore()
</script>

<template>
  <h3>Lista giocatori</h3>
  <ul>
    <PlayerListItem
      v-for="player in playerStore.playersList"
      :key="player.id"
      :ready-state="player.readyState"
      :name="player.name"
      :is-bank="playerStore.isBank"
    />
  </ul>
</template>
