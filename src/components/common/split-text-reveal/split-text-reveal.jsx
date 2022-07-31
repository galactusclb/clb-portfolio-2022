import React, { useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';

const SplitTextReveal = ({ children }) => {

    const [lines, setLines] = useState([])

    const textRef = useRef()

    let splitWords = function (selector) {
        console.log("gg");
        var elements = document.querySelectorAll(selector);

        elements.forEach(function (el) {
            el.dataset.splitText = el.textContent;
            el.innerHTML = el.textContent
                .split(/\s/)
                .map(function (word) {
                    return word
                        .split("-")
                        .map(function (word) {
                            return '<span class="word">' + word + "</span>";
                        })
                        .join('<span class="hyphen">-</span>');
                })
                .join('<span class="whitespace"> </span>');
        });
    };

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

    let splitLines = function (selector) {
        var elements = document.querySelectorAll(selector);

        splitWords(selector);

        // elements.forEach(function (el) {
        // var lines = getLines(el);
        var textLines = getLines(elements?.[0]);
        console.log(textLines);
        // setLines(textLines);

        var wrappedLines = "";
        // console.log('lines count : ', textLines);

        textLines.forEach(function (wordsArr) {
            wrappedLines += '<motion.span class="line"><span class="words">';
            wordsArr.forEach(function (word) {
                wrappedLines += word.outerHTML;
            });
            wrappedLines += "</span></motion.span>";
        });
        // elements[0].dat = wrappedLines;
        // return wrappedLines;
        setLines(wrappedLines)
        // // });
    };



    useEffect(() => {
        splitLines(".reveal-text")

        console.log(lines)

        if (textRef.current) {
            // textRef.current.innerHTML = lines;
        }
        // let revealText = document.querySelectorAll(".line");
        // console.log(revealText);
    }, [])


    return (
        <>
            <span ref={textRef}>
                {children}
                {/* <span
                    dangerouslySetInnerHTML={{ __html: lines }}
                /> */}
                {/* {
                    lines?.map((item, key) => {
                        <span class="line"><span class="words">
                            {
                                item.forEach(function (word) {
                                    // <p>{word}</p>
                                    // <span
                                    //     dangerouslySetInnerHTML={{ __html: word }}
                                    // />
                                })
                            }
                        </span>
                        </span>
                    })
                } */}
            </span>
        </>
    )
}

export default SplitTextReveal