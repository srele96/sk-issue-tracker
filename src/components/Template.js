import { PreviewAndEdit } from './PreviewAndEdit';


export const Template = () => (
  <div>
    <div>
      <span>
        <div>Template name</div>
        <div>Template about</div>
      </span>
      <span>
        <button>Preview and edit</button>
        <button>Delete</button>
      </span>
    </div>
    <div>
      <PreviewAndEdit />
    </div>
  </div>
)