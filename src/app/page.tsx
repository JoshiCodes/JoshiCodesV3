import TypeWriter from "@/components/TypeWriter";
import BackgroundGradient from "@/components/BackgroundGradient";
import React from "react";
import Navbar from "@/components/Navbar";
import ProjectLoader from "@/components/ProjectLoader";
import ScrollArrow from "@/components/ScrollArrow";

export default function Home() {

    return (
        <>
            <Navbar />
            <div className={"w-full h-screen flex justify-center content-center items-center"}>
                <div className={"-mt-4 lg:-mt-12 flex flex-col"}>
                    <div
                        className={"flex flex-col sm:flex-row gap-x-4 text-6xl font-semibold text-white z-2 text-center"}>
                        <span>Hey! Ich bin </span>
                        <span className={"main-text-highlight font-semibold"}>Joshua</span>
                    </div>
                    <div id={"text-desc-container"} className={"mt-1 mx-auto"}>
                        <TypeWriter/>
                    </div>
                </div>
                <BackgroundGradient className={"-mt-12 lg:-mt-24"} from={"main-bg-from"} via={"main-bg-via"} to={"main-bg-to"}/>
            </div>
            <section id={"projects"}>
                <h2 className={"text-gray-50 font-semibold font-mono text-center text-4xl md:text-5xl"}>
                    Meine <a href={"#projects"} className={"main-text-highlight"}>Projekte</a>
                </h2>
                <ProjectLoader />
            </section>
            <section id={"contact"}>
                <h2 className={"text-gray-50 font-semibold font-mono text-center text-4xl md:text-5xl"}>
                    Kontakt
                </h2>
                <div className={"mt-2 mx-2 md:mx-0"}>
                    <p className={"text-center font-mono text-gray-200"}>
                        Bei Fragen oder Anregungen, schreiben Sie mir <br/>
                        gerne eine Nachricht über das hier <br/>
                        bereitgestellte Kontaktformular <br/>
                        oder via E-Mail an <a href={"mailto:joshua@joshicodes.de"}
                                              className={"main-text-highlight"}>joshua@joshicodes.de</a>.
                    </p>
                    <form className={"mt-4 md:mt-5"}>
                        {
                            /**
                             * <h4 className={"text-gray-100 font-semibold font-mono text-2xl text-center"}>
                             *                             Kontaktformular
                             *                         </h4>
                             */
                        }
                        <div className={"flex flex-col justify-center content-center items-center"}>
                            <div className={"form-container"}>
                                <label htmlFor={"name"}>Name</label>
                                <input type={"text"} id={"name"} name={"name"} placeholder={"Ihr Name"} required
                                       disabled={true}/>
                            </div>
                            <div className={"form-container"}>
                                <label htmlFor={"email"}>E-Mail</label>
                                <input type={"email"} id={"email"} name={"email"} placeholder={"Ihre E-Mail"} required
                                       disabled={true}/>
                            </div>
                            <div className={"form-container"}>
                                <label htmlFor={"message"}>Nachricht</label>
                                <textarea id={"message"} name={"message"} placeholder={"Ihre Nachricht"} required
                                          disabled={true}/>
                            </div>
                        </div>
                        <p className={"text-center text-red-500 mx-2 md:mx-0"}>
                            Diese Funktion ist derzeit deaktiviert. <br />
                            Bitte schreiben Sie bei Interesse eine E-Mail.
                        </p>
                    </form>
                </div>
            </section>
            <ScrollArrow/>
        </>
    )
}
