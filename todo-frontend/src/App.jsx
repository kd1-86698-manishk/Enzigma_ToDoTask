
import 'bootstrap/dist/css/bootstrap.min.css';

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [form, setForm] = useState({
//     id: null,
//     assignedTo: "",
//     status: "",
//     dueDate: "",
//     priority: "",
//     comments: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [taskToDelete, setTaskToDelete] = useState(null);

//   const API_URL = "http://localhost:8080/api/tasks";

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     const res = await axios.get(API_URL);
//     setTasks(res.data);
//   };

//   const handleSave = async () => {
//     if (isEditing) {
//       await axios.put(`${API_URL}/${form.id}`, form);
//     } else {
//       await axios.post(API_URL, form);
//     }
//     setShowModal(false);
//     fetchTasks();
//     resetForm();
//   };

//   const handleDelete = async () => {
//     await axios.delete(`${API_URL}/${taskToDelete}`);
//     fetchTasks();
//     setTaskToDelete(null);
//   };

//   const resetForm = () => {
//     setForm({
//       id: null,
//       assignedTo: "",
//       status: "",
//       dueDate: "",
//       priority: "",
//       comments: "",
//     });
//     setIsEditing(false);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-md shadow-md mt-10 font-sans">
//       <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Tasks</h2>

//       <button
//         className="mb-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
//         onClick={() => setShowModal(true)}
//       >
//         New Task
//       </button>

//       <table className="w-full border-collapse">
//         <thead>
//           <tr className="bg-blue-600 text-white">
//             <th className="py-3 px-4 text-left">Assigned To</th>
//             <th className="py-3 px-4 text-left">Status</th>
//             <th className="py-3 px-4 text-left">Due Date</th>
//             <th className="py-3 px-4 text-left">Priority</th>
//             <th className="py-3 px-4 text-left">Comments</th>
//             <th className="py-3 px-4 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.map((t) => (
//             <tr key={t.id} className="border-b hover:bg-gray-100">
//               <td className="py-2 px-4">{t.assignedTo}</td>
//               <td className="py-2 px-4">{t.status}</td>
//               <td className="py-2 px-4">{t.dueDate}</td>
//               <td className="py-2 px-4">{t.priority}</td>
//               <td className="py-2 px-4">{t.comments}</td>
//               <td className="py-2 px-4 space-x-2">
//                 <button
//                   className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded text-sm transition duration-300"
//                   onClick={() => {
//                     setForm(t);
//                     setIsEditing(true);
//                     setShowModal(true);
//                   }}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded text-sm transition duration-300"
//                   onClick={() => setTaskToDelete(t.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal for Add/Edit */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//           <div className="bg-white rounded-md shadow-lg w-96 p-6">
//             <h3 className="text-xl font-semibold mb-4">
//               {isEditing ? "Edit Task" : "New Task"}
//             </h3>

//             <div className="mb-4">
//               <label className="block text-gray-700 font-medium mb-1">Assigned To</label>
//               <input
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="User 1"
//                 value={form.assignedTo}
//                 onChange={(e) => setForm({ ...form, assignedTo: e.target.value })}
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 font-medium mb-1">Status</label>
//               <input
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Not started"
//                 value={form.status}
//                 onChange={(e) => setForm({ ...form, status: e.target.value })}
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 font-medium mb-1">Due Date</label>
//               <input
//                 type="date"
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={form.dueDate}
//                 onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 font-medium mb-1">Priority</label>
//               <input
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Normal"
//                 value={form.priority}
//                 onChange={(e) => setForm({ ...form, priority: e.target.value })}
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 font-medium mb-1">Comments</label>
//               <input
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Comments"
//                 value={form.comments}
//                 onChange={(e) => setForm({ ...form, comments: e.target.value })}
//               />
//             </div>

//             <div className="flex justify-end space-x-3">
//               <button
//                 className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded transition duration-300"
//                 onClick={handleSave}
//               >
//                 Save
//               </button>
//               <button
//                 className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-5 rounded transition duration-300"
//                 onClick={() => {
//                   setShowModal(false);
//                   resetForm();
//                 }}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Delete confirmation modal */}
//       {taskToDelete && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//           <div className="bg-white rounded-md shadow-lg w-80 p-6 text-center">
//             <p className="mb-5 text-lg">Are you sure you want to delete this task?</p>
//             <div className="flex justify-center space-x-4">
//               <button
//                 className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded transition duration-300"
//                 onClick={handleDelete}
//               >
//                 Yes
//               </button>
//               <button
//                 className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-6 rounded transition duration-300"
//                 onClick={() => setTaskToDelete(null)}
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
// // **********************************************************************************************

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [form, setForm] = useState({
//     id: null,
//     assignedTo: "",
//     status: "",
//     dueDate: "",
//     priority: "",
//     comments: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [taskToDelete, setTaskToDelete] = useState(null);

//   const API_URL = "http://localhost:8080/api/tasks";

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     const res = await axios.get(API_URL);
//     setTasks(res.data);
//   };

//   const handleSave = async () => {
//     if (isEditing) {
//       await axios.put(`${API_URL}/${form.id}`, form);
//     } else {
//       await axios.post(API_URL, form);
//     }
//     setShowModal(false);
//     fetchTasks();
//     resetForm();
//   };

//   const handleDelete = async () => {
//     await axios.delete(`${API_URL}/${taskToDelete}`);
//     fetchTasks();
//     setTaskToDelete(null);
//   };

//   const resetForm = () => {
//     setForm({
//       id: null,
//       assignedTo: "",
//       status: "",
//       dueDate: "",
//       priority: "",
//       comments: "",
//     });
//     setIsEditing(false);
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4 text-center text-primary">Tasks</h2>

//       <button
//         className="btn btn-warning mb-3"
//         onClick={() => setShowModal(true)}
//       >
//         New Task
//       </button>

//       <table className="table table-dark table-striped table-hover">
//         <thead>
//           <tr>
//             <th>Assigned To</th>
//             <th>Status</th>
//             <th>Due Date</th>
//             <th>Priority</th>
//             <th>Comments</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.map((t) => (
//             <tr key={t.id}>
//               <td>{t.assignedTo}</td>
//               <td>{t.status}</td>
//               <td>{t.dueDate}</td>
//               <td>{t.priority}</td>
//               <td>{t.comments}</td>
//               <td>
//                 <button
//                   className="btn btn-sm btn-outline-warning me-2"
//                   onClick={() => {
//                     setForm(t);
//                     setIsEditing(true);
//                     setShowModal(true);
//                   }}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="btn btn-sm btn-outline-danger"
//                   onClick={() => setTaskToDelete(t.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal for Add/Edit */}
//       {showModal && (
//         <div
//           className="modal show d-block"
//           tabIndex="-1"
//           role="dialog"
//           aria-modal="true"
//           aria-labelledby="modalLabel"
//         >
//           <div className="modal-dialog" role="document">
//             <div className="modal-content bg-dark text-light">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="modalLabel">
//                   {isEditing ? "Edit Task" : "New Task"}
//                 </h5>
//                 <button
//                   type="button"
//                   className="btn-close btn-close-white"
//                   onClick={() => {
//                     setShowModal(false);
//                     resetForm();
//                   }}
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <form>
//                   <div className="mb-3">
//                     <label className="form-label">Assigned To</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="User 1"
//                       value={form.assignedTo}
//                       onChange={(e) =>
//                         setForm({ ...form, assignedTo: e.target.value })
//                       }
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Status</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Not started"
//                       value={form.status}
//                       onChange={(e) =>
//                         setForm({ ...form, status: e.target.value })
//                       }
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Due Date</label>
//                     <input
//                       type="date"
//                       className="form-control"
//                       value={form.dueDate}
//                       onChange={(e) =>
//                         setForm({ ...form, dueDate: e.target.value })
//                       }
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Priority</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Normal"
//                       value={form.priority}
//                       onChange={(e) =>
//                         setForm({ ...form, priority: e.target.value })
//                       }
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Comments</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Comments"
//                       value={form.comments}
//                       onChange={(e) =>
//                         setForm({ ...form, comments: e.target.value })
//                       }
//                     />
//                   </div>
//                 </form>
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-warning"
//                   onClick={handleSave}
//                 >
//                   Save
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={() => {
//                     setShowModal(false);
//                     resetForm();
//                   }}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Delete confirmation modal */}
//       {taskToDelete && (
//         <div
//           className="modal show d-block"
//           tabIndex="-1"
//           role="dialog"
//           aria-modal="true"
//           aria-labelledby="deleteModalLabel"
//         >
//           <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
//             <div className="modal-content bg-dark text-light">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="deleteModalLabel">
//                   Confirm Delete
//                 </h5>
//                 <button
//                   type="button"
//                   className="btn-close btn-close-white"
//                   onClick={() => setTaskToDelete(null)}
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <p>Are you sure you want to delete this task?</p>
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-danger"
//                   onClick={handleDelete}
//                 >
//                   Yes
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={() => setTaskToDelete(null)}
//                 >
//                   No
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    id: null,
    assignedTo: "",
    status: "",
    dueDate: "",
    priority: "",
    comments: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const API_URL = "http://localhost:8080/api/tasks";

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get(API_URL);
    setTasks(res.data);
  };

  const handleSave = async () => {
    if (isEditing) {
      await axios.put(`${API_URL}/${form.id}`, form);
    } else {
      await axios.post(API_URL, form);
    }
    setShowModal(false);
    fetchTasks();
    resetForm();
  };

  const handleDelete = async () => {
    await axios.delete(`${API_URL}/${taskToDelete}`);
    fetchTasks();
    setTaskToDelete(null);
  };

  const resetForm = () => {
    setForm({
      id: null,
      assignedTo: "",
      status: "",
      dueDate: "",
      priority: "",
      comments: "",
    });
    setIsEditing(false);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-primary">Tasks</h2>

      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowModal(true)}
      >
        New Task
      </button>

      <table className="table table-striped table-hover">
        <thead className="table-light">
          <tr>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => (
            <tr key={t.id}>
              <td>{t.assignedTo}</td>
              <td>{t.status}</td>
              <td>{t.dueDate}</td>
              <td>{t.priority}</td>
              <td>{t.comments}</td>
              <td>
                <button
                  className="btn btn-sm btn-outline-primary me-2"
                  onClick={() => {
                    setForm(t);
                    setIsEditing(true);
                    setShowModal(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => setTaskToDelete(t.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Add/Edit */}
      {showModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalLabel"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalLabel">
                  {isEditing ? "Edit Task" : "New Task"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Assigned To</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="User 1"
                      value={form.assignedTo}
                      onChange={(e) =>
                        setForm({ ...form, assignedTo: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Not started"
                      value={form.status}
                      onChange={(e) =>
                        setForm({ ...form, status: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Due Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={form.dueDate}
                      onChange={(e) =>
                        setForm({ ...form, dueDate: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Priority</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Normal"
                      value={form.priority}
                      onChange={(e) =>
                        setForm({ ...form, priority: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Comments</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Comments"
                      value={form.comments}
                      onChange={(e) =>
                        setForm({ ...form, comments: e.target.value })
                      }
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirmation modal */}
      {taskToDelete && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          aria-modal="true"
          aria-labelledby="deleteModalLabel"
        >
          <div
            className="modal-dialog modal-sm modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteModalLabel">
                  Confirm Delete
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setTaskToDelete(null)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this task?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDelete}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setTaskToDelete(null)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
