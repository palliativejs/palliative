/**
 * Move an item, at index `from`, to index `to`, in a list of elements.
 * A new list will be created containing the new elements order.
 *
 * @func
 * @since v0.1.0
 * @category List
 * @sig (Number, Number, [a]) -> [a]
 * @param {Number} from The source index
 * @param {Number} to The destination index
 * @param {Array} list The list which will serve to realise the move
 * @return {Array} The new list reordered
 * @example
 *
 *      move(0, 2, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['b', 'c', 'a', 'd', 'e', 'f']
 *      move(-1, 0, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['f', 'a', 'b', 'c', 'd', 'e'] list rotation
 */
export default function move<T>(from: number, to: number, list: T[]): T[] {
  const length = list.length
  const positiveFrom = from < 0 ? length + from : from
  const positiveTo = to < 0 ? length + to : to

  if (
    positiveFrom < 0 ||
    positiveFrom >= list.length ||
    positiveTo < 0 ||
    positiveTo >= list.length
  ) {
    return list
  }

  const result = list.slice()
  const item = result.splice(positiveFrom, 1)

  return [
    ...result.slice(0, positiveTo),
    item,
    ...result.slice(positiveTo, list.length),
  ] as T[]
}
