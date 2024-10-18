import { useState } from "react";
import { categoriesList } from "./utils/categories.ts";
import "./thread-create.css";
import { Thread } from "./type/thread.type";

const CreateThread = () => {
  const Process = ["name", "rules", "topic", "kind"];

  const [current, setCurrent] = useState(0);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [rules, setRules] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>();
  const [currentRule, setCurrentRule] = useState<string>();
  const [currentCategory, setCurrentCategory] = useState<string>();

  const progress = () => {
    if (Process[current] === "kind") {
      // upload thread if the process already from choosing kind
    }
    setCurrent(current + 1);
  };
  const rollback = () => {
    if (Process[current] === "name") {
      return;
    }
    if (Process[current] === "rules" ||Process[current] === "topic") {

    }
    setCurrent(current - 1);
  }

  console.log(categoriesList);
  
  return (
    <>
      <div className="modal-content">
        <div className="left-content">
          {Process[current] === "name" && (
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
                  placeholder="Type community name here"
                />
              </div>
              <div className="community-name">
                <label htmlFor="description">Description *</label>
                <input type="text" placeholder="Type description here" id="description" />
              </div>
            </>
          )}
          {Process[current] === "rules" && (
            <>
              <div className="community-name">
                <label htmlFor="">Rules</label>
                <input type="text" placeholder="Add rule name" />
                <input type="text" placeholder="Add rule description" />
                <button>Add rule</button>
              </div>
            </>
          )}
          {Process[current] === "topic" && (
            <>
              <h2>Choose topic for your thread</h2>
              <div className="community-name">
                <div className="category-list">
                  {categoriesList?.map((category: any) => {
                    console.log(category);
                    return (
                      <>
                        <div className="category">{category}</div>
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          )}
          {Process[current] === "kind" && (
            <>
              <h2>Choose your kind of thread</h2>
              <div className="option">
                <input type="radio" id="public" name="community-type" />
                <label htmlFor="public">
                  <span className="icon">
                    <i className="fa fa-globe"></i>
                  </span>
                  <span className="title">Public</span>
                  <span className="description">
                    Anyone can view, post, and comment to this community
                  </span>
                </label>
              </div>
              <div className="option">
                <input type="radio" id="private" name="community-type" />
                <label htmlFor="private">
                  <span className="title">Private</span>
                  <span className="description">
                    Only approved users can view and contribute
                  </span>
                </label>
              </div>
            </>
          )}
          <div className="modal-buttons">
            <button className="cancel" onClick={rollback}>Cancel</button>
            <button className="next" onClick={progress}>
              Next
            </button>
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
