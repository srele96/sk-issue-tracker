const Write = () => (
  <div>
    <textarea value="Leave a comment" />
  </div>
)

const Preview = () => (
  <div>Nothing to preview</div>
)

export const TextEditor = () => {
  const isPreview = false;

  return (
    <div>
      <div>
        <input type="text" value="Title" />
      </div>
      <div>
        <div>
          <button>Write</button>
          <button>Preview</button>
        </div>
        <div>
          {isPreview ? <Write /> : <Preview />}
        </div>
      </div>
      <div>
        <button>Submit new Issue</button>
      </div>
    </div>
  );
}