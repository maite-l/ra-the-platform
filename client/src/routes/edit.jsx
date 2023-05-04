import { useState } from 'react';

import SvgDefinitions from '../components/svg/SvgDefinitions';
import PatternedRectangles from '../components/svg/PatternedRectangles';
import Background from '../components/svg/Background';
import Text from '../components/svg/Text';
import SelectField from '../components/form/SelectField';
import CheckboxField from '../components/form/CheckboxField';
import TextInputField from '../components/form/TextInputField';
import ColorField from '../components/form/ColorField';
import Rectangle from '../components/svg/Rectangle';


export default function Edit() {
    const getRandomRectangles = (patterns) => {
        const checkedPatterns = patterns.filter((pattern) => pattern.checked);
        const maxNofRectangles = 25;
        const rectanglesPerPattern = Math.floor(maxNofRectangles / checkedPatterns.length);
        const rectangles = [];
        for (let i = 0; i < checkedPatterns.length; i++) {
            for (let j = 0; j < rectanglesPerPattern; j++) {
                const patternName = checkedPatterns[i].name.replace(/[\s]/g, '-').replace(/[\s()]/g, '');
                const key = `${patternName}-${j}`;
                rectangles.push(<Rectangle key={key} pattern={patternName} />);
            }
        }
        return rectangles;
    }
    const [quote, setQuote] = useState("hello devine");
    const [backgroundPattern, setBackgroundPattern] = useState('dots');
    const [patterns, setPatterns] = useState([
        { id: 0, name: 'wavy', checked: false },
        { id: 1, name: 'horizontal stripes', checked: true },
        { id: 2, name: 'diagonal stripes (up)', checked: true },
        { id: 3, name: 'diagonal stripes (down)', checked: false },
        { id: 4, name: 'checkerboard', checked: false },
        { id: 5, name: 'triangles', checked: false },
        { id: 6, name: 'vertical stripes', checked: true },
        { id: 7, name: 'dots', checked: false },
        { id: 8, name: 'crosshatch', checked: false },
        { id: 9, name: 'hexagons', checked: false },
        { id: 10, name: 'diamonds', checked: false },
        { id: 11, name: 'stars', checked: false },

    ]);
    const [color, setColor] = useState(['#38726C', '#FEFDEC']);
    const [rectangles, setRectangles] = useState(getRandomRectangles(patterns));

    const handleOptionChange = (optionId) => {
        optionId = parseInt(optionId);
        const updatedOptions = patterns.map((option) => {
            if (option.id === optionId) {
                return { ...option, checked: !option.checked };
            } else {
                return option;
            }
        });
        setPatterns(updatedOptions);
        setRectangles(getRandomRectangles(updatedOptions));
    };

    return (
        <div className="edit">
            <h2>Create a new artwork</h2>
            <div className="controls">
                <form>
                    <div className='form-inputs'>
                        <SelectField
                            id="background-pattern"
                            label="Select a Background Pattern:"
                            options={patterns}
                            value={backgroundPattern}
                            onChange={(event) => setBackgroundPattern(event.target.value)} />

                        <CheckboxField
                            label="Additional Patterns:"
                            options={patterns}
                            onChange={(event) => { handleOptionChange(event.target.id) }}
                        />

                        <div className='color-inputs'>
                            <ColorField
                                id="background-color"
                                label="Background Color:"
                                value={color[0]}
                                onChange={(event) => {
                                    setColor([event.target.value, color[1]]);
                                }}
                            />
                            <ColorField
                                id="line-color"
                                label="Line Color:"
                                value={color[1]}
                                onChange={(event) => {
                                    setColor([color[0], event.target.value]);
                                }}
                            />
                        </div>

                        <TextInputField
                            id="quote-input"
                            label="Enter a Quote:"
                            value={quote}
                            onChange={(event) => setQuote(event.target.value)} />
                    </div>
                    <div className='form-buttons'>
                        <button>Save</button>
                        <button>Download</button>
                    </div>
                </form>
            </div>
            <svg viewBox='0 0 1000 700' width="1000" height="700">
                <Background color={color[0]} />
                <SvgDefinitions color={color[1]} />
                <PatternedRectangles backgroundPattern={backgroundPattern} rectangles={rectangles} />
                <Text quote={quote} color={color[1]} />
            </svg>
        </div>

    );
}


