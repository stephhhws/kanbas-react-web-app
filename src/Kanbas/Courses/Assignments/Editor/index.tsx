import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle, FaEllipsisV, FaPlus, FaPencilAlt } from "react-icons/fa";

function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();
  const navigate = useNavigate();

  const assignment = assignments.find(a => a._id === assignmentId);

  const [assignmentName, setAssignmentName] = useState(assignment?.title || '');
  const [assignmentDescription, setAssignmentDescription] = useState('this is the description');
  const [points, setPoints] = useState('100');


  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="ms-5 me-5">
      <div className="d-flex justify-content-end">
        <span style={{ color: 'green' }}><FaCheckCircle />Published</span>
        <button type="button" className="btn btn-light"><FaEllipsisV /></button>
      </div>
      <hr />
      <form>
        <div className="mb-3">
          <label htmlFor="assignmentName" className="form-label">Assignment Name</label>
          <input
            type="text"
            className="form-control"
            id="assignmentName"
            value={assignmentName}
            onChange={(e) => setAssignmentName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="assignmentDescription" className="form-label">Assignment Description</label>
          <textarea
            className="form-control"
            id="assignmentDescription"
            value={assignmentDescription}
            onChange={(e) => setAssignmentDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="points" className="form-label">Points</label>
          <input
            type="text"
            className="form-control"
            id="points"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          />
        </div>


        <div className="d-flex justify-content-between">
          <button onClick={handleSave} className="btn btn-success ms-2 float-end">
            Save
          </button>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger float-end">
            Cancel
          </Link>

        </div>
      </form>
    </div>
  );
}

export default AssignmentEditor;
