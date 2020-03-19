<template>
  <q-page class="flex flex-center full-width q-pa-md text-subtitle1 text-justify" style="max-width: 1280px;">
    <div class="full-width" style="max-width: 1024px">
      <div class="q-pa-md text-center">
        Алгоритм работы Backend
      </div>
      <div class="full-width flex flex-center q-pa-md">
        <q-img
          class="rounded-borders"
          src="../statics/backend.svg"
          spinner-color="secondary"
        ></q-img>
      </div>
      <div class="q-pa-md text-center">Последовательность шагов для запуска и деплоя Backend приложения автономной WiFi метеостанции</div>
      <div class="full-width flex flex-center q-pa-md">
        <q-img
          class="rounded-borders"
          src="../statics/MeteoSteps.svg"
          spinner-color="secondary"
        ></q-img>
      </div>
      <ol>
        <li>Доставка занимает время, поэтому первым делом заказать на Aliexpress (купить в магазине радио) детали: плату Wemos D1 mini, датчик BME 280, аккумулятор 18650 + держатель,
          солнечную панель (или две для последовательного включения, если много пасмурных дней), сопротивления 125, 10, 10, 10 кОм, полевые транзисторы P0603BDG (можно выпаять из материнских плат),
          диод, проводки. Также можно приобрести паяльные наборы или паяльные станции, дополнительные датчики или наборы для начинающих.</li>
        <li>Зарегистрироваться на <a href="https://github.com/join" target="_blank">GitHub</a>. На GitHub будем сохранять наше Backend приложение.</li>
        <li>Установить <a href="https://git-scm.com/downloads" target="_blank">Git</a>. Git нужен для работы с GitHub.</li>
        <li>Форкнуть в свой Гитхаб <a href="https://github.com/alexanderkif/meteo" target="_blank">https://github.com/alexanderkif/meteo</a> (кнопка Fork) и клонировать к себе на компьютер
          (команда git clone https://github.com/yourRepository/meteo.git).</li>
        <li>Зарегистрироваться на <a href="https://www.mongodb.com/cloud/atlas/register" target="_blank">Mongo DB</a>. Здесь будет расположена База данных для нашего Backend приложения.</li>
        <li>Зарегистрироваться на <a href="https://zeit.co" target="_blank">Zeit.co (Now) "Continue with GitHub"</a>. Там автоматически будет запускаться наше Backend приложение с GitHub.</li>
        <li>Создать новый проект на Zeit.co. Привязать его к своему репозиторию meteo на GitHub (GIT INTEGRATION). Добавить uri базы данных в переменные окружения.</li>
        <li>Прошить плату Wemos/Arduino. Cмотрите в меню "ПОДРОБНЕЕ ПРО ARDUINO".</li>
        <li>Установить <a href="https://nodejs.org/" target="_blank">Node.js</a>.</li>
        <li>Установить <a href="https://code.visualstudio.com/download" target="_blank">Visual Studio Code</a>.</li>
        <li>В VSCode открыть папку meteo и в терминале (ctrl+~) выполнить npm install.</li>
        <li>Так как есть изменения (файл MeteoBasicHttpsClient.ino), то можно закоммитить и запушить на GitHub локальный meteo. Автоматически произойдет деплой на zeit.co, где будет ссылка задеплоенного API.</li>
        <li>Все, бэкенд готов.</li>
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
