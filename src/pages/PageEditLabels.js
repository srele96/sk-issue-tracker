import { LabelEditor } from '../components/LabelEditor';
import { LabelRow } from '../components/LabelRow';


const PageEditLabels = () => (
  <div>
    <div>
      <input type="text" placeholder="Search text..." />
      <button>New label</button>
    </div>
    <div>
      <LabelEditor submitText="Create label" />
    </div>
    <div>
      <div>
        <LabelRow />
      </div>
      <div>
        <LabelRow />
      </div>
    </div>
  </div>
)

export { PageEditLabels }