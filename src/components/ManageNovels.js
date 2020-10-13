import React, { useState, useEffect } from "react";
import NovelForm from "./NovelForm";
import novelStore from "../stores/novelStore";
import * as novelAction from "../actions/novelAction";
import { toast } from "react-toastify";

const ManageNovels = (props) => {
  const [errors, setErrors] = useState({});
  const [novel, setNovel] = useState(novelStore.getNovels());
  const [novels, setNovels] = useState({
    id: null,
    slug: "",
    name: "",
    authorId: null,
    description: "",
  });

  useEffect(() => {
    novelStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    if (novel.length === 0) {
      novelAction.loadNovel();
    } else if (slug) {
      setNovels(novelStore.getNovelsBySlug(slug));
    }
    return () => novelStore.removeChangeListener(onChange);
  }, [novel.length, props.match.params.slug]);

  function onChange() {
    setNovels(novelStore.getNovels());
  }

  function handleChange({ target }) {
    const updateNovels = { ...novels, [target.name]: target.value };
    setNovels(updateNovels);
  }
  function formIsValid() {
    const _error = {};
    if (!novels.name) _error.name = "Name is required";
    if (!novels.authorId) _error.authorId = "Author is required";
    if (!novels.description) _error.description = "Description is required";
    setErrors(_error);
    return Object.keys(_error).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    novelAction.saveNovel(novels).then(() => {
      props.history.push("/novels");
      toast.success("Novels Saved Successfully");
    });
  }

  return (
    <>
      <h2 style={{ marginLeft: "151px", marginTop: "20px" }}>Manage Novels</h2>
      <NovelForm
        errors={errors}
        novels={novels}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageNovels;
