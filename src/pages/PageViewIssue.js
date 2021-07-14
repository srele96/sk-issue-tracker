import { TextEditor } from '../components/TextEditor';
import { Comment } from '../components/Comment';


export const PageViewIssue = () => (
  <div>
    <div>Issue title</div>
    <div>
      <span>Open | Closed</span>{' '}
      <span>User opened</span>{' '}
      <span>date time opened</span>{' '}
      <span>num comments</span>
    </div>
    <div>
      <Comment />
      <Comment />
      <Comment />
    </div>
    <div>
      <TextEditor />
    </div>
  </div>
);