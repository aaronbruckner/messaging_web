import {ReactNode, Component} from 'react';

interface ThreadPageProps {
    threadId: string;
}

export default class ThreadPage extends Component<ThreadPageProps, unknown> {
    public render(): ReactNode {
        return (
            <div className='page-thread'>
                <p>Thred: {this.props.threadId}</p>
            </div>
        )
    }
}