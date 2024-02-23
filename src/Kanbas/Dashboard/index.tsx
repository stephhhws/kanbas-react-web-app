import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";

function Dashboard() {
    return (
        <div className="p-4">
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses (12)</h2>
            <hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: "300px" }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top" style={{ maxHeight: "150px" }} />
                                <div className="card-body">
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                        className="card-title"
                                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        {course.name}
                                    </Link>
                                    <h5 className="card-subtitle mb-2 text-muted">{course.number}</h5>
                                    <h6 className="card-text mb-2 text-muted">202430_2 Spring2024</h6>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                                        Go
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;