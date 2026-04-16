import { CoverPageData } from "@/lib/types";
import Image from "next/image";

export default function ElegantTemplate({ data }: { data: CoverPageData }) {
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
      {/* Left accent strip */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "8px",
          height: "100%",
          background: "linear-gradient(to bottom, #b45309, #d97706, #f59e0b)",
        }}
      />

      {/* Top-right corner decoration */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "180px",
          height: "180px",
          background:
            "linear-gradient(135deg, #fef3c7 0%, transparent 60%)",
        }}
      />

      <div
        style={{
          padding: "3rem 3.5rem 2.5rem 4rem",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          position: "relative",
          zIndex: 10,
          boxSizing: "border-box",
        }}
      >
        {/* University Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
            marginBottom: "1rem",
          }}
        >
          <Image
            src="/ju-logo.png"
            alt="Jahangirnagar University"
            width={70}
            height={70}
            style={{ objectFit: "contain" }}
          />
          <div>
            <h1
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#78350f",
              }}
            >
              Jahangirnagar University
            </h1>
            <p style={{ fontSize: "0.8rem", color: "#92400e" }}>
              {data.department}
            </p>
          </div>
        </div>

        {/* Gold divider */}
        <div
          style={{
            height: "2px",
            background: "linear-gradient(to right, #d97706, #f59e0b, #d97706)",
            marginBottom: "2rem",
          }}
        />

        {/* Program */}
        <p
          style={{
            fontSize: "0.85rem",
            color: "#92400e",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            fontWeight: 600,
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
        >
          {data.program}
        </p>

        {/* Title block */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <div
            style={{
              display: "inline-block",
              padding: "0 2rem",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-8px",
                left: 0,
                right: 0,
                height: "1px",
                backgroundColor: "#d97706",
              }}
            />
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "bold",
                color: "#1f2937",
                lineHeight: 1.35,
                padding: "0.5rem 0",
              }}
            >
              {data.title}
            </h2>
            <div
              style={{
                position: "absolute",
                bottom: "-8px",
                left: 0,
                right: 0,
                height: "1px",
                backgroundColor: "#d97706",
              }}
            />
          </div>
        </div>

        {/* Course info centered */}
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <p style={{ fontSize: "1rem", color: "#374151" }}>
            {data.courseName}
          </p>
          <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>
            {data.courseCode}
          </p>
        </div>

        <div style={{ flex: 1 }} />

        {/* Submission info - two columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            padding: "1.5rem 0",
            borderTop: "1px solid #fbbf24",
            borderBottom: "1px solid #fbbf24",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                color: "#b45309",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 700,
                marginBottom: "0.6rem",
              }}
            >
              Submitted By
            </p>
            <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "#1f2937" }}>
              {data.studentName}
            </p>
            <p style={{ fontSize: "0.8rem", color: "#4b5563", marginTop: "0.15rem" }}>
              Roll: {data.roll}
            </p>
            {data.regNo && (
              <p style={{ fontSize: "0.8rem", color: "#4b5563", marginTop: "0.15rem" }}>
                Reg: {data.regNo}
              </p>
            )}
            <p style={{ fontSize: "0.8rem", color: "#4b5563", marginTop: "0.15rem" }}>
              {data.enrollment}
              {data.batch ? ` · Batch ${data.batch}` : ""}
            </p>
            {data.section && (
              <p style={{ fontSize: "0.8rem", color: "#4b5563", marginTop: "0.15rem" }}>
                Section: {data.section}
              </p>
            )}
          </div>
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                color: "#b45309",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 700,
                marginBottom: "0.6rem",
              }}
            >
              Submitted To
            </p>
            <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "#1f2937" }}>
              {data.teacherName}
            </p>
            {data.teacherDesignation && (
              <p style={{ fontSize: "0.8rem", color: "#4b5563", marginTop: "0.15rem" }}>
                {data.teacherDesignation}
              </p>
            )}
            <p style={{ fontSize: "0.8rem", color: "#4b5563", marginTop: "0.15rem" }}>
              {data.department}
            </p>
          </div>
        </div>

        {/* Date footer */}
        <p
          style={{
            fontSize: "0.75rem",
            color: "#9ca3af",
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          Date of Submission: {formattedDate}
        </p>
      </div>
    </div>
  );
}
