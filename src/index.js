// index.js

const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    return [...expr]
        .reduce((a, x, i) => {
            const j = (i / 10) | 0;
            a[j] = (a[j] || []).concat(x);
            return a;
        }, [])
        .map((alpha) =>
            alpha
                .reduce((a, x, i) => {
                    const j = (i / 2) | 0;
                    if (i % 2) {
                        a[j] = "  .-"[Number.parseInt((a[j] += x), 2) || 0];
                    } else {
                        a[j] = [x];
                    }
                    return a;
                }, [])
                .join("")
                .trimStart()
        )
        .map((x) => MORSE_TABLE[x] || " ")
        .join("");
}

module.exports = {
    decode,
};

//__EOF__
