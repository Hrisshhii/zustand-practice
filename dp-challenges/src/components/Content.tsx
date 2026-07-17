
const Content = () => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Welcome to My Dashboard</h2>
      <p className="mb-4">Here are your stats for today:</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-2xl font-bold">$1,234</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Revenue</h3>
          <p className="text-2xl font-bold">$12,345</p>
        </div>
      </div>
    </div>
  )
}

export default Content