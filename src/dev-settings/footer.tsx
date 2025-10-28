export default function Footer() {
  return (
    <div className="w-full py-6 text-center text-sm text-[var(--text-light)]">
      © {new Date().getFullYear()} Think Simply — All rights reserved.
      <br />
      Designed by{" "}
      <a
        href="https://www.freepik.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Freepik
      </a>
    </div>
  );
}
