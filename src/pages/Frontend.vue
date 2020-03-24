<template>
  <q-page class="flex flex-center full-width q-pa-md text-subtitle1 text-justify" style="max-width: 1280px;">
    <div class="full-width" style="max-width: 1024px">
      <div class="q-pa-md">
        {{ $t('front.h1') }}
        <ul style="list-style: none;">
          <li>
            <code :class="codeClass">/data?start=START_DATE&finish=FINISH_DATE&tframe=TFRAME&step=STEP</code> - universal request to backend
          </li>
          <li>
            <code :class="codeClass">/data</code> - to get 3 hours datasets
          </li>
          <li>
            <code :class="codeClass">/</code> - to get lastDataset
          </li>
        </ul>
      </div>
      <div class="q-pa-md">
        {{ $t('front.h2[0]') }}
        <a href="https://quasar.dev/" target="_blank" :class="aClass">Quasar Framework</a>,
        {{ $t('front.h2[1]') }}
        <a href="https://vuejs.org/" target="_blank" :class="aClass">Vue.js</a>.
      </div>
      <div class="q-pa-md">
        {{ $t('front.h3[0]') }}
        <a href="https://github.com/alexanderkif/meteo-front" target="_blank" :class="aClass">{{ $t('front.h3[1]') }}</a>{{ $t('front.h3[2]') }}
        <code :class="codeClass">npm install</code>{{ $t('front.h3[3]') }}
        <code :class="codeClass">npm run build</code>
        {{ $t('front.h3[4]') }}
        <code :class="codeClass">npm run build:pwa</code>
        {{ $t('front.h3[5]') }}
        <code :class="codeClass">npm run deploy</code>
        {{ $t('front.h3[6]') }}
        <code :class="codeClass">npm run deploy:pwa</code>
        {{ $t('front.h3[7]') }}
      </div>
      <div class="q-pa-md">
        {{ $t('front.h4[0]') }}
        <code :class="codeClass">dist/spa</code>{{ $t('front.h4[1]') }}<code :class="codeClass">dist/pwa</code>{{ $t('front.h4[2]') }}
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
</style>

<script>

export default {
  name: 'Backend',
  components: {},
  data () {
    return {
      codeClass: 'text-white bg-blue-grey-8 q-px-sm',
      aClass: 'text-blue-grey-10'
    }
  },
  created () {
    this.visible = true
  },
  methods: {}
}
</script>
