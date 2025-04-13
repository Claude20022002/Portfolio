import React, { useEffect, useRef, useState } from "react";
import "./style.css"; // On va créer ce fichier pour les animations

const SplitText = ({
    text = "",
    className = "",
    delay = 100,
    threshold = 0.1,
    rootMargin = "-100px",
    textAlign = "center",
    onLetterAnimationComplete,
}) => {
    const words = text.split(" ").map((word) => word.split(""));
    const [inView, setInView] = useState(false);
    const ref = useRef();
    const totalLetters = words.flat().length;
    const animatedCount = useRef(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref.current);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const handleAnimationEnd = () => {
        animatedCount.current += 1;
        if (
            animatedCount.current === totalLetters &&
            onLetterAnimationComplete
        ) {
            onLetterAnimationComplete();
        }
    };

    return (
        <p
            ref={ref}
            className={`split-parent ${className}`}
            style={{
                textAlign,
                overflow: "hidden",
                display: "inline",
                whiteSpace: "normal",
                wordWrap: "break-word",
            }}
        >
            {words.map((word, wordIndex) => (
                <span
                    key={wordIndex}
                    style={{ display: "inline-block", whiteSpace: "nowrap" }}
                >
                    {word.map((letter, letterIndex) => {
                        const index =
                            words
                                .slice(0, wordIndex)
                                .reduce((acc, w) => acc + w.length, 0) +
                            letterIndex;

                        return (
                            <span
                                key={index}
                                className={`split-letter ${
                                    inView ? "in-view" : ""
                                }`}
                                style={{
                                    animationDelay: `${index * delay}ms`,
                                }}
                                onAnimationEnd={handleAnimationEnd}
                            >
                                {letter}
                            </span>
                        );
                    })}
                    <span style={{ display: "inline-block", width: "0.3em" }}>
                        &nbsp;
                    </span>
                </span>
            ))}
        </p>
    );
};

export default SplitText;
