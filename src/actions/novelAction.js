import dispatcher from "../appDispatcher";
import * as novelApi from "../api/novelsApi";
import actionType from "./actionTypes";

export function saveNovel(novel) {
  return novelApi.saveNovels(novel).then((savedNovel) => {
    dispatcher.dispatch({
      actionType: novel.id ? actionType.UPDATE_NOVEL : actionType.CREATE_NOVEL,
      novel: savedNovel,
    });
  });
}

export function loadNovel() {
  return novelApi.getNovels().then((novel) => {
    dispatcher.dispatch({
      actionType: actionType.LOAD_NOVEL,
      novel: novel,
    });
  });
}

export function deleteNovel(id) {
  return novelApi.deleteNovels(id).then(() => {
    dispatcher.dispatch({
      actionType: actionType.DELETE_NOVEL,
      id: id,
    });
  });
}
