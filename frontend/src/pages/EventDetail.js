import { Await, defer, redirect, useRouteLoaderData } from "react-router-dom";
import { json } from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

export default function EventDetailPage() {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

async function loadEvent(id) {
  const response = await fetch("http://localhost:8000/events/" + id);

  if (!response.ok) {
    return json(
      { message: "Could not fetch detials for selected event." },
      { status: 500 }
    );
  } else {
    const resDate = await response.json();
    console.log(resDate.event)
    return resDate.event;
  }
}

async function loadEvents() {
  const response = await fetch("http://localhost:8000/events");

  if (!response.ok) {
    console.log("response -> ", response.ok);
    throw json({ message: "could not fetch events." }, { status: 500 });
  } else {
    const resDate = await response.json();
    console.log("resData : ",resDate.events)
    return resDate.events;
  }
}

export async function loader(requset) {
  const id = requset.params.eventId;
  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8000/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not delete event." }), {
      status: 500,
    });
  }
  return redirect("/events");
}
