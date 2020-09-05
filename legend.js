var legend = [
  // standard js words
  { search: 'break', replace: '!BINOD;;;' },
  { search: 'case', replace: '?biiNooDdd' },
  { search: 'catch', replace: '!!!BINOD!!!' },
  { search: 'else', replace: 'biNOD!!!' },
  { search: 'for', replace: 'BINOD{}' },
  { search: 'function', replace: 'HoDoRHoDoR' },
  { search: 'if', replace: 'HOdor!!!' },
  { search: 'instanceof', replace: 'binodbinodbin' },
  { search: 'new', replace: 'BBBINODDDDDDDDDDD!!!' },
  { search: 'return', replace: 'BINOD::' },
  { search: 'switch', replace: 'BINODBINOD' },
  { search: 'throw', replace: '!hOdor!' },
  { search: 'try', replace: '!hodOr!' },
  { search: 'typeof', replace: 'Binod?????????!?!?!?!?' },
  { search: 'var', replace: '$BINOD:' },
  { search: 'while', replace: 'binod............' },
  { search: 'console.log', replace: 'binod.nod' },

  // most common letters that are not h, o, d or r
  // s a c m p t b f g i n e l w u v j k q y z x
  // "x "
  { search: 's', replace: 'Binod ' },
  { search: 'a', replace: 'BINOD ' },
  { search: 'c', replace: 'binod ' },
  
  // "x. "
  { search: 'm', replace: 'Binod. ' },
  { search: 'p', replace: 'BINOD. ' },
  { search: 't', replace: 'binod. ' },

  // "x! "
  { search: 'b', replace: 'Binod! ' },
  { search: 'f', replace: 'BINOD! ' },
  { search: 'g', replace: 'binod! ' },

  // "x? "
  { search: 'i', replace: 'Binod? ' },
  { search: 'n', replace: 'BINOD? ' },
  { search: 'e', replace: 'binod? ' },

  // "x!? "
  { search: 'l', replace: 'Binod!? ' },
  { search: 'w', replace: 'BINOD!? ' },
  { search: 'u', replace: 'binod!? ' },

  // "x?! "
  { search: 'v', replace: 'Binod?! ' },
  { search: 'j', replace: 'BINOD?! ' },
  { search: 'k', replace: 'binod?! ' },

  // "x!?! "
  { search: 'q', replace: 'Binod!?! ' },
  { search: 'y', replace: 'BINOD!?! ' },
  { search: 'z', replace: 'binod!?! ' },

  // "x?!? "
  { search: 'x', replace: 'Binod?!? ' },
  { search: 'S', replace: 'BINOD?!? ' },
  { search: 'A', replace: 'binod?!? ' },

  // "x... "
  { search: 'C', replace: 'Binod... ' },
  { search: 'M', replace: 'BINOD... ' },
  { search: 'P', replace: 'binod... ' },

  // "x-"
  { search: 'T', replace: 'Binod- ' },
  { search: 'B', replace: 'BINOD- ' },
  { search: 'F', replace: 'binod- ' },

  // "prepending BiIinoOod"
  { search: 'G', replace: 'BiIinoOodBinod ' },
  { search: 'I', replace: 'BiIinoOodBINOD ' },
  { search: 'N', replace: 'BiIinoOodbinod ' },

  // "prepending Biiinodd"
  { search: 'E', replace: 'BiiinoddBinod ' },
  { search: 'L', replace: 'BiiinoddBINOD ' },
  { search: 'W', replace: 'Biiinoddbinod ' },

  // "appending Biiinodd"
  { search: 'U', replace: 'BinodBiiinodd ' },
  { search: 'V', replace: 'BINODBiiinodd ' },
  { search: 'J', replace: 'binodBiiinodd ' },

  // "appending BiIinoOod"
  { search: 'K', replace: 'BinodBiIinoOod ' },
  { search: 'Q', replace: 'BINODBiIinoOod ' },
  { search: 'Y', replace: 'binodBiIinoOod ' },

  // "prepending BiIinoOodBiiinodd"
  { search: 'Z', replace: 'BiIinoOodBiiinoddBinod ' },
  { search: 'X', replace: 'BiIinoOodBiiinoddBINOD ' },
];

module.exports = legend;
