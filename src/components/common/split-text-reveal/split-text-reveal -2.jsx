import React, { forwardRef, useRef, useState } from 'react'
import { useEffect } from 'react';

const SplitTextReveal2 = forwardRef((props, ref) => {

    const [lines, setLines] = useState([])

    let splitWords = function (selector) {
        console.log("gg");

        var elements = ref?.current?.querySelectorAll(selector);

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
        console.log(ref?.current);
        var elements = ref?.current?.querySelectorAll(selector);

        splitWords(selector);

        elements.forEach(function (el) {
            var lines = getLines(el);

            setLines(lines)

            // var wrappedLines = "";

            // lines.forEach(function (wordsArr) {
            //     wrappedLines += '<span class="line"><span class="words">';
            //     wordsArr.forEach(function (word) {
            //         wrappedLines += word.outerHTML;
            //     });
            //     wrappedLines += "</span></span>";
            // });
            // el.innerHTML = wrappedLines;
        });

        console.log(elements);
    };



    useEffect(() => {
        splitLines(".reveal-text");
        // let revealText = ref?.current?.querySelectorAll(".line");
        // console.log(revealText);
    }, [])


    return (
        <>
            <span ref={ref}>
                {props.children}
                {
                    console.log('xxxxxxxxxxxx')
                }
                {
                    console.log(lines)
                }
            </span>
        </>
    )
})

export default SplitTextReveal2