import profilePic from "./assets/BBBBOMB.png";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="Profile Picture"></img>
      <h2 className="card-title">Homer Simpson</h2>
      <p className="card-text">I am a student at UOttawa. I play Fortnite.</p>
    </div>
  );
}

export default Card;
