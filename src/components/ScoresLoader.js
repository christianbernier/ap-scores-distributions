import React, { useEffect } from "react";

const scores = `2020,Japanese Lang. and Culture,0.539,0.096,0.201,0.076,0.088
2020,Biology,0.094,0.225,0.366,0.242,0.073
2020,Government and Politics US,0.153,0.162,0.251,0.218,0.216
2020,Government and Politics Comp.,0.243,0.273,0.184,0.173,0.127
2020,Music Theory,0.238,0.189,0.252,0.22,0.101
2020,Art History,0.156,0.246,0.277,0.214,0.107
2020,United States History,0.13,0.192,0.266,0.204,0.21
2020,Computer Science Principles,0.108,0.233,0.366,0.175,0.118
2020,Drawing,0.155,0.403,0.333,0.098,0.012
2020,2-D Art and Design,0.121,0.362,0.412,0.098,0.006
2020,3-D Art and Design,0.072,0.32,0.365,0.209,0.036
2020,AP Seminar,0.064,0.145,0.597,0.172,0.023
2020,AP Research,0.088,0.321,0.315,0.25,0.026
2019,Environmental Science,0.095,0.259,0.142,0.255,0.249
2019,Human Geography,0.107,0.183,0.201,0.169,0.339
2019,Macroeconomics,0.176,0.229,0.174,0.153,0.269
2019,Microeconomics,0.222,0.284,0.178,0.124,0.192
2019,Physics 1 - Algebra Based,0.062,0.178,0.206,0.293,0.261
2019,Physics 2 - Algebra Based,0.126,0.198,0.311,0.278,0.087
2019,Physics C E&M,0.346,0.226,0.139,0.178,0.111
2019,Physics C Mech.,0.359,0.272,0.2,0.104,0.084
2019,Computer Science A,0.3,0.221,0.208,0.118,0.183
2019,English Literature,0.062,0.159,0.3,0.343,0.156
2019,Art History,0.1,0.3,0.269,0.244,0.117
2019,World History,0.087,0.2,0.283,0.289,0.151
2019,English Language,0.101,0.185,0.265,0.311,0.138
2019,European History,0.117,0.206,0.261,0.294,0.122
2019,Latin,0.131,0.193,0.307,0.241,0.128
2019,Spanish Literature,0.091,0.244,0.384,0.219,0.062
2019,2-D Art and Design,0.2,0.315,0.339,0.108,0.028
2019,3-D Art and Design,0.101,0.225,0.375,0.256,0.043
2019,Chemistry,0.107,0.162,0.277,0.236,0.218
2019,Drawing,0.208,0.334,0.369,0.078,0.011
2019,AP Research,0.108,0.223,0.431,0.193,0.045
2019,AP Seminar,0.068,0.146,0.593,0.2,0.023
2019,Psychology,0.202,0.254,0.188,0.137,0.2
2019,United States History,0.121,0.187,0.235,0.2,0.237
2019,Biology,0.071,0.221,0.354,0.267,0.087
2019,Computer Science Principles,0.136,0.211,0.4,0.2,0.083
2019,Japanese Lang. and Culture,0.382,0.128,0.2,0.092,0.158
2019,Calculus AB,0.189,0.188,0.206,0.234,0.183
2019,Calculus BC,0.432,0.185,0.198,0.136,0.049
2019,French Language,0.155,0.251,0.361,0.185,0.048
2019,Chinese Lang. and Culture,0.572,0.148,0.163,0.046,0.071
2019,Music Theory,0.209,0.2,0.245,0.236,0.1
2019,Statistics,0.145,0.2,0.267,0.197,0.211
2019,German Language,0.184,0.239,0.282,0.208,0.087
2019,Italian Language and Culture,0.118,0.177,0.351,0.259,0.095
2019,Spanish Language,0.249,0.346,0.295,0.093,0.017
2019,Government and Politics Comp.,0.222,0.248,0.192,0.187,0.2
2019,Government and Politics US,0.129,0.124,0.299,0.248,0.2
2018,Macroeconomics,0.18,0.23,0.17,0.17,0.25
2018,Microeconomics,0.19,0.28,0.20,0.16,0.17
2018,Environmental Science,0.09,0.24,0.15,0.26,0.26
2018,Human Geography,0.13,0.20,0.22,0.17,0.29
2018,Computer Science A,0.25,0.21,0.22,0.12,0.21
2018,Physics 1 - Algebra Based,0.05,0.15,0.20,0.29,0.31
2018,Physics 2 - Algebra Based,0.11,0.15,0.35,0.31,0.09
2018,Physics C E&M,0.35,0.23,0.14,0.17,0.11
2018,Physics C Mech.,0.29,0.28,0.21,0.13,0.10
2018,Calculus AB,0.19,0.17,0.21,0.22,0.20
2018,Calculus BC,0.40,0.19,0.21,0.15,0.05
2018,Chemistry,0.13,0.17,0.25,0.24,0.21
2018,Art History,0.13,0.24,0.28,0.26,0.10
2018,European History,0.12,0.20,0.26,0.30,0.12
2018,Government and Politics US,0.13,0.13,0.27,0.25,0.22
2018,Government and Politics Comp.,0.21,0.23,0.20,0.21,0.16
2018,United States History,0.10,0.18,0.23,0.23,0.26
2018,World History,0.09,0.20,0.28,0.29,0.15
2018,Spanish Literature,0.09,0.24,0.37,0.22,0.08
2018,AP Research,0.11,0.24,0.40,0.20,0.05
2018,AP Seminar,0.08,0.17,0.58,0.15,0.02
2018,Biology,0.07,0.22,0.33,0.29,0.10
2018,Computer Science Principles,0.14,0.22,0.37,0.20,0.08
2018,English Literature,0.06,0.15,0.27,0.36,0.17
2018,Statistics,0.14,0.21,0.25,0.16,0.23
2018,English Language,0.11,0.18,0.29,0.29,0.13
2018,Japanese Lang. and Culture,0.49,0.09,0.19,0.08,0.14
2018,Latin,0.15,0.20,0.32,0.23,0.10
2018,Chinese Lang. and Culture,0.66,0.12,0.13,0.04,0.05
2018,Music Theory,0.23,0.19,0.25,0.22,0.12
2018,Psychology,0.21,0.26,0.18,0.15,0.20
2018,2-D Art and Design,0.18,0.31,0.36,0.12,0.03
2018,3-D Art and Design,0.11,0.24,0.34,0.26,0.05
2018,Drawing,0.22,0.32,0.36,0.09,0.01
2018,French Language,0.16,0.26,0.35,0.19,0.05
2018,German Language,0.19,0.23,0.27,0.23,0.08
2018,Italian Language and Culture,0.16,0.18,0.33,0.22,0.10
2018,Spanish Language,0.23,0.35,0.30,0.10,0.01
2017,Macroeconomics,0.16,0.23,0.17,0.16,0.27
2017,Microeconomics,0.22,0.28,0.19,0.13,0.19
2017,Computer Science A,0.24,0.21,0.22,0.12,0.21
2017,Environmental Science,0.09,0.25,0.16,0.25,0.26
2017,Physics 1 - Algebra Based,0.05,0.16,0.20,0.30,0.29
2017,Physics 2 - Algebra Based,0.11,0.16,0.34,0.30,0.10
2017,Physics C E&M,0.28,0.25,0.16,0.18,0.13
2017,Physics C Mech.,0.35,0.28,0.16,0.13,0.08
2017,Art History,0.11,0.23,0.27,0.26,0.12
2017,Human Geography,0.11,0.17,0.21,0.17,0.34
2017,Government and Politics Comp.,0.24,0.25,0.21,0.18,0.13
2017,Government and Politics US,0.11,0.13,0.26,0.25,0.26
2017,Chemistry,0.09,0.16,0.26,0.27,0.22
2017,AP Seminar,0.07,0.15,0.65,0.12,0.02
2017,Spanish Literature,0.09,0.26,0.38,0.20,0.06
2017,United States History,0.11,0.18,0.23,0.24,0.25
2017,World History,0.09,0.20,0.27,0.30,0.15
2017,2-D Art and Design,0.19,0.31,0.35,0.13,0.02
2017,3-D Art and Design,0.12,0.22,0.38,0.25,0.03
2017,Biology,0.06,0.21,0.37,0.28,0.08
2017,Drawing,0.22,0.28,0.36,0.13,0.02
2017,English Literature,0.07,0.16,0.30,0.34,0.13
2017,Calculus AB,0.19,0.18,0.21,0.22,0.20
2017,Calculus BC,0.42,0.18,0.20,0.14,0.05
2017,English Language,0.09,0.18,0.28,0.31,0.14
2017,French Language,0.17,0.25,0.34,0.20,0.05
2017,Italian Language and Culture,0.18,0.19,0.34,0.23,0.06
2017,German Language,0.23,0.25,0.29,0.17,0.07
2017,Chinese Lang. and Culture,0.68,0.11,0.13,0.03,0.05
2017,Latin,0.13,0.20,0.31,0.23,0.14
2017,Music Theory,0.19,0.17,0.25,0.25,0.14
2017,Psychology,0.19,0.25,0.20,0.15,0.21
2017,AP Research,0.17,0.18,0.35,0.27,0.03
2017,Computer Science Principles,0.14,0.22,0.39,0.19,0.07
2017,Japanese Lang. and Culture,0.46,0.11,0.21,0.09,0.14
2017,Spanish Language,0.20,0.35,0.34,0.10,0.02
2017,Statistics,0.13,0.16,0.25,0.20,0.26
2017,European History,0.10,0.19,0.29,0.31,0.12`;

export default ({ update }) => {
  useEffect(() => {
    let allExams = [];

    for (const line of scores.split("\n")) {
      const element = line.split(",");
      let thisExam = {
        year: parseInt(element[0]),
        exam: element[1],
        "score-5": parseFloat(element[2]),
        "score-4": parseFloat(element[3]),
        "score-3": parseFloat(element[4]),
        "score-2": parseFloat(element[5]),
        "score-1": parseFloat(element[6]),
      };
      allExams.push(thisExam);
    }

    let exams = [];
    let currentYear = 2020;
    let currentExams = [];
    for (const e of allExams) {
      if (e.year !== currentYear) {
        exams.push({
          year: currentYear,
          exams: currentExams,
        });
        currentYear = e.year;
        currentExams = [];
        currentExams.push(e);
      } else {
        currentExams.push(e);
      }
    }

    exams.push({
      year: currentYear,
      exams: currentExams,
    });

    update(exams);
  }, []);

  return <></>;
};
