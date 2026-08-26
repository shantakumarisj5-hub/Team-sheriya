/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/enquiry/route";
exports.ids = ["app/api/enquiry/route"];
exports.modules = {

/***/ "(rsc)/./app/api/enquiry/route.ts":
/*!**********************************!*\
  !*** ./app/api/enquiry/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/index.mjs\");\n\n\nconst supabaseUrl = \"https://catdiozobihdqlyxnfrr.supabase.co\";\nconst supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__.createClient)(supabaseUrl, supabaseServiceKey);\nasync function POST(request) {\n    try {\n        const body = await request.json();\n        console.log(\"📩 Received enquiry:\", body);\n        // Save to Supabase\n        const { data, error } = await supabase.from('enquiries').insert({\n            service: body.service,\n            name: body.name,\n            email: body.email,\n            budget: body.budget,\n            message: body.message,\n            status: 'new'\n        }).select().single();\n        if (error) {\n            console.error(\"❌ Supabase error:\", error);\n            throw error;\n        }\n        console.log(\"✅ Saved to Supabase:\", data.id);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            message: \"Enquiry received successfully\",\n            data: data\n        });\n    } catch (error) {\n        console.error(\"❌ Error saving enquiry:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            message: \"Error saving enquiry\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function GET() {\n    try {\n        console.log(\"📊 Fetching all enquiries from Supabase...\");\n        const supabaseUrl = \"https://catdiozobihdqlyxnfrr.supabase.co\";\n        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;\n        const supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__.createClient)(supabaseUrl, supabaseServiceKey);\n        const { data, error } = await supabase.from('enquiries').select('*').order('created_at', {\n            ascending: false\n        });\n        if (error) {\n            console.error(\"❌ Supabase error:\", error);\n            throw error;\n        }\n        console.log(\"✅ Found\", data?.length || 0, \"enquiries\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            enquiries: data || []\n        });\n    } catch (error) {\n        console.error(\"❌ Error fetching enquiries:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            message: \"Error fetching enquiries\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2VucXVpcnkvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3RDtBQUNKO0FBRXBELE1BQU1FLGNBQWNDLDBDQUFvQztBQUN4RCxNQUFNRyxxQkFBcUJILFFBQVFDLEdBQUcsQ0FBQ0cseUJBQXlCO0FBRWhFLE1BQU1DLFdBQVdQLG1FQUFZQSxDQUFDQyxhQUFhSTtBQUVwQyxlQUFlRyxLQUFLQyxPQUFvQjtJQUM3QyxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNRCxRQUFRRSxJQUFJO1FBRS9CQyxRQUFRQyxHQUFHLENBQUMsd0JBQXdCSDtRQUVwQyxtQkFBbUI7UUFDbkIsTUFBTSxFQUFFSSxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1SLFNBQzNCUyxJQUFJLENBQUMsYUFDTEMsTUFBTSxDQUFDO1lBQ05DLFNBQVNSLEtBQUtRLE9BQU87WUFDckJDLE1BQU1ULEtBQUtTLElBQUk7WUFDZkMsT0FBT1YsS0FBS1UsS0FBSztZQUNqQkMsUUFBUVgsS0FBS1csTUFBTTtZQUNuQkMsU0FBU1osS0FBS1ksT0FBTztZQUNyQkMsUUFBUTtRQUNWLEdBQ0NDLE1BQU0sR0FDTkMsTUFBTTtRQUVULElBQUlWLE9BQU87WUFDVEgsUUFBUUcsS0FBSyxDQUFDLHFCQUFxQkE7WUFDbkMsTUFBTUE7UUFDUjtRQUVBSCxRQUFRQyxHQUFHLENBQUMsd0JBQXdCQyxLQUFLWSxFQUFFO1FBRTNDLE9BQU8zQixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQ3ZCZ0IsU0FBUztZQUNUTCxTQUFTO1lBQ1RSLE1BQU1BO1FBQ1I7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZEgsUUFBUUcsS0FBSyxDQUFDLDJCQUEyQkE7UUFDekMsT0FBT2hCLHFEQUFZQSxDQUFDWSxJQUFJLENBQ3RCO1lBQUVnQixTQUFTO1lBQU9MLFNBQVM7UUFBdUIsR0FDbEQ7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0Y7QUFFTyxlQUFlSztJQUNwQixJQUFJO1FBQ0ZoQixRQUFRQyxHQUFHLENBQUM7UUFFWixNQUFNWixjQUFjQywwQ0FBb0M7UUFDeEQsTUFBTUcscUJBQXFCSCxRQUFRQyxHQUFHLENBQUNHLHlCQUF5QjtRQUNoRSxNQUFNQyxXQUFXUCxtRUFBWUEsQ0FBQ0MsYUFBYUk7UUFFM0MsTUFBTSxFQUFFUyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1SLFNBQzNCUyxJQUFJLENBQUMsYUFDTFEsTUFBTSxDQUFDLEtBQ1BLLEtBQUssQ0FBQyxjQUFjO1lBQUVDLFdBQVc7UUFBTTtRQUUxQyxJQUFJZixPQUFPO1lBQ1RILFFBQVFHLEtBQUssQ0FBQyxxQkFBcUJBO1lBQ25DLE1BQU1BO1FBQ1I7UUFFQUgsUUFBUUMsR0FBRyxDQUFDLFdBQVdDLE1BQU1pQixVQUFVLEdBQUc7UUFFMUMsT0FBT2hDLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7WUFBRXFCLFdBQVdsQixRQUFRLEVBQUU7UUFBQztJQUNuRCxFQUFFLE9BQU9DLE9BQU87UUFDZEgsUUFBUUcsS0FBSyxDQUFDLCtCQUErQkE7UUFDN0MsT0FBT2hCLHFEQUFZQSxDQUFDWSxJQUFJLENBQ3RCO1lBQUVnQixTQUFTO1lBQU9MLFNBQVM7UUFBMkIsR0FDdEQ7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxQUk9KRUNUU1xcVFNcXHRlYW0tc2hlcml5YVxcYXBwXFxhcGlcXGVucXVpcnlcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJ1xyXG5cclxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwhXHJcbmNvbnN0IHN1cGFiYXNlU2VydmljZUtleSA9IHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVkhXHJcblxyXG5jb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VTZXJ2aWNlS2V5KVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhcIvCfk6kgUmVjZWl2ZWQgZW5xdWlyeTpcIiwgYm9keSk7XHJcbiAgICBcclxuICAgIC8vIFNhdmUgdG8gU3VwYWJhc2VcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCdlbnF1aXJpZXMnKVxyXG4gICAgICAuaW5zZXJ0KHtcclxuICAgICAgICBzZXJ2aWNlOiBib2R5LnNlcnZpY2UsXHJcbiAgICAgICAgbmFtZTogYm9keS5uYW1lLFxyXG4gICAgICAgIGVtYWlsOiBib2R5LmVtYWlsLFxyXG4gICAgICAgIGJ1ZGdldDogYm9keS5idWRnZXQsXHJcbiAgICAgICAgbWVzc2FnZTogYm9keS5tZXNzYWdlLFxyXG4gICAgICAgIHN0YXR1czogJ25ldycsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuc2luZ2xlKCk7XHJcbiAgICBcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwi4p2MIFN1cGFiYXNlIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhcIuKchSBTYXZlZCB0byBTdXBhYmFzZTpcIiwgZGF0YS5pZCk7XHJcbiAgICBcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IFxyXG4gICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgbWVzc2FnZTogXCJFbnF1aXJ5IHJlY2VpdmVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICBkYXRhOiBkYXRhXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIuKdjCBFcnJvciBzYXZpbmcgZW5xdWlyeTpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkVycm9yIHNhdmluZyBlbnF1aXJ5XCIgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coXCLwn5OKIEZldGNoaW5nIGFsbCBlbnF1aXJpZXMgZnJvbSBTdXBhYmFzZS4uLlwiKTtcclxuICAgIFxyXG4gICAgY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwhXHJcbiAgICBjb25zdCBzdXBhYmFzZVNlcnZpY2VLZXkgPSBwcm9jZXNzLmVudi5TVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZIVxyXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlU2VydmljZUtleSlcclxuICAgIFxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ2VucXVpcmllcycpXHJcbiAgICAgIC5zZWxlY3QoJyonKVxyXG4gICAgICAub3JkZXIoJ2NyZWF0ZWRfYXQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XHJcbiAgICBcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwi4p2MIFN1cGFiYXNlIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhcIuKchSBGb3VuZFwiLCBkYXRhPy5sZW5ndGggfHwgMCwgXCJlbnF1aXJpZXNcIik7XHJcbiAgICBcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVucXVpcmllczogZGF0YSB8fCBbXSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIuKdjCBFcnJvciBmZXRjaGluZyBlbnF1aXJpZXM6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJFcnJvciBmZXRjaGluZyBlbnF1aXJpZXNcIiB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsInN1cGFiYXNlU2VydmljZUtleSIsIlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVkiLCJzdXBhYmFzZSIsIlBPU1QiLCJyZXF1ZXN0IiwiYm9keSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwiZnJvbSIsImluc2VydCIsInNlcnZpY2UiLCJuYW1lIiwiZW1haWwiLCJidWRnZXQiLCJtZXNzYWdlIiwic3RhdHVzIiwic2VsZWN0Iiwic2luZ2xlIiwiaWQiLCJzdWNjZXNzIiwiR0VUIiwib3JkZXIiLCJhc2NlbmRpbmciLCJsZW5ndGgiLCJlbnF1aXJpZXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/enquiry/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fenquiry%2Froute&page=%2Fapi%2Fenquiry%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fenquiry%2Froute.ts&appDir=C%3A%5CPROJECTS%5CTS%5Cteam-sheriya%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPROJECTS%5CTS%5Cteam-sheriya&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fenquiry%2Froute&page=%2Fapi%2Fenquiry%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fenquiry%2Froute.ts&appDir=C%3A%5CPROJECTS%5CTS%5Cteam-sheriya%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPROJECTS%5CTS%5Cteam-sheriya&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_PROJECTS_TS_team_sheriya_app_api_enquiry_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/enquiry/route.ts */ \"(rsc)/./app/api/enquiry/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/enquiry/route\",\n        pathname: \"/api/enquiry\",\n        filename: \"route\",\n        bundlePath: \"app/api/enquiry/route\"\n    },\n    resolvedPagePath: \"C:\\\\PROJECTS\\\\TS\\\\team-sheriya\\\\app\\\\api\\\\enquiry\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_PROJECTS_TS_team_sheriya_app_api_enquiry_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZlbnF1aXJ5JTJGcm91dGUmcGFnZT0lMkZhcGklMkZlbnF1aXJ5JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZW5xdWlyeSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDUFJPSkVDVFMlNUNUUyU1Q3RlYW0tc2hlcml5YSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1BST0pFQ1RTJTVDVFMlNUN0ZWFtLXNoZXJpeWEmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ1c7QUFDeEY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFBST0pFQ1RTXFxcXFRTXFxcXHRlYW0tc2hlcml5YVxcXFxhcHBcXFxcYXBpXFxcXGVucXVpcnlcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2VucXVpcnkvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9lbnF1aXJ5XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9lbnF1aXJ5L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcUFJPSkVDVFNcXFxcVFNcXFxcdGVhbS1zaGVyaXlhXFxcXGFwcFxcXFxhcGlcXFxcZW5xdWlyeVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fenquiry%2Froute&page=%2Fapi%2Fenquiry%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fenquiry%2Froute.ts&appDir=C%3A%5CPROJECTS%5CTS%5Cteam-sheriya%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPROJECTS%5CTS%5Cteam-sheriya&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/tslib","vendor-chunks/@supabase","vendor-chunks/iceberg-js"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fenquiry%2Froute&page=%2Fapi%2Fenquiry%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fenquiry%2Froute.ts&appDir=C%3A%5CPROJECTS%5CTS%5Cteam-sheriya%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPROJECTS%5CTS%5Cteam-sheriya&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();