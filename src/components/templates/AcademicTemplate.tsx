import { CoverPageData } from "@/lib/types";
import Image from "next/image";

export default function AcademicTemplate({ data }: { data: CoverPageData }) {
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
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Top dark header band */}
      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "2rem 3.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "0.5rem",
            padding: "0.4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Image
            src="/ju-logo.png"
            alt="Jahangirnagar University"
            width={60}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div>
          <h1
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "#ffffff",
            }}
          >
            Jahangirnagar University
          </h1>
          <p style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
            {data.department}
          </p>
          <p style={{ fontSize: "0.7rem", color: "#64748b", marginTop: "2px" }}>
            {data.program}
          </p>
        </div>
      </div>

      {/* Red accent line */}
      <div
        style={{
          height: "4px",
          background: "linear-gradient(to right, #dc2626, #ef4444, #dc2626)",
        }}
      />

      <div
        style={{
          padding: "2.5rem 3.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxSizing: "border-box",
        }}
      >
        {/* Course info chips */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              display: "inline-block",
              backgroundColor: "#fee2e2",
              color: "#991b1b",
              padding: "0.3rem 0.75rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
            }}
          >
            {data.courseCode}
          </span>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "#f1f5f9",
              color: "#475569",
              padding: "0.3rem 0.75rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 500,
            }}
          >
            {data.courseName}
          </span>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "#f1f5f9",
              color: "#475569",
              padding: "0.3rem 0.75rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 500,
            }}
          >
            {formattedDate}
          </span>
        </div>

        {/* Title - dominant */}
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            color: "#0f172a",
            lineHeight: 1.2,
            marginBottom: "0.75rem",
          }}
        >
          {data.title}
        </h2>

        {/* Subtitle line */}
        <div
          style={{
            width: "3.5rem",
            height: "4px",
            backgroundColor: "#dc2626",
            borderRadius: "2px",
          }}
        />

        <div style={{ flex: 1, minHeight: "12rem" }} />

        {/* Info cards row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
          }}
        >
          {/* Student card */}
          <div
            style={{
              backgroundColor: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "0.5rem",
              padding: "1.25rem",
              borderLeft: "4px solid #dc2626",
            }}
          >
            <p
              style={{
                fontSize: "0.65rem",
                color: "#64748b",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 700,
                marginBottom: "0.6rem",
              }}
            >
              Submitted By
            </p>
            <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0f172a" }}>
              {data.studentName}
            </p>
            <div style={{ fontSize: "0.78rem", color: "#475569", marginTop: "0.35rem", lineHeight: 1.6 }}>
              <p>Roll: {data.roll}</p>
              {data.regNo && <p>Reg: {data.regNo}</p>}
              <p>
                {data.enrollment}
                {data.batch ? ` · Batch ${data.batch}` : ""}
              </p>
              {data.section && <p>Section: {data.section}</p>}
            </div>
          </div>

          {/* Teacher card */}
          <div
            style={{
              backgroundColor: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "0.5rem",
              padding: "1.25rem",
              borderLeft: "4px solid #1e293b",
            }}
          >
            <p
              style={{
                fontSize: "0.65rem",
                color: "#64748b",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 700,
                marginBottom: "0.6rem",
              }}
            >
              Submitted To
            </p>
            <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0f172a" }}>
              {data.teacherName}
            </p>
            <div style={{ fontSize: "0.78rem", color: "#475569", marginTop: "0.35rem", lineHeight: 1.6 }}>
              {data.teacherDesignation && <p>{data.teacherDesignation}</p>}
              <p>{data.department}</p>
              <p>Jahangirnagar University</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
