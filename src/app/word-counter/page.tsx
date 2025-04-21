"use client";
import { ChangeEvent, useMemo, useState } from "react";
import Layout from "@njaytools/components/Layout";

const WordCounter = () => {
  const [input, setScript] = useState<string>("");
  const [strictMode, setStrictMode] = useState(false); // toggle switch

  const wordCount = useMemo(() => {
    return input.trim().split(/\s+/).filter(Boolean).length;
  }, [input]);

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setScript(e.target.value);
  };

  return (
    <Layout
      title="Word Counter"
      description="Instantly count words, characters, and spaces in your text."
    >
      <div className="w-full max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Word Counter</h1>

        <textarea
          value={input}
          onChange={handleTextAreaChange}
          className="w-full min-h-[200px] sm:min-h-[300px] md:min-h-[400px] p-4 border rounded-lg resize-y bg-gray-50 dark:bg-gray-800 dark:text-white text-sm md:text-base"
          placeholder="Paste or type your text here..."
        />

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="strict"
            checked={strictMode}
            onChange={() => setStrictMode(!strictMode)}
            className="h-4 w-4"
          />
          <label
            htmlFor="strict"
            className="text-sm text-gray-700 dark:text-gray-300"
          >
            Only count alphanumeric words
          </label>
        </div>

        <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-300">
          <span>Words: {wordCount}</span>
          <span>Characters: {input.length}</span>
        </div>
      </div>
    </Layout>
  );
};

export default WordCounter;
