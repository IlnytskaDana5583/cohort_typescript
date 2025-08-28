
import GlobalStyles from "./styles/GlobalStyles";

// Lessons
import Lesson_06 from "./lessons/Lesson_06/Lesson_06";
import Lesson_07 from "./lessons/Lesson_7/Lesson_07";
import Lesson_08 from "./lessons/Lesson_08/Lesson_08";
import Lesson_09 from "./lessons/Lesson_09/Lesson_09";

import Lesson_11 from "./lessons/Lesson_11/Lesson_11";

// Homeworks
import Homework_06 from "./homeworks/Homework_01/Homework_01";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* Lessons */}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}
      {/* <Lesson_08 /> */}
      <Lesson_09 />
              {/* <Lesson_11 /> */}
      {/* Homeworks */}
      {/* <Homework_07 /> */}
      {/* <Homework_08 /> */}
      {/* <Homework_09 /> */}
    </>
  );
}

export default App;