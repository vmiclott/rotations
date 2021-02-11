import React, { useState, useEffect } from 'react';

type PhaseProps = {
    phase: string;
}

const Phase = (props: PhaseProps) => {
    return (
        <div>
            <p>{props.phase}</p>
        </div>
    );
};

export default Phase;
