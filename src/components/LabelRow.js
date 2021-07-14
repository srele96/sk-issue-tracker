import { LabelEditor } from './LabelEditor';
import { LabelRowDetails } from './LabelRowDetails';

export const LabelRow = () => {
  const isEditorOpen = false;

  const labelText = 'Label text';
  const labelDescription = 'labelDescription';

  return (
    <div>
      {isEditorOpen ?
        <LabelEditor submitText="Save changes" />
        :
        <LabelRowDetails
          labelText={labelText}
          labelDescription={labelDescription}
        />
      }
    </div>
  )
}