import img from 'F:/REACTJS/frontend6/src/images/kaitlyn-baker-vZJdYl5JVXY-unsplash.jpg';
export function Home()
{
    return(
        <div class="row">
            <div id="im" class="col-sm-12 col-md-6 col-lg-4">
                <img id="c1" src={img} />
            </div>
            <div id="c2" class="col-sm-12 col-md-6 col-lg-7">
                <h5>Hey there! This is Karthika..</h5>
                <br/>
                <h5>In my portfolio, you will find a selection of my work, including personal projects, open source contributions, and academic coursework.</h5>
                <br/>
                <h5>I am proficient in a variety of programming languages and technologies, including Python, JavaScript, React, and Node.js.</h5>
                <br/>
                <h5>I hope that my portfolio will give you a good sense of my skills and experience, and that you'll consider me for your next software engineering project.</h5>
            </div>
        </div>
    )
}

export function Contact()
{
    return(
        <div id="con" class="col-sm-12 col-md-6 col-lg-12">
            <h2 id="cd">Contact Details:</h2>
            <br/>
            <div class="ib">
                <h3 class="lab2">
                    Email Address:&ensp;
                </h3>
                <h3 class="lab3">
                    karthika.21bce7192@vitapstudent.ac.in
                </h3>
            </div>
            <br/>

            <div class="ib">
                <h3 class="lab2">
                    Linkedin:&ensp;
                </h3>
                <h3 class="lab3">
                    <a id="al1" href="https://www.linkedin.com/in/karthika-thota-746363270/">Linkedin Profile URL</a>
                </h3>
            </div>
            <br/>

            <div class="ib">
                <h3 class="lab2">
                    Address:&ensp;
                </h3>
                <h3 class="lab3">
                    Vijayawada, Andhra Pradesh
                </h3>
            </div>
            <br/><br/>
    </div>
    )
}

export function About()
{
    return(
        <div id="abt" class="col-sm-12 col-md-6 col-lg-12">
            <br/><br/>
            <h2 id="sel">The About Section..</h2>
            <br/>
            <h4>To know more about me..</h4>
            <h4>I have listed out my professional and personal accomplishments, skills, and hobbies in my resume attached below..</h4>
            <br/>
            <h4>Resume Link:
                <a id="al2" href="https://olive-tonia-62.tiiny.site/">My resume</a>
            </h4>
            <br/><br/>
        </div>
    )
}

export function Projects()
{
    return(
        <div id="pro" class="col-sm-12 col-md-6 col-lg-12">
            <br/>
            <h2 id="ph">The Projects Section</h2>
            <h5 id="sub">(More details in the About section, where I have uploaded my resume as well..)</h5>
            <br/>
            <div id="pro1">
                <h3 class="p2">
                    House Price Prediction&ensp;
                </h3>
                <br/>
                <h3 class="p3">
                    I had worked on this project as a part of my internship with the Skill Vertex Organization in the months of January and February of 2023.
                </h3>
            </div>

            <div id="pro2">
                <h3 class="p2">
                    Language Detection&ensp;
                </h3>
                <br/>
                <h3 class="p3">
                    This project which involves Natural Language Processing was also done as a part of my Skill Vertex Internship.
                </h3>
            </div>
            

            <div id="pro3">
                <h3 class="p2">
                    Stock Price Prediction&ensp;
                </h3>
                <br/>
                <h3 class="p3">
                    I am currently working on this project, which involves the utilization of the yfinance module, making accurate prediction using Linear Regression and finally displaying the analytics over the Streamlit platform.
                </h3>
            </div>
            <br/><br/>
    </div>
    )
}