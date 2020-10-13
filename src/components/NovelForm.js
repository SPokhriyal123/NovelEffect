import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";
function NovelForm(props) {
  return (
    <div
      style={{
        border: "solid black",
        width: "50%",
        padding: "10px",
        marginLeft: "151px",
      }}
    >
      <form onSubmit={props.onSubmit}>
        <TextInput
          id="name"
          name="name"
          label="Name"
          onChange={props.onChange}
          value={props.novels.name}
          error={props.errors.name}
        />

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <div className="field">
            <select
              id="author"
              name="authorId"
              value={props.novels.authorId || ""}
              onChange={props.onChange}
              className="form-control"
            >
              <option value="" />
              <option value="1">J. K. Rowling</option>
              <option value="2">Jane Austen</option>
              <option value="3">Arthur Conan Doyle</option>
              <option value="4">Mary Shelley</option>
              <option value="4">John Green</option>
            </select>
          </div>
          {props.errors.authorId && (
            <div className="alert alert-danger">{props.errors.authorId}</div>
          )}
        </div>

        <TextInput
          id="description"
          name="description"
          label="Description"
          onChange={props.onChange}
          value={props.novels.description}
          error={props.errors.description}
        />

        <input type="submit" value="Save" className="btn btn-primary" />
      </form>
    </div>
  );
}
NovelForm.propTypes = {
  novels: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default NovelForm;
