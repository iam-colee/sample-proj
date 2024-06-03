import { useState } from "react";

const RangeSlider = ({ ...props }) => {
    const [withMeasure, setWithMeasure] = useState(false);

    return ( 
        <div className="ds-form-control w-full">
            <label className="ds-label">
                <span className="ds-label-text">{props.title}</span>
            </label>
            <input type="range" min="0" max="100" defaultValue={props.defaultValue}
                className={`ds-range ds-range-xs ${props.rngClass}`}
                step={props.step} />

            <div className={`w-full flex justify-between text-xs px-2 mt-3 ${props.withMeasure ? 'block' : 'hidden'}`}>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
            </div>
        </div>
    );
}

export default RangeSlider;