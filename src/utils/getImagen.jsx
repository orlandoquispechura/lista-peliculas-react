import placeholder from "../imagen/placeholder.png";


export default function getImagen(path, width) {
  return (path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder);
}
