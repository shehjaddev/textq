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
  countCharacters,
  countLines,
  countSentences,
  countWords,
} from "@/lib/tools/counters";
import { extractEmails, extractURLs } from "@/lib/tools/extractors";
import {
  generate10CUID2s,
  generate10CUIDs,
  generate10Emails,
  generate10Gmails,
  generate10Passwords,
  generate10UUIDs,
  generateCUID,
  generateCUID2,
  generateEmail,
  generateGmail,
  generatePassword,
  generateUUID,
} from "@/lib/tools/generators";
import {
  makeAscendingLineSort,
  makeAscendingWordSort,
  makeDescendingLineSort,
  makeDescendingWordSort,
  makeReverseLine,
  makeShuffle,
} from "@/lib/tools/sorters";
import { Fragment, useEffect, useState } from "react";
import { Sidebar } from "./components/sidebar";

export default function Home() {
  const [text, setText] = useState("");
  const [toolset, setToolset] = useState("converters");
  const [isCopied, setIsCopied] = useState(false);

  const handleTextChange = (event: any) => {
    setText(event.target.value);
  };

  const apply = (fn: (text: string) => string) => {
    setText(fn(text));
  };

  const applyAndCopy = (fn: (text: string) => string) => {
    setText(fn(text));
    setIsCopied(true);
  };

  useEffect(() => {
    if (isCopied) {
      navigator.clipboard.writeText(text);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }, [isCopied]);

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
            className="w-[75px]"
            onClick={() => {
              setIsCopied(true);
            }}
          >
            {isCopied ? "Copied!" : "Copy"}
          </Button>
          <Button className="w-[75px]" onClick={() => setText("")}>
            Clear
          </Button>
        </div>
      </div>
      <div className="flex justify-center p-8">
        <div className="space-y-3">
          {toolset === "converters" && (
            <Fragment>
              <Button className="w-full" onClick={() => apply(makeUppercase)}>
                Uppercase
              </Button>
              <Button className="w-full" onClick={() => apply(makeLowercase)}>
                Lowercase
              </Button>
              <Button
                className="w-full"
                onClick={() => apply(makeCapitalizeWord)}
              >
                Capitalize [Word]
              </Button>
              <Button
                className="w-full"
                onClick={() => apply(makeCapitalizeSentence)}
              >
                Capitalize [Sentence]
              </Button>
            </Fragment>
          )}
          {toolset === "sorters" && (
            <Fragment>
              <Button
                className="w-full"
                onClick={() => apply(makeAscendingWordSort)}
              >
                Ascending [Word]
              </Button>
              <Button
                className="w-full"
                onClick={() => apply(makeDescendingWordSort)}
              >
                Descending [Word]
              </Button>
              <Button
                className="w-full"
                onClick={() => apply(makeAscendingLineSort)}
              >
                Ascending [Line]
              </Button>
              <Button
                className="w-full"
                onClick={() => apply(makeDescendingLineSort)}
              >
                Descending [Line]
              </Button>
              <Button className="w-full" onClick={() => apply(makeReverseLine)}>
                Reverse [Line]
              </Button>
              <Button className="w-full" onClick={() => apply(makeShuffle)}>
                Shuffle
              </Button>
            </Fragment>
          )}
          {toolset === "counters" && (
            <Fragment>
              <Button className="w-full" onClick={() => apply(countCharacters)}>
                Characters
              </Button>
              <Button className="w-full" onClick={() => apply(countWords)}>
                Words
              </Button>
              <Button className="w-full" onClick={() => apply(countSentences)}>
                Sentences
              </Button>
              <Button className="w-full" onClick={() => apply(countLines)}>
                Lines
              </Button>
            </Fragment>
          )}
          {toolset === "generators" && (
            <Fragment>
              <div className="flex justify-between space-x-2">
                <Button
                  className="w-full"
                  onClick={() => applyAndCopy(generateUUID)}
                >
                  UUID
                </Button>
                <Button onClick={() => apply(generate10UUIDs)}>10x</Button>
              </div>
              <div className="flex justify-between space-x-2">
                <Button
                  className="w-full"
                  onClick={() => applyAndCopy(generateCUID)}
                >
                  CUID
                </Button>
                <Button onClick={() => apply(generate10CUIDs)}>10x</Button>
              </div>
              <div className="flex justify-between space-x-2">
                <Button
                  className="w-full"
                  onClick={() => applyAndCopy(generateCUID2)}
                >
                  CUID2
                </Button>
                <Button onClick={() => apply(generate10CUID2s)}>10x</Button>
              </div>
              <div className="flex justify-between space-x-2">
                <Button
                  className="w-full"
                  onClick={() => applyAndCopy(generateEmail)}
                >
                  Email
                </Button>
                <Button onClick={() => apply(generate10Emails)}>10x</Button>
              </div>
              <div className="flex justify-between space-x-2">
                <Button
                  className="w-full"
                  onClick={() => applyAndCopy(generateGmail)}
                >
                  Gmail
                </Button>
                <Button onClick={() => apply(generate10Gmails)}>10x</Button>
              </div>
              <div className="flex justify-between space-x-2">
                <Button
                  className="w-full"
                  onClick={() => applyAndCopy(generatePassword)}
                >
                  Password
                </Button>
                <Button onClick={() => apply(generate10Passwords)}>10x</Button>
              </div>
            </Fragment>
          )}
          {toolset === "extractors" && (
            <Fragment>
              <Button className="w-full" onClick={() => apply(extractEmails)}>
                Email
              </Button>
              <Button className="w-full" onClick={() => apply(extractURLs)}>
                URL
              </Button>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
}
