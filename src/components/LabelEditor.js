import { Label } from './Label';

export const LabelEditor = ({ submitText }) => (
  <div>
    <div>
      <Label text="Label preview" />
    </div>
    <div>
      <div>
        <div>Label name</div>
        <div>
          <input type="text" placeholder="Label name" />
        </div>
      </div>
      <div>
        <div>Description</div>
        <div>
          <input type="text" placeholder="Label description" />
        </div>
      </div>
      <div>
        <div>Color</div>
        <div>
          <button>Get new Color</button>
          <input type="text" placeholder="HEX color" />
        </div>
      </div>
      <div>
        <button>Cancel</button>
        <button>{submitText}</button>
      </div>
    </div>
  </div>
);