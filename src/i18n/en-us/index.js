// This is just an example,
// so you can safely delete all default props below

export default {
  failed: 'Action failed',
  success: 'Action was successful',
  main: {
    title: 'Autonomous WiFi weather station with solar panels',
    nav0: ['What\'s going', 'on here?'],
    nav1: ['How it', 'works?'],
    nav2: ['See an', 'example'],
    nav3: ['What details', 'do I need?'],
    nav4: ['More about', 'backend'],
    nav5: ['More about', 'arduino'],
    nav6: ['More about', 'frontend'],
    nav7: ['What sensors', 'are there?'],
    nav8: ['Donate to', 'the project']
  },
  home: {
    h1: 'Do you want to easily and effortlessly introduce yourself or your child to modern web programming with a backend on Node.js and a frontend on Vue / Quasar, and learn to know how to use arduino microcontrollers? You will come closer to understanding if you repeat this project of an external autonomous Wi-Fi weather station with solar batteries or implement your own idea with other sensors.',
    h2: 'Maybe you want to monitor weather or light sensors, opening of doors or windows, turning of electrical appliances or carbon dioxide levels during the night? Would you like to have graphs of these events for monitoring or analysis for a certain period?',
    h3: 'Or maybe you are going to build a dependence of the temperature in the rooms of your energy-saving smart home on the direction of the wind and the temperature outside? Or do you want to know closing of which one of the interior doors stops air convection inside the house and reduces heating costs?',
    h4: 'If you solder a pair of sensors and program them a little, you can record the readings of these sensors in a database for analysis, well, or just watch and make predictions.'
  },
  how: {
    h1: 'We will consider the simplified process of writing to the database using the example of recording the door status (open / closed):',
    li11: 'Arduino periodically connects via WiFi to the Internet and sends a POST request for a backend with door status data. For example, while the door is closed periodically sends a one in the data, when it is open - zero.',
    li12: 'The program on the server receives this data, adds the current time to it, and adds it to the database.',
    li13: 'That\'s all.',
    h2: 'To view the data, in the browser you need to go to the front-end address, after which the Javascript application will be loaded into the browser. It is possible to save this Frontend application to your computer or phone and not to perform this step in the future.',
    h3: 'Now the browser-based Javascript application can receive data from Backend:',
    li21: 'To the backend application on the server, we send a request, for example, this: "send us the door status from 20:00 on December 31, 2019 to 08:00 on 01/01/2020 in 30 minutes increments."',
    li22: 'The backend application takes this data from the database and sends it to us. According to the example above: "20.00 December 31, 2019 - closed, 20.30 December 31, 2019 - closed, 21:00 December 31, 2019 - open, 21.30 December 31, 2019 - closed, ..., 08:00 01/01/2020 - closed."',
    li23: 'We look at the data, possibly in the form of a graph, and see that the door opened between 20.30 - 21.00 12.31.2019.',
    li24: 'If you need to know more precisely, then repeat the request for a shorter period and with a smaller step.',
    li25: 'That\'s all.'
  },
  buy: {
    h1: 'What and where do we need to buy, and what can we find for free',
    h2: 'Buy:',
    goods: [
      {
        title: 'Wemos D1 Mini V3.0',
        text: 'This main board is a microcontroller with a built-in WiFi module.'
      },
      {
        title: 'BME 280',
        text: 'Temperature, humidity and pressure sensor.'
      },
      {
        title: 'Battery 18650',
        text: 'You can take it from an old laptop.'
      },
      {
        title: 'Battery holder 18650',
        text: 'For convenience and the possibility of hot swapping with a long absence of sunny days.'
      },
      {
        title: 'The solar panel',
        text: 'Or two solar panels for series connection in order to increase voltage, if there are many cloudy days.'
      },
      {
        title: 'Resistors',
        text: 'One resistor for 120-130 kOhm (I have 125 kOhm, connected to input A0), and three resistances 10 kOhm. Use a series and parallel connection of resistors.'
      },
      {
        title: 'Any diode',
        text: 'Resistors, diodes and mosfets can be bought at the nearest radio parts store or removed from old radio cards.'
      },
      {
        title: 'MOSFET P0603BDG',
        text: 'You can use any other n-channel field effect transistors with 3V opening. They can also be removed from faulty motherboards.'
      }
    ]
  },
  backend: {
    h1: 'Backend Operation Algorithm',
    h2: 'The sequence of steps to launch and deploy Backend application of a standalone WiFi weather station',
    li1: 'Delivery takes time, so the first thing to order on Aliexpress or buy in the radio parts store: a Wemos D1 mini board, BME 280 sensor, a 18650 battery + holder, a solar panel (or two for successive switching on if there are many cloudy days), resistance 125, 10, 10, 10 kOhm, field effect transistors P0603BDG (can be removed from the motherboard), diode, wiring. You can also purchase soldering kits or soldering stations, additional sensors or kits for beginners.',
    li2: ['Register on ', 'GitHub', '. On GitHub we will save our Backend application.'],
    li3: ['Install ', 'Git', '. Git is needed to work with GitHub.'],
    li4: ['Fork into your github ', 'https://github.com/alexanderkif/meteo', ' (Fork button) and clone it to your computer (git clone https://github.com/yourRepository/meteo.git command).'],
    li5: ['Register for ', 'Mongo DB', '. Here will be located the Database for our Backend application.'],
    li6: ['Register at ', 'Zeit.co (Now) "Continue with GitHub"', '. Our Backend app from GitHub will automatically launch there. Install Now CLI.'],
    li7: 'Create a new project on Zeit.co. Bind it to your meteo repository on GitHub (GIT INTEGRATION). Add to the environment variables db-uri (database uri) and my-key (your access password to the database record, the same must be in Arduino). Examples: "now secrets add my-key mysuperkey", "now secrets add db-uri mongodb + srv: // user: db@cluster0-qbirv.mongodb.net/db? RetryWrites = true" (copy your uri from your MongoDB ).',
    li8: 'Flash the Wemos / Arduino board. Look in the menu "MORE ABOUT ARDUINO".',
    li9: 'Install ',
    li10: 'Install ',
    li11: 'In VSCode, open the meteo folder and in the terminal (ctrl + ~) run npm install.',
    li12: 'Since there are changes (file MeteoBasicHttpsClient.ino), you can commit and push a local meteo on GitHub. The deployment to zeit.co will automatically happen, where there will be a link to the deployed API.',
    li13: 'The backend is ready.'
  },
  arduino: {
    li1: 'Install Arduino IDE',
    li2: 'Open the sketch MeteoBasicHttpsClient.ino from the arduino folder.',
    li3: 'Correct with your data',
    li4: 'Connect the Wemos D1 mini board to a computer with a full four-wire USB cable',
    li5: 'Flash the Wemos D1 mini board with a downloaded sketch',
    li6: 'The board should immediately start sending data to the server with the Backend application',
    h1: 'The algorithm of the program, flashed in Arduino.',
    h2: ['Next, you need to collect a scheme for autonomous work and the possibility of installing a weather station outside the house. Where and what details to take, see the menu "WHAT DETAILS DO I NEED?". For assembly, you can use soldering or ', 'debug boards for solderless mounting and connecting wires for Arduino.'],
    h3: 'Be sure to set the D0-RST jumper to exit the board from deep sleep mode. When flashing the board, do not forget to remove this jumper.',
    h4: 'The board starts, sends data and falls asleep for 5 minutes. To save battery power, the field effect transistor at pin D6 turns off the power to the BME280. The 18650 battery is controlled by input A0. If the battery voltage exceeds 4.2V, the D7 output breaks the battery charge circuit from the solar panel.'
  },
  front: {
    h1: 'You can write your own version of the frontend. Here are the query options for the backend application:',
    h2: ['In the example, Frontend is implemented on the ', ' based on '],
    h3: ['You can ', 'fork it on your GitHub or clone it on your local computer', '. Change urlAPI in the data.json file with the address of your backend. Install dependencies by running ', '. And build your own backend with the ', ' command to create the SPA application, or ', ' to create the PWA application. After that, we can run ', ' to host the application on gh-pages, or ', ' to host the PWA application on gh-pages.'],
    h4: ['Or copy the application to your web server from the ', ' or ', ' folder, respectively.']
  }
}
