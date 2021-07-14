import { Preview} from './Preview';
import { Edit } from './Edit';


/**
 * Holds template data.
 */
export const PreviewAndEdit = () => {
  const title = 'Title text';
  const about = 'About text';
  const content = 'Content text';

  const issueDefaultTitle = 'Issue default title text';
  const assignees = ['firstUsername', 'secondUsername'];
  const labels = ['firstLabel', 'secondLabel'];

  return (
    <div>
      {/* Preview displays how template looks in user browser. */}
      <Preview
        title={title}
        about={about}
        content={content}
        issueDefaultTitle={issueDefaultTitle}
        assignees={assignees}
        labels={labels}
      />
      
      {/* Edit allows modification of data. */}
      <Edit
        title={title}
        about={about}
        content={content}
        issueDefaultTitle={issueDefaultTitle}
        assignees={assignees}
        labels={labels}
      />
    </div>
  );
}