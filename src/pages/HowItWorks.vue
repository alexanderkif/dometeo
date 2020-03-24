<template>
  <q-page class="flex flex-center full-width q-pa-md text-subtitle1 text-justify" style="max-width: 1280px;">
    <div class="full-width" style="max-width: 1024px">
      <div class="full-width flex flex-center q-pa-md">
        <q-img
          class="rounded-borders"
          src="../statics/HowPOST.svg"
          spinner-color="secondary"
          style="max-width: 640px"
          contain
        ></q-img>
      </div>
      <div class="q-pa-md">
        {{ $t('how.h1') }}
        <ol>
          <li>{{ $t('how.li11') }}</li>
          <li>{{ $t('how.li12') }}</li>
          <li>{{ $t('how.li13') }}</li>
        </ol>
      </div>
      <div class="full-width flex flex-center q-pa-md">
        <q-img
          class="rounded-borders"
          src="../statics/HowFront.svg"
          spinner-color="secondary"
          style="max-width: 640px"
          contain
        ></q-img>
      </div>
      <div class="q-pa-md">
        {{ $t('how.h2') }}
      </div>
      <div class="full-width flex flex-center q-pa-md">
        <q-img
          class="rounded-borders"
          src="../statics/HowGetData.svg"
          spinner-color="secondary"
          style="max-width: 640px"
          contain
        ></q-img>
      </div>
      <div class="q-pa-md">
        {{ $t('how.h3') }}
        <ol>
          <li>{{ $t('how.li21') }}</li>
          <li>{{ $t('how.li22') }}</li>
          <li>{{ $t('how.li23') }}</li>
          <li>{{ $t('how.li24') }}</li>
          <li>{{ $t('how.li25') }}</li>
        </ol>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
</style>

<script>

export default {
  name: 'HowItWorks',
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
