import { CoverPageData } from "@/lib/types";
import Image from "next/image";

export default function MinimalTemplate({ data }: { data: CoverPageData }) {
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
        style={{
          padding: "4rem",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Spacer - push content to vertical center */}
        <div style={{ flex: 1 }} />

        {/* Logo centered */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <Image
            src="/ju-logo.png"
            alt="Jahangirnagar University"
            width={80}
            height={80}
            style={{ objectFit: "contain", opacity: 0.85 }}
          />
        </div>

        {/* University name */}
        <p
          style={{
            textAlign: "center",
            fontSize: "0.8rem",
            color: "#9ca3af",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "0.25rem",
          }}
        >
          Jahangirnagar University
        </p>
        <p
          style={{
            textAlign: "center",
            fontSize: "0.7rem",
            color: "#9ca3af",
            marginBottom: "2.5rem",
          }}
        >
          {data.department}
        </p>

        {/* Title - large, centered, clean */}
        <h1
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: 300,
            color: "#111827",
            lineHeight: 1.35,
            marginBottom: "1rem",
            padding: "0 1rem",
          }}
        >
          {data.title}
        </h1>

        {/* Thin divider */}
        <div
          style={{
            width: "3rem",
            height: "1px",
            backgroundColor: "#d1d5db",
            margin: "0 auto 1.5rem",
          }}
        />

        {/* Course and program */}
        <p
          style={{
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#6b7280",
          }}
        >
          {data.courseName} · {data.courseCode}
        </p>
        <p
          style={{
            textAlign: "center",
            fontSize: "0.8rem",
            color: "#9ca3af",
            marginTop: "0.25rem",
          }}
        >
          {data.program}
        </p>

        {/* Spacer */}
        <div style={{ flex: 1.5 }} />

        {/* Bottom section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #e5e7eb",
            paddingTop: "1.5rem",
          }}
        >
          {/* Student */}
          <div>
            <p
              style={{
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#111827",
              }}
            >
              {data.studentName}
            </p>
            <p style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "0.2rem" }}>
              {data.roll}
              {data.regNo ? ` · Reg: ${data.regNo}` : ""}
            </p>
            <p style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "0.1rem" }}>
              {data.enrollment}
              {data.batch ? ` · Batch ${data.batch}` : ""}
            </p>
          </div>

          {/* Teacher */}
          <div style={{ textAlign: "right" }}>
            <p
              style={{
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#111827",
              }}
            >
              {data.teacherName}
            </p>
            {data.teacherDesignation && (
              <p style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "0.2rem" }}>
                {data.teacherDesignation}
              </p>
            )}
          </div>
        </div>

        {/* Date */}
        <p
          style={{
            fontSize: "0.7rem",
            color: "#d1d5db",
            textAlign: "center",
            marginTop: "1.5rem",
          }}
        >
          {formattedDate}
        </p>
      </div>
    </div>
  );
}
