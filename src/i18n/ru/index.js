// This is just an example,
// so you can safely delete all default props below

export default {
  failed: 'Действие завершилось неудачей',
  success: 'Действие завершилось успешно',
  main: {
    title: 'Автономная WiFi метеостанция на солнечной энергии',
    nav0: ['Что здесь', 'происходит?'],
    nav1: ['как это', 'работает?'],
    nav2: ['посмотреть', 'пример'],
    nav3: ['какие детали', 'мне нужны?'],
    nav4: ['Подробнее', 'про backend'],
    nav5: ['Подробнее', 'про arduino'],
    nav6: ['Подробнее', 'про frontend'],
    nav7: ['какие еще', 'есть датчики?'],
    nav8: ['Поддержать', 'проект']
  },
  home: {
    h1: 'Хотите легко и играючи познакомить себя или вашего ребенка с современным веб-программированием с бэкендом на Node.js и фронтендом на Vue / Quasar, а также с микроконтроллерами ардуино? Вы приблизитесь к пониманию, если повторите этот проект наружной автономной Wi-Fi метеостанции на солнечных батареях или реализуете эту задумку со своими датчиками.',
    h2: 'Может быть, вы хотите следить за погодой или датчиками освещенности, открыванием дверей или окон, включением электроприборов или уровнями углекислого газа в течение ночи? Хотели бы вы иметь графики этих событий для мониторинга или анализа за определенный период?',
    h3: 'Или, может быть, вы собираетесь построить зависимость температуры в комнатах своего энергосберегающего умного дома от направления ветра и температуры снаружи? Или вы хотите узнать, какая из внутренних дверей останавливает конвекцию воздуха в доме и снижает расходы на отопление?',
    h4: 'Если спаять пару датчиков и немного их запрограммировать, то можно записать показания этих датчиков в базу данных для анализа, ну или просто наблюдать и делать прогнозы.'
  },
  how: {
    h1: 'Упрощенно процесс записи в базу данных рассмотрим на примере записи состояния двери (открыта/закрыта):',
    li11: 'Ардуина периодично соединяется по WiFi с интернетом и отправляет POST запрос на бекенд с данными состояния двери. Например, пока дверь закрыта периодично отправляет в данных единичку, когда открыта - ноль.',
    li12: 'Программа на сервере принимает эти данные, добавляет к ним текущее время и складывает в базу данных.',
    li13: 'Все.',
    h2: 'Чтобы посмотреть данные, в браузере нужно перейти по адресу фронтенда, после чего в браузер загрузится Javascript приложение. Есть возможность сохранить это Frontend приложение на свой компьютер или телефон и в дальнейшем этот шаг не выполнять.',
    h3: 'Теперь браузерное Javascript приложение может получать данные с Backend:',
    li21: 'Backend приложению на сервере отправляем запрос, например такой: "отправь нам состояние двери с 20.00 31.12.2019 по 08.00 01.01.2020 с шагом 30 минут".',
    li22: 'Backend приложение забирает эти данные из базы данных и отправляет нам. По примеру выше следующее: "20.00 31.12.2019 - закрыта, 20.30 31.12.2019 - закрыта, 21.00 31.12.2019 - открыта, 21.30 31.12.2019 - закрыта, ..., 08.00 01.01.2020 - закрыта".',
    li23: 'Мы смотрим на данные, возможно в виде графика, и видим, что дверь открывалась между 20.30 - 21.00 31.12.2019.',
    li24: 'Если нужно узнать точнее, то повторяем запрос за меньший период и с меньшим шагом.',
    li25: 'Все.'
  },
  buy: {
    h1: 'Что и где нужно купить, а что можно найти бесплатно',
    h2: 'Купить:',
    goods: [
      {
        title: 'Wemos D1 Mini V3.0',
        text: 'Основная плата-микроконтроллер со встроенным WiFi модулем.'
      },
      {
        title: 'BME 280',
        text: 'Датчик температуры, влажности и давления.'
      },
      {
        title: 'Аккумулятор 18650',
        text: 'Можно взять из старого ноутбука.'
      },
      {
        title: 'Держатель для аккумулятора 18650',
        text: 'Для удобства и возможности горячей замены на случай длительного отсутствия солнечных дней.'
      },
      {
        title: 'Солнечная панель',
        text: 'Или две для последовательного включения с целью увеличения напряжения, если много пасмурных дней.'
      },
      {
        title: 'Cопротивления (резисторы)',
        text: 'Один резистор на 120-130 кОм (у меня 125 кОм, подключен ко входу A0), и три сопротивления 10 кОм. Используйте последовательное и параллельное соединение резисторов.'
      },
      {
        title: 'Диод (любой)',
        text: 'Резисторы, диод и мосфеты можно купить в ближайшем магазине радиодеталей или выпаять из старых радио плат.'
      },
      {
        title: 'MOSFET P0603BDG',
        text: 'Можно использовать любые другие полевые транзисторы с n-каналом и открытием 3V. Их также можно выпаять из неисправных материнских плат.'
      }
    ]
  },
  backend: {
    h1: 'Алгоритм работы Backend',
    h2: 'Последовательность шагов для запуска и деплоя Backend приложения автономной WiFi метеостанции',
    li1: 'Доставка занимает время, поэтому первым делом заказать на Aliexpress (купить в магазине радио) детали: плату Wemos D1 mini, датчик BME 280, аккумулятор 18650 + держатель, солнечную панель (или две для последовательного включения, если много пасмурных дней), сопротивления 125, 10, 10, 10 кОм, полевые транзисторы P0603BDG (можно выпаять из материнских плат), диод, проводки. Также можно приобрести паяльные наборы или паяльные станции, дополнительные датчики или наборы для начинающих.',
    li2: ['Зарегистрироваться на ', 'GitHub', '. На GitHub будем сохранять наше Backend приложение.'],
    li3: ['Установить ', 'Git', '. Git нужен для работы с GitHub.'],
    li4: ['Форкнуть в свой Гитхаб ', 'https://github.com/alexanderkif/meteo', ' (кнопка Fork) и клонировать к себе на компьютер (команда git clone https://github.com/yourRepository/meteo.git).'],
    li5: ['Зарегистрироваться на ', 'Mongo DB', '. Здесь будет расположена База данных для нашего Backend приложения.'],
    li6: ['Зарегистрироваться на ', 'Zeit.co (Now) "Continue with GitHub"', '. Там автоматически будет запускаться наше Backend приложение с GitHub. Установить Now CLI.'],
    li7: 'Создать новый проект на Zeit.co. Привязать его к своему репозиторию meteo на GitHub (GIT INTEGRATION). Добавить в переменные окружения db-uri (uri базы данных) и my-key (ваш праоль доступа к записи в БД, такой же прошиваем в Ардуино). Примеры: "now secrets add my-key mysuperkey", "now secrets add db-uri mongodb+srv://user:db@cluster0-qbirv.mongodb.net/db?retryWrites=true" (ваш uri скопировать на сайте MongoDB).',
    li8: 'Прошить плату Wemos/Arduino. Cмотрите в меню "ПОДРОБНЕЕ ПРО ARDUINO".',
    li9: 'Установить ',
    li10: 'Установить ',
    li11: 'В VSCode открыть папку meteo и в терминале (ctrl+~) выполнить npm install.',
    li12: 'Так как есть изменения (файл MeteoBasicHttpsClient.ino), то можно закоммитить и запушить на GitHub локальный meteo. Автоматически произойдет деплой на zeit.co, где будет ссылка задеплоенного API.',
    li13: 'Все, бэкенд готов.'
  },
  arduino: {
    li1: 'Установите Arduino IDE',
    li2: 'Откройте скетч MeteoBasicHttpsClient.ino из папки arduino.',
    li3: 'Исправьте своими данными',
    li4: 'Подключите плату Wemos D1 mini к компьютеру полным четырехпроводным проводом USB',
    li5: 'Прошейте плату Wemos D1 mini загруженным скетчем',
    li6: 'Плата сразу должна начать отправлять данные на сервер с Backend приложением',
    h1: 'Алгоритм работы программы, прошитой в Ардуино.',
    h2: ['Далее нужно собрать схему для автономной работы и возможности установки метеостанции вне дома. Где и какие детали взять смотрите в меню "КАКИЕ ДЕТАЛИ МНЕ НУЖНЫ?". Для сборки можно использовать пайку или ', 'отладочные платы для беспаечного монтажа и соединительные провода для Arduino .'],
    h3: 'Не забудьте установить перемычку D0-RST для выхода платы из режима глубокого сна. На время прошивки платы не забывайте разрывать эту перемычку.',
    h4: 'Плата стартует, отправляет данные и засыпает на 5 минут. В целях экономии энергии батареи полевой транзистор на выводе D6 отключает питание датчика BME280. Заряд аккумулятора 18650 контролируется входом A0. Если напряжение на батарее превышает 4.2V, выход D7 разрывает цепь заряда аккумулятора от солнечной панели.'
  },
  front: {
    h1: 'Вы можете написать свой вариант фронтенда. Вот варианты запросов к приложению бекенда:',
    h2: ['В примере Frontend реализован на ', ' основанном на '],
    h3: ['Вы можете ', 'форкнуть его в свой GitHub или клонировать на свой локальный компьютер', '. Изменить в файле data.json значение urlAPI адресом своего бэкенда. Установить зависимости, выполнив в консоли ', '. И собрать свой собственный бекенд командой ', ' для создания SPA приложения, или ', ' для создания PWA приложения. После этого можем выполнить ', ' для размещения на gh-pages SPA приложения, или ', ' для размещения на gh-pages PWA приложения.'],
    h4: ['Или скопировать приложение на ваш веб сервер из папки ', ' или ', ' соответственно.']
  }
}
