import React, { useState } from "react";
import { css } from "@emotion/core";

import GlobalCSS from "../components/GlobalCSS";
import DistroBar from "../components/DistroBar";
import ScoresLoader from "../components/ScoresLoader";

export default () => {

  const[scores, setScores] = useState([]);

  return (
    <>
      <ScoresLoader
        update={data => setScores(data)}
      />
      <GlobalCSS />
      <div
        css={css`
          width: 100vw;
          height: 100vh;
          display: grid;
          grid-template-areas:
            "content"
            "footer";
          grid-template-rows: auto auto;
          grid-template-columns: 100vw;
        `}
      >
        <div
          css={css`
            grid-area: content;
            padding: 0 40px;
            margin-bottom: 50px;
          `}
        >
          <p
            css={css`
              font-size: 42px;
              font-weight: 900;
            `}
          >
            AP Scores Distributions
          </p>
          <p
            css={css`
              margin-top: -30px;
            `}
          >
            See the distributions of scores on every AP exam in 2021 (and a few
            years back). Distributions are updated quickly after they are
            released.
          </p>

          <div
            css={css`
              width: 100%;
              height: 50px;
            `}
          >
            <div
              css={css`
                background-color: #13a130;
              `}
              className="dots"
            >
              <p className="dots-text">5</p>
            </div>
            <div
              css={css`
                background-color: #5ae877;
              `}
              className="dots"
            >
              <p className="dots-text">4</p>
            </div>
            <div
              css={css`
                background-color: #f0de54;
              `}
              className="dots"
            >
              <p className="dots-text">3</p>
            </div>
            <div
              css={css`
                background-color: #f0a029;
              `}
              className="dots"
            >
              <p className="dots-text">2</p>
            </div>
            <div
              css={css`
                background-color: #ed312b;
              `}
              className="dots"
            >
              <p className="dots-text">1</p>
            </div>
          </div>

          {scores.map((e) => {

            return (
              <>
                <p
                  css={css`
                    font-weight: 700;
                    font-size: 46px;
                    margin-bottom: -15px;
                    margin-top: 15px;
                  `}
                >
                  {e.year}
                </p>
                {e.exams.map((individualExam) => {
                  return (
                    <>
                      <p
                        css={css`
                          font-weight: 700;
                          font-size: 28px;
                          margin-bottom: 5px;
                        `}
                      >
                        {individualExam.exam}
                      </p>
                      <DistroBar
                        width="80vw"
                        height={30}
                        scores={individualExam}
                      />
                      <div
                        css={css`
                          margin-bottom: 10px;
                        `}
                      />
                    </>
                  );
                })}
              </>
            );
          })}
        </div>
        <div
          css={css`
            grid-area: footer;
            background-color: #e2e8f0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 90vw;
            margin: 0 auto;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
          `}
        >
          <p
            css={css`
              font-size: 15px;
              color: var(--dark-background);
              width: 80%;
              text-align: center;
            `}
          >
            AP Scores Distributions v.1.0.1 © 2020–2021 to Christian Bernier — AP and Advanced
            Placement are registered trademarks of the College Board, which was
            not involved in the production of, and does not endorse, this
            product. — All data is from <a
              href="http://twitter.com/AP_Trevor"
              target="_blank"
              rel="noreferrer"
            >
            @AP_Trevor
            </a> on Twitter and <a
              href="https://www.totalregistration.net/AP-Exam-Registration-Service/AP-Exam-Score-Distributions.php"
              target="_blank"
              rel="noreferrer"
            >
            totalregistration.net
            </a>.
          </p>
        </div>
      </div>
    </>
  );
};
