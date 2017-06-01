import * as React from 'react';
import { BaseProps } from './ArcBase';
import { WebBase } from './ArcComposites';

interface MapProps extends BaseProps {
    id: string;
    viewProperties?: __esri.WebMapProperties;
}

interface SceneProps extends BaseProps {
    id: string;
    viewProperties?: __esri.WebSceneProperties;
}

export const WebMap = (props: MapProps) => (
    <WebBase
        scriptUri={['esri/WebMap', 'esri/views/MapView', 'dojo/promise/all']}
        {...props}
        viewProperties = {{...props.viewProperties}}
        mapProperties = {{...props.mapProperties}}
    />
);

export const WebScene = (props: SceneProps) => (
    <WebBase
        scriptUri={['esri/WebScene', 'esri/views/SceneView', 'dojo/promise/all']}
        {...props}
        viewProperties = {{...props.viewProperties}}
        mapProperties = {{...props.mapProperties}}
    />
);