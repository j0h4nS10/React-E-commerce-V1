

export const onchangeHandler = (e, setFunction) => {
    console.log(e.target.value)
    setFunction(e.target.value)
}

export const onChangeHandlerForm = (e, formValue ,setFormValue) => {
    console.log(e.target.value, e.target.id)
    setFormValue({
        ...formValue,
        [e.target.id]: e.target.value
    })
}

export const setLocalStorageToken = (token) => {
    console.log(token)
    //let Sttoken = JSON.stringify(token)
    //console.log(Sttoken)
    window.localStorage.setItem('token', token)
}

export const getLocalStorageToken = () => {
    let stToken = window.localStorage.getItem('token')
    const token = JSON.parse(stToken)
    return token 
}



export const postUser = async (data, setData) => {
    try {
        const response = await axios.post('https://simple-server-ochre.vercel.app/register', data);
        setData(response.data);
    } catch (error) {
        console.log(error);
    }
};

export const getApiUser = async (token) => {
    try {
        const response = await axios.get('https://simple-server-ochre.vercel.app/users', {
            headers: {
                Authorization: 'Bearer ' + ' ' + token
            }
        });
        let rawData = response.data
        setData(rawData.data)
    } catch (error) {
        console.log(error)
    }
};

/*

export const setInfotoupdate = async (name, email, datetime, table, setName, setEmail, setDatetime, setTable) => {
    await setName(name)
    await setEmail(email)
    await setTable(table)
    await setDatetime(datetime)
}



export const createUser = async (name, email, datetime, table, data, setData) => {
    await addDoc(userCollection, { name: name, email: email, datetime: datetime, table: table })
}

export const getData = async (data, setData) => {
    onSnapshot(userCollection, (snapshot) => {
        setData(snapshot.docs.map((doc) => (
            {
                ...doc.data(),
                id: doc.id
            }
        )))
    })
}


export const updateUser = async (userCollection, id, name, email, datetime, table) => {
    const userDoc = doc(userCollection, id)
    console.log(userDoc)
    await updateDoc(userDoc, { name: name, email: email, datetime: datetime, table: table })


}

export const deleteUser = async (userCollection, id, data, setData) => {
    const userDoc = doc(userCollection, id)
    await deleteDoc(userDoc)
}

*/