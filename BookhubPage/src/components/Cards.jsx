import pic from "../assets/BookThawTharMin.jpg";
import Button from "./Button";
function Card(){
    return(
        <div className="card">
            <img alt="LocalBook" src={pic} class="cardsImgs"></img>
            <h2 className="cardTitle">လူငယ်တစ်ယောက်စိတ်ဓာတ်ကျနေသည်</h2>
            <p className="cardText">-သော်တာမင်း</p>
            <Button></Button>
        </div>
    );
}

export default Card