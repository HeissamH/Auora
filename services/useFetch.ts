import { useEffect, useState } from "react";

const useFetch=<T>(fetchfucntion:()=> Promise<T>, autofetch =true) =>{
const [data, setData] = useState<T | null>(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);


const fetchData = async () => { 

    try {
        setLoading(true);
    setError(null);
    const results = await fetchfucntion();

setData(results);

    }
 
     
    catch (err) {
//@ts-ignore
        setError(err instanceof Error ? err : new Error('An error occurred'));
}
finally {
    setLoading(false);
}
};

const reset = () => {
    setData(null);
    setLoading(false);
    setError(null);
};

useEffect(() => { 
    if (autofetch) {
        fetchData();    
    }
}, []);

return { data, loading, error, reset , refetch: fetchData};

}

export default useFetch;