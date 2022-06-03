type objType  = {
    [key: string]: any
}

function dotpath (str: string) {
  const parts = str.split('.')
  var len = parts.length

  return function parse (obj: objType) {
    var testKey

    for (var i = 0; i < len; ++i) {
      testKey = parts[i]

      if (!obj) return

      obj = obj[testKey]
    }

    return obj
  }
}
