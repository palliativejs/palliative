import { Dictionary } from "./types/utils"

export default function freeze<T extends Dictionary | unknown[]>(object: T): T {
  const copy = structuredClone(object) as Dictionary

  if (copy === undefined || copy === null) {
    return Object.freeze(copy)
  }

  Object.keys(copy).forEach((property) => {
    if (
      copy[property] !== null &&
      (typeof copy[property] === "object" ||
        typeof copy[property] === "function") &&
      !Object.isFrozen(copy[property])
    ) {
      copy[property] = freeze(copy[property] as T)
    }
  })

  return Object.freeze(copy) as T
}
