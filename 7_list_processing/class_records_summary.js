/*
At the end of each term, faculty members need to prepare a class record summary for students based on the weighted scores of exams and exercises. In this practice problem, we will prepare one such summary from some provided student records.
Exams and Exercises

Grading areas include exams and exercises, with the following weights:
Grading Area 	Weight
Exam 	65%
Exercises 	35%

Each term has four exams, and several exercises. Every exam has a fixed maximum score of 100, while exercises have varied maximum score values and counts. The total maximum point value for all exercises in any term is always 100, regardless of how many exercises the students had to complete. For example, a term may have five exercises with possible score maximums of [30, 20, 10, 20, 20] while another term may have three exercises with possible score maximums of [20, 30, 50].

To determine a student's grade, we first determine the student's average score from the four exams, then sum all the exercise scores. We then apply the weights to compute the student's final percent grade. Finally, we determine the letter equivalent grade from the student's percent grade we just computed.
Percent Grade 	Letter Equivalent
93 - 100 	          A
85 - 92 	          B
77 - 84 	          C
69 - 76 	          D
60 - 68 	          E
0 - 59 	           F

For example, let's assume a term with three exercises with maximum scores of [20, 30, 50]. A student got [90, 80, 95, 71] on her four exams, and [20, 15, 40] on her exercises. To determine her final grade, we follow these steps:

    Compute the student's average exam score: (90 + 80 + 95 + 71) / 4 = 84
    Compute the student's total exercise score: 20 + 15 + 40 = 75
    Apply weights to determine the final percent grade: 84 * .65 + 75 * .35 = 80.85
    Round the percent grade to the nearest integer: 81
    Lookup the letter grade in the table above: C
    Combine the percent grade and letter grade: "81 (C)"
*/

var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  var result = { studentGrades: [], exams: [] };
  var student;
  var grade;
  var i;
  var examsLen = Object.values(scores)[0].scores.exams.length;
  var examsMatrix = Array(examsLen);

  for (i = 0; i < examsLen; i++) { examsMatrix[i] = []; } // initialize the empty matrix

  for (student in scores) {
    var gradeExam = scores[student].scores.exams.reduce((acc, num) => acc + num, 0) / examsLen;
    var gradeExercise = scores[student].scores.exercises.reduce((acc, num) => acc + num, 0);

    result.studentGrades.push(converGrade(Math.round(gradeExam * 0.65 + gradeExercise * 0.35)));
    scores[student].scores.exams.forEach((grd, idx) => (examsMatrix[idx]).push(grd));
  }

  examsMatrix.forEach(function(arr) {
    result.exams.push({
      average: (arr.reduce((acc, elm) => acc + elm, 0) / arr.length).toFixed(1),
      minimum: Math.min(...arr),
      maximum: Math.max(...arr),
    })
  });

  return result;
}

// alternatively, using map and transpose:
function generateClassRecordSummary(scores) {
  var examsExercises = Object.values(scores).map(function (obj) {
    return [obj.scores.exams, obj.scores.exercises];
  });
  var examsNum = examsExercises[0][0].length;
  var result = { studentGrades: [], exams: [] };

  examsExercises.forEach(function(elm, idx) {
    var gradeExam = elm[0].reduce((acc, num) => acc + num, 0) / examsNum;
    var gradeExercise = elm[1].reduce((acc, num) => acc + num, 0);
    result.studentGrades.push(converGrade(Math.round(gradeExam * 0.65 + gradeExercise * 0.35)));
  });

  transpose(examsExercises.map(arr => arr[0])).forEach(function(arr) {
    result.exams.push({
      average: (arr.reduce((acc, elm) => acc + elm, 0) / arr.length).toFixed(1),
      minimum: Math.min(...arr),
      maximum: Math.max(...arr),
    })
  });

  return result;
}

function transpose(matrix) {
  var out = [];
  for (var i = 0; i < matrix[0].length; i++) {
    out[i] = [];
    for (var j = 0; j < matrix.length; j++) {
      out[i][j] = matrix[j][i];
    }
  }
  return out;
}

// alternative transpose using map:
function transpose(matrix) {
  return matrix[0].map(function (_, j) {
    return matrix.map(function (_, i) {
      return matrix[i][j];
    });
  });
}


function converGrade(num) {
  if (num >= 93 ) {
    return String(num)+ ' (A)';
  } else if (num >= 85) {
    return String(num)+ ' (B)';
  } else if (num >= 77) {
    return String(num)+ ' (C)';
  } else if (num >= 69) {
    return String(num)+ ' (D)';
  } else if (num >= 60) {
    return String(num)+ ' (E)';
  } else {
    return String(num)+ ' (F)';
  }
}


console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
