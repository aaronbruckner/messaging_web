import Message from 'data/Message';

export default interface Thread {
    /**
     * Unique identifier for this thread.
     */
    threadId: string;
    /**
     * A series of individual messages for this thread. Messages are ordered from most
     * recent to oldest.
     */
    messages: Message[];
}