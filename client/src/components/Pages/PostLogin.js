import React, {useState, useEffect} from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux'; 
import { Container } from 'react-bootstrap';


const PostLogin = () => {
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user);

    useEffect(()=>{
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, []);

    // const logout = () => {
    //     dispatch({ type: actionType.LOGOUT });
    
    //     history.push('/auth');
    
    //     setUser(null);
    //   };

    return (
        <div>
            <Container>
            {/* <Image src="" fluid /> */}
            {/* <Button variant="contained" color="secondary" onClick={logout}>Logout</Button> */}
            </Container>
        </div>
    )
}

export default PostLogin
