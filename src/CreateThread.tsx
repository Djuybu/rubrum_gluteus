import { useState } from "react";
import "./thread-create.css";
import { Thread } from "./type/thread.type";

const CreateThread = () => {
  const Process = ["name", "rules", "topic", "kind"];
  const [current, setCurrent] = useState("name");
  const [newThread, setNewThread] = useState<Thread>({
    name: "",
    description: "",
    isPublic: true,
    rules: "",
    categories: "",
  });
  const progress = () => {
    if (current === "kind") {
      // upload thread if the process already from choosing kind
    }
  }
  return (
    <>
      <div className="modal-content">
        <div className="left-content">
          {current === "name" && (
            <>
              <h2>Tell us about your community</h2>
              <p>
                A name and description help people understand what your
                community is all about.
              </p>
              <div className="community-name">
                <label htmlFor="community-name">Community name *</label>
                <input
                  type="text"
                  id="community-name"
                  value="WhoAmIButIHateLinux"
                />
              </div>
              <div className="description">
                <label htmlFor="description">Description *</label>
                <textarea id="description">fgkjhfeiifjfhnjefigjn</textarea>
              </div>
            </>
          )}
          <div className="modal-buttons">
            <button className="cancel" onClick={progress}>Cancel</button>
            <button className="next">Next</button>
          </div>
        </div>
        <div className="right-content">
          <p>Preview</p>
          <div className="community-preview">
            <h3>r/WhoAmIButIHateLinux</h3>
            <p>1 member - 1 online</p>
            <p>fgkjhfeiifjfhnjefigjn</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateThread;
