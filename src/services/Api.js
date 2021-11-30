export async function getWeatherApi(query){
    
    const url= process.env.REACT_APP_URL+"&query="+query;
    console.log(url);
    return fetch(url).then((response)=>{
        return response.json();
    }).catch((error)=>{
        console.log(error);    
        
    })

    
};