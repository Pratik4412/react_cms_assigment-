const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">CMS Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">Total Posts</div>
        <div className="bg-white p-4 shadow rounded">Pages</div>
        <div className="bg-white p-4 shadow rounded">Media</div>
      </div>
    </div>
  );
};

export default Dashboard;
