import React, { useEffect, useState } from 'react';

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = () => {
    fetch('https://api.weatherapi.com/v1/forecast.json?key=ff9b41622f994b1287a73535210809&q=Mumbai&days=3')
      .then(response => response.json())
      .then(json => setWeatherData(json));
  };

  const formattedDateDisplay = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    return new Date(date).toLocaleDateString('en-US', options);
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className="max-w-sm mx-auto bg-bg-white p-5 rounded-3xl shadow-2xl">
      {weatherData ? (
        <>
          <h2 className="font-bold text-gray-800 text-lg dark:text-gray-400">
            {formattedDateDisplay(new Date())}
          </h2>
          <div className="flex mt-4 mb-2">
            <div className="flex-1">
              <div className="text-gray-600 text-sm dark:text-gray-400">
                {weatherData.location.name + ', ' + weatherData.location.region}
              </div>
              <div className="text-3xl font-bold text-gray-800 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: `${weatherData.current.temp_c} °C` }}></div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{weatherData.current.condition.text}</div>
            </div>
            <div className="w-24">
              <img src={`https:${weatherData.current.condition.icon}`} alt={weatherData.current.condition.text} loading="lazy" />
            </div>
          </div>
          <div className="flex space-x-2 justify-between border-t dark:border-gray-500">
            {weatherData.forecast.forecastday.slice(1).map((forecast, key) => (
              <div key={key} className={`flex-1 text-center pt-3 ${key === 0 ? 'border-r dark:border-gray-500' : ''}`}>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {`${forecast.date.split('-')[2]}/${forecast.date.split('-')[1]}/${forecast.date.split('-')[0]}`}
                </div>
                <img src={`https:${forecast.day.condition.icon}`} alt={forecast.day.condition.text} loading="lazy" className="mx-auto" />
                <div className="font-semibold text-gray-800 mt-1.5 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: `${forecast.day.maxtemp_c} °C` }}></div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{forecast.day.condition.text}</div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="animate-pulse">
          <div className="flex mt-4 mb-5">
            <div className="flex-1">
              <div className="rounded h-2 mb-1.5 bg-gray-200 w-1/2"></div>
              <div className="bg-gray-200 rounded h-4"></div>
              <div className="rounded h-2 mt-1.5 bg-gray-200 w-1/2"></div>
            </div>
            <div className="w-24">
              <div className="w-12 h-12 rounded-full bg-gray-100 mx-auto"></div>
            </div>
          </div>
          <div className="flex space-x-2 justify-between border-t h-32 dark:border-gray-500">
            <div className="flex-1 text-center pt-4 border-r px-5 dark:border-gray-500">
              <div className="rounded h-2 mb-2 bg-gray-200 w-1/2 mx-auto"></div>
              <div className="w-12 h-12 rounded-full bg-gray-100 mx-auto mb-2"></div>
              <div className="rounded h-3 mt-1 bg-gray-200 mt-1.5 mx-auto"></div>
              <div className="rounded h-2 mt-1 bg-gray-200 w-1/2 mx-auto"></div>
            </div>
            <div className="flex-1 text-center pt-4 px-5">
              <div className="rounded h-2 mb-2 bg-gray-200 w-1/2 mx-auto"></div>
              <div className="w-12 h-12 rounded-full bg-gray-100 mx-auto mb-2"></div>
              <div className="rounded h-3 mt-1 bg-gray-200 mt-1.5 mx-auto"></div>
              <div className="rounded h-2 mt-1 bg-gray-200 w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
