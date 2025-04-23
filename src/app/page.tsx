import Image from "next/image";

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
            src="/online-care/images/hero-image.svg"
            alt="Healthcare professionals providing care"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </main>
  );
}
