import {Col} from "react-bootstrap";

function Card ({title, description, imgUrl}) {
    return(
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    )
}

export default Card;
