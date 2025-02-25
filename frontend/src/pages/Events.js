import { useLoaderData, json, Await, defer } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();


  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {

  const response = await fetch("http://localhost:8000/events");

  if (!response.ok) {
    throw json({ message: "could not fetch events." }, { status: 500 });
  } else {
    const resDate = await response.json();
    return resDate.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
