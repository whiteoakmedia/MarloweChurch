export const revalidate = 30;

export const metadata = {
  title: "Preview",
  robots: { index: false, follow: false },
};

export default function PreviewPage() {
  return (
    <div style={{ padding: "2rem", textAlign: "center", color: "#666" }}>
      <p>Preview mode</p>
    </div>
  );
}
