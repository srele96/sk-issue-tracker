import { Label } from './Label';

export const LabelRowDetails = ({ labelText, labelDescription }) => (
  <div>
    <Label text={labelText}/>
    <div>{labelDescription}</div>
    <div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  </div>
);