import "./OurWork.css"

const OurWork = () => {

    return (
        <div id="our_work" className={"container_pointer_event our_work our_work-container"}>
            <section id="our_work_section" className={"bg_color our_work_section our_work_section-container"} tabIndex="-1">
                <div id="our_work_text-container" className={"text_rules _3bcaz"} style={{ visibility: "inherit" }}>
                    <h1 className="font_5">
                        <span style={{ fontWeight: "400" }}>Explore our work</span></h1>
                </div>
                <div id="our_work_link" className={"our_work_link link-rules"} style={{ visibility: "inherit" }} aria-disabled="false">
                    <a href="https://www.thekiterises.com/ourwork" target="_self" className={"touch_action link"} aria-disabled="false">
                        <span className="hover_animation">Explore</span>
                    </a></div>
            </section>
        </div>
    )
}

export default OurWork