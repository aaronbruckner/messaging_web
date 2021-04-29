import * as React from 'react';
import Thread from 'data/Thread';

type InboxPageProps = {
    threads: Thread[],
}

export default class Inbox extends React.Component<InboxPageProps, any> {
    
    public render(): React.ReactNode {
        return (<div className="page-inbox">
            <div>
                <h1>Messages</h1>
                {this.props.threads.map((t: Thread) => {
                    return (<div className="thread-summary">
                        <p>{t.messages[0].content}</p>
                    </div>)
                })}
            </div>
        </div>);
    }
}