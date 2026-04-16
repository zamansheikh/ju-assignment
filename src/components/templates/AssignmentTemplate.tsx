import { CoverPageData } from "@/lib/types";
import Image from "next/image";

export default function AssignmentTemplate({
  data,
}: {
  data: CoverPageData;
}) {
  const formattedDate = data.assignmentDate
    ? new Date(data.assignmentDate).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "";

  return (
    <div
      className={`page-${data.pageSize} bg-white mx-auto cover-page border border-gray-300 shadow-lg`}
    >
      <div className={`px-16 py-12 flex flex-col page-${data.pageSize}`}>
        {/* Logo and University Name */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <Image
              src="/ju-logo.png"
              alt="Jahangirnagar University"
              width={120}
              height={120}
              style={{ objectFit: "contain" }}
            />
          </div>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#065f46",
              fontStyle: "italic",
            }}
          >
            Jahangirnagar University
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#4b5563",
              fontStyle: "italic",
              marginTop: "0.25rem",
            }}
          >
            {data.department}
          </p>
        </div>

        {/* Program */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p style={{ fontSize: "1.125rem", fontWeight: 600 }}>
            {data.program}
          </p>
        </div>

        {/* Assignment Info */}
        <div style={{ marginBottom: "2rem" }}>
          <p style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>
            <span style={{ fontWeight: 600 }}>Assignment Title: </span>
            {data.title}
          </p>
          <p style={{ fontSize: "1rem" }}>
            <span style={{ fontWeight: 600 }}>Assignment Date: </span>
            {formattedDate}
          </p>
        </div>

        <div style={{ flex: 1 }} />

        {/* Submission Table */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.875rem",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid #9ca3af",
                  padding: "0.5rem 1rem",
                  backgroundColor: "#f9fafb",
                  textAlign: "left",
                  width: "50%",
                }}
              >
                Submitted By
              </th>
              <th
                style={{
                  border: "1px solid #9ca3af",
                  padding: "0.5rem 1rem",
                  backgroundColor: "#f9fafb",
                  textAlign: "left",
                  width: "50%",
                }}
              >
                Submitted To
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  border: "1px solid #9ca3af",
                  padding: "1rem",
                  verticalAlign: "top",
                  lineHeight: 1.8,
                }}
              >
                <p>
                  <strong>Name: </strong>
                  {data.studentName}
                </p>
                <p>
                  <strong>Roll No: </strong>
                  {data.roll}
                </p>
                {data.regNo && (
                  <p>
                    <strong>Reg No: </strong>
                    {data.regNo}
                  </p>
                )}
                <p>
                  <strong>Enrollment: </strong>
                  {data.enrollment}
                </p>
                {data.batch && (
                  <p>
                    <strong>Batch: </strong>
                    {data.batch}
                  </p>
                )}
                {data.section && (
                  <p>
                    <strong>Section: </strong>
                    {data.section}
                  </p>
                )}
              </td>
              <td
                style={{
                  border: "1px solid #9ca3af",
                  padding: "1rem",
                  verticalAlign: "top",
                  lineHeight: 1.8,
                }}
              >
                <p>
                  <strong>Course Teacher: </strong>
                  {data.teacherName}
                </p>
                {data.teacherDesignation && (
                  <p>
                    <strong>Designation: </strong>
                    {data.teacherDesignation}
                  </p>
                )}
                <p>
                  <strong>Course Name: </strong>
                  {data.courseName}
                </p>
                <p>
                  <strong>Course Code: </strong>
                  {data.courseCode}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
