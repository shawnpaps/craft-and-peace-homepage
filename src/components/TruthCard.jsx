// TODO: pick one of four {oldStory, truth} pairs at random on mount
// TODO: render oldStory with strikethrough, muted color (text-paper-dim, line-through)
// TODO: render truth below it, plain weight, text-paper, slightly larger
// TODO: optional — a subtle fade/flip transition from oldStory to truth on mount
import { useState, useEffect } from "react";

const REFRAMES = [
  {
    oldStory:
      "I owe it to myself to make money from photography — I've spent too much on gear not to.",
    truth:
      "Guitars don't make me feel this way. Audio gear doesn't make me feel this way. So why should photography gear?",
  },
  {
    oldStory: "Photography is glamorous. Tech is just a cash grab.",
    truth:
      "Most of my time is spent coding, working with AI, nerding out over new tools. That says a lot.",
  },
  {
    oldStory: "Being booked solid with shoots is the goal.",
    truth:
      "That sounds like a one-way ticket to burnout. I love my studio and working remotely. I want to shoot on my own terms.",
  },
  {
    oldStory: "Not knowing how to start outreach means software isn't my path.",
    truth:
      "Not knowing is part of the process. There's room for my studio in the market — I just have to do the work to find the clients.",
  },
  {
    oldStory: "If I'm not booked, I'm not a real photographer.",
    truth:
      "Photography exists in my life as a creative outlet, not a scoreboard.",
  },
  {
    oldStory: "AI will replace what I do.",
    truth:
      "I'm a dev because I like solving problems. That doesn't go away — it multiplies.",
  },
  {
    oldStory: "Likes on Instagram mean the work matters.",
    truth:
      "Meaningful work and visible work aren't the same thing. I already know which one I'm building.",
  },
  {
    oldStory: "I can do a lot of things, so I should chase all of them.",
    truth: "It's time to take some of the business ideas out of the fire.",
  },
  {
    oldStory: "I need outside validation to know I'm on the right path.",
    truth:
      "I don't need outside validation to control my life. I can't please everyone.",
  },
  {
    oldStory:
      "Choosing software over photography-as-business means giving something up.",
    truth:
      "Software is the craft. Creating is the peace. Both stay — just not competing for the same job.",
  },
];

export default function TruthCard() {
  const [reframe, setReframe] = useState(
    REFRAMES[Math.floor(Math.random() * REFRAMES.length)],
  );

  useEffect(() => {
    setInterval(() => {
      setReframe(REFRAMES[Math.floor(Math.random() * REFRAMES.length)]);
    }, 10000);
  }, []);
  return (
    <div className="max-w-xl flex flex-col gap-2.5 text-center">
      {/* TODO */}
      <h1 className="text-paper-dim">{reframe.oldStory}</h1>
      <p className="text-paper text-xl font-bold">{reframe.truth}</p>
    </div>
  );
}
