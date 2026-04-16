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
      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "16rem",
          height: "16rem",
          backgroundColor: "#ede9fe",
          borderRadius: "50%",
          transform: "translate(33%, -33%)",
          opacity: 0.6,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "20rem",
          height: "20rem",
          backgroundColor: "#f5f3ff",
          borderRadius: "50%",
          transform: "translate(-33%, 33%)",
          opacity: 0.6,
        }}
      />

      <div
        className={`page-${data.pageSize}`}
        style={{
          padding: "3rem 4rem",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "4rem",
          }}
        >
          <Image
            src="/ju-logo.png"
            alt="Jahangirnagar University"
            width={60}
            height={60}
            style={{ objectFit: "contain" }}
          />
          <div>
            <h2
              style={{
                fontSize: "0.875rem",
                fontWeight: "bold",
                color: "#581c87",
              }}
            >
              Jahangirnagar University
            </h2>
            <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>
              {data.department}
            </p>
          </div>
        </div>

        {/* Presentation title */}
        <div style={{ marginBottom: "1.5rem" }}>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#7c3aed",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 600,
              marginBottom: "0.5rem",
            }}
          >
            Presentation
          </p>
          <h1
            style={{
              fontSize: "2.25rem",
              fontWeight: "bold",
              color: "#111827",
              lineHeight: 1.2,
            }}
          >
            {data.title}
          </h1>
          <div
            style={{
              width: "5rem",
              height: "4px",
              backgroundColor: "#7c3aed",
              marginTop: "1rem",
            }}
          />
        </div>

        {/* Course */}
        <div style={{ marginBottom: "1rem" }}>
          <p style={{ fontSize: "1.125rem", color: "#374151" }}>
            {data.courseName}
          </p>
          <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
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
                fontSize: "0.75rem",
                color: "#7c3aed",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}
            >
              Presented By
            </p>
            <p style={{ fontSize: "1rem", fontWeight: 600 }}>
              {data.studentName}
            </p>
            <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>
              {data.roll}
            </p>
            <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>
              {data.enrollment}
              {data.batch ? ` | Batch ${data.batch}` : ""}
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                color: "#7c3aed",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}
            >
              Course Teacher
            </p>
            <p style={{ fontSize: "1rem", fontWeight: 600 }}>
              {data.teacherName}
            </p>
            {data.teacherDesignation && (
              <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                {data.teacherDesignation}
              </p>
            )}
            <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>
              {data.department}
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "1.5rem",
            paddingTop: "1rem",
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
            {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
}
