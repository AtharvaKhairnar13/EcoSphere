// DataMapping.js
import { totalCarbonEmissionData, perCapitaCarbonEmissionData, temperatureChangeData, countryRankingData, carbonIntensityData, seaLevelRiseData, heatwavesData, stormsData, wildfiresData, rainfallPatternsData } from '../db';

export const dataMapping = {
  totalCarbonEmission: totalCarbonEmissionData[0],
  perCapitaCarbonEmission: perCapitaCarbonEmissionData[0],
  temperatureChange: temperatureChangeData[0],
  countryRanking: countryRankingData[0],
  carbonIntensity: carbonIntensityData[0],
  seaLevelRise: seaLevelRiseData[0],
  heatwaves: heatwavesData[0],
  storms: stormsData[0],
  wildfires: wildfiresData[0],
  rainfallPatterns: rainfallPatternsData[0],
};
