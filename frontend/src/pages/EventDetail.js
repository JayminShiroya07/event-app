import { Link, useParams } from "react-router-dom"

export default function EventDetailPage(){
    const params = useParams();

    return(
        <h1>
            Event Detail Page
            <p>
                Event Id : {params.eventId}
                <Link to='edit'>edit</Link>
            </p>
        </h1>
    )
}