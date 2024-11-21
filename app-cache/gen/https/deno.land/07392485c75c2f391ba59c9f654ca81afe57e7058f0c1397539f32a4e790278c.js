// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import * as asyncWrap from "./async_wrap.ts";
import * as buffer from "./buffer.ts";
import * as config from "./config.ts";
import * as caresWrap from "./cares_wrap.ts";
import * as constants from "./constants.ts";
import * as contextify from "./contextify.ts";
import * as crypto from "./crypto.ts";
import * as credentials from "./credentials.ts";
import * as errors from "./errors.ts";
import * as fs from "./fs.ts";
import * as fsDir from "./fs_dir.ts";
import * as fsEventWrap from "./fs_event_wrap.ts";
import * as heapUtils from "./heap_utils.ts";
import * as httpParser from "./http_parser.ts";
import * as icu from "./icu.ts";
import * as inspector from "./inspector.ts";
import * as jsStream from "./js_stream.ts";
import * as messaging from "./messaging.ts";
import * as moduleWrap from "./module_wrap.ts";
import * as nativeModule from "./native_module.ts";
import * as natives from "./natives.ts";
import * as options from "./options.ts";
import * as os from "./os.ts";
import * as pipeWrap from "./pipe_wrap.ts";
import * as performance from "./performance.ts";
import * as processMethods from "./process_methods.ts";
import * as report from "./report.ts";
import * as serdes from "./serdes.ts";
import * as signalWrap from "./signal_wrap.ts";
import * as spawnSync from "./spawn_sync.ts";
import * as streamWrap from "./stream_wrap.ts";
import * as stringDecoder from "./string_decoder.ts";
import * as symbols from "./symbols.ts";
import * as taskQueue from "./task_queue.ts";
import * as tcpWrap from "./tcp_wrap.ts";
import * as timers from "./timers.ts";
import * as tlsWrap from "./tls_wrap.ts";
import * as traceEvents from "./trace_events.ts";
import * as ttyWrap from "./tty_wrap.ts";
import * as types from "./types.ts";
import * as udpWrap from "./udp_wrap.ts";
import * as url from "./url.ts";
import * as util from "./util.ts";
import * as uv from "./uv.ts";
import * as v8 from "./v8.ts";
import * as worker from "./worker.ts";
import * as zlib from "./zlib.ts";
const modules = {
    "async_wrap": asyncWrap,
    buffer,
    "cares_wrap": caresWrap,
    config,
    constants,
    contextify,
    credentials,
    crypto,
    errors,
    fs,
    "fs_dir": fsDir,
    "fs_event_wrap": fsEventWrap,
    "heap_utils": heapUtils,
    "http_parser": httpParser,
    icu,
    inspector,
    "js_stream": jsStream,
    messaging,
    "module_wrap": moduleWrap,
    "native_module": nativeModule,
    natives,
    options,
    os,
    performance,
    "pipe_wrap": pipeWrap,
    "process_methods": processMethods,
    report,
    serdes,
    "signal_wrap": signalWrap,
    "spawn_sync": spawnSync,
    "stream_wrap": streamWrap,
    "string_decoder": stringDecoder,
    symbols,
    "task_queue": taskQueue,
    "tcp_wrap": tcpWrap,
    timers,
    "tls_wrap": tlsWrap,
    "trace_events": traceEvents,
    "tty_wrap": ttyWrap,
    types,
    "udp_wrap": udpWrap,
    url,
    util,
    uv,
    v8,
    worker,
    zlib
};
export function getBinding(name) {
    const mod = modules[name];
    if (!mod) {
        throw new Error(`No such module: ${name}`);
    }
    return mod;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjEzMi4wL25vZGUvaW50ZXJuYWxfYmluZGluZy9tb2QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMTgtMjAyMiB0aGUgRGVubyBhdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBNSVQgbGljZW5zZS5cbmltcG9ydCAqIGFzIGFzeW5jV3JhcCBmcm9tIFwiLi9hc3luY193cmFwLnRzXCI7XG5pbXBvcnQgKiBhcyBidWZmZXIgZnJvbSBcIi4vYnVmZmVyLnRzXCI7XG5pbXBvcnQgKiBhcyBjb25maWcgZnJvbSBcIi4vY29uZmlnLnRzXCI7XG5pbXBvcnQgKiBhcyBjYXJlc1dyYXAgZnJvbSBcIi4vY2FyZXNfd3JhcC50c1wiO1xuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gXCIuL2NvbnN0YW50cy50c1wiO1xuaW1wb3J0ICogYXMgY29udGV4dGlmeSBmcm9tIFwiLi9jb250ZXh0aWZ5LnRzXCI7XG5pbXBvcnQgKiBhcyBjcnlwdG8gZnJvbSBcIi4vY3J5cHRvLnRzXCI7XG5pbXBvcnQgKiBhcyBjcmVkZW50aWFscyBmcm9tIFwiLi9jcmVkZW50aWFscy50c1wiO1xuaW1wb3J0ICogYXMgZXJyb3JzIGZyb20gXCIuL2Vycm9ycy50c1wiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcIi4vZnMudHNcIjtcbmltcG9ydCAqIGFzIGZzRGlyIGZyb20gXCIuL2ZzX2Rpci50c1wiO1xuaW1wb3J0ICogYXMgZnNFdmVudFdyYXAgZnJvbSBcIi4vZnNfZXZlbnRfd3JhcC50c1wiO1xuaW1wb3J0ICogYXMgaGVhcFV0aWxzIGZyb20gXCIuL2hlYXBfdXRpbHMudHNcIjtcbmltcG9ydCAqIGFzIGh0dHBQYXJzZXIgZnJvbSBcIi4vaHR0cF9wYXJzZXIudHNcIjtcbmltcG9ydCAqIGFzIGljdSBmcm9tIFwiLi9pY3UudHNcIjtcbmltcG9ydCAqIGFzIGluc3BlY3RvciBmcm9tIFwiLi9pbnNwZWN0b3IudHNcIjtcbmltcG9ydCAqIGFzIGpzU3RyZWFtIGZyb20gXCIuL2pzX3N0cmVhbS50c1wiO1xuaW1wb3J0ICogYXMgbWVzc2FnaW5nIGZyb20gXCIuL21lc3NhZ2luZy50c1wiO1xuaW1wb3J0ICogYXMgbW9kdWxlV3JhcCBmcm9tIFwiLi9tb2R1bGVfd3JhcC50c1wiO1xuaW1wb3J0ICogYXMgbmF0aXZlTW9kdWxlIGZyb20gXCIuL25hdGl2ZV9tb2R1bGUudHNcIjtcbmltcG9ydCAqIGFzIG5hdGl2ZXMgZnJvbSBcIi4vbmF0aXZlcy50c1wiO1xuaW1wb3J0ICogYXMgb3B0aW9ucyBmcm9tIFwiLi9vcHRpb25zLnRzXCI7XG5pbXBvcnQgKiBhcyBvcyBmcm9tIFwiLi9vcy50c1wiO1xuaW1wb3J0ICogYXMgcGlwZVdyYXAgZnJvbSBcIi4vcGlwZV93cmFwLnRzXCI7XG5pbXBvcnQgKiBhcyBwZXJmb3JtYW5jZSBmcm9tIFwiLi9wZXJmb3JtYW5jZS50c1wiO1xuaW1wb3J0ICogYXMgcHJvY2Vzc01ldGhvZHMgZnJvbSBcIi4vcHJvY2Vzc19tZXRob2RzLnRzXCI7XG5pbXBvcnQgKiBhcyByZXBvcnQgZnJvbSBcIi4vcmVwb3J0LnRzXCI7XG5pbXBvcnQgKiBhcyBzZXJkZXMgZnJvbSBcIi4vc2VyZGVzLnRzXCI7XG5pbXBvcnQgKiBhcyBzaWduYWxXcmFwIGZyb20gXCIuL3NpZ25hbF93cmFwLnRzXCI7XG5pbXBvcnQgKiBhcyBzcGF3blN5bmMgZnJvbSBcIi4vc3Bhd25fc3luYy50c1wiO1xuaW1wb3J0ICogYXMgc3RyZWFtV3JhcCBmcm9tIFwiLi9zdHJlYW1fd3JhcC50c1wiO1xuaW1wb3J0ICogYXMgc3RyaW5nRGVjb2RlciBmcm9tIFwiLi9zdHJpbmdfZGVjb2Rlci50c1wiO1xuaW1wb3J0ICogYXMgc3ltYm9scyBmcm9tIFwiLi9zeW1ib2xzLnRzXCI7XG5pbXBvcnQgKiBhcyB0YXNrUXVldWUgZnJvbSBcIi4vdGFza19xdWV1ZS50c1wiO1xuaW1wb3J0ICogYXMgdGNwV3JhcCBmcm9tIFwiLi90Y3Bfd3JhcC50c1wiO1xuaW1wb3J0ICogYXMgdGltZXJzIGZyb20gXCIuL3RpbWVycy50c1wiO1xuaW1wb3J0ICogYXMgdGxzV3JhcCBmcm9tIFwiLi90bHNfd3JhcC50c1wiO1xuaW1wb3J0ICogYXMgdHJhY2VFdmVudHMgZnJvbSBcIi4vdHJhY2VfZXZlbnRzLnRzXCI7XG5pbXBvcnQgKiBhcyB0dHlXcmFwIGZyb20gXCIuL3R0eV93cmFwLnRzXCI7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tIFwiLi90eXBlcy50c1wiO1xuaW1wb3J0ICogYXMgdWRwV3JhcCBmcm9tIFwiLi91ZHBfd3JhcC50c1wiO1xuaW1wb3J0ICogYXMgdXJsIGZyb20gXCIuL3VybC50c1wiO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tIFwiLi91dGlsLnRzXCI7XG5pbXBvcnQgKiBhcyB1diBmcm9tIFwiLi91di50c1wiO1xuaW1wb3J0ICogYXMgdjggZnJvbSBcIi4vdjgudHNcIjtcbmltcG9ydCAqIGFzIHdvcmtlciBmcm9tIFwiLi93b3JrZXIudHNcIjtcbmltcG9ydCAqIGFzIHpsaWIgZnJvbSBcIi4vemxpYi50c1wiO1xuXG5jb25zdCBtb2R1bGVzID0ge1xuICBcImFzeW5jX3dyYXBcIjogYXN5bmNXcmFwLFxuICBidWZmZXIsXG4gIFwiY2FyZXNfd3JhcFwiOiBjYXJlc1dyYXAsXG4gIGNvbmZpZyxcbiAgY29uc3RhbnRzLFxuICBjb250ZXh0aWZ5LFxuICBjcmVkZW50aWFscyxcbiAgY3J5cHRvLFxuICBlcnJvcnMsXG4gIGZzLFxuICBcImZzX2RpclwiOiBmc0RpcixcbiAgXCJmc19ldmVudF93cmFwXCI6IGZzRXZlbnRXcmFwLFxuICBcImhlYXBfdXRpbHNcIjogaGVhcFV0aWxzLFxuICBcImh0dHBfcGFyc2VyXCI6IGh0dHBQYXJzZXIsXG4gIGljdSxcbiAgaW5zcGVjdG9yLFxuICBcImpzX3N0cmVhbVwiOiBqc1N0cmVhbSxcbiAgbWVzc2FnaW5nLFxuICBcIm1vZHVsZV93cmFwXCI6IG1vZHVsZVdyYXAsXG4gIFwibmF0aXZlX21vZHVsZVwiOiBuYXRpdmVNb2R1bGUsXG4gIG5hdGl2ZXMsXG4gIG9wdGlvbnMsXG4gIG9zLFxuICBwZXJmb3JtYW5jZSxcbiAgXCJwaXBlX3dyYXBcIjogcGlwZVdyYXAsXG4gIFwicHJvY2Vzc19tZXRob2RzXCI6IHByb2Nlc3NNZXRob2RzLFxuICByZXBvcnQsXG4gIHNlcmRlcyxcbiAgXCJzaWduYWxfd3JhcFwiOiBzaWduYWxXcmFwLFxuICBcInNwYXduX3N5bmNcIjogc3Bhd25TeW5jLFxuICBcInN0cmVhbV93cmFwXCI6IHN0cmVhbVdyYXAsXG4gIFwic3RyaW5nX2RlY29kZXJcIjogc3RyaW5nRGVjb2RlcixcbiAgc3ltYm9scyxcbiAgXCJ0YXNrX3F1ZXVlXCI6IHRhc2tRdWV1ZSxcbiAgXCJ0Y3Bfd3JhcFwiOiB0Y3BXcmFwLFxuICB0aW1lcnMsXG4gIFwidGxzX3dyYXBcIjogdGxzV3JhcCxcbiAgXCJ0cmFjZV9ldmVudHNcIjogdHJhY2VFdmVudHMsXG4gIFwidHR5X3dyYXBcIjogdHR5V3JhcCxcbiAgdHlwZXMsXG4gIFwidWRwX3dyYXBcIjogdWRwV3JhcCxcbiAgdXJsLFxuICB1dGlsLFxuICB1dixcbiAgdjgsXG4gIHdvcmtlcixcbiAgemxpYixcbn07XG5cbmV4cG9ydCB0eXBlIEJpbmRpbmdOYW1lID0ga2V5b2YgdHlwZW9mIG1vZHVsZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCaW5kaW5nKG5hbWU6IEJpbmRpbmdOYW1lKSB7XG4gIGNvbnN0IG1vZCA9IG1vZHVsZXNbbmFtZV07XG4gIGlmICghbW9kKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBObyBzdWNoIG1vZHVsZTogJHtuYW1lfWApO1xuICB9XG4gIHJldHVybiBtb2Q7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEVBQTBFO0FBQzFFLFlBQVksZUFBZSxrQkFBa0I7QUFDN0MsWUFBWSxZQUFZLGNBQWM7QUFDdEMsWUFBWSxZQUFZLGNBQWM7QUFDdEMsWUFBWSxl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