import { json, useLoaderData } from "react-router-dom"
import EventItem from '../components/EventItem'

export default function EventDetailPage(){
    
    try{
        const data = useLoaderData();
        console.log(data)
    }catch(error){
        return <p>{error}</p>
    }
    return(
        // <EventItem event={data.event} />
        <p>hiii</p>
    )
}

export async function loader(requset,params){
    const id = params.eventId;

    const response = await fetch('http://localhost:8000/events/'+id);
    
    if(!response.ok){
        return json(
            {message:'Could not fetch detials for selected event.'},
            {status: 500}
        )
    }else{
        return response;
    }
}