import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NovelList(props) {
  return (
    <table
      className="table"
      style={{
        width: "89%",
        marginLeft: "151px",
        border: "5px solid black",
      }}
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.novels.map((novel) => {
          return (
            <tr key={novel.id}>
              <td>
                <Link to={"/manageNovels/" + novel.slug}>{novel.name}</Link>
              </td>
              <td>{novel.description}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => props.deleteNovel(novel.id)}
                >
                  Delete Novel
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
NovelList.prototype = {
  novels: PropTypes.array.isRequired,
};
NovelList.defaultProps = {
  novels: [],
};
export default NovelList;
