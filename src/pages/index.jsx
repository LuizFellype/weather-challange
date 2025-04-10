import * as React from "react";

import CityCard from "@/components/CityCard";

import { getAllCitiesWeather } from "@/services/getAllCitiesWeather";

import { styles } from "@/styles";
import { config } from "@/config";
import { RefreshPage } from "@/components/RefreshPage";

const revalidateInMinutes = 10

const Home = ({
  weather,
}) => {
  return (
    <>
      <RefreshPage intervalInMinutes={revalidateInMinutes} /> 

      <div className={styles.homeWrapper}>
        <h1 className={styles.h1}>{config.title}</h1>
        <p className={styles.description}>{config.description}</p>

        <ol className="list-decimal space-y-1">
          {weather?.map((cityData) => (
            <CityCard key={`${cityData.lat}_${cityData.lon}`} data={cityData} />
          ))}
        </ol>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const weather = await getAllCitiesWeather();

  return {
    props: { weather },
    revalidate: 60 * revalidateInMinutes,
  };
};
