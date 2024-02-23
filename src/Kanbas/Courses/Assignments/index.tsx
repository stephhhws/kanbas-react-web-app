import React from "react";
import { FaCheckCircle, FaPlusCircle, FaPlus, FaEllipsisV, FaPencilAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (

      <div className="list-group mb-3 me-5" style={{ borderRadius: '0' }}>
        <div className="d-flex justify-content-between align-items-center list-group-item"
          style={{ backgroundColor: 'lightgrey' }}>
          <div className="d-flex align-items-center">
            <FaEllipsisV className="me-2" />
            <h3 className="mb-0">Assignments</h3>
          </div>
          <div>
            <span className="border rounded px-2">40% of Total</span>
            <button className="btn btn-light me-2"><FaPlus /></button>
            <button className="btn btn-light me-2"><FaEllipsisV /></button>
          </div>
        </div>
        {assignmentList.map((assignment) => (
          <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item list-group-item-action"
            key={assignment._id}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <FaEllipsisV className="me-2" />
                <FaPencilAlt className="me-2" />
                <div>
                  <h5 className="mb-1">{assignment.title}</h5>
                  <p className="mb-0">Multiple modules | Not available yet | 100pts</p>
                </div>
              </div>
              <div>
                <FaCheckCircle className="me-2" />
                <FaEllipsisV className="me-2" />
              </div>
            </div>
          </Link>
        ))}
      </div>

  );
}
export default Assignments;