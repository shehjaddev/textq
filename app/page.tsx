"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Fragment, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

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
      <div className="p-10 flex justify-center items-center">
        <div className="w-1/3">
          <div className="flex flex-col justify-center items-center space-y-3">
            <h1 className="text-3xl font-bold">Text Transformer</h1>{" "}
            <div className="w-full space-y-3 flex justify-center items-center">
              <Textarea
                value={text}
                onChange={handleTextChange}
                placeholder="Type or paste your text here"
              />
            </div>
            <div>
              <div className="w-full space-x-3 flex">
                <Button onClick={() => makeUppercase()}>Uppercase</Button>
                <Button onClick={() => makeLowercase()}>Lowercase</Button>
                <Button onClick={() => makeCapitalize()}>Capitalize</Button>
                <Button onClick={() => makeAlphabeticalSort()}>
                  Sort Alphabetically
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
