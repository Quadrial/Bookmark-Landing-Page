import React from "react";

import Manager from "../Components/Manager/Manager";
import { Bsimple } from "../Components/Simple/Bsimple";
import Download from "../Components/Download/Download";
import Question from "../Components/Questions/Question";


export const Bookmark = () => {
  return (
    <>
      <section className="px-12 lg:px-[300px]">
        <main>
          <Manager />
          <Bsimple />
          <Download />
          <Question />
        </main>
      </section>
    </>
  );
};
