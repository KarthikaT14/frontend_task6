import img from 'F:/REACTJS/frontend6/src/images/kaitlyn-baker-vZJdYl5JVXY-unsplash.jpg';
export function Home()
{
    return(
        <div class="row">
            <div id="im" class="col-sm-12 col-md-12 col-lg-4">
                <img id="c1" src={img} />
            </div>
            <div id="c2" class="col-sm-12 col-md-12 col-lg-7">
                <h5>Hey there! This is Karthika..</h5>
                <br/>
                <h5>In my portfolio, you will find a selection of my work, including personal projects, open source contributions, and academic coursework.</h5>
                <br/>
                <h5>I am proficient in a variety of programming languages and technologies, including Java, Python, JavaScript, React, and Node.js.</h5>
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
                <a id="al2" href="https://karthika-resume.tiiny.site/">My resume</a>
            </h4>
            <br/><br/>
        </div>
    )
}

export function Projects()
{
    return(
        <div id="pro" class="col-sm-12 col-md-6 col-lg-12">
    <br />
    <h2 id="ph">The Projects Section</h2>
    <h5 id="sub">(More details in the About section, where I have uploaded my resume as well..)</h5>
    <br />

    <div id="pro1">
        <h3 class="p2">
            Employee Time Tracking System &ensp;
        </h3>
        <br />
        <h3 class="p3">
            Built "Timely," an Employee Time Tracking System using the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS). 
            This project, completed from September 2023 to December 2023, showcased my ability to develop scalable web applications 
            and collaborate effectively in modern technology environments. <a href="#">(Demo)</a>
        </h3>
    </div>

    <div id="pro2">
        <h3 class="p2">
            Stock Price Analyzer &ensp;
        </h3>
        <br />
        <h3 class="p3">
            Built an interactive web app for stock price analysis using Python, Streamlit, and SVR models during July 2023 - August 2023. 
            Integrated Yahoo Finance API for data, utilized pandas for manipulation, and Plotly for interactive visualizations. 
            The app includes features like 52-week highs/lows, moving averages, financial metrics, and the ability to compare 
            stock futures of two companies for enhanced user experience.
        </h3>
    </div>

    <br /><br />
</div>

    )
}
