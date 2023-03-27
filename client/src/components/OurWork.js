// import "./OurWork.css"

const OurWork = () => {

    return (
        <div id="ourWork" className="bgColors ourWork-container" data-testid="section-container">
            {/* Q: shouldn't this have some kind of bg layer? */}
            <div id="ourWorkText" className="textRules _3bcaz" data-testid="richTextElement" data-angle="0" data-angle-style-location="style" data-screen-in-hide="done" style={{visibility: "inherit"}}>
                <h1 className="font_5">
                    <span style={{fontWeight:"400"}}>Explore our work</span></h1></div>
                    <div className="clickableElementContainer" id="ourWorkButton" aria-disabled="false" data-angle="0" data-angle-style-location="style" data-screen-in-hide="done" style={{visibility: "inherit"}}>
                        <a data-testid="linkElement" href="https://www.thekiterises.com/ourwork" target="_self" className="clickableElement" aria-disabled="false">
            <span className="hoverAnimation">Explore</span></a></div></div>
        
        // <section id="comp-ka50ygty1_r_comp-k9ttd4g7" className="bgColors comp-ka50ygty1_r_comp-k9ttd4g7-container undefined" data-testid="section-container">
        //     <div id="comp-ka50ygty1_r_comp-k9ttd4hy2" className="textRules _3bcaz" data-testid="richTextElement" data-angle="0" data-angle-style-location="style" data-screen-in-hide="done" style={{visibility: "inherit"}}>
        //         <h1 className="font_5">
        //             <span style={{fontWeight:"400"}}>Explore our work</span></h1></div>
        //             <div className="_3vc75" id="comp-ka50ygty1_r_comp-k9ttd4hw" aria-disabled="false" data-angle="0" data-angle-style-location="style" data-screen-in-hide="done" style={{visibility: "inherit"}}>
        //                 <a data-testid="linkElement" href="https://www.thekiterises.com/ourwork" target="_self" className="_3wqEk" aria-disabled="false">
        //     <span className="_1Qnnq">Explore</span></a></div></section>
    )
}

export default OurWork