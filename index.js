/**
 * Calculate the shortest distance between two points on Earth using Haversine formula
 * @param {Object} point1 - First location with latitude and longitude
 * @param {number} point1.lat - Latitude of first point in degrees
 * @param {number} point1.lng - Longitude of first point in degrees
 * @param {Object} point2 - Second location with latitude and longitude
 * @param {number} point2.lat - Latitude of second point in degrees
 * @param {number} point2.lng - Longitude of second point in degrees
 * @param {string} unit - Unit of distance ('km' or 'mi'), defaults to 'km'
 * @returns {number} - Distance between the points in specified unit
 */
function calculateGeoDistance(point1, point2, unit = 'km') {
    // Input validation
    if (!point1 || !point2 || 
        typeof point1.lat !== 'number' || typeof point1.lng !== 'number' ||
        typeof point2.lat !== 'number' || typeof point2.lng !== 'number') {
        throw new Error('Invalid input: Points must have valid lat and lng coordinates');
    }

    // Earth's radius in kilometers
    const EARTH_RADIUS = 6371;

    // Convert latitude and longitude from degrees to radians
    const lat1 = toRadians(point1.lat);
    const lng1 = toRadians(point1.lng);
    const lat2 = toRadians(point2.lat);
    const lng2 = toRadians(point2.lng);

    // Differences in coordinates
    const dLat = lat2 - lat1;
    const dLng = lng2 - lng1;

    // Haversine formula
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
    // Calculate distance in kilometers
    let distance = EARTH_RADIUS * c;

    // Convert to miles if requested
    if (unit.toLowerCase() === 'mi') {
        distance *= 0.621371;
    }

    // Round to 2 decimal places
    return Number(distance.toFixed(2));
}

// Helper function to convert degrees to radians
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}


module.exports = calculateGeoDistance;