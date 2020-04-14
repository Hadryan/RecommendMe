import axios from "axios";

export default {
  // Connect to Spotify
  connect: function() {
    return axios.get("/auth/spotify");
  },
  // Gets all artists
  getArtists: function() {
    return axios.get("/api/artists");
  },
  // Gets the artist with the given id
  getArtist: function(id) {
    return axios.get("/api/artists/" + id);
  },
  // Removes the artist with the given id
  removeArtist: function(id) {
    return axios.delete("/api/artists/" + id);
  },
  // Saves an artist to the database
  saveArtist: function(artistData) {
    return axios.post("/api/artists", artistData);
  }
};
