import React, { useState, useEffect } from 'react';

import abilityMap from '../helpers/abilityMap';

type RotationProps = {
    rotation: string[];
}

const Rotation = (props: RotationProps) => {
    if (props.rotation.length < 1) {
        return null;
    }
    const abilities = props.rotation.map((ability, index) => <img style={{ width: 30 }} key={index} src={abilityMap[ability]} />);
    return (
        <div>
            {abilities}
        </div>
    );
};

export default Rotation;
