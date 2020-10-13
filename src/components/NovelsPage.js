import React, { useState, useEffect } from "react";
import novelStore from "../stores/novelStore";
import NovelList from "./NovelList";
import { Link } from "react-router-dom";
import { loadNovel, deleteNovel } from "../actions/novelAction";

function NovelsPage() {
  const [novels, setNovels] = useState(novelStore.getNovels());

  useEffect(() => {
    novelStore.addChangeListener(onChange);
    if (novelStore.getNovels().length === 0) loadNovel();
    return () => novelStore.removeChangeListener(onChange);
  }, []);
  function onChange() {
    setNovels(novelStore.getNovels());
  }

  return (
    <>
      <h2 style={{ marginLeft: "151px", marginTop: "70px" }}>Novels </h2>
      <Link
        style={{
          marginLeft: "151px",
          marginBottom: "20px",
        }}
        className="btn btn-primary"
        to="/manageNovels"
      >
        Add Novels
      </Link>
      <NovelList novels={novels} deleteNovel={deleteNovel} />
    </>
  );
}
export default NovelsPage;
