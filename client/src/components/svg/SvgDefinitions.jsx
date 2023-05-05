import PatternsDef from './defs/PatternsDef';
import MaskDef from './defs/MaskDef';
import TextPathsDef from './defs/TextPathsDef';

export default function SvgDefinitions({ color }) {

    return (
        <defs>
            <MaskDef />
            <TextPathsDef />
            <PatternsDef color={color} />
        </defs>
    )
}