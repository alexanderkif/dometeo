<template>
  <q-page class="flex flex-center full-width q-pa-md text-subtitle1 text-justify" style="max-width: 1280px;">
    <div class="full-width" style="max-width: 1024px">
      <div class="q-pa-md">
        <ol>
          <li>{{ $t('arduino.li1') }}</li>
          <li>{{ $t('arduino.li2') }}</li>
          <li>{{ $t('arduino.li3') }}<br>
            <code>const String mySSID = "mySSID",<br>
              myPass = "myPass",<br>
              myKey = "mySuperKey",<br>
              myUrl = "https://myproject.myaccount.now.sh/data";
              </code>
              </li>
          <li>{{ $t('arduino.li4') }}</li>
          <li>{{ $t('arduino.li5') }}</li>
          <li>{{ $t('arduino.li6') }}</li>
        </ol>
      </div>
      <div class="q-pa-md text-center">{{ $t('arduino.h1') }}</div>
      <div class="full-width flex flex-center q-pa-md">
        <q-img
          class="rounded-borders"
          src="../statics/arduino.svg"
          spinner-color="secondary"
          style="width: 15rem;"
        ></q-img>
      </div>
      <div class="q-pa-md">
        {{ $t('arduino.h2[0]') }}<a href="https://s.click.aliexpress.com/e/_eKihHx" target="_blank" class="text-blue-grey-8">{{ $t('arduino.h2[1]') }}</a> .
      </div>
      <div class="q-pa-md">
        {{ $t('arduino.h3') }}
      </div>
      <div class="full-width flex flex-center q-pa-md">
        <q-img
          class="rounded-borders"
          src="../statics/schema-min.png"
          spinner-color="secondary"
        ></q-img>
      </div>
      <div class="q-pa-md">
        {{ $t('arduino.h4') }}
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
</style>

<script>

export default {
  name: 'Arduino',
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
