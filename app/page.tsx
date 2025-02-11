"use client"

import { useEffect, useState } from 'react';

export default function Home() {
  const words = ["Hello, World!", "Welcome to the Blog of Babel!", "Enjoy."];
  const [currentWord, setCurrentWord] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [delay, setDelay] = useState(100);
  const [isErasing, setIsErasing] = useState(false);
  const [eraseDelay, setEraseDelay] = useState(100);

  useEffect(() => {
    if (!isTyping && !isErasing) return;

    const type = () => {
      if (isTyping) {
        let word = words[i];
        if (j < word.length) {
          setCurrentWord(prev => prev + word[j]);
          setJ(j + 1);
          setDelay(100);
        } else {
          if (i === words.length - 1) {
            setIsTyping(false);
            return; // Stop after the last sentence
          }
          setIsTyping(false);
          setIsErasing(true);
          setDelay(1500); // Delay before starting to erase
        }
      } else if (isErasing) {
        if (currentWord.length > 0) {
          setCurrentWord(prev => prev.slice(0, -1));
          setDelay(eraseDelay);
        } else {
          setIsErasing(false);
          setIsTyping(true);
          setI((i + 1) % words.length);
          setJ(0);
          setDelay(250); // Delay before starting to type next word
        }
      }
    };

    const timeout = setTimeout(type, delay);
    return () => clearTimeout(timeout);
  }, [currentWord, i, j, words, isTyping, isErasing, delay, eraseDelay]);

  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 id="typewriter" className="text-4xl font-bold whitespace-pre-line text-center text-[#00ff00]">
          <span className='bg-black'>
            {currentWord}
          </span>
        </h1>
      </div>
    </div>
  );
}
