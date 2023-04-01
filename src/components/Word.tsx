type WordProps = {
    guesses: String[]
    word: String
    reveal?: Boolean
}

const Word = ({guesses, word, reveal}: WordProps) => {
    return (
        <div className="game-word">
            {word.split('').map((char, i) => (
                <span key={i}> 
                    <span style={{
                        visibility:
                            guesses.includes(char) || reveal
                            ? 'visible' : 'hidden',
                        color: !guesses.includes(char) && reveal ? "red" : "black"
                        }
                        }>{char}</span>
                </span>
            ))}
        </div>
    )
}

export default Word