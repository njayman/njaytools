import Head from "next/head";
import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {
  title: string;
  description: string;
}

const Layout: FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} – Tools by Njayman` : "Tools by Njayma-n"}
        </title>
        <meta
          name="description"
          content={description || "Free simple tools by Njayman"}
        />
      </Head>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">🧰 Tools by Njayman</h1>
          </div>
        </header>

        <main className="flex-1 max-w-6xl mx-auto px-4 py-8">{children}</main>

        <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
          <div className="space-x-4">
            <Link href="/" className="hover:underline">
              Tools
            </Link>
            <span>•</span>
            <a
              href="https://github.com/njayman"
              target="_blank"
              className="hover:underline"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://njayman.com"
              target="_blank"
              className="hover:underline"
            >
              Website
            </a>
            <span>•</span>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
          </div>
          <div className="mt-2">
            © {new Date().getFullYear()} Njayman — All rights reserved
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
