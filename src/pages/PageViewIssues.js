import { Issue } from '../components/Issue';
import { DropdownFilter } from '../components/DropdownFilter';


export const PageViewIssues = () => (
  // could use hook to filter open/closed issues based on param
  <div>
    <div>
      <input type="text" placeholder="Search..." />
      <DropdownFilter title="author" />
      <DropdownFilter title="label" />
      <DropdownFilter title="assignee" />
      <DropdownFilter title="sort" />
    </div>
    <div>
      <Issue title="issue one" />
      <Issue title="issue two" />
      <Issue title="issue three" />
    </div>
    <div>
      <span>Previous</span>
      <span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </span>
      <span>Next</span>
    </div>
  </div>
);