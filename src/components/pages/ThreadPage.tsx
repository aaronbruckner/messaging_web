import {ReactNode, Component} from 'react';
import Thread from 'data/Thread';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import _ from 'lodash';

interface ThreadPageProps {
    thread: Thread | undefined;
}

interface ThreadPageState {
    newMessageContent: string;
}

/**
 * Displays all messages for a specific communication context (one-on-one, group, etc).
 */
export default class ThreadPage extends Component<ThreadPageProps, ThreadPageState> {
    public constructor(props: ThreadPageProps) {
        super(props);

        this.state = {
            newMessageContent: '',
        }

        this.onSendMessageButtonClicked = this.onSendMessageButtonClicked.bind(this);
        this.onNewMessageContentChange = this.onNewMessageContentChange.bind(this);
    }

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
                <Input value={this.state.newMessageContent} onChange={this.onNewMessageContentChange}/>
                <Button onClick={this.onSendMessageButtonClicked} text='Send' enabled={!_.isEmpty(this.state.newMessageContent)}/>
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

    private onNewMessageContentChange(value: string) {
        this.setState({
            newMessageContent: value,
        });
    }

    private onSendMessageButtonClicked(): void {
        alert(`Message to Send:\n\n${this.state.newMessageContent}`);
        this.setState({
            newMessageContent: ''
        })
    }
}