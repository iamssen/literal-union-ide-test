import { ForegroundColor as WithImport } from "chalk";
import type { ForegroundColor as WithImportType } from "chalk";
import React from "react";

type A = "a" | "b" | "c" | string;
type B = typeof WithImportType | string;
type C = typeof WithImport | string;

// ❌ not works in VSCode 👍 works in WebStorm
const a: A = "";
// ❌ not works both in VSCode and WebStorm
const b: B = "";
// ❌ not works in VSCode 👍 works in WebStorm
const c: C = "";

function JSXComponent({ a, b, c }: { a: A; b: B; c: C }) {
  return (
    <>
      {a} / {b} / {c}
    </>
  );
}

// ❌ everything are not works in VSCode
// ❌ b is not works in WebStorm
const jsx = <JSXComponent a="" b="" c="" />;

// Conclusion
// 1. all cases not work in VSCode
// 2. some cases work in WebStorm
// https://github.com/microsoft/TypeScript/issues/29729
