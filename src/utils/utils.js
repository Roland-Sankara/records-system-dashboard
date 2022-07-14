const fetchData = async(endpoint) => {
    const API = `http://www.registration.unmc.ug/api/v1/${endpoint}/`
    const res = await fetch(API,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4MDQ2NjgwLCJqdGkiOiIwZTRiYmViODM0NzY0NTRlOGM1NGM1ZjljMDc3MjdkYyIsInVzZXJfaWQiOiIxNTE4MzdlOC1iYmJhLTQ0OGYtODM5NC1lZGQwZmQ2OWQyZTciLCJyb2xlIjoicmVjb3JkcyBvZmZpY2VyIn0.HT51NRbQ6GJtDYx3m8zb6IVbuWnn4GzcDTn27G1MVig'
        }
    })

    return res.json();
} 

const fetchDataById = async(endpoint, id) => {
    const API = `http://www.registration.unmc.ug/api/v1/${endpoint}/${id}`
    const res = await fetch(API,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4MDQ2NjgwLCJqdGkiOiIwZTRiYmViODM0NzY0NTRlOGM1NGM1ZjljMDc3MjdkYyIsInVzZXJfaWQiOiIxNTE4MzdlOC1iYmJhLTQ0OGYtODM5NC1lZGQwZmQ2OWQyZTciLCJyb2xlIjoicmVjb3JkcyBvZmZpY2VyIn0.HT51NRbQ6GJtDYx3m8zb6IVbuWnn4GzcDTn27G1MVig'
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

const postData = async(endpoint,data) => {
    const API = `http://www.registration.unmc.ug/api/v1/${endpoint}/`
    const res = await fetch(API,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4MDQ2NjgwLCJqdGkiOiIwZTRiYmViODM0NzY0NTRlOGM1NGM1ZjljMDc3MjdkYyIsInVzZXJfaWQiOiIxNTE4MzdlOC1iYmJhLTQ0OGYtODM5NC1lZGQwZmQ2OWQyZTciLCJyb2xlIjoicmVjb3JkcyBvZmZpY2VyIn0.HT51NRbQ6GJtDYx3m8zb6IVbuWnn4GzcDTn27G1MVig'
        },
        body: JSON.stringify(data)
    })

    return res.json();
} 

const patchData = async(endpoint,data,id) => {
    const API = `http://www.registration.unmc.ug/api/v1/${endpoint}/${id}`
    const res = await fetch(API,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4MDQ2NjgwLCJqdGkiOiIwZTRiYmViODM0NzY0NTRlOGM1NGM1ZjljMDc3MjdkYyIsInVzZXJfaWQiOiIxNTE4MzdlOC1iYmJhLTQ0OGYtODM5NC1lZGQwZmQ2OWQyZTciLCJyb2xlIjoicmVjb3JkcyBvZmZpY2VyIn0.HT51NRbQ6GJtDYx3m8zb6IVbuWnn4GzcDTn27G1MVig'
        },
        body: JSON.stringify(data)
    })

    return res.json();
} 

const deleteData = async(endpoint, id, setIsLoading)=>{
    let message = 'Are you sure you want to delete your profile?\nThis action is destructive and irreversible.'
    if(window.confirm(message)){
        const API = `http://www.registration.unmc.ug/api/v1/${endpoint}/${id}`
        const res = await fetch(API,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4MDQ2NjgwLCJqdGkiOiIwZTRiYmViODM0NzY0NTRlOGM1NGM1ZjljMDc3MjdkYyIsInVzZXJfaWQiOiIxNTE4MzdlOC1iYmJhLTQ0OGYtODM5NC1lZGQwZmQ2OWQyZTciLCJyb2xlIjoicmVjb3JkcyBvZmZpY2VyIn0.HT51NRbQ6GJtDYx3m8zb6IVbuWnn4GzcDTn27G1MVig'
            }
        });
        return res.json()
    }else{
        setIsLoading(false)
    }
}

export {
    fetchData,
    fetchDataById,
    graphData,
    postData,
    patchData,
    deleteData
}