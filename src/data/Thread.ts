import Message from 'data/Message';

export default interface Thread {
    threadId: string;
    messages: Message[];
}