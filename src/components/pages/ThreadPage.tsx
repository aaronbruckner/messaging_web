import {useState} from 'react';
import Thread from 'data/Thread';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import {RootState} from 'state/interfaces';
import {addMessage} from 'state/actions/dataActions';
import _ from 'lodash';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

/**
 * Displays all messages for a specific communication context (one-on-one, group, etc).
 */
export default function ThreadPage(): JSX.Element | null {
    const {threadId} = useParams<{threadId: string}>();
    const [newMessageContent, setNewMessageContent] = useState('');
    const thread = useSelector<RootState, Thread | undefined>((state) => _.find(state.data.threads, (t) => t.threadId === threadId));
    const dispatch = useDispatch();

    function buildMessages(): JSX.Element[] | undefined {
        return thread?.messages.map(m => {
            return (
                <p>{m.content}</p>
            );
        });
    }

    function onNewMessageContentChange(value: string) {
        setNewMessageContent(value);
    }

    function onSendMessageButtonClicked(): void {
        dispatch(addMessage({
            threadId,
            newMessageContent
        }))
        setNewMessageContent('');
    }

    if (!thread) {
        return null;
    }

    return (
        <div className='page-thread'>
            <p>Thred: {threadId}</p>
            <div>
                {buildMessages()}
            </div>
            <Input value={newMessageContent} onChange={onNewMessageContentChange}/>
            <Button onClick={onSendMessageButtonClicked} text='Send' enabled={!_.isEmpty(newMessageContent)}/>
        </div>
    )

}