import Background from './Background';
import SvgDefinitions from './SvgDefinitions';
import PatternedRectangles from './PatternedRectangles';
import Text from './Text';

export default function Svg({ yPos, color, backgroundPattern, rectangles, quote }) {

    return (
        <svg viewBox={`0 ${yPos} 1000 700`} width="1000" height="700">
            <Background color={color[0]} />
            <SvgDefinitions color={color[1]} />
            <PatternedRectangles backgroundPattern={backgroundPattern} rectangles={rectangles} />
            <Text quote={quote} color={color[1]} />
        </svg>
    )
}