import React from 'react';
import { StyleSheet } from 'react-native';
import _ from 'lodash';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import PropTypes from 'prop-types';

import MakerImages from '../../themes/MakerImages';
import GetUserLocation from '../../services/UserLocation';
import mapStyle from '../../Config/mapStyle.json';

const DEFAULT_REGION = {
  latitude: 16.069897,
  longitude: 108.234292,
  latitudeDelta: 0.007,
  longitudeDelta: 0.007,
};

export default class CustomMapView extends React.Component {
  constructor(props) {
    super(props);
    const { initialLocation } = props;
    this.state = {
      initialRegion: initialLocation
        ? {
          ...DEFAULT_REGION,
          longitude: initialLocation.longitude,
          latitude: initialLocation.latitude,
        }
        : {
          ...DEFAULT_REGION,
        },
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.emergencyRadius !== nextProps.emergencyRadius ||
      this.props.filter !== nextProps.filter
    ) {
      this.resetNewLocation(nextProps.emergencyRadius);
    }
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.filter !== this.props.filter ||
      this.props.emergencyRadius !== nextProps.emergencyRadius ||
      nextProps.emergencyData !== this.props.emergencyData ||
      nextProps.pushEmergencyId !== this.props.pushEmergencyId ||
      this.props.safeHouseData !== nextProps.safeHouseData
    );
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const { emergencyData, pushEmergencyId } = this.props;
  //   if (emergencyData.length > 0 && pushEmergencyId) {
  //     const pushIndex = emergencyData.findIndex((data, index) => data.objectId === pushEmergencyId);
  //
  //     if (pushIndex > -1) {
  //       const coordinate = {
  //         latitude: emergencyData[pushIndex].latitude,
  //         longitude: emergencyData[pushIndex].longitude
  //       };
  //       this.onPressMaker(null, emergencyData[0], coordinate);
  //     }
  //     this.props.clearPush();
  //   }
  // }

  onPressMaker = (e, data, location) => {
    this.props.onPressMaker(data);
  };

  onPressNotifyMarker = (e, data, location) => {
    this.props.onPressMaker(data);
  };

  onMapPress = (e) => {
    // if (e.nativeEvent.action !== 'marker-press') {
    //   this.props.closeMakerDetail();
    // }
  };

  onPressMarker = (data) => {
    console.log(data);
  };

  getZoomDelta = (lat, lng, radiusInKm) => {
    const earthRadiusInKm = 6371;
    const aspectRatio = 1;
    const radiusInRad = radiusInKm / earthRadiusInKm;
    const longitudeDelta = this.rad2deg(radiusInRad / Math.cos(this.deg2rad(lat)));
    const latitudeDelta = aspectRatio * this.rad2deg(radiusInRad);

    return {
      latitudeDelta,
      longitudeDelta,
    };
  };

  deg2rad = angle => angle * 0.017453292519943295; // (angle / 180) * Math.PI;

  rad2deg = angle => angle * 57.29577951308232; // angle / Math.PI * 180
  // return <EmergencyMarker data={data} key={index} onPress={this.onPressMaker} zIndex={index} />;

  resetNewLocation = (radiusParam = null) => {
    const radius = radiusParam || this.props.emergencyRadius;
    GetUserLocation(false).then(
      (location) => {
        const { latitude, longitude } = location;
        let zoomDelta = this.getZoomDelta(latitude, longitude, radius);
        console.log(zoomDelta);
        console.log(location);
        if (zoomDelta && (_.isNaN(zoomDelta.latitudeDelta) || _.isNaN(zoomDelta.latitudeDelta))) {
          zoomDelta = {
            latitudeDelta: DEFAULT_REGION.latitudeDelta,
            longitudeDelta: DEFAULT_REGION.longitudeDelta,
          };
        }
        this.customMap.animateToRegion({ ...location, ...zoomDelta }, 100);
      },
      err => console.log(err),
    );
  };

  renderMapMarkers = (data, index) => {
    console.log(data);
    let image = MakerImages.general_service;
    if (data.serviceType === 'moto') {
      image = MakerImages.moto_service;
    }
    return (
      <MapView.Marker
        identifier={data.id}
        zIndex={index}
        coordinate={{
          latitude: data.lat,
          longitude: data.long,
        }}
        image={image}
        onPress={() => this.onPressMarker(data)}
        key={index}
      />
    );
  };
  render() {
    const data = [
      {
        id: '1',
        long: 108.233927,
        lat: 16.070938,
        serviceType: 'moto',
      },
      {
        id: '2',
        long: 108.234828,
        lat: 16.069464,
        serviceType: 'service',
      },
    ];
    console.log(this.state.initialRegion);
    return (
      <MapView
        ref={(customMap) => {
          this.customMap = customMap;
        }}
        initialRegion={this.state.initialRegion}
        // onMapReady={() => {
        //   this.resetNewLocation(null);
        // }}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        followsUserLocation
        customMapStyle={mapStyle}
        onPress={this.onMapPress}
        showsUserLocation
        showsMyLocationButton
        showsBuildings={false}
        showsPointsOfInterest={false}
        showsCompass={false}
        showsTraffic={false}
        showsIndoors={false}
        cacheEnabled
        loadingEnabled
        // mapType="terrain"
        // onMarkerPress={this.onMarkerPress}
      >
        {data && data.map((item, index) => this.renderMapMarkers(item, index))}
      </MapView>
    );
  }
}

CustomMapView.propTypes = {
  onPressMaker: PropTypes.func,
  emergencyRadius: PropTypes.number,
  clearPush: PropTypes.func,
  pushEmergencyId: PropTypes.string,
};

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
