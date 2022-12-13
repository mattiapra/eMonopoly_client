import { acceptHMRUpdate, defineStore } from 'pinia'

export const useCompleanno2022Store = defineStore('Compleanno2022', () => {
  const sentences = ref([
    'E così, siamo arrivati a 21 amore mio.',
    '21 anni, wow!',
    '',
    'Ma ci pensi? Sembra l\'altro ieri che ne avevi 18 e ci siamo conosciuti.. sembra passata una vita, una vita insieme ovviamente.',
    'Ma ti ricordi il nostro primo viaggio?',
    'Anche se la partenza non l\'abbiamo fatta "fisicamente insieme", da quel momento in poi abbiamo iniziato il nostro grande viaggio insieme.',
    'La nostra grande vita insieme. ❤',
    'Ed è iniziata così..',
    '%foto%roma.jpg',
    '',
    'E oggi, 26 Novembre.. wow che bel numero, e che bel giorno..',
    'Esattamente un anno fa eravamo un po\'...',
    '%foto%buda.jpg',
    'Mascherati! Hahaha!',
    '',
    '%foto%natalevecchia.jpg',
    'Ma sempre innamorati',
    '',
    'È appena iniziata la nostra avventura, la tua avventura, verso una delle città più belle del mondo, probabilmente la più romantica del mondo.',
    'E io sono qui per ricordarti quanto tu sia importante per me, quanto sia importante per me che tu oggi ti senta felice.',
    '',
    '(Ma non solo oggi eh, sia chiaro! Per me è importante che tu sia sempre felice, non dimenticarlo)',
    '',
    'Ah e.. ovviamente anche domani dovrai essere felice mi raccomando, che questo viaggio ne dura due di giorni hahaha!',
    '',
    'Voglio ricordarti quanto tu sia bella, quanto tu sia perfetta, quanto tu sia dolce, quanto tu sia speciale..',
    '%foto%mare.jpg',
    '',
    'Ti amo amore mio,',
    'Da impazzire,',
    'All\'ellizione, come abbiamo trovato per descriverlo.❤',
    '%foto%recentissima.jpg',
    '',
    'Che questo sia solo il secondo, secondo di tanti, tantissimi viaggi, esplorazioni, momenti, attimi, giornate. Tutti, rigorosamente, insieme. (A fare 🥂)',
    '',
    'Sei il mio tesoro grande amore mio,',
    'Goditi questo viaggio.',
    'Goditi Parigi.🎁',
    '',
    '(Per assaggiare un altro di questi)',
    '%foto%pan.jpeg',
    '',
    '(O per fare foto sceme così)',
    '%foto%divertente.jpg',
    '',
    'L\'importante è che ci sentiamo così',
    '%foto%natalerecente.jpg',
    '',
    '',
    'Ti auguro il migliore dei possibili compleanni amore mio,',
    'Che sia indimenticabile.',
    'Ti amo.❤',
    '',
    'Il tuo, solo tuo, Mattia.',
  ])

  const specials = ref([
    {
      pre: [
        'P.S.: Torna qui alle 15:45 per una sorpresina',
        '',
        '(sì, se la Apple fosse meglio ti invierei una notifica di promemoria, ma ancora non si può fare, quindi metti una sveglia)',
      ],
      post: ['Sono le 16, voglio la mia sorpresa'],
    },
    {
      pre: [
        'Anche se probabilmente già lo hai capito..',
        'Torna qui alle 21:45',
        '',
        'Sì, stesso problema di oggi pomeriggio... (triste)',
      ],
      post: ['Wooo, io sono qui! Dov\'è il biglietto???'],
    },
    {
      pre: ['E poi.. ti chiedo di tornare qui appena scendiamo dalla Torre Eiffel'],
      post: [
        'Spero che tu abbia portato un indelebile nero, perché voglio che scriviamo le nostre iniziali, con la data di oggi, per poi venire a ritrovarla quando ci ritorneremo.',
        '',
        'Così da ripensare a oggi.',
        'Da ripensare a quando eravamo così.',
        'Da ripensare al nostro amore.',
        '',
        'Da amare quanto ci siamo amati, per riderci su e dire: "che stupinigi che eravamo, credevamo di amarci all\'infinito all\'ora, e se quello era infinito, questo cos\'è?".',
      ],
    },
  ])

  return {
    sentences,
    specials,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCompleanno2022Store, import.meta.hot))
