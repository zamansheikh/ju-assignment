import { CoverPageData } from "@/lib/types";
import Image from "next/image";

export default function ProjectTemplate({ data }: { data: CoverPageData }) {
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
        style={{ display: "flex", flexDirection: "column" }}
      >
        {/* Double border top */}
        <div style={{ height: "4px", backgroundColor: "#065f46" }} />
        <div style={{ height: "2px", backgroundColor: "white" }} />
        <div style={{ height: "8px", backgroundColor: "#047857" }} />

        <div
          style={{
            padding: "2.5rem 4rem",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          {/* University Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <Image
              src="/ju-logo.png"
              alt="Jahangirnagar University"
              width={80}
              height={80}
              style={{ objectFit: "contain" }}
            />
            <div>
              <h1
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "#064e3b",
                }}
              >
                Jahangirnagar University
              </h1>
              <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                {data.department}
              </p>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#6b7280",
                  marginTop: "2px",
                }}
              >
                {data.program}
              </p>
            </div>
          </div>

          <div
            style={{
              borderBottom: "2px solid #065f46",
              marginBottom: "3rem",
            }}
          />

          {/* Project Title */}
          <div style={{ textAlign: "center", margin: "2rem 0" }}>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#047857",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 600,
                marginBottom: "1rem",
              }}
            >
              Project Report
            </p>
            <h2
              style={{
                fontSize: "1.875rem",
                fontWeight: "bold",
                color: "#111827",
                lineHeight: 1.3,
                padding: "0 2rem",
              }}
            >
              {data.title}
            </h2>
          </div>

          {/* Course info */}
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <p style={{ fontSize: "1rem", color: "#374151" }}>
              {data.courseName} ({data.courseCode})
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#6b7280",
                marginTop: "0.25rem",
              }}
            >
              {formattedDate}
            </p>
          </div>

          <div style={{ flex: 1 }} />

          {/* Author card */}
          <div
            style={{
              maxWidth: "28rem",
              margin: "0 auto 1.5rem",
              width: "100%",
              border: "2px solid #065f46",
              borderRadius: "0.5rem",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                backgroundColor: "#065f46",
                color: "white",
                padding: "0.5rem 1.5rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Submitted By
            </div>
            <div
              style={{
                padding: "1rem 1.5rem",
                fontSize: "0.875rem",
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
            </div>
          </div>

          {/* Teacher card */}
          <div
            style={{
              maxWidth: "28rem",
              margin: "0 auto 2rem",
              width: "100%",
              border: "2px solid #065f46",
              borderRadius: "0.5rem",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                backgroundColor: "#065f46",
                color: "white",
                padding: "0.5rem 1.5rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Submitted To
            </div>
            <div
              style={{
                padding: "1rem 1.5rem",
                fontSize: "0.875rem",
                lineHeight: 1.8,
              }}
            >
              <p>
                <strong>Name: </strong>
                {data.teacherName}
              </p>
              {data.teacherDesignation && (
                <p>
                  <strong>Designation: </strong>
                  {data.teacherDesignation}
                </p>
              )}
              <p>
                <strong>Department: </strong>
                {data.department}
              </p>
            </div>
          </div>
        </div>

        {/* Double border bottom */}
        <div style={{ height: "8px", backgroundColor: "#047857" }} />
        <div style={{ height: "2px", backgroundColor: "white" }} />
        <div style={{ height: "4px", backgroundColor: "#065f46" }} />
      </div>
    </div>
  );
}
