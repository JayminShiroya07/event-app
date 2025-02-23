import EventForm from "../components/EventForm";

export default function NewEventPage(){

    // function submitHandler(event){
    //     event.preventDefault();
    // }


    return(
        <EventForm method='post'/>
    )
}

// export async function  action({request,params}){

//     const method = request.method;
//     const data = await request.formData();

//     const eventData = {
//         title : data.get('title'),
//         image : data.get('image'),
//         date : data.get('date'),
//         description : data.get('description')
//     }

//     let url = 'http://localhost:8000/events';

//     if(method === 'patch'){
//         const eventId = params.eventId;
//         url += '/' + eventId; 
//     }
    
//     const response = await fetch(url,{
//         method: method,
//         headers : {
//             'Content-Type' : 'application/json'
//         },
//         body: JSON.stringify(eventData)
//     });

//     if(response.status === 422){
//         return response;
//     }

//     if(!response.ok){
//         throw json(
//             {message : 'could not save event.!'},
//             {status : 500}
//         );
//     }

//     return redirect('/events');
// }