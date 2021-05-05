import './App.css';
import InboxPage from "components/pages/InboxPage";
import ThreadPage from "components/pages/ThreadPage";
import Thread from 'data/Thread';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

const mockThreads: Thread[] = [
  {
    threadId: "ThreadOne",
    messages: [
      {
        authorId: "Author1",
        content: "Nothing much.. Just bored. Are you doing anything cool?",
      },
      {
        authorId: "Author2",
        content: "I'm fine. What are you up to?",
      },
      {
        authorId: "Author1",
        content: "Hey! How are you?",
      }
    ]
  },
  {
    threadId: "ThreadTwo",
    messages: [
      {
        authorId: "Author3",
        content: "Did you see my latest message?",
      }
    ]
  }
];

for (let i = 0; i < 100; i++) {
  mockThreads.push({
    threadId: `thread${i}`,
    messages: [
      {
        authorId: `AutoGenAuthor${i}`,
        content: `My Auto-Generated Message ${i}`
      }
    ]
  });
}

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/inbox">
            <InboxPage threads={mockThreads}/>
          </Route>
          <Route path='/thread/:threadId'>
            <ThreadPageWrapper/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function ThreadPageWrapper(): JSX.Element {
  const {threadId} = useParams<{threadId: string}>()
  return (
    <ThreadPage threadId={threadId}/>
  )
}

export default App;
