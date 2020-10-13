import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionType from "../actions/actionTypes";
const CHANGE_EVENT = "change";
let _novels = [];

class NovelStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getNovels() {
    return _novels;
  }

  getNovelsBySlug(slug) {
    return _novels.find((novels) => novels.slug === slug);
  }
}
const store = new NovelStore();
Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionType.CREATE_NOVEL:
      _novels.push(action.novel);
      store.emitChange();
      break;
    case actionType.UPDATE_NOVEL:
      _novels = _novels.map((novel) =>
        novel.id === action.novel.id ? action.novel : novel
      );
      store.emitChange();
      break;
    case actionType.DELETE_NOVEL:
      _novels = _novels.filter((novel) => novel.id !== parseInt(action.id, 10));
      store.emitChange();
      break;
    case actionType.LOAD_NOVEL:
      _novels = action.novel;
      store.emitChange();
      break;
    default:
  }
});
export default store;
