export const getSearchOptions = async (city) => {
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  console.log(regionNames.of("GB")); // "United States"

  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=2f1e395bd163a3a9ab9e173e79efcf44`
  );
  const data = await response.json();
    // console.log(data);
  const searchOptions = data.map((city) => {
    return {
      name: city.name,
      state: city.state?city.state:"",
      country: regionNames.of(city.country),
      lat:city.lat,
      lon:city.lon
    };
  });
//   console.log(searchOptions);
  return searchOptions;
};
