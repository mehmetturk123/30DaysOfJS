/** This function created by Copilot(Microsoft's AI). I tried another way and it was very complicated(didn't worked) so i decided to use AI code :-)
 *
 * It generates given input character id.
 * @length The number of characters.
 * @returns Returns the id.
 */

export function userIdGenerator(length: number): string {
  let id = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    id = id + characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return id;
}
