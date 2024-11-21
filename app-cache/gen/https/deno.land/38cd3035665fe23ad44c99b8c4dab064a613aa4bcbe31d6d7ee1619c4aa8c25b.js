// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import { asyncIterableToCallback } from "./_fs_watch.ts";
import Dirent from "./_fs_dirent.ts";
import { denoErrorToNodeError } from "../internal/errors.ts";
import { getValidatedPath } from "../internal/fs/utils.mjs";
function toDirent(val) {
    return new Dirent(val);
}
export function readdir(path, optionsOrCallback, maybeCallback) {
    const callback = typeof optionsOrCallback === "function" ? optionsOrCallback : maybeCallback;
    const options = typeof optionsOrCallback === "object" ? optionsOrCallback : null;
    const result = [];
    path = getValidatedPath(path);
    if (!callback) throw new Error("No callback function supplied");
    if (options?.encoding) {
        try {
            new TextDecoder(options.encoding);
        } catch  {
            throw new Error(`TypeError [ERR_INVALID_OPT_VALUE_ENCODING]: The value "${options.encoding}" is invalid for option "encoding"`);
        }
    }
    try {
        asyncIterableToCallback(Deno.readDir(path.toString()), (val, done)=>{
            if (typeof path !== "string") return;
            if (done) {
                callback(null, result);
                return;
            }
            if (options?.withFileTypes) {
                result.push(toDirent(val));
            } else result.push(decode(val.name));
        }, (e)=>{
            callback(denoErrorToNodeError(e, {
                syscall: "readdir"
            }));
        });
    } catch (e) {
        callback(denoErrorToNodeError(e, {
            syscall: "readdir"
        }));
    }
}
function decode(str, encoding) {
    if (!encoding) return str;
    else {
        const decoder = new TextDecoder(encoding);
        const encoder = new TextEncoder();
        return decoder.decode(encoder.encode(str));
    }
}
export function readdirSync(path, options) {
    const result = [];
    path = getValidatedPath(path);
    if (options?.encoding) {
        try {
            new TextDecoder(options.encoding);
        } catch  {
            throw new Error(`TypeError [ERR_INVALID_OPT_VALUE_ENCODING]: The value "${options.encoding}" is invalid for option "encoding"`);
        }
    }
    try {
        for (const file of Deno.readDirSync(path.toString())){
            if (options?.withFileTypes) {
                result.push(toDirent(file));
            } else result.push(decode(file.name));
        }
    } catch (e) {
        throw denoErrorToNodeError(e, {
            syscall: "readdir"
        });
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjEzMi4wL25vZGUvX2ZzL19mc19yZWFkZGlyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE4LTIwMjIgdGhlIERlbm8gYXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gTUlUIGxpY2Vuc2UuXG5pbXBvcnQgeyBhc3luY0l0ZXJhYmxlVG9DYWxsYmFjayB9IGZyb20gXCIuL19mc193YXRjaC50c1wiO1xuaW1wb3J0IERpcmVudCBmcm9tIFwiLi9fZnNfZGlyZW50LnRzXCI7XG5pbXBvcnQgeyBkZW5vRXJyb3JUb05vZGVFcnJvciB9IGZyb20gXCIuLi9pbnRlcm5hbC9lcnJvcnMudHNcIjtcbmltcG9ydCB7IGdldFZhbGlkYXRlZFBhdGggfSBmcm9tIFwiLi4vaW50ZXJuYWwvZnMvdXRpbHMubWpzXCI7XG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tIFwiLi4vYnVmZmVyLnRzXCI7XG5cbmZ1bmN0aW9uIHRvRGlyZW50KHZhbDogRGVuby5EaXJFbnRyeSk6IERpcmVudCB7XG4gIHJldHVybiBuZXcgRGlyZW50KHZhbCk7XG59XG5cbnR5cGUgcmVhZERpck9wdGlvbnMgPSB7XG4gIGVuY29kaW5nPzogc3RyaW5nO1xuICB3aXRoRmlsZVR5cGVzPzogYm9vbGVhbjtcbn07XG5cbnR5cGUgcmVhZERpckNhbGxiYWNrID0gKGVycjogRXJyb3IgfCBudWxsLCBmaWxlczogc3RyaW5nW10pID0+IHZvaWQ7XG5cbnR5cGUgcmVhZERpckNhbGxiYWNrRGlyZW50ID0gKGVycjogRXJyb3IgfCBudWxsLCBmaWxlczogRGlyZW50W10pID0+IHZvaWQ7XG5cbnR5cGUgcmVhZERpckJvdGggPSAoXG4gIC4uLmFyZ3M6IFtFcnJvcl0gfCBbbnVsbCwgc3RyaW5nW10gfCBEaXJlbnRbXSB8IEFycmF5PHN0cmluZyB8IERpcmVudD5dXG4pID0+IHZvaWQ7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkZGlyKFxuICBwYXRoOiBzdHJpbmcgfCBCdWZmZXIgfCBVUkwsXG4gIG9wdGlvbnM6IHsgd2l0aEZpbGVUeXBlcz86IGZhbHNlOyBlbmNvZGluZz86IHN0cmluZyB9LFxuICBjYWxsYmFjazogcmVhZERpckNhbGxiYWNrLFxuKTogdm9pZDtcbmV4cG9ydCBmdW5jdGlvbiByZWFkZGlyKFxuICBwYXRoOiBzdHJpbmcgfCBCdWZmZXIgfCBVUkwsXG4gIG9wdGlvbnM6IHsgd2l0aEZpbGVUeXBlczogdHJ1ZTsgZW5jb2Rpbmc/OiBzdHJpbmcgfSxcbiAgY2FsbGJhY2s6IHJlYWREaXJDYWxsYmFja0RpcmVudCxcbik6IHZvaWQ7XG5leHBvcnQgZnVuY3Rpb24gcmVhZGRpcihwYXRoOiBzdHJpbmcgfCBVUkwsIGNhbGxiYWNrOiByZWFkRGlyQ2FsbGJhY2spOiB2b2lkO1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRkaXIoXG4gIHBhdGg6IHN0cmluZyB8IEJ1ZmZlciB8IFVSTCxcbiAgb3B0aW9uc09yQ2FsbGJhY2s6IHJlYWREaXJPcHRpb25zIHwgcmVhZERpckNhbGxiYWNrIHwgcmVhZERpckNhbGxiYWNrRGlyZW50LFxuICBtYXliZUNhbGxiYWNrPzogcmVhZERpckNhbGxiYWNrIHwgcmVhZERpckNhbGxiYWNrRGlyZW50LFxuKSB7XG4gIGNvbnN0IGNhbGxiYWNrID1cbiAgICAodHlwZW9mIG9wdGlvbnNPckNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gb3B0aW9uc09yQ2FsbGJhY2tcbiAgICAgIDogbWF5YmVDYWxsYmFjaykgYXMgcmVhZERpckJvdGggfCB1bmRlZmluZWQ7XG4gIGNvbnN0IG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9uc09yQ2FsbGJhY2sgPT09IFwib2JqZWN0XCJcbiAgICA/IG9wdGlvbnNPckNhbGxiYWNrXG4gICAgOiBudWxsO1xuICBjb25zdCByZXN1bHQ6IEFycmF5PHN0cmluZyB8IERpcmVudD4gPSBbXTtcbiAgcGF0aCA9IGdldFZhbGlkYXRlZFBhdGgocGF0aCk7XG5cbiAgaWYgKCFjYWxsYmFjaykgdGhyb3cgbmV3IEVycm9yKFwiTm8gY2FsbGJhY2sgZnVuY3Rpb24gc3VwcGxpZWRcIik7XG5cbiAgaWYgKG9wdGlvbnM/LmVuY29kaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIG5ldyBUZXh0RGVjb2RlcihvcHRpb25zLmVuY29kaW5nKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFR5cGVFcnJvciBbRVJSX0lOVkFMSURfT1BUX1ZBTFVFX0VOQ09ESU5HXTogVGhlIHZhbHVlIFwiJHtvcHRpb25zLmVuY29kaW5nfVwiIGlzIGludmFsaWQgZm9yIG9wdGlvbiBcImVuY29kaW5nXCJgLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB0cnkge1xuICAgIGFzeW5jSXRlcmFibGVUb0NhbGxiYWNrKERlbm8ucmVhZERpcihwYXRoLnRvU3RyaW5nKCkpLCAodmFsLCBkb25lKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHBhdGggIT09IFwic3RyaW5nXCIpIHJldHVybjtcbiAgICAgIGlmIChkb25lKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zPy53aXRoRmlsZVR5cGVzKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHRvRGlyZW50KHZhbCkpO1xuICAgICAgfSBlbHNlIHJlc3VsdC5wdXNoKGRlY29kZSh2YWwubmFtZSkpO1xuICAgIH0sIChlKSA9PiB7XG4gICAgICBjYWxsYmFjayhkZW5vRXJyb3JUb05vZGVFcnJvcihlIGFzIEVycm9yLCB7IHN5c2NhbGw6IFwicmVhZGRpclwiIH0pKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhbGxiYWNrKGRlbm9FcnJvclRvTm9kZUVycm9yKGUgYXMgRXJyb3IsIHsgc3lzY2FsbDogXCJyZWFkZGlyXCIgfSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlY29kZShzdHI6IHN0cmluZywgZW5jb2Rpbmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIWVuY29kaW5nKSByZXR1cm4gc3RyO1xuICBlbHNlIHtcbiAgICBjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKGVuY29kaW5nKTtcbiAgICBjb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG4gICAgcmV0dXJuIGRlY29kZXIuZGVjb2RlKGVuY29kZXIuZW5jb2RlKHN0cikpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkZGlyU3luYyhcbiAgcGF0aDogc3RyaW5nIHwgQnVmZmVyIHwgVVJMLFxuICBvcHRpb25zOiB7IHdpdGhGaWxlVHlwZXM6IHRydWU7IGVuY29kaW5nPzogc3RyaW5nIH0sXG4pOiBEaXJlbnRbXTtcbmV4cG9ydCBmdW5jdGlvbiByZWFkZGlyU3luYyhcbiAgcGF0aDogc3RyaW5nIHwgQnVmZmVyIHwgVVJMLFxuICBvcHRpb25zPzogeyB3aXRoRmlsZVR5cGVzPzogZmFsc2U7IGVuY29kaW5nPzogc3RyaW5nIH0sXG4pOiBzdHJpbmdbXTtcbmV4cG9ydCBmdW5jdGlvbiByZWFkZGlyU3luYyhcbiAgcGF0aDogc3RyaW5nIHwgQnVmZmVyIHwgVVJMLFxuICBvcHRpb25zPzogcmVhZERpck9wdGlvbnMsXG4pOiBBcnJheTxzdHJpbmcgfCBEaXJlbnQ+IHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIHBhdGggPSBnZXRWYWxpZGF0ZWRQYXRoKHBhdGgpO1xuXG4gIGlmIChvcHRpb25zPy5lbmNvZGluZykge1xuICAgIHRyeSB7XG4gICAgICBuZXcgVGV4dERlY29kZXIob3B0aW9ucy5lbmNvZGluZyk7XG4gICAgfSBjYXRjaCB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUeXBlRXJyb3IgW0VSUl9JTlZBTElEX09QVF9WQUxVRV9FTkNPRElOR106IFRoZSB2YWx1ZSBcIiR7b3B0aW9ucy5lbmNvZGluZ31cIiBpcyBpbnZhbGlkIGZvciBvcHRpb24gXCJlbmNvZGluZ1wiYCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgRGVuby5yZWFkRGlyU3luYyhwYXRoLnRvU3RyaW5nKCkpKSB7XG4gICAgICBpZiAob3B0aW9ucz8ud2l0aEZpbGVUeXBlcykge1xuICAgICAgICByZXN1bHQucHVzaCh0b0RpcmVudChmaWxlKSk7XG4gICAgICB9IGVsc2UgcmVzdWx0LnB1c2goZGVjb2RlKGZpbGUubmFtZSkpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IGRlbm9FcnJvclRvTm9kZUVycm9yKGUgYXMgRXJyb3IsIHsgc3lzY2FsbDogXCJyZWFkZGlyXCIgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRUFBMEU7QUFDMUUsU0FBUyx1QkFBdUIsUUFBUSxpQkFBaUI7QUFDekQsT0FBTyxZQUFZLGtCQUFrQjtBQUNyQyxTQUFTLG9CQUFvQixRQUFRLHdCQUF3QjtBQUM3RCxTQUFTLGdCQUFnQixRQUFRLDJCQUEyQjtBQUc1RCxTQUFTLFNBQVMsR0FBa0IsRUFBVTtJQUM1QyxPQUFPLElBQUksT0FBTztBQUNwQjtBQTBCQSxPQUFPLFNBQVMsUUFDZCxJQUEyQixFQUMzQixpQkFBMkUsRUFDM0UsYUFBdUQsRUFDdkQ7SUFDQSxNQUFNLFdBQ0gsT0FBTyxzQkFBc0IsYUFDMUIsb0JBQ0EsYUFBYTtJQUNuQixNQUFNLFVBQVUsT0FBTyxzQkFBc0IsV0FDekMsb0JBQ0EsSUFBSTtJQUNSLE1BQU0sU0FBaUMsRUFBRTtJQUN6QyxPQUFPLGlCQUFpQjtJQUV4QixJQUFJLENBQUMsVUFBVSxNQUFNLElBQUksTUFBTSxpQ0FBaUM7SUFFaEUsSUFBSSxTQUFTLFVBQVU7UUFDckIsSUFBSTtZQUNGLElBQUksWUFBWSxRQUFRLFFBQVE7UUFDbEMsRUFBRSxPQUFNO1lBQ04sTUFBTSxJQUFJLE1BQ1IsQ0FBQyx1REFBdUQsRUFBRSxRQUFRLFFBQVEsQ0FBQyxrQ0FBa0MsQ0FBQyxFQUM5RztRQUNKO0lBQ0YsQ0FBQztJQUVELElBQUk7UUFDRix3QkFBd0IsS0FBSyxPQUFPLENBQUMsS0FBSyxRQUFRLEtBQUssQ0FBQyxLQUFLLE9BQVM7WUFDcEUsSUFBSSxPQUFPLFNBQVMsVUFBVTtZQUM5QixJQUFJLE1BQU07Z0JBQ1IsU0FBUyxJQUFJLEVBQUU7Z0JBQ2Y7WUFDRixDQUFDO1lBQ0QsSUFBSSxTQUFTLGVBQWU7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDLFNBQVM7WUFDdkIsT0FBTyxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSTtRQUNwQyxHQUFHLENBQUMsSUFBTTtZQUNSLFNBQVMscUJBQXFCLEdBQVk7Z0JBQUUsU0FBUztZQUFVO1FBQ2pFO0lBQ0YsRUFBRSxPQUFPLEdBQUc7UUFDVixTQUFTLHFCQUFxQixHQUFZO1lBQUUsU0FBUztRQUFVO0lBQ2pFO0FBQ0YsQ0FBQztBQUVELFNBQVMsT0FBTyxHQUFXLEVBQUUsUUFBaUIsRUFBVTtJQUN0RCxJQUFJLENBQUMsVUFBVSxPQUFPO1NBQ2pCO1FBQ0gsTUFBTSxVQUFVLElBQUksWUFBWTtRQUNoQyxNQUFNLFVBQVUsSUFBSTtRQUNwQixPQUFPLFFBQVEsTUFBTSxDQUFDLFFBQVEsTUFBTSxDQUFDO0lBQ3ZDLENBQUM7QUFDSDtBQVVBLE9BQU8sU0FBUyxZQUNkLElBQTJCLEVBQzNCLE9BQXdCLEVBQ0E7SUFDeEIsTUFBTSxTQUFTLEVBQUU7SUFDakIsT0FBTyxpQkFBaUI7SUFFeEIsSUFBSSxTQUFTLFVBQVU7UUFDckIsSUFBSTtZQUNGLElBQUksWUFBWSxRQUFRLFFBQVE7UUFDbEMsRUFBRSxPQUFNO1lBQ04sTUFBTSxJQUFJLE1BQ1IsQ0FBQyx1REFBdUQsRUFBRSxRQUFRLFFBQVEsQ0FBQyxrQ0FBa0MsQ0FBQyxFQUM5RztRQUNKO0lBQ0YsQ0FBQztJQUVELElBQUk7UUFDRixLQUFLLE1BQU0sUUFBUSxLQUFLLFdBQVcsQ0FBQyxLQUFLLFFBQVEsSUFBSztZQUNwRCxJQUFJLFNBQVMsZUFBZTtnQkFDMUIsT0FBTyxJQUFJLENBQUMsU0FBUztZQUN2QixPQUFPLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJO1FBQ3JDO0lBQ0YsRUFBRSxPQUFPLEdBQUc7UUFDVixNQUFNLHFCQUFxQixHQUFZO1lBQUUsU0FBUztRQUFVLEdBQUc7SUFDakU7SUFDQSxPQUFPO0FBQ1QsQ0FBQyJ9