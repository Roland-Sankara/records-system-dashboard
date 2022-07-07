const fetchData = async(endpoint) => {
    const API = `http://www.registration.unmc.ug/api/v1/${endpoint}/`
    const res = await fetch(API,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3NjIzNTEzLCJqdGkiOiI3ODg1MDE2MGVmOTM0MzQ1YThhOTg4N2E5MmY0OTM2NiIsInVzZXJfaWQiOiJjMDBhMzI5Mi1lNTlhLTQ2Y2EtYmM3ZC00NzNhMTFhNjFiNjAiLCJyb2xlIjoiYWRtaW4ifQ.sjMnunsbsLGmqCZbLVi3TQ7khfbQJltu8UnDlQ9etPo'
        }
    })

    return res.json();
} 

const graphData = (schoolsQuery)=>{
    let counterObject = {}
    schoolsQuery.data['data'].forEach(school => {
        try {
            counterObject[school.district.name.toLowerCase()] ? counterObject[school.district.name.toLowerCase()] += 1 : counterObject[school.district.name.toLowerCase()] = 1
            
        } catch (error) {
            counterObject['others'] ? counterObject['others'] += 1 : counterObject['others'] = 1 
        }
    });
    return {keys: Object.keys(counterObject), values: Object.values(counterObject)};
}

export {
    fetchData,
    graphData
}