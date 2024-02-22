
import React from "react";
import { Map, Marker } from "pigeon-maps";

const position: [number, number] = [-29.694, -51.118];

export default function MapsInfo() {
    return (
        <div className="h-44 w-[20rem] sm:h-52 sm:w-[25rem] md:h-96 md:w-[70rem]">
            <Map defaultCenter={position} defaultZoom={9}>
                <Marker width={50} anchor={position} />
            </Map>
        </div>
    );
}
