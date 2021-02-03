export default function removeItem(books: string[], target: string): string[] {
  const index = books.indexOf(target);
  if (index === -1) {
    return books;
  }
  // return books.slice(0,index).concat(books.slice(index + 1));
  return [...books.slice(0, index), ...books.slice(index + 1)];
}
