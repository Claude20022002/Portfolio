import React, { useEffect, useState } from "react";

const Typewriter = ({ options }) => {
    const {
        autoStart = true,
        loop = true,
        delay = 100,
        strings = [],
    } = options;
    const [currentString, setCurrentString] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (autoStart) {
            let timer;

            const typeEffect = () => {
                if (isDeleting) {
                    setCurrentString(
                        strings[index].substring(0, charIndex - 1)
                    );
                    setCharIndex(charIndex - 1);

                    if (charIndex === 0) {
                        setIsDeleting(false);
                        setIndex(
                            (prevIndex) => (prevIndex + 1) % strings.length
                        );
                    }
                } else {
                    setCurrentString(
                        strings[index].substring(0, charIndex + 1)
                    );
                    setCharIndex(charIndex + 1);

                    if (charIndex === strings[index].length) {
                        setIsDeleting(true);
                    }
                }
            };

            timer = setInterval(typeEffect, delay);

            return () => clearInterval(timer);
        }
    }, [index, charIndex, isDeleting, strings, delay, autoStart]);

    useEffect(() => {
        if (!loop && index === strings.length) return;
    }, [index, loop, strings.length]);

    return <span>{currentString}|</span>;
};

export default Typewriter;
