import "./WelcomeBanner.css"

const WelcomeBanner = () => {

    return (
        <section id="wb_section" className={"wb_section_container bg_color"}>
            <div id="wb_bg_layers" className="bg_layers">
                <div className={"bg_media_color bg_layers"}></div>
                <div className="bg_media"></div>
            </div>
            <div id="wb_iframe_container">
                <div className="iframe_content_container">
                    <iframe className="iframe_content"
                        title="Embedded Content"
                        style={{ height: '100%', width: '100%' }}
                        name="htmlComp-iframe"
                        data-src=""
                        src="https://www-thekiterises-com.filesusr.com/html/de57db_c4400932a03cd15bdd1d94edf579ab9f.html">
                    </iframe>
                </div>
            </div>
            <div id="logo_container" className={"logo logo_container-image"}>
                <image data-image-info="{&quot;containerId&quot;:&quot;logoContainer&quot;,&quot;alignType&quot;:&quot;center&quot;,&quot;parallaxSpeed&quot;:1.5,&quot;sourceSets&quot;:[],&quot;imageData&quot;:{&quot;uri&quot;:&quot;d821fb_f8f501579e974018ad8f3bbd02e71683~mv2.png&quot;,&quot;width&quot;:3130,&quot;height&quot;:1194,&quot;alt&quot;:&quot;&quot;,&quot;name&quot;:&quot;Logo TKR.png&quot;,&quot;focalPoint&quot;:null}}"
                    data-has-ssr-src=""
                    data-src="https://static.wixstatic.com/media/d821fb_f8f501579e974018ad8f3bbd02e71683~mv2.png/v1/fill/w_316,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20TKR.png">
                    <picture id="img-logoContainer"
                        data-image-info="{&quot;containerId&quot;:&quot;logoContainer&quot;,&quot;alignType&quot;:&quot;center&quot;,&quot;parallaxSpeed&quot;:1.5,&quot;sourceSets&quot;:[],&quot;imageData&quot;:{&quot;uri&quot;:&quot;d821fb_f8f501579e974018ad8f3bbd02e71683~mv2.png&quot;,&quot;width&quot;:3130,&quot;height&quot;:1194,&quot;alt&quot;:&quot;&quot;,&quot;name&quot;:&quot;Logo TKR.png&quot;,&quot;focalPoint&quot;:null}}"
                        data-has-ssr-src=""
                        data-src="https://static.wixstatic.com/media/d821fb_f8f501579e974018ad8f3bbd02e71683~mv2.png/v1/fill/w_316,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20TKR.png">
                        <img src="https://static.wixstatic.com/media/d821fb_f8f501579e974018ad8f3bbd02e71683~mv2.png/v1/fill/w_316,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20TKR.png"
                            alt=""
                            style={{ objectFit: "cover", objectPosition: "50% 50%", width: "100%" }} />
                    </picture>
                </image>
            </div>
        </section>
    )
}

export default WelcomeBanner