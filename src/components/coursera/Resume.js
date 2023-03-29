import React from "react";
import './Resume.css';
import img from './photo.jpg';
import image from './line.jpg';       
export function Resume(){
 return(
  <>
    <div className="container">
    <header>
        <main>
            <h1 className="head_color center"  id="page-title"> <center>Resume </center></h1>
        </main>
        <section>
            <table id="personal_information">
                <tr>
                    <td id="image">
                        <figure>
                            <img src={img}/>
                            <figcaption> R.SUGIRTHI </figcaption>
                        </figure>
                    </td>
                    <td id="Personal_information">
                        <dl>
                            <dt></dt>
                            <dd>Gender: Male</dd>
                            <dd>DOB: 05-04-2001</dd>
                            <dd>Address: Coimbatore</dd>
                            <dd>Mobile: 987654321</dd>
                            <dd>Marital status : single</dd>
                        </dl>
                    </td>
                </tr>
            </table>
        </section>
        <img src={image}/>
        <section>
            <h4 className="head_color"> CAREER OBJECTIVE</h4>
            <p className="p_font_style">
                To succeed in an environment of growth and excellence and earn a job which provides 
                me job satisfaction and self development and help me achieve organizational as well 
                as personal goals. To integrate my knowledge & utilizing my technical & analytical 
                skills to explore the future growth of the organization.  
            </p>
        </section>
        <img src={image}/>
    </header>
    <h3 className="head_color">Skills</h3>
    <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
    </ol>
    <h3>Eduction details</h3>
    <table>
        <thead>
            <tr>
                <th>S.No</th>
                <th>Course</th>
                <th>Institution</th>
                <th>Board/University</th>
                <th>Year of Passing</th>
                <th>Percentage</th>
                <th>Grade</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>SSLC</td>
                <td>Angappa Matric Hr. Sec School Coimbatore</td>
                <td>State Board</td>
                <td>2017</td>
                <td>74%</td>
            </tr>
            <tr>
                <td>2</td>
                <td>HSC</td>
                <td>Angappa Matric Hr. Sec School Coimbatore</td>
                <td>State Board</td>
                <td>2019</td>
                <td>87%</td>
            </tr>
            <tr>
                <td>3</td>
                <td>BCA</td>
                <td>KG College of arts and science Coimbatore</td>
                <td>Bharathiar University</td>
                <td>2022</td>
                <td>54%</td>
            </tr>
        </tbody>
    </table>

    <section id="projects">
        <h3 className="head_color">Projects</h3>
        <details>
            <summary><a href="" target="_blank">Project 1: Updating fintechnews.com (Fintech News Inc.)
                    BackendDeveloper</a></summary>
            <dl>
                <dt>Title</dt>
                <dd>Updating fintechnews.com (Fintech News Inc.) BackendDeveloper</dd>
                <dt>Duration: </dt>
                <dd> Three months</dd>
                <dt>Technologies Used: </dt>
                <dd>
                    <ol>
                        <li>Python</li>
                        <li>PHP</li>
                        <li>Ruby</li>
                        <li>Javascript</li>
                    </ol>
                </dd>
                <dt>Description</dt>
                <dd>
                    <ul>
                        <li>Created a content management system serving as a client interface that reduced download
                            times by 30%.</li>
                        <li>Developed new admin panel, which improved internal operating efficiency by over 40%.</li>
                        <li>Created comprehensive testing regime using RSpec to ensure bug-free code.</li>
                        <li>Rebuilt entire website with up to date technologies and frameworks.</li>
                    </ul>
                </dd>
            </dl>
        </details>
        <details>
            <summary><a href="" target="_blank">Project 2: Updating fintechnews.com (Fintech News Inc.)
                    BackendDeveloper</a></summary>
            <dl>
                <dt>Title</dt>
                <dd>Updating fintechnews.com (Fintech News Inc.) BackendDeveloper</dd>
                <dt>Duration: </dt>
                <dd> Three months</dd>
                <dt>Technologies Used: </dt>
                <dd>
                    <ol>
                        <li>Python</li>
                        <li>PHP</li>
                        <li>Ruby</li>
                        <li>Javascript</li>
                    </ol>
                </dd>
                <dt>Description</dt>
                <dd>
                    <ul>
                        <li>Created a content management system serving as a client interface that reduced download
                            times by 30%.</li>
                        <li>Developed new admin panel, which improved internal operating efficiency by over 40%.</li>
                        <li>Created comprehensive testing regime using RSpec to ensure bug-free code.</li>
                        <li>Rebuilt entire website with up to date technologies and frameworks.</li>
                    </ul>
                </dd>
            </dl>
        </details>
        <details>
            <summary><a href="" target="_blank">Project 3: Updating fintechnews.com (Fintech News Inc.)
                    BackendDeveloper</a></summary>
            <dl>
                <dt>Title</dt>
                <dd>Updating fintechnews.com (Fintech News Inc.) BackendDeveloper</dd>
                <dt>Duration: </dt>
                <dd> Three months</dd>
                <dt>Technologies Used: </dt>
                <dd>
                    <ol>
                        <li>Python</li>
                        <li>PHP</li>
                        <li>Ruby</li>
                        <li>Javascript</li>
                    </ol>
                </dd>
                <dt>Description</dt>
                <dd>
                    <ul>
                        <li>Created a content management system serving as a client interface that reduced download
                            times by 30%.</li>
                        <li>Developed new admin panel, which improved internal operating efficiency by over 40%.</li>
                        <li>Created comprehensive testing regime using RSpec to ensure bug-free code.</li>
                        <li>Rebuilt entire website with up to date technologies and frameworks.</li>
                    </ul>
                </dd>
            </dl>
        </details>
    </section>
    <section id="languages_know">
        <h3 className="head_color">Languages Known</h3>
        <dl>
            <dt>
            <dd>Tamil</dd>
            <dd>English</dd>
            <dd>Hindi</dd>
            </dt>
        </dl>
    </section>
    <img src={image}/>
    <footer>
    </footer>
    </div>
  </>
    )
}
