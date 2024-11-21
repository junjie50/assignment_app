// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
//
// Adapted from Node.js. Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
const _toString = Object.prototype.toString;
const _isObjectLike = (value)=>value !== null && typeof value === "object";
const _isFunctionLike = (value)=>value !== null && typeof value === "function";
export function isAnyArrayBuffer(value) {
    return _isObjectLike(value) && (_toString.call(value) === "[object ArrayBuffer]" || _toString.call(value) === "[object SharedArrayBuffer]");
}
export function isArgumentsObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Arguments]";
}
export function isArrayBuffer(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object ArrayBuffer]";
}
export function isAsyncFunction(value) {
    return _isFunctionLike(value) && _toString.call(value) === "[object AsyncFunction]";
}
export function isBooleanObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Boolean]";
}
export function isBoxedPrimitive(value) {
    return isBooleanObject(value) || isStringObject(value) || isNumberObject(value) || isSymbolObject(value) || isBigIntObject(value);
}
export function isDataView(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object DataView]";
}
export function isDate(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Date]";
}
export function isGeneratorFunction(value) {
    return _isFunctionLike(value) && _toString.call(value) === "[object GeneratorFunction]";
}
export function isGeneratorObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Generator]";
}
export function isMap(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Map]";
}
export function isMapIterator(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Map Iterator]";
}
export function isModuleNamespaceObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Module]";
}
export function isNativeError(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Error]";
}
export function isNumberObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Number]";
}
export function isBigIntObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object BigInt]";
}
export function isPromise(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Promise]";
}
export function isRegExp(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object RegExp]";
}
export function isSet(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Set]";
}
export function isSetIterator(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Set Iterator]";
}
export function isSharedArrayBuffer(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object SharedArrayBuffer]";
}
export function isStringObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object String]";
}
export function isSymbolObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Symbol]";
}
export function isWeakMap(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object WeakMap]";
}
export function isWeakSet(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object WeakSet]";
}
export default {
    isAsyncFunction,
    isGeneratorFunction,
    isAnyArrayBuffer,
    isArrayBuffer,
    isArgumentsObject,
    isBoxedPrimitive,
    isDataView,
    // isExternal,
    isMap,
    isMapIterator,
    isModuleNamespaceObject,
    isNativeError,
    isPromise,
    isSet,
    isSetIterator,
    isWeakMap,
    isWeakSet,
    isRegExp,
    isDate,
    isStringObject,
    isNumberObject,
    isBooleanObject,
    isBigIntObject
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjEzMi4wL25vZGUvaW50ZXJuYWxfYmluZGluZy90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxOC0yMDIyIHRoZSBEZW5vIGF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIE1JVCBsaWNlbnNlLlxuLy9cbi8vIEFkYXB0ZWQgZnJvbSBOb2RlLmpzLiBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuY29uc3QgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuY29uc3QgX2lzT2JqZWN0TGlrZSA9ICh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4gPT5cbiAgdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiO1xuXG5jb25zdCBfaXNGdW5jdGlvbkxpa2UgPSAodmFsdWU6IHVua25vd24pOiBib29sZWFuID0+XG4gIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNBbnlBcnJheUJ1ZmZlcih2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIF9pc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgKF90b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiIHx8XG4gICAgICBfdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBTaGFyZWRBcnJheUJ1ZmZlcl1cIilcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJndW1lbnRzT2JqZWN0KHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiB7XG4gIHJldHVybiBfaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBfdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgX2lzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgX3RvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgQXJyYXlCdWZmZXJdXCJcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXN5bmNGdW5jdGlvbih2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIF9pc0Z1bmN0aW9uTGlrZSh2YWx1ZSkgJiYgX3RvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgQXN5bmNGdW5jdGlvbl1cIlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCb29sZWFuT2JqZWN0KHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiB7XG4gIHJldHVybiBfaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBfdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBCb29sZWFuXVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCb3hlZFByaW1pdGl2ZSh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGlzQm9vbGVhbk9iamVjdCh2YWx1ZSkgfHxcbiAgICBpc1N0cmluZ09iamVjdCh2YWx1ZSkgfHxcbiAgICBpc051bWJlck9iamVjdCh2YWx1ZSkgfHxcbiAgICBpc1N5bWJvbE9iamVjdCh2YWx1ZSkgfHxcbiAgICBpc0JpZ0ludE9iamVjdCh2YWx1ZSlcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0YVZpZXcodmFsdWU6IHVua25vd24pOiBib29sZWFuIHtcbiAgcmV0dXJuIF9pc09iamVjdExpa2UodmFsdWUpICYmIF90b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IERhdGFWaWV3XVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiB7XG4gIHJldHVybiBfaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBfdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBEYXRlXVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNHZW5lcmF0b3JGdW5jdGlvbih2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIF9pc0Z1bmN0aW9uTGlrZSh2YWx1ZSkgJiZcbiAgICBfdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNHZW5lcmF0b3JPYmplY3QodmFsdWU6IHVua25vd24pOiBib29sZWFuIHtcbiAgcmV0dXJuIF9pc09iamVjdExpa2UodmFsdWUpICYmIF90b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTWFwKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiB7XG4gIHJldHVybiBfaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBfdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBNYXBdXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01hcEl0ZXJhdG9yKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgX2lzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgX3RvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgTWFwIEl0ZXJhdG9yXVwiXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01vZHVsZU5hbWVzcGFjZU9iamVjdCh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICByZXR1cm4gX2lzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgX3RvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgTW9kdWxlXVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOYXRpdmVFcnJvcih2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICByZXR1cm4gX2lzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgX3RvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgRXJyb3JdXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlck9iamVjdCh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICByZXR1cm4gX2lzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgX3RvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgTnVtYmVyXVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCaWdJbnRPYmplY3QodmFsdWU6IHVua25vd24pOiBib29sZWFuIHtcbiAgcmV0dXJuIF9pc09iamVjdExpa2UodmFsdWUpICYmIF90b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IEJpZ0ludF1cIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICByZXR1cm4gX2lzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgX3RvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgUHJvbWlzZV1cIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVnRXhwKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiB7XG4gIHJldHVybiBfaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBfdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBSZWdFeHBdXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NldCh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICByZXR1cm4gX2lzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgX3RvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgU2V0XVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTZXRJdGVyYXRvcih2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIF9pc09iamVjdExpa2UodmFsdWUpICYmIF90b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IFNldCBJdGVyYXRvcl1cIlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTaGFyZWRBcnJheUJ1ZmZlcih2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIF9pc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgX3RvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgU2hhcmVkQXJyYXlCdWZmZXJdXCJcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nT2JqZWN0KHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiB7XG4gIHJldHVybiBfaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBfdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBTdHJpbmddXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N5bWJvbE9iamVjdCh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICByZXR1cm4gX2lzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgX3RvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgU3ltYm9sXVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNXZWFrTWFwKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiB7XG4gIHJldHVybiBfaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBfdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBXZWFrTWFwXVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNXZWFrU2V0KHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiB7XG4gIHJldHVybiBfaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBfdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBXZWFrU2V0XVwiO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzQXN5bmNGdW5jdGlvbixcbiAgaXNHZW5lcmF0b3JGdW5jdGlvbixcbiAgaXNBbnlBcnJheUJ1ZmZlcixcbiAgaXNBcnJheUJ1ZmZlcixcbiAgaXNBcmd1bWVudHNPYmplY3QsXG4gIGlzQm94ZWRQcmltaXRpdmUsXG4gIGlzRGF0YVZpZXcsXG4gIC8vIGlzRXh0ZXJuYWwsXG4gIGlzTWFwLFxuICBpc01hcEl0ZXJhdG9yLFxuICBpc01vZHVsZU5hbWVzcGFjZU9iamVjdCxcbiAgaXNOYXRpdmVFcnJvcixcbiAgaXNQcm9taXNlLFxuICBpc1NldCxcbiAgaXNTZXRJdGVyYXRvcixcbiAgaXNXZWFrTWFwLFxuICBpc1dlYWtTZXQsXG4gIGlzUmVnRXhwLFxuICBpc0RhdGUsXG4gIGlzU3RyaW5nT2JqZWN0LFxuICBpc051bWJlck9iamVjdCxcbiAgaXNCb29sZWFuT2JqZWN0LFxuICBpc0JpZ0ludE9iamVjdCxcbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEVBQTBFO0FBQzFFLEVBQUU7QUFDRiw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDBFQUEwRTtBQUMxRSxnRUFBZ0U7QUFDaEUsc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RSw0RUFBNEU7QUFDNUUscUVBQXFFO0FBQ3JFLHdCQUF3QjtBQUN4QixFQUFFO0FBQ0YsMEVBQTBFO0FBQzFFLHlEQUF5RDtBQUN6RCxFQUFFO0FBQ0YsMEVBQTBFO0FBQzFFLDZEQUE2RDtBQUM3RCw0RUFBNEU7QUFDNUUsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUN4RSw0RUFBNEU7QUFDNUUseUNBQXlDO0FBRXpDLE1BQU0sWUFBWSxPQUFPLFNBQVMsQ0FBQyxRQUFR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