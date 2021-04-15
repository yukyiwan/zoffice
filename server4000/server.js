import { GraphQLServer, PubSub } from 'graphql-yoga';

const messages = [];

// create types for the server (schema), ! = require 
// type Mutation is the POST verb in the RESTful
const typeDefs = `
    type Message {
        id: ID!
        person: String!
        content: String!  
    }

    type Query {
        messages: [Message!]
    }

    type Mutation {
        postMessage(person: String!, content: String!): ID!
    }

    type Subscription {
        messages: [Message!]
    }
`;

const subscribers = [];
const onMessagesUpdates = (fn) => subscribers.push(fn);

// how to get the data
const resolvers = {
    Query: {
        messages: () => messages,
    },
    Mutation: {
        postMessage: (parent, { person, content }) => {
            const id = messages.length;
            messages.push({
                id,
                person,
                content
            });
            subscribers.forEach((fn) => fn());
            return id;
        },
    },
    Subscription: {
        messages: {
            subscribe: (parent, args, { pubsub }) => {
                const channel = Math.random().toString(36).slice(2,15);
                onMessagesUpdates(() => pubsub.publish(channel, { messages }));
                setTimeout(() =>  pubsub.publish(channel, { messages }), 0);
                return pubsub.asyncIterator(channel);
            },
        },
    },
};

const pubsub = new PubSub();

const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });

server.start(({ port }) => {
    console.log(`Server on http://localhost:${port}`);
});