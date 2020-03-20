<template>
  <q-page class="flex flex-center full-width q-pa-md text-subtitle1 text-justify" style="max-width: 1280px;">
    <div class="full-width" style="max-width: 1024px">
      <div class="q-pa-md">
        <ol>
          <li>Установите Arduino IDE</li>
          <li>Скачайте <a href="https://github.com/alexanderkif/meteo/blob/master/arduino/MeteoBasicHttpsClient.ino">скетч</a> </li>
          <li>Исправьте своими данными<br>
            <code>const String mySSID = "mySSID",<br>
              myPass = "myPass",<br>
              myKey = "mySuperKey",<br>
              myUrl = "https://myproject.myaccount.now.sh/data";
              </code>
              </li>
          <li>Подключите плату Wemos D1 mini к компьютеру полным четырехпроводным проводом USB</li>
          <li>Прошейте плату Wemos D1 mini загруженным скетчем</li>
          <li>Плата сразу должна начать отправлять данные на сервер с Backend приложением</li>
        </ol>
      </div>
      <div class="q-pa-md text-center">Алгоритм работы программы, прошитой в Ардуино.</div>
      <div class="full-width flex flex-center q-pa-md">
        <q-img
          class="rounded-borders"
          src="../statics/arduino.svg"
          spinner-color="secondary"
          style="width: 15rem;"
        ></q-img>
      </div>
      <div class="q-pa-md">
        Далее нужно собрать схему для автономной работы и возможности установки метеостанции вне дома.
        Где и какие детали взять смотрите в меню "КАКИЕ ДЕТАЛИ МНЕ НУЖНЫ?". Для сборки можно использовать
        пайку или отладочные платы для беспаечного монтажа и соединительные провода для Arduino.
      </div>
      <div class="q-pa-md">
        Не забудьте установить перемычку D0-RST для выхода платы из режима глубокого сна.
        На время прошивки платы не забывайте разрывать эту перемычку.
      </div>
      <div class="full-width flex flex-center q-pa-md">
        <q-img
          class="rounded-borders"
          src="../statics/schema-min.png"
          spinner-color="secondary"
        ></q-img>
      </div>
      <div class="q-pa-md">
        Плата стартует, отправляет данные и засыпает на 5 минут.
        В целях экономии энергии батареи полевой транзистор на выводе D6 отключает питание датчика BME280.
        Заряд аккумулятора 18650 контролируется входом A0. Если напряжение на батарее превышает 4.2V,
        выход D7 разрывает цепь заряда аккумулятора от солнечной панели.
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
