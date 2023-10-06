import { freeze } from "palliative"
// or
// import freeze from "palliative/freeze"

const object = freeze({
  a: {
    b: {
      c: 1,
    },
  },
})

object.a.b.c = 2

console.log(object)
