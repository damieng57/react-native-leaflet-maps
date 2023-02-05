import React from 'react';
import { render } from '@testing-library/react';
import MapComponentView from './MapComponentView';

describe('MapComponentView', () => {
  test('it renders', () => {
    const { asFragment } = render(
      <MapComponentView
        addDebugMessage={() => {}}
        debugMessages={[]}
        mapCenterPosition={[36.56, -76.17]}
        mapLayers={[]}
        mapMarkers={[]}
        onMapEvent={() => {}}
        setMapRef={() => {}}
        zoom={13}
        mapShapes={[]}
        ownPositionMarker={undefined}
        useMarkerClustering={false}
        zoomControl={false}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
