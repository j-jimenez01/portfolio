import React, { useEffect } from "react";
import './index.scss';
import TagCloud from "TagCloud"; // Check if this import is correct

const TextSphere = () => {
    useEffect(() => {
        const container = '.tagcloud';
        const texts = [
                "HTML",
                "CSS",
                "Python",
                "JavaScript",
                "React",
                "Git",
                "Github",
                "C",
                "C++",
                "C#",
                "SQL",
                "PostgreSQL",
                "MySQL",
                "MongoDB",
                "npm",
                "Google Cloud",
                "AWS",
                "CI/CD",
                "Node.js",

        ];

        const options = {
            radius: 300,
            maxSpeed: "fast",
            initSpeed: "fast",
            keep: true,
        };

        TagCloud(container, texts, options);
    },[]); // Empty array if you want to run the effect only once

    return (
        <div className="text-sphere">
            <span className="tagcloud"></span>
        </div>
    );
};

export default TextSphere;
