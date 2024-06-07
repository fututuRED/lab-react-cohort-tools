import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import StudentCard from "../components/StudentCard";

import studentsData from "../assets/students.json";

function HomePage() {
  // eslint-disable-next-line no-unused-vars
  const [students, setStudents] = useState(studentsData);
  const navigate = useNavigate();

  const handleStudentClick = (studentId) => {
    navigate(`/students/${studentId}`);
  };

  return (
    <div className="border-2 border-rose-500 m-2">
      <h1>Home Page</h1>
      <div className="flex justify-between items-center p-2 font-bold border-b w-full">
        <span
          className="flex items-center justify-center"
          style={{ flexBasis: "20%" }}
        >
          Image
        </span>
        <span style={{ flexBasis: "20%" }}>Name</span>
        <span style={{ flexBasis: "20%" }}>Program</span>
        <span style={{ flexBasis: "20%" }}>Email</span>
        <span style={{ flexBasis: "20%" }}>Phone</span>
      </div>

      {students &&
        students.map((student) => {
          return (
            <div
              key={student._id}
              onClick={() => handleStudentClick(student._id)}
            >
              <StudentCard key={student._id} {...student} />
            </div>
          );
        })}
    </div>
  );
}

export default HomePage;
