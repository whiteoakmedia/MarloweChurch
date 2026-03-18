import { redirect } from "next/navigation";

export const metadata = {
  title: "Preview",
  robots: { index: false, follow: false },
};

export default function PreviewPage() {
  redirect("/");
}
