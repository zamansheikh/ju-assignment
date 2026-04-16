import { CoverPageData } from "@/lib/types";
import Image from "next/image";

export default function PresentationTemplate({
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
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Top-right decorative circle */}
      <div
        style={{
          position: "absolute",
          top: "-4rem",
          right: "-4rem",
          width: "14rem",
          height: "14rem",
          backgroundColor: "#ede9fe",
          borderRadius: "50%",
          opacity: 0.5,
        }}
      />
      {/* Bottom-left decorative circle */}
      <div
        style={{
          position: "absolute",
          bottom: "-5rem",
          left: "-5rem",
          width: "16rem",
          height: "16rem",
          backgroundColor: "#f5f3ff",
          borderRadius: "50%",
          opacity: 0.5,
        }}
      />

      <div
        style={{
          padding: "2.5rem 3.5rem",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          position: "relative",
          zIndex: 10,
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          <Image
            src="/ju-logo.png"
            alt="Jahangirnagar University"
            width={50}
            height={50}
            style={{ objectFit: "contain" }}
          />
          <div>
            <h2
              style={{
                fontSize: "0.8rem",
                fontWeight: "bold",
                color: "#581c87",
              }}
            >
              Jahangirnagar University
            </h2>
            <p style={{ fontSize: "0.7rem", color: "#6b7280" }}>
              {data.department}
            </p>
          </div>
        </div>

        {/* Presentation title */}
        <div style={{ marginBottom: "1.25rem" }}>
          <p
            style={{
              fontSize: "0.75rem",
              color: "#7c3aed",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontWeight: 600,
              marginBottom: "0.5rem",
            }}
          >
            Presentation
          </p>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#111827",
              lineHeight: 1.25,
            }}
          >
            {data.title}
          </h1>
          <div
            style={{
              width: "4rem",
              height: "3px",
              backgroundColor: "#7c3aed",
              marginTop: "0.75rem",
            }}
          />
        </div>

        {/* Course */}
        <div>
          <p style={{ fontSize: "1rem", color: "#374151" }}>
            {data.courseName}
          </p>
          <p style={{ fontSize: "0.8rem", color: "#6b7280" }}>
            {data.courseCode} · {data.program}
          </p>
        </div>

        <div style={{ flex: 1 }} />

        {/* Bottom info */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                color: "#7c3aed",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontWeight: 600,
                marginBottom: "0.4rem",
              }}
            >
              Presented By
            </p>
            <p style={{ fontSize: "0.9rem", fontWeight: 600 }}>
              {data.studentName}
            </p>
            <p style={{ fontSize: "0.8rem", color: "#4b5563" }}>{data.roll}</p>
            <p style={{ fontSize: "0.8rem", color: "#4b5563" }}>
              {data.enrollment}
              {data.batch ? ` | Batch ${data.batch}` : ""}
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                color: "#7c3aed",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontWeight: 600,
                marginBottom: "0.4rem",
              }}
            >
              Course Teacher
            </p>
            <p style={{ fontSize: "0.9rem", fontWeight: 600 }}>
              {data.teacherName}
            </p>
            {data.teacherDesignation && (
              <p style={{ fontSize: "0.8rem", color: "#4b5563" }}>
                {data.teacherDesignation}
              </p>
            )}
            <p style={{ fontSize: "0.8rem", color: "#4b5563" }}>
              {data.department}
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "1rem",
            paddingTop: "0.75rem",
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <p style={{ fontSize: "0.7rem", color: "#9ca3af" }}>
            {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
}
