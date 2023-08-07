import { useEffect } from "react";
import './index.scss';
import TagCloud from "TagCloud";

const TextSphere =() => {
    useEffect(() => {
        return () => {
            const container = '.tagcloud'
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

            ];

            const options= {
                radius: 300,
                maxSpeed: "normal",
                initSpeed: "normal",
                keep: true,
            };

            TagCloud(container,texts,options);
        };
    },[]);

    return (
        <>
            <div className="text-sphere">
                <span className="tagcloud"></span>
            </div>
        </>
    );
};

export default TextSphere




