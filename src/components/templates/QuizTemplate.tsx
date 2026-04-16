import { CoverPageData } from "@/lib/types";
import Image from "next/image";

export default function QuizTemplate({ data }: { data: CoverPageData }) {
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
      <div
        className={`page-${data.pageSize}`}
        style={{
          padding: "3rem 4rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header with border */}
        <div
          style={{
            border: "2px solid #1f2937",
            padding: "2rem",
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
        >
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
              width={100}
              height={100}
              style={{ objectFit: "contain" }}
            />
          </div>
          <h1
            style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#111827" }}
          >
            Jahangirnagar University
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#4b5563",
              marginTop: "0.25rem",
            }}
          >
            {data.department}
          </p>
          <div
            style={{
              marginTop: "1rem",
              borderTop: "1px solid #d1d5db",
              paddingTop: "0.75rem",
            }}
          >
            <p style={{ fontSize: "1.125rem", fontWeight: 600 }}>
              {data.program}
            </p>
          </div>
        </div>

        {/* Quiz title */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span
            style={{
              display: "inline-block",
              borderBottom: "2px solid #1f2937",
              paddingBottom: "0.25rem",
              fontSize: "1.25rem",
              fontWeight: "bold",
            }}
          >
            {data.title}
          </span>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#6b7280",
              marginTop: "0.75rem",
            }}
          >
            Date: {formattedDate}
          </p>
        </div>

        {/* Course info */}
        <div
          style={{
            backgroundColor: "#f9fafb",
            border: "1px solid #e5e7eb",
            borderRadius: "0.25rem",
            padding: "1rem 1.5rem",
            marginBottom: "2rem",
            maxWidth: "28rem",
            margin: "0 auto 2rem",
            width: "100%",
          }}
        >
          <p style={{ fontSize: "0.875rem" }}>
            <strong>Course: </strong>
            {data.courseName}
          </p>
          <p style={{ fontSize: "0.875rem", marginTop: "0.25rem" }}>
            <strong>Code: </strong>
            {data.courseCode}
          </p>
        </div>

        <div style={{ flex: 1 }} />

        {/* Table */}
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
                  backgroundColor: "#f3f4f6",
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
                  backgroundColor: "#f3f4f6",
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
