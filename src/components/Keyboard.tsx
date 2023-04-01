const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
]

type KeyboardProps = {
    activeKeys: string[]
    inactiveKeys: string[]
    addChar: (char: string) => void
    disabled?: boolean
}

const Keyboard = ({activeKeys, inactiveKeys, addChar, disabled=false}:KeyboardProps) => {
    return (
        <div className="keyboard-wrapper">
            {KEYS.map(key => {
                const on = activeKeys.includes(key)
                const off = inactiveKeys.includes(key)
                return (
            <button onClick={() => addChar(key)}
                className={`keyboard-btn ${on ? 'active' : ''}
                    ${off ? 'inactive' : ''}`}
                key={key}
                disabled={on || off || disabled}
                >{key}</button>
            )
            })}
        </div>
    )
}

export default Keyboard