import {
  AnimationType,
  MapMarker,
  MapShapeType,
} from 'react-native-leaflet-maps';

const getDuration = (): number => Math.floor(Math.random() * 3) + 1;
const getDelay = (): number => Math.floor(Math.random()) * 0.5;
const iterationCount = 'infinite';

export const DEFAULT_LOCATIONS: MapMarker[] = [
  {
    id: 'Washington-DC',
    icon: '⭐',
    position: { lat: 38.895, lng: -77.0366 },
  },
  {
    id: 'Kings-Dominion',
    icon: '🎢',
    position: { lat: 37.8399, lng: -77.4442 },
  },
  {
    id: 'Busch-Gardens-Williamsburg',
    icon: '🎢',
    position: { lat: 37.23652, lng: -76.646 },
  },
  {
    id: 'USS-Wisconsin-(BB-64)',
    icon: '⚓',
    position: { lat: 36.8477, lng: -76.2951 },
  },
  {
    id: 'Walt-Disney-World',
    icon: '🏰',
    position: { lat: 28.3852, lng: -81.5639 },
  },
  {
    id: 'defaultMarker',
    position: { lat: 38.895, lng: -77.0366 },
    size: [32, 32],
    icon: '📍',
  },
  {
    id: '1',
    position: { lat: 36.46410354, lng: -75.6432701 },
    icon: 'https://www.catster.com/wp-content/uploads/2018/07/Savannah-cat-long-body-shot.jpg',
    animation: {
      duration: getDuration(),
      delay: getDelay(),
      iterationCount,
      type: AnimationType.BOUNCE,
    },
  },
];

export const DEFAULT_SHAPES = [
  {
    shapeType: MapShapeType.CIRCLE,
    color: '#123123',
    id: '1',
    center: { lat: 34.225727, lng: -77.94471 },
    radius: 2000,
  },
  {
    shapeType: MapShapeType.CIRCLE_MARKER,
    color: 'red',
    id: '2',
    center: { lat: 38.437424, lng: -78.867912 },
    radius: 15,
  },
  {
    shapeType: MapShapeType.POLYGON,
    color: 'blue',
    id: '3',
    positions: [
      { lat: 38.80118939192329, lng: -74.69604492187501 },
      { lat: 38.19502155795575, lng: -74.65209960937501 },
      { lat: 39.07890809706475, lng: -71.46606445312501 },
    ],
  },
  {
    shapeType: MapShapeType.POLYGON,
    color: 'violet',
    id: '4',
    positions: [
      [
        { lat: 37.13842453422676, lng: -74.28955078125001 },
        { lat: 36.4433803110554, lng: -74.26208496093751 },
        { lat: 36.43896124085948, lng: -73.00964355468751 },
        { lat: 36.43896124085948, lng: -73.00964355468751 },
      ],
      [
        { lat: 37.505368263398104, lng: -72.38891601562501 },
        { lat: 37.309014074275915, lng: -71.96594238281251 },
        { lat: 36.69044623523481, lng: -71.87805175781251 },
        { lat: 36.58024660149866, lng: -72.75146484375001 },
        { lat: 37.36579146999664, lng: -72.88330078125001 },
      ],
    ],
  },
  {
    shapeType: MapShapeType.POLYLINE,
    color: 'orange',
    id: '5',
    positions: [
      { lat: 35.411438052435486, lng: -78.67858886718751 },
      { lat: 35.9602229692967, lng: -79.18945312500001 },
      { lat: 35.97356075349624, lng: -78.30505371093751 },
    ],
  },
  {
    shapeType: MapShapeType.POLYLINE,
    color: 'purple',
    id: '5a',
    positions: [
      [
        { lat: 36.36822190085111, lng: -79.26086425781251 },
        { lat: 36.659606226479696, lng: -79.28833007812501 },
        { lat: 36.721273880045004, lng: -79.81018066406251 },
      ],
      [
        { lat: 35.43381992014202, lng: -79.79370117187501 },
        { lat: 35.44277092585766, lng: -81.23840332031251 },
        { lat: 35.007502842952896, lng: -80.837402343750017 },
      ],
    ],
  },
  {
    shapeType: MapShapeType.RECTANGLE,
    color: 'yellow',
    id: '6',
    bounds: [
      { lat: 36.5, lng: -75.7 },
      { lat: 38.01, lng: -73.13 },
    ],
  },
];

export const DEFAULT_ZOOM: number = 7;
