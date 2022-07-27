import portuguese from 'data/portugueseVersion.json';
import english from 'data/englishVersion.json';

export function HandleLanguage(language) {
  let handleLanguage = language ? portuguese : english;
  console.log(handleLanguage);
  return handleLanguage;
}