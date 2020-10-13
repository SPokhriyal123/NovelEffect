import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/novels/";

export function getNovels() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getNovelsBySlug(slug) {
  return fetch(baseUrl + "?slug=" + slug)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((novels) => {
        if (novels.length !== 1) throw new Error("novels not found: " + slug);
        return novels[0]; // should only find one novels for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function saveNovels(novels) {
  return fetch(baseUrl + (novels.id || ""), {
    method: novels.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...novels,
      // Parse authorId to a number (in case it was sent as a string).
      authorId: parseInt(novels.authorId, 10),
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteNovels(novelId) {
  return fetch(baseUrl + novelId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
