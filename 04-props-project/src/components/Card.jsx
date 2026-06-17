import { Bookmark } from 'lucide-react'
import '../index.css'

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <img src={props.logoUrl} alt="Amazon Logo" />
                <button>Save <Bookmark size={15} /></button>
            </div>
            <div className="center">
                <h3>{props.companyName} <span>{props.postedTime}</span></h3>
                <h2>{props.jobTitle}</h2>
                <div className="tags">
                    <h4>{props.jobType}</h4>
                    <h4>{props.level}</h4>
                </div>
            </div>
            <div className="bottom">
                <div className="pay">
                    <h3>{props.salary}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply now</button>
            </div>
        </div>
    )
}

export default Card;