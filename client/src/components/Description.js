import "./Description.css"

const Description = () => {

    return (

        // return a div with images and text

        <section id="description_section" className={"bg_color description_section-container"}>
            <div id="description_bg_layers" className="bg_layers">
                <div className={"bg_media_color bg_media_layers"}></div>
                <div className="bg_media"></div>
                </div>
            {/* Q: Should I insert parent div here to hold the component display content together separately from the bg content */}
            {/* <div id="descriptionContent" className=""> */}
            <div id="description_text" className="text_rules" style={{ visibility: "inherit" }}>
                <h2 className="font_2"><span><span style={{ fontWeight: "normal" }}>WE ARE A</span></span></h2>

                <h2 className="font_2"><span><span style={{ fontWeight: "normal" }}><span className="bg_color16">FULL-SERVICE</span></span></span></h2>

                <h2 className="font_2"><span><span style={{ fontWeight: "normal" }}>AGENCY</span></span></h2>
                </div>

            <div id="description_image-container_1" className="description_image-containers">
                <image data-image-info="{&quot;containerId&quot;:&quot;comp-l7knuxuv&quot;,&quot;alignType&quot;:&quot;center&quot;,&quot;parallaxSpeed&quot;:1.5,&quot;sourceSets&quot;:[{&quot;displayMode&quot;:&quot;fill&quot;,&quot;scrollEffect&quot;:&quot;none&quot;,&quot;mediaQuery&quot;:&quot;(min-width: 320px) and (max-width: 1680px)&quot;}],&quot;imageData&quot;:{&quot;uri&quot;:&quot;d821fb_969cf0853fb14bc19dac51f694476b67~mv2.jpg&quot;,&quot;width&quot;:1688,&quot;height&quot;:1688,&quot;alt&quot;:&quot;&quot;,&quot;name&quot;:&quot;Portland_creative_agency._.jpg&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;focalPoint&quot;:{&quot;x&quot;:57,&quot;y&quot;:46},&quot;scrollEffect&quot;:&quot;none&quot;}}" data-has-ssr-src="" data-src="https://static.wixstatic.com/media/d821fb_969cf0853fb14bc19dac51f694476b67~mv2.jpg/v1/fill/w_134,h_132,fp_0.57_0.46,q_80,usm_0.66_1.00_0.01,enc_auto/Portland_creative_agency__.jpg">
                    <picture>
                        {/* <source media="(min-width: 320px) and (max-width: 1680px)" srcset="https://static.wixstatic.com/media/d821fb_969cf0853fb14bc19dac51f694476b67~mv2.jpg/v1/fill/w_262,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Portland_creative_agency__.jpg" data-srcset="https://static.wixstatic.com/media/d821fb_969cf0853fb14bc19dac51f694476b67~mv2.jpg/v1/fill/w_262,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Portland_creative_agency__.jpg" /> */}
                        <img src="https://static.wixstatic.com/media/d821fb_969cf0853fb14bc19dac51f694476b67~mv2.jpg/v1/fill/w_262,h_260,fp_0.57_0.46,q_80,usm_0.66_1.00_0.01,enc_auto/Portland_creative_agency__.jpg" alt="TheKiteRises" style={{ objectFit: "cover", objectPosition: "57% 46%", width: "100%" }} />
                    </picture></image></div>

            <div id="description_image-container_2" className="description_image-containers">
                <image data-image-info="{&quot;containerId&quot;:&quot;comp-l7knxrj8&quot;,&quot;alignType&quot;:&quot;center&quot;,&quot;parallaxSpeed&quot;:1.5,&quot;sourceSets&quot;:[],&quot;imageData&quot;:{&quot;uri&quot;:&quot;d821fb_6167014f708e4f91a562ffe22d379779~mv2.jpg&quot;,&quot;width&quot;:2002,&quot;height&quot;:2002,&quot;alt&quot;:&quot;&quot;,&quot;name&quot;:&quot;Portland_creative_agency_edited.jpg&quot;,&quot;focalPoint&quot;:null}}" data-has-ssr-src="" data-src="https://static.wixstatic.com/media/d821fb_6167014f708e4f91a562ffe22d379779~mv2.jpg/v1/fill/w_138,h_130,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Portland_creative_agency_edited.jpg">
                    <picture>
                        <img src="https://static.wixstatic.com/media/d821fb_6167014f708e4f91a562ffe22d379779~mv2.jpg/v1/fill/w_272,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Portland_creative_agency_edited.jpg" alt="" style={{ objectFit: "cover", objectPosition: "50% 50%", width: "100%" }} />
                    </picture></image></div>

            <div id="description_image-container_3" className="description_image-containers" style={{visibility: "inherit"}}>
            <image data-image-info="{&quot;containerId&quot;:&quot;comp-l7ko0fai&quot;,&quot;alignType&quot;:&quot;center&quot;,&quot;parallaxSpeed&quot;:1.5,&quot;sourceSets&quot;:[],&quot;imageData&quot;:{&quot;uri&quot;:&quot;d821fb_75018af14bc64c1f8386bcbefb92de2d~mv2.jpg&quot;,&quot;width&quot;:2002,&quot;height&quot;:2002,&quot;alt&quot;:&quot;&quot;,&quot;name&quot;:&quot;Creativestudio_edited.jpg&quot;,&quot;focalPoint&quot;:null}}" data-has-ssr-src="" data-src="https://static.wixstatic.com/media/d821fb_75018af14bc64c1f8386bcbefb92de2d~mv2.jpg/v1/fill/w_2,h_2,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Creativestudio_edited.jpg">
                <picture>
                <img src="https://static.wixstatic.com/media/d821fb_75018af14bc64c1f8386bcbefb92de2d~mv2.jpg/v1/fill/w_4,h_4,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Creativestudio_edited.jpg" alt="TKR" style={{objectFit: "cover", objectPosition: "50% 50%", width: "100%"}}/>
</picture></image>
</div>

{/* </div> */}
        </section>
    )
}

export default Description