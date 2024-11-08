"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  makeCapitalizeSentence,
  makeCapitalizeWord,
  makeLowercase,
  makeUppercase,
} from "@/lib/tools/converters";
import { makeAlphabeticalSort } from "@/lib/tools/sorter";
import { Fragment, useState } from "react";
import { Sidebar } from "./components/sidebar";

export default function Home() {
  const [text, setText] = useState("");
  const [toolset, setToolset] = useState("converters");

  const handleTextChange = (event: any) => {
    setText(event.target.value);
  };

  const transformText = (fn: (text: string) => string) => {
    setText(fn(text));
  };

  return (
    <Fragment>
      <Sidebar
        toolset={{
          value: toolset,
          set: setToolset,
        }}
      />
      <div className="p-8 border-e-4 border-border flex justify-center">
        <Textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Type or paste your text here"
        />
      </div>
      <div className="flex justify-center p-8">
        <div className="space-y-3">
          {toolset === "converters" && (
            <Fragment>
              <Button onClick={() => transformText(makeUppercase)}>
                Uppercase
              </Button>
              <Button onClick={() => transformText(makeLowercase)}>
                Lowercase
              </Button>
              <Button onClick={() => transformText(makeCapitalizeWord)}>
                Capitalize [Word]
              </Button>
              <Button onClick={() => transformText(makeCapitalizeSentence)}>
                Capitalize [Sentence]
              </Button>
            </Fragment>
          )}
          {toolset === "sorters" && (
            <Fragment>
              <Button onClick={() => transformText(makeAlphabeticalSort)}>
                Sort Alphabetically
              </Button>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
}
