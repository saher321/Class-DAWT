import React, { useEffect, useState } from 'react'
import axios from 'axios'


function AuthLogin() {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [userData, setUserData] = useState({})


    const handleSubmit = async () => {

        const data = {
            email,
            password: pass
        }
        // console.log(send)

        const resp = await axios.post('http://127.0.0.1:3001/api/login', data)



        if (resp.data.status) {
            alert(resp.data.message)
            console.log(resp.data.data.access_token)
            localStorage.setItem('token', resp.data.data.access_token)
            checkToken(resp.data.data.access_token)
        } else {
            alert('login failed' + resp.data.message)
            setUserData({})
        }

        setEmail('')
        setPass('')

    }

    const getUser = async (token) => {
        const data = await axios.get('http://127.0.0.1:3001/api/profile', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (data.data.status) {
            setUserData(data.data)
            alert('profile fetched successfully')
        } else {
            alert('failed to fetch profile')
            setUserData({})
        }

        console.log(userData)

    }

    const obj = {
        name: 'pny',
        passwords: '123'
    }

    const { name, passwords } = obj

    console.log(name, passwords)


    const checkToken = (access_token) => {
        const token = localStorage.getItem('token')



        if (token || access_token) {
            getUser(token)
            window.location.href('/home')
        } else {
            console.log('token does not exist')
        }
    }


    useEffect(() => {
        checkToken()
    }, [])

    // console.log(userData)

    return (
        <div style={{ width: '100%', height: '100vh', background: '#36454F', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <div style={{
                width: '400px',
                height: '400px',
                border: '1px solid gray',
                borderRadius: '10px'

            }} >

                <h1>login</h1>


                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid red', height: '200px', padding: '10px' }} >


                    <input onChange={(text) => setEmail(text.target.value)} type="text" placeholder='Enter your E-mail ...' style={{ width: '100%', padding: '5px', border: '1px solid gray', height: '30px', borderRadius: '3px' }} />

                    <input onChange={(text) => setPass(text.target.value)} type="password" placeholder='********' style={{ width: '100%', margin: '15px 0', padding: '5px', border: '1px solid gray', height: '30px', borderRadius: '3px' }} />

                    <button onClick={() => handleSubmit()} style={{ width: '100%', padding: '7px', borderRadius: '10px', border: 'none', borderRadius: '3px', cursor: 'pointer', background: '#023020', color: 'white' }}  >login</button>
                </div>


            </div>

        </div>
    )
}

export default AuthLogin
