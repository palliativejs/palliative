import { freeze } from "../src"

const object = freeze({
  a: {
    b: {
      c: 1,
    },
  },
})

object.a.b.c = 2

console.log(object)
