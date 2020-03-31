<template>
  <q-page class="flex flex-center full-width q-pa-md text-subtitle1 text-justify" style="max-width: 1280px;">
    <div class="full-width" style="max-width: 1024px">
      <div class="q-pa-md text-center">
        {{ $t('backend.h1') }}
      </div>
      <div class="full-width flex flex-center q-pa-md">
        <q-img
          class="rounded-borders"
          src="../statics/backend.svg"
          spinner-color="secondary"
        ></q-img>
      </div>
      <div class="q-pa-md text-center">{{ $t('backend.h2') }}</div>
      <div class="full-width flex flex-center q-pa-md">
        <q-img v-if="this.$i18n.locale === 'ru'"
          class="rounded-borders"
          src="../statics/MeteoStepsRU.svg"
          spinner-color="secondary"
        ></q-img>
        <q-img v-else
          class="rounded-borders"
          src="../statics/MeteoSteps.svg"
          spinner-color="secondary"
        ></q-img>
      </div>
      <ol>
        <li>{{ $t('backend.li1') }}</li>
        <li>{{ $t('backend.li2[0]') }}<a href="https://github.com/join" target="_blank">{{ $t('backend.li2[1]') }}</a>{{ $t('backend.li2[2]') }}</li>
        <li>{{ $t('backend.li3[0]') }}<a href="https://git-scm.com/downloads" target="_blank">{{ $t('backend.li3[1]') }}</a>{{ $t('backend.li3[2]') }}</li>
        <li>{{ $t('backend.li4[0]') }}<a href="https://github.com/alexanderkif/meteo" target="_blank">{{ $t('backend.li4[1]') }}</a>{{ $t('backend.li4[2]') }}</li>
        <li>{{ $t('backend.li5[0]') }}<a href="https://www.mongodb.com/cloud/atlas/register" target="_blank">{{ $t('backend.li5[1]') }}</a>{{ $t('backend.li5[2]') }}</li>
        <li>{{ $t('backend.li6[0]') }}<a href="https://zeit.co" target="_blank">{{ $t('backend.li6[1]') }}</a>{{ $t('backend.li6[2]') }}</li>
        <li>{{ $t('backend.li7') }}</li>
        <li>{{ $t('backend.li8') }}</li>
        <li>{{ $t('backend.li9') }}<a href="https://nodejs.org/" target="_blank">Node.js</a>.</li>
        <li>{{ $t('backend.li10') }}<a href="https://code.visualstudio.com/download" target="_blank">Visual Studio Code</a>.</li>
        <li>{{ $t('backend.li11') }}</li>
        <li>{{ $t('backend.li12') }}</li>
        <li>{{ $t('backend.li13') }}</li>
      </ol>
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
      visible: false
    }
  },
  created () {
    this.visible = true
  },
  methods: {}
}
</script>
