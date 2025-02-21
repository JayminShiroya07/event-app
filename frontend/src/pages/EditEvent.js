import { useParams } from "react-router-dom"

export default function EditEventPage(){
    const params = useParams();
    return(
        <>
            <h1>
                Edit Event page
            </h1>
            <p>
                Event Id : {params.eventId}
            </p>
        </>
    )
}