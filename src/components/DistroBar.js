import React, { useState } from "react";
import { css } from "@emotion/core";

export default ({ width, height, scores }) => {
  const borderRadius = "5px";

  const score5Width = (scores["score-5"] + scores["score-4"] + scores["score-3"] + scores["score-2"] + scores["score-1"]) / (scores["score-5"] + scores["score-4"] + scores["score-3"] + scores["score-2"] + scores["score-1"]);
  const score4Width = (scores["score-5"] + scores["score-4"] + scores["score-3"] + scores["score-2"]) / (scores["score-5"] + scores["score-4"] + scores["score-3"] + scores["score-2"] + scores["score-1"]);
  const score3Width = (scores["score-5"] + scores["score-4"] + scores["score-3"]) / (scores["score-5"] + scores["score-4"] + scores["score-3"] + scores["score-2"] + scores["score-1"]);
  const score2Width = (scores["score-5"] + scores["score-4"]) / (scores["score-5"] + scores["score-4"] + scores["score-3"] + scores["score-2"] + scores["score-1"]);
  const score1Width = (scores["score-5"]) / (scores["score-5"] + scores["score-4"] + scores["score-3"] + scores["score-2"] + scores["score-1"]);

  return (
    <>
      <div
        css={css`
          width: ${width};
          height: calc(1px * ${height});
          border-radius: ${borderRadius};
        `}
      >
        <div
          css={css`
            height: 100%;
            width: calc(
              100% *
                ${score5Width}
            );
            background-color: #ed312b;
            border-radius: ${borderRadius};
          `}
        />
        <div
          css={css`
            height: 100%;
            width: calc(
              100% *
                ${score4Width}
            );
            background-color: #f0a029;
            border-radius: ${borderRadius};
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            margin-top: calc(1px * ${height} * -1);
          `}
        />
        <div
          css={css`
            height: 100%;
            width: calc(
              100% *
                ${score3Width}
            );
            background-color: #f0de54;
            border-radius: ${borderRadius};
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            margin-top: calc(1px * ${height} * -1);
          `}
        />
        <div
          css={css`
            height: 100%;
            width: calc(100% * ${score2Width});
            background-color: #5ae877;
            border-radius: ${borderRadius};
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            margin-top: calc(1px * ${height} * -1);
          `}
        />

        <div
          css={css`
            height: 100%;
            width: calc(100% * ${score1Width});
            background-color: #13a130;
            border-radius: ${borderRadius};
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            margin-top: calc(1px * ${height} * -1);
          `}
        />
      </div>

      <p
        css={css`
          margin-top: 5px;
          font-weight: 600;
        `}
      >
        {Math.round(scores["score-5"] * 10000) / 100}%
      </p>

      <p
        css={css`
          margin-top: -36px;
          margin-left: calc(80vw * ${score1Width});
          font-weight: 600;
        `}
      >
        {Math.round(scores["score-4"] * 10000) / 100}%
      </p>

      <p
        css={css`
          margin-top: -36px;
          margin-left: calc(80vw * ${score2Width});
          font-weight: 600;
        `}
      >
        {Math.round(scores["score-3"] * 10000) / 100}%
      </p>

      <p
        css={css`
          margin-top: -36px;
          margin-left: calc(80vw * ${score3Width});
          font-weight: 600;
        `}
      >
        {Math.round(scores["score-2"] * 10000) / 100}%
      </p>

      <p
        css={css`
          margin-top: -36px;
          margin-left: calc(80vw * ${score4Width});
          font-weight: 600;
        `}
      >
        {Math.round(scores["score-1"] * 10000) / 100}%
      </p>
    </>
  );
};
