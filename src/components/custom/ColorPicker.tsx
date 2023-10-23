"use client";

import React, {useCallback, useEffect, useState} from 'react';
import {PhotoshopPicker} from 'react-color';

interface ColorPickerProps {
    onChangeColor: (value: string) => void;
    colorResult: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({onChangeColor, colorResult}: ColorPickerProps) => {
    const onChangeColorCallback = useCallback(onChangeColor, [onChangeColor]);
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [color, setColor] = useState<string>(colorResult);

    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker);
    };

    const handleClose = () => {
        setDisplayColorPicker(false);
    };

    const handleChange = (selectedColor: any) => {
        setColor(selectedColor.hex);
    };

    useEffect(() => {
        onChangeColorCallback(color);
    }, [color, onChangeColorCallback]);

    return (
        <div>
            <div
                style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: color,
                    cursor: 'pointer',
                }}
                onClick={handleClick}
            />
            {displayColorPicker && (
                <div style={{position: 'absolute', zIndex: 2}}>
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                        }}
                        onClick={handleClose}
                    />
                    <PhotoshopPicker color={color}
                                     onChange={handleChange} />
                </div>
            )}
        </div>
    );
};

export default ColorPicker;