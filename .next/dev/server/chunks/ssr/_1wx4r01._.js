module.exports = [
"[project]/node_modules/lucide-react/dist/esm/Icon.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$buildLucideIconForReact$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/context.mjs [app-ssr] (ecmascript)");
"use strict";
"use client";
;
;
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color, size, width, height, strokeWidth, absoluteStrokeWidth, nonScalingStroke, className = "", children, iconNode = [], icon = {
    node: iconNode,
    aliases: [],
    size: 24
}, ...rest }, ref)=>{
    const { size: contextSize = 24, strokeWidth: contextStrokeWidth = 2, absoluteStrokeWidth: contextAbsoluteStrokeWidth = false, nonScalingStroke: contextNonScalingStroke = false, color: contextColor = "currentColor", className: contextClass = "" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLucideContext"])() ?? {};
    const hasAccessibleProp = Boolean(children) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest);
    const [name, svgAttributes, builtIconNode = []] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$buildLucideIconForReact$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(icon, {
        color: color ?? contextColor,
        width: width ?? size ?? contextSize,
        height: height ?? size ?? contextSize,
        strokeWidth: strokeWidth ?? contextStrokeWidth,
        absoluteStrokeWidth: absoluteStrokeWidth ?? contextAbsoluteStrokeWidth,
        nonScalingStroke: nonScalingStroke ?? contextNonScalingStroke,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(contextClass, className),
        hasA11yProp: hasAccessibleProp,
        attributes: rest
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(name, {
        ref,
        ...svgAttributes
    }, [
        ...builtIconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
}),
"[project]/node_modules/lucide-react/dist/esm/context.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LucideProvider",
    ()=>LucideProvider,
    "useLucideContext",
    ()=>useLucideContext
]);
/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use strict";
"use client";
;
const LucideContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
function LucideProvider({ children, size, color, strokeWidth, absoluteStrokeWidth, nonScalingStroke, className }) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            size,
            color,
            strokeWidth,
            absoluteStrokeWidth,
            nonScalingStroke,
            className
        }), [
        size,
        color,
        strokeWidth,
        absoluteStrokeWidth,
        nonScalingStroke,
        className
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(LucideContext.Provider, {
        value
    }, children);
}
const useLucideContext = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LucideContext);
;
}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toLucideIconData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.mjs [app-ssr] (ecmascript)");
;
;
;
;
function createLucideIcon(iconDataOrName, iconNode = [], aliases = []) {
    const iconData = typeof iconDataOrName === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toLucideIconData$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toLucideIconData"])(iconDataOrName, iconNode, aliases) : iconDataOrName;
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            icon: iconData,
            className,
            ...props
        }));
    if (iconData.name) {
        Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconData.name);
    }
    return Component;
}
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>ArrowRight
]);
/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconData = {
    name: "arrow-right",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M5 12h14",
                key: "1ays0h"
            }
        ],
        [
            "path",
            {
                d: "m12 5 7 7-7 7",
                key: "xquz4c"
            }
        ]
    ]
};
__iconData.node;
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sprout.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>Sprout
]);
/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconData = {
    name: "sprout",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",
                key: "139s4v"
            }
        ],
        [
            "path",
            {
                d: "M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4",
                key: "1dlkgp"
            }
        ],
        [
            "path",
            {
                d: "M5 21h14",
                key: "11awu3"
            }
        ]
    ]
};
__iconData.node;
const Sprout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sprout.mjs [app-ssr] (ecmascript) <export default as Sprout>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sprout",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sprout.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>buildLucideIconForReact
]);
/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$buildLucideIconNode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs [app-ssr] (ecmascript)");
;
function buildLucideIconForReact(icon, params = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$buildLucideIconNode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(icon, {
        ...params,
        attributeNames: {
            ...params.attributeNames,
            class: "className",
            "stroke-width": "strokeWidth",
            "stroke-linecap": "strokeLinecap",
            "stroke-linejoin": "strokeLinejoin",
            "vector-effect": "vectorEffect"
        }
    });
}
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>buildLucideIconNode
]);
/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs [app-ssr] (ecmascript)");
;
;
function isDefined(value) {
    return value !== null && value !== void 0;
}
function buildLucideIconNode(icon, params = {}) {
    const attributeNames = params.attributeNames ?? {};
    const getAttributeName = (attributeName)=>attributeNames[attributeName] ?? attributeName;
    const viewBoxWidth = icon.size ?? icon.width ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]["width"];
    const viewBoxHeight = icon.size ?? icon.height ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]["height"];
    const aliasClassNames = icon.aliases?.filter((alias)=>typeof alias === "string" && alias.trim() !== "").map((alias)=>`lucide-${alias}`) ?? [];
    const iconClassNames = [
        ...icon.name ? [
            `lucide-${icon.name}`
        ] : [],
        ...aliasClassNames
    ];
    const classNamesFromClassName = params.className?.split(" ").filter(Boolean) ?? [];
    const className = params.includeDefaultClasses === false ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(...classNamesFromClassName) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", ...iconClassNames, ...classNamesFromClassName);
    const calculatedStrokeWidth = params.absoluteStrokeWidth ? Number(params.strokeWidth ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]["stroke-width"]) * Number(icon.size ?? icon.width ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]["width"]) / Number(params.size ?? params.width ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]["width"]) : params.strokeWidth ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]["stroke-width"];
    const attributes = {
        ...Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).reduce((attrs, [attrName, value])=>{
            attrs[getAttributeName(attrName)] = value;
            return attrs;
        }, {}),
        ..."color" in params && params.color && {
            [getAttributeName("stroke")]: params.color
        },
        ..."size" in params && isDefined(params.size) && {
            [getAttributeName("width")]: params.size,
            [getAttributeName("height")]: params.size
        },
        ..."width" in params && isDefined(params.width) && {
            [getAttributeName("width")]: params.width
        },
        ..."height" in params && isDefined(params.height) && {
            [getAttributeName("height")]: params.height
        },
        [getAttributeName("stroke-width")]: calculatedStrokeWidth,
        ...className && {
            [getAttributeName("class")]: className
        },
        [getAttributeName("viewBox")]: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
        ...params.hasA11yProp === false ? {
            [getAttributeName("aria-hidden")]: "true"
        } : {},
        ..."attributes" in params && params.attributes
    };
    return [
        "svg",
        attributes,
        icon.node.map((child)=>{
            const [name, attrs, children] = child;
            const nextAttrs = params.nonScalingStroke ? {
                [getAttributeName("vector-effect")]: "non-scaling-stroke",
                ...attrs
            } : attrs;
            return children ? [
                name,
                nextAttrs,
                children
            ] : [
                name,
                nextAttrs
            ];
        })
    ];
}
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
};
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp
]);
/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
    return false;
};
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses
]);
/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toCamelCase",
    ()=>toCamelCase
]);
/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toCamelCase = (string)=>{
    let out = "";
    let upperNext = false;
    for (const ch of string){
        if (ch === "-" || ch === "_" || ch <= " ") {
            upperNext = out.length > 0;
            continue;
        }
        if (out.length === 0) {
            out += ch.toLowerCase();
        } else {
            out += upperNext ? ch.toUpperCase() : ch;
        }
        upperNext = false;
    }
    return out;
};
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toKebabCase",
    ()=>toKebabCase
]);
/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toLucideIconData",
    ()=>toLucideIconData
]);
/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs [app-ssr] (ecmascript)");
;
function toLucideIconData(iconName, iconNode, aliases = []) {
    if (iconNode == null) {
        throw new Error("[lucide]: iconNode is required when icon name is used");
    }
    return {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName),
        size: 24,
        node: iconNode,
        ...aliases.length > 0 ? {
            aliases
        } : {}
    };
}
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toPascalCase",
    ()=>toPascalCase
]);
/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs [app-ssr] (ecmascript)");
;
const toPascalCase = (string)=>{
    const camelCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toCamelCase"])(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
;
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sprout.mjs [app-ssr] (ecmascript) <export default as Sprout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$orbital$2d$hero$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/orbital-hero-section.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
/** True while the viewport is narrow. Drives the layout swap below. */ function useNarrow(query = "(max-width: 767px)") {
    const [narrow, setNarrow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const m = window.matchMedia(query);
        const sync = ()=>setNarrow(m.matches);
        sync();
        m.addEventListener("change", sync);
        return ()=>m.removeEventListener("change", sync);
    }, [
        query
    ]);
    return narrow;
}
function Home() {
    const narrow = useNarrow();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__["Sprout"], {
                                className: "h-5 w-5 text-emerald-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold tracking-tight",
                                children: "AgroEdge"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/80 transition hover:border-white/30 hover:text-white",
                        children: "Sign in"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative min-h-[92svh] w-full md:min-h-[720px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$orbital$2d$hero$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrbitalHeroSection"], {
                    focus: narrow ? [
                        0.5,
                        0.86
                    ] : [
                        0.74,
                        0.42
                    ],
                    scrim: narrow ? "top" : "left",
                    scrimStrength: narrow ? 0.94 : 0.92,
                    viewRadius: narrow ? 2.1 : 3.1,
                    lead: narrow ? 0.05 : 0.12,
                    glow: narrow ? 0.5 : 1,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full min-h-[92svh] items-start px-6 pt-24 sm:px-10 md:min-h-[720px] md:items-center md:pt-0 lg:px-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-[36rem]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-300",
                                    children: "AI-powered farm intelligence"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-[2.5rem] font-light leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.1rem]",
                                    children: [
                                        "Every field",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this),
                                        "is always moving"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-6 max-w-md text-[0.95rem] leading-relaxed text-white/60 md:mt-7",
                                    children: "AgroEdge watches your soil, your crops, and your climate risk in real time — so you catch disease, drought, and pests before they cost you the season."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex flex-wrap items-center gap-3 md:mt-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90",
                                            children: [
                                                "Get started",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#features",
                                            className: "rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 transition hover:border-white/40 hover:text-white",
                                            children: "See how it works"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "features",
                className: "mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold tracking-tight text-white sm:text-3xl",
                        children: "One dashboard for the whole farm"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 max-w-xl text-sm leading-relaxed text-white/50",
                        children: "Sensors, cameras, and AI models working together — not six separate apps you have to check."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
                        children: [
                            {
                                title: "Disease detection",
                                desc: "Photograph a leaf, get an instant diagnosis and treatment plan from a trained vision model."
                            },
                            {
                                title: "Live sensor dashboard",
                                desc: "Soil moisture, humidity, and temperature streamed straight from your field hardware."
                            },
                            {
                                title: "Flood & drought alerts",
                                desc: "Early warnings from sensor trends and forecast data, before conditions turn critical."
                            },
                            {
                                title: "Pest risk & IPM",
                                desc: "Environmental pest-pressure modeling plus sticky-trap photo counting."
                            },
                            {
                                title: "AI farm assistant",
                                desc: "Ask plain-language questions about your crops and get grounded, actionable answers."
                            },
                            {
                                title: "Field camera feed",
                                desc: "Keep a visual eye on your plots without walking the rows every morning."
                            }
                        ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-400/30 hover:bg-white/[0.05]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-white",
                                        children: f.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm leading-relaxed text-white/50",
                                        children: f.desc
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, f.title, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "border-t border-white/10 px-6 py-8 text-center text-xs text-white/40 sm:px-10 lg:px-20",
                children: [
                    "© ",
                    new Date().getFullYear(),
                    " AgroEdge. Smarter farming, powered by AI."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/orbital-hero-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INNER_PLANETS",
    ()=>INNER_PLANETS,
    "OrbitalHeroSection",
    ()=>OrbitalHeroSection,
    "SOLAR_SYSTEM",
    ()=>SOLAR_SYSTEM,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const SOLAR_SYSTEM = [
    {
        name: "Mercury",
        a: 0.38710,
        e: 0.20563,
        i: 7.005,
        node: 48.331,
        peri: 29.125,
        M0: 174.796,
        color: "#fff0d0",
        size: 2.2
    },
    {
        name: "Venus",
        a: 0.72333,
        e: 0.00677,
        i: 3.395,
        node: 76.680,
        peri: 54.853,
        M0: 50.115,
        color: "#ffc65a",
        size: 3.4
    },
    {
        name: "Earth",
        a: 1.00000,
        e: 0.01671,
        i: 0.000,
        node: 348.739,
        peri: 114.208,
        M0: 357.517,
        color: "#5fd8ff",
        size: 3.8,
        glow: 1.1
    },
    {
        name: "Mars",
        a: 1.52371,
        e: 0.09339,
        i: 1.850,
        node: 49.558,
        peri: 286.483,
        M0: 19.373,
        color: "#ff4a32",
        size: 2.9
    },
    {
        name: "Jupiter",
        a: 5.20290,
        e: 0.04839,
        i: 1.303,
        node: 100.464,
        peri: 273.867,
        M0: 20.020,
        color: "#ffa62e",
        size: 5.4
    },
    {
        name: "Saturn",
        a: 9.53700,
        e: 0.05386,
        i: 2.485,
        node: 113.665,
        peri: 339.392,
        M0: 317.020,
        color: "#ffd884",
        size: 4.8
    },
    {
        name: "Uranus",
        a: 19.1913,
        e: 0.04726,
        i: 0.773,
        node: 74.006,
        peri: 98.999,
        M0: 142.238,
        color: "#7fe6ff",
        size: 4.2
    },
    {
        name: "Neptune",
        a: 30.0690,
        e: 0.00859,
        i: 1.770,
        node: 131.784,
        peri: 276.336,
        M0: 256.228,
        color: "#3f7dff",
        size: 4.4
    }
];
const INNER_PLANETS = SOLAR_SYSTEM.slice(0, 4);
/**
 * Extra tilt and swing added to each orbit plane at planeSpread = 1, in
 * degrees. Fixed rather than random, so the rosette they make is the same
 * every load and on the server as on the client.
 */ const PLANE_FAN = [
    [
        58,
        35
    ],
    [
        27,
        145
    ],
    [
        71,
        250
    ],
    [
        40,
        80
    ],
    [
        84,
        190
    ],
    [
        33,
        310
    ],
    [
        62,
        120
    ],
    [
        15,
        20
    ]
];
/** Eccentricity each orbit is pulled toward at eccentricity = 1. */ const ECC_FAN = [
    0.52,
    0.34,
    0.63,
    0.44,
    0.3,
    0.58,
    0.4,
    0.68
];
/* -------------------------------------------------------------------------- */ /*  Maths                                                                     */ /* -------------------------------------------------------------------------- */ const TAU = Math.PI * 2;
const RAD = Math.PI / 180;
/**
 * Kepler's equation M = E − e·sin E, solved for the eccentric anomaly.
 * Newton's method; at solar-system eccentricities three passes are plenty.
 */ function eccentricAnomaly(M, e) {
    let m = M % TAU;
    if (m < 0) m += TAU;
    let E = m + e * Math.sin(m) * (1 + e * Math.cos(m));
    for(let k = 0; k < 8; k++){
        const step = (E - e * Math.sin(E) - m) / (1 - e * Math.cos(E));
        E -= step;
        if (Math.abs(step) < 1e-10) break;
    }
    return E;
}
function parseRGB(color) {
    const c = color.trim();
    if (c[0] === "#") {
        const hex = c.slice(1);
        const full = hex.length === 3 ? hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] : hex.slice(0, 6);
        const n = parseInt(full, 16);
        return [
            n >> 16 & 255,
            n >> 8 & 255,
            n & 255
        ];
    }
    const m = c.match(/(\d+(?:\.\d+)?)/g);
    if (m && m.length >= 3) return [
        +m[0],
        +m[1],
        +m[2]
    ];
    return [
        255,
        255,
        255
    ];
}
function mulberry32(seed) {
    let t = seed >>> 0;
    return ()=>{
        t += 0x6d2b79f5;
        let x = t;
        x = Math.imul(x ^ x >>> 15, x | 1);
        x ^= x + Math.imul(x ^ x >>> 7, x | 61);
        return ((x ^ x >>> 14) >>> 0) / 4294967296;
    };
}
function OrbitalHeroSection({ planets = SOLAR_SYSTEM, yearSeconds = 16, trailYears = 2.6, compress = 0.42, maxTurns = 3, planeSpread = 1, eccentricity = 0.25, alignToCourse = 1, driftSpeed = 1.5, apex = [
    272,
    53
], viewRadius = 3.4, // Pitch and yaw are picked together so the Sun's track leaves the frame at
// about 38° below the horizon, and it runs up and to the right.
tilt = 45, spin = 252, roll = 13.5, lead = 0.12, focus = [
    0.5,
    0.5
], scrim = "none", scrimStrength = 0.88, starCount = 1500, glow = 1, showOrbits = false, showSunTrack = true, interactive = true, paused = false, sunColor = "#FFF2CC", className = "", children, ...rest }) {
    const hostRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        planets,
        yearSeconds,
        trailYears,
        compress,
        maxTurns,
        planeSpread,
        eccentricity,
        alignToCourse,
        driftSpeed,
        apex,
        viewRadius,
        tilt,
        spin,
        roll,
        lead,
        focus,
        scrim,
        scrimStrength,
        starCount,
        glow,
        showOrbits,
        showSunTrack,
        interactive,
        paused,
        sunColor
    });
    props.current = {
        planets,
        yearSeconds,
        trailYears,
        compress,
        maxTurns,
        planeSpread,
        eccentricity,
        alignToCourse,
        driftSpeed,
        apex,
        viewRadius,
        tilt,
        spin,
        roll,
        lead,
        focus,
        scrim,
        scrimStrength,
        starCount,
        glow,
        showOrbits,
        showSunTrack,
        interactive,
        paused,
        sunColor
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const host = hostRef.current;
        const canvas = canvasRef.current;
        if (!host || !canvas) return;
        const ctx = canvas.getContext("2d", {
            alpha: false
        });
        if (!ctx) return;
        const reduced = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let width = 0;
        let height = 0;
        let dpr = 1;
        /** Simulation clock, in Earth years since J2000. */ let years = reduced ? 1.7 : 0;
        let lastFrame = 0;
        let running = true;
        let visible = true;
        let raf = 0;
        /* --- camera ----------------------------------------------------------- */ // World axes: x, y span the ecliptic, z points to the ecliptic north pole.
        // Screen basis is built from yaw about z, then pitch about the new x.
        let pxPerAU = 1;
        let cx = 0;
        let cy = 0;
        let camDist = 1; // camera standoff from the Sun, in AU
        // basis vectors in world coords
        const RIGHT = {
            x: 1,
            y: 0,
            z: 0
        };
        const UP = {
            x: 0,
            y: 1,
            z: 0
        };
        const FWD = {
            x: 0,
            y: 0,
            z: 1
        }; // points from the Sun back toward the camera
        function setCamera(yawDeg, pitchDeg, rollDeg) {
            const A = yawDeg * RAD;
            const B = pitchDeg * RAD;
            const ca = Math.cos(A), sa = Math.sin(A);
            const cb = Math.cos(B), sb = Math.sin(B);
            const rx = ca, ry = sa, rz = 0;
            const ux = -sa * cb, uy = ca * cb, uz = sb;
            FWD.x = sa * sb;
            FWD.y = -ca * sb;
            FWD.z = cb;
            // Roll turns the picture about the line of sight. It changes nothing in
            // space — it only decides which way the helix runs across the screen,
            // which is why it can be set apart from the viewing angle.
            const C = rollDeg * RAD;
            const cr = Math.cos(C), sr = Math.sin(C);
            RIGHT.x = rx * cr + ux * sr;
            RIGHT.y = ry * cr + uy * sr;
            RIGHT.z = rz * cr + uz * sr;
            UP.x = -rx * sr + ux * cr;
            UP.y = -ry * sr + uy * cr;
            UP.z = -rz * sr + uz * cr;
        }
        // Scratch output for project(); reused to keep the hot loop allocation-free.
        const P = {
            x: 0,
            y: 0,
            depth: 0,
            s: 0,
            ok: false
        };
        /** World offset from the Sun → screen. */ function project(dx, dy, dz) {
            const vx = dx * RIGHT.x + dy * RIGHT.y + dz * RIGHT.z;
            const vy = dx * UP.x + dy * UP.y + dz * UP.z;
            const vz = dx * FWD.x + dy * FWD.y + dz * FWD.z;
            const depth = camDist - vz;
            if (depth < 0.6) {
                P.ok = false;
                return;
            }
            const s = camDist / depth;
            P.x = cx + vx * pxPerAU * s;
            P.y = cy - vy * pxPerAU * s;
            P.depth = depth;
            P.s = s;
            P.ok = true;
        }
        /* --- the Sun's own velocity ------------------------------------------- */ // Ecliptic longitude/latitude of the solar apex → a unit vector.
        const DIR = {
            x: 0,
            y: 0,
            z: 0
        };
        function setApex(lonDeg, latDeg) {
            const l = lonDeg * RAD;
            const b = latDeg * RAD;
            DIR.x = Math.cos(b) * Math.cos(l);
            DIR.y = Math.cos(b) * Math.sin(l);
            DIR.z = Math.sin(b);
        }
        function elementsOf(p, index, gamma, spread, ecc, align) {
            const aDraw = Math.pow(p.a, gamma);
            // Kepler's third law: P² ∝ a³, so P = a^1.5 years and n = 2π/P.
            const period = Math.pow(aDraw, 1.5);
            const fan = PLANE_FAN[index % PLANE_FAN.length];
            const inc = (p.i + spread * fan[0]) * RAD;
            const node = (p.node + spread * fan[1]) * RAD;
            const target = ECC_FAN[index % ECC_FAN.length];
            const ci = Math.cos(inc), si = Math.sin(inc);
            const cn = Math.cos(node), sn = Math.sin(node);
            return {
                p,
                rgb: parseRGB(p.color),
                e: Math.min(0.85, p.e + ecc * (target - p.e)),
                aDraw,
                period,
                n: TAU / period,
                cw: Math.cos(p.peri * RAD),
                sw: Math.sin(p.peri * RAD),
                ci,
                si,
                cn,
                sn,
                M0: p.M0 * RAD,
                swing: align > 0 ? swingToCourse(si * sn, -si * cn, ci, align) : null
            };
        }
        /**
     * Builds the rotation that swings an orbit plane toward the one standing
     * square to the Sun's course. Feed it the plane's normal; at align = 1 the
     * normal ends up along the course, which makes every wake a true helix
     * about it, and all the helices share one axis.
     */ function swingToCourse(nx, ny, nz, align) {
            // Aim at whichever end of the course the plane already leans toward, so
            // an orbit is never turned inside out.
            const s = nx * DIR.x + ny * DIR.y + nz * DIR.z >= 0 ? 1 : -1;
            let tx = nx + align * (s * DIR.x - nx);
            let ty = ny + align * (s * DIR.y - ny);
            let tz = nz + align * (s * DIR.z - nz);
            const tl = Math.hypot(tx, ty, tz);
            if (tl < 1e-9) return null;
            tx /= tl;
            ty /= tl;
            tz /= tl;
            // Rodrigues: rotate n onto the blended normal, about their cross product.
            let ax = ny * tz - nz * ty;
            let ay = nz * tx - nx * tz;
            let az = nx * ty - ny * tx;
            const al = Math.hypot(ax, ay, az);
            if (al < 1e-9) return null;
            ax /= al;
            ay /= al;
            az /= al;
            const c = Math.max(-1, Math.min(1, nx * tx + ny * ty + nz * tz));
            const sA = al > 1 ? 1 : al;
            const k = 1 - c;
            return [
                c + ax * ax * k,
                ax * ay * k - az * sA,
                ax * az * k + ay * sA,
                ay * ax * k + az * sA,
                c + ay * ay * k,
                ay * az * k - ax * sA,
                az * ax * k - ay * sA,
                az * ay * k + ax * sA,
                c + az * az * k
            ];
        }
        const R3 = {
            x: 0,
            y: 0,
            z: 0
        };
        /** Heliocentric position at mean anomaly M, already squeezed. Writes R3. */ function helio(el, M, gamma) {
            const e = el.e;
            const E = eccentricAnomaly(M, e);
            const xo = el.p.a * (Math.cos(E) - e);
            const yo = el.p.a * Math.sqrt(1 - e * e) * Math.sin(E);
            // turn by the argument of perihelion, inside the orbit plane
            const x1 = xo * el.cw - yo * el.sw;
            const y1 = xo * el.sw + yo * el.cw;
            // tip the plane by the inclination
            const y2 = y1 * el.ci;
            const z2 = y1 * el.si;
            // swing round by the ascending node
            let x = x1 * el.cn - y2 * el.sn;
            let y = x1 * el.sn + y2 * el.cn;
            let z = z2;
            // swing the whole plane toward the Sun's course
            const S = el.swing;
            if (S) {
                const rx = S[0] * x + S[1] * y + S[2] * z;
                const ry = S[3] * x + S[4] * y + S[5] * z;
                const rz = S[6] * x + S[7] * y + S[8] * z;
                x = rx;
                y = ry;
                z = rz;
            }
            // Squeeze along the radius. Angles are untouched, so the tilt of every
            // orbit plane and the offset of the Sun from the ellipse centre survive.
            if (gamma !== 1) {
                const r = Math.sqrt(x * x + y * y + z * z);
                if (r > 1e-9) {
                    const s = Math.pow(r, gamma - 1);
                    x *= s;
                    y *= s;
                    z *= s;
                }
            }
            R3.x = x;
            R3.y = y;
            R3.z = z;
        }
        let elems = [];
        let elemsKey = "";
        function syncElements() {
            const C = props.current;
            const key = C.compress + "/" + C.planeSpread + "/" + C.eccentricity + "/" + C.alignToCourse + "/" + C.apex[0] + "," + C.apex[1] + "/" + C.planets.map((p)=>p.name + p.a + p.e + p.color).join("|");
            if (key === elemsKey) return;
            elemsKey = key;
            elems = C.planets.map((p, idx)=>elementsOf(p, idx, C.compress, C.planeSpread, C.eccentricity, C.alignToCourse));
        }
        /* --- background stars ------------------------------------------------- */ // Kept in world coords, so turning the camera does not drag them along.
        // Depth parallax is real: near stars slide, far ones barely stir. Distances
        // are compressed — the true nearest star is 270,000 AU away and would not
        // shift by a pixel in a lifetime of watching.
        // Depth range of the star box, in camera distances. Real stars sit some
        // 270,000 AU away and would not shift by a pixel in a lifetime of
        // watching, so the range here is squeezed hard. The gradient is honest
        // though: near stars slide, far ones barely stir.
        let D_NEAR = 60;
        let D_FAR = 1400;
        const EMPTY = new Float64Array(0);
        let sx = EMPTY, sy = EMPTY, sz = EMPTY, sMag = EMPTY, sPhase = EMPTY;
        let sTint = new Uint8Array(0);
        let starN = 0;
        let rand = mulberry32(0xc0ffee);
        /** Place one star at a random spot in the frustum, at optional fixed depth. */ function seedStar(k, depth, edge) {
            const d = depth ?? D_NEAR * Math.pow(D_FAR / D_NEAR, Math.pow(rand(), 0.55));
            // screen offset in px, then back out to world units at that depth
            const halfW = width * 0.5 * 1.15;
            const halfH = height * 0.5 * 1.15;
            let ox, oy;
            if (edge === 0) {
                ox = -halfW;
                oy = (rand() * 2 - 1) * halfH;
            } else if (edge === 1) {
                ox = halfW;
                oy = (rand() * 2 - 1) * halfH;
            } else if (edge === 2) {
                ox = (rand() * 2 - 1) * halfW;
                oy = -halfH;
            } else if (edge === 3) {
                ox = (rand() * 2 - 1) * halfW;
                oy = halfH;
            } else {
                ox = (rand() * 2 - 1) * halfW;
                oy = (rand() * 2 - 1) * halfH;
            }
            const scale = d / (camDist * pxPerAU);
            const vx = ox * scale;
            const vy = -oy * scale;
            const vz = camDist - d;
            // view basis → world, then offset by where the Sun is right now
            const wx = vx * RIGHT.x + vy * UP.x + vz * FWD.x + DIR.x * dist;
            const wy = vx * RIGHT.y + vy * UP.y + vz * FWD.y + DIR.y * dist;
            const wz = vx * RIGHT.z + vy * UP.z + vz * FWD.z + DIR.z * dist;
            sx[k] = wx;
            sy[k] = wy;
            sz[k] = wz;
            sMag[k] = Math.pow(rand(), 2.4);
            sPhase[k] = rand() * TAU;
            const t = rand();
            sTint[k] = t > 0.9 ? 1 : t < 0.08 ? 2 : 0;
        }
        /** Distance the Sun has travelled, in AU. */ let dist = 0;
        function buildStars() {
            starN = Math.max(60, Math.round(props.current.starCount * Math.min(2, width * height / (1440 * 900))));
            sx = new Float64Array(starN);
            sy = new Float64Array(starN);
            sz = new Float64Array(starN);
            sMag = new Float64Array(starN);
            sPhase = new Float64Array(starN);
            sTint = new Uint8Array(starN);
            rand = mulberry32(0xc0ffee);
            for(let k = 0; k < starN; k++)seedStar(k);
        }
        /* --- sprites ---------------------------------------------------------- */ const glowCache = new Map();
        function glowSprite(color) {
            const hit = glowCache.get(color);
            if (hit) return hit;
            const R = 64;
            const c = document.createElement("canvas");
            c.width = c.height = R * 2;
            const g2 = c.getContext("2d");
            const [r, g, b] = parseRGB(color);
            const grad = g2.createRadialGradient(R, R, 0, R, R, R);
            grad.addColorStop(0, "rgba(255,255,255,1)");
            grad.addColorStop(0.15, `rgba(${r},${g},${b},0.95)`);
            grad.addColorStop(0.36, `rgba(${r},${g},${b},0.26)`);
            grad.addColorStop(0.66, `rgba(${r},${g},${b},0.05)`);
            grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
            g2.fillStyle = grad;
            g2.fillRect(0, 0, R * 2, R * 2);
            glowCache.set(color, c);
            return c;
        }
        /* --- sizing ----------------------------------------------------------- */ function resize() {
            const rect = host.getBoundingClientRect();
            const w = Math.max(1, rect.width);
            const h = Math.max(1, rect.height);
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            if (w === width && h === height) return;
            width = w;
            height = h;
            canvas.width = Math.round(w * dpr);
            canvas.height = Math.round(h * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            layout();
            buildStars();
        }
        function layout() {
            const C = props.current;
            pxPerAU = Math.min(width, height) * 0.5 / C.viewRadius;
            camDist = C.viewRadius * 3.1;
            D_NEAR = camDist * 5;
            D_FAR = camDist * 120;
            setApex(C.apex[0], C.apex[1]);
            setCamera(C.spin, C.tilt, C.roll);
        }
        /* --- pointer ---------------------------------------------------------- */ let pointerX = 0, pointerY = 0, camX = 0, camY = 0;
        function onPointer(ev) {
            if (!props.current.interactive) return;
            const rect = host.getBoundingClientRect();
            pointerX = ((ev.clientX - rect.left) / rect.width - 0.5) * 2;
            pointerY = ((ev.clientY - rect.top) / rect.height - 0.5) * 2;
        }
        function onLeave() {
            pointerX = 0;
            pointerY = 0;
        }
        /* --- the star at the centre ------------------------------------------ */ function drawSun(k, t) {
            const [r, g, b] = parseRGB(props.current.sunColor);
            const pulse = 1 + Math.sin(t * 2.1) * 0.02;
            // The real Sun is 0.0093 AU across — a fifth of a pixel here. What you
            // actually see at this range is its glare, so that is what we draw.
            const R = Math.max(5, Math.min(width, height) * 0.013) * pulse;
            // A tight halo, not a wash: the disc carries the light and the glow only
            // sits close around it.
            const haze = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 14);
            haze.addColorStop(0, `rgba(${r},${g},${b},${0.05 * k})`);
            haze.addColorStop(0.4, `rgba(255,190,110,${0.014 * k})`);
            haze.addColorStop(1, "rgba(255,160,80,0)");
            ctx.fillStyle = haze;
            ctx.beginPath();
            ctx.arc(cx, cy, R * 14, 0, TAU);
            ctx.fill();
            const outer = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 4.6);
            outer.addColorStop(0, `rgba(${r},${g},${b},${0.34 * k})`);
            outer.addColorStop(0.3, `rgba(255,222,160,${0.1 * k})`);
            outer.addColorStop(0.62, `rgba(255,196,110,${0.025 * k})`);
            outer.addColorStop(1, "rgba(255,180,90,0)");
            ctx.fillStyle = outer;
            ctx.beginPath();
            ctx.arc(cx, cy, R * 4.6, 0, TAU);
            ctx.fill();
            const bloom = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 2.3);
            bloom.addColorStop(0, `rgba(255,255,255,${k})`);
            bloom.addColorStop(0.42, `rgba(255,252,240,${0.7 * k})`);
            bloom.addColorStop(0.72, `rgba(${r},${g},${b},${0.22 * k})`);
            bloom.addColorStop(1, "rgba(255,210,140,0)");
            ctx.fillStyle = bloom;
            ctx.beginPath();
            ctx.arc(cx, cy, R * 2.3, 0, TAU);
            ctx.fill();
            ctx.fillStyle = "rgba(255,255,255,1)";
            ctx.beginPath();
            ctx.arc(cx, cy, R, 0, TAU);
            ctx.fill();
        }
        /* --- one frame -------------------------------------------------------- */ function render(t) {
            const C = props.current;
            const k = C.glow;
            // layout first: it sets the course, which the element maths needs.
            layout();
            syncElements();
            // ease the camera toward the pointer
            camX += (pointerX - camX) * 0.04;
            camY += (pointerY - camY) * 0.04;
            setCamera(C.spin + camX * 7, C.tilt + camY * 5, C.roll);
            dist = C.driftSpeed * t;
            cx = width * C.focus[0];
            cy = height * C.focus[1];
            // Put the Sun a little ahead of centre so the spirals have room behind it.
            project(DIR.x, DIR.y, DIR.z);
            if (P.ok) {
                const dxs = P.x - cx;
                const dys = P.y - cy;
                const len = Math.hypot(dxs, dys) || 1;
                const push = Math.min(width, height) * C.lead;
                cx += dxs / len * push;
                cy += dys / len * push;
            }
            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, width, height);
            ctx.globalCompositeOperation = "lighter";
            /* stars ------------------------------------------------------------- */ const dRef = D_NEAR * 3.3;
            const left = -width * 0.12;
            const right = width * 1.12;
            const top = -height * 0.12;
            const bottom = height * 1.12;
            for(let s = 0; s < starN; s++){
                // position relative to the Sun, which is where the camera rides
                project(sx[s] - DIR.x * dist, sy[s] - DIR.y * dist, sz[s] - DIR.z * dist);
                if (!P.ok || P.depth > D_FAR * 1.25) {
                    seedStar(s);
                    continue;
                }
                if (P.x < left || P.x > right || P.y < top || P.y > bottom) {
                    // gone off an edge: bring it back in on the opposite side
                    seedStar(s, undefined, P.x < left ? 1 : P.x > right ? 0 : P.y < top ? 3 : 2);
                    continue;
                }
                if (P.depth < D_NEAR * 0.75) continue;
                // apparent brightness falls off with distance, and fades out at the
                // far wall so nothing pops in
                const near = Math.min(1, (P.depth - D_NEAR * 0.75) / (D_NEAR * 0.6));
                const far = 1 - Math.max(0, (P.depth - D_FAR * 0.78) / (D_FAR * 0.32));
                let a = (0.2 + sMag[s] * 1.05) * Math.pow(dRef / P.depth, 0.8) * near * far;
                if (a <= 0.012) continue;
                a *= 0.82 + 0.18 * Math.sin(t * 9 + sPhase[s]);
                const col = sTint[s] === 1 ? "175,205,255" : sTint[s] === 2 ? "255,214,170" : "255,255,255";
                const size = Math.min(2.3, 0.55 + sMag[s] * 1.5 * Math.pow(dRef / P.depth, 0.5));
                ctx.fillStyle = `rgba(${col},${Math.min(1, a).toFixed(3)})`;
                if (size < 1.05) {
                    ctx.fillRect(P.x, P.y, size, size);
                } else {
                    ctx.beginPath();
                    ctx.arc(P.x, P.y, size * 0.5, 0, TAU);
                    ctx.fill();
                }
            }
            /* the Sun's own track through space ---------------------------------- */ if (C.showSunTrack) {
                // The planets' wakes are clipped for legibility; the Sun's is a
                // straight line, so it can run much further back without any clutter.
                const back = C.driftSpeed * C.trailYears * 1.1;
                project(0, 0, 0);
                const hx = P.x, hy = P.y;
                project(-DIR.x * back, -DIR.y * back, -DIR.z * back);
                if (P.ok) {
                    const grad = ctx.createLinearGradient(hx, hy, P.x, P.y);
                    grad.addColorStop(0, `rgba(255,246,214,${k})`);
                    grad.addColorStop(0.45, `rgba(255,206,110,${0.55 * k})`);
                    grad.addColorStop(1, "rgba(255,180,80,0)");
                    ctx.strokeStyle = grad;
                    ctx.lineCap = "round";
                    ctx.beginPath();
                    ctx.moveTo(hx, hy);
                    ctx.lineTo(P.x, P.y);
                    ctx.lineWidth = 11;
                    ctx.globalAlpha = 0.16;
                    ctx.stroke();
                    ctx.lineWidth = 4;
                    ctx.globalAlpha = 0.3;
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                    ctx.lineWidth = 1.8;
                    ctx.stroke();
                }
            }
            /* orbit guides ------------------------------------------------------- */ if (C.showOrbits) {
                for (const el of elems){
                    const [r, g, b] = el.rgb;
                    const steps = 160;
                    ctx.beginPath();
                    let started = false;
                    for(let q = 0; q <= steps; q++){
                        // step in eccentric anomaly, then back out the mean anomaly
                        const E = q / steps * TAU;
                        const M = E - el.e * Math.sin(E);
                        helio(el, M, C.compress);
                        project(R3.x, R3.y, R3.z);
                        if (!P.ok) {
                            started = false;
                            continue;
                        }
                        if (!started) {
                            ctx.moveTo(P.x, P.y);
                            started = true;
                        } else ctx.lineTo(P.x, P.y);
                    }
                    // a soft wide pass under a thin bright one, so the line glows
                    ctx.strokeStyle = `rgba(${r},${g},${b},${0.045 * k})`;
                    ctx.lineWidth = 4;
                    ctx.stroke();
                    ctx.strokeStyle = `rgba(${r},${g},${b},${0.3 * k})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
            const shots = [];
            for (const el of elems){
                const [r, g, b] = el.rgb;
                const bright = (el.p.glow ?? 1) * k;
                // A wake is a window on the past, the same window for every planet —
                // except that Mercury would wind 5 coils into a scribble, so fast
                // planets get theirs clipped to a few turns.
                const span = Math.min(C.trailYears, C.maxTurns * el.period);
                const turns = span / el.period;
                // Enough samples to keep the tight coils smooth. A stretched orbit
                // needs more: sampling runs on even steps of time, and a planet covers
                // far more ground per step near perihelion.
                const N = Math.max(48, Math.min(360, Math.ceil(turns * 46 * (1 + 2.2 * el.e)) + 48));
                const xs = new Float64Array(N + 1);
                const ys = new Float64Array(N + 1);
                const okArr = new Uint8Array(N + 1);
                for(let q = 0; q <= N; q++){
                    const age = (1 - q / N) * span; // years back from now
                    const M = el.M0 + el.n * (t - age);
                    helio(el, M, C.compress);
                    // where the planet really was: its place around the Sun at that
                    // moment, minus how far the Sun has moved since. Ellipse plus drift
                    // is a helix, which is the track a planet actually cuts in space.
                    const back = C.driftSpeed * age;
                    project(R3.x - DIR.x * back, R3.y - DIR.y * back, R3.z - DIR.z * back);
                    xs[q] = P.x;
                    ys[q] = P.y;
                    okArr[q] = P.ok ? 1 : 0;
                    if (q === N && P.ok) {
                        shots.push({
                            el,
                            x: P.x,
                            y: P.y,
                            depth: P.depth,
                            s: P.s
                        });
                    }
                }
                const stroke = (from, to, alpha, wide)=>{
                    ctx.strokeStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
                    ctx.lineWidth = wide;
                    ctx.beginPath();
                    let started = false;
                    for(let q = from; q <= to; q++){
                        if (!okArr[q]) {
                            started = false;
                            continue;
                        }
                        if (!started) {
                            ctx.moveTo(xs[q], ys[q]);
                            started = true;
                        } else ctx.lineTo(xs[q], ys[q]);
                    }
                    ctx.stroke();
                };
                // The soft halo first, as two unbroken paths near the head.
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                stroke(Math.floor(N * 0.72), N, 0.05 * bright, 6.5);
                stroke(Math.floor(N * 0.86), N, 0.05 * bright, 3);
                // Then the line itself, one segment at a time, each with its own
                // alpha. That gives as many steps in the fade as there are samples —
                // hundreds — instead of the handful you get from stroking the whole
                // path a few times over, where the steps land unevenly and read as
                // breaks. Butt ends are what keeps it seamless: two round ends meeting
                // at a joint would overlap and light up as a bead.
                ctx.lineCap = "butt";
                ctx.lineWidth = 1.3;
                for(let q = 0; q < N; q++){
                    if (!okArr[q] || !okArr[q + 1]) continue;
                    const f = (q + 1) / N; // 0 at the tail, 1 at the planet
                    const a = Math.pow(f, 2.6) * 0.95 * bright;
                    if (a < 0.005) continue; // the tail is already invisible here
                    ctx.strokeStyle = `rgba(${r},${g},${b},${a.toFixed(3)})`;
                    ctx.beginPath();
                    ctx.moveTo(xs[q], ys[q]);
                    ctx.lineTo(xs[q + 1], ys[q + 1]);
                    ctx.stroke();
                }
            }
            /* bodies, back to front around the Sun -------------------------------- */ shots.sort((p, q)=>q.depth - p.depth);
            const sizeScale = Math.min(width, height) / 660;
            const drawShot = (o)=>{
                const depth = Math.min(1.3, Math.max(0.5, o.s));
                const size = o.el.p.size * depth * sizeScale;
                const bright = (o.el.p.glow ?? 1) * k;
                const R = size * 3.3;
                ctx.globalAlpha = Math.min(1, 0.9 * bright);
                ctx.drawImage(glowSprite(o.el.p.color), o.x - R, o.y - R, R * 2, R * 2);
                ctx.globalAlpha = 1;
                ctx.fillStyle = "rgba(255,255,255,0.95)";
                ctx.beginPath();
                ctx.arc(o.x, o.y, size * 0.5, 0, TAU);
                ctx.fill();
            };
            let idx = 0;
            while(idx < shots.length && shots[idx].depth > camDist)drawShot(shots[idx++]);
            drawSun(k, t);
            while(idx < shots.length)drawShot(shots[idx++]);
            ctx.globalCompositeOperation = "source-over";
            /* the veil that copy sits on ----------------------------------------- */ if (C.scrim !== "none") {
                const s = Math.max(0, Math.min(1, C.scrimStrength));
                const g = C.scrim === "left" ? ctx.createLinearGradient(0, 0, width, 0) : C.scrim === "right" ? ctx.createLinearGradient(width, 0, 0, 0) : C.scrim === "top" ? ctx.createLinearGradient(0, 0, 0, height) : ctx.createLinearGradient(0, height, 0, 0);
                // Heavy at the edge, then off quickly — a straight ramp would grey the
                // whole frame and flatten the picture. Sampled at twelve stops rather
                // than three: with only a few, the slope changes at each one and the
                // eye picks the kink out as a faint vertical band.
                for(let q = 0; q <= 12; q++){
                    const x = q / 12;
                    g.addColorStop(x, `rgba(0,0,0,${(s * Math.pow(1 - x, 2.4)).toFixed(4)})`);
                }
                ctx.fillStyle = g;
                ctx.fillRect(0, 0, width, height);
            }
        }
        /* --- loop ------------------------------------------------------------- */ function tick(now) {
            if (!running) return;
            raf = requestAnimationFrame(tick);
            if (!visible) {
                lastFrame = now;
                return;
            }
            const dt = lastFrame ? Math.min(0.05, (now - lastFrame) / 1000) : 0;
            lastFrame = now;
            if (!props.current.paused && !reduced) {
                years += dt / Math.max(0.1, props.current.yearSeconds);
            }
            render(years);
        }
        resize();
        render(years);
        if (!reduced) raf = requestAnimationFrame(tick);
        const ro = new ResizeObserver(()=>{
            resize();
            if (reduced || props.current.paused) render(years);
        });
        ro.observe(host);
        const io = new IntersectionObserver((entries)=>{
            visible = entries[0]?.isIntersecting ?? true;
        }, {
            threshold: 0
        });
        io.observe(host);
        const onVisibility = ()=>{
            visible = !document.hidden;
            lastFrame = 0;
        };
        document.addEventListener("visibilitychange", onVisibility);
        host.addEventListener("pointermove", onPointer);
        host.addEventListener("pointerleave", onLeave);
        return ()=>{
            running = false;
            cancelAnimationFrame(raf);
            ro.disconnect();
            io.disconnect();
            document.removeEventListener("visibilitychange", onVisibility);
            host.removeEventListener("pointermove", onPointer);
            host.removeEventListener("pointerleave", onLeave);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: hostRef,
        className: `relative isolate h-full w-full overflow-hidden bg-black ${className}`,
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                "aria-hidden": "true",
                className: "absolute inset-0 h-full w-full"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/orbital-hero-section.tsx",
                lineNumber: 959,
                columnNumber: 7
            }, this),
            children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 h-full w-full",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/orbital-hero-section.tsx",
                lineNumber: 960,
                columnNumber: 19
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/orbital-hero-section.tsx",
        lineNumber: 954,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = OrbitalHeroSection;
}),
];

//# sourceMappingURL=_1wx4r01._.js.map