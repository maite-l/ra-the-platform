import { useState } from 'react';

import SvgDefinitions from './components/svg/SvgDefinitions';
import PatternedRectangles from './components/svg/PatternedRectangles';
import Background from './components/svg/Background';
import Text from './components/svg/Text';
import SelectField from './components/form/SelectField';
import CheckboxField from './components/form/CheckboxField';
import TextInputField from './components/form/TextInputField';
import ColorField from './components/form/ColorField';


function App() {

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
  };


  return (
    <>
      <style>
        {`:root {
          --dynamic-color: ${color[0]};
        }`}
      </style>

      <svg viewBox='0 0 1000 700' width="1000" height="700">
        <Background color={color[0]} />
        <SvgDefinitions color={color[1]} />
        <PatternedRectangles backgroundPattern={backgroundPattern} additionalPatterns={patterns} />
        <Text quote={quote} color={color[1]} />
      </svg>

      <div className="controls">
        <h1>Pattern Mix&Match</h1>
        <form>
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

        </form>
      </div>
    </>
  )

}

export default App;
