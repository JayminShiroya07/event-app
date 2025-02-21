import { useRouteLoaderData } from "react-router-dom"
import { json } from 'react-router-dom';
import EventItem from '../components/EventItem'


export default function EventDetailPage(){
  const data = useRouteLoaderData('event-detail');
  console.log(data);
  return (
    <EventItem event={data.event} />
    // <p>hii</p>
  );
}

export async function loader(requset){
    console.log("response => ",requset)
    const id = requset.params.eventId;

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