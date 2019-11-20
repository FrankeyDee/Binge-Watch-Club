import axios from "axios";

export default {
  // Gets shows from the omdb API
  getShows: function(q) {
    return axios.get("/api/omdb", { params: { q: "title:" + q } });
  },
  // Gets all saved shows
  getSavedShows: function() {
    return axios.get("/api/shows");
  },
  // Deletes the saved show with the given id
  deleteShow: function(id) {
    return axios.delete("/api/shows/" + id);
  },
  // Saves a show to the database
  saveShow: function(showData) {
    return axios.post("/api/shows", showData);
  }
};

// fetch("/api/shows", {
//   method: 'POST',
//   headers: 'Content-Type: application/json',
//   body: JSON.stringify(myVariable)
// })