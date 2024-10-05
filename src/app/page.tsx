import Header from "@/components/Header"
import ProjectList from "@/components/ProjectList"

export default function ProjectDirectory() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ProjectList />
        </div>
      </main>
    </div>
  )
}