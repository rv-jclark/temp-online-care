import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold">Welcome to Temp Online Care</h1>
        <p className="mt-4 text-xl">
          Your trusted platform for online care services
        </p>

        <div className="mt-8 relative w-full h-96">
          <Image
            src={`${process.env.NEXT_PUBLIC_PROJECT_ROOT}/images/hero-image.svg`}
            alt="Healthcare professionals providing care"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/questionnaire"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Health Questionnaire
          </Link>
        </div>
      </div>
    </main>
  );
}
