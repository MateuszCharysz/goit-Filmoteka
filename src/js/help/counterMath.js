'use strict'
import JsLocalStorage from "./JsLocalStorage";

export const cntrMathWithUpload = (key) =>{
let base = JsLocalStorage.load(key) + 1
return JsLocalStorage.save(key, base)
}
