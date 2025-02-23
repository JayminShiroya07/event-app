import { redirect, useRouteLoaderData } from "react-router-dom"
import { json } from 'react-router-dom';
import EventItem from '../components/EventItem'


export default function EventDetailPage(){
  const data = useRouteLoaderData('event-detail');
  
  return (
    <EventItem event={data.event} />
  );
}

export async function loader(requset){
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

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8000/events/' + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not delete event.' }), {
      status: 500,
    });
  }
  return redirect('/events');
}