import logo from './logo.svg';
import './App.css';
import school from "./pictures/CHS.jpg";
import plant from "./pictures/Venus_Flytrap.jpg";

function App() {
  return (
    <div className="App">
      <div class="btn-group">
        <h1>All About Dylan Ja!</h1>
        {/* <button type="button" class="btn btn-primary"> Option 1 </button>
        <button type="button" class="btn btn-primary"> Option 2 </button>
        <button type="button" class="btn btn-primary"> Option 3 </button> */}
        <hr/>
        <h3> School Life </h3>
        <p> I'm a student at Conant High School. I'm currently in Junior Year. </p>
        <p> I'm going to do Coding Club to help kids learn how to code. </p>
        <p> The electives that I'm currently taking are Spanish and Computer Science.</p>
        <img src={school} alt="Conant High School" width="600vw"/>
        <br/>
        <a href="https://adc.d211.org/Domain/10" class="links"> Conant High School </a>
        

        <hr/>
        <h3> Outside School </h3>
        <p> Outside of school, I play sports such as swimming and tennis. </p>
        <p> I also like to watch TV, go outside, and read. </p>
        <p> My favorite snack is fruit. I don't like candy or many desserts. </p>
        <hr/>

        <h3 id="Gardening" class="subheader"> Gardening </h3>
        <p> One of my hobbies is gardening. At home, I grow many species of plants, both exotic and normal </p>
        <img src={plant} alt="My Favorite Plant" width="600vw"/>
        <p> The Venus Flytrap is my favorite exotic plant.</p>
        <p> I find it so interesting how these and other plants have evolved to eat meat in order to survive. </p>


      </div>
    </div>
  );
}

export default App;
