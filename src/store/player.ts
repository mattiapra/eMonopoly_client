import { acceptHMRUpdate, defineStore } from 'pinia'
import type { PlayerShape } from '@server/interfaces/AbstractClientPlayer'
import { PlayerToServerEmits, ServerToPlayerEmits } from '@server/interfaces/Emits'
import type { Socket } from 'socket.io-client'
import { io } from 'socket.io-client'

export const usePlayerStore = defineStore('PlayerStore', () => {
  const socket = ref<Socket | null>(null)
  const playerData = reactive({
    id: null as string | null,
    name: null as string | null,
    budget: 5000 as number,
    isBank: false,
  })

  const playersList = ref([] as Array<PlayerShape>)

  const connect = (isBank = false) => {
    const skipListeners = !!socket.value
    socket.value = io(import.meta.env.VITE_SERVER_URL, {
      query: {
        bank: isBank,
      },
    })

    if (!skipListeners) {
      socket.value.on(ServerToPlayerEmits.UPDATE_MONEY, (newBudget: number) => {
        playerData.budget = newBudget
      })
      socket.value.on(ServerToPlayerEmits.PLAYERS_LIST, (list: Array<PlayerShape>) => {
        playersList.value = list
      })
    }
  }

  const send = (to: string, amount: number) => {
    if (!socket.value)
      return

    socket.value.emit(PlayerToServerEmits.SEND, to, amount, (done: boolean) => {
      if (done)
        playerData.budget -= amount
      else
        console.warn('error')
    })
  }

  return {
    playerData,
    playersList,
    connect,
    send
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePlayerStore, import.meta.hot))
