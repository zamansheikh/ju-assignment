import { CoverPageData } from "@/lib/types";
import Image from "next/image";

export default function LabReportTemplate({
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
      <div
        className={`page-${data.pageSize}`}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {/* Top accent bar */}
        <div
          style={{
            height: "12px",
            background: "linear-gradient(to right, #1e40af, #2563eb, #1e40af)",
          }}
        />

        <div
          style={{
            padding: "2.5rem 4rem",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          {/* Logo and University */}
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "0.75rem",
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
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#1e3a5f",
              }}
            >
              Jahangirnagar University
            </h1>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#6b7280",
                marginTop: "0.25rem",
              }}
            >
              {data.department}
            </p>
          </div>

          {/* Divider */}
          <div
            style={{
              borderTop: "2px solid #1e40af",
              width: "12rem",
              margin: "0 auto 2rem",
            }}
          />

          {/* Lab Report Header */}
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#1e3a5f",
                color: "white",
                padding: "0.75rem 2rem",
                fontSize: "1.25rem",
                fontWeight: "bold",
                letterSpacing: "0.05em",
              }}
            >
              LAB REPORT
            </span>
          </div>

          {/* Details */}
          <div
            style={{
              maxWidth: "32rem",
              margin: "0 auto",
              width: "100%",
              fontSize: "1rem",
            }}
          >
            <DetailRow label="Course Name" value={data.courseName} />
            <DetailRow label="Course Code" value={data.courseCode} />
            <DetailRow label="Date of Submission" value={formattedDate} />
          </div>

          <div style={{ flex: 1 }} />

          {/* Student & Teacher info */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              marginTop: "2rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{ borderLeft: "4px solid #1e40af", paddingLeft: "1rem" }}
            >
              <h3
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  color: "#1e3a5f",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "0.75rem",
                }}
              >
                Submitted By
              </h3>
              <p style={{ fontSize: "0.875rem" }}>
                <strong>Name: </strong>
                {data.studentName}
              </p>
              <p style={{ fontSize: "0.875rem", marginTop: "0.25rem" }}>
                <strong>Roll No: </strong>
                {data.roll}
              </p>
              {data.regNo && (
                <p style={{ fontSize: "0.875rem", marginTop: "0.25rem" }}>
                  <strong>Reg No: </strong>
                  {data.regNo}
                </p>
              )}
              <p style={{ fontSize: "0.875rem", marginTop: "0.25rem" }}>
                <strong>Enrollment: </strong>
                {data.enrollment}
              </p>
              {data.batch && (
                <p style={{ fontSize: "0.875rem", marginTop: "0.25rem" }}>
                  <strong>Batch: </strong>
                  {data.batch}
                </p>
              )}
              {data.section && (
                <p style={{ fontSize: "0.875rem", marginTop: "0.25rem" }}>
                  <strong>Section: </strong>
                  {data.section}
                </p>
              )}
            </div>
            <div
              style={{ borderLeft: "4px solid #1e40af", paddingLeft: "1rem" }}
            >
              <h3
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  color: "#1e3a5f",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "0.75rem",
                }}
              >
                Submitted To
              </h3>
              <p style={{ fontSize: "0.875rem" }}>
                <strong>Name: </strong>
                {data.teacherName}
              </p>
              {data.teacherDesignation && (
                <p style={{ fontSize: "0.875rem", marginTop: "0.25rem" }}>
                  <strong>Designation: </strong>
                  {data.teacherDesignation}
                </p>
              )}
              <p style={{ fontSize: "0.875rem", marginTop: "0.25rem" }}>
                <strong>Department: </strong>
                {data.department}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            height: "12px",
            background: "linear-gradient(to right, #1e40af, #2563eb, #1e40af)",
          }}
        />
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{ display: "flex", marginBottom: "0.75rem" }}
    >
      <span style={{ fontWeight: 600, width: "12rem", flexShrink: 0 }}>
        {label}:
      </span>
      <span>{value}</span>
    </div>
  );
}
