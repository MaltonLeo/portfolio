import { useEffect, useState } from "react";

export default function useTypewriter(strings, speed = 55, pause = 900) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1); // 1: yozish, -1: o‘chirish

  useEffect(() => {
    let idx = dir === 1 ? 0 : strings[i].length;
    const s = strings[i];

    const t = setInterval(() => {
      idx += dir;
      setText(s.slice(0, idx));

      if (idx === s.length) {        // yozish tugadi
        clearInterval(t);
        setTimeout(() => setDir(-1), pause);
      }
      if (idx === 0 && dir === -1) { // o‘chirish tugadi
        clearInterval(t);
        setDir(1);
        setI((i + 1) % strings.length);
      }
    }, speed);

    return () => clearInterval(t);
  }, [i, dir, strings, speed, pause]);

  return text;
}
