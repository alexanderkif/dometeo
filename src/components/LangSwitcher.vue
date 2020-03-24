<template>
  <q-btn flat rounded size="md" :label="lang" @click="chooseLang" />
</template>

<script>
export default {
  data () {
    return {
      langSet: [
        { value: 'en-us', label: 'English' },
        { value: 'ru', label: 'Russian' }
      ],
      lang: ''
    }
  },
  created () {
    this.lang = this.langSet.filter(l => l.value !== this.$i18n.locale)[0].label || 'English'
  },
  methods: {
    chooseLang () {
      this.lang = this.langSet.filter(l => l.value === this.$i18n.locale)[0].label
      this.$i18n.locale = this.langSet.filter(l => l.value !== this.$i18n.locale)[0].value
    }
  }
}
</script>
