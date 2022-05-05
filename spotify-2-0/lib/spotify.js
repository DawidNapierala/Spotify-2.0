import SpotifyWebApi from "spotify-web-api-node";

const scoupes = [
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-email",
    "streaming",
    "user-read-private",
    "user-library-read",
    "useer-top-read",
    "user-read-playback-state",
    "user-modify-plaback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-follow-read",
].join(',');


const params = {
    scope: scoupes,
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = "https://accounts.spotify.com/authorize?"+queryParamString.toString();

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})

export default spotifyApi;

export { LOGIN_URL};