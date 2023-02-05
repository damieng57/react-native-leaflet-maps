import * as React from 'react';
import { SafeAreaView, Text, View, Alert } from 'react-native';
import {
  LatLng,
  LeafletView,
  LeafletWebViewEvents,
  LeafletWebViewMessage,
  MapMarker,
} from 'react-native-leaflet-maps';
import { CommandButton } from './CommandButton';
import { DEFAULT_LOCATIONS, DEFAULT_SHAPES } from './data';
import { styles } from './styles';
import { LatLngObject, TAction, TState } from './types';

const initialState: TState = {
  addMode: false,
  deleteMode: false,
};

const modeManagerReducer = (state: TState, action: TAction) => {
  switch (action.type) {
    case 'addMarker':
      return {
        addMode: !state.addMode,
        deleteMode: false,
      };
    case 'deleteMarker':
      return {
        addMode: false,
        deleteMode: !state.deleteMode,
      };
    default:
      return initialState;
  }
};

export default function App() {
  const [state, dispatch] = React.useReducer(modeManagerReducer, initialState);
  const [zoom, setZoom] = React.useState(15);
  const [locations, setLocations] =
    React.useState<Array<MapMarker>>(DEFAULT_LOCATIONS);
  const [coordinate, setCoordinate] = React.useState({
    lat: 38.895,
    lng: -77.0366,
  });

  const centerToCoordinate = React.useCallback(() => {
    setCoordinate({
      lat: 38.895,
      lng: -77.0366,
    });
  }, []);

  const zoomIn = () => {
    setZoom(zoom + 1);
  };

  const zoomOut = () => {
    setZoom(zoom - 1);
  };

  const deleteMarker = (id: string) => {
    const _locations = locations.filter((location) => location.id !== id);
    setLocations(_locations);
  };

  const addMarker = (position?: LatLng) => {
    if (!position) return;
    setLocations([
      ...locations,
      {
        id: (Math.random() * 1000).toString(),
        position,
        icon: '👻',
      },
    ]);
  };

  const onMessageReceived = (message: LeafletWebViewMessage) => {
    switch (message.event) {
      case LeafletWebViewEvents.ON_MAP_MARKER_CLICKED:
        if (state.deleteMode) {
          if (message?.payload?.mapMarkerID) {
            return deleteMarker(message?.payload?.mapMarkerID);
          }
        }

        Alert.alert(
          `Map Marker Touched, ID: ${
            message?.payload?.mapMarkerID || 'unknown'
          }`
        );
        break;

      case LeafletWebViewEvents.ON_MAP_TOUCHED:
        if (state.addMode) {
          return addMarker(message?.payload?.touchLatLng);
        }
        const position: LatLngObject = message?.payload
          ?.touchLatLng as LatLngObject;

        Alert.alert(`Map Touched at:`, `${position.lat}, ${position.lng}`);
        break;

      default:
      // console.log('App received', message);
    }
  };

  const commands = [
    {
      title: '📍',
      backgroundColor: '#D2D5DD',
      onPress: centerToCoordinate,
    },
    {
      title: '🔎+',
      backgroundColor: '#D2D5DD',
      onPress: zoomIn,
    },
    {
      title: '🔎-',
      backgroundColor: '#D2D5DD',
      onPress: zoomOut,
    },
    {
      title: '📍+',
      backgroundColor: state.addMode ? '#B8BACF' : '#D2D5DD',
      onPress: () => dispatch({ type: 'addMarker' }),
    },
    {
      title: '📍-',
      backgroundColor: state.deleteMode ? '#B8BACF' : '#D2D5DD',
      onPress: () => dispatch({ type: 'deleteMarker' }),
    },
  ];

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>React Native Leaflet Maps</Text>
      </View>
      <LeafletView
        onMessageReceived={onMessageReceived}
        mapMarkers={locations}
        mapCenterPosition={coordinate}
        mapShapes={DEFAULT_SHAPES}
        doDebug={false}
        zoom={zoom}
        zoomControl={false}
      />

      <View style={styles.buttonContainer}>
        {commands.map((item, index) => (
          <CommandButton
            key={index}
            title={item.title}
            backgroundColor={item.backgroundColor}
            onPress={item.onPress}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}
