import "./coding.css";
import Irex from "./indom.png";

export default function CodingScreen(){
    return (
        <div class="Screen" id="coding">
            <div class="screenContent">
                <h3 className="scrollHidden"> Coding </h3>
                <p className="scrollHidden"> One of my hobbies is coding. I've been coding for a while now, and I've made a couple of games. </p>
                <p className="scrollHidden"> Try these two games I made! </p>
                <a className="scrollHidden" href="https://studio.code.org/projects/gamelab/MVMuRYISuPpODzCB59Ei9EqHiRg90UUiVEfZegjmroE"> Falling Fruit Project </a>
                <br/>
                <a className="scrollHidden" href="https://www.tynker.com/ide/v3?type=diy&p=630bede018bfa040f531382d"> The Indominus Escape </a>
                <img className="scrollHidden hoverShadow" src={Irex} alt="MY INDOMINUS REX"/>
                <p className="scrollHidden"> At Conant, I'm currently in a coding club that helps kids learn how to code. It's called <a href="https://adc.d211.org/Page/7203"> Comp Sci Kids</a>.</p>
            </div>
        </div>
    );
}