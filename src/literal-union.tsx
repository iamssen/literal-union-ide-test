import { ForegroundColor as WithImport } from "chalk";
import type { ForegroundColor as WithImportType } from "chalk";
import React from "react";
import type { LiteralUnion } from "type-fest";

type A = LiteralUnion<"a" | "b" | "c", string>;
type B = LiteralUnion<typeof WithImportType, string>;
type C = LiteralUnion<typeof WithImport, string>;

// 👍 works both in VSCode and WebStorm
const a: A = "";
// 👍 works in VSCode ❌ not works in WebStorm
const b: B = "";
// 👍 works both in VSCode and WebStorm
const c: C = "";

function JSXComponent({ a, b, c }: { a: A; b: B; c: C }) {
  return (
    <>
      {a} / {b} / {c}
    </>
  );
}

// 👍 works all in VSCode
// ❌ not works all in WebStorm
const jsx = <JSXComponent a="" b="" c="" />;

// Conclusion
// 1. all cases work fine in VSCode
// 2. some cases not work in WebStorm
