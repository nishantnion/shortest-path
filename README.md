# geo-distance-calculator

A JavaScript package that calculates the shortest distance between two geographic points using the Haversine formula. This calculator takes into account the Earth's curvature to provide accurate distances between any two points on the globe.

## Installation

```bash
npm install geo-distance-calculator s
```

## Usage

```javascript
const calculateGeoDistance = require('geo-distance-calculator');

// Calculate distance between New York and London
const newYork = { lat: 40.7128, lng: -74.0060 };
const london = { lat: 51.5074, lng: -0.1278 };

// Get distance in kilometers (default)
const distanceKm = calculateGeoDistance(newYork, london);
console.log(`Distance: ${distanceKm} km`); // Output: 5570.33 km

// Get distance in miles
const distanceMi = calculateGeoDistance(newYork, london, 'mi');
console.log(`Distance: ${distanceMi} miles`); // Output: 3461.07 miles
```

## API

### calculateGeoDistance(point1, point2, unit)

Calculates the shortest distance between two geographic points on Earth's surface.

#### Parameters

- `point1` (Object): First location with latitude and longitude
  - `lat` (number): Latitude of first point in degrees
  - `lng` (number): Longitude of first point in degrees
- `point2` (Object): Second location with latitude and longitude
  - `lat` (number): Latitude of second point in degrees
  - `lng` (number): Longitude of second point in degrees
- `unit` (string, optional): Unit of distance measurement
  - Accepts: 'km' (kilometers) or 'mi' (miles)
  - Default: 'km'

#### Returns

- (number): The distance between the two points in the specified unit, rounded to 2 decimal places

#### Throws

- Error: If input points are invalid or missing coordinates

## Examples

```javascript
// Tokyo to Sydney
const tokyo = { lat: 35.6762, lng: 139.6503 };
const sydney = { lat: -33.8688, lng: 151.2093 };

console.log(calculateGeoDistance(tokyo, sydney)); // 7822.95 km
console.log(calculateGeoDistance(tokyo, sydney, 'mi')); // 4860.49 miles

// San Francisco to Paris
const sanFrancisco = { lat: 37.7749, lng: -122.4194 };
const paris = { lat: 48.8566, lng: 2.3522 };

console.log(calculateGeoDistance(sanFrancisco, paris)); // 8975.24 km
console.log(calculateGeoDistance(sanFrancisco, paris, 'mi')); // 5576.73 miles
```

## Technical Details

- Uses the Haversine formula for accurate Earth surface distance calculations
- Takes into account the Earth's curvature (assumes Earth radius of 6371 km)
- Supports both kilometers and miles
- Handles latitude/longitude coordinates in decimal degrees
- Results are rounded to 2 decimal places for readability

## License

MIT
