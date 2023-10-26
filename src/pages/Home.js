import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Technologies from '../components/Technologies'
import SomeProjects from '../components/SomeProjects'
const Home = () => {
    return (
        <div className="home">
        <Hero/>
        <div className="homeMain">
            <div className="cardsMain" >
                    <div className="card">
                        <div className="cardBody">
                            <div className="cardTitle">
                                <span>Gaming</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#66ff99" class="bi bi-controller" viewBox="0 0 16 16">
                                <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"/>
                                <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"/>
                                </svg>
                            </div>
                            <div className="cardText">
                                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                            </div>
                        </div>
                       
                    </div>
                    <div className="card">
                        <div className="cardTitle">
                            <span>Exploring Internet</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#66ff99" class="bi bi-code-slash" viewBox="0 0 16 16">
                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                            </svg>
                        </div>
                        <div className="cardText">
                            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardTitle">
                            <span>Travelling</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#66ff99" class="bi bi-tree-fill" viewBox="0 0 16 16">
                                <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5z"/>
                                </svg>
                        </div>
                        <div className="cardText">
                            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                        </div>
                    </div>
             </div> 
            <div className="introductionMain">
                <div className='abt'>
                    <p>About Me</p>
                </div>
                <div className='intro'> 
                    <h3>Hello! I'm Sarthak Sambare</h3>
                </div>
                <div>
                    <h5> Third-Year Engineering Student </h5>
                </div>
                <div>
                    <p>I'm a Third-year IT engineering student who is eager to learn and 
                        develop in the field of technology. As I continue my journey in the 
                        field of technology, I am committed to continuous learning and 
                        professional development. I stay up-to-date with the latest trends 
                        and advancements, attending workshops, seminars, and online 
                        courses to broaden my horizons. I believe that a growth mindset is 
                        essential in an ever-evolving field like technology, and I am eager to 
                        embrace new challenges that come my way.</p>
                </div>
            </div>
        </div>
            <Technologies/>
            <SomeProjects/>
        <Footer/>
        </div>
    )
}

export default Home