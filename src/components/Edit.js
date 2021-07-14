import { DropdownFilter } from './DropdownFilter';


export const Edit = ({
  title,
  about,
  content,
  issueDefaultTitle,
  assignees,
  labels
}) => (
  <div>
    <div>
      <div>
        <div>Template title</div>
        <input type="text" value={title} />
      </div>
      <div>
        <div>About</div>
        <input type="text" value={about} />
      </div>
      <div>
        <div>Template content</div>
        <textarea value={content} />
      </div>
    </div>
    <div>
      <div>Optional</div>
      <div>
        <div>
          <div>Issue default title:</div>
          <div><i>This will be suggested as issue title</i></div>
          <input type="text" value={issueDefaultTitle} />
        </div>
        <div>
          {/* Open dropdown with search */}
          <button>Assignees</button>
          <DropdownFilter title="assignees" />
          <div>{assignees.map((a) => <span>{a}</span>)}</div>
        </div>
        <div>
          {/* Open dropdown with search */}
          <button>Labels</button>
          <DropdownFilter title="labels" />
          <div>Labels: {labels.map((l) => <span>{l}</span>)}</div>
        </div>
      </div>
    </div>
  </div>
);