export default function Loading() {
  return (
    <>
      <div className="p-10">
        <h1 className="text-2xl font-bold">Recent Posts</h1>

        <div className="grid grid-cols-3 gap-5 mt-10">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex gap-5 items-center shadow p-6 rounded-xl bg-mist-800"
            >
              <div className="shimmer-checkbox"></div>

              <div className="shimmer-text"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
