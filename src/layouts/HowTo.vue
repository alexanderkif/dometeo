<template>
  <q-layout view="hhh lpR fff">

    <q-header elevated class="bg-green text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <div class="full-height bg-green-2">
        <div class="q-pa-md">
          Нужно контролировать датчики метеоданных или света, открытие дверей или окон,
          включение электроприборов или уровень углекислого газа в течение ночи? Хотелось
          бы иметь графики этих событий для контроля или анализа за определенный период?
        </div>
        <div class="q-pa-md">
          Или вы хотите легко и играючи познакомить себя или вашего ребенка с современным
          веб-программированием и микроконтроллерами ардуино?
        </div>
        <div class="q-pa-md">
          А может собираетесь построить зависимость температуры в помещениях вашего
          энергосберегающего умного дома от направления ветра и температуры снаружи?
        </div>
        <div class="q-pa-md">
          Или хотите узнать, закрытие какой из межкомнатных дверей останавливает конвекцию
          воздуха внутри дома и уменьшает затраты на отопление?
        </div>
        <div class="q-pa-md">
          Вы приблизитесь к пониманию, если повторите этот проект наружной автономной Wi-Fi
          метеостанции или реализуете задумку со своими датчиками.
        </div>
        <div class="q-pa-md">
          Упрощенно процесс с датчиком открытия двери выглядит так:
          <br/>
          1. Пока дверь закрыта ардуина периодично отправляет единички, когда открыта - нули.
          <br/>
          2. Программа на сервере принимает эти данные, добавляет к ним текущее время и складывает
          в базу данных.
          <br/>
          3. Все.
        </div>
        <div class="q-pa-md">
          А так можно посмотреть данные:
          <br/>
          1. Программе на сервере отправляем запрос, например такой: "отправь нам состояние двери
          с 20.00 31.12.2019 по 08.00 01.01.2020 с шагом 30 минут".
          <br/>
          2. Прогорамма забирает эти данные из базы данных и отправляет нам. По примеру следующее:
          "20.00 31.12.2019 - закрыта, 20.30 31.12.2019 - закрыта, 21.00 31.12.2019 - открыта,
          21.30 31.12.2019 - закрыта, ..., 08.00 01.01.2020 - закрыта".
          <br/>
          3. Мы смотрим на данные, возможно в виде графика, и видим, что дверь открывалась между
          20.30 - 21.00 31.12.2019.
          <br/>
          4. Если нужно конкретней, то повторяем запрос за меньший период и с меньшим шагом.
          <br/>
          5. Все.
        </div>
      </div>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered :width="240">
      <div class="q-pt-md full-height bg-blue-grey-2">
        <div class="q-pa-md bg-blue-grey-2 flex flex-center"
          v-for="(button,index) in buttons"
          :key="index"
        >
          <q-btn :color="button.color" push :width="200">
            <div class="row items-center no-wrap">
              <q-icon left :name="button.icon" />
              <div class="text-center">
                {{ button.top }}<br>{{ button.bottom }}
              </div>
            </div>
          </q-btn>
        </div>
      </div>
    </q-drawer>

    <q-page-container class="flex flex-center bg-blue-grey-1">
      <router-view class="text-blue-grey-10" />
    </q-page-container>

    <q-footer elevated class="bg-blue-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      right: true,
      buttons: [
        {
          color: 'red',
          icon: 'important_devices',
          top: 'я тоже хочу',
          bottom: 'сделать такое'
        },
        {
          color: 'orange',
          icon: 'school',
          top: 'что я научусь',
          bottom: 'использовать'
        },
        {
          color: 'yellow',
          icon: 'attach_money',
          top: 'какие детали',
          bottom: 'мне купить'
        },
        {
          color: 'green',
          icon: 'build',
          top: 'какие бывают',
          bottom: 'еще датчики'
        },
        {
          color: 'blue',
          icon: 'map',
          top: 'посмотреть',
          bottom: 'все шаги'
        },
        {
          color: 'purple',
          icon: 'phonelink',
          top: 'посмотреть',
          bottom: 'пример'
        }
      ]
    }
  }
}
</script>
