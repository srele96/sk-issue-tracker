import { TextEditor } from '../components/TextEditor';


export const PageCreateNewIssue = () => (
  <div>
    <div>Title</div>
    <div>
      <span>About</span>
      <span>
        If this doesn't look right,{' '}
        {/* should be link to PageNewIssueType */}
        <span>choose different type</span>.
      </span>
    </div>
    <div>
      <TextEditor />
    </div>
  </div>
);