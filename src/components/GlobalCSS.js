import React from "react";
import { css, Global } from "@emotion/core";
import { Helmet } from "react-helmet-async";

import Favicon from "../../favicon.png";
import ShareImage from "../../shareimage.png";

export default () => {
  return (
    <>
      <Helmet>
        <title>AP Scores Distributions</title>
        <link rel="shortcut icon" href={Favicon} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AP Scores Distributions" />
        <meta property="og:title" content="AP Scores Distributions" />
        <meta
          property="og:description"
          content="AP Scores Distributions provides analytics into how many students received certain scores on all AP exams."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:image" content={ShareImage}/>
        <meta
          property="description"
          content="AP Scores Distributions provides analytics into how many students received certain scores on all AP exams."
        />
      </Helmet>
      <Global
        styles={css`
          @import url("https://rsms.me/inter/inter.css");

          :root {
            --dark-background: #2d3748;
            --font-white: #f7fafc;
            font-family: "Inter", Arial, Helvetica, sans-serif;
          }

          body {
            padding: 0;
            margin: 0;
            background-color: #f7fafc;
            width: 100vw;
          }

          p {
            color: var(--dark-background);
          }

          a {
            color: #555;
          }

          .dots {
            width: 40px;
            height: 40px;
            border-radius: 100px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            margin-right: 10px;
          }

          .dots-text {
            display: inline-block;
            font-size: 24px;
            font-weight: 700;
            color: var(--font-white);
          }
        `}
      />
    </>
  );
};
