export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        body > header,
        header.fixed,
        nav.fixed,
        body > footer,
        footer.bg-church-dark,
        #main-content ~ footer {
          display: none !important;
        }
        #main-content {
          padding-top: 0 !important;
          min-height: auto !important;
        }
      `}</style>
      {children}
    </>
  );
}
