import './Advantage.css'
export function Advantage(props){
    return(
        <div className="advantage">
            <div className="advantage_img">
                <img src={props.img}/>
            </div>
            <div className="advantage_text">
                <p>{props.title}</p>
            </div>
        </div>
    )
}