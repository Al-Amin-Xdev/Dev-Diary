import Link from "next/link";


const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid min-h-screen grid-cols-12">
        
        <aside className="col-span-12 bg-white p-5 shadow-lg md:col-span-3 lg:col-span-2">
  <h2 className="mb-8 text-2xl font-bold text-gray-800">
    Dashboard
  </h2>

  <nav className="space-y-3 text-black">
    <Link
      href="/dashboard/navigation"
      className="block rounded-lg px-4 py-3 font-semibold text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
    >
      Navigation
    </Link>

    <Link
      href="/dashboard/add-stody"
      className="block rounded-lg px-4 py-3 font-semibold text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
    >
      Add Story
    </Link>

    <Link
      href="/dashboard/My-Profile"
      className="block rounded-lg px-4 py-3 font-semibold text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
    >
      My Profile
    </Link>
  </nav>
</aside>

        {/* Dashboard Content */}
        <main className="col-span-12 min-w-0 p-4 md:col-span-9 md:p-8 lg:col-span-10">
          {children}
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;