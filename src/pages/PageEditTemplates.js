import { Template } from '../components/Template';

export const PageEditTemplates = () => (
  <div>
    <button>Save Changes</button>
    <div>
      <Template />
    </div>
    <div>
      <button>Add Template</button>
      <select>
        <option>BUG</option>
        <option>FEATURE</option>
        <option>CUSTOM</option>
      </select>
    </div>
  </div>
);