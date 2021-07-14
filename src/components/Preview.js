export const Preview = ({
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
        <div>{title}</div>
      </div>
      <div>
        <div>About</div>
        <div>{about}</div>
      </div>
      <div>
        <div>Template content</div>
        <div>{content}</div>
      </div>
    </div>
    <div>
      <div>Optional</div>
      <div>
        <div>Issue default title: {issueDefaultTitle}</div>
        <div>Assignees: {assignees.map((a) => <span>{a}</span>)}</div>
        <div>Labels: {labels.map((l) => <span>{l}</span>)}</div>
      </div>
    </div>
  </div>
);