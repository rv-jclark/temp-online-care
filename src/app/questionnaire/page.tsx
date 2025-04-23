export default function Questionnaire() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-8">Health Questionnaire</h1>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg mb-6">
            Please answer the following questions to help us better understand
            your health needs.
          </p>

          {/* Questionnaire form will be added here */}
          <div className="space-y-6">
            <p className="text-gray-600">Questionnaire form coming soon...</p>
          </div>
        </div>
      </div>
    </main>
  );
}
