<template>
  <q-page class="flex flex-center full-width q-pa-md text-subtitle1 text-justify" style="max-width: 1280px;">
    <div class="full-width" style="max-width: 1024px">
      <div class="q-pa-md">{{ $t('home.h1') }}</div>
      <div class="full-width flex flex-center q-pa-md">
        <q-img
          class="rounded-borders"
          src="../statics/how.svg"
          spinner-color="secondary"
          style="max-width: 631px"
          contain
        ></q-img>
      </div>
      <div class="q-pa-md">{{ $t('home.h2') }}</div>
      <div class="flex flex-center row justify-center">
        <q-img
          class="col-7"
          src="../statics/mobile-hor-menu-ip.png"
          spinner-color="secondary"
          style="max-width: 529px"
        ></q-img>
        <q-img
          class="col-5 q-mt-lg q-ml-lg"
          src="../statics/mobile-vert-lg.png"
          spinner-color="secondary"
          style="max-width: 385px"
        ></q-img>
      </div>
      <div class="q-pa-md">{{ $t('home.h3') }}</div>
      <div class="full-width flex flex-center q-pa-md">
        <q-img
          src="../statics/desktop-tv.png"
          spinner-color="secondary"
          style="max-width: 801px;"
        ></q-img>
      </div>
      <div class="q-pa-md">{{ $t('home.h4') }}</div>
      <div class="full-width flex flex-center q-pa-md">
        <q-img
          class="rounded-borders"
          src="../statics/schema-min.png"
          spinner-color="secondary"
        ></q-img>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
</style>

<script>

export default {
  name: 'Home',
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
