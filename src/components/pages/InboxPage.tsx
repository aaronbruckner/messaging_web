import './InboxPage.css'
import * as React from 'react';
import Thread from 'data/Thread';
import {Link} from 'react-router-dom';

type InboxPageProps = {
    threads: Thread[],
}

export default class Inbox extends React.Component<InboxPageProps, unknown> {
    
    public render(): React.ReactNode {
        return (<div className="page-inbox">
            <div>
                <h1>Messages</h1>
                {this.generateThreadSummaries(this.props.threads)}
            </div>
        </div>);
    }

    private generateThreadSummaries(threads: Thread[]): React.ReactNode {
        return threads.map((t: Thread) => 
            (
                <Link to={`/thread/${t.threadId}`}>
                    <div className="thread-summary">
                        <p>{t.messages[0].content}</p>
                    </div>
                </Link>
            )
        )
        
    }
}