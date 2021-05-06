import {ReactNode, Component} from 'react';
import Thread from 'data/Thread';

interface ThreadPageProps {
    thread: Thread | undefined;
}

/**
 * Displays all messages for a specific communication context (one-on-one, group, etc).
 */
export default class ThreadPage extends Component<ThreadPageProps, unknown> {
    public render(): ReactNode {
        if (!this.props.thread) {
            return null;
        }
        return (
            <div className='page-thread'>
                <p>Thred: {this.props.thread.threadId}</p>
                <div>
                    {this.buildMessages(this.props.thread)}
                </div>
            </div>
        )
    }

    private buildMessages(thread: Thread): ReactNode {
        return thread.messages.map(m => {
            return (
                <p>{m.content}</p>
            );
        });
    }
}