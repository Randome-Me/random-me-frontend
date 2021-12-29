type Mutable<T> = {
  -readonly [k in keyof T]: T[k]
}

export default Mutable
