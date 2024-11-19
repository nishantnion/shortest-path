const calculateGeoDistance = require('./index');

// Test real-world locations
console.log('\nTesting with real-world locations:');

// Example 1: New York to London
const newYork = { lat: 40.7128, lng: -74.0060 };
const london = { lat: 51.5074, lng: -0.1278 };
console.log('Distance from New York to London:');
console.log(`${calculateGeoDistance(newYork, london)} kilometers`);
console.log(`${calculateGeoDistance(newYork, london, 'mi')} miles`);

// Example 2: Tokyo to Sydney
const tokyo = { lat: 35.6762, lng: 139.6503 };
const sydney = { lat: -33.8688, lng: 151.2093 };
console.log('\nDistance from Tokyo to Sydney:');
console.log(`${calculateGeoDistance(tokyo, sydney)} kilometers`);
console.log(`${calculateGeoDistance(tokyo, sydney, 'mi')} miles`);

// Example 3: Same location (should be 0)
console.log('\nDistance between same point:');
console.log(`${calculateGeoDistance(tokyo, tokyo)} kilometers`);

// Example 4: Error handling
try {
    calculateGeoDistance(null, london);
} catch (error) {
    console.log('\nError handling test:', error.message);
}