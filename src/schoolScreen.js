import school from "./pictures/CHS.jpg";

export default function SchoolScreen(){
    return (
        <div id="School">
            <h3> School Life </h3>
            <p> I'm a student at Conant High School. I'm currently in Junior Year. </p>
            <p> I'm going to do Coding Club to help kids learn how to code. </p>
            <p> The electives that I'm currently taking are Spanish and Computer Science.</p>
            <img src={school} alt="Conant High School" width="600vw"/>
            <br/>
            <a href="https://adc.d211.org/Domain/10" class="links"> Conant High School </a>
        </div>
    );
}