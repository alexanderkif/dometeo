<template>
  <q-layout view="hhh Lpr Lfr">

    <q-header elevated class="bg-green text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-center">
          <q-avatar>
            <img src="../statics/app-logo-128x128.png">
          </q-avatar>
          {{ $t('main.title') }}
        </q-toolbar-title>
        <q-btn round flat :color="primary" type="a"
          href="https://www.facebook.com/DoMeteo-100437811627140/" target="_blank">
          <svg aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 512 512" class="q-icon notranslate">
            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
            </path>
          </svg>
        </q-btn>
        <LangSwitcher />

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered :width="240" content-class="bg-green-2">
      <div class="q-my-md q-mx-md flex flex-center"
        v-for="(button,index) in buttons"
        :key="index"
      >
        <q-btn :color="button.color" push class="btn-fixed-width" :to="button.link"
          @click="activeColor=button.color; right=true"
          v-if="button.link.indexOf('http')==-1">
          <div class="row items-center fit no-wrap">
            <q-icon left :name="button.icon" />
            <div class="text-center full-width">
              {{ $t(`main.nav${index}[0]`) }}<br>{{ $t(`main.nav${index}[1]`) }}
            </div>
          </div>
          <div
            round
            v-if="activeColor==button.color"
            :class="`bg-${activeColor} shadow-1`"
            style="position:absolute; width: 10px; height: 10px; right: -15px; border-radius: 50%;"
          ></div>
        </q-btn>
        <q-btn :color="button.color" push class="btn-fixed-width" type="a" :href="button.link"
          v-else target="_blank">
          <div class="row items-center fit no-wrap">
            <q-icon left :name="button.icon" />
            <div class="text-center full-width">
              {{ $t(`main.nav${index}[0]`) }}<br>{{ $t(`main.nav${index}[1]`) }}
            </div>
          </div>
        </q-btn>
      </div>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered :width="222"
      content-class="bg-blue-grey-5 text-center text-white">
      <Advertising />
    </q-drawer>

    <q-page-container :class="`flex flex-center bg-${activeColor}-1`">
      <router-view class="text-blue-grey-10" />
    </q-page-container>

    <q-footer elevated class="bg-blue-grey-8 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title>
          &copy; Aleksandr Nikiforov, 2020
        </q-toolbar-title>
        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import Advertising from '../components/Advertising'
import LangSwitcher from '../components/LangSwitcher'

export default {
  components: {
    Advertising,
    LangSwitcher
  },
  data () {
    return {
      left: false,
      right: false,
      activeColor: 'red',
      buttons: [
        {
          color: 'red',
          icon: 'important_devices',
          link: '/'
        },
        {
          color: 'orange',
          icon: 'help',
          link: '/how'
        },
        {
          color: 'yellow',
          icon: 'phonelink',
          link: 'https://alexanderkif.github.io/meteo-front'
        },
        {
          color: 'green',
          icon: 'attach_money',
          link: '/buy'
        },
        {
          color: 'teal',
          icon: 'cloud_queue',
          link: '/backend'
        },
        {
          color: 'cyan',
          icon: 'memory',
          link: '/arduino'
        },
        {
          color: 'deep-purple',
          icon: 'phone_android',
          link: '/frontend'
        },
        {
          color: 'purple',
          icon: 'build',
          link: 'https://s.click.aliexpress.com/e/_ePFeIy'
        },
        {
          color: 'pink',
          icon: 'card_giftcard',
          link: 'https://paypal.me/dometeo'
        }
      ]
    }
  },
  created () {
    this.activeColor = this.buttons.filter(btn => btn.link === this.$route.path)[0].color
  }
}
</script>

<style lang="scss" scoped>
.btn-fixed-width {
  width: 200px;
}
</style>
