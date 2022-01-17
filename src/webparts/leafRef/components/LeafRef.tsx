import * as React from 'react';
import styles from './LeafRef.module.scss';
import { ILeafRefProps } from './ILeafRefProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default class LeafRef extends React.Component<ILeafRefProps, {}> {
  public render(): React.ReactElement<ILeafRefProps> {
    return (
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{
        height: "400px"
      }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    );
  }
}
