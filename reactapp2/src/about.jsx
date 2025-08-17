import './App.css'

function About() {

    return (
        <>
            <div className="about-page">
                <div className="about-content">
                    <h2>About Me</h2>
                    <p>Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet sit.</p>
                    <button className="resume-btn">Resume</button>
                </div>
                <div className="about-img"><img src="images/bg-2.png" alt="about-image" /></div>
            </div>

            {/* Form  */}
            <section className='projects' id="projects">
                <h2 className="title">Projects</h2>
                <div className="content-separator"></div>
                <div className="form-container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text" id="name" name="name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email" id="email" name="email" />
                        </div>

                        <div>
                            <label className="form-group">Message</label>
                            <textarea
                                rows="4"
                            ></textarea>
                        </div>

                        <button>Send</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default About