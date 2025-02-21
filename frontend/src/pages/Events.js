import { useLoaderData,json } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  const events = data.events;


  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8000/events");

  if (!response.ok) {
    return json(
        {message:'could not fetch events.'},
        {status : 500},
    )
  } else {
    return response;
  }
}
