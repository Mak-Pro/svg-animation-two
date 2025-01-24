'use client'

export default function PerformanceMetrics() {
  return (
    <section className="h-screen snap-start flex items-center justify-center bg-[#f7f7f7] px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          The Evidence of Our Innovation
        </h2>
        <p className="text-xl text-gray-700 mb-4">
          Rigorous experiments validate the effectiveness of our system:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 shadow-md rounded">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              80% Retrieval Rate
            </h3>
            <p className="text-gray-600">
              Our first and second-stage systems narrow down the patent publication universe to approximately 1,500 documents, containing the IPR primary reference ~80% of the time.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              90%+ Accuracy
            </h3>
            <p className="text-gray-600">
              Human reviews establish over 90% accuracy on selected passages and figures.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              30% Recall on Exact Passages
            </h3>
            <p className="text-gray-600">
              Our limitation mapping solution achieves ~30% recall on exact passages used in IPRs, with ongoing improvements.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Fast, Precise Searching
            </h3>
            <p className="text-gray-600">
              The synergy between human and machine speeds up the search process, enabling quick iterations and precise results.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}