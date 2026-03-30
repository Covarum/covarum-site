export default function HomePage() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f7f5f2", color: "#1f1f1f" }}>
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px 64px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "48px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontSize: "12px",
                fontWeight: 700,
                color: "#6b6b6b",
                marginBottom: "16px",
              }}
            >
              Covarum
            </p>

            <h1
              style={{
                fontSize: "56px",
                lineHeight: 1.05,
                margin: "0 0 20px",
                fontWeight: 700,
                maxWidth: "700px",
              }}
            >
              You don’t need a perfect plan. You just need the right one.
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.6,
                color: "#4b4b4b",
                maxWidth: "640px",
                marginBottom: "32px",
              }}
            >
              We help individuals, families, and business owners protect what matters
              most with insurance and financial planning that feels clear, personal,
              and built around real life.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="#contact"
                style={{
                  backgroundColor: "#1f1f1f",
                  color: "#ffffff",
                  padding: "16px 24px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: 600,
                  display: "inline-block",
                }}
              >
                Start Here
              </a>

              <a
                href="#services"
                style={{
                  border: "1px solid #1f1f1f",
                  color: "#1f1f1f",
                  padding: "16px 24px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: 600,
                  display: "inline-block",
                }}
              >
                Explore Services
              </a>
            </div>
          </div>

          <div
            style={{
              background: "#d9d4cc",
              borderRadius: "32px",
              minHeight: "460px",
              padding: "32px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.72)",
                backdropFilter: "blur(8px)",
                borderRadius: "24px",
                padding: "24px",
                maxWidth: "360px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <p
                style={{
                  margin: "0 0 10px",
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#6b6b6b",
                  fontWeight: 700,
                }}
              >
                Protection with perspective
              </p>
              <p style={{ margin: 0, fontSize: "18px", lineHeight: 1.6 }}>
                From life insurance to long-term strategy, Covarum helps simplify the
                noise, uncover what’s missing, and create a plan that fits where you
                are now and where you’re headed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        <div style={{ marginBottom: "28px" }}>
          <p
            style={{
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontSize: "12px",
              fontWeight: 700,
              color: "#6b6b6b",
              marginBottom: "12px",
            }}
          >
            Services
          </p>
          <h2 style={{ fontSize: "40px", margin: 0, lineHeight: 1.15 }}>
            Practical guidance. Real protection.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "24px",
          }}
        >
          {[
            {
              title: "Insurance Planning",
              text: "Life, disability, long-term care, and income protection tailored to your real risks and goals.",
            },
            {
              title: "Financial Clarity",
              text: "A simpler view of what you have, what you need, and what may be costing you more than it should.",
            },
            {
              title: "Family + Business Protection",
              text: "Thoughtful planning for the people you love, the income you rely on, and the future you’re building.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                padding: "28px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              }}
            >
              <h3 style={{ fontSize: "24px", marginTop: 0, marginBottom: "14px" }}>{item.title}</h3>
              <p style={{ margin: 0, color: "#4b4b4b", lineHeight: 1.7, fontSize: "17px" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#ece7df",
          padding: "80px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "40px", lineHeight: 1.15, marginTop: 0 }}>
            Life doesn’t always follow a straight path.
          </h2>
          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.7,
              color: "#4b4b4b",
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            Whether you’re planning ahead, protecting your family, or trying to make
            smarter financial decisions, we help you move forward with more clarity
            and less overwhelm.
          </p>
        </div>
      </section>

      <section
        id="contact"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "80px 24px 100px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "40px", lineHeight: 1.15, marginTop: 0 }}>
          Start with a conversation
        </h2>
        <p
          style={{
            fontSize: "19px",
            lineHeight: 1.7,
            color: "#4b4b4b",
            maxWidth: "680px",
            margin: "0 auto 28px",
          }}
        >
          The first step is simple. We’ll learn what matters to you, where things may
          be exposed, and where there may be opportunities to protect more and spend
          smarter.
        </p>

        <a
          href="mailto:tara@covarum.com"
          style={{
            backgroundColor: "#1f1f1f",
            color: "#ffffff",
            padding: "16px 28px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: 600,
            display: "inline-block",
          }}
        >
          Email Covarum
        </a>
      </section>
    </main>
  );
}
