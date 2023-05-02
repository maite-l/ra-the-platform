import Circle from '../Circle';

export default function MaskDef() {

    return (
        <mask id="circle-mask" fill="white">
            <Circle cx="260" cy="270" r="180" xOffset="20" yOffset="15" xDefaultSpeed="4s" yDefaultSpeed="5s" />
            <Circle cx="450" cy="200" r="120" xOffset="30" yOffset="10" xDefaultSpeed="5s" yDefaultSpeed="4s" />
            <Circle cx="690" cy="290" r="200" xOffset="15" yOffset="20" xDefaultSpeed="3.5s" yDefaultSpeed="3s" />
            <Circle cx="580" cy="380" r="240" xOffset="20" yOffset="30" xDefaultSpeed="5s" yDefaultSpeed="3.5s" />
            <Circle cx="300" cy="430" r="150" xOffset="10" yOffset="20" xDefaultSpeed="4s" yDefaultSpeed="4s" />
            <Circle cx="90" cy="430" r="25" xOffset="25" yOffset="15" xDefaultSpeed="5s" yDefaultSpeed="3s" />
            <Circle cx="870" cy="160" r="25" xOffset="15" yOffset="15" xDefaultSpeed="5s" yDefaultSpeed="2s" />
            <Circle cx="870" cy="550" r="40" xOffset="20" yOffset="15" xDefaultSpeed="3s" yDefaultSpeed="3.5s" />
        </mask>
    )

}