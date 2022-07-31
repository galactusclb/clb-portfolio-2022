import React, { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

const SplitWordReveal = ({ children }) => {

    const [words, setWords] = useState([])

    const refWords = useRef()

    const splitWords = (para) => {
        console.log("gg");
        // setWords(
        return para.split(/\s/).map(function (word) {
            return word
                .split("-")
                .map(function (word) {
                    return '<span class="word">' + word + "</span>";
                })
                .join('<span class="hyphen">-</span>');
        })
            .join('<span class="whitespace"> </span>')
        // )
    }

    let getLines = function (el) {
        var lines = [];
        var line;
        var words = el.querySelectorAll("span");
        var lastTop;
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            if (word.offsetTop != lastTop) {
                // Don't start with whitespace
                if (!word.classList.contains("whitespace")) {
                    lastTop = word.offsetTop;

                    line = [];
                    lines.push(line);
                }
            }
            line.push(word);
        }
        return lines;
    };

    useEffect(() => {


        refWords.current.innerHTML = splitWords(children);
        // console.log(getLines(words))

    }, [children, words])

    return (
        <>
            <span ref={refWords}></span>
            {/* {
                words?.map((word, key) => {
                    return (
                        <span key={key} style={{ marginRight: '8px' }}>
                            {word}
                        </span>
                    )
                })
            } */}
        </>
    )
}

export default SplitWordReveal