<template>
  <q-page class="flex flex-center full-width q-pa-md text-subtitle1 text-justify" style="max-width: 1280px;">
    <div class="full-width" style="max-width: 1024px">
      <div class="q-pa-md">
        Вы можете написать свой вариант фронтенда. Вот варианты запросов к приложению бекенда:
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
        В <b>примере</b> Frontend реализован на
        <a href="https://quasar.dev/" target="_blank" :class="aClass">Quasar Framework</a>,
        основанном на <a href="https://vuejs.org/" target="_blank" :class="aClass">Vue.js</a>.
      </div>
      <div class="q-pa-md">
        Вы можете <a href="https://github.com/alexanderkif/meteo-front" :class="aClass">форкнуть его в свой GitHub
        или клонировать на свой локальный компьютер</a>. Изменить в файле data.json значение urlAPI
        адресом своего бэкенда. Установить зависимости, выполнив в консоли
        <code :class="codeClass">npm install</code>.
        И собрать свой собственный бекенд командой
        <code :class="codeClass">npm run build</code>
        для создания SPA приложения, или
        <code :class="codeClass">npm run build:pwa</code>
        для создания PWA приложения. После этого можем выполнить
        <code :class="codeClass">npm run deploy</code>
        для размещения на gh-pages SPA приложения, или
        <code :class="codeClass">npm run deploy:pwa</code>
        для размещения на gh-pages PWA приложения.
      </div>
      <div class="q-pa-md">
        Или скопировать приложение на ваш веб сервер из папки
        <code :class="codeClass">dist/spa</code> или <code :class="codeClass">dist/pwa</code> соответственно.
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
