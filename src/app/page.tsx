import Layout from "@njaytools/components/Layout";
import Link from "next/link";

const tools = [
  {
    name: "Word Counter",
    slug: "word-counter",
    description: "Count words and characters instantly.",
  },
  {
    name: "QR Generator",
    slug: "qr-generator",
    description: "Create QR codes with ease.",
  },
];

export default function Home() {
  return (
    <Layout
      title="Free Online Tools"
      description="Minimal, fast and useful tools for everyday tasks."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link href={`/${tool.slug}`} key={tool.slug}>
            <div className="rounded-2xl p-6 shadow bg-white dark:bg-gray-800 hover:shadow-lg transition cursor-pointer">
              <h2 className="text-lg font-semibold">{tool.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {tool.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
