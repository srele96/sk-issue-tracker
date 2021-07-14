import { Label } from './Label';


export const Issue = ({ title }) => (
  <div>
    <div>
      <div>
        {title}
        <Label />
        <Label />
      </div>
      <div>
        <span>id </span>
        <span>date opened </span>
        <span>user opened </span>
      </div>
    </div>
    <div>comments num</div>
  </div>
);