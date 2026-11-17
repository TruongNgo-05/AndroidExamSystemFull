  function getCleanAILines(text) {
    if (!text) return [];

    return text
      .replace(/\*\*/g, "")
      .replace(/###/g, "")
      .replace(/\r/g, "")
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  }

  // =====================================================
  // GET CORRECT EXPLANATION
  // =====================================================

  export function getCorrectExplanation(text) {
    const lines = getCleanAILines(text);

    const correctIndex = lines.findIndex((line) =>
      line.toUpperCase().includes("GIẢI THÍCH ĐÁP ÁN ĐÚNG"),
    );

    const otherIndex = lines.findIndex((line) =>
      line.toUpperCase().includes("CÁC ĐÁP ÁN KHÁC"),
    );

    if (correctIndex === -1) {
      return text?.replace(/\*\*/g, "").trim();
    }

    const endIndex = otherIndex === -1 ? lines.length : otherIndex;

    return lines
      .slice(correctIndex + 1, endIndex)
      .join(" ")
      .trim();
  }

  // =====================================================
  // GET WRONG ANSWERS
  // =====================================================

  export function getWrongAnswers(text, answerIndex) {
    const lines = getCleanAILines(text);

    const otherIndex = lines.findIndex((line) =>
      line.toUpperCase().includes("CÁC ĐÁP ÁN KHÁC"),
    );

    if (otherIndex === -1) {
      return [];
    }

    const correctLetter = "ABCD"[answerIndex];

    return lines
      .slice(otherIndex + 1)
      .map((line) => {
        const match = line.match(/^([ABCD])\s*:\s*(.*)$/i);

        if (!match) {
          return null;
        }

        const letter = match[1].toUpperCase();

        const content = match[2].trim();

        // Chỉ lấy đáp án sai
        if (letter === correctLetter) {
          return null;
        }

        return {
          letter,
          content,
        };
      })
      .filter(Boolean);
  }

  // =====================================================
  // RENDER WRONG ANSWERS
  // =====================================================

