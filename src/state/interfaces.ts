import Thread from 'data/Thread';

export interface RootState {
    data: DataState
}

export interface DataState {
    threads: Thread[];
}