const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDAzYWU0ZGY3NTQxZDdmMDAwNTc5NDI0YTVjYWU1ZiIsInN1YiI6IjY0MWI1NmZmZjlhYTQ3MDBlMmZhMzAzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sN2z-P00BPRvDgmDvBNFP2FlVbeV7382Zj73gMHRoHg",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
