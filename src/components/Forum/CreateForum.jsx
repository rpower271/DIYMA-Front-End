import { useEffect, useState } from 'react'

function CreateForum() {
const [title, setTitle] = useState("");
const [content, setContent] = useState("")

  useEffect(() => {

  })

  return (
    <div className="createForum">
      <form action={handleSubmit}>
        <label>
          Title:
          <input type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Content:{""}
          <textarea value={content}
          onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <input type="submit" value="Create Thread" />
      </form>
    </div>
  )
}

export default CreateForum