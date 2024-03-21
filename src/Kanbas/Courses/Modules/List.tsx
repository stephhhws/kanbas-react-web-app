import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) =>
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) =>
    state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <>

      <form className="border rounded p-3">
        <ul className="list-group wd-modules">

          <li className="list-group-item">
            <div className="d-flex flex-row m-3">
              <div className="d-flex flex-column">
                <input
                className="mb-2"
                  value={module.name}
                  onChange={(e) =>
                    dispatch(setModule({ ...module, name: e.target.value }))
                  } />
                <textarea
                  value={module.description}
                  onChange={(e) =>
                    dispatch(setModule({ ...module, description: e.target.value }))
                  } />
              </div>
                <button
                  onClick={() => dispatch(addModule({ ...module, course: courseId }))}
                  className="btn btn-primary mt-5">
                  Add
                </button>
                <button
                  onClick={() => dispatch(updateModule(module))}
                  className="btn btn-success mt-5">
                  Update
                </button>
            </div>
          </li>



          {moduleList.filter((module) => module.course === courseId).map((module, index) =>
          (
            <li key={index}
              className="list-group-item">
              <button
                onClick={() => dispatch(setModule(module))} 
                className="btn btn-secondary ">
                Edit
              </button>

              <button
                onClick={() => dispatch(deleteModule(module._id))}
                className="btn btn-danger">
                Delete
              </button>

              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
                <p>{module.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </form>
    </>
  );
}
export default ModuleList;