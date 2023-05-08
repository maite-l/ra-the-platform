//https://css-tricks.com/converting-color-spaces-in-javascript/
//https://stackoverflow.com/questions/9224404/get-color-name-by-hex-or-rgb


export const hexToName = (hex) => {
    const rgb = hexToRbg(hex);
    const hsl = rgbToHsl(rgb);
    const name = hslToName(hsl);
    return name;
}

export const hexToRbg = (hex) => {
    let r = 0, g = 0, b = 0;

    if (hex.length == 4) {
        r = "0x" + hex[1] + hex[1];
        g = "0x" + hex[2] + hex[2];
        b = "0x" + hex[3] + hex[3];

    } else if (hex.length == 7) {
        r = "0x" + hex[1] + hex[2];
        g = "0x" + hex[3] + hex[4];
        b = "0x" + hex[5] + hex[6];
    }
    r = +r;
    g = +g;
    b = +b;
    return [r, g, b];
}

export const rgbToHsl = (rgbArr) => {
    const r1 = Number(rgbArr[0]) / 255;
    const g1 = Number(rgbArr[1]) / 255;
    const b1 = Number(rgbArr[2]) / 255;
    const maxColor = Math.max(r1, g1, b1);
    const minColor = Math.min(r1, g1, b1);
    let L = (maxColor + minColor) / 2;
    let S = 0;
    let H = 0;
    if (maxColor != minColor) {
        if (L < 0.5) {
            S = (maxColor - minColor) / (maxColor + minColor);
        } else {
            S = (maxColor - minColor) / (2.0 - maxColor - minColor);
        }
        if (r1 == maxColor) {
            H = (g1 - b1) / (maxColor - minColor);
        } else if (g1 == maxColor) {
            H = 2.0 + (b1 - r1) / (maxColor - minColor);
        } else {
            H = 4.0 + (r1 - g1) / (maxColor - minColor);
        }
    }
    L = L * 100;
    S = S * 100;
    H = H * 60;
    if (H < 0) {
        H += 360;
    }
    return { h: H, s: S, l: L };
}

export const hslToName = (hsl) => {
    const l = Math.floor(hsl.l)
    const s = Math.floor(hsl.s)
    const h = Math.floor(hsl.h);
    if (s <= 90 && l >= 90) {
        return ("white")
    } else if (l <= 15) {
        return ("black")
    } else if ((s <= 10 && l <= 70) || s === 0) {
        return ("gray")
    } else if ((h >= 0 && h <= 15) || h >= 346) {
        return ("red");
    } else if (h >= 16 && h <= 35) {
        if (s < 90) {
            return ("brown");
        } else {
            return ("orange");
        }
    } else if (h >= 36 && h <= 54) {
        if (s < 90) {
            return ("brown");
        } else {
            return ("yellow");
        }
    } else if (h >= 55 && h <= 165) {
        return ("green");
    } else if (h >= 166 && h <= 260) {
        return ("blue")
    } else if (h >= 261 && h <= 290) {
        return ("purple")
    } else if (h >= 291 && h <= 345) {
        return ("pink")
    }
}