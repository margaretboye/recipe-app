import welcomeImage from "../assets/images/welcome-bg-img.png";


export default function Welcome() {
    return(
        <div>
            <h3>Savory & Sweet</h3>
            <img src={welcomeImage} alt="Welcome Image" />
        </div>
    );
}