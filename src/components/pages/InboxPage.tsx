import './InboxPage.css'
import Thread from 'data/Thread';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {RootState} from 'state/interfaces';

export default function InboxPage(): JSX.Element {
    const threads = useSelector<RootState, Thread[]>((state) => {
        return state.data.threads;
    });

    function generateThreadSummaries(threads: Thread[]): JSX.Element[] {
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

    return (<div className="page-inbox">
        <div>
            <h1>Messages</h1>
            {generateThreadSummaries(threads)}
        </div>
    </div>);
}