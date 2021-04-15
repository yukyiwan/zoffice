import React, {useState} from 'react';
import { 
    ApolloClient, 
    InMemoryCache, 
    ApolloProvider, 
    useSubscription, 
    useMutation , 
    gql } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import './ChatSocket.scss';


const link = new WebSocketLink({
    uri: `ws://localhost:4000/`,
    options: {
      reconnect: true
    }
});

const client = new ApolloClient({
  link,
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

const GET_MESSAGES = gql`
    subscription {
        messages {
        id
        content
        person
        }
    }
`;

const POST_MESSAGE = gql`
    mutation ($person:String!, $content:String!){
        postMessage(person: $person, content:$content)
    }
`;

const Messages = ({ person }) => {
    const { data } = useSubscription(GET_MESSAGES);
    if (!data) {
        return null;
    }

    // return JSON.stringify(data);
    return (
        <>
            { data.messages.map(({ id, person: messagePerson, content }, index) => (
                <div key={index}
                    style={{
                        display: 'flex',
                        justifyContent: person === messagePerson ? 'flex-end' : 'flex-start',
                        paddingBottom: "1em",
                    }}
                >
                    { person != messagePerson && (
                        <div 
                            style={{
                                height: 45,
                                width: 45,
                                marginRight: "0.5em",
                                border: "2px solid #ffa800",
                                borderRadius: 25,
                                textAlign: "center",
                                fontSize: "18pt",
                                paddingTop: 2,
                                marginTop: 5,
                            }}
                        >
                            { messagePerson.slice(0,2).toUpperCase() }
                        </div>
                    )}  
                <div
                style={{
                    background: person === messagePerson ? "#004f69" : "#ffa800",
                    color: person === messagePerson ? "white" : "black",
                    padding: "1em",
                    borderRadius: "0.4em",
                    maxWidth: "60%",
                }}
                >
                    { content }
                </div>
                
            </div>
            ))} 
        </>
    );
};

const Chat = () => {

    const user = JSON.parse(localStorage.getItem('profile'));
    const [state, setState] = React.useState({
        person: user?.result.fName,
        content: '',
    })

    const [postMessage] = useMutation(POST_MESSAGE);

    const onSend = (e) => {
        e.preventDefault();
        if (state.content.length > 0) {
            postMessage({
                variables: state,
            });
        }
        setState({
            ...state,
            content: '',
        })
    }


    return (

        <div className="chatMbox--position">
            <div className="chattitle--position"><h1>Group Chat</h1></div>
            <div className="conver--position p-2"><Messages person={ state.person } /></div>

            <div className="d-flex flex-row justify-content-between chatbox--position">
                <div className="col-2 p-2">
                    <form>
                        <div className="mr-1">
                            <input 
                                type="text" 
                                className="form-control" 
                                aria-describedby="userName" 
                                value={ user?.result.fName + " " + user?.result.lName }  
                                onChange={(evt) => setState({...state, person: evt.target.value})}
                            />
                        </div>
                    </form>
                </div>
                <div className="col-10 p-2 mb-5">
                    <form>
                        <div className="mr-2">
                            <input 
                                type="text" 
                                className="form-control" 
                                aria-describedby="emailHelp" 
                                value={ state.content }  
                                onChange={(evt) => setState({...state, content: evt.target.value})}
                                onKeyUp={(evt) => {
                                    if (evt.keyCode === 13) {
                                        return onSend;
                                    }
                                }}
                            />
                        </div>
                        
                        <div className="row mt-3 justify-content-end">
                            <button 
                                type="submit" 
                                id="btn-send"
                                className="btn mr-4 py-2 btn--width"
                                onClick={onSend}
                            >Send</button>
                        </div>
                    </form>
                </div>
            </div> 
                    {/* end of the row div */}
        </div>
    );
}

export default () => (
    <ApolloProvider client={ client }>
        <Chat />
    </ApolloProvider>
)