export function getAngle(pt1, pt2){
    let props = setAngleProps(pt1, pt2);
    let angle = (props.rise / props.hyp);

    return angle;
}

export function setAngleProps(pt1, pt2){
    let rise = pt2.y - pt1.y;
    let run = pt2.x - pt1.x;
    let hyp = Math.sqrt((rise * rise) + (run * run));
    let angle = rise / hyp;

    return{
        rise,
        run,
        hyp,
        angle
    }
}

export function toDeg(angle){
    return angle * (180 / Math.PI);
}

export function toRad(angle){
    return angle * (Math.PI / 180);
}

export function lerp(v0, v1, t){
    // Linear interpolation
    // https://github.com/mattdesl/lerp/blob/master/index.js
    // V0 is the first value
    // V1 is the second value
    // t is the blend.

    return (1 - t) * v0 + (t * v1);
}
