"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Fragment, useState } from "react";
import { Sidebar } from "./components/sidebar";

export default function Home() {
  const [text, setText] = useState("");
  const [toolset, setToolset] = useState("converters");

  const handleTextChange = (event: any) => {
    setText(event.target.value);
  };

  const makeUppercase = () => setText(text.toUpperCase());
  const makeLowercase = () => setText(text.toLowerCase());
  const makeCapitalize = () =>
    setText(
      text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
  const makeAlphabeticalSort = () => setText(text.split(" ").sort().join(" "));

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
              <Button onClick={() => makeUppercase()}>Uppercase</Button>
              <Button onClick={() => makeLowercase()}>Lowercase</Button>
              <Button onClick={() => makeCapitalize()}>Capitalize</Button>
            </Fragment>
          )}
          {toolset === "sorters" && (
            <Fragment>
              <Button onClick={() => makeAlphabeticalSort()}>
                Sort Alphabetically
              </Button>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
}
