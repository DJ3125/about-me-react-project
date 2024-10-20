import school from "./CHS.jpg";

export default function SchoolScreen(){
    return (
        <div id="school" className="Screen">
            <h3 className="scrollHidden"> School Life </h3>
            <p className="scrollHidden"> I'm a student at Conant High School. I'm currently in Junior Year. </p>
            <p className="scrollHidden"> I'm going to do Coding Club to help kids learn how to code. </p>
            <p className="scrollHidden"> The electives that I'm currently taking are Spanish and Computer Science.</p>
            <img src={school} alt="Conant High School" className="hoverShadow scrollHidden"/>
            <br/>
            <a className="scrollHidden" href="https://adc.d211.org/Domain/10"> Conant High School </a>
        </div>
    );
}

export function initializeSchoolScreen(){
    // let data = window.document.getElementById("displayingData");
    // let height = window.innerHeight - data.getBoundingClientRect().top;
    // window.document.getElementById("school").style.height = `${height}px`;
}