import profilePic from './assets/profile.png'
function Card (){
    return (
        <div className="card"> 
            <img className="card-image" src={profilePic} alt="profile picture">Tao Hu</img>
            <h2 className='card-title'>Tao Hu</h2>
            <p className='card-text'>Hi, This is Tao, this is my profio made by REACT.js <br/> I'm proficent in Python and mainly focus on React and Django <br/> for frontend and backend development <br/>Tensorflow and sklearn as major machine learning pipline</p>
        </div>
    );
    
}
export default Card