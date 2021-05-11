import { createReducer } from '@reduxjs/toolkit'
import Thread from 'data/Thread';

interface DataState {
    threads: Thread[];
}

const mockThreads: Thread[] = [
    {
        threadId: "ThreadOne",
        messages: [
            {
                authorId: "Author1",
                content: "Hey! How are you?",
            },
            {
                authorId: "Author2",
                content: "I'm fine. What are you up to?",
            },
            {
                authorId: "Author1",
                content: "Nothing much.. Just bored. Are you doing anything cool?",
            },
        ]
    },
    {
        threadId: "ThreadTwo",
        messages: [
            {
                authorId: "Author3",
                content: "Did you see my latest message?",
            }
        ]
    }
];

for (let i = 0; i < 100; i++) {
    mockThreads.push({
        threadId: `thread${i}`,
        messages: [
            {
                authorId: `AutoGenAuthor${i}`,
                content: `My Auto-Generated Message ${i}`
            }
        ]
    });
}

const dataReducer = createReducer<DataState>({threads: mockThreads}, (builder) => {
    // TODO
});

export default dataReducer;