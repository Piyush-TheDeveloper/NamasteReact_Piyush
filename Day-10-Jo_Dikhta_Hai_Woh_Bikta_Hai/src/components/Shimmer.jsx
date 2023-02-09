const Shimmer = () => {
  return (
    <div className='flex flex-wrap mx-6 p-4'>
      {Array(15)
        .fill()
        .map((e, index) => (
          <div className='border border-blue-400 shadow rounded-md p-2 max-w-sm w-80 mx-auto mb-4' key={index}>
            <div class='animate-pulse rounded-lg mb-2 flex space-x-4'>
              <div class='flex-1 space-y-6 py-1'>
                <div class='h-44 bg-slate-400 rounded'></div>
                <div class='space-y-3'>
                  <div class='h-3 w-20 bg-slate-400 rounded'></div>
                  <div class='h-3 bg-slate-400 rounded'></div>
                  <div class='flex justify-between'>
                    <div class='h-3 w-8 bg-slate-400 rounded col-span-2'></div>
                    <div class='h-3 w-8 bg-slate-400 rounded col-span-1'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
