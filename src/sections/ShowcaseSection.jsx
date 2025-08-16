import React, {useRef} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((project, index) => {
            gsap.fromTo(
                project,
                {
                    y: 50, opacity: 0
                },
                {
                    y:0,
                    opacity: 1,
                    duration:1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: project,
                        start: "top bottom-=100"
                    }
                }
            )
        })

        gsap.fromTo(
            sectionRef.current,
            {opacity: 0 },
            { opacity: 1, duration: 1.5}
        )
    }, []);

    return (
        <section id ="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/youtube_analysis.webp" alt="YouTube Analysis" />
                        </div>
                        <div className="text-content">
                            <h2>
                                YouTube Data Analysis
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                Data analysis of the evolution of YouTube to understand how YouTube went from just an
                                entertainment to a real professionalized platform. To do so, we collected and preprocessed
                                datasets, performed statistical analysis, and created visualizations to present our
                                findings using tools like pandas, matplotlib, seaborn, scikit-learn.
                                Project done as part of the ADA CS-401 course.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/bitcoin_midprice.webp" alt="Bitcoin Midprice Prediction" />
                            </div>
                            <h2>
                                Bitcoin Midprice Prediction
                            </h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/qwen_tutor.jpg" alt="Qwen-STEM Tutor" />
                            </div>
                            <h2>
                                Supervised Fine-Tuning on Pre-trained Model
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
