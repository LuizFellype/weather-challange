

## General
App using Next.js. 
Lightning fast static pages, updates within 10min interval using ISR Feature.

Right now the updates is done on the client by reloading the page thru window api, this could be improved by using Next revalidatePath + redirect.

App main structure:
`Components`:
 - CityCard
  Renders the city weather basic infos: 
   - City name 
   - Colorful Temperature based on thresholds (blue for < 6; orange for < 26; red > 25) 
   - Pressure and Humidity.
 - RefreshPage
  Set a interval to reload page within 10min interval to get updated data.
`Lib`
 - `getAllCitiesWeather`: get all weather data needed(from Joinville, San Francisco and Urubici cities) at the same time using `Promise.all` to improve time execution.
`Index`
 - `Home` wrapper component: where we use `getStaticProps` to configure the strategy of getting the data with revalidation timing from the server and list it.


## Getting Started

First, install dependencies:

```bash
npm i
```

Create account and set up plan to generate and copy the secrect key.
Create `.env.local` file on root project, assign the API KEY to this variable:
`WEATHER_API_KEY="API_KEY"`

ps.: If you don't want to, you could replace the return value of `getAllCitiesWeather` function to return the mock `allWeathers` from `mock-db/weather`.

To run the development server:

```bash
npm run dev
```

To run build version:

```bash
npm run build && npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


To run tests:

```bash
npm run test

# for watch mode
npm run test:w 
```




