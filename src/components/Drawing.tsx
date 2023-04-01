const head = (
    <span className="head"></span>
)
const body = (
    <span className="body"></span>
)
const rArm = (
    <span className="rArm"></span>
)
const lArm = (
    <span className="lArm"></span>
)
const rLeg = (
    <span className="rLeg"></span>
)
const lLeg = (
    <span className="lLeg"></span>
)

const BODY_PARTS = [head, body, rArm, lArm, rLeg, lLeg]

type DrawingProp = {
    wrongGuesses: number
}

const Drawing = ({wrongGuesses}: DrawingProp) => {
    return (
        <div className="hang-stand">
            {BODY_PARTS.slice(0, wrongGuesses)}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Drawing