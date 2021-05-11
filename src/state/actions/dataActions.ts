import { createAction } from '@reduxjs/toolkit';

export interface AddMessagePayload {
    threadId: string;
    newMessageContent: string;
}
export const addMessage = createAction<AddMessagePayload>('data/addMessage');