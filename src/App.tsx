import './App.css';
import InboxPage from "components/pages/InboxPage";
import Thread from 'data/Thread';
import _ from 'lodash';

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

function App() {
  return (
    <div className="App">
      <InboxPage threads={mockThreads}/>
    </div>
  );
}

export default App;
