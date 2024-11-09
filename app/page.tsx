"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  makeCapitalizeSentence,
  makeCapitalizeWord,
  makeLowercase,
  makeUppercase,
} from "@/lib/tools/converters";
import {
  makeAscendingLineSort,
  makeAscendingWordSort,
  makeDescendingLineSort,
  makeDescendingWordSort,
} from "@/lib/tools/sorter";
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
      <div className="p-8 border-e-4 border-border flex justify-center space-x-4">
        <Textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Type or paste your text here"
        />
        <div className="flex flex-col space-y-3">
          <Button
            onClick={() => {
              navigator.clipboard.writeText(text);
              alert("Text copied to clipboard");
            }}
          >
            Copy
          </Button>
          <Button onClick={() => setText("")}>Clear</Button>
        </div>
      </div>
      <div className="flex justify-center p-8">
        <div className="space-y-3">
          {toolset === "converters" && (
            <Fragment>
              <Button
                className="w-full"
                onClick={() => transformText(makeUppercase)}
              >
                Uppercase
              </Button>
              <Button
                className="w-full"
                onClick={() => transformText(makeLowercase)}
              >
                Lowercase
              </Button>
              <Button
                className="w-full"
                onClick={() => transformText(makeCapitalizeWord)}
              >
                Capitalize [Word]
              </Button>
              <Button
                className="w-full"
                onClick={() => transformText(makeCapitalizeSentence)}
              >
                Capitalize [Sentence]
              </Button>
            </Fragment>
          )}
          {toolset === "sorters" && (
            <Fragment>
              <Button
                className="w-full"
                onClick={() => transformText(makeAscendingWordSort)}
              >
                Ascending [Word]
              </Button>
              <Button
                className="w-full"
                onClick={() => transformText(makeDescendingWordSort)}
              >
                Descending [Word]
              </Button>
              <Button
                className="w-full"
                onClick={() => transformText(makeAscendingLineSort)}
              >
                Ascending [Line]
              </Button>
              <Button
                className="w-full"
                onClick={() => transformText(makeDescendingLineSort)}
              >
                Descending [Line]
              </Button>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
}
