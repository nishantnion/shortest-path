const calculateGeoDistance = require('./index');

describe('calculateGeoDistance', () => {
    test('calculates distance between New York and London', () => {
        const newYork = { lat: 40.7128, lng: -74.0060 };
        const london = { lat: 51.5074, lng: -0.1278 };
        const distance = calculateGeoDistance(newYork, london);
        expect(distance).toBeCloseTo(5570, -2);
    });

    test('returns 0 for same location', () => {
        const point = { lat: 40.7128, lng: -74.0060 };
        expect(calculateGeoDistance(point, point)).toBe(0);
    });

    test('converts to miles correctly', () => {
        const tokyo = { lat: 35.6762, lng: 139.6503 };
        const sydney = { lat: -33.8688, lng: 151.2093 };
        const kmDistance = calculateGeoDistance(tokyo, sydney);
        const miDistance = calculateGeoDistance(tokyo, sydney, 'mi');
        expect(miDistance).toBeCloseTo(kmDistance * 0.621371, 1);
    });

    test('throws error for invalid input', () => {
        expect(() => calculateGeoDistance(null, { lat: 0, lng: 0 })).toThrow();
        expect(() => calculateGeoDistance({ lat: 'invalid', lng: 0 }, { lat: 0, lng: 0 })).toThrow();
    });
});